const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_editor_5137.html', 'utf-8');

const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)];
console.log(`Total script tags found: ${scripts.length}`);

scripts.forEach((s, idx) => {
    if (s[1].includes('elementor') || s[1].includes('elements') || s[1].includes('vat-consultancy')) {
        console.log(`Script #${idx} length: ${s[1].length}`);
        if (s[1].includes('vat-consultancy') || s[1].includes('corporate-tax')) {
            console.log(`  ✨ MATCH IN SCRIPT #${idx}! Snippet:`);
            console.log(s[1].substring(0, 500));
        }
    }
});
