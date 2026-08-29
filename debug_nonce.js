const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function debugNonce() {
    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=edit&menu=95", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        redirect: "manual"
    });

    console.log("Status:", res.status);
    if (res.status === 302) {
        console.log("Location:", res.headers.get("location"));
    }

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\nav_menus_debug.html', html, 'utf-8');

    const nonces = [...html.matchAll(/name="([^"]*nonce[^"]*)"\s+value="([^"]+)"/gi)];
    console.log("Found nonces:");
    nonces.forEach(n => console.log(`Name: ${n[1]} | Value: ${n[2]}`));
}

debugNonce();
