"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    title: "أخيراً هتحس بالأمان",
    desc: "عيش إحساس الراحة لما دخلك يكون متوقع. مش هتسهر تفكر هتدفع فواتيرك إزاي الشهر الجاي عشان شغلك بقى ثابت."
  },
  {
    icon: Sparkles,
    color: "text-purple-600",
    bg: "bg-purple-100",
    title: "حس بتقدير الناس ليك",
    desc: "اسمع كلام التقدير من عملائك وزمايلك اللي بقوا شايفينك خبير بجد، مش مجرد فريلانسر بيتبدل بسهوله وبأرخص سعر."
  },
  {
    icon: Heart,
    color: "text-amber-600",
    bg: "bg-amber-100",
    title: "عيش الحرية بجد",
    desc: "اكتشف متعة إنك تصحى وتختار هتشتغل إمتى وفين ومع مين. شيل من على كتافك ضغط التحكم والمديرين."
  },
  {
    icon: Zap,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
    title: "ولّع ثقتك في نفسك",
    desc: "شوف نفسك داخل أي ميتنج تفاوض وإنت عارف قيمتك كويس—وبتاخدها. مش هتقبل بأقل من اللي تستحقه تاني."
  }
];

export default function ValueProposition() {
  return (
    <section className="w-full py-32 px-4 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0F172A] tracking-tight"
          >
            أنا عارف كويس إحساس الإرهاق ده.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed space-y-4"
          >
            <p>أنا كنت مكانك. بشتغل لوش الصبح، باصص للشاشة، وبسأل نفسي ليه بفرهد نفسي أوي كده عشان دخل مبيعملش حاجة بجد. إنت مرهق، مضغوط، ومستنزف تماماً.</p>
            <p className="font-bold text-[#0F172A] text-2xl mt-8">بس تخيل لو بكرة ممكن يكون مختلف تماماً.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {benefits.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-[#FCFBF8] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${feat.bg} group-hover:scale-110 transition-transform`}>
                <feat.icon size={28} className={feat.color} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0F172A]">{feat.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-gray-500 italic mb-4">جاهز تسيب الإرهاق ده وراك؟</p>
           <button className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors text-lg">&larr; أيوه، أنا عايز التغيير ده</button>
        </div>
      </div>
    </section>
  );
}
