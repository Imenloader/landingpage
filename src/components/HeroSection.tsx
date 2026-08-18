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
    <section className="relative w-full pb-20 flex flex-col items-center justify-start px-4 overflow-hidden bg-[#0F172A]">
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
          {/* Primary CTA: WhatsApp */}
          <a 
            href="https://wa.me/201027609518?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%88%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%AF%D9%81%D8%B9."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-[#059669] text-white font-extrabold rounded-full text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(5,150,105,0.4)]"
          >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            تأكيد مكاني والدفع عبر الواتساب 👈
          </a>
          <p className="text-center text-sm text-gray-400 mt-2">متوفر الدفع عبر إنستاباي، فودافون كاش، أو تحويل بنكي</p>
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
