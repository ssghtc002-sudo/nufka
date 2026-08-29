const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();

async function getMeta(id) {
    const res = await fetch('https://nufca.com/wp-admin/post.php?post=' + id + '&action=edit', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const matches = [...html.matchAll(/name="(ct_page_options\[[^\]]+\])"([^>]*)>/g)];
    console.log('Page ' + id + ' Options:');
    matches.forEach(m => {
        if(m[2].includes('selected') || m[2].includes('checked') || m[2].includes('value="')) {
            const valMatch = m[2].match(/value="([^"]*)"/);
            if(valMatch) console.log('  ', m[1], '=', valMatch[1], (m[2].includes('selected') || m[2].includes('checked')) ? '(selected/checked)' : '');
        }
    });
}
async function check() {
    await getMeta(28); // VAT page
    await getMeta(99159); // Audit page
}
check();
