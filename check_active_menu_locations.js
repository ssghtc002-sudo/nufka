const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function checkThemeLocations() {
    console.log("🔍 Checking active Theme Menu Locations...");

    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=locations", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\menu_locations.html', html, 'utf-8');

    // Extract select inputs and options
    const selects = [...html.matchAll(/<select[^>]*name="menu-locations\[([^\]]+)\]"[^>]*>([\s\S]*?)<\/select>/gi)];
    console.log("\nTheme Menu Locations:");
    selects.forEach(s => {
        const locName = s[1];
        const selected = s[2].match(/<option[^>]*value="(\d+)"[^>]*selected="selected"[^>]*>([\s\S]*?)<\/option>/i);
        console.log(`Location: ${locName} -> Assigned Menu: ${selected ? `${selected[2].trim()} (ID: ${selected[1]})` : "None"}`);
    });
}

checkThemeLocations();
