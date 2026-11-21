const mobileQuery = "(width < 900px)";
const motionQuery = "(prefers-reduced-motion: reduce)";
const storyboard = [
  "s1",
  "s2",
  "s3",
  "s4",
  "s5",
  "b-focus",
  "scan-on",
  "d-con",
  "p-land",
  "i-land",
  "c-1",
  "c-2",
  "c-3",
  "spin",
  "y-1",
  "y-2",
  "y-3",
];
const activeStages = ["at-1", "at-2", "at-3", "at-4", "at-5"];

function fitScene(hero: HTMLElement, canvas: HTMLElement, copy: HTMLElement) {
  const width = hero.clientWidth;
  if (!width) return;

  const set = (name: string, value: number, unit = "px") =>
    canvas.style.setProperty(`--${name}`, `${value}${unit}`);

  if (width >= 1440) {
    set("scale", width / 1440, "");
    return;
  }

  if (width >= 900) {
    const designScale = 1440 / 2560;
    const height = canvas.offsetHeight;
    const backgroundScale = Math.max(width / 2560, height / 1440);
    const cropX = 2560 * backgroundScale - width;
    const cropY = (1440 * backgroundScale - height) / 2;
    const backgroundRatio = backgroundScale / designScale;
    const sceneLeft = canvas.getBoundingClientRect().left;
    const range = document.createRange();
    const rightEdges = [...copy.querySelectorAll("h1, .lead, .btn")].flatMap((element) => {
      if (element.matches(".btn")) return [element.getBoundingClientRect().right];
      range.selectNodeContents(element);
      return [...range.getClientRects()].map((rect) => rect.right);
    });
    const textRight = Math.max(...rightEdges) - sceneLeft;
    const gap = Math.max(28, width * 0.028);
    const cardScale = Math.max(0.35, Math.min(backgroundRatio, (width - textRight - gap) / 718));
    const y = Math.max(70 - 112 * cardScale, 480 * backgroundRatio - cropY - 480 * cardScale);

    set("tx", width - 1440 * cardScale);
    set("ty", y);
    set("kc", cardScale, "");
    set("fluid-kb", backgroundRatio, "");
    set("c1a", Math.min(1.15, Math.max(1, 0.72 / cardScale)), "");
    set("fluid-sun-x", 1212 * backgroundScale - cropX);
    set("fluid-sun-y", 970 * backgroundScale - cropY);
    return;
  }

  const sea = 150 * 0.55;
  const height = canvas.offsetHeight;
  const aspect = 1080 / 1920;
  const backgroundHeight = Math.max((height - sea) / 0.737, width / aspect);
  set("bg-h", backgroundHeight);
  set("bg-b", sea - backgroundHeight * (1 - 0.737));
  set("mobile-sun-x", width - backgroundHeight * aspect * (1 - 0.532));
  set("mobile-sun-y", height - sea);
}

