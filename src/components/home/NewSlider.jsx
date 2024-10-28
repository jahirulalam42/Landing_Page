import React, { useState, useEffect } from "react";

// Import images as specified
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";

const content = [
  {
    title: "Click to Spark Conversations!",
    description:
      "Tired of crafting comments from scratch? Just click the LinkedGage icon attached to every post’s comment section, and you’re ready to roll.",
    img: img1,
  },
  {
    title: "Tone It Up",
    description:
      "Choose the right tone for any post—whether you want to sound professional, supportive, or enthusiastic, LinkedGage’s popup offers various emotions for perfectly tailored responses.",
    img: img2,
  },
  {
    title: "Your Comment, Your Way",
    description:
      "Once your comment is generated, it’s placed directly in the comment box. Feel free to edit it or simply hit ‘Comment’ to share it instantly.",
    img: img3,
  },
];

function NewSlider() {
  const [selectedImage, setSelectedImage] = useState(content[0].img);
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
    <div className="bg-black flex flex-col items-center min-h-fit px-12 py-32">
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold mb-2">
          Engage in a Snap: Click, Engage, Done!
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Transform your LinkedIn interactions with personalized, impactful
          comments at the click of a button!
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap w-full">
        <div className="flex flex-col w-full lg:w-1/2 mr-0 lg:mr-20">
          {content.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedImage(item.img);
                setSelectedIndex(index);
              }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setSelectedImage(item.img);
                  setSelectedIndex(index);
                }
              }}
              className={`p-5 border border-transparent rounded-lg mb-4 cursor-pointer flex items-center relative transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-gray-800 transform scale-105"
                  : "bg-transparent"
              }`}
            >
              {selectedIndex === index && (
                <div className="absolute bottom-0 left-0 h-1 w-full bg-sky-500 rounded-md"></div>
              )}
              <div className="font-bold text-3xl mr-5 text-white">{`${
                index + 1
              }/`}</div>
              <div>
                <div className="font-bold text-white text-lg mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-gray-300">{item.description}</div>
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
  );
}

export default NewSlider;
