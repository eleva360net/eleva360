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
import heroImage from "../assets/hero-eleva360.png";
import Hero from "../components/hero";

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
      className={`reveal ${inView ? visibleCls : ""} ${className}`}>
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
    "Restaurantes",
    "Cafeterías",
    "Peluquerías",
    "Barberías",
    "Clínicas dentales",
    "Talleres mecánicos",
    "Veterinarias",
    "Gimnasios",
    "Panaderías",
    "Farmacias",
    "Estudios de tatuajes",
    "Escuelas de manejo",
    "Ferreterías",
    "Notarías",
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
      { property: "og:description", content: "Implementamos soluciones digitales que atraen más clientes, automatizan procesos y mejoran la experiencia. Concéntrate en tu negocio, del resto nos[...]" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Eleva360 — Soluciones digitales para hacer crecer tu negocio" },
      { name: "twitter:description", content: "Implementamos soluciones digitales que atraen más clientes, automatizan procesos y mejoran la experiencia. Concéntrate en tu negocio, del resto no[...]" },
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
        <Hero />
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

/* rest of the file remains unchanged (omitted for brevity) */
