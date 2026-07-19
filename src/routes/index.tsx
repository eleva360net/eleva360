import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Instagram,
  Facebook,
  MapPin,
  MessageCircle,
  Menu,
  Phone,
  QrCode,
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
  Utensils,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

import heroImage from "../assets/hero-eleva360.jpg";

const WHATSAPP_URL =
  "https://wa.me/56966645919?text=Hola%20Eleva360%2C%20quiero%20m%C3%A1s%20clientes%20desde%20Google";

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
      { title: "Eleva360 — Más clientes desde Google para tu negocio local" },
      {
        name: "description",
        content:
          "Ayudamos a negocios locales en Chile a aparecer primero en Google Maps, captar clientes por WhatsApp y vender más. SEO Local, Google Business Profile, carta digital y automatización.",
      },
      { name: "keywords", content: "Google Maps, Google Business Profile, SEO Local, Marketing Digital, WhatsApp Business, Carta Digital, Negocios Locales, Chile" },
      { property: "og:title", content: "Eleva360 — Más clientes desde Google para tu negocio local" },
      { property: "og:description", content: "Ayudamos a negocios locales en Chile a aparecer primero en Google Maps, captar clientes por WhatsApp y vender más. SEO Local, Google Business Profile, carta digital y automatización." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
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
        <ServicesSection />
        <PlanSection />
        <BenefitsSection />
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
    { label: "Sistema", href: "#solucion" },
    { label: "Servicios", href: "#servicios" },
    { label: "Plan Impulso", href: "#plan" },
    { label: "Por qué Eleva360", href: "#porque" },
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-g-green)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-g-green)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
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
            <MapPin className="h-5 w-5 text-white" strokeWidth={2.5} />
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
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="animate-hero-gradient-drift absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-hero-gradient-drift animation-delay-400 absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col items-start text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[color:var(--color-g-green)]">
              <span className="h-2 w-2 animate-ping rounded-full bg-[color:var(--color-g-green)]/60" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-muted-foreground">
              Especialistas en negocios locales · Chile
            </span>
          </div>

          <h1 className="animate-hero-fade-up font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Haz que te encuentren.
            <br />
            <span className="text-primary">Convierte búsquedas</span> en clientes.
          </h1>

          <p className="animate-hero-fade-up animation-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ayudamos a negocios locales a aparecer primero en Google, captar
            más clientes por WhatsApp y vender más sin depender de publicidad pagada.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="animate-hero-scale-in animation-delay-300 group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Quiero más clientes
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="animate-hero-fade-up animation-delay-400 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-base font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-g-green)] hover:text-[color:var(--color-g-green)]"
            >
              <MessageCircle className="h-5 w-5 text-[color:var(--color-g-green)]" />
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> +80 negocios activos
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-[color:var(--color-g-yellow)] text-[color:var(--color-g-yellow)]" />
              4.9 promedio en reseñas
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-accent" /> Resultados en 30 días
            </span>
          </div>
        </div>

        <div className="animate-hero-fade-up animation-delay-300 relative">
          <div className="animate-hero-float absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-[color:var(--color-g-blue)]/5 to-accent/10 blur-2xl" />
          <div className="animate-hero-float relative overflow-hidden rounded-3xl border border-border bg-white p-2 shadow-2xl shadow-primary/10">
            <img
              src={heroImage}
              alt="Negocio local creciendo con Google Maps, WhatsApp y reseñas"
              className="aspect-square w-full rounded-2xl object-cover"
              width={1024}
              height={1024}
              loading="eager"
            />
          </div>

          {/* Floating badges */}
          <div className="absolute -left-3 top-8 hidden rounded-2xl border border-border bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur md:flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-g-blue)]/10">
              <MapPin className="h-4 w-4 text-[color:var(--color-g-blue)]" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Ranking Maps</div>
              <div className="text-sm font-bold text-foreground">#1 en tu zona</div>
            </div>
          </div>
          <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-border bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur md:flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-g-green)]/10">
              <MessageCircle className="h-4 w-4 text-[color:var(--color-g-green)]" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Nuevo cliente</div>
              <div className="text-sm font-bold text-foreground">+156% mensajes</div>
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
    <div
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

