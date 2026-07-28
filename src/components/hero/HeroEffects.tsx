import React from "react";

const HeroEffects: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      <div className="motion-safe:animate-hero-float">{children}</div>

      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[72%] h-[72%] rounded-2xl bg-gradient-to-r from-white/0 via-sky-50/20 to-white/0 opacity-40 blur-2xl motion-safe:animate-hero-glow" />
      </div>
    </div>
  );
};

export default HeroEffects;
