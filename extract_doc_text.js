const fs = require('fs');

const path = 'C:\\Users\\ssght\\.gemini\\antigravity\\brain\\17ee58be-e51c-4eb0-b8f5-4280b2c6eca4\\.system_generated\\steps\\2126\\content.md';
const content = fs.readFileSync(path, 'utf-8');

// Google Docs embeds text inside JSON chunks or plain text
const matches = [...content.matchAll(/"s"\s*:\s*"([^"]+)"/g)].map(m => m[1]);

console.log("Extracted text count:", matches.length);

// Join text pieces
const fullText = matches.map(s => s.replace(/\\n/g, '\n').replace(/\\"/g, '"')).join('');
fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\extracted_internal_audit_doc.txt', fullText, 'utf-8');
console.log("Saved extracted text. Length:", fullText.length);
console.log("Snippet:\n", fullText.substring(0, 2000));
