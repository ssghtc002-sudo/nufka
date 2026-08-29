const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\menu_loc_form.html', 'utf-8');

const match = html.match(/<form[^>]*id="menu-locations-table"[\s\S]*?<\/form>/i);
if (match) {
    console.log(match[0]);
} else {
    console.log("Not found");
}
