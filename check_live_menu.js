const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function checkMenu() {
    console.log("⚙️ Fetching latest nav-menus.php for Menu 95...");
    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=edit&menu=95", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0"
        }
    });

    const html = await res.text();
    const dbIds = [...html.matchAll(/name="menu-item-db-id\[(\d+)\]"/g)].map(m => m[1]);
    console.log(`Found ${dbIds.length} existing menu items.`);

    const getValRegex = (name) => {
        const m = html.match(new RegExp(`name="${name.replace('[', '\\[').replace(']', '\\]')}"\\s+value="([^"]*)"`));
        return m ? m[1] : '';
    };

    if (dbIds.length > 0) {
        const id = dbIds[0];
        console.log(`Live HTML for ID ${id}:`);
        console.log("Title (regex):", getValRegex(`menu-item-title[${id}]`));
        console.log("Parent (regex):", getValRegex(`menu-item-parent-id[${id}]`));
        console.log("Position (regex):", getValRegex(`menu-item-position[${id}]`));

        // Use regex to find the input tag
        const inputMatch = html.match(new RegExp(`<input[^>]+name="menu-item-parent-id\\[${id}\\]"[^>]*>`));
        console.log("Input Tag for parent id:", inputMatch ? inputMatch[0] : "Not found");
    }
}

checkMenu();
