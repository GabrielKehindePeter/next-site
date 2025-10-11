"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderDemo = () => {
  // refs for custom navigation
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      {/* Header bar with title + arrows */}
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl font-semibold text-gray-800">Featured Categories</h2>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="w-8 h-8 flex items-center justify-center bg-amber-500 hover:bg-amber-400 rounded-full"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="w-8 h-8 flex items-center justify-center bg-amber-500 hover:bg-amber-400 rounded-full"
          >
            →
          </button>
        </div>
      </div>
<div className="p-2">
     <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={3} // Default
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        // Custom navigation
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="text-amber-800"
      >

        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <SwiperSlide key={num} className="bg-gray-300 p-6 border-2 border-amber-400 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Slide {num}
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default SliderDemo;
