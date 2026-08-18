const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src', 'components', 'BeforeAfterSection.tsx');
let content = fs.readFileSync(targetPath, 'utf8');

// Replace Before Placeholder
const beforeOld = `<div className="w-full aspect-video bg-slate-100 rounded-2xl border-2 border-dashed border-red-200 flex flex-col items-center justify-center relative group overflow-hidden mb-6">
              <span className="text-slate-400 font-bold">OU^OOc: O'OrO U.OUU, U,O_O U. O U,U,O O" OU^O"</span>
              <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-red-600 shadow-sm">Replace Image</span>
              </div>
            </div>`;
// regex match since arabic chars are corrupted in terminal output
const beforeRegex = /<div className="w-full aspect-video bg-slate-100 rounded-2xl border-2 border-dashed border-red-200[\s\S]*?<\/div>\s*<\/div>/;

const beforeNew = `<div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-inner">
              <img src="/images/before_stress.jpg" alt="Exhausted freelancer" className="w-full h-full object-cover grayscale-[30%] contrast-125" />
            </div>`;

content = content.replace(beforeRegex, beforeNew);

// Replace After Placeholder
const afterRegex = /<div className="w-full aspect-video bg-slate-100 rounded-2xl border-2 border-dashed border-emerald-300[\s\S]*?<\/div>\s*<\/div>/;

const afterNew = `<div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <img src="/images/after_control.jpg" alt="Relaxed and in control" className="w-full h-full object-cover saturate-110" />
            </div>`;

content = content.replace(afterRegex, afterNew);

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Done replacing before/after photos');
