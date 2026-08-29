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

async function updateMegamenu5137() {
    console.log("🛠️ Searching for Post 5137 in wp/v2/pages or posts...");

    // Try pages/5137 or posts/5137 or custom endpoint
    const res = await fetch("https://nufca.com/wp-json/wp/v2/pages/5137", { headers });
    console.log("Pages 5137 status:", res.status);

    const res2 = await fetch("https://nufca.com/wp-json/wp/v2/posts/5137", { headers });
    console.log("Posts 5137 status:", res2.status);
}

updateMegamenu5137();
