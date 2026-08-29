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

async function checkRankMathRedirections() {
    console.log("🔍 Checking Rank Math Redirections table in WordPress DB via REST API...");

    try {
        const res = await fetch("https://nufca.com/wp-json/rankmath/v1/redirections", {
            headers: headers
        });
        console.log("Rank Math API Status:", res.status);
        if (res.ok) {
            const data = await res.json();
            console.log("Redirections count:", data.length || data.redirections?.length);
        }
    } catch(e) {
        console.log("Error:", e.message);
    }
}

checkRankMathRedirections();
