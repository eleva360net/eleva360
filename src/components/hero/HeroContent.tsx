import React from "react";

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-xl">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
        Haz que tu negocio digital se vea y funcione como una empresa de primer nivel
      </h1>

      <p className="mt-6 text-lg text-slate-600">
        Eleva360 combina tecnología moderna y procesos simples para digitalizar ventas,
        servicio y reseñas — todo pensado para pymes que quieren crecer con confianza.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="/demo"
          className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
          aria-label="Solicitar demo de Eleva360"
        >
          Solicitar demo
        </a>

        <a
          href="/features"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 text-slate-800 px-4 py-3 text-sm font-medium bg-white/60 hover:bg-white/70 transition"
          aria-label="Ver funciones de Eleva360"
        >
          Ver funciones
        </a>
      </div>

      <ul className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
        <li className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 block" />
          Integración con WhatsApp y Google Business
        </li>
        <li className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-400 block" />
          Dashboard sencillo y accionable
        </li>
        <li className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400 block" />
          Implementación rápida para pymes
        </li>
      </ul>
    </div>
  );
};

export default HeroContent;
