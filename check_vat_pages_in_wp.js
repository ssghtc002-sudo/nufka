const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function checkVatPages() {
    console.log("🔍 Checking existing VAT pages in WordPress...");

    const pageRes = await fetch("https://nufca.com/wp-json/wp/v2/pages?search=vat", { headers });
    const pages = await pageRes.json();

    console.log("Existing VAT Pages found:");
    pages.forEach(p => console.log(`  --> ID: ${p.id}, Slug: ${p.slug}, Title: ${p.title.rendered}, Link: ${p.link}`));

    const postRes = await fetch("https://nufca.com/wp-json/wp/v2/posts?search=vat", { headers });
    const posts = await postRes.json();
    console.log("Existing VAT Posts found:");
    posts.forEach(p => console.log(`  --> ID: ${p.id}, Slug: ${p.slug}, Title: ${p.title.rendered}, Link: ${p.link}`));
}

checkVatPages();
