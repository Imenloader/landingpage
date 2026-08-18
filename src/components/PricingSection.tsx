"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Check, Sparkles, Clock, ShieldAlert } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="w-full py-16 px-4 bg-[#FCFBF8] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0F172A] tracking-tight"
          >
            جاهز تاخد الخطوة اللي هتغير حياتك؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            المقاعد محدودة جداً عشان نقدر نركز مع كل شخص ونضمن وصوله للنتيجة. اضغط على الزرار تحت وتواصل معانا على الواتساب عشان تعرف التفاصيل والأسعار والعروض المتاحة حالياً.
          </motion.p>
        </div>
        
        <div className="flex justify-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border-2 border-emerald-500 overflow-hidden"
          >
            {/* Emerald Glow */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold mb-6">
                <Sparkles size={16} />
                <span>البرنامج الشامل (نسخة 2026)</span>
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Master Bundle: FAP + DPL</h3>
              <p className="text-gray-500">السيستم الكامل اللي هياخدك من الصفر لحد بناء بيزنس أونلاين حقيقي وتوليد دخل شهري مستقر.</p>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 mb-8 text-right">
              <h4 className="font-bold text-[#0F172A] mb-4 text-lg">ليه تتواصل معانا دلوقتي؟</h4>
              <ul className="space-y-4">
                {['هتعرف تفاصيل السعر والعروض الحصرية المتاحة النهاردة بس.',
                  'هنرد على كل أسئلتك ونتأكد إن البرنامج مناسب ليك فعلاً.',
                  'هنوضحلك طرق الدفع المختلفة (تحويل بنكي، فودافون كاش، إنستاباي، الخ).',
                  'ضمان ذهبي لاسترجاع فلوسك خلال 14 يوم (بدون أي شروط أو أسئلة).'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[#1E293B] font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="https://wa.me/+201027609518?text=أهلاً، مهتم أعرف تفاصيل وسعر برنامج الـ Master Bundle (FAP + DPL) وهل في عروض متاحة حالياً؟" target="_blank" className="block w-full">
              <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-bold text-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                <span className="text-2xl">💬</span>
                <span>اضغط هنا لمعرفة السعر والتفاصيل</span>
              </button>
            </Link>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
              <Clock size={16} className="text-amber-500" />
              <span>فريقنا بيرد على الواتساب فوراً</span>
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
              <ShieldAlert size={16} className="text-emerald-500" />
              <span>ضمان استرجاع لمدة 14 يوم</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
