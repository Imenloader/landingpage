"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, PenTool, Users, Rocket } from 'lucide-react';

const chunks = [
  {
    icon: BrainCircuit,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    title: "1. العقلية (Mindset)",
    desc: "أول خطوة هي الـ Mindshift. هنكسر حاجز الخوف من العمل الحر ونتعلم إزاي نفكر كرواد أعمال. مش هتبقى مجرد 'صنايعي' بتنفذ، هتبقى مستشار بيقدم قيمة حقيقية العميل مستعد يدفع فيها كتير."
  },
  {
    icon: PenTool,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    title: "2. اكتساب المهارات التقنية",
    desc: "هتتعلم المهارات المطلوبة حالياً في السوق: إزاي تبني Websites، تعمل Chatbots، وتطلق إعلانات ممولة احترافية. مهارات تقدر تطبقها عملياً من أول يوم بدون أي تعقيد."
  },
  {
    icon: Users,
    color: "text-amber-600",
    bg: "bg-amber-100",
    title: "3. اكتساب العملاء (الـ FAP)",
    desc: "هتتعلم استراتيجية FAP لإغلاق الديلات. إزاي تجيب عملاء محليين ودوليين (زي دكاترة الأسنان ومعامل التحاليل)، وتقنعهم بشغلك، وتتفق معاهم على أسعار محترمة بكل ثقة."
  },
  {
    icon: Rocket,
    color: "text-purple-600",
    bg: "bg-purple-100",
    title: "4. المنتجات الرقمية (الـ DPL)",
    desc: "هنتعلم إزاي نبني دخل سلبي (Passive Income). هتحول خبرتك لمنتج رقمي بيتباع وهو نايم، من خلال سيستم DPL المخصص لصناع المحتوى."
  }
];

export default function ValueProposition() {
  return (
    <section className="w-full py-16 px-4 bg-[#F8FAFC] relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0F172A] tracking-tight"
          >
            إزاي السيستم ده بيشتغل؟
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            <p>خريطة طريق واضحة ومبنية على أسس علمية وعملية (تطبيق حرفي لنظرية الـ Central Route لتقليل المجهود الإدراكي). السيستم مبني على ٤ خطوات أساسية:</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {chunks.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={\`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 \${feat.bg} group-hover:scale-110 transition-transform\`}>
                <feat.icon size={28} className={feat.color} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#0F172A]">{feat.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a href="https://wa.me/+201027609518?text=أهلاً، أنا عندي استفسار عن محتوى السيستم." target="_blank" className="text-slate-500 font-bold hover:text-slate-800 transition-colors text-lg inline-block pb-1 hover:scale-105">تواصل معنا للاستفسار وتوضيح التفاصيل &larr;</a>
        </div>
      </div>
    </section>
  );
}
