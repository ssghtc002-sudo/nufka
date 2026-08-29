const fs = require('fs');

function extractDoc(stepPath, outPath) {
    const content = fs.readFileSync(stepPath, 'utf-8');
    const matches = [...content.matchAll(/"s"\s*:\s*"([^"]+)"/g)].map(m => m[1]);
    const fullText = matches.map(s => s.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\u0027/g, "'")).join('');
    fs.writeFileSync(outPath, fullText, 'utf-8');
    console.log(`Saved ${outPath} (Length: ${fullText.length})`);
    console.log(`Snippet:\n${fullText.substring(0, 500)}\n----------------------------------\n`);
}

extractDoc('C:\\Users\\ssght\\.gemini\\antigravity\\brain\\17ee58be-e51c-4eb0-b8f5-4280b2c6eca4\\.system_generated\\steps\\2860\\content.md', 'c:\\Users\\ssght\\OneDrive\\Desktop\nufka\\extracted_excise_doc.txt');
extractDoc('C:\\Users\\ssght\\.gemini\\antigravity\\brain\\17ee58be-e51c-4eb0-b8f5-4280b2c6eca4\\.system_generated\\steps\\2862\\content.md', 'c:\\Users\\ssght\\OneDrive\\Desktop\nufka\\extracted_esr_doc.txt');
