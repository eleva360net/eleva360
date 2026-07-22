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

import heroImage from "../assets/hero-eleva360.jpg";

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

  const links = [
    { label: "Solución", href: "#solucion" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Plan Crecimiento", href: "#plan" },
    { label: "Ecosistema", href: "#futuro" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
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
    <Link to="/" className="animate-logo-appear group flex items-center gap-2.5">
      <div className="relative">
        <span
          aria-hidden
          className="animate-logo-glow absolute -inset-2 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-lg"
        />
        <div className="logo-gradient animate-logo-gradient-shift animate-logo-float relative flex h-10 w-10 items-center justify-center rounded-full shadow-lg shadow-primary/15">
          <div className="animate-logo-icon-rotate">
            <Sparkles className="h-5 w-5 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
      <span className="animate-logo-text-appear font-display text-xl font-extrabold tracking-tight text-foreground">
        Eleva<span className="text-primary">360</span>
      </span>
    </Link>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="animate-hero-gradient-drift absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-hero-gradient-drift animation-delay-400 absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col items-start text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary">
              <span className="h-2 w-2 animate-ping rounded-full bg-primary/60" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-muted-foreground">
              Soluciones digitales para negocios · Chile
            </span>
          </div>

          <h1 className="animate-hero-fade-up font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Haz crecer tu negocio
            <br />
            mientras nosotros nos encargamos de tu{" "}
            <span className="gradient-text-animated">presencia digital</span>.
          </h1>

          <p className="animate-hero-fade-up animation-delay-200 mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Implementamos soluciones digitales que atraen más clientes, automatizan procesos y mejoran la experiencia de tus clientes, para que puedas concentrarte en hacer crecer tu negocio.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="animate-hero-scale-in animation-delay-300 group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#como-funciona"
              className="animate-hero-fade-up animation-delay-400 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-base font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              Ver cómo funciona
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Implementación sin fricción
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-accent" /> Resultados desde el primer mes
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="h-4 w-4 text-primary" /> Acompañamiento continuo
            </span>
          </div>
        </div>

        <div className="animate-hero-fade-up animation-delay-300 relative">
          <div className="animate-hero-float absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 blur-2xl" />
          <div className="animate-hero-float relative overflow-hidden rounded-3xl border border-border bg-white p-2 shadow-2xl shadow-primary/10">
            <img
              src={heroImage}
              alt="Ecosistema digital que impulsa el crecimiento de un negocio"
              className="aspect-square w-full rounded-2xl object-cover"
              width={1024}
              height={1024}
              loading="eager"
            />
          </div>

          <div className="absolute -left-3 top-8 hidden rounded-2xl border border-border bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur md:flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Gauge className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Sistema activo</div>
              <div className="text-sm font-bold text-foreground">Automatizado 24/7</div>
            </div>
          </div>
          <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-border bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur md:flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
              <TrendingUp className="h-4 w-4 text-accent" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Este mes</div>
              <div className="text-sm font-bold text-foreground">Crecimiento sostenido</div>
            </div>
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
    <div className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}>
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
      <div className="mx-auto max-w-7xl">
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
              <div className="group flex h-full gap-4 rounded-2xl border border-border bg-white p-5 tilt-hover hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--destructive)]/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <p.icon className="h-5 w-5 text-[color:var(--destructive)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
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
}function PricingSection() {
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
                <div
                  className="group relative h-full rounded-2xl border border-border bg-white p-5 shadow-sm tilt-hover hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 animate-float-slow"
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
                </div>
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
              <div className="group h-full rounded-2xl border border-border bg-white p-5 shadow-sm tilt-hover hover:shadow-lg">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-3xl font-extrabold text-foreground tabular-nums">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
              </div>
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
              <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm tilt-hover hover:border-primary/30 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
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
