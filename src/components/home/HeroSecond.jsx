import React from "react";
import first from "../../images/first.png";
import second from "../../images/second.png";
import third from "../../images/third.png";

const HeroSecond = () => {
  return (
    <section className="py-6 bg-black sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-8 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          <div className="relative">
            <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
              <div className="p-9 text-center">
                <div className="flex justify-center">
                  <img src={first} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                  Boost Engagement
                </h3>
                <p className="mt-6 text-base text-gray-50">
                  Generate smart, relevant comments to increase professional
                  interactions.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-gray-800 shadow-md rounded-xl">
            <div className="p-9 text-center">
              <div className="flex justify-center">
                <img src={second} alt="" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                Tone Customization
              </h3>
              <p className="mt-6 text-base text-gray-50">
                Select from a variety of tones to match your personal or
                professional voice.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
              <div className="p-9 text-center">
                <div className="flex justify-center">
                  <img src={third} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                  Enhanced Networking
                </h3>
                <p className="mt-6 text-base text-gray-50">
                  Optimize your LinkedIn responses to foster better connections
                  and interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecond;
