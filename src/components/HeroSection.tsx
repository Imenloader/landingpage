"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Flame } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full pb-20 flex flex-col items-center justify-start px-4 overflow-hidden bg-[#0F172A] min-h-[90vh]">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center pt-24 md:pt-32">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-full text-sm font-bold mb-8"
        >
          <Flame size={16} className="text-orange-400" />
          <span>تحديث 2026: تم فتح باب الانضمام لعدد محدود</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight md:leading-tight mb-8 tracking-tighter"
        >
          السيستم الوحيد اللي هياخدك من <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">التوهان</span> إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">أول 10,000 دولار</span> أونلاين
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
        >
          اكتشف الخلطة السرية (FAP + DPL) لبناء مصدر دخل دولاري مستقر من البيت، سواء كفريلانسر بيقفل ديلات كبيرة، أو كصانع محتوى بيبيع منتجات رقمية وهو نايم. بدون أي خبرة تقنية سابقة.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="https://wa.me/+201027609518?text=أهلاً، أنا مهتم بالاشتراك في السيستم وعايز أعرف السعر وتفاصيل الدفع."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-extrabold rounded-full text-2xl transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.4)] w-full sm:w-auto"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            تأكيد مكاني والدفع عبر الواتساب
          </a>
          <p className="text-center text-sm text-gray-400 mt-2 font-medium">متاح الدفع عبر: إنستاباي، فودافون كاش، أو تحويل بنكي</p>
        </motion.div>
      </div>
    </section>
  );
}
