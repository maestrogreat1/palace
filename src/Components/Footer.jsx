import React from "react";
import { FaChevronRight, FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-8 bg-red-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-0">
          <div className="flex flex-col justify-center items-center">
            <img src="/logo.png" alt="" className="w-18" />
            <p className="text-white mt-4">
              Welcome to the official website of Eze-Omeiheuku (The King that
              does great things), the Custodian of the Igbo Culture and Tradition Worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Services</h4>
            <ul className="flex flex-col space-y-2 lg:space-y-3 mt-4">
              <li className="flex items-center space-x-2 text-white cursor-pointer">
                <FaChevronRight className="text-xs" /> <span>Philantrophy</span>
              </li>
              <li className="flex items-center space-x-2 text-white cursor-pointer">
                <FaChevronRight className="text-xs" />{" "}
                <span>Conflict Resolution</span>
              </li>
              <li className="flex items-center space-x-2 text-white cursor-pointer">
                <FaChevronRight className="text-xs" /> <span>Sponsorship</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="flex flex-col space-y-2 lg:space-y-3 mt-4">
              <a href="/"><li  className="flex items-center space-x-2 text-white cursor-pointer">
                <FaChevronRight className="text-xs" /> <span>Home</span>
              </li></a>
              <a href="/about"><li className="flex items-center space-x-2 text-white cursor-pointer">
                <FaChevronRight className="text-xs" /> <span>About Us</span>
              </li></a>
              <a href="/services"><li className="flex items-center space-x-2 text-white cursor-pointer">
                <FaChevronRight className="text-xs" /> <span>Services</span>
              </li></a>
              <li className="flex items-center space-x-2 text-white cursor-pointer">
                <FaChevronRight className="text-xs" /> <span>Events</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Contact Us</h4>
            <ul className="flex flex-col space-y-2 lg:space-y-3 mt-4">
              <li className="flex items-center space-x-2 text-white cursor-pointer">
                <FaHome className="text-xs" />{" "}
                <span>
                  Throne of Justice, Q Close, House 7, 1st Avenue, Festac Town,
                  Lagos.{" "}
                </span>
              </li>
              <li className="flex items-center space-x-2 text-white cursor-pointer">
                <FaEnvelope className="text-xs" />{" "}
                <span>info@ezeigbogburuburuIIprosper.com</span>
              </li>
              <li className="flex items-center space-x-2 text-white cursor-pointer">
                <FaPhoneAlt className="text-xs" />{" "}
                <span>+234-803-672-6002</span>
              </li>
            </ul>
          </div>
          <div></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-0 border-t border-gray-200 mt-4 py-2">
          {/* list of cities */}
          <div className="flex flex-wrap justify-center items-center gap-x-4">
            {[
              "Awka",
              "Lagos",
              "China",
              "Japan",
              "Dublin",
              "London",
              "Texas",
              "Bucharest",
            ].map((city, index) => (
              <span key={index} className="text-white text-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
        
      </div>
      <div className="bg-red-600 pb-4">
          <div className="pt-4 text-center text-white">
            &copy; {new Date().getFullYear()} Igwegburuburu. All rights
            reserved.
          </div>
        </div>
    </div>
  );
};

export default Footer;
