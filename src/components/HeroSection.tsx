"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, ArrowLeft } from 'lucide-react';

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-[#0F172A]">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center pt-20">
        
        {/* Visual Scarcity */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-bold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.2)]"
        >
          <Clock size={16} className="animate-pulse" />
          فاضل 7 أماكن بس بالسعر ده قبل ما يزيد بكرة ⏰
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold mb-8 tracking-tighter text-white leading-[1.1]"
        >
          تخيل تصحى تلاقي <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-indigo-400 to-purple-400">جدولك مليان عملاء.</span> أخيراً.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light leading-relaxed"
        >
          شوف نفسك بتدير بيزنس ديجيتال بيكسب بجد. حس بالثقة العميقة وإنت عارف إزاي تجذب عملاء VIP وتطلق منتجات بتتباع كلها. <strong className="text-white">غير</strong> مسار حياتك المهنية النهاردة.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: WhatsApp */}
          <a 
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-[#059669] text-white font-extrabold rounded-full text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          >
            👉 احجز خطة نجاحك الشخصية (أماكن محدودة)
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          </a>

          {/* Secondary CTA: Form */}
          <button 
            onClick={scrollToForm}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full text-lg transition-all hover:bg-[#FCFBF8] hover:text-black"
          >
            أيوه! عايز أبدأ التغيير [3 خطوات بس]
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
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
