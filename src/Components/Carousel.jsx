import React from "react";
import Hero1 from "../assets/sliderImages/award.jpeg";
import Hero2 from "../assets/sliderImages/igwecom.jpeg";
import Hero3 from "../assets/sliderImages/main2.jpeg";
import Hero4 from "../assets/sliderImages/main1.jpeg";
import Hero5 from "../assets/sliderImages/main5.jpeg";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
// import Swiper from "swiper";

const Carousel = () => {
  return (
    <div className='lg:mt- mt-2'>
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
              <div className="absolute inset-0 bg-linear-to-r from-red-900/30 via-black/50 to-red-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">
                  {/* Transperency and love is our collective{" "}
                  <span className="text-red-500">PRIORITY</span> */}
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
                  Royalty isn't a birthright; it is a mindset and a daily {" "}
                  <span className="text-red-500">STANDARD.</span>
                </h1>
                <p className="lg:text-xl">
                  Promoting integrity and hope for everyone
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
                  True royalty shows not in what you have, but in how you treat{" "}
                  <span className="text-red-500">OTHERS.</span>
                </h1>
                <p className="lg:text-xl">
                  Let kindness and love be your daily motivation
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
                  Strength is the mark of a true monarch, and grace is their{" "}
                  <span className="text-red-500">CROWN.</span>
                </h1>
                <p className="lg:text-xl">
                  Equip yourself with impecable strength and move with grace
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
                  Crown yourself with gratitude, and watch your kingdom{" "}
                  <span className="text-red-500">THRIVE</span>
                </h1>
                <p className="lg:text-xl">
                  With every opportunity you get, always show appreciation
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
