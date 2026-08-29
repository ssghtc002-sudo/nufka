const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\post5137_edit.html', 'utf-8');

console.log("Post 5137 Edit HTML Length:", html.length);

const links = [...html.matchAll(/href="([^"]*)"[^>]*>([^<]*)</gi)];
console.log("\nLinks found in edit screen:");
links.filter(l => l[1].includes('tax') || l[1].includes('vat') || l[1].includes('corporate') || l[1].includes('service')).forEach(l => console.log(`  --> URL: ${l[1]} | Text: ${l[2]}`));

const inputs = [...html.matchAll(/<textarea[^>]*name="([^"]*)"[^>]*>([\s\S]*?)<\/textarea>/gi)];
console.log("\nTextarea inputs in edit screen:");
inputs.forEach(i => console.log(`  --> Name: ${i[1]} | Content Length: ${i[2].length}`));

// Check Elementor Data in meta box or script tag
const elDataMatch = html.match(/name="_elementor_data"[^>]*>([\s\S]*?)<\/textarea>/) || html.match(/id="_elementor_data"[^>]*>([\s\S]*?)<\/textarea>/);
if (elDataMatch) {
    console.log("\nFound _elementor_data! Length:", elDataMatch[1].length);
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_data_5137.json', elDataMatch[1], 'utf-8');
} else {
    console.log("\n_elementor_data textarea not directly found in form.");
}
