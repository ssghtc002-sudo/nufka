const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function updateServiceStatus() {
    console.log("⚙️ Updating CPT service status / slug via POST...");

    const items = [
        { id: 28, slug: "old-company-formation-services" },
        { id: 125, slug: "old-tax-agent-services" }
    ];

    for (const item of items) {
        const res = await fetch(`https://nufca.com/wp-json/wp/v2/services/${item.id}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                status: "trash",
                slug: item.slug
            })
        });

        console.log(`Update Item ${item.id} Status: ${res.status}`);
        const data = await res.json();
        console.log(`  --> Updated Slug: ${data.slug}, Status: ${data.status}`);
    }
}

updateServiceStatus();
