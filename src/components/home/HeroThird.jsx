import React from "react";
import fourth from "../../images/fourth.png";
import fifth from "../../images/fifth.png";
import sixth from "../../images/sixth.png";
import seven from "../../images/seven.png";
import eight from "../../images/eight.png";
import nine from "../../images/nine.png";
import AnimatedGradientBorderTW from "./AnimatedGradientBorderTW";

const HeroThird = () => {
  return (
    <section className="py-12 bg-gradient-to-r bg-black sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Key Features to Boost Your LinkedIn Experience
          </h2>
          <p className="mb-4 text-gray-50">
            Unlock seamless, personalized LinkedIn interactions with AI-driven
            comments, custom tone selection, and real-time insights—all from an
            intuitive dashboard.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left py-10">
          <div className="relative">
            <AnimatedGradientBorderTW>
              <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
                <div className="p-9 text-center">
                  <div className="flex justify-center">
                    <img src={fourth} alt="Feature Icon" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                    Tone Selection
                  </h3>
                  <p className="mt-6 text-base text-gray-50">
                    Easily pick from professional, casual, and other custom tones
                    for LinkedIn comments.
                  </p>
                </div>
              </div>
            </AnimatedGradientBorderTW>
          </div>
          <div className="relative">
            <AnimatedGradientBorderTW>
              <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
                <div className="p-9 text-center">
                  <div className="flex justify-center">
                    <img src={nine} alt="Feature Icon" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                    Engagement Optimization
                  </h3>
                  <p className="mt-6 text-base text-gray-50">
                    Tailor comments to improve visibility and interactions on your
                    posts and network.
                  </p>
                </div>
              </div>
            </AnimatedGradientBorderTW>
          </div>
          <div className="relative">
            <AnimatedGradientBorderTW>
            <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
              <div className="p-9 text-center">
                <div className="flex justify-center">
                  <img src={sixth} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                  Multilingual Support
                </h3>
                <p className="mt-6 text-base text-gray-50">
                  Generate comments in multiple languages, making your LinkedIn
                  interactions truly global.
                </p>
              </div>
            </div>
            </AnimatedGradientBorderTW>
          </div>
          <div className="relative">
            <AnimatedGradientBorderTW>
            <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
              <div className="p-9 text-center">
                <div className="flex justify-center">
                  <img src={seven} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                  Real-Time Insights
                </h3>
                <p className="mt-6 text-base text-gray-50">
                  Instantly generate comments based on the content of the post,
                  saving you time and effort.
                </p>
              </div>
            </div>
            </AnimatedGradientBorderTW>
          </div>
          <div className="relative">
            <AnimatedGradientBorderTW>
              <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
                <div className="p-9 text-center">
                  <div className="flex justify-center">
                    <img src={eight} alt="" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                    Seamless LinkedIn Integration
                  </h3>
                  <p className="mt-6 text-base text-gray-50">
                    A convenient icon in every post's comment section makes it easy
                    to access the extension.
                  </p>
                </div>
            </div>
            </AnimatedGradientBorderTW>
          </div>
          <div className="relative">
            <AnimatedGradientBorderTW>
              <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
                <div className="p-9 text-center">
                  <div className="flex justify-center">
                    <img src={nine} alt="" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                    Engagement Optimization
                  </h3>
                  <p className="mt-6 text-base text-gray-50">
                    Tailor comments to improve visibility and interactions on your
                    posts and network.
                  </p>
                </div>
              </div>
            </AnimatedGradientBorderTW>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroThird;
