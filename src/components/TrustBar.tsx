"use client";
import React from 'react';

export default function TrustBar() {
  const logos = [
    {
      name: "Meta",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
    },
    {
      name: "Facebook",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
    },
    {
      name: "Instagram",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },
    {
      name: "ChatGPT",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
    }
  ];

  return (
    <div className="w-full bg-[#0F172A] border-y border-white/10 py-10 overflow-hidden flex flex-col items-center z-20 relative">
      <p className="text-gray-400 text-sm font-medium mb-8 tracking-wider">الأدوات والمنصات العالمية اللي هتتقن الشغل عليها</p>
      
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center justify-center opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300">
            <img 
              src={logo.url} 
              alt={logo.name} 
              className="h-8 md:h-10 object-contain filter brightness-0 invert"
            />
          </div>
        ))}
        {/* Custom Systeme.io text since finding a reliable raw SVG URL for it is tricky */}
        <div className="flex items-center justify-center opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300">
            <span className="text-white font-extrabold text-2xl tracking-tighter">systeme.io</span>
        </div>
      </div>
    </div>
  );
}
