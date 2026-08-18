"use client";
import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only trigger on desktop (mouseleave)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed && !showPopup) {
        setShowPopup(true);
      }
    };

    // Don't show if already dismissed this session
    if (typeof window !== 'undefined' && sessionStorage.getItem('exit_intent_dismissed')) {
      setDismissed(true);
      return;
    }

    // Delay listener activation by 15 seconds (don't interrupt early engagement)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 15000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dismissed, showPopup]);

  const handleDismiss = () => {
    setShowPopup(false);
    setDismissed(true);
    sessionStorage.setItem('exit_intent_dismissed', 'true');
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" dir="rtl">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={handleDismiss}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 md:p-10 animate-slideUp text-center">
        {/* Close button (Autonomy preservation - no dark patterns) */}
        <button 
          onClick={handleDismiss}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          aria-label="إغلاق"
        >
          <X size={20} className="text-slate-500" />
        </button>

        {/* Emoji anchor (Gaze cueing - eyes draw attention to text below) */}
        <div className="text-6xl mb-6">🤔</div>
        
        <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-4">
          مستني إيه؟
        </h3>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          لو عندك أي سؤال أو مش متأكد، كلمنا على الواتساب وهنرد عليك في دقايق. مفيش أي التزام.
        </p>

        <a 
          href="https://wa.me/+201027609518?text=أهلاً، عندي استفسار عن السيستم."
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDismiss}
          className="inline-flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#25D366] text-white font-extrabold rounded-2xl text-xl hover:scale-105 transition-all shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
        >
          <MessageCircle size={24} />
          اسأل سؤالك على الواتساب
        </a>

        <p className="text-sm text-gray-400 mt-4">
          هنرد عليك في أقل من ٥ دقايق ⚡
        </p>
      </div>
    </div>
  );
}
