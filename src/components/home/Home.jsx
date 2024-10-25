import React from "react";
import Hero from "./Hero";
import HeroSecond from "./HeroSecond";
import HeroThird from "./HeroThird";
import HeroFourth from "./HeroFourth";
import HeroFifth from "./HeroFifth";

import Slider from "./Slider";
import ReviewCard from "./ReviewCard";
import SliderComponent from "./SliderComponent";

import FAQ from "./Faq";
import NewSlider from "./NewSlider";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <HeroSecond />
      <HeroThird />
      <HeroFourth />
      <Slider />
      <NewSlider/>
      <ReviewCard />
      <HeroFifth />
      <FAQ />
    </div>
  );
};

export default Home;
