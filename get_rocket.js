const fs = require('fs');
const html = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wprocket_page.html', 'utf8');
const match = html.match(/href="([^"]+rocket_purge_cache[^"]+)"/);
console.log(match ? match[1] : 'Not found');
