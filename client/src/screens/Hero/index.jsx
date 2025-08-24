import React from "react";

import Title from "./Title";
import CTA from "./CTA";
import Media from "./Media.jsx";

const Hero = () => {
  return (
    <section className="relative z-0 overflow-hidden">
      <Media />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Title />
        <CTA />
      </div>
    </section>
  );
};

export default Hero;
