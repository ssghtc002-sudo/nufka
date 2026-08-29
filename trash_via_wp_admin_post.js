const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function trashViaAdminPost() {
    console.log("🧹 Trashing Post 28 & 125 via WP Admin post.php ...");

    const items = [28, 125];

    for (const id of items) {
        // Fetch post.php edit page to get trash nonce
        const editRes = await fetch(`https://nufca.com/wp-admin/post.php?post=${id}&action=edit`, {
            headers: {
                "Cookie": cookies,
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
        });

        const html = await editRes.text();
        const nonceMatch = html.match(/href="([^"]*action=trash[^"]*)"/i);

        if (nonceMatch) {
            let trashUrl = nonceMatch[1].replace(/&amp;/g, '&');
            if (trashUrl.startsWith('/')) trashUrl = "https://nufca.com" + trashUrl;

            console.log(`Executing trash URL for ID ${id}: ${trashUrl}`);
            const delRes = await fetch(trashUrl, {
                headers: {
                    "Cookie": cookies,
                    "User-Agent": "Mozilla/5.0"
                }
            });

            console.log(`  --> Trash Response Status for ${id}: ${delRes.status}`);
        } else {
            console.log(`❌ Trash nonce URL not found for post ID ${id}`);
        }
    }

    console.log("🎉 TRASH ACTION FINISHED!");
}

trashViaAdminPost();
