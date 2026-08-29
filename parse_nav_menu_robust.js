const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\nav_menus_95.html', 'utf8');

const data = {};

// Match all input tags
const inputRegex = /<input([^>]+)>/g;
let match;
let count = 0;

while ((match = inputRegex.exec(html)) !== null) {
    const attrsStr = match[1];
    
    const nameMatch = attrsStr.match(/name="([^"]+)"/);
    const valueMatch = attrsStr.match(/value="([^"]*)"/);
    
    if (nameMatch) {
        const name = nameMatch[1];
        const value = valueMatch ? valueMatch[1] : '';
        
        if (name.startsWith('menu-item-')) {
            data[name] = value;
            count++;
        }
    }
}

console.log(`Extracted ${count} menu fields from backup HTML.`);
console.log(`Example: menu-item-parent-id[391] =`, data['menu-item-parent-id[391]']);
console.log(`Example: menu-item-position[391] =`, data['menu-item-position[391]']);

fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\extracted_menu_95_backup.json', JSON.stringify(data, null, 2), 'utf-8');
