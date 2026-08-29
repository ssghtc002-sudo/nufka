const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function setLocationDirect() {
    console.log("⚙️ Fetching nonces from nav-menus.php...");

    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=locations", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    const nonceMatch = html.match(/name="_wpnonce"\s+value="([^"]+)"/);

    console.log("Nonce:", nonceMatch ? nonceMatch[1] : "none");

    const params = new URLSearchParams();
    params.append("_wpnonce", nonceMatch[1]);
    params.append("_wp_http_referer", "/wp-admin/nav-menus.php?action=locations");
    params.append("menu-locations[primary]", "95");
    params.append("menu-locations[secondary]", "100");
    params.append("menu-locations[menu-popup]", "99");
    params.append("menu-locations[menu-left]", "96");
    params.append("menu-locations[menu-right]", "97");
    params.append("nav-menu-locations", "Save Changes");

    const postRes = await fetch("https://nufca.com/wp-admin/nav-menus.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        body: params.toString(),
        redirect: "manual"
    });

    console.log("Status:", postRes.status);
    console.log("Location Header:", postRes.headers.get("location"));
}

setLocationDirect();
