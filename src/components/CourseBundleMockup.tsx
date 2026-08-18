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
          className="w-full max-w-4xl py-24 bg-slate-800 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.3)] relative flex items-center justify-center overflow-hidden border-none"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-indigo-900/40 to-slate-900 opacity-80"></div>
          
          <div className="relative z-10 w-full px-4 flex items-center justify-center">
            <img 
              src="/images/bundle_mockup.jpg" 
              alt="Course Bundle 3D Mockup" 
              className="w-full max-w-[700px] hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_50px_rgba(16,185,129,0.3)] rounded-2xl" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
