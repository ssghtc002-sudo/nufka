const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\nav_menus_95.html', 'utf8');

// Use regex to find all hidden inputs for menu items
const inputs = [...html.matchAll(/<input[^>]+type="hidden"[^>]+name="menu-item-([^"]+)"[^>]*>/gi)];

const data = {};

inputs.forEach(m => {
    const inputStr = m[0];
    const nameMatch = inputStr.match(/name="([^"]+)"/);
    const valueMatch = inputStr.match(/value="([^"]*)"/);
    if (nameMatch) {
        const name = nameMatch[1];
        const value = valueMatch ? valueMatch[1] : '';
        if (name.startsWith('menu-item-')) {
            data[name] = value;
        }
    }
});

console.log(`Extracted ${Object.keys(data).length} menu fields from backup HTML.`);
fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\extracted_menu_95_backup.json', JSON.stringify(data, null, 2), 'utf-8');
