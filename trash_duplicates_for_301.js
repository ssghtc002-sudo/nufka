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

const itemsToProcess = [
    // 1. Page ID 24 (tax-agent-dubai)
    { id: 24, type: "pages" },
    // 2. Page ID 6815 (business-valuation-due-diligence)
    { id: 6815, type: "pages" },
    // 3. Post ID 11453 (why-bookkeeping-services-in-dubai-are-essential-for-business-growth)
    { id: 11453, type: "posts" },
    // 4. Post ID 11568 (freezone-offshore-company-formation-services-in-dubai-uae)
    { id: 11568, type: "posts" },
    // 5. Post ID 11619 (understanding-external-financial-audit-services-in-dubai)
    { id: 11619, type: "posts" },
    // 6. Post ID 11600 (the-role-of-tax-agent-services-in-dubai-uae-for-modern-businesses)
    { id: 11600, type: "posts" }
];

async function trashDuplicatesToEnable301() {
    console.log("🧹 Trashing duplicate pages & posts so 301 Redirects take instant effect...\n");

    for (const item of itemsToProcess) {
        console.log(`Trashing ${item.type} ID ${item.id}...`);
        try {
            const res = await fetch(`https://nufca.com/wp-json/wp/v2/${item.type}/${item.id}`, {
                method: "DELETE",
                headers: headers
            });
            console.log(`  --> Trash Status: ${res.status}`);
        } catch(e) {
            console.log(`  --> Error: ${e.message}`);
        }
    }

    console.log("\n🎉 ALL DUPLICATE PAGES & POSTS MOVED TO TRASH!");
}

trashDuplicatesToEnable301();
