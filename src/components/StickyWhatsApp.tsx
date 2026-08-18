"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    // Delay appearance by 3 seconds so it doesn't compete with Hero CTA (Cognitive Load Theory)
    const showTimer = setTimeout(() => setIsVisible(true), 3000);
    // Stop the pulse animation after 10 seconds to avoid habituation (the brain stops noticing repetitive stimuli)
    const pulseTimer = setTimeout(() => setIsPulsing(false), 13000);
    
    return () => {
      clearTimeout(showTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/+201027609518?text=أهلاً، أنا مهتم بالاشتراك في السيستم وعايز أعرف السعر وتفاصيل الدفع."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[9999] group"
      aria-label="تواصل معنا على الواتساب"
    >
      {/* Expanding ripple rings (Attentional Orienting) */}
      {isPulsing && (
        <>
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
          <span className="absolute inset-[-4px] rounded-full bg-emerald-500 animate-ping opacity-15 animation-delay-500" />
        </>
      )}
      
      {/* Main Button */}
      <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] group-hover:scale-110 group-hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)] transition-all duration-300">
        <MessageCircle size={30} className="text-white" fill="white" />
      </div>

      {/* Tooltip on hover (Reduces friction by telling user what happens next) */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900 text-white text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        كلمنا دلوقتي على الواتساب 💬
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
      </div>
    </a>
  );
}
