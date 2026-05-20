import React, { useState } from 'react';
import { FaPlay, FaImage, FaTimes, FaCameraRetro } from 'react-icons/fa';

export default function Gallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Gallery items dataset (Mix of static local images and YouTube video tokens)
  const galleryItems = [
    {
      id: 1,
      type: "video",
      title: "Royal Coronation Ceremony Highlight",
      youtubeId: "dQw4w9WgXcQ", // Replace with your real YouTube video ID string
      thumbnail: "https://unsplash.com"
    },
    {
      id: 2,
      type: "image",
      title: "Courtesy Visit by the UNHI: Invitation to His Royal Majesty to Serve as Grand Royal Patron",
      src: "/gallery-photo-1.jpeg" // Place your physical files inside the root public/ folder
    },
    {
      id: 3,
      type: "video",
      title: "Annual Royal Inter-Community Philanthropic Address",
      youtubeId: "3tmd-ClpJxA", // Replace with your real YouTube video ID string
      thumbnail: "https://unsplash.com"
    },
    {
      id: 4,
      type: "image",
      title: "His Royal Majesty and the National President of the Catholic Youth Organisation of Nigeria (CYON)",
      src: "/gallery-photo-2.jpeg"
    },
    {
      id: 5,
      type: "image",
      title: "Audience with the Catholic Youth Organisation of Nigeria during a Courtesy Call to His Royal Majesty",
      src: "/gallery-photo-3.jpeg"
    },
    {
      id: 6,
      type: "video",
      title: "Eze Igbo Igburuburu II New Yam Festival Message",
      youtubeId: "kJQP7kiw5Fk", // Replace with your real YouTube video ID string
      thumbnail: "https://unsplash.com"
    }
  ];

  return (
    <div className={`min-h-screen pt-24 pb-16 bg-gray-50 transition-all duration-300 ${activeVideo ? 'blur-sm select-none pointer-events-none' : ''}`}>
      {/* Title Header Block */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <div className="flex justify-center mb-3">
          <FaCameraRetro className="text-red-500 text-3xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
          Latest & Upcoming Events
        </h1>
        <div className="h-1 w-20 bg-red-500 mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Explore photographic archives and premium visual highlights showcasing royal activities, cultural heritage, and corporate operations.
        </p>
      </div>

      {/* Media Grid Cards Container */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            {/* Visual Media Canvas Anchor */}
            <div className="relative aspect-video w-full bg-gray-900 overflow-hidden">
              <img 
                src={item.type === 'video' ? item.thumbnail : item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://unsplash.com";
                }}
              />
              
              {/* Media Action Overlay Icons */}
              {item.type === 'video' ? (
                <button 
                  onClick={() => setActiveVideo(item.youtubeId)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors pointer-events-auto cursor-pointer"
                >
                  <div className="p-4 bg-red-500 text-white rounded-full shadow-md group-hover:scale-110 transform transition-transform duration-300">
                    <FaPlay className="ml-0.5 w-5 h-5" />
                  </div>
                </button>
              ) : (
                <div className="absolute top-3 right-3 p-2 bg-black/50 text-white rounded-lg backdrop-blur-sm text-xs flex items-center gap-1.5">
                  <FaImage /> Photo
                </div>
              )}
            </div>

            {/* Media Meta Footnote Info Text */}
            <div className="p-4 md:p-5">
              <h3 className="font-medium text-gray-800 line-clamp-2 leading-snug group-hover:text-red-500 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Absolute Foreground Modal Engine Panel */}
      {activeVideo && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md pointer-events-auto select-auto">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 aspect-video">
            {/* Close Floating Window Action Controls */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 md:top-4 md:right-4 p-2.5 bg-white/10 hover:bg-red-500 text-white rounded-full transition-colors z-50 cursor-pointer focus:outline-none"
              title="Close Player"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Secure Sandboxed Frame Player Embed Component */}
            <iframe
              className="w-full h-full"
              src={`https://youtube.com{activeVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
