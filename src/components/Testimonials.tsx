import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "Sarah J.", role: "Web Designer", text: "FAP completely changed my business. I went from charging $500 per website to $3,000 in just two months." },
  { name: "Mike T.", role: "Course Creator", text: "DPL gave me the confidence to launch. I made $10k on my first weekend." },
  { name: "Elena R.", role: "Copywriter", text: "The templates and scripts inside FAP are worth 10x the price of admission. Highly recommended!" },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 px-4 bg-blue-700 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Don't Just Take My Word For It</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">See what our students have accomplished using these frameworks.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
