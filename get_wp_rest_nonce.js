const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();
const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\profile_page.html', 'utf-8');

const nonceMatch = html.match(/var _wpUtilSettings = [^;]*"nonce":"([^"]+)"/) || html.match(/"nonce":"([a-f0-9]+)"/i) || html.match(/wpApiSettings = [^;]*"nonce":"([^"]+)"/);

console.log("Found REST Nonce:", nonceMatch ? nonceMatch[1] : "not found");

async function createRestAppPass(nonce) {
    console.log("🚀 Requesting Application Password via WP REST API...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/users/me/application-passwords", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": cookies,
            "X-WP-Nonce": nonce,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        body: JSON.stringify({
            name: "Antigravity_Auto_Menu",
            app_id: "antigravity"
        })
    });

    console.log("REST Status:", res.status);
    const data = await res.json();
    console.log("Response:", JSON.stringify(data, null, 2));

    if (data.password) {
        console.log("\n🎉 GENERATED APP PASSWORD:", data.password);
        fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\app_password.txt', data.password, 'utf-8');
    }
}

if (nonceMatch) {
    createRestAppPass(nonceMatch[1]);
}
