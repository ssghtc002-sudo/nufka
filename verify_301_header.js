const testUrls = [
    "https://nufca.com/service/company-formation-services",
    "https://nufca.com/service/tax-agent-services",
    "https://nufca.com/tax-agent-dubai",
    "https://nufca.com/services/business-valuation-due-diligence",
    "https://nufca.com/why-bookkeeping-services-in-dubai-are-essential-for-business-growth",
    "https://nufca.com/freezone-offshore-company-formation-services-in-dubai-uae",
    "https://nufca.com/understanding-external-financial-audit-services-in-dubai",
    "https://nufca.com/the-role-of-tax-agent-services-in-dubai-uae-for-modern-businesses"
];

async function verify301() {
    console.log("🌐 Verifying 301 Redirect responses on live site...\n");
    for (const url of testUrls) {
        try {
            const res = await fetch(url, { method: "GET", redirect: "manual" });
            console.log(`URL: ${url}`);
            console.log(`  --> Status: ${res.status}`);
            console.log(`  --> Redirect Location: ${res.headers.get("location") || "none"}`);
        } catch(e) {
            console.log(`Error: ${e.message}`);
        }
        console.log("---");
    }
}

verify301();
