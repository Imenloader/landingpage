"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MonitorPlay, CheckCircle2, Rocket } from 'lucide-react';

export default function IdentitySelector() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="w-full py-24 px-4 bg-[#FCFBF8]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">أنت مين في دول؟</h2>
        <p className="text-gray-500 mb-12 text-lg">عشان نوفرلك الحل الصح، اختار الوضع اللي بينطبق عليك حالياً:</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <button 
            onClick={() => setSelected('beginner')}
            className={`p-8 rounded-3xl border-2 transition-all text-right flex flex-col gap-4 \${selected === 'beginner' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 bg-[#FCFBF8] hover:border-emerald-200'}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center \${selected === 'beginner' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
              <Rocket size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A]">ببدأ من الصفر (مبتدئ)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">لسه معنديش خبرة أو مهارة واضحة، وحاسس إني تايه وسط كمية المعلومات. عايز طريق واضح ياخدني من إيدي خطوة بخطوة لحد ما أجيب أول دولار.</p>
          </button>

          <button 
            onClick={() => setSelected('fap')}
            className={`p-8 rounded-3xl border-2 transition-all text-right flex flex-col gap-4 \${selected === 'fap' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-[#FCFBF8] hover:border-indigo-200'}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center \${selected === 'fap' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
              <Briefcase size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A]">فريلانسر / مقدم خدمات</h3>
            <p className="text-gray-600 text-sm leading-relaxed">بشتغل مع عملاء بس عايز أزود أسعاري، أجيب عملاء VIP، وابني سيستم يجيلي شغل باستمرار من غير ما أعتمد على منصات العمل الحر.</p>
          </button>

          <button 
            onClick={() => setSelected('dpl')}
            className={`p-8 rounded-3xl border-2 transition-all text-right flex flex-col gap-4 \${selected === 'dpl' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-[#FCFBF8] hover:border-purple-200'}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center \${selected === 'dpl' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
              <MonitorPlay size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A]">صانع محتوى / خبير</h3>
            <p className="text-gray-600 text-sm leading-relaxed">عندي مهارة أو متابعين وعايز أحول معرفتي لمنتج ديجيتال (كورس، كتاب، قالب) يتباع أوتوماتيك وابني دخل سلبي.</p>
          </button>
        </div>

        <div className="min-h-[120px]">
          <AnimatePresence mode="wait">
            {selected === 'beginner' && (
              <motion.div 
                key="beginner"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-emerald-600 text-white p-6 rounded-2xl text-right max-w-2xl mx-auto shadow-xl"
              >
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-8 h-8 shrink-0 text-emerald-200" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">أنت في المكان الصح!</h4>
                    <p className="text-emerald-50">السيستم مصمم خصيصاً عشان ياخدك من الصفر المطلق. هديليك المهارة، وهعلمك إزاي تبيعها، مش هنسيبك لحد ما تنجح.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {selected === 'fap' && (
              <motion.div 
                key="fap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-indigo-600 text-white p-6 rounded-2xl text-right max-w-2xl mx-auto shadow-xl"
              >
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-8 h-8 shrink-0 text-indigo-200" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">برنامج الفريلانس (FAP) هو حلك المثالي</h4>
                    <p className="text-indigo-50">هتتعلم إزاي تبني هوية قوية، تقفل ديلات بـ 1000$ وأكتر، وتبني قمع مبيعات (Funnel) يجيبلك عملاء جاهزين يدفعوا.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {selected === 'dpl' && (
              <motion.div 
                key="dpl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-purple-600 text-white p-6 rounded-2xl text-right max-w-2xl mx-auto shadow-xl"
              >
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-8 h-8 shrink-0 text-purple-200" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">برنامج المنتجات الرقمية (DPL) اتعمل عشانك</h4>
                    <p className="text-purple-50">هتاخد السيستم كامل من أول اختيار الفكرة، لتسجيل الكورس، لحد إطلاق حملات الإعلانات اللي بتجيب مبيعات وأنت نايم.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
