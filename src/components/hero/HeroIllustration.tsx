import React from "react";
import heroImage from "../../assets/hero-eleva360.png";

const HeroIllustration: React.FC = () => {
  return (
    <div className="relative transform-gpu">
      <div
        className={"
          w-[320px] sm:w-[420px] md:w-[520px] lg:w-[640px]
          rounded-2xl overflow-hidden
          bg-gradient-to-b from-white/80 to-slate-50/80
          dark:from-slate-800/60 dark:to-slate-900/40
          shadow-2xl
          border border-white/60 dark:border-transparent
          ring-1 ring-white/5
        "}
        style={{ backfaceVisibility: "hidden" }}
      >
        <img
          src={heroImage}
          alt="Ilustración de Eleva360 mostrando Google Business, WhatsApp, Carta QR, dashboard y reseñas"
          className="w-full h-auto block"
          loading="eager"
        />
      </div>

      {/* Subtle foreground card to create depth */}
      <div className="absolute -bottom-6 -left-6 hidden md:block">
        <div className="w-28 h-16 rounded-lg bg-white/60 dark:bg-slate-800/60 backdrop-blur-md shadow-lg border border-white/30" />
      </div>
      <div className="absolute -top-6 -right-6 hidden md:block">
        <div className="w-20 h-12 rounded-lg bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm shadow-md border border-white/20" />
      </div>
    </div>
  );
};

export default HeroIllustration;
