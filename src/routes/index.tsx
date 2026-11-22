import logoEleva360 from "../assets/LogoEleva360-transparente.png";
import logoEleva360Webp from "../assets/LogoEleva360-transparente.webp";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BusinessSections } from "../components/BusinessSections";
import { HorizonteHero } from "../components/hero/HorizonteHero";

const SITE_URL = "https://www.eleva360.net";
const HOME_URL = `${SITE_URL}/`;
const SOCIAL_IMAGE_URL = `${SITE_URL}${logoEleva360}`;
const WHATSAPP_URL =
  "https://wa.me/56966645919?text=Hola%20Eleva360%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20inicial%20para%20mi%20negocio.";

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
      {
        name: "keywords",
        content:
          "Soluciones digitales, tecnología para negocios, automatización, presencia digital, transformación digital, Chile",
      },
      { property: "og:title", content: "Eleva360 | Soluciones digitales para negocios" },
      {
        property: "og:description",
        content:
          "Analizamos qué necesita mejorar tu negocio y priorizamos soluciones digitales simples, por etapas y adaptadas a tu realidad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: HOME_URL },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { name: "twitter:title", content: "Eleva360 | Soluciones digitales para negocios" },
      {
        name: "twitter:description",
        content:
          "Analizamos qué necesita mejorar tu negocio y priorizamos soluciones digitales simples, por etapas y adaptadas a tu realidad.",
      },
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
    <div>
      <Navbar />
      <main>
        <HorizonteHero whatsappUrl={WHATSAPP_URL} />
        <BusinessSections whatsappUrl={WHATSAPP_URL} />
      </main>
      <Footer />
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
    { label: "Antes de implementar", href: "#como-funciona" },
    { label: "Acompañamiento", href: "#acompanamiento" },
  ];

  return (
    <header
      className={`site-chrome sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
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
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
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
          {open ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-4 py-4 md:hidden"
        >
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

function Footer() {
  return (
    <footer className="site-chrome border-t border-border bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-col gap-3">
          <Logo loading="lazy" />
          <p className="max-w-sm text-sm text-muted-foreground">
            Soluciones digitales para negocios que comienzan por entender qué necesita mejorar.
          </p>
        </div>
        <nav
          aria-label="Enlaces del pie de página"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground md:justify-end"
        >
          <a
            href="#capacidades"
            className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
          >
            Capacidades
          </a>
          <a
            href="#como-funciona"
            className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
          >
            Antes de implementar
          </a>
          <a
            href="#acompanamiento"
            className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
          >
            Acompañamiento
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
        <span>© {new Date().getFullYear()} Eleva360 SpA. Todos los derechos reservados.</span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" /> El Quisco, Chile
        </span>
      </div>
    </footer>
  );
}
