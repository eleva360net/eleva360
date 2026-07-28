import React from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";
import HeroEffects from "./HeroEffects";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <header className={`relative overflow-hidden`} aria-label="Eleva360 hero">
      <HeroBackground />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-20 lg:py-32">
          <div className="lg:col-span-6">
            <HeroContent />
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroEffects>
              <HeroIllustration />
            </HeroEffects>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
