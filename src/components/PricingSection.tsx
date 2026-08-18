import React from 'react';
import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Choose Your Path</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get access to the exact course you need, or bundle both for massive savings.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Tier 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">FAP Only</h3>
            <p className="text-gray-500 mb-6">Freelancer Accelerator Program</p>
            <div className="text-4xl font-bold text-gray-900 mb-6">$297</div>
            <ul className="space-y-4 mb-8">
              {['Full FAP Curriculum', 'Proposal Templates', 'Client Acquisition Scripts', 'Lifetime Access'].map((feat, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-colors">Select FAP</button>
          </div>

          {/* Tier 2 (Bundle) */}
          <div className="bg-blue-700 p-8 rounded-2xl shadow-xl border border-blue-600 transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">The Ultimate Bundle</h3>
            <p className="text-blue-200 mb-6">FAP + DPL Courses</p>
            <div className="text-4xl font-bold text-white mb-2">$497 <span className="text-lg text-blue-300 line-through font-normal">$594</span></div>
            <p className="text-yellow-300 text-sm font-semibold mb-6">Save $97</p>
            <ul className="space-y-4 mb-8">
              {['Everything in FAP', 'Everything in DPL', 'Bonus: Launch Checklist', 'Bonus: Weekly Q&A', 'Priority Support'].map((feat, i) => (
                <li key={i} className="flex items-center text-blue-50">
                  <Check size={20} className="text-yellow-400 mr-3 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors">Get The Bundle</button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">DPL Only</h3>
            <p className="text-gray-500 mb-6">Digital Project Launch</p>
            <div className="text-4xl font-bold text-gray-900 mb-6">$297</div>
            <ul className="space-y-4 mb-8">
              {['Full DPL Curriculum', 'MVP Templates', 'Launch Marketing Plan', 'Lifetime Access'].map((feat, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-colors">Select DPL</button>
          </div>
        </div>
      </div>
    </section>
  );
}
