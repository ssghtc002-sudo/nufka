const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function searchAllContentTypes() {
    console.log("🔍 Searching all custom post types for company-formation-services...");

    // Check types endpoint
    const typesRes = await fetch("https://nufca.com/wp-json/wp/v2/types", { headers });
    const types = await typesRes.json();

    console.log("Available Post Types in REST API:");
    for (const key in types) {
        const typeObj = types[key];
        console.log(`- ${key} (rest_base: ${typeObj.rest_base})`);

        if (typeObj.rest_base) {
            try {
                const itemRes = await fetch(`https://nufca.com/wp-json/wp/v2/${typeObj.rest_base}?search=company-formation-services`, { headers });
                if (itemRes.ok) {
                    const items = await itemRes.json();
                    if (items.length > 0) {
                        console.log(`  ✨ MATCH FOUND IN '${key}' (rest_base: ${typeObj.rest_base})!`);
                        items.forEach(i => console.log(`     ID: ${i.id}, Slug: ${i.slug}, Link: ${i.link}, Status: ${i.status}`));
                    }
                }
            } catch(e) {
                // ignore
            }
        }
    }
}

searchAllContentTypes();
