import logoEleva360 from "../assets/LogoEleva360-transparente.png";
import logoEleva360Webp from "../assets/LogoEleva360-transparente.webp";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  MapPin,
  MessageCircle,
  Menu,
  Star,
  Users,
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
  Globe,
  Wrench,
  Gauge,
  QrCode,
  Smartphone,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";
import menuEntradaPremium from "../assets/menu-entrada-premium.webp";
import menuPlatoPremium from "../assets/menu-plato-premium.webp";
import menuBebidaPremium from "../assets/menu-bebida-premium.webp";
import { HorizonteHero } from "../components/hero/HorizonteHero";

const SITE_URL = "https://www.eleva360.net";
const HOME_URL = `${SITE_URL}/`;
const SOCIAL_IMAGE_URL = `${SITE_URL}${logoEleva360}`;
const WHATSAPP_URL =
  "https://wa.me/56966645919?text=Hola%20Eleva360%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20inicial%20para%20mi%20negocio.";

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
          "Analizamos qué necesita mejorar tu negocio y priorizamos soluciones digitales simples, por etapas y adaptadas a tu realidad.",
      },
      { name: "keywords", content: "Soluciones digitales, tecnología para negocios, automatización, presencia digital, transformación digital, Chile" },
      { property: "og:title", content: "Eleva360 | Soluciones digitales para negocios" },
      { property: "og:description", content: "Analizamos qué necesita mejorar tu negocio y priorizamos soluciones digitales simples, por etapas y adaptadas a tu realidad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: HOME_URL },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { name: "twitter:title", content: "Eleva360 | Soluciones digitales para negocios" },
      { name: "twitter:description", content: "Analizamos qué necesita mejorar tu negocio y priorizamos soluciones digitales simples, por etapas y adaptadas a tu realidad." },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
    ],
  links: [
    { rel: "canonical", href: HOME_URL },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Serif:ital@1&family=Inter+Tight:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap",
    },
  ],
  }),
});