export function mountHorizonte(hero: HTMLElement) {
  const canvas = hero.querySelector<HTMLElement>(".canvas");
  const copy = hero.querySelector<HTMLElement>(".copy");
  const stage = hero.querySelector<HTMLElement>(".stage");
  const stageScroll = hero.querySelector<HTMLElement>(".stage-scroll");
  const stageInner = hero.querySelector<HTMLElement>(".stage-in");
  const flyer = hero.querySelector<HTMLElement>(".flyer");
  const replay = hero.querySelector<HTMLButtonElement>(".replay");
  const contact = hero.querySelector<HTMLElement>(".row-con .ico");
  const priority = hero.querySelector<HTMLElement>(".lns .l1");
  const solution = hero.querySelector<HTMLElement>(".c3 .badge");
  const cards = Array.from(hero.querySelectorAll<HTMLElement>(".c2, .c3, .c4")).reverse();
  if (
    !canvas ||
    !copy ||
    !stage ||
    !stageScroll ||
    !stageInner ||
    !flyer ||
    !replay ||
    !contact ||
    !priority ||
    !solution ||
    cards.length !== 3
  )
    return;

  const rows = [...stage.querySelectorAll<HTMLElement>(".row")];
  const [prioritizeCard, implementCard, followUpCard] = cards;
  const mobile = window.matchMedia(mobileQuery);
  const reduced = window.matchMedia(motionQuery);
  const canAnimate = typeof flyer.animate === "function";
  const timers = new Set<number>();
  const frames = new Set<number>();
  let observer: IntersectionObserver | undefined;
  let flight: Animation | undefined;
  let showing = false;
  let scheduled = false;
  let started = false;
  let visibleEnough = false;
  let disposed = false;

  const after = (delay: number, callback: () => void) => {
    const timer = window.setTimeout(() => {
      timers.delete(timer);
      callback();
    }, delay);
    timers.add(timer);
  };

  const nextFrame = (callback: () => void) => {
    const frame = window.requestAnimationFrame(() => {
      frames.delete(frame);
      callback();
    });
    frames.add(frame);
  };

  const clearMotion = () => {
    timers.forEach((timer) => window.clearTimeout(timer));
    timers.clear();
    frames.forEach((frame) => window.cancelAnimationFrame(frame));
    frames.clear();
    flight?.cancel();
  };

  const scanTo = (index: number) => {
    stage.style.setProperty("--sy", index < 0 ? "1" : String(index));
    rows.forEach((row, rowIndex) => row.classList.toggle("reading", rowIndex === index));
  };

  const panTo = (card?: HTMLElement) => {
    let translate = 0;
    if (mobile.matches && card) {
      const scale = parseFloat(getComputedStyle(card).getPropertyValue("--as")) || 1;
      const extra = (card.offsetWidth * (scale - 1)) / 2 + 6;
      const left = stageInner.offsetLeft + card.offsetLeft - extra;
      const right = left + card.offsetWidth + 2 * extra;
      const margin = 14;
      translate = Math.max(margin - left, Math.min(0, stage.clientWidth - margin - right));
    }
    stageInner.style.setProperty("--pan", `${translate}px`);
  };

  const showReplay = (enabled: boolean) => {
    replay.hidden = !enabled;
    replay.classList.toggle("show", enabled);
    replay.removeAttribute("aria-disabled");
  };

  const finishImmediately = () => {
    clearMotion();
    showing = scheduled = false;
    started = true;
    stage.classList.add("no-tr");
    stage.classList.remove(...activeStages, "out");
    stage.classList.add(...storyboard);
    hero.classList.remove("playing", "anim");
    scanTo(-1);
    panTo();
    void stage.offsetWidth;
    stage.classList.remove("no-tr");
    showReplay(canAnimate && !reduced.matches);
  };

  const position = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const bounds = stageInner.getBoundingClientRect();
    const scale = bounds.width / stageInner.offsetWidth || 1;
    return {
      x: (rect.left - bounds.left + rect.width / 2) / scale,
      y: (rect.top - bounds.top + rect.height / 2) / scale,
    };
  };

  const fly = (from: HTMLElement, to: HTMLElement, duration: number, landed: string) => {
    const a = position(from);
    const b = position(to);
    const width = flyer.offsetWidth;
    const height = flyer.offsetHeight;
    const apex = Math.min(a.y, b.y) - (mobile.matches ? 26 : 46);
    const pose = (x: number, y: number, scale: number) =>
      `translate(${x - width / 2}px, ${y - height / 2}px) scale(${scale})`;

    flight?.cancel();
    flight = flyer.animate(
      [
        { transform: pose(a.x + width / 2 - 14, a.y, 0.92), opacity: 0 },
        { transform: pose(a.x + width / 2 - 14, a.y, 1), opacity: 1, offset: 0.14 },
        { transform: pose((a.x + b.x) / 2 + width / 4, apex, 1), opacity: 1, offset: 0.56 },
        { transform: pose(b.x, b.y, 0.82), opacity: 1, offset: 0.86 },
        { transform: pose(b.x, b.y, 0.78), opacity: 0 },
      ],
      { duration, easing: "cubic-bezier(.45,0,.25,1)" },
    );
    after(duration * 0.84, () => stage.classList.add(landed));
  };

  const play = () => {
    if (reduced.matches || document.hidden) return finishImmediately();

    scheduled = false;
    showing = true;
    stageScroll.scrollLeft = 0;
    stage.classList.add("no-tr");
    stage.classList.remove(...storyboard, ...activeStages);
    hero.classList.add("anim", "playing");
    scanTo(-1);
    panTo();
    const add = (...states: string[]) => stage.classList.add(...states);
    const activate = (previous: string, reached: string, now: string, card?: HTMLElement) => {
      stage.classList.remove(previous);
      add(reached, now);
      panTo(card);
    };

    void stage.offsetWidth;
    nextFrame(() => nextFrame(() => stage.classList.remove("no-tr", "out")));
    const cameraDelay = mobile.matches ? 1150 : 700;

    // Entender y Diagnosticar comparten la tarjeta principal.
    after(120, () => add("s1", "at-1"));
    after(1300, () => add("b-focus"));
    after(2500, () => activate("at-1", "s2", "at-2"));
    after(3250, () => {
      scanTo(0);
      add("scan-on");
    });
    after(3800, () => scanTo(1));
    after(4350, () => scanTo(2));
    after(4950, () => scanTo(1));
    after(5250, () => add("d-con"));

    // La misma oportunidad viaja primero a la decisión y luego a la conversación.
    after(6100, () => {
      activate("at-2", "s3", "at-3", prioritizeCard);
      scanTo(-1);
    });
    after(6100 + cameraDelay, () => fly(contact, priority, 1050, "p-land"));
    after(8900, () => activate("at-3", "s4", "at-4", implementCard));
    after(8900 + cameraDelay, () => fly(priority, solution, 950, "i-land"));
    after(10950, () => add("c-1"));
    after(11450, () => add("c-2"));
    after(12150, () => add("c-3"));

    after(12900, () => activate("at-4", "s5", "at-5", followUpCard));
    after(13250, () => add("spin"));
    after(13450, () => add("y-1"));
    after(13950, () => add("y-2"));
    after(14450, () => add("y-3"));
    after(15300, () => {
      stage.classList.remove("at-5");
      panTo();
    });
    after(16300, () => {
      showing = false;
      hero.classList.remove("playing", "anim");
      showReplay(true);
    });
  };

  const replayStory = () => {
    if (showing || scheduled || reduced.matches) return;
    scheduled = true;
    replay.setAttribute("aria-disabled", "true");
    replay.classList.remove("show");
    stage.classList.add("out");
    after(380, play);
  };

  const start = () => {
    if (started || document.hidden || !visibleEnough) return;
    started = scheduled = true;
    observer?.disconnect();
    let queued = false;
    const queuePlayback = () => {
      if (queued || !scheduled || disposed) return;
      queued = true;
      after(300, play);
    };

    if (document.fonts) {
      void document.fonts.ready.then(queuePlayback);
      after(1200, queuePlayback);
    } else {
      queuePlayback();
    }
  };

  const onVisibility = () => {
    if (document.hidden && (showing || scheduled)) finishImmediately();
    if (!document.hidden && canAnimate && !reduced.matches) start();
  };

  const onMotionPreference = () => {
    observer?.disconnect();
    finishImmediately();
  };

  const fit = () => {
    if (!disposed) {
      fitScene(hero, canvas, copy);
      stageScroll.tabIndex =
        mobile.matches && stageScroll.scrollWidth > stageScroll.clientWidth ? 0 : -1;
    }
  };
  fit();
  const sizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(fit) : undefined;
  sizeObserver?.observe(hero);
  sizeObserver?.observe(copy);
  window.addEventListener("resize", fit);
  void document.fonts?.ready.then(fit);
  replay.addEventListener("click", replayStory);
  document.addEventListener("visibilitychange", onVisibility);
  reduced.addEventListener("change", onMotionPreference);

  if (canAnimate && !reduced.matches) {
    if (typeof IntersectionObserver === "function") {
      const threshold = mobile.matches
        ? Math.min(0.97, (window.innerHeight * 0.8) / stage.offsetHeight)
        : 0.5;
      observer = new IntersectionObserver(
        (entries) => {
          visibleEnough = entries.some(
            (entry) => entry.isIntersecting && entry.intersectionRatio >= threshold,
          );
          start();
        },
        { threshold, rootMargin: mobile.matches ? "0px 0px -8%" : "0px" },
      );
      observer.observe(stage);
    } else {
      visibleEnough = true;
      start();
    }
  }

  return () => {
    disposed = true;
    clearMotion();
    observer?.disconnect();
    sizeObserver?.disconnect();
    window.removeEventListener("resize", fit);
    replay.removeEventListener("click", replayStory);
    document.removeEventListener("visibilitychange", onVisibility);
    reduced.removeEventListener("change", onMotionPreference);
    hero.classList.remove("anim", "playing");
    stage.classList.remove("no-tr", "out", ...activeStages, ...storyboard);
    panTo();
    showReplay(false);
  };
}
