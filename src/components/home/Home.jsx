import React from "react";
import Hero from "./Hero";
import HeroSecond from "./HeroSecond";
import HeroThird from "./HeroThird";
import HeroFourth from "./HeroFourth";
import HeroFifth from "./HeroFifth";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <HeroSecond />
      <HeroThird />
      <HeroFourth />
      <HeroFifth />
    </div>
  );
};

export default Home;
