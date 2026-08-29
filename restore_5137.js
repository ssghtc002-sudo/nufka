const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function restoreRevision() {
    console.log("🚀 Restoring Post ID 5137 to Revision 99153 (Good State)...");

    const res = await fetch("https://nufca.com/wp-admin/revision.php?action=restore&revision=99153&_wpnonce=be3cc9d86c", {
        method: "GET",
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
        },
        redirect: "manual"
    });

    console.log(`Status: ${res.status}`);
    console.log(`Location: ${res.headers.get('location')}`);
    
    if (res.status === 302) {
        console.log("🎉 REVISION RESTORED SUCCESSFULLY!");
    } else {
        console.log("⚠️ Did not get a 302 redirect. Maybe the nonce expired or failed?");
    }
}

restoreRevision();
