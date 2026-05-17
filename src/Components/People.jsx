import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import {FaQuoteRight, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Chief (Amb) Anya Igbo General",
    position: "Chief Political Cordinator",
    review:
      "Through Ezeigboigburuburu II’s powerful prayers, divine doors unlocked for me, instantly connecting my life and business to unprecedented global prosperity.",
  },
  {
    id: 2,
    name: "Mrs. Chinwe Simon",
    position: "Concerned Citizen",
    review:
      "Ezeigboigburuburu II’s mercy liberated non-violent inmates, restoring forgotten citizens to their families and giving our nation a powerful beacon of hope.",
  },
  {
    id: 3,
    name: "Miss Chime Abuchi",
    position: "Direct Benefactor",
    review:
      "When I was accused and almost charged to court, Eze Omeiheukwu paid my legal fines, saving me from incarceration and granting me a precious second chance",
  },
  {
    id: 4,
    name: "Chief (Amb) Oluebube Adide",
    position: "National Youth Service Corp Member",
    review:
      "Ezeigboigburuburu II dynamically transfers our ancestral legacy to the youth globally, ensuring Igbo culture thrives vibrantly in the modern world.",
  },
];

const People = () => {
  return (
    <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">Testimonies</h2>
            <p className="text-center text-gray-600 mb-12">Hear from our people and their experience with <br /><span className="text-red-500 font-bold">Eze-Igburuburu II</span></p>
        
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        speed={1000}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{clickable: true, dynamicBullets: true}}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="relative bg-white p-6 m-4 mb-6 h-full flex flex-col justify-between border-2 border-red-500 ">
                <FaQuoteRight className="absolute top-4 right-4 text-red-500 text-3xl"/>
              <div className="flex items-center space-x-4 mb-2">
                <FaUserCircle className="text-4xl text-red-500"/>
                <div className="flex flex-col justify-start items-start">
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-gray-600 text-xs">{review.position}</div>
                </div>
              </div>
              <div className="text-gray-700 mb-4">{review.review}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default People;
