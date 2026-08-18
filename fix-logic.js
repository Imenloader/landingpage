const fs = require('fs');
const path = require('path');

const replaceInFile = (filename, oldText, newText) => {
    const filePath = path.join(__dirname, 'src', 'components', filename);
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(oldText, newText);
    fs.writeFileSync(filePath, content, 'utf8');
};

// TrustBar
replaceInFile('TrustBar.tsx', 'كما ظهر في / موثوق من قبل', 'المهارات والأدوات اللي بنعلمها بتستخدم في أكبر المنصات');

// BeforeAfterSection
replaceInFile('BeforeAfterSection.tsx', 'الصورة بتعبر عن ألف كلمة. اختار إنت عايز تكون فين.', 'دي مش مجرد وعود.. ده الواقع اللي هتعيشه بنفسك لو طبقت صح.');

// ValueStack
replaceInFile('ValueStack.tsx', 'إجمالي القيمة الفورية:', 'إجمالي القيمة الفعلية:');

// PricingSection
replaceInFile('PricingSection.tsx', 'ضمان استرجاع الأموال 14 يوم بدون أسئلة', 'ضمان ذهبي لاسترجاع فلوسك خلال 14 يوم (بدون أي شروط أو أسئلة)');

console.log('Fixed logical translations');
