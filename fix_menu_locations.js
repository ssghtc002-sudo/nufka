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

const newIds = [99123, 99124, 99125, 99126, 99127];

async function revertMenuItems() {
    console.log("🧹 Reverting newly added REST menu items to restore original header layout...");

    for (const id of newIds) {
        try {
            const res = await fetch(`https://nufca.com/wp-json/wp/v2/menu-items/${id}?force=true`, {
                method: "DELETE",
                headers: headers
            });
            console.log(`Deleted item ${id}: Status ${res.status}`);
        } catch (e) {
            console.error(`Error deleting ${id}: ${e.message}`);
        }
    }

    console.log("✅ Revert completed. Inspecting active nav menu locations...");
}

revertMenuItems();
