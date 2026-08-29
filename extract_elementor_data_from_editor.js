const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_editor_5137.html', 'utf-8');

console.log("Searching elementor_editor_5137.html for data & nonces...");

const nonces = [...html.matchAll(/"nonce":"([^"]+)"/g)];
console.log("Nonces found:", nonces.map(n => n[1]));

const dataMatch = html.match(/"data":(\[[\s\S]*?\]),"settings"/);
if (dataMatch) {
    console.log("Found Elementor JSON Data! Length:", dataMatch[1].length);
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_json_5137.json', dataMatch[1], 'utf-8');
} else {
    console.log("dataMatch not found directly.");
    // Search for any large JSON structure with 'elements' or 'widgetType'
    const widgetMatches = [...html.matchAll(/widgetType/g)];
    console.log("widgetType occurrences:", widgetMatches.length);
}
