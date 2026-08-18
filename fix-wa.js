const fs = require('fs');
const path = require('path');

const WA_LINK = 'https://wa.me/201000000000?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%88%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%AF%D9%81%D8%B9.';

// Hero Section Update
const heroPath = path.join(__dirname, 'src', 'components', 'HeroSection.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');

const heroCtaRegex = /<motion\.div[\s\S]*?className="flex flex-col gap-4 w-full sm:w-auto"[\s\S]*?<\/motion\.div>/;
const newHeroCTA = `<motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: WhatsApp */}
          <a 
            href="${WA_LINK}"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-[#059669] text-white font-extrabold rounded-full text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(5,150,105,0.4)]"
          >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            تأكيد مكاني والدفع عبر الواتساب 👈
          </a>
          <p className="text-center text-sm text-gray-400 mt-2">متوفر الدفع عبر إنستاباي، فودافون كاش، أو تحويل بنكي</p>
        </motion.div>`;

heroContent = heroContent.replace(heroCtaRegex, newHeroCTA);
fs.writeFileSync(heroPath, heroContent, 'utf8');

// Pricing Section Update
const pricingPath = path.join(__dirname, 'src', 'components', 'PricingSection.tsx');
let pricingContent = fs.readFileSync(pricingPath, 'utf8');
pricingContent = pricingContent.replace(/<Link href="\/checkout"[\s\S]*?<\/Link>/g, `<a href="${WA_LINK}" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all bg-[#059669] text-white hover:bg-emerald-700 shadow-lg hover:shadow-emerald-600/30">احجز الباقة عبر الواتساب 👈</a>`);
fs.writeFileSync(pricingPath, pricingContent, 'utf8');

console.log('Fixed CTAs to 100% WhatsApp.');
