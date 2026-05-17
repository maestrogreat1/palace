import React from 'react'
import Hero1 from "../assets/sliderImages/calls.jpg";
// import Hero2 from "../assets/sliderImages/men.jpg";
// import Hero3 from "../assets/sliderImages/nwaoma.jpg";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const ContactMain = () => {
  return (
    <div className='lg:mt-30'>
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
                  Get in Touch With Us{" "}
                  <span className="text-red-500">Today.</span>
                </h1>
                <p className="lg:text-xl">
                  The single biggest problem in communication is the illusion that it has taken place
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
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
                  We Are One Call{" "}
                  <span className="text-red-500">AWAY</span>
                </h1>
                <p className="lg:text-xl">
                  Nothing in life is more important than the ability to communicate effectively.
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
                  We are Waiting to Hear from{" "}
                  <span className="text-red-500">YOU</span>
                </h1>
                <p className="lg:text-xl">
                  Clear communication leads to better understanding and better relationships
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default ContactMain
