const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\\\`/g, '`');
  content = content.replace(/\\\$/g, '$');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed', filePath);
}

fixFile('src/components/ValueProposition.tsx');
fixFile('src/app/admin/page.tsx');
