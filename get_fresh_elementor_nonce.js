const fs = require('fs');

async function getFreshElementorNonce() {
    console.log("🔐 Logging in fresh and fetching live Elementor Editor nonce...");

    // 1. Login to get fresh cookies
    const loginRes = await fetch("https://nufca.com/wp-login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "log=umendra&pwd=N%26HZwY3ieWkdOs%26g%5E&wp-submit=Log+In&redirect_to=https%3A%2F%2Fnufca.com%2Fwp-admin%2F&testcookie=1"
    });

    const setCookies = loginRes.headers.getSetCookie();
    const cookieHeader = setCookies.map(c => c.split(';')[0]).join('; ');
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', cookieHeader, 'utf-8');
    console.log("Fresh Cookies captured!");

    // 2. Fetch Elementor Editor for Post 5137
    const editorRes = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=elementor", {
        headers: {
            "Cookie": cookieHeader,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await editorRes.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\fresh_editor_5137.html', html, 'utf-8');

    // Extract Elementor restNonce / save_builder nonce
    const restNonceMatch = html.match(/"restNonce":"([^"]+)"/);
    console.log("Fresh restNonce:", restNonceMatch ? restNonceMatch[1] : "none");

    const noncesMatch = html.match(/"nonces":({[^}]+})/);
    console.log("Fresh Nonces Object:", noncesMatch ? noncesMatch[1] : "none");

    const elConfigMatch = html.match(/var ElementorConfig = ([\s\S]*?);<\/script>/);
    if (elConfigMatch) {
        fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\fresh_config.json', elConfigMatch[1], 'utf-8');
    }
}

getFreshElementorNonce();
