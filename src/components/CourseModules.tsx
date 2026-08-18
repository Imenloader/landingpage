"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Briefcase, CheckCircle2 } from 'lucide-react';

const fapModules = [
  { title: "الموديول الأول: أساسيات الفريلانس", desc: "تأسيس البيزنس، تحديد النيش، وتظبيط البراند بتاعك عشان تجذب عملاء تقال يقدروا قيمتك." },
  { title: "الموديول التاني: احتراف جلب العملاء", desc: "استراتيجيات الإيميل البارد، صناعة المحتوى، وإزاي تقفل أول 50,000 جنيه ليك بثقة." },
  { title: "الموديول التالت: التسعير والعروض", desc: "إزاي تسعر قيمتك (مش وقتك)، وتكتب عروض مبتترفضش، وتتعامل مع أي اعتراض بذكاء." },
  { title: "الموديول الرابع: التسليم والتوسع", desc: "إزاي تقدم قيمة رهيبة وتخلي خدماتك عبارة عن منتج سهل تبيعه وتكبر بيه." },
];

const dplModules = [
  { title: "المرحلة الأولى: التحقق من الفكرة", desc: "تلاقي أفكار منتجات ديجيتال مربحة وجمهورك مستعد ومتحمس يشتريها." },
  { title: "المرحلة التانية: التطوير السريع", desc: "تبني المنتج الأولي بتاعك (MVP) في ويك إند واحد من غير كود معقد." },
  { title: "المرحلة التالتة: استراتيجية الإطلاق", desc: "تعمل ضجة قبل الإطلاق، وتبني صفحات هبوط وإيميلات بتبيع وبتحول الزوار لعملاء." },
  { title: "المرحلة الرابعة: مبيعات مستمرة", desc: "تعمل أوتوميشن لمسارات التسويق عشان تبيع وإنت نايم وتكبر دخلك السلبي." },
];

export default function CourseModules() {
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
            إيه اللي جوه المنهج؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            من غير رغي كتير. خطوات عملية متجربة وبتجيب نتيجة في السوق الديجيتال بتاع النهارده.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FAP Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-indigo-50/50 p-8 md:p-12 rounded-[2.5rem] border border-indigo-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200/50 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 mb-12">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <Briefcase size={36} />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#0F172A] mb-2">تسريع الفريلانس (FAP)</h3>
                <p className="text-indigo-700 font-medium">للمحترفين ومقدمي الخدمات</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              {fapModules.map((mod, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1"><CheckCircle2 className="text-indigo-500" size={24} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-2">{mod.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* DPL Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-purple-50/50 p-8 md:p-12 rounded-[2.5rem] border border-purple-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200/50 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 mb-12">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-purple-600/20">
                <MonitorPlay size={36} />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#0F172A] mb-2">إطلاق المشاريع الرقمية (DPL)</h3>
                <p className="text-purple-700 font-medium">لصناع المحتوى والمطورين</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              {dplModules.map((mod, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1"><CheckCircle2 className="text-purple-500" size={24} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-2">{mod.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
