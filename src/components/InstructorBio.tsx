import React from 'react';

export default function InstructorBio() {
  return (
    <section className="w-full py-20 px-4 bg-white flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 bg-gray-200 rounded-full border-4 border-white shadow-xl overflow-hidden relative">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400">
               Photo
             </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Meet Your Instructor</h2>
          <h3 className="text-xl text-blue-600 font-semibold mb-6">Expert Freelancer & Digital Creator</h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Over the past decade, I've built multiple six-figure freelance businesses and launched dozens of profitable digital products. I realized that most "gurus" teach outdated tactics that simply don't work anymore.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            That's why I created FAP and DPL. To give you the exact, step-by-step frameworks I use to land premium clients and launch successful digital projects without the fluff.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-bold text-gray-800">
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full">10k+ Students</span>
            <span className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full">$5M+ Client Revenue</span>
            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full">Proven Methods</span>
          </div>
        </div>
      </div>
    </section>
  );
}
