const fs = require('fs');

const redirectsToCheck = [
    { from: "https://nufca.com/service/company-formation-services", to: "https://nufca.com/services/company-set-up-consulting" },
    { from: "https://nufca.com/service/tax-agent-services", to: "https://nufca.com/services/tax-agent-services" },
    { from: "https://nufca.com/tax-agent-dubai", to: "https://nufca.com/services/tax-agent-services" },
    { from: "https://nufca.com/services/business-valuation-due-diligence", to: "https://nufca.com/services/due-diligence" },
    { from: "https://nufca.com/why-bookkeeping-services-in-dubai-are-essential-for-business-growth", to: "https://nufca.com/bookkeeping-services-in-dubai-for-businesses-accounting-firm" }
];

async function checkRedirects() {
    console.log("🔍 Checking current redirect status of URLs in Google Sheet...\n");
    for (const item of redirectsToCheck) {
        try {
            const res = await fetch(item.from, { method: "HEAD", redirect: "manual" });
            console.log(`URL: ${item.from}`);
            console.log(`  --> Status: ${res.status}`);
            console.log(`  --> Location: ${res.headers.get("location") || "No redirect (direct page or 404)"}`);
        } catch(e) {
            console.log(`Error checking ${item.from}:`, e.message);
        }
        console.log("---");
    }
}

checkRedirects();
