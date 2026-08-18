"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "قصة نجاح حقيقية",
      role: "من موظف بنك إلى صاحب براند",
      text: "من موظف بنك - لفريلانسر - لصاحب براند فى خلال سنة! السيستم ده اختصر عليا سنين من التوهان والمحاولات.",
      highlight: "صاحب براند فى خلال سنة",
      rating: 5
    },
    {
      name: "تغيير جذري",
      role: "كان بيبحث عن أي مصدر دخل",
      text: "التحول من البحث عن مصدر دخل أونلاين وتجارب كتير بدون نتيجة - لفريلانسر مش ملاحق على شغل العملاء والطلبات.",
      highlight: "مش ملاحق على شغل العملاء",
      rating: 5
    },
    {
      name: "بداية من الصفر",
      role: "بدون أي خبرة تقنية سابقة",
      text: "كنت فاكر إن المجال ده للناس بتوع التكنولوجيا بس. المنهج هنا بياخدك خطوة بخطوة من الصفر لحد ما تبني بيزنس حقيقي بيجيب فلوس بجد.",
      highlight: "من الصفر لبيزنس حقيقي",
      rating: 5
    }
  ];

  return (
    <section className="w-full py-12 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-emerald-600 font-bold mb-3 tracking-wide uppercase text-sm">قصص حقيقية</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0F172A] tracking-tight"
          >
            الناس دي كانت مكانك في يوم من الأيام
          </motion.h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            لو لسه بتبدأ أو جربت حجات كتير ومفيش فايدة.. القصص دي بتثبتلك إنك تقدر.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#FCFBF8] p-8 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-6 left-6 text-gray-200 w-12 h-12 rotate-180 group-hover:text-emerald-100 transition-colors" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-[#1E293B] text-lg leading-relaxed mb-6 font-medium relative z-10">
                "{t.text}"
              </p>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A]">{t.name}</h4>
                  <p className="text-sm text-emerald-600 font-medium">{t.role}</p>
                </div>
              </div>

              <div className="absolute -bottom-3 right-8 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {t.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
