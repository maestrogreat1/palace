import React from "react";
import Brand1 from "../assets/Images/elimulogo.png";
import Brand2 from "../assets/Images/brand3.png";
import Brand3 from "../assets/Images/tech.PNG";
import Brand4 from "../assets/Images/favTravel.png";
import Brand5 from "../assets/Images/tree.png";
import Brand6 from "../assets/Images/logTravel.png";
import Brand7 from "../assets/Images/logrox.jpg";
import Brand8 from "../assets/Images/gynbudlog.jpg";

import Marquee from "react-fast-marquee";

const MarqueeComponent = Marquee.default || Marquee;

const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8];

const Brands = () => {
  return (
    <div className="border-t border-gray-300">
      <MarqueeComponent speed={100} gradient={false}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="w-20 md:w-48 h-20 md:h-28 py-2 md:py-4 flex items-center justify-center space-x-8"
          >
            <img
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="h-12 md:h-20"
            />
          </div>
        ))}
      </MarqueeComponent>
    </div>
  );
};

export default Brands;
