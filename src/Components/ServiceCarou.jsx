import React from 'react'
import Hero1 from "../assets/sliderImages/prison.jpeg";
import Hero2 from "../assets/sliderImages/mens.jpeg";
import Hero3 from "../assets/sliderImages/women.jpeg";
import Hero4 from "../assets/sliderImages/solve.jpeg";
import Hero5 from "../assets/sliderImages/chike.jpeg";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const ServiceCarou = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        speed={1000}
      >
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img
                src={Hero1}
                alt="hero image 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black via-red-900/50 to-red-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">
                  Our continous commitment to Prison{" "}
                  <span className="text-red-500">DECONGESTION</span>
                </h1>
                <p className="lg:text-xl">
                  {/* Ensuring justice and progress with equity for all */}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img
                src={Hero2}
                alt="hero image 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black via-red-900/50 to-red-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">
                  In a world full of noise, remain a timeless classic—like{" "}
                  <span className="text-red-500">ROYALTY.</span>
                </h1>
                <p className="lg:text-xl">
                  {/* Promoting integrity and hope for everyone */}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">

            <div className="relative h-full w-full">
              <img
                src={Hero3}
                alt="hero image 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black via-red-900/50 to-red-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">
                  Rule your life with wisdom and compassion rather than{" "}
                  <span className="text-red-500">FORCE.</span>
                </h1>
                <p className="lg:text-xl">
                  {/* Let kindness and love be your daily motivation */}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">

            <div className="relative h-full w-full">
              <img
                src={Hero4}
                alt="hero image 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black via-red-900/50 to-red-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">
                  Life is a royal journey; treat every setback as the setup for a{" "}
                  <span className="text-red-500">COMEBACK...</span>
                </h1>
                <p className="lg:text-xl">
                  {/* Equip yourself with impecable strength and move with grace */}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">

            <div className="relative h-full w-full">
              <img
                src={Hero5}
                alt="hero image 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black via-red-900/50 to-red-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">
                  Peace is not absence of conflict, it is the ability to handle conflict by peaceful{" "}
                  <span className="text-red-500">MEANS.</span>
                </h1>
                <p className="lg:text-xl">
                  {/* With every opportunity you get, always show appreciation */}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ServiceCarou
