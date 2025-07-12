import React from "react";
import HeroText from "@/components/HeroText";
import ParallaxBackground from "@/components/ParallaxBackground";
import Hero3DModel from "@/components/Hero3DModel";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="select-none flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <Hero3DModel />
    </section>
  );
};

export default Hero;
