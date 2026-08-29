const fs = require('fs');
const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\nav_menus_95.html', 'utf8');
const m = html.match(new RegExp(`name="menu-item-parent-id\\[391\\]"\\s+value="([^"]*)"`));
console.log(m);
