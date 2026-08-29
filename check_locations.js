const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();
async function check() {
    const res = await fetch('https://nufca.com/wp-admin/nav-menus.php?action=locations', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const locations = [...html.matchAll(/name="menu-locations\[([^\]]+)\]"/g)].map(m=>m[1]);
    console.log('Locations:', locations);

    const nonceMatch = html.match(/name="update-nav-menu-nonce"\s+value="([^"]+)"/);
    console.log('Nonce:', nonceMatch ? nonceMatch[1] : 'Not found');
}
check();
