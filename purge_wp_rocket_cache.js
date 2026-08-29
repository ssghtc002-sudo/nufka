const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function purgeCache() {
    console.log("🧹 Purging WP Rocket and WordPress Caches...");

    // 1. Get dashboard html to extract purge nonces
    const res = await fetch("https://nufca.com/wp-admin/index.php", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    const purgeRocketMatch = html.match(/href="([^"]*purge_cache=all[^"]*)"/);
    console.log("WP Rocket Purge URL:", purgeRocketMatch ? purgeRocketMatch[1] : "not found");

    if (purgeRocketMatch) {
        const purgeUrl = purgeRocketMatch[1].replace(/&amp;/g, '&');
        const purgeRes = await fetch(purgeUrl, {
            headers: {
                "Cookie": cookies,
                "User-Agent": "Mozilla/5.0"
            }
        });
        console.log("Purge Request Status:", purgeRes.status);
        console.log("🎉 WP ROCKET CACHE PURGED SUCCESSFULLY!");
    } else {
        // Try direct purge URL
        const nonceMatch = html.match(/name="_wpnonce"\s+value="([^"]+)"/);
        const directUrl = `https://nufca.com/wp-admin/admin.php?page=wprocket&action=purge_cache&type=all&_wpnonce=${nonceMatch ? nonceMatch[1] : ''}`;
        const purgeRes = await fetch(directUrl, {
            headers: {
                "Cookie": cookies,
                "User-Agent": "Mozilla/5.0"
            }
        });
        console.log("Direct Purge Status:", purgeRes.status);
    }
}

purgeCache();
