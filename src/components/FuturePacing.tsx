"use client";
import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { day: "اليوم الأول", title: "صدمة الوضوح", desc: "هتكتشف إيه اللي كان معطلك طول السنين اللي فاتت. هتحدد النيش بتاعك بدقة وهتعرف قيمتك الحقيقية في السوق." },
  { day: "اليوم الـ 14", title: "بناء الماكينة", desc: "هتبني أول مسار تسويقي (Funnel) ليك، وتجهز عروضك اللي محدش يقدر يرفضها، وتبدأ حملتك لجلب العملاء." },
  { day: "اليوم الـ 30", title: "أول الانتصارات", desc: "هتستقبل أول دفعة من عميل VIP أو هتقفل أول مبيعات أوتوماتيكية لمنتجك الديجيتال. الثقة هترجعلك كاملة." }
];

export default function FuturePacing() {
  return (
    <section className="w-full py-12 px-4 bg-[#0F172A] text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">شكل حياتك بعد ما تبدأ معانا:</h2>
          <p className="text-gray-400">رحلة التحول مش هتاخد سنين.. دي خريطة الطريق بتاعتك.</p>
        </div>

        <div className="relative">
          {/* Line */}
          <div className="absolute right-1/2 md:right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-[#030712]"></div>

          <div className="space-y-12 relative z-10">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#1E293B] border-4 border-indigo-500 flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <span className="font-bold text-sm">{item.day}</span>
                </div>
                <div className="bg-[#FCFBF8]/5 border border-white/10 p-8 rounded-3xl flex-1 backdrop-blur-sm hover:bg-[#FCFBF8]/10 transition-colors">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-300">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
