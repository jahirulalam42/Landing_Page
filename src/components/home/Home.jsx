import React from "react";
import Hero from "./Hero";
import HeroSecond from "./HeroSecond";
import HeroThird from "./HeroThird";
import HeroFourth from "./HeroFourth";
import HeroFifth from "./HeroFifth";
import FAQ from "./Faq"

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <HeroSecond />
      <HeroThird />
      <HeroFourth />
      <HeroFifth />
      <FAQ/>
    </div>
  );
};

export default Home;
