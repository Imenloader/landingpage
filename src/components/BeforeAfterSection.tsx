"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Frown, Smile } from 'lucide-react';

export default function BeforeAfterSection() {
  return (
    <section className="w-full py-12 px-4 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-4">الفرق بين الطريقة القديمة وسيستم FAP</h2>
          <p className="text-gray-500 text-lg">دي مش مجرد وعود.. ده الواقع اللي هتعيشه بنفسك لو طبقت صح.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-[2rem] border-2 border-red-100 shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
              <Frown size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">حياتك دلوقتي (الإرهاق)</h3>
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-inner">
              <img src="/images/before_stress.jpg" alt="Exhausted freelancer" className="w-full h-full object-cover grayscale-[30%] contrast-125" />
            </div>
            <ul className="text-right space-y-3 w-full text-gray-600 font-medium">
              <li>❌ بتدور على عملاء كل يوم من الصفر</li>
              <li>❌ بتنافس على السعر القليل في مواقع الفريلانس</li>
              <li>❌ مفيش دخل ثابت أو أمان مالي</li>
            </ul>
          </motion.div>

          {/* After */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-[2rem] border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-1 rounded-bl-2xl font-bold text-sm">الوضع الجديد</div>
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mt-4">
              <Smile size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">حياتك بعد السيستم (التحكم)</h3>
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <img src="/images/after_control.jpg" alt="Relaxed and in control" className="w-full h-full object-cover saturate-110" />
            </div>
            <ul className="text-right space-y-3 w-full text-gray-600 font-medium">
              <li>✅ العملاء هما اللي بيطلبوا يشتغلوا معاك</li>
              <li>✅ بتسعر خدماتك بقيمتها الحقيقية (VIP)</li>
              <li>✅ دخل أوتوماتيكي من منتجاتك الديجيتال</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
