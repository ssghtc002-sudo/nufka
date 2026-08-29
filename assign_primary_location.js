const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function assignPrimaryLocation() {
    console.log("⚙️ Re-assigning Primary Theme Location to Menu ID 95 (Main Menu)...");

    const pageRes = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=locations", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await pageRes.text();
    const nonceMatch = html.match(/id="_wpnonce" name="_wpnonce" value="([^"]+)"/) || html.match(/name="_wpnonce" value="([^"]+)"/);

    if (!nonceMatch) {
        console.log("❌ Nonce not found!");
        return;
    }

    console.log("🔑 Location Nonce:", nonceMatch[1]);

    const params = new URLSearchParams();
    params.append("action", "save-menu-locations");
    params.append("_wpnonce", nonceMatch[1]);
    params.append("_wp_http_referer", "/wp-admin/nav-menus.php?action=locations");
    params.append("menu-locations[primary]", "95");
    params.append("menu-locations[secondary]", "0");
    params.append("menu-locations[menu-popup]", "0");
    params.append("menu-locations[menu-left]", "0");
    params.append("menu-locations[menu-right]", "0");
    params.append("save_menu_locations", "Save Changes");

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
    console.log("Redirect Location:", postRes.headers.get("location"));

    if (postRes.status === 302 || postRes.status === 200) {
        console.log("🎉 SUCCESS! Primary Theme Location assigned to Menu ID 95!");
    }
}

assignPrimaryLocation();
