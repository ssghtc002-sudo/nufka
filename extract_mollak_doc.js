const fs = require('fs');

const path = 'C:\\Users\\ssght\\.gemini\\antigravity\\brain\\17ee58be-e51c-4eb0-b8f5-4280b2c6eca4\\.system_generated\\steps\\2437\\content.md';
const content = fs.readFileSync(path, 'utf-8');

const matches = [...content.matchAll(/"s"\s*:\s*"([^"]+)"/g)].map(m => m[1]);
console.log("Extracted text count:", matches.length);

const fullText = matches.map(s => s.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\u0027/g, "'")).join('');
fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\extracted_mollak_doc.txt', fullText, 'utf-8');
console.log("Saved extracted text. Length:", fullText.length);
console.log("Snippet:\n", fullText.substring(0, 1500));
