"use client";
import React from 'react';

export default function TrustBar() {
  return (
    <div className="w-full bg-[#0F172A] border-y border-white/10 py-8 overflow-hidden flex flex-col items-center z-20 relative">
      <p className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">كما ظهر في / موثوق من قبل</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
        {/* Logos Placeholders */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-32 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 border-dashed relative group">
            <span className="text-white/30 text-xs font-bold">Logo {i}</span>
            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <span className="text-white text-[10px]">ضع لوجو هنا</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
