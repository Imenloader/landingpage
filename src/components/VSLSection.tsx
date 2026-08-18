"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export default function VSLSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#030712] relative z-20 -mt-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center mb-8"
        >
          <p className="text-blue-400 font-bold mb-2 tracking-wide uppercase text-sm">رسالة سريعة</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">شوف الفيديو ده قبل ما تاخد أي قرار</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full aspect-video bg-gray-900 rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative group cursor-pointer"
        >
          {/* Placeholder for actual video thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40 opacity-50 group-hover:opacity-70 transition-opacity"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <PlayCircle size={48} className="text-white ml-2" />
            </div>
          </div>
          
          {/* Progress bar simulation */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div className="h-full bg-blue-500 w-1/3"></div>
          </div>
        </motion.div>
        
        <p className="mt-6 text-gray-500 text-sm font-medium italic text-center max-w-2xl">
          في الـ 3 دقايق دول، هوريك بالظبط السيستم اللي استخدمته عشان أكسر حاجز الدخل الثابت وأبني بيزنس شغال أوتوماتيك.
        </p>
      </div>
    </section>
  );
}
