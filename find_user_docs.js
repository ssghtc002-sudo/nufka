const fs = require('fs');

const logPath = 'C:\\Users\\ssght\\.gemini\\antigravity\\brain\\17ee58be-e51c-4eb0-b8f5-4280b2c6eca4\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf-8').split('\n');

const userDocRequests = [];

for (const l of lines) {
    if (!l.trim()) continue;
    try {
        const parsed = JSON.parse(l);
        if (parsed.type === 'USER_INPUT') {
            const content = parsed.content || '';
            const docMatches = content.match(/https:\/\/docs\.google\.com\/document\/d\/[a-zA-Z0-9_-]+/g);
            if (docMatches) {
                userDocRequests.push({
                    text: content.trim(),
                    docs: docMatches
                });
            }
        }
    } catch (e) {}
}

console.log(`Found ${userDocRequests.length} User Requests containing Google Docs:`);
userDocRequests.forEach((req, idx) => {
    console.log(`\n--- [${idx + 1}] ---`);
    console.log(req.text);
});
