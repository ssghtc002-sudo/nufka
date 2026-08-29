const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function getMenuDetails() {
    console.log("🔍 Extracting Menu IDs and details...");

    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\nav_menus.html', html, 'utf-8');

    // Extract options with values (menu IDs)
    const matches = html.matchAll(/<option[^>]*value="(\d+)"[^>]*>([\s\S]*?)<\/option>/gi);
    for (const match of matches) {
        console.log(`Menu ID: ${match[1]} | Name: ${match[2].trim()}`);
    }

    // Extract update-nav-menu-nonce
    const nonceMatch = html.match(/name="update-nav-menu-nonce" value="([^"]+)"/);
    if (nonceMatch) {
        console.log(`\n🔑 Update Nav Menu Nonce: ${nonceMatch[1]}`);
    }
}

getMenuDetails();
