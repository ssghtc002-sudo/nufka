const fs = require('fs');
const html = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wprocket_page.html', 'utf8');
const purgeMatch = html.match(/href="([^"]*action=purge_cache[^"]*)"/);
if(purgeMatch) {
    console.log('Purge URL:', purgeMatch[1].replace(/&amp;/g, '&'));
} else {
    console.log('Purge URL not found');
}
