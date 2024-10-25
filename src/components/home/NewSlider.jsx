import React, { useState, useEffect } from "react";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";

const content = [
  {
    title: "Click to Spark Conversations!",
    description:
      "Tired of crafting comments from scratch? Just click the LinkedGage icon attached to every post's comment section, and you're ready to roll.",
    img: img1,
  },
  {
    title: "Tone It Up",
    description:
      "Choose the right tone for any post—whether you want to sound professional, supportive, or enthusiastic, LinkedGage's popup offers various emotions for perfectly tailored responses.",
    img: img2,
  },
  {
    title: "Your Comment, Your Way",
    description:
      "Once your comment is generated, it's placed directly in the comment box. Feel free to edit it or simply hit 'Comment' to share it instantly.",
    img: img3,
  },
];

export default function NewSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      changeContent(selectedIndex + 1);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [selectedIndex]);

  const changeContent = (newIndex) => {
    setFadeIn(false); // Start fading out
    setTimeout(() => {
      setSelectedIndex(newIndex % content.length); // Wrap around
      setFadeIn(true); // Start fading in
    }, 300); // Wait for fade-out duration
  };

  const handleContentChange = (index) => {
    if (index !== selectedIndex) {
      changeContent(index);
    }
  };

  return (
    <div className="relative bg-black min-h-screen">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 lg:px-12">
        <header className="text-center pb-28">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Engage in a Snap: Click, Engage, Done!
          </h1>
          <p className="text-lg text-gray-300">
            Transform your LinkedIn interactions with personalized, impactful
            comments at the click of a button!
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 space-y-4">
            {content.map((item, index) => (
              <div
                key={index}
                className={`flex items-start min-h-[100px] mb-2 p-5 border border-transparent rounded-lg cursor-pointer transition-transform transform ${
                  selectedIndex === index
                    ? "bg-[#2c3e50] scale-105 text-white"
                    : "bg-transparent text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => handleContentChange(index)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleContentChange(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={selectedIndex === index}
              >
                {selectedIndex === index && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded"></div>
                )}
                <div className="text-3xl font-bold mr-5">{`${index + 1}/`}</div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-video">
              <img
                src={content[selectedIndex].img}
                alt={content[selectedIndex].title}
                className={`object-contain w-full h-full transition-opacity duration-500 ${
                  fadeIn ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
