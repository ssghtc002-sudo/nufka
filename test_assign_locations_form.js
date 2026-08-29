const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function testAssignLocations() {
    console.log("⚙️ Assigning primary location...");

    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=locations", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\menu_loc_form.html', html, 'utf-8');

    const nonceMatch = html.match(/name="_wpnonce"\s+value="([^"]+)"/);
    console.log("Nonce:", nonceMatch ? nonceMatch[1] : "none");

    const params = new URLSearchParams();
    params.append("menu-locations[primary]", "95");
    params.append("menu-locations[secondary]", "0");
    params.append("menu-locations[menu-popup]", "0");
    params.append("menu-locations[menu-left]", "0");
    params.append("menu-locations[menu-right]", "0");
    params.append("save_menu_locations", "Save Changes");
    params.append("action", "save-menu-locations");
    params.append("_wpnonce", nonceMatch[1]);
    params.append("_wp_http_referer", "/wp-admin/nav-menus.php?action=locations");

    const postRes = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=locations", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        body: params.toString()
    });

    console.log("Post Status:", postRes.status);
}

testAssignLocations();
