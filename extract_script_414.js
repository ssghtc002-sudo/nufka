const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_editor_5137.html', 'utf-8');

const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)];

const s414 = scripts[414][1];
fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\script_414.js', s414, 'utf-8');
console.log("Saved script_414.js! Length:", s414.length);

const noncesMatch = s414.match(/"nonces":({[\s\S]*?})/);
if (noncesMatch) {
    console.log("Nonces in ElementorConfig:", noncesMatch[1]);
}

const ajaxUrlMatch = s414.match(/"ajaxurl":"([^"]*)"/);
console.log("Ajax URL:", ajaxUrlMatch ? ajaxUrlMatch[1] : "none");
