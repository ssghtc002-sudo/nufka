const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();
async function check() {
    const res = await fetch('https://nufca.com/wp-admin/nav-menus.php?menu=95', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const ids = [...html.matchAll(/name="menu-item-db-id\[(\d+)\]"/g)].map(m=>m[1]);
    console.log('Items in Menu 95:', ids.length);
}
check();
