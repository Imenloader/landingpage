const fs = require('fs');
const path = require('path');

// 1. Inject real mockups into CourseBundleMockup
const mockupPath = path.join(__dirname, 'src', 'components', 'CourseBundleMockup.tsx');
let mockupContent = fs.readFileSync(mockupPath, 'utf8');

const oldMockupContent = `<div className="relative z-10 text-center px-4">
            <span className="text-4xl mb-4 block">💻 📱 🖥️</span>
            <h3 className="text-2xl font-bold text-white mb-2">صورة مجمعة (Mockup)</h3>
            <p className="text-indigo-200 max-w-md mx-auto">
              ضع هنا صورة احترافية تظهر الكورسات على شاشة لاب توب، أيباد، وموبايل. 
              (استخدم موقع مثل Smartmockups.com لدمج صور الكورس)
            </p>
          </div>`;
          
const newMockupContent = `<div className="relative z-10 text-center px-4 flex flex-col md:flex-row items-center justify-center gap-8 py-8">
            <img src="https://d1yei2z3i6k35z.cloudfront.net/14693084/68ebba962dc21_Untitleddesign3.png" alt="FAP Mockup" className="w-full max-w-[350px] md:max-w-[450px] hover:scale-105 transition-transform drop-shadow-[0_20px_50px_rgba(79,70,229,0.5)]" />
            <img src="https://d1yei2z3i6k35z.cloudfront.net/14693084/6918c0aa2e266_ad522012-06fd-4a50-bb32-4d244170ad7e.png" alt="DPL Mockup" className="w-full max-w-[350px] md:max-w-[450px] hover:scale-105 transition-transform drop-shadow-[0_20px_50px_rgba(16,185,129,0.5)]" />
          </div>`;

mockupContent = mockupContent.replace(oldMockupContent, newMockupContent);
// Also remove the aspect ratio so it scales to fit the images
mockupContent = mockupContent.replace('aspect-[2/1] md:aspect-[2.5/1]', 'py-10');
fs.writeFileSync(mockupPath, mockupContent, 'utf8');

// 2. Inject real Wistia video into VSLSection
const vslPath = path.join(__dirname, 'src', 'components', 'VSLSection.tsx');
let vslContent = fs.readFileSync(vslPath, 'utf8');

const oldVideoHtml = `<div className="w-full aspect-video bg-slate-800 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.15)] relative group cursor-pointer flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity"></div>
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors"></div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl"
            >
              <PlayCircle size={48} className="text-white ml-2" />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
              <span className="text-sm font-medium text-white/90">اضغط للتشغيل (5 دقائق)</span>
            </div>
          </div>`;

const newVideoHtml = `<div className="w-full aspect-video bg-transparent rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.15)] relative">
            <script src="https://fast.wistia.com/player.js" async></script>
            <script src="https://fast.wistia.com/embed/6wg5nrmcpm.js" async type="module"></script>
            <div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
              <div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
                <wistia-player media-id="6wg5nrmcpm" aspect="1.7777777777777777"></wistia-player>
              </div>
            </div>
          </div>`;

vslContent = vslContent.replace(oldVideoHtml, newVideoHtml);
// If wistia needs react helmet or native script tags, we actually have to be careful in Next.js.
// Since it's App Router, standard <script> tags inside JSX might throw errors or warnings.
// Let's use dangerouslySetInnerHTML to safely inject the Wistia embed code.
const nextVideoHtml = `<div className="w-full aspect-video bg-transparent rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.15)] relative" dangerouslySetInnerHTML={{__html: \`<script src="https://fast.wistia.com/player.js" async></script><script src="https://fast.wistia.com/embed/6wg5nrmcpm.js" async type="module"></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><wistia-player media-id="6wg5nrmcpm" aspect="1.7777777777777777"></wistia-player></div></div>\`}}></div>`;

vslContent = vslContent.replace(newVideoHtml, nextVideoHtml); // fallback if it matched
// actually just re-read and replace correctly
let vslContentFix = fs.readFileSync(vslPath, 'utf8');
vslContentFix = vslContentFix.replace(oldVideoHtml, nextVideoHtml);
fs.writeFileSync(vslPath, vslContentFix, 'utf8');

console.log('Injected real mockups and Wistia video');
