import React from 'react';
import { BookOpen, MonitorPlay, Code, Briefcase, ChevronDown } from 'lucide-react';

const fapModules = [
  { title: "Module 1: The Freelance Foundation", desc: "Setting up your business, finding your niche, and branding yourself." },
  { title: "Module 2: Client Acquisition Mastery", desc: "Outbound and inbound strategies to land your first $5k in clients." },
  { title: "Module 3: Pricing & Proposals", desc: "How to price your value, write winning proposals, and handle objections." },
];

const dplModules = [
  { title: "Phase 1: Idea Validation", desc: "How to find profitable digital product ideas that sell." },
  { title: "Phase 2: Rapid Development", desc: "Building your MVP (Minimum Viable Product) in a weekend." },
  { title: "Phase 3: The Launch Strategy", desc: "Marketing, funnels, and launching to your audience (even if it's small)." },
];

export default function CourseModules() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Inside The Curriculum</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to succeed, broken down into actionable steps.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FAP Column */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-8 border-b pb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Freelancer Accelerator Program</h3>
                <p className="text-gray-500 text-sm">For service-based professionals</p>
              </div>
            </div>
            <div className="space-y-4">
              {fapModules.map((mod, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-4 hover:border-blue-200 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{mod.title}</h4>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DPL Column */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-8 border-b pb-6">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
                <MonitorPlay size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Digital Project Launch</h3>
                <p className="text-gray-500 text-sm">For creators and builders</p>
              </div>
            </div>
            <div className="space-y-4">
              {dplModules.map((mod, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-4 hover:border-yellow-200 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">{mod.title}</h4>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
