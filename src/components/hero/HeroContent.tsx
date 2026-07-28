import React from "react";

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-xl">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
        <span className="flex h-2 w-2 rounded-full bg-primary">
          <span className="h-2 w-2 animate-ping rounded-full bg-primary/60" />
        </span>
        <span className="text-xs font-semibold tracking-wide text-muted-foreground">Soluciones digitales para negocios · Chile</span>
      </div>

      <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Haz que tu negocio digital se vea y funcione como una empresa de primer nivel
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
        Eleva360 implementa soluciones digitales que atraen más clientes, automatizan procesos y mejoran la experiencia. Tú te concentras en tu negocio, nosotros en su presencia digital.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="/demo"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
          aria-label="Solicitar demo"
        >
          Solicitar demo
        </a>

        <a
          href="/features"
          className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-foreground"
          aria-label="Ver funciones"
        >
          Ver funciones
        </a>
      </div>

      <ul className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
        <li className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 block" /> Integración con WhatsApp y Google Business
        </li>
        <li className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-400 block" /> Dashboard sencillo y accionable
        </li>
        <li className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400 block" /> Implementación rápida para pymes
        </li>
      </ul>
    </div>
  );
};

export default HeroContent;
