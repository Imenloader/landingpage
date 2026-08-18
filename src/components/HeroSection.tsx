import React from 'react';

export default function HeroSection() {
  return (
    <section className="w-full py-24 px-4 text-center bg-blue-700 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight max-w-4xl leading-tight">
        Launch Your Digital Career with <span className="text-yellow-400">FAP & DPL</span>
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-2xl opacity-90">
        The ultimate Freelancer Accelerator Program and Digital Project Launch courses. Go from zero to fully booked in 90 days.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transition-colors text-lg shadow-lg hover:shadow-xl">
          Get Started Now
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-700 transition-colors text-lg">
          View Curriculum
        </button>
      </div>
    </section>
  );
}
