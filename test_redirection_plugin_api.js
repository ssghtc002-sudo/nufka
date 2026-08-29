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

async function testRedirectionAPI() {
    console.log("🔍 Checking Redirection plugin REST API...");

    try {
        const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
            headers: headers
        });
        console.log("Redirection API Status:", res.status);
        if (res.ok) {
            const data = await res.json();
            console.log("Existing Redirects Total:", data.total);
            console.log("Items snippet:", data.items ? data.items.slice(0, 3) : "none");
        } else {
            console.log("Response text:", await res.text());
        }
    } catch(e) {
        console.log("Error:", e.message);
    }
}

testRedirectionAPI();
