import React, { useState } from "react";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0); // State to manage the active slide
  const [clickedSection, setClickedSection] = useState(null); // State to manage clicked section

  const handleSectionClick = (index) => {
    setActiveSlide(index); // Set the active slide based on the clicked section
    setClickedSection(index); // Set the clicked section for styling
  };

  const sections = [
    {
      title: "Marketing",
      description: "Description for Marketing",
      bgImage:
        "url('https://images.unsplash.com/photo-1718241905696-cb34c2c07bed?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image path
      icon: (
        <svg
          className={`w-8 h-8 lg:w-8 lg:h-8 ${
            clickedSection === 0 ? "text-blue-500" : "text-white"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1L1 10h3v7h4v-4h2v4h4v-7h3L10 1z" />
        </svg>
      ),
    },
    {
      title: "Legal",
      description: "Description for Legal",
      bgImage:
        "url('https://images.unsplash.com/photo-1716436329475-4c55d05383bb?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image path
      icon: (
        <svg
          className={`w-8 h-8 lg:w-8 lg:h-8 ${
            clickedSection === 1 ? "text-blue-500" : "text-white"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1l3 3H7l3-3zm0 16l-3-3h6l-3 3zM1 10h3v2H1v-2zm15-1h3v2h-3v-2zM5 10h10v2H5v-2z" />
        </svg>
      ),
    },
    {
      title: "Business Automation",
      description: "Description for Business Automation",
      bgImage:
        "url('https://plus.unsplash.com/premium_photo-1682464548221-715397510bbf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image path
      icon: (
        <svg
          className={`w-8 h-8 lg:w-8 lg:h-8 ${
            clickedSection === 2 ? "text-blue-500" : "text-white"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1L1 10h3v7h4v-4h2v4h4v-7h3L10 1z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <section className="bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 text-gray-50">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Designed for business teams like yours
            </h2>
            <p className="sm:text-xl">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {sections.map((section, index) => (
              <div
                key={index}
                onClick={() => handleSectionClick(index)}
                className={`transition-transform duration-300 bg-zinc-900 p-4 rounded-lg ${
                  clickedSection === index ? "scale-105" : ""
                } cursor-pointer`}
              >
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  {section.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-50">
                  {section.title}
                </h3>
                <p className="text-gray-50">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center bg-black">
        <div className="relative w-[70%] h-[50vh] overflow-hidden rounded-3xl">
          <div
            className={`relative w-[300vw] h-full flex transition-all duration-500 ease-in-out`}
            style={{ transform: `translateX(-${activeSlide * 100}vw)` }}
          >
            {/* Individual sections for slider */}
            {sections.map((section, index) => (
              <div
                key={index}
                className="relative w-full h-full flex items-center justify-center"
                style={{
                  backgroundImage: section.bgImage,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