function ProblemSection() {
  const problems = [
    { icon: Star, title: "Pocas reseñas", desc: "La gente no confía si no te ven recomendado." },
    { icon: Search, title: "No apareces primero", desc: "Tu competencia se lleva las búsquedas locales." },
    { icon: Phone, title: "Llaman a la competencia", desc: "Los clientes eligen al que aparece antes." },
    { icon: MessageCircle, title: "WhatsApp desordenado", desc: "Mensajes que se pierden y clientes que no vuelven." },
    { icon: Store, title: "Perfil abandonado", desc: "Fotos viejas, horarios erróneos, cero información." },
    { icon: Utensils, title: "Sin menú digital", desc: "Los clientes se van si no ven qué ofreces." },
  ];

  return (
    <section className="bg-[color:var(--muted)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="El problema"
          title={
            <>
              ¿Tu negocio aparece cuando un cliente
              <span className="text-primary"> busca en Google?</span>
            </>
          }
          subtitle="Si respondiste 'no sé' o 'no', estos son los problemas que están frenando tu crecimiento."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group flex h-full gap-4 rounded-2xl border border-border bg-white p-5 tilt-hover hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--destructive)]/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <p.icon className="h-5 w-5 text-[color:var(--destructive)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {p.title}
                  </h3>
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

