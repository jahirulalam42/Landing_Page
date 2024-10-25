import React from "react";
import first from "../../images/first.png";
import second from "../../images/second.png";
import third from "../../images/third.png";
import AnimatedGradientBorderTW from "./AnimatedGradientBorderTW";

const HeroSecond = () => {
  return (
    <section className="py-12 bg-gradient-to-r bg-black sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Why LinkedIn™ Engagement Feels Like a Hassle
          </h2>
          <p className="mb-4 text-gray-50 text-xl">
            Engaging consistently on LinkedIn is more challenging than it seems.
            From writing thoughtful comments to maintaining an active presence,
            it often feels like a time-consuming burden.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left py-10">
          {/* Feature Cards */}
          {[
            {
              icon: first,
              title: "Boost Engagement",
              description:
                "Generate smart, relevant comments to increase professional interactions.",
            },
            {
              icon: second,
              title: "Tone Customization",
              description:
                "Select from a variety of tones to match your personal or professional voice.",
            },
            {
              icon: third,
              title: "Enhanced Networking",
              description:
                "Optimize your LinkedIn responses to foster better connections and interactions.",
            },
          ].map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FeatureCard({ icon, title, description }) {
  return (
    <div className="relative group">
      <AnimatedGradientBorderTW>
        <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full border-4 border-transparent">
          <div className="p-9 text-center">
            <div className="flex justify-center">
              <div className="p-2 rounded-md transition-all duration-700 ease-in-out">
                <img
                  src={icon}
                  alt={title}
                  className="p-2 rounded-xl transition-all duration-700 ease-in-out bg-gradient-to-r from-transparent to-transparent group-hover:from-blue-500 group-hover:to-purple-600 group-hover:opacity-100"
                />
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
              {title}
            </h3>
            <p className="mt-6 text-base text-gray-50">{description}</p>
          </div>
        </div>
      </AnimatedGradientBorderTW>
    </div>
  );
}

export default HeroSecond;
