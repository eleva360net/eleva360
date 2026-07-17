import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Globe,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";

import heroImage from "../assets/hero-elevate360.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Elevate360 — Soluciones digitales para negocios" },
      {
        name: "description",
        content:
          "Transformamos tu negocio con estrategia digital, diseño web, automatización y datos. Escalá con Elevate360.",
      },
      {
        property: "og:title",
        content: "Elevate360 — Soluciones digitales para negocios",
      },
      {
        property: "og:description",
        content:
          "Transformamos tu negocio con estrategia digital, diseño web, automatización y datos. Escalá con Elevate360.",
      },
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
        <ServicesSection />
        <StatsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Elevate<span className="gradient-text">360</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Hablemos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <Menu className="h-5 w-5 text-foreground" />
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
              href="#contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Hablemos
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 backdrop-blur-sm">
            <span className="gradient-bg h-2 w-2 rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Soluciones digitales
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Elevá tu negocio al siguiente nivel
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            En Elevate360 diseñamos estrategias digitales completas: web, datos,
            automatización y experiencia de usuario. Todo en un solo lugar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="gradient-bg inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
            >
              Empezar proyecto
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-accent" /> Entrega rápida
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="h-4 w-4 text-accent" /> 100% personalizado
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="gradient-border glow overflow-hidden rounded-2xl">
            <img
              src={heroImage}
              alt="Visualización abstracta de transformación digital para negocios"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Diseño web y presencia digital",
      description:
        "Sitios modernos, rápidos y optimizados para convertir visitantes en clientes.",
    },
    {
      icon: BarChart3,
      title: "Datos e inteligencia de negocio",
      description:
        "Dashboards, reportes y análisis para tomar decisiones con confianza.",
    },
    {
      icon: Bot,
      title: "Automatización y productividad",
      description:
        "Optimizá procesos repetitivos con flujos automatizados y herramientas inteligentes.",
    },
    {
      icon: Smartphone,
      title: "Experiencia de usuario",
      description:
        "Interfaces intuitivas que tus clientes disfrutan usar, en cualquier dispositivo.",
    },
    {
      icon: Rocket,
      title: "Estrategia de crecimiento",
      description:
        "Planificación digital para escalar tu negocio de forma sostenible.",
    },
    {
      icon: Sparkles,
      title: "Identidad de marca",
      description:
        "Diseño visual coherente que comunica el valor de tu negocio al instante.",
    },
  ];

  return (
    <section id="servicios" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Servicios que impulsan resultados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Combinamos creatividad, tecnología y estrategia para potenciar cada
            área de tu negocio.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group gradient-border p-6 transition-all hover:shadow-lg"
            >
              <div className="gradient-bg mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "+120", label: "Proyectos entregados" },
    { value: "95%", label: "Clientes recurrentes" },
    { value: "+40%", label: "Mejora promedio en conversiones" },
    { value: "7 años", label: "Experiencia en el mercado" },
  ];

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-bold gradient-text sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description:
        "Conocemos tu negocio, objetivos y desafíos para definir el rumbo correcto.",
    },
    {
      number: "02",
      title: "Diseño y estrategia",
      description:
        "Creamos una propuesta visual y funcional alineada a tus metas de crecimiento.",
      highlight: true,
    },
    {
      number: "03",
      title: "Implementación y escala",
      description:
        "Lanzamos, medimos y optimizamos para que los resultados se sostengan en el tiempo.",
    },
  ];

  return (
    <section id="proceso" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Un proceso simple, resultados concretos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada paso está pensado para avanzar rápido sin perder calidad ni
            alineación con tu negocio.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative rounded-2xl p-8 ${
                step.highlight
                  ? "gradient-bg text-white"
                  : "border border-border bg-card text-card-foreground"
              }`}
            >
              <div
                className={`font-display text-5xl font-bold ${
                  step.highlight ? "text-white/30" : "gradient-text"
                }`}
              >
                {step.number}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                {step.title}
              </h3>
              <p
                className={`mt-3 ${
                  step.highlight ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contacto" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-elevation px-6 py-16 text-center text-elevation-foreground sm:px-12 lg:py-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="mt-6 text-lg text-elevation-foreground/80">
              Agendá una llamada gratuita y descubrí cómo Elevate360 puede
              ayudarte a crecer.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hola@elevate360.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-elevation transition-all hover:bg-white/90 hover:shadow-lg"
              >
                <Mail className="h-5 w-5" />
                Escribinos ahora
              </a>
              <a
                href="tel:+5491112345678"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Llamar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link to="/" className="flex items-center gap-2">
            <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Elevate<span className="gradient-text">360</span>
            </span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Argentina
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" /> hola@elevate360.com
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elevate360. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
