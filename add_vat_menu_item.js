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

async function addVatMenuItem() {
    console.log("➕ Adding VAT Consultancy Services item to Primary Menu (Menu ID 95)...");

    const payload = {
        title: "VAT Consultancy Services",
        url: "https://nufca.com/vat-consultancy-in-uae/",
        status: "publish",
        menus: 95,
        parent: 9461 // Services parent menu item
    };

    const res = await fetch("https://nufca.com/wp-json/wp/v2/menu-items", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    });

    console.log("Add Menu Item Status:", res.status);
    if (res.ok) {
        const data = await res.json();
        console.log(`🎉 SUCCESS! Added Menu Item ID: ${data.id}, Title: ${data.title.rendered}, URL: ${data.url}`);
    } else {
        console.log("Error:", await res.text());
    }
}

addVatMenuItem();
