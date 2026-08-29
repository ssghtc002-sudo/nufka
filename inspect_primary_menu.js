const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function inspectPrimaryMenu() {
    console.log("🔍 Inspecting Main Menu (Primary) ID 95...");

    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=edit&menu=95", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\primary_menu_95.html', html, 'utf-8');

    // Extract menu items titles and links
    const items = [...html.matchAll(/<span class="menu-item-title">([\s\S]*?)<\/span>/gi)];
    console.log("Existing items in Main Menu (Primary):");
    items.forEach((item, idx) => {
        console.log(`${idx + 1}. ${item[1].trim().replace(/<[^>]+>/g, '')}`);
    });

    const nonceMatch = html.match(/id="update-nav-menu-nonce" value="([^"]+)"/);
    if (nonceMatch) console.log("Nonce:", nonceMatch[1]);
}

inspectPrimaryMenu();
