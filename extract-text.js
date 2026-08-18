const fs = require('fs');

function extractText(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  // Strip out head, styles, scripts
  let body = html.replace(/<head>[\s\S]*?<\/head>/gi, '');
  body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  body = body.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  // Replace HTML tags with spaces
  let text = body.replace(/<[^>]+>/g, ' ');
  
  // Clean up whitespace
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

const fap = extractText("D:/Users/mmabdel/.gemini/antigravity/brain/7014abbe-3e58-4bd1-8563-8e200fc23f4a/.system_generated/steps/453/content.md");
const dpl = extractText("D:/Users/mmabdel/.gemini/antigravity/brain/7014abbe-3e58-4bd1-8563-8e200fc23f4a/.system_generated/steps/457/content.md");

console.log("=== FAP TEXT ===");
console.log(fap.substring(0, 1000));
console.log("================\n");

console.log("=== DPL TEXT ===");
console.log(dpl.substring(0, 1000));
