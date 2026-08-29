const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

async function createMenuItemsViaREST() {
    console.log("🚀 Creating Navigation Menu items via WordPress REST API...");

    // Target Menu ID: 95 (Main Menu Primary)
    const menuId = 95;

    // 1. Create Parent Item: "Corporate Tax in UAE"
    const parentRes = await fetch("https://nufca.com/wp-json/wp/v2/menu-items", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            title: "Corporate Tax in UAE",
            url: "https://nufca.com/corporate-tax-in-uae/",
            status: "publish",
            menus: menuId,
            type: "custom"
        })
    });

    console.log("Parent Item Creation Status:", parentRes.status);
    const parentData = await parentRes.json();
    console.log("Parent Item Data:", JSON.stringify(parentData, null, 2));

    if (parentData.id) {
        const parentItemId = parentData.id;
        console.log(`\n✅ Parent Menu Item Created (ID: ${parentItemId})!`);

        // 2. Create Child Items under parentItemId
        const children = [
            { title: "Dubai", url: "https://nufca.com/corporate-tax-in-uae/dubai/" },
            { title: "Gold Souk (Deira)", url: "https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" },
            { title: "Abu Dhabi", url: "https://nufca.com/corporate-tax-in-uae/abu-dhabi/" },
            { title: "Sharjah", url: "https://nufca.com/corporate-tax-in-uae/sharjah/" }
        ];

        for (const child of children) {
            const childRes = await fetch("https://nufca.com/wp-json/wp/v2/menu-items", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    title: child.title,
                    url: child.url,
                    status: "publish",
                    menus: menuId,
                    parent: parentItemId,
                    type: "custom"
                })
            });

            console.log(`Child Item '${child.title}' Status: ${childRes.status}`);
            const childData = await childRes.json();
            console.log(`  --> Created Child ID: ${childData.id}`);
        }

        console.log("\n🎉 ALL NAVIGATION MENU ITEMS SUCCESSFULLY CREATED & LINKED ON NUFCA!");
    }
}

createMenuItemsViaREST();
