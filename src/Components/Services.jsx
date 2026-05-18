import React from "react";
import ServiceBg from "../assets/Home/servicebg.png";
import philan from "../assets/Home/sharp.jpeg";
import crown from "../assets/Home/conf.jpeg";
import mask from "../assets/Home/kingship.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Philanthropy",
    image: philan,
    link: "",
    description:
      "His Imperial Majesty Ezeigboigburuburu II breaks prison chains, feeds thousands daily, and awards global scholarships, uplifting humanity with boundless compassion.",
  },
  {
    id: 2,
    title: "Conflict Resolution",
    image: crown,
    link: "",
    description:
      "Guided by divine wisdom, Ezeigboigburuburu II untangles complex disputes with profound insight, restoring lasting peace and unity across communities.",
  },
  {
    id: 3,
    title: "Sponsorship",
    image: mask,
    link: "",
    description:
      "Ezeigboigburuburu II finances global academic scholarships and vocational training, empowering underprivileged youth to achieve their dreams and build brighter futures.",
  },
];

const Services = () => {
  return (
    <div
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url('${ServiceBg}')` }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-8 lg:px-0">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md pb-4 hover:scale-105 transition-transform duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col justify-center items-center px-8">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
                <a href="/services" className="flex items-center mt-2s space-x-2 text-red-500 font-bold hover:underline"><span>More</span> <FaArrowRight className="text-xs"/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ); 
};

export default Services;
