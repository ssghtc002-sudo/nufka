const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function inspectMenus() {
    console.log("🔍 Inspecting WordPress Navigation Menus via Admin Session...");

    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    console.log("Status:", res.status);

    // Extract nonces and menu select options
    const nonceMatch = html.match(/name="user-settings-nonce" value="([^"]+)"/) || html.match(/id="_wpnonce" name="_wpnonce" value="([^"]+)"/);
    const updateNonceMatch = html.match(/id="update-nav-menu-nonce" value="([^"]+)"/);

    console.log("WP Nonce:", nonceMatch ? nonceMatch[1] : "not found");
    console.log("Update Nav Menu Nonce:", updateNonceMatch ? updateNonceMatch[1] : "not found");

    // Extract menu items or selected menu
    const selectedMenuMatch = html.match(/<select name="menu" id="select-menu-to-edit"[\s\S]*?<\/select>/);
    if (selectedMenuMatch) {
        console.log("\nExisting Menus in WP Admin:\n", selectedMenuMatch[0].replace(/<[^>]+>/g, ' ').trim());
    } else {
        console.log("No menu selector dropdown found.");
    }
}

inspectMenus();
