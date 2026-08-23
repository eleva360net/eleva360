import logoEleva360 from "../assets/LogoEleva360-transparente.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
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
  CalendarCheck,
  Globe,
  Wrench,
  Gauge,
  QrCode,
  Smartphone,
  ChevronRight,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";
import heroBuilding from "../assets/hero-building.png";
import heroImage from "../assets/hero-eleva360.png";
import menuEntradaPremium from "../assets/menu-entrada-premium.webp";
import menuPlatoPremium from "../assets/menu-plato-premium.webp";
import menuBebidaPremium from "../assets/menu-bebida-premium.webp";


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
      { title: "Eleva360 | Soluciones digitales para negocios" },
      {
        name: "description",
        content:
          "Analizamos qué necesita mejorar tu negocio y priorizamos soluciones digitales simples, por etapas y adaptadas a su realidad.",
      },
      { name: "keywords", content: "Soluciones digitales, tecnología para negocios, automatización, presencia digital, transformación digital, Chile" },
      { property: "og:title", content: "Eleva360 | Soluciones digitales para negocios" },
      { property: "og:description", content: "Analizamos qué necesita mejorar tu negocio y priorizamos soluciones digitales simples, por etapas y adaptadas a su realidad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Eleva360 | Soluciones digitales para negocios" },
      { name: "twitter:description", content: "Analizamos qué necesita mejorar tu negocio y priorizamos soluciones digitales simples, por etapas y adaptadas a su realidad." },
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
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
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

       {/* connector lines + light pulses */}
<svg
  aria-hidden
  viewBox="0 0 400 400"
className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible">
  <defs>
    <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="var(--gradient-start)" />
      <stop offset="100%" stopColor="var(--gradient-end)" />
    </linearGradient>

    <filter
      id="heroPulseGlow"
      x="-200%"
      y="-200%"
      width="400%"
      height="400%"
    >
      <feGaussianBlur stdDeviation="2.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  {[
    [100, 100],
    [300, 100],
    [100, 300],
    [300, 300],
  ].map(([x, y], i) => (
    <g key={i}>
      <path
        d={`M200,200 L${x},${y}`}
        fill="none"
        stroke="url(#heroLineGrad)"
        strokeWidth="1.5"
        strokeDasharray="5 8"
        opacity="0.42"
      />

      <circle
        r="2.8"
        fill="white"
        stroke="var(--gradient-end)"
        strokeWidth="1.5"
        filter="url(#heroPulseGlow)"
      >
        <animateMotion
          dur={`${3.2 + i * 0.35}s`}
          begin={`${i * 0.7}s`}
          repeatCount="indefinite"
          path={`M200,200 L${x},${y}`}
        />
      </circle>
    </g>
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
  {
    type: "google",
    title: "Google Business",
    icon: MapPin,
    tint: "bg-[#4285F4]/10 text-[#4285F4]",
    positionClass: "xl:left-[20%] 2xl:left-[14%]",
    y: 22,
    ax: 32,
    ay: 30,
    dur: 13,
    delay: 0,
  },
  {
    type: "whatsapp",
    title: "WhatsApp",
    icon: MessageCircle,
    tint: "bg-accent/10 text-accent",
    positionClass: "xl:left-[20%] 2xl:left-[10%]",
    y: 51,
    ax: 26,
    ay: 46,
    dur: 16,
    delay: -3.2,
  },
  {
    type: "menu",
    title: "Carta digital",
    icon: QrCode,
    tint: "bg-primary/10 text-primary",
    positionClass: "xl:left-[20%] 2xl:left-[10%]",
    y: 87,
    ax: 27,
    ay: 68,
    dur: 15,
    delay: -6.5,
  },
  {
    type: "dashboard",
    title: "Dashboard",
    icon: BarChart3,
    tint: "bg-primary/10 text-primary",
    positionClass: "xl:left-[76%] 2xl:left-[90%]",
    y: 29,
    ax: 75,
    ay: 28,
    dur: 12,
    delay: -1.8,
  },
  {
    type: "support",
    title: "Acompañamiento",
    icon: HeartHandshake,
    tint: "bg-accent/10 text-accent",
    positionClass: "xl:left-[76%] 2xl:left-[90%]",
    y: 81,
    ax: 74,
    ay: 70,
    dur: 17,
    delay: -9,
  },
] as const;

type HeroNodeType = (typeof HERO_NODES)[number]["type"];

/**
 * Cada línea vive dentro de su tarjeta. Así el primer punto permanece pegado
 * al borde de la tarjeta aunque cambien el ancho de pantalla o la posición.
 */
function HeroCardConnector({ type }: { type: HeroNodeType }) {
  const connectors: Record<HeroNodeType, { className: string; d: string; start: [number, number]; end: [number, number] }> = {
    google: {
      className: "left-[calc(100%_-_3px)] top-[58%] h-[150px] w-[170px] -translate-y-1/2",
      d: "M4 30 C58 30 112 67 164 142",
      start: [4, 30],
      end: [164, 142],
    },
    whatsapp: {
      className: "left-[calc(100%_-_3px)] top-[58%] h-[82px] w-[126px] -translate-y-1/2",
      d: "M4 34 C44 34 82 37 120 68",
      start: [4, 34],
      end: [120, 68],
    },
    menu: {
      className: "left-[calc(100%_-_3px)] top-[54%] h-[76px] w-[166px] -translate-y-1/2",
      d: "M4 39 C56 39 108 40 160 18",
      start: [4, 39],
      end: [160, 18],
    },
    dashboard: {
      className: "right-[calc(100%_-_3px)] top-[70%] h-[94px] w-[146px] -translate-y-1/2",
      d: "M142 24 C104 24 57 35 6 82",
      start: [142, 24],
      end: [6, 82],
    },
    support: {
      className: "right-[calc(100%_-_3px)] top-[24%] h-[82px] w-[142px] -translate-y-1/2",
      d: "M138 54 C92 54 54 40 6 20",
      start: [138, 54],
      end: [6, 20],
    },
  };

  const connector = connectors[type];
  const glowId = `hero-card-connector-${type}`;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${type === "menu" ? 166 : type === "google" ? 170 : type === "dashboard" ? 146 : type === "support" ? 142 : 126} ${type === "dashboard" ? 94 : type === "google" ? 150 : type === "support" || type === "whatsapp" ? 82 : 76}`}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute hidden overflow-visible xl:block ${connector.className}`}
    >
      <defs>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d={connector.d} fill="none" stroke="rgba(37,99,235,0.12)" strokeWidth="4" strokeLinecap="round" />
      <path
        d={connector.d}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeDasharray="4 5"
        filter={`url(#${glowId})`}
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="8s" repeatCount="indefinite" />
      </path>
      <circle cx={connector.start[0]} cy={connector.start[1]} r="4.5" fill="rgba(59,130,246,0.14)" />
      <circle cx={connector.start[0]} cy={connector.start[1]} r="2.1" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.4" />
      <circle cx={connector.end[0]} cy={connector.end[1]} r="5" fill="rgba(20,184,166,0.14)" />
      <circle cx={connector.end[0]} cy={connector.end[1]} r="2.2" fill="#14B8A6" />
      <circle r="2" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1">
        <animateMotion dur="6.5s" repeatCount="indefinite" path={connector.d} />
      </circle>
    </svg>
  );
}

