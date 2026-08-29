const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();

async function clearCache() {
    console.log("Clearing WP Rocket Cache...");
    const purgeUrl = 'https://nufca.com/wp-admin/admin-post.php?action=purge_cache&type=all&_wpnonce=95a5574b02';
    
    const res = await fetch(purgeUrl, {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0"
        },
        redirect: 'manual'
    });
    
    console.log("Status:", res.status);
    console.log("Location:", res.headers.get('location'));
}

clearCache();
