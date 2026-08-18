const fs = require('fs');
const path = require('path');

// 1. Update CourseBundleMockup
const mockupPath = path.join(__dirname, 'src', 'components', 'CourseBundleMockup.tsx');
let mockupContent = fs.readFileSync(mockupPath, 'utf8');

const oldMockupContent = `<div className="relative z-10 text-center px-4 flex flex-col items-center justify-center">
            <span className="text-5xl mb-4 block">💻 📱 🖥️</span>
            <h3 className="text-2xl font-bold text-white mb-2">صورة مجمعة (Mockup)</h3>
            <p className="text-indigo-200 max-w-md mx-auto mt-2">
              ضع هنا صورة احترافية تظهر الكورسات على شاشة لاب توب وموبايل.
              <br/>
              (استخدم موقع مثل Smartmockups.com لدمج الصور)
            </p>
          </div>`;
          
const newMockupContent = `<div className="relative z-10 w-full px-4 flex items-center justify-center">
            <img 
              src="/images/bundle_mockup.jpg" 
              alt="Course Bundle 3D Mockup" 
              className="w-full max-w-[700px] hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_50px_rgba(16,185,129,0.3)] rounded-2xl" 
            />
          </div>`;

mockupContent = mockupContent.replace(oldMockupContent, newMockupContent);
// Remove border-dashed
mockupContent = mockupContent.replace('border-dashed', 'border-none');
fs.writeFileSync(mockupPath, mockupContent, 'utf8');

// 2. Update InstructorBio
const bioPath = path.join(__dirname, 'src', 'components', 'InstructorBio.tsx');
let bioContent = fs.readFileSync(bioPath, 'utf8');

const oldBioContent = `<div className="w-full h-full bg-slate-800 rounded-3xl border-2 border-dashed border-indigo-500/30 flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
            
            <div className="text-center p-8 relative z-10">
              <span className="text-6xl block mb-4 group-hover:scale-110 transition-transform">📸</span>
              <h3 className="text-xl font-bold text-white mb-2">صورة احترافية لك (Hero Shot)</h3>
              <p className="text-indigo-200 text-sm">صورة بتعكس الثقة والنجاح. يفضل خلفية داكنة.</p>
            </div>
          </div>`;

const newBioContent = `<div className="w-full h-full rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.15)] group relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10"></div>
            <img 
              src="/images/instructor_hero.jpg" 
              alt="Mohammed Hesham" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>`;

bioContent = bioContent.replace(oldBioContent, newBioContent);
fs.writeFileSync(bioPath, bioContent, 'utf8');

console.log('Injected generated images');
