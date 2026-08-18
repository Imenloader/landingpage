"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function InstructorBio() {
  return (
    <section className="w-full py-16 px-4 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-[#030712] to-[#030712] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
             <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
             <div className="relative w-full h-full bg-gray-800 rounded-[2.5rem] -rotate-3 border-2 border-white/10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gray-700/50 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                  [صورة المدرب هنا]
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-7/12 text-center md:text-right"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#FCFBF8]/5 border border-white/10 text-indigo-300 text-sm font-semibold mb-6">
            اعرف أكتر عن مدربك
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            أنا كنت بالظبط في المكان اللي إنت فيه دلوقتي.
          </h2>
          
          <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed mb-10">
            <p>
              فاكر كويس إحساس الإحباط لما كنت بشتغل ساعات طويلة لعملاء مش مقدريني، ودايماً قلقان المشروع الجاي هييجي منين. كنت ببدل عمري بمرتب مبيعملش حاجة بجد.
            </p>
            <p>
              نقطة التحول مكنتش إني أشتغل أكتر. كانت إني أبني سيستم. أول ما اتعلمت إزاي أقدم مهاراتي، وأسعر قيمتي، وأطلق منتجات ديجيتال، كل حاجة اتغيرت. 
            </p>
            <p>
              أنا عملت FAP و DPL عشان مش عايزك تضيع سنين بتجرب وتغلط وتتعلم بالطريقة الصعبة. مش لازم تعمل ده لوحدك أبداً.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
