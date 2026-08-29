const fs = require('fs');

const text = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\megamenu_post_content.html', 'utf-8');

console.log("Searching megamenu_post_content.html...");

const matches = [...text.matchAll(/https?:\/\/[^\s"'<>]+/gi)];
console.log("All HTTP/HTTPS URLs found:", matches.length);

matches.forEach(m => {
    if (m[0].includes('nufca.com')) {
        console.log(`  --> ${m[0]}`);
    }
});
