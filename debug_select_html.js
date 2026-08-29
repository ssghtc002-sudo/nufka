const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\menu_locations.html', 'utf-8');

const match = html.match(/<select name="menu-locations\[primary\]"[\s\S]*?<\/select>/i);
if (match) {
    console.log(match[0]);
} else {
    console.log("Select primary not found");
}
