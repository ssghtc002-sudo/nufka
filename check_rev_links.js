const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();
async function checkRev(id) {
    const res = await fetch('https://nufca.com/wp-admin/revision.php?revision=' + id, {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const restoreMatch = html.match(/href="([^"]+action=restore[^"]+)"/);
    console.log('Revision ' + id + ' restore link:', restoreMatch ? restoreMatch[1] : 'Unknown');

    // Also get the date just in case
    const dateMatch = html.match(/<span class="revision-title">([^<]+)<\/span>/);
    console.log('Revision ' + id + ' date:', dateMatch ? dateMatch[1] : 'Unknown');
}
async function check() {
    await checkRev('99169');
    await checkRev('99153');
    await checkRev('11862');
}
check();
