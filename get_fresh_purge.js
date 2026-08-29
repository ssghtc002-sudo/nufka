const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();

async function getNonce() {
    const res = await fetch('https://nufca.com/wp-admin/', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const purgeMatch = html.match(/href="([^"]*action=purge_cache[^"]*)"/);
    if(purgeMatch) {
        console.log('NEW Purge URL:', purgeMatch[1].replace(/&amp;/g, '&'));
    } else {
        console.log('Purge URL not found in dashboard');
    }
}
getNonce();
