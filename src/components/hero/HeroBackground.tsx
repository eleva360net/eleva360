import React from "react";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Base background layers: gentle radial glows and subtle color blobs to create depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ mixBlendMode: "normal" }}>
        {/* central soft radial halo */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] max-w-4xl h-[520px] rounded-full bg-gradient-to-b from-sky-50/60 to-transparent opacity-60 blur-3xl" />

        {/* warm accent blob bottom-left */}
        <div className="absolute -left-40 bottom-0 w-80 h-80 rounded-full bg-emerald-50/40 dark:bg-emerald-900/20 blur-2xl" />

        {/* cool accent blob top-right */}
        <div className="absolute -right-24 -top-28 w-72 h-72 rounded-full bg-primary/8 blur-2xl opacity-90" />

        {/* large faint ring for depth */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/[0.03] blur-3xl" />

        {/* subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 dark:to-black/10 pointer-events-none" />

        {/* fine grain / texture layer (low opacity) */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.02),transparent_20%)]" />
      </div>
    </>
  );
};

export default HeroBackground;
