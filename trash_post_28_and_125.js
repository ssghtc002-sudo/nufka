const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function trashTargetPosts() {
    const nonces = [
        "96c1b2eac2", "761400507a", "270c5c2600", "c69ea44868", "3f99d7feea", "8de5148e2e", "cba5b0cd7c", "dd0cbadbd5"
    ];

    console.log("🧹 Trashing Post 28 and 125 with extracted nonces...");

    for (const id of [28, 125]) {
        for (const nonce of nonces) {
            const url = `https://nufca.com/wp-admin/post.php?post=${id}&action=trash&_wpnonce=${nonce}`;
            const res = await fetch(url, {
                headers: {
                    "Cookie": cookies,
                    "User-Agent": "Mozilla/5.0"
                },
                redirect: "manual"
            });

            console.log(`ID ${id} | Nonce ${nonce} ➔ Status: ${res.status} | Location: ${res.headers.get("location")}`);
            if (res.status === 302) {
                console.log(`  🎉 SUCCESS! Post ${id} trashed with nonce ${nonce}!`);
                break;
            }
        }
    }
}

trashTargetPosts();
