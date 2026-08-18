const fs = require('fs');
const path = require('path');

const heroPath = path.join(__dirname, 'src', 'components', 'HeroSection.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');

// Ensure Link is imported
if (!heroContent.includes('import Link from "next/link"')) {
    heroContent = heroContent.replace('import { motion } from \'framer-motion\';', 'import { motion } from \'framer-motion\';\nimport Link from "next/link";');
}

// Replace the dual CTA block
const ctaRegex = /<motion\.div[\s\S]*?className="flex flex-col gap-4 w-full sm:w-auto"[\s\S]*?<\/motion\.div>/;

const newCTA = `<motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Checkout */}
          <Link 
            href="/checkout"
            className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-[#059669] text-white font-extrabold rounded-full text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(5,150,105,0.4)]"
          >
            👈 تأكيد مكاني والبدء فوراً (الأماكن محدودة)
            <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA: WhatsApp */}
          <a 
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-gray-400 hover:text-white font-medium rounded-full text-sm transition-all"
          >
            <MessageCircle size={18} />
            متردد؟ تواصل مع فريقنا على الواتساب
          </a>
        </motion.div>`;

heroContent = heroContent.replace(ctaRegex, newCTA);
fs.writeFileSync(heroPath, heroContent, 'utf8');

const pricingPath = path.join(__dirname, 'src', 'components', 'PricingSection.tsx');
let pricingContent = fs.readFileSync(pricingPath, 'utf8');
if (!pricingContent.includes('import Link from "next/link"')) {
    pricingContent = pricingContent.replace('import { motion } from \'framer-motion\';', 'import { motion } from \'framer-motion\';\nimport Link from "next/link";');
}
pricingContent = pricingContent.replace(/<button[^>]*>[\s\S]*?اشترك في الباقة الآن[\s\S]*?<\/button>/g, `<Link href="/checkout" className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all bg-[#059669] text-white hover:bg-emerald-700 shadow-lg hover:shadow-emerald-600/30">اشترك في الباقة الآن 👈</Link>`);
fs.writeFileSync(pricingPath, pricingContent, 'utf8');

console.log('Fixed CTAs.');