function SolutionSection() {
  const nodes = [
    {
      icon: MapPin,
      title: "Google Business Profile",
      desc: "Optimizado para aparecer primero en Maps.",
      color: "var(--color-g-blue)",
    },
    {
      icon: Star,
      title: "Sistema de Reseñas",
      desc: "Convierte clientes felices en reseñas 5 estrellas.",
      color: "var(--color-g-yellow)",
    },
    {
      icon: Bot,
      title: "WhatsApp Automatizado",
      desc: "Responde 24/7 y no pierdas ni un cliente.",
      color: "var(--color-g-green)",
    },
    {
      icon: QrCode,
      title: "Carta Digital + QR",
      desc: "Tu menú siempre a un escaneo de distancia.",
      color: "var(--color-g-red)",
    },
  ];

  return (
    <section id="solucion" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="La solución"
          title={
            <>
              Con el <span className="gradient-text-animated">Sistema Eleva360</span>{" "}
              todo trabaja en conjunto.
            </>
          }
          subtitle="Cuatro piezas conectadas que hacen que tu negocio se encuentre, convierta y crezca — sin que tengas que hacer nada."
        />

        <div className="relative mt-16">
          {/* Connecting lines (desktop) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 400"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-g-blue)" />
                <stop offset="33%" stopColor="var(--color-g-yellow)" />
                <stop offset="66%" stopColor="var(--color-g-green)" />
                <stop offset="100%" stopColor="var(--color-g-red)" />
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
                  className="group relative h-full rounded-2xl border border-border bg-white p-6 shadow-sm tilt-hover hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 animate-float-slow"
                  style={{ animationDelay: `${i * 400}ms` }}
                >
                <div className="absolute -top-3 left-6 rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  0{i + 1}
                </div>
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `color-mix(in oklab, ${n.color} 15%, transparent)` }}
                >
                  <n.icon className="h-6 w-6" style={{ color: n.color }} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {n.title}
                </h3>
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

function ServiceCard({
  icon: Icon,
  title,
  price,
  features,
  color,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  price: string;
  features: string[];
  color: string;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 }, true);
  const [revealed, setRevealed] = useState(false);

  const isAnimating = inView && !revealed;
  const visible = inView || revealed;

  return (
    <div
      ref={ref}
      onAnimationEnd={() => setRevealed(true)}
      style={{ animationDelay: `${index * 120}ms` }}
      className={[
        "group flex flex-col rounded-3xl border border-border bg-white p-7 shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:scale-[1.02] hover:border-primary hover:shadow-xl hover:shadow-primary/10",
        isAnimating ? "animate-service-card" : "",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <div
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: `color-mix(in oklab, ${color} 15%, transparent)` }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-display text-3xl font-extrabold text-foreground">{price}</span>
        <span className="text-sm text-muted-foreground">CLP</span>
      </div>
      <ul className="mt-6 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-g-green)]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-primary hover:text-white"
      >
        Quiero este servicio
        <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="bg-[color:var(--muted)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Servicios"
          title="Herramientas simples. Resultados reales."
          subtitle="Elige un servicio puntual o combínalos. Todo pensado para negocios locales que quieren crecer."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <ServiceCard
            index={0}
            icon={(p) => <MapPin {...p} className={`${p.className} text-[color:var(--color-g-blue)]`} />}
            title="Optimización Google Maps"
            price="$60.000"
            color="var(--color-g-blue)"
            features={[
              "Optimización completa del perfil",
              "SEO Local por zona y categoría",
              "Categorías, productos y servicios",
              "Fotos profesionales del negocio",
              "Mini sitio Google integrado",
              "QR de reseñas físico",
              "Perfil listo para convertir",
            ]}
          />
          <ServiceCard
            index={1}
            icon={(p) => <QrCode {...p} className={`${p.className} text-[color:var(--color-g-red)]`} />}
            title="Carta Digital + QR"
            price="$40.000"
            color="var(--color-g-red)"
            features={[
              "Diseño 100% responsive",
              "Integración con Google Business",
              "Código QR imprimible incluido",
              "Actualización simple del menú",
            ]}
          />
          <ServiceCard
            index={2}
            icon={(p) => <Bot {...p} className={`${p.className} text-[color:var(--color-g-green)]`} />}
            title="WhatsApp Automatizado"
            price="$40.000"
            color="var(--color-g-green)"
            features={[
              "Botón de WhatsApp en Google",
              "Mensaje automático de bienvenida",
              "Respuestas rápidas configuradas",
              "Integración con carta digital",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PlanSection() {
  const features = [
    "Optimización continua del perfil",
    "Publicaciones mensuales en Google",
    "Actualización constante de fotos",
    "Respuesta profesional a reseñas",
    "Cambios de horarios y servicios",
    "Monitoreo del posicionamiento",
    "Recomendaciones para más clientes",
  ];

  return (
    <section id="plan" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-[color:var(--elevation)] p-8 text-white shadow-2xl shadow-primary/20 sm:p-12 lg:p-14">
          {/* Decorative glow */}
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-[color:var(--color-g-yellow)]" />
                Más recomendado
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Plan Impulso
              </h2>
              <p className="mt-4 max-w-md text-base text-white/70 sm:text-lg">
                Nos encargamos de mantener tu negocio activo para que siga
                apareciendo frente a nuevos clientes todos los meses.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold sm:text-6xl">
                  $39.990
                </span>
                <span className="text-white/60">CLP / mes</span>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-[color:var(--foreground)] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-xl"
              >
                Quiero mantener mi negocio creciendo
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Incluye cada mes
              </div>
              <ul className="mt-4 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-g-green)]/20">
                      <Check className="h-3 w-3 text-[color:var(--color-g-green)]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const items = [
    { icon: TrendingUp, label: "Más visibilidad", value: "+320%", color: "var(--color-g-blue)" },
    { icon: Phone, label: "Más llamadas", value: "+180%", color: "var(--color-g-red)" },
    { icon: MessageCircle, label: "Más mensajes", value: "+240%", color: "var(--color-g-green)" },
    { icon: Star, label: "Más reseñas", value: "+5x", color: "var(--color-g-yellow)" },
    { icon: Users, label: "Más clientes", value: "+60%", color: "var(--primary)" },
  ];

  return (
    <section className="border-y border-border bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Beneficios"
          title="Lo que consiguen nuestros clientes"
          subtitle="Métricas promedio observadas en los primeros 90 días con el Sistema Eleva360."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `color-mix(in oklab, ${s.color} 15%, transparent)` }}
              >
                <s.icon className="h-5 w-5" style={{ color: s.color }} />
              </div>
              <div className="font-display text-2xl font-extrabold text-foreground">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const items = [
    { icon: HeartHandshake, title: "Atención personalizada", desc: "Trato humano, no un ticket más en un CRM." },
    { icon: MapPin, title: "Presencial y remoto", desc: "Vamos a tu local o coordinamos por videollamada." },
    { icon: Target, title: "Especialistas en negocios locales", desc: "Sabemos cómo compite tu rubro en tu zona." },
    { icon: BarChart3, title: "Resultados medibles", desc: "Reportes claros, sin humo ni palabras raras." },
  ];

  return (
    <section id="porque" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Por qué Eleva360"
          title="Una agencia que trabaja como parte de tu equipo."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
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

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-g-green)] shadow-lg">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              ¿Listo para conseguir más clientes desde Google?
            </h2>
            <p className="mt-6 text-lg text-white/75">
              Mientras tu competencia espera clientes, nosotros hacemos que te
              encuentren primero.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-g-green)] px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Respuesta en menos de 1 hora hábil.
            </p>
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
            Haz que te encuentren. Convierte búsquedas en clientes.
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[color:var(--color-g-green)] hover:text-[color:var(--color-g-green)]"
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
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-g-green)] text-white shadow-xl shadow-[color:var(--color-g-green)]/40 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-g-green)]/40" />
    </a>
  );
}
