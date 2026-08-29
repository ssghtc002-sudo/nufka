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

async function forceCacheClear() {
    console.log("Triggering update on Audit page to force WP Rocket cache clear...");
    // Update the Audit page (ID 99159) with the exact same title to trigger a save
    const res = await fetch("https://nufca.com/wp-json/wp/v2/pages/99159", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            title: "Audit & Assurance Services in UAE"
        })
    });
    
    console.log("Update status:", res.status);
    
    // Also trigger on a child page just in case
    const res2 = await fetch("https://nufca.com/wp-json/wp/v2/pages/99160", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            title: "Audit & Assurance Services in Dubai"
        })
    });
    
    console.log("Child Update status:", res2.status);
}

forceCacheClear();
