const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();
async function getRevDate(id) {
    const res = await fetch('https://nufca.com/wp-admin/revision.php?revision=' + id, {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const dateMatch = html.match(/<span class="post-date">([^<]+)<\/span>/);
    console.log('Revision ' + id + ' date:', dateMatch ? dateMatch[1] : 'Unknown');
}
async function check() {
    await getRevDate('99169');
    await getRevDate('99153');
    await getRevDate('99152');
    await getRevDate('11862');
}
check();
