const fs = require('fs');

const jsonStr = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_elements_5137.json', 'utf-8');

console.log("Original elementor_elements_5137.json length:", jsonStr.length);

// Check matching URLs in JSON
const matches = [...jsonStr.matchAll(/https?:\/\/[^\s"'<>\\]+/gi)];
console.log("\nURLs found in elementor_elements_5137.json:");
matches.filter(m => m[0].includes('nufca.com')).forEach(m => console.log(`  --> ${m[0]}`));

// Do replacements
const updatedJsonStr = jsonStr
    .replace(/https:\/\/nufca\.com\/services\/vat-consultancy-services/g, 'https://nufca.com/vat-consultancy-in-uae/')
    .replace(/https:\/\/nufca\.com\/services\/corporate-tax-in-uae/g, 'https://nufca.com/corporate-tax-in-uae/')
    .replace(/https:\/\/nufca\.com\/services\/audit-assurance/g, 'https://nufca.com/audit-assurance-uae/')
    .replace(/\/services\/vat-consultancy-services/g, '/vat-consultancy-in-uae/')
    .replace(/\/services\/corporate-tax-in-uae/g, '/corporate-tax-in-uae/')
    .replace(/\/services\/audit-assurance/g, '/audit-assurance-uae/')
    .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/vat-consultancy-services/g, 'https:\\\/\\\/nufca\.com\\\/vat-consultancy-in-uae\\\/')
    .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/corporate-tax-in-uae/g, 'https:\\\/\\\/nufca\.com\\\/corporate-tax-in-uae\\\/')
    .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/audit-assurance/g, 'https:\\\/\\\/nufca\.com\\\/audit-assurance-uae\\\/');

fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\updated_elementor_elements_5137.json', updatedJsonStr, 'utf-8');
console.log("\nSaved updated_elementor_elements_5137.json!");

// Verify updated JSON is valid
try {
    const parsedObj = JSON.parse(updatedJsonStr);
    console.log("Updated JSON is valid! Top elements count:", parsedObj.length);
} catch(e) {
    console.log("Updated JSON Parse Error:", e.message);
}
