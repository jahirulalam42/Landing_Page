import React from "react";
import Earth from "../../images/Earth_Print.png";

const HeroFourth = () => {
  return (
    <div className="min-h-fit bg-zinc-900 relative z-0">
      <div className="bg-gradient-to-r from-blue-500 to-blue-950 w-11/12 md:w-4/6 h-auto md:h-96 absolute left-1/2 top-96 transform -translate-x-1/2 z-10 flex flex-col md:flex-row justify-between items-center p-4 md:p-8 rounded-3xl">
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <div className="p-4 md:p-12">
            <p className="mb-4 text-gray-50 text-base md:text-lg">
              Love Our Tool?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
              Join Thousands of Professionals Today!
            </h2>
            <button className="btn btn-neutral bg-black">Download</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={Earth}
            alt="Earth"
            className="w-3/4 h-auto max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      <div className="max-w-xl mx-auto text-center xl:max-w-2xl py-10 px-4">
        <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
          By the Numbers
        </h2>
        <p className="mb-4 text-gray-50">
          See how our LinkedIn extension is transforming conversations globally.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 md:gap-20 pb-20 md:pb-40 items-end text-gray-50">
        <div className="text-center">
          <p className="pb-4">
            Total <br /> Users
          </p>
          <p className="bg-black h-16 w-32 flex justify-center items-center rounded-lg">
            Over 10,000
          </p>
        </div>
        <div className="text-center">
          <p className="pb-4">
            Total Comments <br /> Generated
          </p>
          <p className="bg-black h-16 w-32 flex justify-center items-center rounded-lg">
            1 million+
          </p>
        </div>
        <div className="text-center">
          <p className="pb-4">
            Global <br /> Reach
          </p>
          <p className="bg-black h-16 w-32 flex justify-center items-center rounded-lg">
            50+ countries
          </p>
        </div>
        <div className="text-center">
          <p className="pb-4">
            User <br /> Satisfaction
          </p>
          <p className="bg-black h-16 w-32 flex justify-center items-center rounded-lg">
            95%
          </p>
        </div>
        <div className="text-center">
          <p className="pb-4">
            Average <br /> Response Time
          </p>
          <p className="bg-black h-16 w-32 flex justify-center items-center rounded-lg">
            Under 5 seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroFourth;
