import logoEleva360 from "../assets/LogoEleva360-transparente.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Instagram,
  Facebook,
  MapPin,
  MessageCircle,
  Menu,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Users,
  Zap,
  Bot,
  Search,
  BarChart3,
  ShieldCheck,
  HeartHandshake,
  Target,
  Clock,
  X,
  Layers,
  Workflow,
  LineChart,
  ShoppingCart,
  CalendarCheck,
  Cpu,
  LayoutDashboard,
  Globe,
  Rocket,
  Wrench,
  Gauge,
  QrCode,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";
import heroBuilding from "../assets/hero-building.png";
import heroImage from "../assets/hero-eleva360.png";

const WHATSAPP_URL =
  "https://wa.me/56966645919?text=Hola%20Eleva360%2C%20quiero%20un%20diagn%C3%B3stico%20gratuito%20para%20mi%20negocio";

/* ————— Motion helpers ————— */
function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: React.ReactNode;
  as?: any;
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom";
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 }, true);
  const visibleCls =
    variant === "left"
      ? "reveal-left-visible"
      : variant === "right"
      ? "reveal-right-visible"
      : variant === "zoom"
      ? "reveal-zoom-visible"
      : "reveal-visible";
  return (
    <Tag
      ref={ref as any}
      style={{ animationDelay: `${delay}ms` }}
      className={`reveal ${inView ? visibleCls : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

function SpotlightCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <div ref={ref} onMouseMove={handleMove} style={style} className={`spotlight ${className}`}>
      <div className="spotlight-glow" aria-hidden />
      {children}
    </div>
  );
}

function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 }, true);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

function IndustryMarquee() {
  const items = [
    "Restaurantes", "Cafeterías", "Peluquerías", "Barberías", "Clínicas dentales",
    "Talleres mecánicos", "Veterinarias", "Gimnasios", "Panaderías", "Farmacias",
    "Estudios de tatuajes", "Escuelas de manejo", "Ferreterías", "Notarías",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-white/60 py-4 backdrop-blur-sm">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Eleva360 — Soluciones digitales para hacer crecer tu negocio" },
      {
        name: "description",
        content:
          "Eleva360 implementa soluciones digitales que atraen más clientes, automatizan procesos y mejoran la experiencia. Tú te enfocas en tu negocio, nosotros en su presencia digital.",
      },
      { name: "keywords", content: "Soluciones digitales, tecnología para negocios, automatización, presencia digital, transformación digital, Chile" },
      { property: "og:title", content: "Eleva360 — Soluciones digitales para hacer crecer tu negocio" },
      { property: "og:description", content: "Implementamos soluciones digitales que atraen más clientes, automatizan procesos y mejoran la experiencia. Concéntrate en tu negocio, del resto nos encargamos nosotros." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Eleva360 — Soluciones digitales para hacer crecer tu negocio" },
      { name: "twitter:description", content: "Implementamos soluciones digitales que atraen más clientes, automatizan procesos y mejoran la experiencia. Concéntrate en tu negocio, del resto nos encargamos nosotros." },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="grain-overlay fixed inset-0 z-[1]" aria-hidden />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <IndustryMarquee />
        <ProblemSection />
        <SolutionSection />
        <PricingSection />
        <HowItWorksSection />
        <ResultsSection />
        <PlanSection />
        <FutureSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Solución", href: "#solucion" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Plan Crecimiento", href: "#plan" },
    { label: "Ecosistema", href: "#futuro" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/90 shadow-soft"
          : "border-transparent bg-background/60"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
          >
            Diagnóstico gratis
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              Solicitar diagnóstico gratuito
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <Link to="/" className="group flex items-center">
      <img
        src={logoEleva360}
        alt="Eleva360"
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </Link>
  );
}

function HeroShowcase() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative [perspective:1400px]"
    >
      <div className="animate-hero-float absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 blur-2xl" />
      <div
        className="relative aspect-square rounded-3xl border border-border bg-white shadow-soft-lg transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="grain-overlay absolute inset-0 rounded-3xl" aria-hidden />

        {/* connector lines */}
        <svg
          aria-hidden
          viewBox="0 0 400 400"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--gradient-start)" />
              <stop offset="100%" stopColor="var(--gradient-end)" />
            </linearGradient>
          </defs>
          {[
            [100, 100],
            [300, 100],
            [100, 300],
            [300, 300],
          ].map(([x, y], i) => (
            <path
              key={i}
              d={`M200,200 L${x},${y}`}
              fill="none"
              stroke="url(#heroLineGrad)"
              strokeWidth="2"
              strokeDasharray="6 8"
              opacity="0.5"
              className="animate-dash-flow"
            />
          ))}
        </svg>

        {/* center node: the business */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
          <div className="animate-logo-glow absolute -inset-3 -z-10 rounded-full bg-primary/30 blur-xl" />
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-white shadow-soft-lg sm:h-24 sm:w-24">
            <Store className="h-9 w-9 sm:h-10 sm:w-10" />
          </div>
          <span className="rounded-full bg-foreground px-3 py-1 text-[11px] font-bold text-white">
            Tu negocio
          </span>
        </div>

        {/* satellite nodes */}
        {[
          { icon: MapPin, label: "Google", pos: "left-[25%] top-[25%]", tint: "text-primary bg-primary/10" },
          { icon: MessageCircle, label: "WhatsApp", pos: "left-[75%] top-[25%]", tint: "text-accent bg-accent/10" },
          { icon: QrCode, label: "Carta digital", pos: "left-[25%] top-[75%]", tint: "text-primary bg-primary/10" },
          { icon: TrendingUp, label: "Más clientes", pos: "left-[75%] top-[75%]", tint: "text-accent bg-accent/10" },
        ].map((node) => (
          <div
            key={node.label}
            className={`animate-float-slow absolute -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 ${node.pos} flex`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white shadow-soft sm:h-14 sm:w-14 ${node.tint}`}
            >
              <node.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <span className="whitespace-nowrap rounded-full border border-border bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm backdrop-blur">
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const HERO_NODES = [
  { title: "Google Business", value: "Perfil optimizado", icon: MapPin, tint: "bg-[#4285F4]/10 text-[#4285F4]", x: 9, y: 17, ax: 20, ay: 28, dur: 13, delay: 0 },
  { title: "WhatsApp", value: "Respuestas al instante", icon: MessageCircle, tint: "bg-accent/10 text-accent", x: 91, y: 13, ax: 78, ay: 25, dur: 16, delay: -3.2 },
  { title: "Carta digital", value: "QR siempre al día", icon: QrCode, tint: "bg-primary/10 text-primary", x: 11, y: 74, ax: 24, ay: 66, dur: 15, delay: -6.5 },
  { title: "Dashboard", value: "+38% visitas", icon: BarChart3, tint: "bg-primary/10 text-primary", x: 93, y: 64, ax: 79, ay: 58, dur: 12, delay: -1.8 },
  { title: "Reseñas", value: "4,9 · 128 opiniones", icon: Star, tint: "bg-[#FBBC05]/15 text-[#B7860B]", x: 44, y: 97, ax: 47, ay: 82, dur: 17, delay: -9 },
] as const;

function HeroSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleParallax = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  };

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24">
      {/* Fondo: gradientes radiales suaves + luz ambiental en capas */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* base cálida-neutra, casi imperceptible */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(37,99,235,0.045),transparent_60%)]" />
        {/* luz ambiental derecha, detrás de la ilustración */}
        <div className="hero-ambient absolute right-[-6%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10),transparent_68%)] blur-[70px]" />
        {/* acento teal muy tenue para dar profundidad */}
        <div className="hero-ambient absolute bottom-[-12%] left-[38%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.07),transparent_70%)] blur-[80px] [animation-delay:-6s]" />
        {/* velo blanco superior para preservar el minimalismo */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-[1360px] items-center gap-16 lg:grid-cols-[0.46fr_0.54fr] lg:gap-20 xl:gap-24">
        {/* Bloque de texto: 40%, altura visual reducida */}
        <div className="flex flex-col items-start text-left">
          <div className="animate-hero-fade-up mb-7 inline-flex items-center gap-2.5 rounded-full border border-slate-200/70 bg-white/80 px-3.5 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.03)] backdrop-blur">
            <span className="relative flex h-1.5 w-1.5 rounded-full bg-primary">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
            </span>
            <span className="text-[0.7rem] font-semibold tracking-[0.02em] text-muted-foreground">
              Soluciones digitales para negocios · Chile
            </span>
          </div>

          <h1 className="animate-hero-fade-up animation-delay-50 max-w-[19ch] font-display text-[2.35rem] font-extrabold leading-[1.06] tracking-[-0.025em] text-foreground sm:text-[2.7rem] lg:text-[3.05rem]">
            Haz crecer tu negocio mientras nosotros nos encargamos de tu{" "}
            <span className="gradient-text-animated">presencia digital</span>.
          </h1>

          <p className="animate-hero-fade-up animation-delay-200 mt-7 max-w-[46ch] text-[1.0625rem] leading-[1.7] text-muted-foreground">
            Implementamos soluciones digitales que atraen más clientes, automatizan procesos y mejoran la experiencia de tus clientes, para que puedas concentrarte en hacer crecer tu negocio.
          </p>

          <div className="animate-hero-scale-in animation-delay-300 mt-9 flex w-full flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 whitespace-nowrap text-[0.95rem] font-semibold tracking-[-0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(37,99,235,0.10),0_8px_20px_-8px_rgba(37,99,235,0.35)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_2px_4px_rgba(37,99,235,0.10),0_18px_34px_-12px_rgba(37,99,235,0.42)] sm:w-auto"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="h-[1.05rem] w-[1.05rem] transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
            </a>
            <a
              href="#como-funciona"
              className="animate-hero-fade-up animation-delay-400 inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white px-6 py-3.5 whitespace-nowrap text-[0.95rem] font-semibold tracking-[-0.01em] text-foreground shadow-[0_1px_2px_rgba(15,23,42,0.035)] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-slate-300 hover:shadow-[0_10px_22px_-12px_rgba(15,23,42,0.16)] sm:w-auto"
            >
              Ver cómo funciona
            </a>
          </div>

          <div className="animate-hero-fade-up animation-delay-400 mt-11 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-slate-100 pt-6 text-[0.8125rem] text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-[0.9rem] w-[0.9rem] text-primary/80" /> Implementación sin fricción
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-[0.9rem] w-[0.9rem] text-accent/80" /> Resultados desde el primer mes
            </span>
            <span className="flex items-center gap-2">
              <HeartHandshake className="h-[0.9rem] w-[0.9rem] text-primary/80" /> Acompañamiento continuo
            </span>
          </div>
        </div>

        {/* Escenario: edificio + tarjetas independientes conectadas */}
        <div
          ref={stageRef}
          onMouseMove={handleParallax}
          onMouseLeave={() => setParallax({ x: 0, y: 0 })}
          className="relative mx-auto w-full max-w-[560px] [perspective:1600px] lg:max-w-none lg:w-[108%]"
        >
          <div className="relative aspect-[4/3.05] w-full">
            {/* Halo suave que integra el edificio con el fondo */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.06),rgba(255,255,255,0)_70%)] blur-2xl"
            />

            {/* Conexiones discretas con pulso de luz */}
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="heroLink" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(37,99,235,0.30)" />
                  <stop offset="100%" stopColor="rgba(20,184,166,0.22)" />
                </linearGradient>
              </defs>
              {HERO_NODES.map((n, i) => (
                <g key={n.title}>
                  <path
                    d={`M50 52 L${n.ax} ${n.ay}`}
                    stroke="url(#heroLink)"
                    strokeWidth="0.28"
                    fill="none"
                  />
                  <path
                    d={`M50 52 L${n.ax} ${n.ay}`}
                    stroke="rgba(37,99,235,0.75)"
                    strokeWidth="0.32"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="3 97"
                    className="hero-link-pulse"
                    style={{ animationDelay: `${i * 1.4}s` }}
                  />
                </g>
              ))}
            </svg>

            {/* Sombra de suelo para anclar el edificio */}
            <div
              aria-hidden
              className="absolute bottom-[10%] left-1/2 h-10 w-[46%] -translate-x-1/2 rounded-[100%] bg-slate-900/[0.05] blur-2xl"
            />

            {/* Edificio con parallax muy suave */}
            <div
              className="hero-parallax animate-hero-drift absolute left-1/2 top-1/2 z-10 w-[88%] -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate3d(calc(-50% + ${parallax.x * 12}px), calc(-50% + ${parallax.y * 9}px), 0) rotateY(${parallax.x * -2}deg) rotateX(${parallax.y * 1.4}deg)`,
              }}
            >
              <img
                src={heroBuilding}
                alt="Negocio local conectado al ecosistema digital de Eleva360"
                className="w-full drop-shadow-[0_36px_60px_rgba(15,23,42,0.10)]"
                loading="eager"
              />
            </div>

            {/* Tarjetas independientes */}
            {HERO_NODES.map((n, i) => (
              <div
                key={n.title}
                className="animate-hero-card-float absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 sm:block"
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  animationDuration: `${n.dur}s`,
                  animationDelay: `${n.delay}s`,
                }}
              >
                <div className="group flex w-[150px] items-start gap-2 rounded-2xl border border-slate-200/80 bg-white/90 p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_28px_-14px_rgba(15,23,42,0.22)] backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-slate-300 hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_22px_44px_-18px_rgba(15,23,42,0.28)] lg:w-[170px]">
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${n.tint}`}>
                    <n.icon className="h-[0.9rem] w-[0.9rem]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                      {n.title}
                    </p>
                    <p className="mt-0.5 text-[0.8rem] font-semibold leading-snug tracking-[-0.01em] text-foreground">
                      {n.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mx-auto max-w-xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function ProblemSection() {
  const problems = [
    { icon: Search, title: "No aparecen bien en Google", desc: "Nuevos clientes buscan y encuentran a otros primero." },
    { icon: MessageCircle, title: "Responden tarde por WhatsApp", desc: "Los mensajes se pierden y las oportunidades también." },
    { icon: Store, title: "Sus clientes no encuentran información", desc: "Horarios, servicios o precios que nunca están claros." },
    { icon: Wrench, title: "Siguen usando procesos manuales", desc: "Agendas en papel, planillas sueltas, todo desconectado." },
    { icon: Clock, title: "Pierden tiempo en tareas repetitivas", desc: "Horas al día en cosas que un sistema podría resolver." },
    { icon: Star, title: "Su reputación no se cuida", desc: "Reseñas sin responder, marca invisible frente a la competencia." },
  ];

  return (
    <section className="bg-[color:var(--muted)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="El problema"
          title={
            <>
              Muchos negocios pierden clientes todos los días{" "}
              <span className="text-primary">sin darse cuenta.</span>
            </>
          }
          subtitle="La mayoría de los negocios no tiene un problema de esfuerzo. Tiene un problema de sistema."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <SpotlightCard className="group flex h-full gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft shadow-soft-hover hover:border-primary/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--destructive)]/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <p.icon className="h-5 w-5 text-[color:var(--destructive)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— Mini mockups de interfaz real, en vez de iconos decorativos ————— */

function GoogleProfileMockup() {
  return (
    <div className="rounded-xl border border-border bg-[color:var(--muted)] p-3">
      <div className="flex items-start gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
          <MapPin className="h-4 w-4 text-[color:var(--color-g-red)]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-xs font-bold text-foreground">Panadería Los Aromas</div>
          <div className="mt-0.5 flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-2.5 w-2.5 fill-[color:var(--color-g-yellow)] text-[color:var(--color-g-yellow)]"
                />
              ))}
            </div>
            <span className="text-[10px] text-muted-foreground">4.9 · Panadería</span>
          </div>
          <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Abierto ahora
          </span>
        </div>
      </div>
      <div className="mt-2.5 flex gap-1.5">
        <span className="flex-1 rounded-md bg-primary py-1 text-center text-[10px] font-semibold text-white">
          Cómo llegar
        </span>
        <span className="flex-1 rounded-md border border-border bg-white py-1 text-center text-[10px] font-semibold text-foreground">
          Llamar
        </span>
      </div>
    </div>
  );
}

function WhatsAppMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[color:var(--muted)] p-3">
      <div className="flex items-center gap-2 border-b border-border/70 pb-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent">
          <MessageCircle className="h-3 w-3 text-white" />
        </div>
        <span className="text-[10px] font-bold text-foreground">Eleva360 Bot</span>
        <span className="ml-auto text-[9px] text-muted-foreground">en línea</span>
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="max-w-[75%] rounded-lg rounded-tl-sm bg-white px-2 py-1 text-[10px] text-foreground shadow-sm">
          Hola, ¿tienen mesa para hoy?
        </div>
        <div className="ml-auto max-w-[78%] rounded-lg rounded-tr-sm bg-accent/15 px-2 py-1 text-[10px] text-foreground">
          ¡Hola! Sí, tenemos disponibilidad 🙌 ¿Para cuántas personas?
        </div>
      </div>
    </div>
  );
}

function DigitalMenuMockup() {
  const items = [
    { name: "Café de especialidad", price: "$2.500" },
    { name: "Sandwich artesanal", price: "$5.900" },
  ];
  return (
    <div className="rounded-xl border border-border bg-[color:var(--muted)] p-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
          Carta Digital
        </span>
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white shadow-sm">
          <QrCode className="h-3.5 w-3.5 text-primary" />
        </div>
      </div>
      <div className="mt-2 space-y-1.5">
        {items.map((it) => (
          <div
            key={it.name}
            className="flex items-center justify-between rounded-md bg-white px-2 py-1.5 text-[10px] shadow-sm"
          >
            <span className="font-medium text-foreground">{it.name}</span>
            <span className="font-bold text-primary">{it.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcosystemMockup() {
  const bars = [55, 85, 40, 70];
  return (
    <div className="rounded-xl border border-border bg-[color:var(--muted)] p-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
          Panel Eleva360
        </span>
        <LineChart className="h-3.5 w-3.5 text-accent" />
      </div>
      <div className="mt-2.5 flex h-14 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-accent"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-[9px] text-muted-foreground">
        <span>Google</span>
        <span>WhatsApp</span>
        <span>Carta</span>
        <span>CRM</span>
      </div>
    </div>
  );
}

function PricingSection() {
  const implementaciones = [
    {
      title: "Google Business Profile",
      price: "$50.000",
      unit: "pago único",
      desc: "Perfil optimizado, SEO Local, fotos, publicaciones y estrategia de reseñas.",
      illustration: (
        <svg viewBox="0 0 120 120" className="h-24 w-24">
          <circle cx="60" cy="60" r="52" fill="#2563EB" fillOpacity="0.08" />
          <path
            d="M60 24c-14 0-25 11-25 25 0 18 25 47 25 47s25-29 25-47c0-14-11-25-25-25Z"
            fill="#2563EB"
          />
          <circle cx="60" cy="49" r="10" fill="white" />
        </svg>
      ),
    },
    {
      title: "Captación por WhatsApp",
      price: "$35.000",
      unit: "pago único",
      desc: "WhatsApp Business, mensajes automáticos, respuestas rápidas e integración con Google.",
      illustration: (
        <svg viewBox="0 0 120 120" className="h-24 w-24">
          <circle cx="60" cy="60" r="52" fill="#22C55E" fillOpacity="0.08" />
          <path
            d="M60 28c-18 0-32 14-32 32 0 6 1.6 12 4.5 17L28 92l16-4.3c5 2.8 10.6 4.3 16 4.3 18 0 32-14 32-32s-14-32-32-32Z"
            fill="#22C55E"
          />
          <path
            d="M48 55c1-2 2-2 3-2h2c.7 0 1.6 0 2 1s3 7 3 8-1 1.5-1.5 2 1 3 4 6 5.5 5 6 4.5 1-2 2-2 7 3 8 3.5 0 4-1 5.5-2.5c1.5-1.5 1.5-3 1-4-.4-.8-8-7.6-11-10-1.5-1.2-3-1.3-4 0"
            fill="white"
            stroke="white"
            strokeWidth="0"
          />
        </svg>
      ),
    },
    {
      title: "Carta Digital + QR",
      price: "$35.000",
      unit: "pago único",
      desc: "Carta responsive, QR personalizado, diseño moderno y actualización sin reimprimir.",
      illustration: (
        <svg viewBox="0 0 120 120" className="h-24 w-24">
          <circle cx="60" cy="60" r="52" fill="#2563EB" fillOpacity="0.08" />
          <rect x="34" y="26" width="52" height="68" rx="8" fill="#2563EB" />
          <rect x="42" y="36" width="36" height="6" rx="2" fill="white" />
          <rect x="42" y="48" width="36" height="6" rx="2" fill="white" fillOpacity="0.7" />
          <rect x="42" y="60" width="24" height="6" rx="2" fill="white" fillOpacity="0.7" />
          <rect x="42" y="72" width="20" height="14" rx="3" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <section id="precios" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Precios"
          title={
            <>
              Implementación clara.{" "}
              <span className="gradient-text-animated">Sin letra chica.</span>
            </>
          }
          subtitle="Cada solución se implementa una vez y queda funcionando. El Plan Crecimiento la mantiene evolucionando mes a mes."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {implementaciones.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} variant="zoom">
              <div className="card-shine group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-sm tilt-hover hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="card-shine-inner" />
                <div className="mb-5 flex justify-center">{item.illustration}</div>
                <h3 className="text-center font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-center">
                  <span className="font-display text-3xl font-extrabold text-foreground">
                    {item.price}
                  </span>{" "}
                  <span className="text-sm text-muted-foreground">CLP</span>
                </p>
                <p className="text-center text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.unit}
                </p>
                <p className="mt-4 text-center text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Plan Crecimiento destacado */}
        <Reveal delay={300} className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[color:var(--elevation)] p-8 text-white shadow-xl sm:p-10">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  Producto principal
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                  Plan Crecimiento
                </h3>
                <p className="mt-2 max-w-xl text-white/75">
                  Optimización continua, gestión de reputación, ajustes de carta y WhatsApp, y
                  soporte prioritario. Todo incluido, mes a mes.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <p className="font-display text-4xl font-extrabold">
                  $25.000 <span className="text-lg font-medium text-white/60">CLP/mes</span>
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[color:var(--foreground)] shadow-lg transition-all hover:-translate-y-0.5"
                >
                  Quiero el Plan Crecimiento
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SolutionSection() {
  const nodes = [
    {
      mockup: GoogleProfileMockup,
      title: "Google Business Profile",
      desc: "Presencia optimizada para que te encuentren cuando importa.",
    },
    {
      mockup: WhatsAppMockup,
      title: "WhatsApp Business",
      desc: "Comunicación automatizada que responde y ordena tus clientes.",
    },
    {
      mockup: DigitalMenuMockup,
      title: "Carta y sitio digital",
      desc: "Información clara siempre disponible, en cualquier dispositivo.",
    },
    {
      mockup: EcosystemMockup,
      title: "Un ecosistema conectado",
      desc: "Todas las piezas trabajan juntas dentro del sistema Eleva360.",
    },
  ];

  return (
    <section id="solucion" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="La solución"
          title={
            <>
              Un{" "}
              <span className="gradient-text-animated">sistema digital</span>{" "}
              diseñado para hacer crecer tu negocio.
            </>
          }
          subtitle="Eleva360 implementa un ecosistema donde todas las herramientas trabajan juntas. No son productos sueltos: son piezas de un mismo sistema."
        />

        <div className="relative mt-16">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 400"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--gradient-start)" />
                <stop offset="50%" stopColor="var(--gradient-mid)" />
                <stop offset="100%" stopColor="var(--gradient-end)" />
              </linearGradient>
            </defs>
            <path
              d="M 130 200 C 300 60, 400 340, 500 200 S 700 60, 870 200"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="6 8"
              opacity="0.55"
              className="animate-dash-flow"
            />
          </svg>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nodes.map((n, i) => (
              <Reveal key={n.title} delay={i * 120} variant="zoom">
                <SpotlightCard
                  className="group relative h-full rounded-2xl border border-border bg-white p-5 shadow-soft shadow-soft-hover hover:border-primary/30 animate-float-slow"
                  style={{ animationDelay: `${i * 400}ms` }}
                >
                  <div className="absolute -top-3 left-5 rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    0{i + 1}
                  </div>
                  <div className="mb-4 mt-1 transition-transform duration-300 group-hover:scale-[1.02]">
                    <n.mockup />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Analizamos tu negocio",
      desc: "Entendemos tu rubro, tus clientes y qué está frenando tu crecimiento.",
    },
    {
      icon: Wrench,
      title: "Implementamos las herramientas",
      desc: "Dejamos funcionando cada pieza del sistema, sin que tengas que hacer nada.",
    },
    {
      icon: Workflow,
      title: "Automatizamos procesos",
      desc: "Convertimos tareas manuales en flujos que trabajan solos por tu negocio.",
    },
    {
      icon: LineChart,
      title: "Optimizamos continuamente",
      desc: "Medimos, ajustamos y mejoramos para que sigas creciendo mes a mes.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-[color:var(--muted)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Cómo funciona"
          title="Un proceso simple. Un impacto real."
          subtitle="Cuatro pasos, cero complicaciones. Nosotros hacemos el trabajo técnico, tú ves los resultados."
        />

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="relative flex flex-col items-start">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white shadow-sm">
                    <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
                  </div>
                  <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const items = [
    { icon: TrendingUp, label: "Más visibilidad", to: 320, prefix: "+", suffix: "%", desc: "Frente a más clientes potenciales cada día." },
    { icon: MessageCircle, label: "Más conversaciones", to: 240, prefix: "+", suffix: "%", desc: "Contactos ordenados y respondidos a tiempo." },
    { icon: CalendarCheck, label: "Más reservas", to: 180, prefix: "+", suffix: "%", desc: "Clientes que agendan sin fricción." },
    { icon: Star, label: "Más reseñas", to: 5, prefix: "+", suffix: "x", desc: "Reputación que trabaja por tu marca." },
    { icon: Clock, label: "Más tiempo", to: 15, prefix: "+", suffix: "h", desc: "Horas por semana para administrar tu negocio." },
  ];

  return (
    <section className="border-y border-border bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Resultados"
          title="Lo que gana tu negocio cuando la tecnología trabaja por ti."
          subtitle="No hablamos de características. Hablamos de lo que cambia en tu día a día."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} variant="zoom">
              <SpotlightCard className="group h-full rounded-2xl border border-border bg-white p-5 shadow-soft shadow-soft-hover">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-3xl font-extrabold text-foreground tabular-nums">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanSection() {
  const pillars = [
    { icon: Gauge, title: "Optimización continua", desc: "Ajustamos y mejoramos cada herramienta mes a mes." },
    { icon: Rocket, title: "Nuevas mejoras", desc: "Incorporamos capacidades a medida que tu negocio evoluciona." },
    { icon: LineChart, title: "Acompañamiento estratégico", desc: "Analizamos qué está funcionando y qué elevar al siguiente nivel." },
    { icon: HeartHandshake, title: "Un equipo a tu lado", desc: "Contacto directo, humano y sin trámites intermedios." },
  ];

  return (
    <section id="plan" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-[color:var(--elevation)] p-8 text-white shadow-2xl shadow-primary/30 sm:p-14 lg:p-20">
          <div aria-hidden className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />

          <div className="relative">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  El corazón de Eleva360
                </span>
                <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Plan <span className="gradient-text-animated">Crecimiento</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg text-white/75">
                  Implementar las herramientas es solo el comienzo. El verdadero valor está en el acompañamiento continuo: un plan que mantiene tu sistema optimizado, incorpora mejoras y acompaña la evolución de tu negocio.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-[color:var(--foreground)] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-xl"
              >
                Quiero evolucionar mi negocio
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <p.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
              <Check className="h-4 w-4 text-accent" />
              No es mantención. Es evolución continua junto a tu negocio.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  const items = [
    { icon: Cpu, title: "Inteligencia Artificial" },
    { icon: Users, title: "CRM" },
    { icon: CalendarCheck, title: "Reservas Online" },
    { icon: LayoutDashboard, title: "Dashboards" },
    { icon: Workflow, title: "Automatizaciones" },
    { icon: Globe, title: "Landing Pages" },
    { icon: ShoppingCart, title: "Comercio Electrónico" },
    { icon: BarChart3, title: "Analítica avanzada" },
  ];

  return (
    <section id="futuro" className="bg-[color:var(--muted)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Ecosistema"
          title={
            <>
              Un ecosistema que{" "}
              <span className="gradient-text-animated">sigue creciendo.</span>
            </>
          }
          subtitle="Eleva360 evoluciona constantemente. Nuevas capacidades se suman al sistema para acompañar la próxima etapa de tu negocio."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70} variant="zoom">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm tilt-hover hover:border-primary/40 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{it.title}</h3>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-primary/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="h-3 w-3" /> Próximamente
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const items = [
    { icon: HeartHandshake, title: "Atención cercana", desc: "Trato humano y directo, no un ticket más en un sistema." },
    { icon: Layers, title: "Tecnología conectada", desc: "Un ecosistema donde cada pieza potencia a la siguiente." },
    { icon: Target, title: "Enfocados en tu negocio", desc: "Adaptamos el sistema al rubro y momento de tu empresa." },
    { icon: BarChart3, title: "Resultados medibles", desc: "Métricas claras, sin jerga técnica ni promesas vacías." },
  ];

  return (
    <section id="porque" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Por qué Eleva360"
          title="Una empresa tecnológica que trabaja como parte de tu equipo."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <SpotlightCard className="group h-full rounded-2xl border border-border bg-white p-6 shadow-soft shadow-soft-hover hover:border-primary/30">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contacto" className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--elevation)] px-6 py-16 text-center text-white sm:px-12 lg:py-20">
          <div aria-hidden className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              No necesitas aprender marketing.
              <br />
              Necesitas un{" "}
              <span className="gradient-text-animated">sistema digital</span>{" "}
              que trabaje por tu negocio.
            </h2>
            <p className="mt-6 text-lg text-white/75">
              Nosotros lo diseñamos, lo implementamos y lo mantenemos evolucionando. Tú te enfocas en lo que sabes hacer.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Quiero hacer crecer mi negocio
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">Diagnóstico gratuito · Respuesta en menos de 1 hora hábil.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">
            Soluciones digitales que hacen crecer tu negocio, sin que tengas que hacerlo tú.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Eleva360. Todos los derechos reservados.</span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" /> Hecho en Chile 🇨🇱
        </span>
      </div>
    </footer>
  );
}

function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="animate-wa-bob fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-xl shadow-accent/40 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
    </a>
  );
}
