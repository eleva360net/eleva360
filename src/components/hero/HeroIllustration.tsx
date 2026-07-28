import React from "react";
import heroImage from "../../assets/hero-eleva360.png";

const HeroIllustration: React.FC = () => {
  return (
    <div className="relative transform-gpu">
      {/* Floating product card */}
      <div className="relative">
        <div className="product-card relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/80 to-slate-50/80 dark:from-slate-800/60 dark:to-slate-900/40 border border-white/60 dark:border-transparent shadow-[0_30px_60px_rgba(2,6,23,0.12)]">
          {/* soft inner glow layer */}
          <div aria-hidden className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white/5 mix-blend-screen" />

          <img
            src={heroImage}
            alt="Ilustración de Eleva360 mostrando Google Business, WhatsApp, Carta QR, dashboard y reseñas"
            className="w-full h-auto block"
            loading="eager"
          />
        </div>

        {/* Decorative depth cards (functional: suggest panels and scale) */}
        <div className="absolute -bottom-6 -left-6 hidden md:block">
          <div className="w-28 h-16 rounded-lg bg-white/60 dark:bg-slate-800/60 backdrop-blur-md shadow-lg border border-white/30" />
        </div>
        <div className="absolute -top-6 -right-6 hidden md:block">
          <div className="w-20 h-12 rounded-lg bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm shadow-md border border-white/20" />
        </div>

        {/* Subtle connector SVG to integrate illustration with content */}
        <svg
          aria-hidden
          className="pointer-events-none absolute -left-8 -top-8 hidden md:block"
          width="240"
          height="240"
          viewBox="0 0 240 240"
          fill="none"
        >
          <defs>
            <linearGradient id="cgrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(99,102,241,0.18)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.12)" />
            </linearGradient>
          </defs>
          <path d="M20 200 Q120 120 220 20" stroke="url(#cgrad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 10" opacity="0.6" />
        </svg>

        {/* Slight foreground shadow to root the card */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-20 rounded-full bg-slate-900/5 blur-3xl pointer-events-none" />
      </div>

      {/* Small live badges (status nodes) */}
      <div className="pointer-events-none">
        <div className="absolute top-4 left-6 hidden md:flex items-center gap-3 transform-gpu animate-hero-float-slow">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-white/90 ring-1 ring-white/30 shadow-sm flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2v6" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 8l6 6 6-6" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold shadow-sm">WhatsApp · activo</div>
          </div>
        </div>

        <div className="absolute bottom-12 right-8 hidden md:flex items-center gap-3 transform-gpu animate-hero-float-slow" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-white/90 ring-1 ring-white/30 shadow-sm flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 12h18" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3v18" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold shadow-sm">Google · optimizado</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIllustration;
