const fs = require('fs');
const html = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/locations.html', 'utf8');
const formMatch = html.match(/<form[^>]*id="nav-menu-locations"[^>]*>([\s\S]*?)<\/form>/);
if(formMatch) {
    const inputs = [...formMatch[1].matchAll(/<input[^>]+name="([^"]+)"[^>]*value="([^"]*)"/g)];
    inputs.forEach(i => console.log(i[1], '=', i[2]));
}
