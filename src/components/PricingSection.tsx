"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Check, Sparkles, Clock, ShieldAlert } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="w-full py-32 px-4 bg-[#FCFBF8] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0F172A] tracking-tight"
          >
            إيه تمن إنك تفضل في مكانك؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            لو مأخدتش خطوة النهاردة، هتبقى فين كمان 6 شهور؟ لسه مضغوط؟ لسه دخلك قليل؟ جه الوقت إنك تختار طريق أحسن.
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-20">
          {/* Tier 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FCFBF8] p-8 lg:p-10 rounded-[2rem] border-2 border-gray-100 hover:border-gray-200 transition-colors"
          >
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">FAP بس</h3>
            <p className="text-gray-500 mb-8 h-12">احترف جلب العملاء وكبر بيزنس الفريلانس بتاعك.</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-extrabold text-[#0F172A]">[السعر]</span>
            </div>
            <button className="w-full py-4 mb-8 bg-[#F8FAFC] text-[#0F172A] font-bold rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">احجز مكاني دلوقتي</button>
            <ul className="space-y-5">
              {['المنهج الكامل لـ FAP', 'قوالب لكتابة العروض', 'استراتيجيات جلب العملاء', 'دخول مدى الحياة'].map((feat, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <Check size={24} className="text-indigo-500 ml-3 flex-shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tier 2 (Bundle) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1E293B] p-8 lg:p-12 rounded-[2.5rem] shadow-2xl relative transform lg:-translate-y-4 border border-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-[2.5rem] pointer-events-none"></div>
            
            <div className="absolute -top-5 right-1/2 translate-x-1/2 bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.5)] whitespace-nowrap animate-bounce">
              <Clock size={16} /> آخر 4 أماكن ⏰
            </div>

            <div className="relative z-10 mt-4">
              <h3 className="text-3xl font-extrabold text-white mb-2">الباقة الشاملة</h3>
              <p className="text-gray-400 mb-8 h-12">الخطة الكاملة. كبر خدماتك وأطلق منتجاتك الديجيتال في نفس الوقت.</p>
              
              <div className="flex flex-col mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-extrabold text-white">[السعر]</span>
                </div>
              </div>

              <button className="w-full py-5 mb-8 bg-[#059669] text-white font-extrabold rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(37,211,102,0.4)] text-lg">
                👈 احجز خطة نجاحك الشخصية
              </button>

              <ul className="space-y-5">
                {['كل حاجة في FAP', 'كل حاجة في DPL', 'أي بونص إضافي', 'أولوية في الدعم الفني'].map((feat, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <Check size={24} className="text-indigo-400 ml-3 flex-shrink-0" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tier 3 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FCFBF8] p-8 lg:p-10 rounded-[2rem] border-2 border-gray-100 hover:border-gray-200 transition-colors"
          >
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">DPL بس</h3>
            <p className="text-gray-500 mb-8 h-12">أطلق منتجات وكورسات ديجيتال مربحة.</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-extrabold text-[#0F172A]">[السعر]</span>
            </div>
            <button className="w-full py-4 mb-8 bg-[#F8FAFC] text-[#0F172A] font-bold rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">احجز مكاني دلوقتي</button>
            <ul className="space-y-5">
              {['المنهج الكامل لـ DPL', 'قوالب لإطلاق المنتجات', 'خطة التسويق والمبيعات', 'دخول مدى الحياة'].map((feat, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <Check size={24} className="text-purple-500 ml-3 flex-shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Risk Reversal Guarantee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-indigo-50 border border-indigo-200 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg"
        >
          <div className="w-24 h-24 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/30">
            <ShieldAlert size={48} />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3">ضماننا الحديدي اللي مريح بالك</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              إحنا بنضمنلك إنك لو طبقت الخطوات دي، عمرك ما هتحس بقلق إن معندكش عملاء تاني. لو محستش بتغيير جذري في وضوح البيزنس بتاعك وثقتك المالية خلال فترة الضمان، ابعتلنا إيميل وهنرجعلك كل قرش. من غير أي إحراج. <strong className="text-[#0F172A]">تغيير حياتك مضمون 100%.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
