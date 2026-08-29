const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function inspectNavMenusPage() {
    console.log("🔍 Fetching WP Admin nav-menus.php for Menu ID 95...");

    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=edit&menu=95", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    console.log("Status:", res.status);
    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\nav_menus_95.html', html, 'utf-8');

    const matches = [...html.matchAll(/menu-item-title">([^<]+)<\/span>/gi)];
    console.log("Menu Item Titles in Admin HTML:");
    matches.forEach(m => console.log(`  --> ${m[1]}`));

    const urlMatches = [...html.matchAll(/class="edit-menu-item-url[^"]*"[^>]*value="([^"]*)"/gi)];
    console.log("Menu Item URLs in Admin HTML:");
    urlMatches.forEach(u => console.log(`  --> ${u[1]}`));
}

inspectNavMenusPage();
