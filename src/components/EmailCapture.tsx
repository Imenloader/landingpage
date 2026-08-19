"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export default function EmailCapture() {
  return (
    <section id="enroll-form" className="w-full py-12 px-4 bg-[#FCFBF8] flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-indigo-50/50 rounded-r-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full bg-[#0F172A] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10"
      >
        <div className="w-full md:w-5/12 p-12 bg-gradient-to-bl from-blue-600 to-purple-700 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">جاهز تبطل فرهدة؟</h2>
            <p className="text-indigo-100 mb-8 text-lg">إنت على بعد خطوات من تغيير كامل لحياتك المهنية. احجز مكانك قبل ما السعر يزيد.</p>
            
            <a 
              href="https://wa.me/+201027609518?text=أهلاً، أنا جاهز أبدأ التغيير وعايز أعرف التفاصيل." 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 px-6 py-5 bg-[#059669] rounded-xl hover:bg-[#1DA851] transition-colors shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle size={28} className="text-white" />
              <div>
                <p className="font-extrabold text-white text-base">كلمني دلوقتي لتوجيه شخصي</p>
                <p className="text-green-100 text-xs uppercase tracking-wide">تواصل مباشر مع فريقنا</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-7/12 p-12 lg:p-16 flex flex-col justify-center bg-[#FCFBF8]">
          <h3 className="text-2xl font-bold text-[#0F172A] mb-8">أكد حجزك دلوقتي</h3>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="w-full">
                <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الأول</label>
                <input 
                  type="text" 
                  className="w-full bg-[#F8FAFC] border border-gray-200 text-[#0F172A] rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="اسمك هنا" 
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-bold text-gray-700 mb-2">الإيميل</label>
                <input 
                  type="email" 
                  className="w-full bg-[#F8FAFC] border border-gray-200 text-[#0F172A] rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="your.email@example.com" 
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="micro-commit" className="w-4 h-4 text-indigo-600 rounded" />
              <label htmlFor="micro-commit" className="text-sm font-bold text-gray-700 cursor-pointer mr-2">أيوه، أنا جاهز أغير حياتي النهاردة.</label>
            </div>

            <button 
              type="button" 
              className="w-full py-5 bg-[#1E293B] text-white font-extrabold text-lg rounded-xl hover:bg-black hover:scale-[1.02] transition-all mt-2 flex items-center justify-center gap-2 group shadow-xl"
            >
              أيوه! أنا عايز التغيير ده
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform mr-2" />
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-6 text-center">بياناتك في أمان. ضمان 100% بدون أي مخاطرة.</p>
        </div>
      </motion.div>
    </section>
  );
}
