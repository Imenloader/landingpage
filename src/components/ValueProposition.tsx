import React from 'react';
import { Target, Rocket, DollarSign } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="w-full py-20 px-4 bg-white flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose Our Programs?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide actionable steps, not just theory. Start landing high-paying clients and building profitable digital projects.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Laser-Focused Strategy</h3>
            <p className="text-gray-600">Stop guessing. Get the exact blueprint to find, pitch, and close premium clients.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-6">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Rapid Launch</h3>
            <p className="text-gray-600">Deploy your digital products and services in days, not months with DPL.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <DollarSign size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Maximized Income</h3>
            <p className="text-gray-600">Learn pricing strategies and upsells to drastically increase your monthly revenue.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
