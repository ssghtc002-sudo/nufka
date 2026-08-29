const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\megamenu_5137.json', 'utf-8'));

console.log("Megamenu Title:", data.title.rendered);
console.log("Content Length:", data.content.rendered.length);

const html = data.content.rendered;
const links = [...html.matchAll(/href="([^"]*)"[^>]*>([^<]*)</gi)];
console.log("\nAll Links in Megamenu Elementor Section 5137:");
links.forEach(l => console.log(`  --> URL: ${l[1]} | Text: ${l[2]}`));
