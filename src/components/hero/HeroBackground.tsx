import React from "react";

const HeroBackground: React.FC = () => {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ mixBlendMode: "normal" }}>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] max-w-4xl h-[520px] rounded-full bg-gradient-to-b from-sky-50/60 to-transparent opacity-60 blur-3xl" />
        <div className="absolute -left-40 bottom-0 w-80 h-80 rounded-full bg-emerald-50/40 dark:bg-emerald-900/20 blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 dark:to-black/10 pointer-events-none" />
      </div>
    </>
  );
};

export default HeroBackground;
