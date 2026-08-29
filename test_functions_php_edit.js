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

async function testThemeEdit() {
    console.log("🔍 Checking active theme functions.php...");

    try {
        const res = await fetch("https://nufca.com/wp-json/wp/v2/themes", { headers });
        console.log("Themes Status:", res.status);
        if (res.ok) {
            const themes = await res.json();
            console.log("Themes:", themes);
        }
    } catch(e) {
        console.log("Error:", e.message);
    }
}

testThemeEdit();
