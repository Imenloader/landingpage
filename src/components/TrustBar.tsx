"use client";
import React from 'react';

export default function TrustBar() {
  const logos = [
    {
      name: "Meta",
      url: "https://cdn.simpleicons.org/meta/ffffff"
    },
    {
      name: "Facebook",
      url: "https://cdn.simpleicons.org/facebook/ffffff"
    },
    {
      name: "Instagram",
      url: "https://cdn.simpleicons.org/instagram/ffffff"
    },
    {
      name: "ChatGPT",
      url: "https://cdn.simpleicons.org/openai/ffffff"
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
              className="h-8 md:h-10 object-contain"
            />
          </div>
        ))}
        {/* Custom Systeme.io text */}
        <div className="flex items-center justify-center opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300">
            <span className="text-white font-extrabold text-3xl tracking-tighter lowercase">systeme.io</span>
        </div>
      </div>
    </div>
  );
}
