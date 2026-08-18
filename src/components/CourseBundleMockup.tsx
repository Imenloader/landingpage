"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CourseBundleMockup() {
  return (
    <section className="w-full py-20 px-4 bg-[#0F172A] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">إيه اللي هتاخده بالظبط؟</h2>
          <p className="text-indigo-300 text-lg">كل حاجة محتاجها متجمعة في مكان واحد.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl aspect-[2/1] md:aspect-[2.5/1] bg-slate-800 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.3)] relative group cursor-pointer flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-indigo-900/40 to-slate-900 opacity-80"></div>
          
          <div className="relative z-10 text-center px-4">
            <span className="text-4xl mb-4 block">💻 📱 🖥️</span>
            <h3 className="text-2xl font-bold text-white mb-2">صورة مجمعة (Mockup)</h3>
            <p className="text-indigo-200 max-w-md mx-auto">
              ضع هنا صورة احترافية تظهر الكورسات على شاشة لاب توب، أيباد، وموبايل. 
              (استخدم موقع مثل Smartmockups.com لدمج صور الكورس)
            </p>
          </div>

          <div className="absolute inset-0 border-4 border-dashed border-indigo-500/30 rounded-3xl group-hover:border-indigo-400 transition-colors"></div>
        </motion.div>
      </div>
    </section>
  );
}
