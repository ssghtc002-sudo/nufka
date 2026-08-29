const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();
async function check() {
    const editRes = await fetch('https://nufca.com/wp-admin/post.php?post=5137&action=edit', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await editRes.text();
    const elDataMatch = html.match(/<textarea[^>]*name="_elementor_data"[^>]*>([\s\S]*?)<\/textarea>/i);
    console.log(elDataMatch ? elDataMatch[1].substring(0, 500) : 'Not found');
}
check();