function GoogleMapsPinIcon({ className = "h-8 w-6" }: { className?: string }) {
  const clipId = useId().replace(/:/g, "");

  return (
    <svg viewBox="0 0 48 64" className={`${className} shrink-0 drop-shadow-sm`} aria-hidden>
      <defs>
        <clipPath id={clipId}>
          <path d="M24 2C12.95 2 4 10.95 4 22c0 15.4 20 40 20 40s20-24.6 20-40C44 10.95 35.05 2 24 2Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="48" height="64" fill="#EA4335" />
        <path d="M0 0h25v33L7 48H0Z" fill="#4285F4" />
        <path d="m25 33 23-10v24L30 55Z" fill="#FBBC04" />
        <path d="M0 48 25 33l23 14v17H0Z" fill="#34A853" />
      </g>
      <circle cx="24" cy="22" r="8.5" fill="#FFFFFF" />
      <circle cx="24" cy="22" r="3.2" fill="#E8F0FE" />
    </svg>
  );
}

type MobileHeroCardType = "google" | "whatsapp" | "menu" | "dashboard" | "support";

function MobileHeroCarouselCard({ type }: { type: MobileHeroCardType }) {
  const cardClass =
    "h-[158px] w-[252px] shrink-0 overflow-hidden rounded-[20px] border border-white/85 bg-white/95 p-3.5 shadow-[0_18px_38px_-22px_rgba(15,23,42,0.34),0_6px_18px_-16px_rgba(37,99,235,0.28)] backdrop-blur-xl";

  if (type === "google") {
    return (
      <article className={cardClass} aria-label="Ejemplo de visibilidad local de Café Pacífico">
        <div className="flex items-start gap-2.5">
          <GoogleMapsPinIcon className="h-8 w-6" />
          <div className="min-w-0 flex-1">
            <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-slate-400">Visibilidad local</p>
            <p className="mt-1 text-[0.9rem] font-bold tracking-[-0.01em] text-slate-900">Café Pacífico</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-[0.68rem] font-semibold text-slate-700">4.9</span>
              <span className="text-[0.66rem] tracking-tight text-amber-400">★★★★★</span>
              <span className="text-[0.56rem] text-slate-400">(238)</span>
            </div>
            <p className="mt-1 text-[0.57rem] text-slate-400">
              <span className="font-semibold text-emerald-600">Abierto</span> · Cierra 23:00
            </p>
          </div>
          <div className="h-[57px] w-[60px] shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-100">
            <img src={heroBuilding} alt="Café Pacífico" className="h-full w-full scale-[1.65] object-cover object-[53%_62%]" />
          </div>
        </div>
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-[0.6rem] font-semibold text-primary">
          <MapPin className="h-3 w-3" /> Cómo llegar
        </div>
      </article>
    );
  }

  if (type === "whatsapp") {
    return (
      <article className={cardClass} aria-label="Ejemplo de contacto y atención por WhatsApp">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
            <MessageCircle className="h-4 w-4" />
          </span>
          <p className="text-[0.57rem] font-bold uppercase tracking-[0.1em] text-slate-400">Contacto y atención</p>
          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#25D366]" />
        </div>
        <div className="mt-2.5 rounded-2xl rounded-tl-md bg-slate-50 px-3 py-2.5 text-[0.69rem] leading-[1.45] text-slate-700">
          Hola 👋<br />Quiero reservar una mesa para este sábado a las 20:00.
          <div className="mt-0.5 text-right text-[0.52rem] text-slate-400">11:18</div>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[0.56rem] text-slate-400">
          <span className="rounded-full bg-slate-100 px-2 py-0.5 tracking-[0.18em]">•••</span> Escribiendo...
        </div>
      </article>
    );
  }

  if (type === "menu") {
    return (
      <article className={cardClass} aria-label="Ejemplo de experiencia del cliente de Café Pacífico">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-50 text-primary">
            <Smartphone className="h-4 w-4" />
          </span>
          <p className="text-[0.57rem] font-bold uppercase tracking-[0.1em] text-slate-400">Experiencia del cliente</p>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-2.5">
          {[
            { label: "Entradas", image: menuEntradaPremium },
            { label: "Platos", image: menuPlatoPremium },
            { label: "Bebidas", image: menuBebidaPremium },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <img src={item.image} alt={item.label} className="mx-auto h-11 w-11 rounded-xl object-cover shadow-sm ring-1 ring-slate-100" />
              <p className="mt-1 text-[0.58rem] font-semibold text-slate-700">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-center gap-1 rounded-full border border-slate-200 py-1 text-[0.58rem] font-semibold text-primary">
          Ver carta <ArrowRight className="h-2.5 w-2.5" />
        </div>
      </article>
    );
  }

  if (type === "dashboard") {
    return (
      <article className={cardClass} aria-label="Ejemplo de seguimiento y mejora">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-50 text-primary">
            <BarChart3 className="h-4 w-4" />
          </span>
          <p className="text-[0.57rem] font-bold uppercase tracking-[0.1em] text-slate-400">Seguimiento y mejora</p>
        </div>
        <div className="mt-3.5 grid grid-cols-3 divide-x divide-slate-100 text-center">
          {[
            { label: "Consultas", status: "Orden" },
            { label: "Reservas", status: "Seguimiento" },
            { label: "Visibilidad", status: "Lectura clara" },
          ].map((item) => (
            <div key={item.label} className="px-1.5">
              <p className="text-[0.64rem] font-bold text-primary">{item.status}</p>
              <p className="mt-0.5 text-[0.52rem] text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-3.5 rounded-full bg-slate-50 px-3 py-1 text-center text-[0.56rem] font-semibold text-slate-500">
          Vista de seguimiento
        </div>
      </article>
    );
  }

  return (
    <article className={cardClass} aria-label="Acompañamiento de Eleva360">
      <div className="flex items-center gap-2">
        <HeartHandshake className="h-4 w-4 text-accent" />
        <p className="text-[0.57rem] font-bold uppercase tracking-[0.1em] text-slate-400">Acompañamiento Eleva360</p>
      </div>
      <p className="mt-3 text-[0.68rem] leading-[1.5] text-slate-700">
        Revisamos avances y ajustamos las soluciones según las necesidades reales del negocio.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5 text-[0.55rem] font-semibold text-primary">
        <span className="rounded-full bg-blue-50 px-2 py-1">Medir</span>
        <span className="rounded-full bg-blue-50 px-2 py-1">Ajustar</span>
        <span className="rounded-full bg-blue-50 px-2 py-1">Acompañar</span>
      </div>
    </article>
  );
}

function MobileHeroCards() {
  const cards: MobileHeroCardType[] = ["google", "whatsapp", "menu", "dashboard", "support"];
  const row = [...cards, ...cards];

  return (
    <div className="relative z-30 mt-3 xl:hidden">
      <div className="mx-1 mb-3 flex items-center justify-between">
        <span className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-slate-400">
          Tu negocio en el centro
        </span>
        <span className="flex items-center gap-1 text-[0.64rem] font-semibold text-primary">
          En movimiento <ChevronRight className="h-3 w-3" />
        </span>
      </div>

      <div className="relative -mx-4 overflow-hidden pb-5 pt-3 sm:-mx-6 lg:-mx-8">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-white to-transparent" />

        <svg aria-hidden viewBox="0 0 58 24" className="pointer-events-none absolute left-1/2 top-0 z-10 h-6 w-[58px] -translate-x-1/2 overflow-visible">
          <defs>
            <filter id="mobile-carousel-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M4 2 C16 2 18 21 29 21" fill="none" stroke="rgba(37,99,235,0.16)" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M4 2 C16 2 18 21 29 21" fill="none" stroke="#3B82F6" strokeWidth="1.4" strokeDasharray="4 5" strokeLinecap="round" filter="url(#mobile-carousel-glow)">
            <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="8s" repeatCount="indefinite" />
          </path>
          <circle cx="4" cy="2" r="2.2" fill="#14B8A6" />
          <circle cx="29" cy="21" r="2.4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.3" />
        </svg>

        <div className="animate-marquee flex w-max gap-3 pt-3">
          {row.map((type, index) => (
            <div key={`${type}-${index}`} aria-hidden={index >= cards.length || undefined}>
              <MobileHeroCarouselCard type={type} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-white px-4 pt-14 pb-10 sm:px-6 sm:pb-16 lg:px-8 lg:pt-12 lg:pb-16 2xl:pt-20 2xl:pb-24">
      {/* Fondo: gradientes radiales suaves + luz ambiental en capas */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(37,99,235,0.045),transparent_60%)]" />
        <div className="hero-ambient absolute right-[-6%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10),transparent_68%)] blur-[70px]" />
        <div className="hero-ambient absolute bottom-[-12%] left-[38%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.07),transparent_70%)] blur-[80px] [animation-delay:-6s]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 sm:gap-16 lg:grid-cols-[0.36fr_0.64fr] lg:gap-10 xl:gap-12 2xl:grid-cols-[0.34fr_0.66fr]">
        {/* Bloque de texto */}
        <div className="relative z-30 min-w-0 flex flex-col items-start text-left xl:-translate-y-8 2xl:translate-y-0">
          <div className="animate-hero-fade-up mb-5 inline-flex items-center gap-2.5 rounded-full border border-slate-200/70 bg-white/80 px-3.5 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.03)] backdrop-blur 2xl:mb-7">
            <span className="relative flex h-1.5 w-1.5 rounded-full bg-primary">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
            </span>
            <span className="text-[0.7rem] font-semibold tracking-[0.02em] text-muted-foreground">
              Soluciones digitales para negocios
            </span>
          </div>

          <h1 className="animate-hero-fade-up animation-delay-50 max-w-[19ch] font-display text-[2.35rem] font-extrabold leading-[1.06] tracking-[-0.025em] text-foreground sm:text-[2.7rem] lg:text-[2.55rem] xl:text-[2.65rem] 2xl:text-[3.05rem]">
            Antes de proponer soluciones,{" "}
            <span className="gradient-text-animated">entendemos tu negocio.</span>
          </h1>

          <p className="animate-hero-fade-up animation-delay-200 mt-5 max-w-[46ch] text-[1rem] leading-[1.65] text-muted-foreground 2xl:mt-7 2xl:text-[1.0625rem] 2xl:leading-[1.7]">
            Analizamos cómo funciona tu negocio para detectar qué necesita mejorar. Luego priorizamos e implementamos soluciones digitales simples, por etapas y adaptadas a tu realidad.
          </p>

          <div className="animate-hero-scale-in animation-delay-300 mt-7 flex w-full flex-wrap items-center gap-3 2xl:mt-9">
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 whitespace-nowrap text-[0.86rem] font-semibold tracking-[-0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(37,99,235,0.10),0_8px_20px_-8px_rgba(37,99,235,0.35)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_2px_4px_rgba(37,99,235,0.10),0_18px_34px_-12px_rgba(37,99,235,0.42)] sm:w-auto 2xl:px-6 2xl:py-3.5 2xl:text-[0.95rem]"
  >
    Solicitar diagnóstico inicial
    <ArrowRight className="h-[1.05rem] w-[1.05rem] transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
  </a>

  <a
    href="#como-funciona"
    className="animate-hero-fade-up animation-delay-400 inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white px-5 py-3 whitespace-nowrap text-[0.86rem] font-semibold tracking-[-0.01em] text-foreground shadow-[0_1px_2px_rgba(15,23,42,0.035)] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-slate-300 hover:shadow-[0_10px_22px_-12px_rgba(15,23,42,0.16)] sm:w-auto 2xl:px-6 2xl:py-3.5 2xl:text-[0.95rem]"
  >
    Conocer cómo trabajamos
  </a>
</div>

          <div className="animate-hero-fade-up animation-delay-400 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-[0.75rem] text-muted-foreground 2xl:mt-11 2xl:gap-x-6 2xl:gap-y-2.5 2xl:pt-6 2xl:text-[0.8125rem]">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-[0.9rem] w-[0.9rem] text-primary/80" /> Diagnóstico antes de proponer
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-[0.9rem] w-[0.9rem] text-accent/80" /> Implementación por etapas
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
          className="relative z-10 isolate mx-auto min-w-0 w-full max-w-[680px] [perspective:1600px] lg:max-w-none lg:w-full"
        >
          <div className="relative z-40 flex justify-start px-2 pb-1 sm:justify-end sm:px-4 sm:pb-2">
            <span className="rounded-full border border-slate-200/80 bg-white/90 px-2.5 py-1 text-[0.6rem] font-semibold text-slate-500 shadow-sm backdrop-blur">
              Ejemplo ilustrativo
            </span>
          </div>
          <div className="relative aspect-[3/2] w-full sm:aspect-[4/3] 2xl:aspect-[5/4]">
            {/* Halo suave que integra el edificio con el fondo */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.06),rgba(255,255,255,0)_70%)] blur-2xl"
            />

            {/* Sombra de suelo para anclar el edificio */}
            <div
              aria-hidden
              className="absolute bottom-[10%] left-1/2 h-10 w-[46%] -translate-x-1/2 rounded-[100%] bg-slate-900/[0.05] blur-2xl"
            />

            {/* Edificio con parallax muy suave */}
            <div
              className="hero-parallax animate-hero-drift absolute left-1/2 top-[50%] z-10 w-[82%] -translate-x-1/2 -translate-y-1/2 sm:w-[80%] lg:w-[78%] xl:w-[74%] 2xl:top-[53%] 2xl:w-[86%]"
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

            {/* Tarjetas independientes — UI del ecosistema Eleva360 */}
            {HERO_NODES.map((n) => (
              <div
                key={n.title}
                className={`animate-hero-card-float absolute z-20 hidden -translate-y-1/2 xl:block ${n.positionClass}`}
                style={{
                  top: `${n.y}%`,
                  animationDuration: `${n.dur}s`,
                  animationDelay: `${n.delay}s`,
                }}
              >
                <div
                  className={`relative scale-[0.72] 2xl:scale-[0.9] ${
                    n.type === "dashboard" || n.type === "support" ? "origin-right" : "origin-left"
                  }`}
                >
                  <HeroCardConnector type={n.type} />
                  <div className="group relative z-10 overflow-hidden rounded-[20px] border border-slate-200/70 bg-white shadow-[0_2px_6px_rgba(15,23,42,0.04),0_18px_46px_-16px_rgba(15,23,42,0.22)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-slate-300 hover:shadow-[0_4px_10px_rgba(15,23,42,0.05),0_28px_60px_-18px_rgba(15,23,42,0.28)]">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* GOOGLE BUSINESS */}
                  {n.title.toLowerCase().includes("google") && (
                    <div className="w-[340px] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <svg viewBox="0 0 48 64" className="h-8 w-6 shrink-0 drop-shadow-sm" aria-hidden>
                              <defs>
                                <clipPath id="google-maps-pin-shape">
                                  <path d="M24 2C12.95 2 4 10.95 4 22c0 15.4 20 40 20 40s20-24.6 20-40C44 10.95 35.05 2 24 2Z" />
                                </clipPath>
                              </defs>
                              <g clipPath="url(#google-maps-pin-shape)">
                                <rect width="48" height="64" fill="#EA4335" />
                                <path d="M0 0h25v33L7 48H0Z" fill="#4285F4" />
                                <path d="m25 33 23-10v24L30 55Z" fill="#FBBC04" />
                                <path d="M0 48 25 33l23 14v17H0Z" fill="#34A853" />
                              </g>
                              <circle cx="24" cy="22" r="8.5" fill="#FFFFFF" />
                              <circle cx="24" cy="22" r="3.2" fill="#E8F0FE" />
                            </svg>
                            <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-slate-400">
                              Visibilidad local
                            </p>
                          </div>
                          <p className="mt-1.5 truncate text-[17px] font-bold tracking-[-0.01em] text-slate-900">
                            Café Pacífico
                          </p>

                          <div className="mt-1.5 flex items-center gap-1.5">
                            <span className="text-[13px] font-semibold text-slate-800">4.9</span>
                            <span className="text-[13px] leading-none tracking-tight text-amber-400">★★★★★</span>
                            <span className="text-[11px] text-slate-400">(238)</span>
                          </div>

                          <div className="mt-1 flex items-center gap-1.5 text-[10.5px]">
                            <span className="font-semibold text-emerald-600">Abierto</span>
                            <span className="text-slate-400">· Cierra a las 23:00</span>
                          </div>
                        </div>

                        <div className="h-[94px] w-[104px] shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-100">
                          <img
                            src={heroBuilding}
                            alt="Vista del Café Pacífico"
                            className="h-full w-full scale-[1.7] object-cover object-[53%_62%]"
                          />
                        </div>
                      </div>

                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-semibold text-primary shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[7px] text-white">▶</span>
                        Cómo llegar
                      </div>
                    </div>
                  )}

                  {/* WHATSAPP */}
                  {n.title.toLowerCase().includes("whatsapp") && (
                    <div className="w-[258px] p-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
                          <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
                            <path
                              fill="#FFFFFF"
                              d="M16 5.3c-5.9 0-10.7 4.8-10.7 10.7 0 1.9.5 3.7 1.4 5.3L5.3 26.7l5.6-1.4c1.5.8 3.3 1.3 5.1 1.3 5.9 0 10.7-4.8 10.7-10.7S21.9 5.3 16 5.3zm0 19.1c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3.9.9-3.2-.2-.3c-.9-1.4-1.4-3.1-1.4-4.8 0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.8 8.9zm5-6.5c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"
                            />
                          </svg>
                        </span>
                        <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-400">
                          Contacto y atención
                        </p>
                        <span className="ml-auto h-2 w-2 rounded-full bg-[#25D366]" />
                      </div>

                      <div className="mt-3 rounded-2xl rounded-tl-md bg-slate-50 p-3">
                        <p className="text-[11.5px] leading-[1.5] text-slate-700">
                          Hola 👋
                          <br />
                          Quiero reservar una mesa
                          <br />
                          para este sábado a las 20:00.
                        </p>
                        <div className="mt-1 text-right text-[9px] text-slate-400">11:18</div>
                      </div>

                      <div className="mt-2.5 flex items-center gap-2.5">
                        <div className="flex h-6 items-center gap-1 rounded-full bg-slate-100 px-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        </div>
                        <span className="text-[10px] text-slate-400">Escribiendo...</span>
                      </div>
                    </div>
                  )}

                  {/* CARTA DIGITAL */}
                  {n.title.toLowerCase().includes("carta") && (
                    <div className="w-[258px] p-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-primary">
                          <Smartphone className="h-[18px] w-[18px]" />
                        </div>
                        <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-400">
                          Experiencia del cliente
                        </p>
                      </div>

                      <div className="mt-3 space-y-2">
                        {[
                          { label: "Entradas", count: "8 opciones", image: menuEntradaPremium },
                          { label: "Platos", count: "14 opciones", image: menuPlatoPremium },
                          { label: "Bebidas", count: "10 opciones", image: menuBebidaPremium },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center gap-3">
                            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12),0_2px_8px_rgba(15,23,42,0.10)]">
                              <img
                                src={item.image}
                                alt={`${item.label} del menú de Café Pacífico`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-[12px] font-semibold text-slate-800">{item.label}</p>
                              <p className="text-[9.5px] text-slate-400">{item.count}</p>
                            </div>
                            <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" />
                          </div>
                        ))}
                      </div>

                      <div className="mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white py-2 text-[11px] font-semibold text-primary shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                        Ver carta completa
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  )}

                  {/* DASHBOARD */}
                  {n.title.toLowerCase().includes("dashboard") && (
                    <div className="w-[272px] p-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-primary">
                          <BarChart3 className="h-[18px] w-[18px]" />
                        </div>
                        <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-400">
                          Seguimiento y mejora
                        </p>
                      </div>

                      <div className="mt-2.5 space-y-1">
                        {[
                          { icon: Clock, label: "Consultas", status: "Organización" },
                          { icon: CalendarCheck, label: "Reservas", status: "Seguimiento" },
                          { icon: Users, label: "Visibilidad", status: "Lectura clara" },
                        ].map(({ icon: Icon, label, status }) => (
                          <div
                            key={label}
                            className="flex items-center justify-between border-b border-slate-100 py-2.5 last:border-0"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="h-3.5 w-3.5 text-primary/70" />
                              <span className="text-[11.5px] text-slate-600">{label}</span>
                            </div>
                            <span className="text-right text-[10.5px] font-semibold text-primary">{status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ACOMPAÑAMIENTO */}
                  {!n.title.toLowerCase().includes("google") &&
                    !n.title.toLowerCase().includes("whatsapp") &&
                    !n.title.toLowerCase().includes("carta") &&
                    !n.title.toLowerCase().includes("dashboard") && (
                      <div className="w-[272px] p-4">
                        <div className="flex items-center gap-2.5">
                          <HeartHandshake className="h-5 w-5 text-accent" />
                          <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-400">
                            Acompañamiento Eleva360
                          </p>
                        </div>

                        <p className="mt-3 text-[11.5px] leading-[1.55] text-slate-700">
                          Revisamos avances y ajustamos las soluciones según las necesidades reales del negocio.
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-semibold text-primary">
                          <span className="rounded-full bg-blue-50 px-2.5 py-1">Medir</span>
                          <span className="rounded-full bg-blue-50 px-2.5 py-1">Ajustar</span>
                          <span className="rounded-full bg-blue-50 px-2.5 py-1">Acompañar</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
                 ))}
          </div>
          <MobileHeroCards />
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
    { icon: Search, title: "Te encuentran poco", desc: "Tu negocio no aparece con suficiente claridad cuando alguien busca lo que ofreces." },
    { icon: Target, title: "No queda claro por qué elegirte", desc: "La información disponible no explica bien qué haces, para quién o qué te diferencia." },
    { icon: MessageCircle, title: "Contactarte cuesta más de lo necesario", desc: "El cliente debe esperar, repetir información o dar demasiados pasos para consultar." },
    { icon: ShieldCheck, title: "Faltan señales de confianza", desc: "Perfiles incompletos, información inconsistente o una reputación poco visible dificultan la decisión." },
    { icon: Layers, title: "Tus canales no trabajan juntos", desc: "Google, redes sociales, web y WhatsApp entregan información distinta o funcionan por separado." },
    { icon: Gauge, title: "Inviertes sin una prioridad clara", desc: "Se implementan herramientas o acciones sin saber qué problema conviene resolver primero." },
  ];

  return (
    <section className="bg-[color:var(--muted)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="Antes de elegir una solución"
          title="El problema no siempre es falta de herramientas."
          subtitle="Un negocio puede tener redes sociales, WhatsApp o presencia en Google y aun así perder oportunidades. La clave es identificar dónde está la fricción antes de invertir en otra solución."
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
        <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium leading-relaxed text-foreground/75">
          El diagnóstico permite distinguir qué necesita atención ahora, qué puede esperar y qué no vale la pena implementar todavía.
        </p>
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
      <p className="mt-2 text-right text-[9px] font-semibold text-muted-foreground">
        Ejemplo ilustrativo
      </p>
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
  const etapas = [
    {
      icon: Search,
      title: "Diagnóstico inicial",
      desc: "Entendemos cómo funciona tu negocio, cuál es su objetivo y dónde podrían existir las principales oportunidades de mejora.",
      highlight: "Sin costo",
    },
    {
      icon: Target,
      title: "Propuesta priorizada",
      desc: "Definimos la solución inicial, qué incluye y por qué tiene sentido implementarla antes que otras alternativas.",
      highlight: "Alcance e inversión claros",
    },
    {
      icon: Wrench,
      title: "Implementación por etapas",
      desc: "Avanzamos con la prioridad acordada y dejamos otras posibles mejoras para etapas posteriores.",
      highlight: "Sin contratar de más",
    },
  ];

  return (
    <section id="precios" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Una propuesta a tu medida"
          title="Invierte primero en lo que más sentido tiene."
          subtitle="El diagnóstico inicial nos permite definir qué conviene resolver ahora y qué puede esperar. Antes de implementar, recibirás una propuesta clara con alcance, etapas e inversión."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {etapas.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} variant="zoom">
              <div className="card-shine group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-sm tilt-hover hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="card-shine-inner" />
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <span className="font-display text-sm font-extrabold tracking-[0.2em] text-primary/55">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-center font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-center text-sm text-muted-foreground">{item.desc}</p>
                <div className="mt-auto flex justify-center pt-6">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-center text-xs font-bold text-primary ring-1 ring-primary/15">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            No necesitas contratar todas nuestras capacidades. La propuesta se construye según las prioridades reales de tu negocio.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--gradient-start)] to-[color:var(--gradient-end)] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Solicitar diagnóstico inicial
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

function SolutionSection() {
  const nodes = [
    {
      mockup: GoogleProfileMockup,
      title: "Presencia y visibilidad local",
      desc: "Mejoramos la forma en que tu negocio aparece y se presenta cuando alguien busca lo que ofreces.",
      tools: ["Google Business Profile", "Google Maps", "Información local"],
    },
    {
      mockup: WhatsAppMockup,
      title: "Contacto y atención",
      desc: "Ordenamos el proceso de contacto para que consultar, responder y avanzar resulte más simple.",
      tools: ["WhatsApp Business", "Respuestas y mensajes", "Flujos de contacto"],
    },
    {
      mockup: DigitalMenuMockup,
      title: "Experiencia digital",
      desc: "Creamos puntos de información o conversión claros, útiles y adaptados a la forma en que compra tu cliente.",
      tools: ["Carta digital", "Landing pages", "Sitios web"],
    },
    {
      mockup: EcosystemMockup,
      title: "Conexión y mejora continua",
      desc: "Conectamos canales, simplificamos tareas y medimos para decidir qué conviene mejorar después.",
      tools: ["Sistemas de reseñas", "Automatizaciones", "Seguimiento"],
    },
  ];

  return (
    <section id="solucion" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Capacidades según el diagnóstico"
          title="La solución adecuada depende de lo que tu negocio necesita mejorar."
          subtitle="No todos los negocios necesitan las mismas herramientas. Después de diagnosticar y priorizar, combinamos únicamente las capacidades que tienen sentido para cada etapa."
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
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-soft shadow-soft-hover hover:border-primary/30 animate-float-slow"
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
                  <div className="mt-auto pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary/80">
                      Puede incluir
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                      {n.tools.map((tool) => (
                        <li key={tool} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" aria-hidden />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          Estas capacidades no forman un paquete obligatorio. Se recomiendan únicamente cuando ayudan a resolver una prioridad real del negocio.
        </p>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Users,
      title: "Entender",
      desc: "Conocemos cómo funciona tu negocio, cuáles son sus objetivos y cómo atrae, atiende y acompaña actualmente a sus clientes.",
    },
    {
      number: "02",
      icon: Search,
      title: "Diagnosticar",
      desc: "Verificamos su presencia digital, proceso de contacto, señales de confianza, competidores y posibles puntos de fricción.",
    },
    {
      number: "03",
      icon: Target,
      title: "Priorizar",
      desc: "Definimos qué necesita atención primero, qué puede esperar y qué no conviene implementar por ahora.",
    },
    {
      number: "04",
      icon: Wrench,
      title: "Implementar",
      desc: "Diseñamos y ponemos en marcha la solución inicial acordada, de forma simple y por etapas.",
    },
    {
      number: "05",
      icon: HeartHandshake,
      title: "Acompañar",
      desc: "Medimos lo implementado, revisamos lo aprendido y planteamos siguientes pasos solamente cuando tengan sentido.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-[color:var(--muted)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title="Un proceso claro para decidir mejor antes de implementar."
          subtitle="Cada etapa tiene un propósito: comprender el negocio, identificar oportunidades y avanzar por prioridades, sin implementar herramientas porque sí."
        />

        <div className="relative mt-16">
          <div aria-hidden className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-transparent via-border to-transparent lg:hidden" />
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="relative flex h-full flex-col items-start pl-16 lg:pl-0">
                  <div className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white shadow-sm lg:relative">
                    <span className="font-display text-sm font-bold text-primary">{s.number}</span>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 lg:mt-6">
                    <s.icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base font-medium leading-relaxed text-foreground/75">
          La meta no es implementar más herramientas, sino tomar mejores decisiones sobre qué hacer primero.
        </p>
      </div>
    </section>
  );
}

function ResultsSection() {
  const items = [
    { icon: Search, label: "Presencia y visibilidad", desc: "Facilitar que más personas encuentren y entiendan tu negocio." },
    { icon: MessageCircle, label: "Contacto y atención", desc: "Reducir fricciones cuando un potencial cliente quiere consultar o comprar." },
    { icon: HeartHandshake, label: "Experiencia del cliente", desc: "Hacer más simple y coherente la interacción con el negocio." },
    { icon: ShieldCheck, label: "Confianza y reputación", desc: "Fortalecer las señales que ayudan a un cliente a tomar una decisión." },
    { icon: Clock, label: "Procesos y tiempo", desc: "Simplificar tareas repetitivas cuando realmente exista una oportunidad de mejora." },
  ];

  return (
    <section className="border-y border-border bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Áreas de mejora"
          title="Qué podemos ayudarte a mejorar"
          subtitle="El diagnóstico permite identificar dónde tiene sentido intervenir y qué conviene priorizar."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} variant="zoom">
              <SpotlightCard className="group h-full rounded-2xl border border-border bg-white p-5 shadow-soft shadow-soft-hover">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground">{s.label}</div>
                <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium text-muted-foreground">
          Las prioridades y soluciones dependen del diagnóstico de cada negocio.
        </p>
      </div>
    </section>
  );
}

function PlanSection() {
  const pillars = [
    { icon: Check, title: "Revisión de lo implementado." },
    { icon: LineChart, title: "Seguimiento de las señales relevantes." },
    { icon: Wrench, title: "Ajustes y mejoras priorizadas." },
    { icon: Target, title: "Recomendaciones para la siguiente etapa." },
    { icon: HeartHandshake, title: "Comunicación directa durante el proceso." },
  ];

  return (
    <section id="plan" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-[color:var(--elevation)] p-8 text-white shadow-2xl shadow-primary/30 sm:p-14 lg:p-20">
          <div aria-hidden className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />

          <div className="relative">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                    Después de implementar
                  </span>
                  <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent ring-1 ring-accent/25">
                    Etapa opcional
                  </span>
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-white/60">
                  Acompañamiento continuo
                </p>
                <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Seguimos mejorando contigo, cuando tenga sentido.
                </h2>
                <p className="mt-5 max-w-2xl text-lg text-white/75">
                  Algunas soluciones necesitan seguimiento, medición y ajustes. En esos casos, podemos continuar trabajando contigo después de la implementación inicial.
                </p>
              </div>

              <div className="flex max-w-sm flex-col items-start lg:items-end lg:text-right">
                <p className="text-sm leading-relaxed text-white/65">
                  El alcance y la inversión se definen según el seguimiento que realmente necesite cada negocio.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-[color:var(--foreground)] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-xl"
                >
                  Solicitar diagnóstico inicial
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="mt-3 text-xs leading-relaxed text-white/55">
                  El acompañamiento se propone después de la implementación inicial y solo cuando aporta valor.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <p.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold leading-snug text-white">{p.title}</h3>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 text-sm leading-relaxed text-white/60">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              Medimos, aprendemos y priorizamos nuevos pasos solo cuando el diagnóstico y lo implementado muestran que vale la pena continuar.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Marca y confianza",
      desc: "Fortalecer la identidad y las señales que ayudan a un cliente a reconocer y confiar en el negocio.",
      tools: ["Branding", "Identidad visual", "Sistemas de reseñas"],
    },
    {
      icon: Smartphone,
      title: "Contenido y presencia",
      desc: "Comunicar de forma más clara y consistente cuando el negocio necesita fortalecer su presencia.",
      tools: ["Instagram", "Facebook", "Contenido", "Reels"],
    },
    {
      icon: Globe,
      title: "Web y conversión",
      desc: "Crear espacios digitales que informen, orienten o faciliten una acción concreta.",
      tools: ["Landing pages", "Sitios web", "Experiencias digitales"],
    },
    {
      icon: Target,
      title: "Captación pagada",
      desc: "Activar publicidad solamente cuando existe una base preparada para recibir y convertir nuevas oportunidades.",
      tools: ["Google Ads", "Meta Ads"],
    },
    {
      icon: Workflow,
      title: "Procesos y automatización",
      desc: "Simplificar tareas repetitivas cuando hacerlo aporta tiempo, orden o una mejor atención.",
      tools: ["Automatizaciones", "Integraciones", "Flujos de contacto"],
    },
    {
      icon: BarChart3,
      title: "Medición y optimización",
      desc: "Observar lo implementado para detectar ajustes y decidir con mayor claridad el siguiente paso.",
      tools: ["Seguimiento", "Análisis", "Mejoras priorizadas"],
    },
  ];

  return (
    <section id="futuro" className="bg-[color:var(--muted)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Cuando la siguiente etapa lo requiere"
          title="La solución puede evolucionar junto con tu negocio."
          subtitle="Después de resolver la prioridad inicial, podemos incorporar nuevas capacidades si los objetivos y lo aprendido durante el proceso muestran que tienen sentido."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70} variant="zoom">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm tilt-hover hover:border-primary/40 hover:shadow-lg lg:min-h-[15.5rem]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <it.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{it.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                <div className="mt-auto pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary/80">
                    Puede incluir
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {it.tools.map((tool) => (
                      <li key={tool} className="rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-muted-foreground ring-1 ring-primary/10">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
          No necesitas activar todas estas capacidades. La siguiente etapa se define por lo que tu negocio necesita, puede sostener y tiene sentido priorizar.
        </p>
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
            <p className="mt-6 text-sm text-white/50">Diagnóstico inicial sin costo · Atención directa por WhatsApp</p>
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
        <div className="flex items-center">
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
