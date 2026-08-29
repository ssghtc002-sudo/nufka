const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function fixHeaderLocation() {
    console.log("⚙️ Fetching fresh nonce from nav-menus.php?action=locations...");

    const getRes = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=locations", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await getRes.text();
    const nonceMatch = html.match(/id="_wpnonce"\s+name="_wpnonce"\s+value="([^"]+)"/);
    if (!nonceMatch) {
        console.log("❌ Nonce not found!");
        return;
    }

    const nonce = nonceMatch[1];
    console.log(`🔑 Fresh Nonce: ${nonce}`);

    const params = new URLSearchParams();
    params.append("menu-locations[primary]", "95");
    params.append("menu-locations[secondary]", "0");
    params.append("menu-locations[menu-popup]", "0");
    params.append("menu-locations[menu-left]", "0");
    params.append("menu-locations[menu-right]", "0");
    params.append("nav-menu-locations", "Save Changes");
    params.append("_wpnonce", nonce);
    params.append("_wp_http_referer", "/wp-admin/nav-menus.php?action=locations");

    console.log("🚀 Saving menu locations...");
    const postRes = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=locations", {
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
    console.log("Redirect Location:", postRes.headers.get("location"));

    if (postRes.status === 302 || postRes.status === 200) {
        console.log("🎉 SUCCESS! Theme Location 'primary' assigned to Main Menu (95)!");
    }
}

fixHeaderLocation();
