import React from "react";
import AreaBg from "../assets/Home/globebg.jpg";
import { FaLocationArrow } from "react-icons/fa";

const cities = [
  "Awka",
  "Lagos",
  "China",
  "Japan",
  "London",
  "Dublin",
  "United States",
  "Romania",
];

const Areas = () => {
  return (
    <div
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url('${AreaBg}')` }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-red-600 bg-white/90">
          Locations
        </h2>
        <p className="text-center text-red-600 bg-white/90">
          We serve all these places across the globe
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white/90 flex items-center rounded-lg p-6 text-center shadow-md"
          >
            <FaLocationArrow className="text-red-500 mr-2" />
            <h3 className="text-xl font-semibold">{city}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Areas;
