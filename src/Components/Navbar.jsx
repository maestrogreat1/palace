// import React, { useState, useEffect } from "react";
// import {
//   FaAlignJustify,
//   FaChevronDown,
//   FaEnvelope,
//   FaPhoneAlt,
// } from "react-icons/fa";


// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);

//   // const [serviceDropdown, setServiceDropdown] = useState(false);
//   // const [eventDropdown, setEventDropdown] = useState(false);
//   // const [locationDropdown, setLocationDropdown] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Changes state when user scrolls down more than 20 pixels
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full box-border transition-all duration-300 z-50 bg-white ${
//         isScrolled
//           ? "bg-white/80 backdrop-blur-md shadow-md py-3 "
//           : "bg-transparent py-5 text-black"
//       }`}
//     >
//       <div className="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-0">
//         <div>
//           <div>
//             <img src="/logo.png" alt="" className="w-12 pr-2 lg:w-24" />
//           </div>
//         </div>
//         <div className="flex flex-col">
//           <div className="flex flex-col lg:flex-row justify-end py-1">
//             <div className="flex space-x-2 items-center ">
//               <FaEnvelope className="text-red-500" />
//               <span>info@EzeIgboigburuburuIIProsper.com</span>
//             </div>
//             <div className="flex space-x-2 items-center ml-8">
//               <FaPhoneAlt className="text-red-500" />
//               <span>+234-803-672-6002</span>
//             </div>
//           </div>
//           <div className="hidden lg:flex items-center space-x-4 border-t border-t-gray-300 py-2">
//             <a
//               href="/"
//               className="flex items-center space-x-1 font-medium px-4"
//             >
//               Home
//             </a>
//             <div className="group">
//               <a
//                 href="services"
//                 className="flex items-center space-x-1 font-medium px-4"
//               >
//                 <span>Services</span>
//                 <FaChevronDown className="text-xs" />
//               </a>
//               <div className="z-10 absolute hidden group-hover:block rounded-md w-44 bg-white shadow-lg">
//                 <a
//                   href="/services"
//                   className="block px-4 py-2 hover:bg-red-500 hover:text-white"
//                 >
//                   Philanthropy
//                 </a>
//                 <a
//                   href="services"
//                   className="block px-4 py-2 hover:bg-red-500 hover:text-white"
//                 >
//                   Conflict Resolution
//                 </a>
//                 {/* <a
//                   href=""
//                   className="block px-4 py-2 hover:bg-red-500 hover:text-white"
//                 >
//                   Sponsorship
//                 </a> */}
//               </div>
//             </div>
//             <div className="group">
//               <a
//                 href=""
//                 className="flex items-center space-x-1 font-medium px-4"
//               >
//                 <span>Events</span>
//                 <FaChevronDown className="text-xs" />
//               </a>
//               <div className="z-10 absolute hidden group-hover:block rounded-md w-44 bg-white shadow-lg">
//                 <a
//                   href=""
//                   className="block px-4 py-2 hover:bg-red-500 hover:text-white"
//                 >
//                   Prayers
//                 </a>
//                 <a
//                   href=""
//                   className="block px-4 py-2 hover:bg-red-500 hover:text-white"
//                 >
//                   Coronation
//                 </a>
//                 <a
//                   href=""
//                   className="block px-4 py-2 hover:bg-red-500 hover:text-white"
//                 >
//                   Awards and Celebrations
//                 </a>
//               </div>
//             </div>
//             {/* <div className="group">
//               <a
//                 href=""
//                 className="flex items-center space-x-1 font-medium px-4"
//               >
//                 <span>Locations</span>
//                 <FaChevronDown className="text-xs" />
//               </a>
//               <div className="z-10 absolute hidden group-hover:block rounded-md w-44 bg-white shadow-lg">
//                 <a
//                   href=""
//                   className="block px-4 py-2 hover:bg-red-500 hover:text-white"
//                 >
//                   Awka
//                 </a>
//                 <a
//                   href=""
//                   className="block px-4 py-2 hover:bg-red-500 hover:text-white"
//                 >
//                   Lagos
//                 </a>
//                 <a
//                   href=""
//                   className="block px-4 py-2 hover:bg-red-500 hover:text-white"
//                 >
//                   Diaspora
//                 </a>
//               </div>
//             </div> */}
//             <a
//               href="/about"
//               className="flex items-center space-x-1 font-medium px-4"
//             >
//               About
//             </a>
//             {/* <a href="" className="flex items-center space-x-1 font-medium px-4">
//               Careers
//             </a> */}
//             <a
//               href="/contact"
//               className="flex items-center space-x-1 font-medium px-4"
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//         <div className="">
//           <a href="/contact">
//             <button className="hidden lg:block px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 cursor-pointer">
//               Request A visit
//             </button>
//           </a>
//           <button
//             onClick={() => setMobileMenu(!mobileMenu)}
//             className=" lg:hidden pl-3"
//           >
//             {" "}
//             {mobileMenu ? (
//               <span className="font-bold text-xl fixed inset-0 z-50 text-black">
//                 X
//               </span>
//             ) : (
//               <FaAlignJustify />
//             )}
//           </button>
//         </div>
//       </div>

//       {mobileMenu && (
//         <div
//           className={`${mobileMenu ? "block" : "hidden"} fixed inset-0 z-50 h-70 text-black bg-white lg:hidden `}
//         >
//           <div className=" py-3 flex flex-col space-y-2 max-h-[80vh] pl-4 overflow-y-auto">
//             <a href="/">Home</a>
//             <div>
//               <a href="/services" onClick={(e) => e.stopPropagation()}>
//                 <button className="flex items-center">
//                   <span>Services</span>
//                   {/* <FaChevronDown className="text-xs ml-2" /> */}
//                 </button>
//               </a>
//               {/* {serviceDropdown && (
//                 <div className="flex flex-col space-y-2">
//                   <a href="" className="pl-4">
//                     Philanthrophy
//                   </a>
//                   <a href="" className="pl-4">
//                     Conflict Resolution
//                   </a>
//                   <a href="" className="pl-4">
//                     Sponsorship
//                   </a>
//                 </div>
//               )} */}
//             </div>
//             {/* <div>
//               <button className="flex items-center">
//                 <span>Events</span>
//                 <FaChevronDown className="text-xs ml-2" />
//               </button>
//               {eventDropdown && (
//                 <div className="flex flex-col space-y-2">
//                   <a href="" className="pl-4">
//                     Prayers
//                   </a>
//                   <a href="" className="pl-4">
//                     Coronations
//                   </a>
//                   <a href="" className="pl-4">
//                     Awards
//                   </a>
//                 </div>
//               )}
//             </div> */}
//             {/* <div>
//               <button className="flex items-center">
//                 <span>Locations</span>
//                 <FaChevronDown className="text-xs ml-2" />
//               </button>
//               {locationDropdown && (
//                 <div className="flex flex-col space-y-2">
//                   <a href="" className="pl-4">
//                     Awka
//                   </a>
//                   <a href="" className="pl-4">
//                     Lagos
//                   </a>
//                   <a href="" className="pl-4">
//                     China
//                   </a>
//                 </div>
//               )}
//             </div> */}
//             <a href="/about">About Us</a>
            
//             <div>
//               <a href="/contact">Contact</a>
//             </div>

//             <button onClick={() => setMobileMenu(false)} className="mt-5 mx-auto px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 cursor-pointer">Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

//  FIXED
import React, { useState } from 'react';

import { FaEnvelope, FaPhoneAlt, FaChevronDown, FaAlignJustify, FaTimes } from 'react-icons/fa';

// Assumes state values like isScrolled and mobileMenu are passed or handled locally
export default function Navbar({ isScrolled}) {
   // Add the state locally right here!
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <div
      className={`sticky top-0 w-full box-border transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-1.5"
          : "bg-white lg:bg-white py-2.5 text-black"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-6">
        {/* Brand Logo Container */}
        <div className="shrink-0">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="w-12 lg:w-24 object-contain" />
          </a>
        </div>

        {/* Desktop Context Utilities & Navigation Links */}
        <div className="flex flex-col min-w-0 items-end">
          {/* Top Info Bar */}
          <div className="flex flex-col lg:flex-row justify-end py-1 space-y-1 lg:space-y-0 text-xs sm:text-sm lg:text-base w-full">
            <div className="flex space-x-2 items-center min-w-0 justify-end">
              <FaEnvelope className="text-red-500 shrink-0" />
              <span className="break-all sm:break-normal font-light text-gray-700">info@EzeIgboigburuburuIIProsper.com</span>
            </div>
            <div className="flex space-x-2 items-center lg:ml-8 justify-end">
              <FaPhoneAlt className="text-red-500 shrink-0" />
              <span className="whitespace-nowrap font-medium text-gray-800">+234-803-672-6002</span>
            </div>
          </div>
          
          {/* Main Desktop Menu Bar */}
          <div className="hidden lg:flex items-center space-x-2 border-t border-t-gray-200 mt-2 pt-2 w-full justify-end">
            <a href="/" className="font-medium px-4 py-2 text-gray-700 hover:text-red-500 transition-colors">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 font-medium px-4 py-2 text-gray-700 hover:text-red-500 transition-colors">
                <span>Services</span>
                <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="rounded-xl w-52 bg-white shadow-xl border border-gray-100 py-2 overflow-hidden">
                  <a href="/services" className="block px-5 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium">
                    Philanthropy
                  </a>
                  <a href="/services" className="block px-5 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium">
                    Conflict Resolution
                  </a>
                </div>
              </div>
            </div>

            {/* Events Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 font-medium px-4 py-2 text-gray-700 hover:text-red-500 transition-colors">
                <span>Events</span>
                <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="rounded-xl w-56 bg-white shadow-xl border border-gray-100 py-2 overflow-hidden">
                  <a href="/events" className="block px-5 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium">
                    Prayers
                  </a>
                  <a href="/events" className="block px-5 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium">
                    Coronation
                  </a>
                  <a href="/events" className="block px-5 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium">
                    Awards and Celebrations
                  </a>
                </div>
              </div>
            </div>

            <a href="/about" className="font-medium px-4 py-2 text-gray-700 hover:text-red-500 transition-colors">
              About
            </a>
            <a href="/contact" className="font-medium px-4 py-2 text-gray-700 hover:text-red-500 transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* CTA Button & Mobile Trigger Menu Button */}
        <div className="flex items-center ml-4">
          <a href="/contact" className="hidden lg:block">
            <button className="px-6 py-2.5 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer">
              Request A Visit
            </button>
          </a>
          
          <button
            onClick={() => setMobileMenu(true)}
            className="lg:hidden p-2 text-gray-700 hover:text-red-500 focus:outline-none transition-colors"
            aria-label="Open Menu"
          >
            <FaAlignJustify className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Modern Slide-Over Mobile Menu System */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop Mask Blur */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenu(false)}
        />

        {/* Sliding Navigation Container Drawer */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between transform transition-transform duration-300 ease-out p-6 ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Top Header Wrapper */}
          <div>
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <img src="/logo.png" alt="Logo" className="w-12 h-auto" />
              <button 
                onClick={() => setMobileMenu(false)}
                className="p-2 text-gray-500 hover:text-red-500 transition-colors rounded-full bg-gray-50"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Interactive Link Items */}
            <nav className="flex flex-col space-y-1">
              <a 
                href="/" 
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </a>
              
              <div className="py-1">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Services
                </div>
                <a 
                  href="/services" 
                  className="block px-6 py-2.5 text-base font-medium text-gray-700 hover:text-red-500"
                  onClick={() => setMobileMenu(false)}
                >
                  — Philanthropy
                </a>
                <a 
                  href="/services" 
                  className="block px-6 py-2.5 text-base font-medium text-gray-700 hover:text-red-500"
                  onClick={() => setMobileMenu(false)}
                >
                  — Conflict Resolution
                </a>
              </div>

              <div className="py-1">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Our Activities
                </div>
                <a 
                  href="/events" 
                  className="block px-6 py-2.5 text-base font-medium text-gray-700 hover:text-red-500"
                  onClick={() => setMobileMenu(false)}
                >
                  — Prayers
                </a>
                <a 
                  href="/events" 
                  className="block px-6 py-2.5 text-base font-medium text-gray-700 hover:text-red-500"
                  onClick={() => setMobileMenu(false)}
                >
                  — Coronation
                </a>
              </div>

              <a 
                href="/about" 
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all"
                onClick={() => setMobileMenu(false)}
              >
                About Us
              </a>
              
              <a 
                href="/contact" 
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all"
                onClick={() => setMobileMenu(false)}
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Drawer Bottom Action Footing Info */}
          <div className="mt-auto pt-6 border-t border-gray-100">
            <a 
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="block w-full text-center py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all shadow-md"
            >
              Request A Visit
            </a>
            
            <div className="flex flex-col space-y-2 mt-4 text-xs text-gray-500 px-2">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-gray-400" />
                <span>+234-803-672-6002</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

