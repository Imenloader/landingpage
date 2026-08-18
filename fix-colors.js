const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/bg-\[\#030712\]/g, 'bg-[#0F172A]');
    content = content.replace(/bg-white/g, 'bg-[#FCFBF8]');
    content = content.replace(/bg-gray-50/g, 'bg-[#F8FAFC]');
    content = content.replace(/bg-\[\#25D366\]/g, 'bg-[#059669]');
    content = content.replace(/text-\[\#25D366\]/g, 'text-[#10B981]');
    content = content.replace(/border-\[\#25D366\]\/[0-9]+/g, 'border-[#059669]/30');
    content = content.replace(/text-\[\#075E54\]/g, 'text-white');
    content = content.replace(/text-red-/g, 'text-amber-');
    content = content.replace(/bg-red-/g, 'bg-amber-');
    content = content.replace(/border-red-/g, 'border-amber-');
    content = content.replace(/text-blue-/g, 'text-indigo-');
    content = content.replace(/bg-blue-/g, 'bg-indigo-');
    content = content.replace(/border-blue-/g, 'border-indigo-');
    content = content.replace(/text-gray-900/g, 'text-[#0F172A]');
    content = content.replace(/bg-gray-900/g, 'bg-[#1E293B]');

    fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Done replacing colors.');
