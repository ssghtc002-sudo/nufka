const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\menu_loc_form.html', 'utf-8');

const idx = html.indexOf('menu-locations-table');
if (idx !== -1) {
    console.log(html.substring(idx + 1500, idx + 2500));
}
