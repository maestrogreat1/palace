import React from 'react';
import { FaCrown, FaPray, FaCheckCircle } from 'react-icons/fa';


export default function Blessings() {
  const royalBlessings = [
    {
      title: "Blessing of Peace & Unity (Ūdo)",
      igbo: "Egbe bere ugo bere, nke si ibeya ebere nku kwaya.",
      english: "Let the eagle perch and let the egret perch too. Whichever says the other should not perch, let its wing break. May absolute peace and coexistence anchor our communities."
    },
    {
      title: "Blessing of Long Life & Vitality (Ndū n’Anwūlī)",
      igbo: "Onye wetara oji, wetara ndu. Anyi ga-adi, anyi g’aba n’uba.",
      english: "He who brings kola, brings life. We shall live long, and we shall multiply in prosperity, strength, and joy."
    },
    {
      title: "Blessing of Progress & Prosperity (Oganihu)",
      igbo: "Ihe anyi ga-eri gbalu anyi gburu-gburu. Mma mma nu!",
      english: "May continuous success follow your steps. Prosperity will overflow from the throne down to every household across our lands."
    }
  ];

  return (
    <div className="bg-amber-50/40 min-h-screen pt-24 pb-16">
      {/* Editorial Header Section */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-16">
        <div className="flex justify-center mb-3">
          <FaCrown className="text-red-600 text-3xl animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
          Traditional Royal Blessings
        </h1>
        <div className="h-1 w-24 bg-red-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 font-light italic max-w-2xl mx-auto">
          Sacred words of authority, peace, and progress pronounced from the throne of His Royal Majesty, Eze Igbo igburuburu II Prosper.
        </p>
      </div>

      {/* Main Content Grid: Alternating Text & Photos */}
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {royalBlessings.map((blessing, index) => (
          <div 
            key={index}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-amber-100/50`}
          >
            {/* Text Segment */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-2">
                <FaPray className="text-red-500 text-xl" />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {blessing.title}
                </h2>
              </div>
              
              {/* Native Language Block quote */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50/50 py-3 rounded-r-xl">
                <p className="text-lg md:text-xl font-medium text-gray-900 font-serif italic">
                  "{blessing.igbo}"
                </p>
              </div>

              {/* Translation Text */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                <span className="font-semibold text-gray-800 inline-flex items-center gap-1"><FaCheckCircle className="text-green-600 text-xs" /> Interpretation:</span> {blessing.english}
              </p>
            </div>

            {/* Photo Segment */}
            <div className="flex-1 w-full h-64 md:h-80 relative overflow-hidden rounded-2xl shadow-md group">
              <img 
                src={`/blessing-photo-${index + 1}.jpeg`} // Replace with your actual asset file names
                alt={blessing.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if image asset is missing during development
                  e.target.src = "https://unsplash.com";
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Traditional Footnote */}
      <div className="text-center mt-20">
        <p className="text-gray-500 font-mono tracking-widest text-xs uppercase">
          — Ofu Obi, Ofu Ndū • Ofọ na Āgụ —
        </p>
      </div>
    </div>
  );
}
