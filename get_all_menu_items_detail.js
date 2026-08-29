const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function getAllMenuItems() {
    console.log("🔍 Fetching all menu items from REST API...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/menu-items?per_page=100", { headers });
    console.log("Status:", res.status);

    if (res.ok) {
        const items = await res.json();
        console.log(`Total Menu Items Found: ${items.length}`);
        items.forEach(i => {
            if (i.title.rendered.toLowerCase().includes('vat') || i.url.toLowerCase().includes('vat')) {
                console.log(`  ✨ MATCH! ID: ${i.id}, Title: ${i.title.rendered}, URL: ${i.url}, Parent: ${i.parent}`);
            } else {
                console.log(`  --> ID: ${i.id}, Title: ${i.title.rendered}, URL: ${i.url}, Parent: ${i.parent}`);
            }
        });
    }
}

getAllMenuItems();
