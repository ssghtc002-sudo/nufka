const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function testMethods() {
    console.log("🔍 Checking active plugins and capabilities...");

    // Test 1: Fetch active plugins list
    try {
        const pluginsRes = await fetch("https://nufca.com/wp-json/wp/v2/plugins", { headers });
        console.log("Plugins API Status:", pluginsRes.status);
        if (pluginsRes.ok) {
            const plugins = await pluginsRes.json();
            console.log("Active Plugins:", plugins.map(p => `${p.plugin} (${p.status})`));
        }
    } catch(e) {
        console.log("Plugins API Error:", e.message);
    }
}

testMethods();
