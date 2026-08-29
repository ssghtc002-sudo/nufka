const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

const customPostTypeItems = [
    { slug: "company-formation-services", target: "https://nufca.com/services/company-set-up-consulting" },
    { slug: "tax-agent-services", target: "https://nufca.com/services/tax-agent-services" }
];

async function findAndTrashServiceCPT() {
    console.log("🔍 Checking Custom Post Type 'service' in WordPress DB...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/service", { headers });
    console.log("CPT 'service' Status:", res.status);
    if (res.ok) {
        const items = await res.json();
        console.log(`Found ${items.length} items in CPT 'service':`);
        for (const item of items) {
            console.log(`  --> ID: ${item.id}, Slug: ${item.slug}, Link: ${item.link}`);
            if (item.slug === 'company-formation-services' || item.slug === 'tax-agent-services') {
                const delRes = await fetch(`https://nufca.com/wp-json/wp/v2/service/${item.id}`, {
                    method: "DELETE",
                    headers: headers
                });
                console.log(`      Trashing CPT Item ${item.id}: Status ${delRes.status}`);
            }
        }
    }
}

findAndTrashServiceCPT();
