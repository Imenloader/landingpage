"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { MessageCircle, Clock, ArrowLeft } from 'lucide-react';

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-start px-4 overflow-hidden bg-[#0F172A]">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 text-right max-w-5xl mx-auto flex flex-col items-start pt-32 md:pt-40">
        
        {/* Visual Scarcity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Checkout */}
          <Link 
            href="/checkout"
            className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-[#059669] text-white font-extrabold rounded-full text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(5,150,105,0.4)]"
          >
            👈 تأكيد مكاني والبدء فوراً (الأماكن محدودة)
            <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA: WhatsApp */}
          <a 
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-gray-400 hover:text-white font-medium rounded-full text-sm transition-all"
          >
            <MessageCircle size={18} />
            متردد؟ تواصل مع فريقنا على الواتساب
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-sm text-gray-500 font-medium italic"
        >
          حاسس إن ده اللي إنت محتاجه بالظبط؟ كمل قراية...
        </motion.p>
      </div>
    </section>
  );
}
