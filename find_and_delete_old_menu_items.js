const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function inspectAllMenusAndItems() {
    console.log("🔍 Fetching all menus and menu items in WordPress...");

    // 1. Fetch Menus
    const menuRes = await fetch("https://nufca.com/wp-json/wp/v2/menus", { headers });
    if (menuRes.ok) {
        const menus = await menuRes.json();
        console.log("Menus List:", menus.map(m => `ID: ${m.id}, Name: ${m.name}, Locations: ${m.locations.join(',')}`));
    }

    // 2. Fetch All Menu Items
    const itemsRes = await fetch("https://nufca.com/wp-json/wp/v2/menu-items?per_page=100", { headers });
    if (itemsRes.ok) {
        const items = await itemsRes.json();
        console.log(`\nFound ${items.length} total menu items:`);
        items.forEach(i => {
            if (i.url.includes('corporate-tax') || i.url.includes('vat') || i.title.rendered.toLowerCase().includes('corporate') || i.title.rendered.toLowerCase().includes('vat')) {
                console.log(`  ✨ MATCH! Item ID: ${i.id}, Menu: ${i.menus}, Title: ${i.title.rendered}, URL: ${i.url}, Parent: ${i.parent}`);
            }
        });
    }
}

inspectAllMenusAndItems();
