const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function fullRocketPurge() {
    console.log("🧹 Fetching WP Rocket Nonces to perform full cache clear...");

    // 1. Get dashboard html to extract wp-rocket nonce
    const res = await fetch("https://nufca.com/wp-admin/admin.php?page=wprocket", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wprocket_page.html', html, 'utf-8');

    const nonceMatch = html.match(/href="([^"]*action=purge_cache[^"]*)"/i) || html.match(/_wpnonce=([a-f0-9]+)/i);
    console.log("Purge Link / Nonce Match:", nonceMatch ? nonceMatch[0] : "not found");

    if (nonceMatch) {
        let purgeUrl = nonceMatch[1] || `https://nufca.com/wp-admin/admin-post.php?action=purge_cache&type=all&_wpnonce=${nonceMatch[1]}`;
        if (purgeUrl.startsWith('/')) purgeUrl = "https://nufca.com" + purgeUrl;

        console.log(`Executing Purge Request to: ${purgeUrl}`);
        const purgeRes = await fetch(purgeUrl, {
            headers: {
                "Cookie": cookies,
                "User-Agent": "Mozilla/5.0"
            }
        });
        console.log("Purge Response Status:", purgeRes.status);
    }
}

fullRocketPurge();
