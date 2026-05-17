import React, { useState, useEffect } from "react";
import {
  FaAlignJustify,
  FaChevronDown,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
// import { fas, far, fad, fass, fasds, fak } from '@awesome.me/kit-KIT_CODE/icons'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Changes state when user scrolls down more than 20 pixels
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 bg-white ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3 "
          : "bg-transparent py-5 text-black"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-0">
        <div>
          <div>
            <img src="/logo.png" alt="" className="w-12 lg:w-24" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row justify-end py-1">
            <div className="flex space-x-2 items-center">
              <FaEnvelope className="text-red-500" />
              <span>info@EzeIgboigburuburuIIProsper.com</span>
            </div>
            <div className="flex space-x-2 items-center ml-8">
              <FaPhoneAlt className="text-red-500" />
              <span>+234-803-672-6002</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4 border-t border-t-gray-300 py-2">
            <a
              href="/"
              className="flex items-center space-x-1 font-medium px-4"
            >
              Home
            </a>
            <div className="group">
              <a
                href="services"
                className="flex items-center space-x-1 font-medium px-4"
              >
                <span>Services</span>
                <FaChevronDown className="text-xs" />
              </a>
              <div className="z-10 absolute hidden group-hover:block rounded-md w-44 bg-white shadow-lg">
                <a
                  href="/services"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Philanthropy
                </a>
                <a
                  href="services"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Conflict Resolution
                </a>
                {/* <a
                  href=""
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Sponsorship
                </a> */}
              </div>
            </div>
            <div className="group">
              <a
                href=""
                className="flex items-center space-x-1 font-medium px-4"
              >
                <span>Events</span>
                <FaChevronDown className="text-xs" />
              </a>
              <div className="z-10 absolute hidden group-hover:block rounded-md w-44 bg-white shadow-lg">
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Prayers
                </a>
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Coronation
                </a>
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Awards and Celebrations
                </a>
              </div>
            </div>
            <div className="group">
              <a
                href=""
                className="flex items-center space-x-1 font-medium px-4"
              >
                <span>Locations</span>
                <FaChevronDown className="text-xs" />
              </a>
              <div className="z-10 absolute hidden group-hover:block rounded-md w-44 bg-white shadow-lg">
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Awka
                </a>
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Lagos
                </a>
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Diaspora
                </a>
              </div>
            </div>
            <a
              href="/about"
              className="flex items-center space-x-1 font-medium px-4"
            >
              About
            </a>
            {/* <a href="" className="flex items-center space-x-1 font-medium px-4">
              Careers
            </a> */}
            <a
              href="/contact"
              className="flex items-center space-x-1 font-medium px-4"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="">
          <a href="/contact">
            <button className="hidden lg:block px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 cursor-pointer">
              Request A visit
            </button>
          </a>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className=" lg:hidden"
          >
            {" "}
            {mobileMenu ? (
              <span className="font-bold text-xl fixed inset-0 z-50 text-black">
                X
              </span>
            ) : (
              <FaAlignJustify />
            )}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div
          className={`${mobileMenu ? "block" : "hidden"} fixed inset-0 z-50 h-70 text-black bg-white lg:hidden `}
        >
          <div className=" py-3 flex flex-col space-y-2 max-h-[80vh] pl-4 overflow-y-auto">
            <a href="/">Home</a>
            <div>
              <a href="/services" onClick={(e) => e.stopPropagation()}>
                <button className="flex items-center">
                  <span>Services</span>
                  {/* <FaChevronDown className="text-xs ml-2" /> */}
                </button>
              </a>
              {/* {serviceDropdown && (
                <div className="flex flex-col space-y-2">
                  <a href="" className="pl-4">
                    Philanthrophy
                  </a>
                  <a href="" className="pl-4">
                    Conflict Resolution
                  </a>
                  <a href="" className="pl-4">
                    Sponsorship
                  </a>
                </div>
              )} */}
            </div>
            {/* <div>
              <button className="flex items-center">
                <span>Events</span>
                <FaChevronDown className="text-xs ml-2" />
              </button>
              {eventDropdown && (
                <div className="flex flex-col space-y-2">
                  <a href="" className="pl-4">
                    Prayers
                  </a>
                  <a href="" className="pl-4">
                    Coronations
                  </a>
                  <a href="" className="pl-4">
                    Awards
                  </a>
                </div>
              )}
            </div> */}
            {/* <div>
              <button className="flex items-center">
                <span>Locations</span>
                <FaChevronDown className="text-xs ml-2" />
              </button>
              {locationDropdown && (
                <div className="flex flex-col space-y-2">
                  <a href="" className="pl-4">
                    Awka
                  </a>
                  <a href="" className="pl-4">
                    Lagos
                  </a>
                  <a href="" className="pl-4">
                    China
                  </a>
                </div>
              )}
            </div> */}
            <a href="/about">About Us</a>
            
            <div>
              <a href="/contact">Contact</a>
            </div>

            <button onClick={() => setMobileMenu(false)} className="mt-5 mx-auto px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 cursor-pointer">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
