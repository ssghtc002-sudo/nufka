const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function listEaelSections() {
    console.log("🔍 Listing all eael-general-section items...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/eael-general-section?per_page=100", { headers });
    console.log("Status:", res.status);

    if (res.ok) {
        const items = await res.json();
        console.log(`Found ${items.length} items:`);
        items.forEach(i => {
            console.log(`  --> ID: ${i.id}, Title: ${i.title.rendered}, Slug: ${i.slug}, Link: ${i.link}`);
        });
    }
}

listEaelSections();
