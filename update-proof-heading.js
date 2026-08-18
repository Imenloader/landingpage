const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'RawProofWall.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const oldHeaderRegex = /<div className="text-center mb-8">[\s\S]*?<\/div>/;

const newHeader = `<div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-bold mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            بدون أي فلاتر أو تعديل
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#0F172A] mb-4 tracking-tighter"
          >
            مش كلام وخلاص.. دي <span className="text-emerald-600">رسايل حقيقية من موبايلي</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            سكرين شوتس خام من محادثات الواتساب مع الطلبة. الأرقام والمبيعات اللي هتشوفها دي حقيقية ١٠٠٪ ونتائج شغل وتعب بجد.
          </motion.p>
        </div>`;

content = content.replace(oldHeaderRegex, newHeader);
fs.writeFileSync(filePath, content, 'utf8');

console.log('Updated RawProofWall heading');
