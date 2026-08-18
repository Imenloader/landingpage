"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ArrowDown, CheckCircle2 } from 'lucide-react';

const valueItems = [
  { name: "البرنامج التدريبي الشامل (خطوة بخطوة)", value: "مرفق" },
  { name: "قوالب صفحات الهبوط الجاهزة للنسخ واللصق", value: "مرفق" },
  { name: "استراتيجيات جلب العملاء وإغلاق المبيعات", value: "مرفق" },
  { name: "الدخول لمجتمع الدعم الفني الخاص", value: "مرفق" },
];

export default function ValueStack() {
  return (
    <section className="w-full py-12 px-4 bg-[#F8FAFC] flex flex-col items-center">
      <div className="max-w-3xl w-full bg-[#FCFBF8] rounded-[2.5rem] shadow-2xl p-8 md:p-12 border-2 border-emerald-100 relative mt-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg">
          <Gift size={32} />
        </div>
        
        <h2 className="text-3xl font-extrabold text-center text-[#0F172A] mb-8 mt-4">إجمالي اللي هتحصل عليه:</h2>
        
        <div className="space-y-4 mb-8">
          {valueItems.map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                <span className="text-gray-700 font-medium">{item.name}</span>
              </div>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
          <p className="text-[#0F172A] font-bold text-xl mb-2">استثمارك في نفسك هو أهم خطوة</p>
          <p className="text-gray-600 font-medium text-sm">عشان تعرف تفاصيل العرض الحصري والسعر، تواصل معانا فوراً على الواتساب.</p>
        </div>
      </div>
      
      <div className="mt-8 animate-bounce text-emerald-600">
        <ArrowDown size={32} />
      </div>
    </section>
  );
}
