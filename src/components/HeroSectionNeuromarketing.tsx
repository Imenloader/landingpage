"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Flame } from 'lucide-react';

export default function HeroSectionNeuromarketing() {
  return (
    <section className="relative w-full pb-16 flex flex-col items-center justify-start px-4 overflow-hidden bg-[#0F172A]">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center pt-16 md:pt-24 gap-12">
        
        {/* Right Column: Text & CTA (Attentional Focus) */}
        <div className="flex-1 text-right flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-full text-sm font-bold mb-6"
          >
            <Flame size={16} className="text-orange-400" />
            <span>تحديث 2026: تم فتح باب الانضمام لعدد محدود</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-tight mb-6 tracking-tighter"
          >
            اكتشف السيستم الشامل لبناء <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">مصدر دخل مادي مستقر</span> من البيت
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed"
          >
            ابدأ رحلتك الآن في تعلم مهارات مطلوبة عالمياً، من الصفر التام وبدون خبرة تقنية، لتأمين مستقبلك المالي، سواء كفريلانسر بيقفل ديلات أو كصانع محتوى بيبيع منتجات رقمية وهو نايم.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-start gap-3 w-full sm:w-auto"
          >
            {/* Von Restorff Effect: High Contrast CTA */}
            <a 
              href="https://wa.me/+201027609518?text=أهلاً، أنا مهتم بالاشتراك في السيستم وعايز أعرف السعر وتفاصيل الدفع."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-[#10B981] text-slate-900 font-extrabold rounded-full text-xl transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.5)] w-full sm:w-auto"
            >
              <MessageCircle size={28} className="group-hover:scale-110 transition-transform text-slate-900" />
              احجز مكانك وابدأ التغيير عبر الواتساب
            </a>
            <p className="text-sm text-gray-400 mt-2 font-medium">متاح الدفع عبر: إنستاباي، فودافون كاش، أو تحويل بنكي</p>
          </motion.div>
        </div>

        {/* Left Column: Gaze Cueing Image */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-1 relative w-full max-w-lg hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-transparent opacity-40 z-10 pointer-events-none"></div>
            <img loading="lazy" 
              src="/images/instructor_hero.jpg" 
              alt="Instructor" 
              className="w-full h-auto object-cover transform -scale-x-100" 
            />
            {/* -scale-x-100 flips the image horizontally so his body angle naturally points towards the text in RTL layout */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
