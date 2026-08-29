const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function getPageMeta() {
    console.log("🔍 Checking postmeta for Page ID 99146 (vat-consultancy-in-uae)...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/pages/99146", { headers });
    const page = await res.json();

    console.log("Page ID 99146 Slug:", page.slug);
    console.log("Title:", page.title.rendered);
}

getPageMeta();
