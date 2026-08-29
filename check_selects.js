const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();

async function getSelects(id) {
    const res = await fetch('https://nufca.com/wp-admin/post.php?post=' + id + '&action=edit', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const selects = [...html.matchAll(/<select[^>]+name="(ct_page_options\[[^\]]+\])"[^>]*>([\s\S]*?)<\/select>/g)];
    console.log('Page ' + id + ' Selects:');
    selects.forEach(s => {
        const selected = s[2].match(/<option[^>]+value="([^"]*)"[^>]*selected/);
        if(selected) console.log('  ', s[1], '=', selected[1]);
        else console.log('  ', s[1], '= default (none selected)');
    });
}
async function check() {
    await getSelects(28); // VAT page
    await getSelects(99159); // Audit page
}
check();
