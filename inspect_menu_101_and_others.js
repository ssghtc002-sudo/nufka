const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function inspectAllMenuItemsDetailed() {
    const menus = [95, 96, 97, 98, 99, 100, 101];

    for (const menuId of menus) {
        const res = await fetch(`https://nufca.com/wp-json/wp/v2/menu-items?menus=${menuId}&per_page=100`, { headers });
        if (res.ok) {
            const items = await res.json();
            console.log(`\n=== MENU ID ${menuId} (${items.length} items) ===`);
            items.forEach(i => {
                console.log(`  ID: ${i.id} | Parent: ${i.parent} | Title: "${i.title.rendered}" | URL: ${i.url}`);
            });
        }
    }
}

inspectAllMenuItemsDetailed();
