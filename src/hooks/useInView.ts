import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.2 },
  once = true,
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const optionsRef = useRef(options);

  useEffect(() => {
    const element = ref.current;
    if (!element || (once && inView)) return;

    let rafId = 0;
    let cleaned = false;
    const listenerOptions = { passive: true } as AddEventListenerOptions;

    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      window.removeEventListener("scroll", onScroll, listenerOptions);
      window.removeEventListener("resize", onScroll, listenerOptions);
      cancelAnimationFrame(rafId);
    };

    const checkBounds = () => {
      if (!element || cleaned) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        setInView(true);
        cleanup();
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkBounds);
    };

    window.addEventListener("scroll", onScroll, listenerOptions);
    window.addEventListener("resize", onScroll, listenerOptions);

    // IntersectionObserver is preferred when available
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            cleanup();
          } else if (!once) {
            setInView(false);
          }
        },
        optionsRef.current,
      );
      observer.observe(element);
    }

    checkBounds();

    return () => {
      observer?.disconnect();
      cleanup();
    };
  }, [once, inView]);

  return { ref, inView };
}
