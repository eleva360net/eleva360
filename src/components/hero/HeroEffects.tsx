import React from "react";

const HeroEffects: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      {/* Float wrapper: motion-safe to respect reduced-motion */}
      <div className="motion-safe:animate-hero-float">{children}</div>

      {/* Subtle glow ring behind the card to increase depth and provide a polished halo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <div className="w-[72%] h-[72%] rounded-2xl bg-gradient-to-r from-white/0 via-sky-50/20 to-white/0 opacity-40 blur-2xl motion-safe:animate-hero-glow" />
      </div>

      {/* Very subtle top light sweep to suggest a UI surface (slow opacity animation in CSS) */}
      <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 left-0 h-1/2 w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-20 transform-gpu blur-md motion-safe:animate-hero-glow" />
      </div>
    </div>
  );
};

export default HeroEffects;
