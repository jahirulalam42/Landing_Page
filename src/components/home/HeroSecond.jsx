import React from "react";
import first from "../../images/first.png";
import second from "../../images/second.png";
import third from "../../images/third.png";

const HeroSecond = () => {
  return (
    <section className="py-6 bg-black sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
          Why LinkedIn™ Engagement Feels Like a Hassle
          </h2>
          <p className="mb-4 text-gray-50 text-xl">
          Engaging consistently on LinkedIn is more challenging than it seems. From writing thoughtful comments to maintaining an active presence, it often feels like a time-consuming burden.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-8 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          <div className="relative">
            <div className="overflow-hidden bg-gray-800 shadow-md rounded-xl h-full border border-gray-600">
              <div className='absolute top-0 flex w-full justify-center'>
                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
              </div>
              <div className="p-9 text-center">
                <div className="flex justify-center">
                  <img src={first} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                Engaging with LinkedIn™ posts can feel overwhelming
                </h3>
                <p className="mt-6 text-base text-gray-50">
                Spending hours trying to craft the perfect comment every day is exhausting and impractical.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden bg-gray-800 shadow-md rounded-xl h-full border border-gray-600">
              <div className='absolute top-0 flex w-full justify-center'>
                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
              </div>
              <div className="p-9 text-center">
                <div className="flex justify-center">
                  <img src={second} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                Finding the right words for each comment takes time
                </h3>
                <p className="mt-6 text-base text-gray-50">
                Coming up with unique, thoughtful responses that stand out isn't easy, especially when you're trying to comment on multiple posts.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden bg-gray-800 shadow-md rounded-xl h-full border border-gray-600">
              <div className='absolute top-0 flex w-full justify-center'>
                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
              </div>
              <div className="p-9 text-center">
                <div className="flex justify-center">
                  <img src={third} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-50 sm:mt-10">
                Quickly writing impactful comments feels nearly impossible
                </h3>
                <p className="mt-6 text-base text-gray-50">
                It’s tough to deliver valuable comments in just a few minutes without sacrificing quality.
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
