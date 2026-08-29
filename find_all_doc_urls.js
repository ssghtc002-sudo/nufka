const fs = require('fs');
const logPath = 'C:\\Users\\ssght\\.gemini\\antigravity\\brain\\17ee58be-e51c-4eb0-b8f5-4280b2c6eca4\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(logPath, 'utf-8').split('\n');
const found = new Set();
for (const l of lines) {
    if (!l.trim()) continue;
    try {
        const str = l;
        const matches = str.match(/https:\/\/docs\.google\.com\/document\/d\/[a-zA-Z0-9_-]+/g);
        if (matches) {
            matches.forEach(m => found.add(m));
        }
    } catch(e) {}
}
console.log("ALL GOOGLE DOCS LINKS:");
found.forEach(f => console.log(f));
