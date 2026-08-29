const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function findMegamenuCPT() {
    console.log("🔍 Searching for Megamenu Post ID 5137...");

    const typesRes = await fetch("https://nufca.com/wp-json/wp/v2/types", { headers });
    const types = await typesRes.json();

    for (const key in types) {
        const typeObj = types[key];
        if (typeObj.rest_base) {
            try {
                const itemRes = await fetch(`https://nufca.com/wp-json/wp/v2/${typeObj.rest_base}/5137`, { headers });
                if (itemRes.ok) {
                    const item = await itemRes.json();
                    console.log(`✨ FOUND POST ID 5137 IN TYPE '${key}' (rest_base: ${typeObj.rest_base})!`);
                    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\megamenu_5137.json', JSON.stringify(item, null, 2), 'utf-8');
                    return;
                }
            } catch(e) {}
        }
    }
}

findMegamenuCPT();
