"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { text: "قبل البرنامج ده، كنت تايه تماماً في تسعير خدماتي أو إزاي أجيب عملاء. دلوقتي عندي سيستم واضح، وأخيراً بدأت أقفل عقود بتعكس القيمة الحقيقية لتعبي." },
  { text: "أكبر تغيير مكنش بس في الدخل—كان في الثقة. أنا أخيراً فهمت الخطوات العملية لإطلاق أي منتج من غير التوتر والقلق اللي كنت بعيشهم كل مرة بحاول أبدأ حاجة جديدة." },
  { text: "كنت دايماً حاسس إني لوحدي وبحاول أكتشف كل حاجة بنفسي. الخطوات اللي اتعلمتها هنا إديتني اللي كان ناقصني بالظبط: الوضوح، النظام، وراحة البال اللي مكنتش بحلم بيها." },
];

export default function Testimonials() {
  return (
    <section className="w-full py-32 px-4 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0F172A] tracking-tight"
          >
            تغيير حقيقي من ناس زيك بالظبط
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            ده اللي الطلاب بيعيشوه بجد لما بيطبقوا الخطوات والأنظمة دي في شغلهم.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FCFBF8] p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative group"
            >
              <Quote size={40} className="text-gray-100 absolute top-8 left-8 rotate-12 group-hover:rotate-0 transition-transform duration-300 transform scale-x-[-1]" />
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed relative z-10 italic">"{t.text}"</p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                <div>
                  <p className="font-bold text-[#0F172A]">[اسم الطالب]</p>
                  <p className="text-sm text-gray-500">[مجال الطالب]</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
