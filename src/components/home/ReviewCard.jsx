import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ReviewCard = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  }, []);

  const reviews = [
    {
      name: "Sheryl Berge",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      review:
        "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
    },
    {
      name: "Leland Kiehn",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      review:
        "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
    },
    {
      name: "Peter Renolds",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      review:
        "The fitness apparel I bought here fits perfectly and feels amazing. I highly recommend this store to anyone looking for quality gear.",
    },
    {
      name: "Emma Johnson",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      review:
        "The customer service is outstanding. They helped me find the perfect workout equipment for my home gym setup.",
    },
    {
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      review:
        "I've been a loyal customer for years. The quality and durability of their products are unmatched in the fitness industry.",
    },
    {
      name: "Sophia Rodriguez",
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      review:
        "The variety of fitness accessories available is impressive. I always find what I need for my yoga and pilates sessions.",
    },
  ];

  return (
    <div className="relative">
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="bg-black py-20 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-4xl tracking-tight text-white mb-10">
              What Our Customers Are Saying
            </h2>
          </div>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            navigation={false}
            style={{ padding: "0 40px" }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <figure className="relative rounded-2xl bg-gray-800 p-6 shadow-xl shadow-slate-900/10 h-72">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 15.5l-5.5 3 2.1-6.4L0 7.5h6.5L10 1l3.5 6.5H20l-6.6 5.6 2.1 6.4L10 15.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="relative flex-1">
                    <p className="text-lg tracking-tight text-white">
                      {item.review}
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-white">
                        {item.name}
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt={`Avatar of ${item.name}`}
                        className="h-14 w-14 object-cover"
                        src={item.image}
                      />
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Improved Navigation buttons */}
      <button
        onClick={() => swiperRef.current.swiper.slidePrev()}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-20 flex items-center justify-center h-12 w-12 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg transition duration-300 ${
          isBeginning ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
        } focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
        disabled={isBeginning}
        aria-label="Previous slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current.swiper.slideNext()}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-20 flex items-center justify-center h-12 w-12 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg transition duration-300 ${
          isEnd ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
        } focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
        disabled={isEnd}
        aria-label="Next slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ReviewCard;
