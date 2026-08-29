const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function checkMenuItems() {
    console.log("🔍 Checking items in Menu ID 95...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/menu-items?menus=95&per_page=100", { headers });
    console.log("Menu Items API Status:", res.status);

    if (res.ok) {
        const items = await res.json();
        console.log(`Found ${items.length} menu items:`);
        items.forEach(i => {
            console.log(`  --> ID: ${i.id}, Title: ${i.title.rendered}, URL: ${i.url}, Object_ID: ${i.object_id}`);
        });
    }
}

checkMenuItems();
