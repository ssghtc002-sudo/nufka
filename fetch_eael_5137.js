const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function fetchEael5137() {
    console.log("🔍 Fetching eael-general-section ID 5137...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/eael-general-section/5137", { headers });
    console.log("Status:", res.status);

    if (res.ok) {
        const item = await res.json();
        fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\eael_5137.json', JSON.stringify(item, null, 2), 'utf-8');
        console.log("Saved eael_5137.json!");

        const html = item.content.rendered;
        const links = [...html.matchAll(/href="([^"]*)"[^>]*>([^<]*)</gi)];
        console.log("\nLinks in Elementor Megamenu 5137:");
        links.forEach(l => console.log(`  --> URL: ${l[1]} | Text: ${l[2].trim()}`));
    }
}

fetchEael5137();