function Index() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="grain-overlay fixed inset-0 z-[1]" aria-hidden />
      <Navbar />
      <main className="flex-1">
        <HorizonteHero whatsappUrl={WHATSAPP_URL} />
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
    { label: "Capacidades", href: "#capacidades" },
    { label: "Cómo trabajamos", href: "#como-funciona" },
    { label: "Por qué Eleva360", href: "#porque" },
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

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all hover:shadow-md whatsapp-link"
          >
            Solicitar diagnóstico
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold whatsapp-link"
            >
              Solicitar diagnóstico
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo({ loading = "eager" }: { loading?: "eager" | "lazy" }) {
  return (
    <Link to="/" className="group flex items-center">
      <picture>
        <source srcSet={logoEleva360Webp} type="image/webp" />
        <img
          src={logoEleva360}
          alt="Eleva360"
          width={1809}
          height={576}
          loading={loading}
          decoding="async"
          className="brand-logo h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </picture>
    </Link>
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
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-ink">
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
    <div
      className="rounded-xl border border-border bg-[color:var(--muted)] p-3"
      role="img"
      aria-label="Maqueta ilustrativa de presencia local para Panadería Los Aromas"
    >
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
          <QrCode className="h-3.5 w-3.5 text-brand-ink" />
        </div>
      </div>
      <div className="mt-2 space-y-1.5">
        {items.map((it) => (
          <div
            key={it.name}
            className="flex items-center justify-between rounded-md bg-white px-2 py-1.5 text-[10px] shadow-sm"
          >
            <span className="font-medium text-foreground">{it.name}</span>
            <span className="font-bold text-brand-ink">{it.price}</span>
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
      desc: "Entendemos cómo funciona tu negocio, qué quieres lograr y cómo se compara tu presencia digital con la de tu competencia directa.",
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-brand-ink transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <span className="font-display text-sm font-extrabold tracking-[0.2em] text-brand-ink/55">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-center font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-center text-sm text-muted-foreground">{item.desc}</p>
                <div className="mt-auto flex justify-center pt-6">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-center text-xs font-bold text-brand-ink ring-1 ring-primary/15">
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
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl whatsapp-link"
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
      icon: MapPin,
      tone: "blue",
      title: "Presencia y visibilidad local",
      desc: "Mejoramos la forma en que tu negocio aparece y se presenta cuando alguien busca lo que ofreces.",
      tools: ["Google Business Profile", "Google Maps", "Información local"],
    },
    {
      mockup: WhatsAppMockup,
      icon: MessageCircle,
      tone: "green",
      title: "Contacto y atención",
      desc: "Ordenamos el proceso de contacto para que consultar, responder y avanzar resulte más simple.",
      tools: ["WhatsApp Business", "Respuestas y mensajes", "Flujos de contacto"],
    },
    {
      mockup: DigitalMenuMockup,
      icon: Smartphone,
      tone: "cyan",
      title: "Experiencia digital",
      desc: "Creamos puntos de información o conversión claros, útiles y adaptados a la forma en que compra tu cliente.",
      tools: ["Carta digital", "Landing pages", "Sitios web"],
    },
    {
      mockup: EcosystemMockup,
      icon: Workflow,
      tone: "indigo",
      title: "Conexión y mejora continua",
      desc: "Conectamos canales, simplificamos tareas y medimos para decidir qué conviene mejorar después.",
      tools: ["Sistemas de reseñas", "Automatizaciones", "Seguimiento"],
    },
  ];

  return (
    <section
      id="capacidades"
      className="capabilities-premium-section relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="capabilities-section-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="capabilities-section-light capabilities-section-light-left" aria-hidden="true" />
      <div className="capabilities-section-light capabilities-section-light-right" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Capacidades según el diagnóstico"
          title="La solución adecuada depende de lo que tu negocio necesita mejorar."
          subtitle="No todos los negocios necesitan las mismas herramientas. Después de diagnosticar y priorizar, combinamos únicamente las capacidades que tienen sentido para cada etapa."
        />

        <div className="relative mt-12">
          <div className="flex justify-center">
            <span className="rounded-full border border-border/80 bg-white/90 px-3 py-1 text-[0.65rem] font-semibold whitespace-nowrap text-muted-foreground shadow-sm backdrop-blur">
              Ejemplos ilustrativos
            </span>
          </div>

          <div className="capability-card-grid relative mt-5 grid gap-6 md:grid-cols-2 lg:gap-7">
            {nodes.map((n, i) => (
              <Reveal
                key={n.title}
                delay={i * 100}
                variant="zoom"
                className="h-full"
              >
                <article
                  className={`capability-premium-card capability-tone-${n.tone} group flex h-full flex-col rounded-[2rem] p-5 sm:p-6`}
                >
                  <div className="capability-card-glow" aria-hidden="true" />
                  <div className="capability-card-shine" aria-hidden="true" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="capability-number font-display text-xs font-extrabold tracking-[0.2em]">
                        0{i + 1}
                      </span>
                      <span className="capability-status-dot" aria-hidden="true" />
                    </div>
                    <div className="capability-icon flex h-10 w-10 items-center justify-center rounded-xl" aria-hidden="true">
                      <n.icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  <div className="capability-mockup-shell relative z-10 mt-4 flex min-h-44 items-center rounded-[1.4rem] p-4 sm:p-5">
                    <div className="capability-mockup-grid pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden="true" />
                    <div className="capability-connection-line pointer-events-none absolute inset-x-7 top-7 h-px" aria-hidden="true" />
                    <div className="capability-mockup relative z-10 mx-auto w-full max-w-lg">
                      <n.mockup />
                    </div>
                  </div>

                  <div className="relative z-10 mt-4 flex flex-1 flex-col">
                    <h3 className="font-display text-xl font-bold leading-snug text-foreground sm:text-[1.35rem]">
                      {n.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                      {n.desc}
                    </p>
                    <div className="mt-auto pt-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-ink/80">
                        Puede incluir
                      </p>
                      <ul className="mt-2.5 flex flex-wrap gap-2">
                        {n.tools.map((tool) => (
                          <li key={tool} className="capability-chip rounded-full px-3 py-1.5 text-xs font-semibold">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
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
      tone: "blue",
      title: "Entender",
      desc: "Conocemos cómo funciona tu negocio, qué quieres lograr y cómo atraes, atiendes y acompañas actualmente a tus clientes.",
    },
    {
      number: "02",
      icon: Search,
      tone: "cyan",
      title: "Diagnosticar",
      desc: "Revisamos tu presencia digital, proceso de contacto, señales de confianza y competencia directa para detectar fricciones y oportunidades.",
    },
    {
      number: "03",
      icon: Target,
      tone: "indigo",
      title: "Priorizar",
      desc: "Definimos qué necesita atención primero, qué puede esperar y qué no conviene implementar por ahora.",
    },
    {
      number: "04",
      icon: Wrench,
      tone: "sky",
      title: "Implementar",
      desc: "Diseñamos y ponemos en marcha la solución inicial acordada, de forma simple y por etapas.",
    },
    {
      number: "05",
      icon: HeartHandshake,
      tone: "green",
      title: "Acompañar",
      desc: "Medimos lo implementado, revisamos lo aprendido y planteamos siguientes pasos solamente cuando tengan sentido.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedStep = steps[activeStep];

  const selectTab = (index: number) => {
    setActiveStep(index);
    tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % steps.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + steps.length) % steps.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = steps.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      selectTab(nextIndex);
    }
  };

  return (
    <section id="como-funciona" className="bg-[color:var(--muted)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="methodology-shell rounded-[2rem] px-5 py-9 sm:px-8 sm:py-12 lg:rounded-[2.5rem] lg:px-12 lg:py-14">
          <div className="methodology-shell-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="methodology-shell-light methodology-shell-light-top" aria-hidden="true" />
          <div className="methodology-shell-light methodology-shell-light-bottom" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <span className="methodology-eyebrow inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Cómo trabajamos
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Un proceso claro para decidir mejor antes de implementar.
            </h2>
            <p className="methodology-intro mt-4 text-base leading-relaxed sm:text-lg">
              Cada etapa tiene un propósito: comprender el negocio, identificar oportunidades y avanzar por prioridades, sin implementar herramientas porque sí.
            </p>
          </div>

          <div className="relative z-10 mt-12 hidden lg:block">
            <div className="methodology-track" aria-hidden="true">
              <div
                className="methodology-track-progress"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            <div className="relative grid grid-cols-5" role="tablist" aria-label="Etapas de la metodología Eleva360">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isComplete = index < activeStep;

                return (
                  <button
                    key={step.title}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    id={`methodology-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="methodology-detail-panel"
                    tabIndex={isActive ? 0 : -1}
                    data-complete={isComplete ? "true" : "false"}
                    className={`methodology-tab methodology-tone-${step.tone} group flex min-w-0 flex-col items-center px-2 text-center`}
                    onClick={() => setActiveStep(index)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                  >
                    <span className="methodology-tab-number font-display text-[0.65rem] font-extrabold tracking-[0.2em]">
                      {step.number}
                    </span>
                    <span className="methodology-tab-node relative mt-2 flex h-14 w-14 items-center justify-center rounded-2xl">
                      {isActive && <span className="methodology-node-pulse absolute inset-0 rounded-2xl" aria-hidden="true" />}
                      <step.icon className="relative z-10 h-5 w-5" aria-hidden="true" />
                      <span className="methodology-node-status absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full" aria-hidden="true" />
                    </span>
                    <span className="methodology-tab-title mt-3 truncate font-display text-sm font-bold">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id="methodology-detail-panel"
              role="tabpanel"
              aria-labelledby={`methodology-tab-${activeStep}`}
              aria-live="polite"
              className={`methodology-detail-panel methodology-tone-${selectedStep.tone} relative mt-9 min-h-60 overflow-hidden rounded-[1.75rem] p-7 lg:p-9`}
            >
              <div className="methodology-detail-grid pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="methodology-detail-glow pointer-events-none absolute inset-0" aria-hidden="true" />
              <div key={selectedStep.number} className="methodology-detail-content relative z-10 grid items-center gap-7 md:grid-cols-[auto_1fr]">
                <div className="methodology-detail-symbol flex h-24 w-24 items-center justify-center rounded-[1.6rem]" aria-hidden="true">
                  <selectedStep.icon className="h-10 w-10" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="methodology-detail-number font-display text-sm font-extrabold tracking-[0.22em]">
                      {selectedStep.number}
                    </span>
                    <span className="methodology-stage-label rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em]">
                      Etapa {selectedStep.number} de 05
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {selectedStep.title}
                  </h3>
                  <p className="methodology-detail-description mt-3 max-w-3xl text-base leading-relaxed sm:text-lg">
                    {selectedStep.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 space-y-3 lg:hidden">
            {steps.map((s, i) => (
              <div key={s.title} className={`methodology-accordion-item methodology-tone-${s.tone} overflow-hidden rounded-2xl`}>
                <h3>
                  <button
                    id={`methodology-accordion-trigger-${i}`}
                    type="button"
                    className="methodology-accordion-trigger flex min-h-16 w-full items-center gap-3 px-4 py-3 text-left"
                    aria-expanded={activeStep === i}
                    aria-controls={`methodology-accordion-panel-${i}`}
                    onClick={() => setActiveStep(i)}
                  >
                    <span className="methodology-accordion-number font-display text-[0.65rem] font-extrabold tracking-[0.18em]">
                      {s.number}
                    </span>
                    <span className="methodology-accordion-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" aria-hidden="true">
                      <s.icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0 flex-1 font-display text-sm font-bold text-white sm:text-base">
                      {s.title}
                    </span>
                    <ChevronRight
                      className={`methodology-accordion-chevron h-4 w-4 shrink-0 ${activeStep === i ? "rotate-90" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`methodology-accordion-panel-${i}`}
                  role="region"
                  aria-labelledby={`methodology-accordion-trigger-${i}`}
                  hidden={activeStep !== i}
                  className="methodology-accordion-panel px-4 pb-5 pl-[4.75rem] pr-5"
                >
                  <span className="methodology-stage-label inline-flex rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em]">
                    Etapa {s.number} de 05
                  </span>
                  <p className="methodology-detail-description mt-3 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="methodology-closing relative z-10 mx-auto mt-10 max-w-3xl text-center text-sm font-medium leading-relaxed sm:text-base">
            La meta no es implementar más herramientas, sino tomar mejores decisiones sobre qué hacer primero.
          </p>
        </div>
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
    <section className="improvements-editorial-section relative isolate overflow-hidden border-y border-border px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="improvements-editorial-light pointer-events-none absolute -right-48 top-12 h-[34rem] w-[34rem] rounded-full" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 xl:gap-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-ink">
            Áreas de mejora
          </span>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Qué podemos ayudarte a mejorar
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            El diagnóstico permite identificar dónde tiene sentido intervenir y qué conviene priorizar.
          </p>

          <div className="improvements-editorial-signal mt-8 h-1 w-16 rounded-full" aria-hidden="true" />

          <div className="mt-10 flex max-w-lg items-start gap-4 border-t border-border/80 pt-6">
            <span className="improvements-closing-marker mt-2 h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
            <p className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              Las prioridades y soluciones dependen del diagnóstico de cada negocio.
            </p>
          </div>
        </div>

        <div className="improvement-list-surface relative overflow-hidden rounded-[2rem]">
          <div className="improvement-list-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="improvement-list-line pointer-events-none absolute bottom-8 left-[2.55rem] top-8 w-px sm:left-[3.05rem]" aria-hidden="true" />

          <ol className="relative z-10">
          {items.map((s, i) => (
            <Reveal
              as="li"
              key={s.label}
              delay={i * 70}
              className="improvement-row group relative"
            >
              <div className="improvement-row-accent pointer-events-none absolute bottom-5 left-0 top-5 w-0.5 rounded-full" aria-hidden="true" />
              <div className="improvement-row-inner grid min-w-0 grid-cols-[2.25rem_2.75rem_1fr] items-start gap-3 px-5 py-6 sm:grid-cols-[2.5rem_3rem_1fr] sm:gap-4 sm:px-7 sm:py-7">
                <span className="improvement-number relative z-10 pt-3 font-mono text-[0.65rem] font-bold tracking-[0.18em]">
                  0{i + 1}
                </span>
                <div className="improvement-icon relative z-10 flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12" aria-hidden="true">
                  <s.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  <span className="improvement-node absolute -left-[1.8rem] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full sm:-left-[2.05rem]" />
                </div>
                <div className="min-w-0 pt-1.5">
                  <h3 className="font-display text-base font-bold leading-snug text-foreground sm:text-lg">
                    {s.label}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          </ol>
        </div>
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
                    <LineChart className="h-3.5 w-3.5 text-accent" aria-hidden />
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
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl whatsapp-link"
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
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-brand-ink transition-transform duration-300 group-hover:scale-110">
                    <it.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{it.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                <div className="mt-auto pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-ink/80">
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
    {
      icon: Search,
      title: "Diagnóstico antes de proponer",
      desc: "Primero comprendemos el contexto y el problema. Después evaluamos qué capacidades pueden ayudar.",
    },
    {
      icon: Target,
      title: "Prioridades comprensibles",
      desc: "Explicamos qué conviene resolver primero, qué puede esperar y por qué.",
    },
    {
      icon: Layers,
      title: "Soluciones adaptadas",
      desc: "El alcance considera los objetivos, recursos y realidad de cada negocio, sin copiar un paquete estándar.",
    },
    {
      icon: Workflow,
      title: "Implementación gradual",
      desc: "Comenzamos por la prioridad acordada y ampliamos la solución solamente cuando se justifica.",
    },
    {
      icon: MessageCircle,
      title: "Comunicación directa",
      desc: "Mantenemos una comunicación clara y comprensible antes, durante y después de implementar.",
    },
    {
      icon: LineChart,
      title: "Mejora basada en lo aprendido",
      desc: "Revisamos lo implementado para decidir ajustes y posibles siguientes pasos con mayor claridad.",
    },
  ];

  return (
    <section id="porque" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Una forma distinta de trabajar"
          title="Porque la solución comienza antes de elegir una herramienta."
          subtitle="Partimos entendiendo el negocio, ordenamos las prioridades y proponemos una forma realista de avanzar."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <SpotlightCard className="group h-full rounded-2xl border border-border bg-white p-6 shadow-soft shadow-soft-hover hover:border-primary/30 lg:min-h-[14rem]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-brand-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
          No se trata de contratar más, sino de saber qué vale la pena implementar y en qué momento.
        </p>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80 ring-1 ring-white/15">
              <Search className="h-4 w-4" aria-hidden />
              El primer paso es entender
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Conversemos sobre lo que tu negocio necesita mejorar.
            </h2>
            <p className="mt-6 text-lg text-white/75">
              Cuéntanos cómo funciona hoy, qué quieres lograr y dónde sientes que están las principales dificultades. Revisaremos si Eleva360 puede ayudarte y cuál podría ser el siguiente paso.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl whatsapp-link"
              >
                Solicitar diagnóstico inicial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Una conversación inicial para conocer tu negocio y evaluar si tiene sentido avanzar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-col gap-3">
          <Logo loading="lazy" />
          <p className="max-w-sm text-sm text-muted-foreground">
            Soluciones digitales para negocios que comienzan por entender qué necesita mejorar.
          </p>
        </div>
        <nav aria-label="Enlaces del pie de página" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground md:justify-end">
          <a href="#capacidades" className="inline-flex min-h-11 items-center transition-colors hover:text-foreground">
            Capacidades
          </a>
          <a href="#como-funciona" className="inline-flex min-h-11 items-center transition-colors hover:text-foreground">
            Cómo trabajamos
          </a>
          <a href="#porque" className="inline-flex min-h-11 items-center transition-colors hover:text-foreground">
            Por qué Eleva360
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 transition-colors rounded-full px-4 whatsapp-link"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>
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
      aria-label="Conversar con Eleva360 por WhatsApp"
      className="animate-wa-bob fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 whatsapp-link"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute hidden h-full w-full animate-ping rounded-full bg-[var(--whatsapp)]/40 sm:inline-flex" />
    </a>
  );
}
