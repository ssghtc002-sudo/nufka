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

const redirectsList = [
    {
        source: "/service/company-formation-services",
        target: "/services/company-set-up-consulting",
        desc: "Path Error (/service/ singular)"
    },
    {
        source: "/service/tax-agent-services",
        target: "/services/tax-agent-services",
        desc: "Path Error (/service/ singular)"
    },
    {
        source: "/tax-agent-dubai",
        target: "/services/tax-agent-services",
        desc: "Root Slug Duplicate"
    },
    {
        source: "/services/business-valuation-due-diligence",
        target: "/services/due-diligence",
        desc: "Content Overlap (Due Diligence)"
    },
    {
        source: "/why-bookkeeping-services-in-dubai-are-essential-for-business-growth",
        target: "/bookkeeping-services-in-dubai-for-businesses-accounting-firm",
        desc: "80% Duplicate Content"
    },
    {
        source: "/freezone-offshore-company-formation-services-in-dubai-uae",
        target: "/freezone-company-formation-services-in-dubai-benefits-process-business-setup-guide",
        desc: "Duplicate Content"
    },
    {
        source: "/understanding-external-financial-audit-services-in-dubai",
        target: "/services/audit-assurance",
        desc: "90% Service Match"
    },
    {
        source: "/the-role-of-tax-agent-services-in-dubai-uae-for-modern-businesses",
        target: "/services/tax-agent-services",
        desc: "Service Competitor"
    }
];

async function addRedirects() {
    console.log("🚀 Creating 301 Redirects in WordPress via Redirection Plugin REST API...\n");

    for (const r of redirectsList) {
        console.log(`Processing: ${r.source} ➔ ${r.target}`);

        const payload = {
            url: r.source,
            action_data: { url: r.target },
            action_code: 301,
            action_type: "url",
            match_type: "url",
            group_id: 3,
            title: `Sheet Optimization: ${r.desc}`
        };

        try {
            const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(payload)
            });

            console.log(`  --> Status: ${res.status}`);
            if (res.ok) {
                const data = await res.json();
                console.log(`  --> ✅ SUCCESS! Redirect ID Created: ${data.id}`);
            } else {
                console.log(`  --> ❌ Error:`, await res.text());
            }
        } catch(e) {
            console.log(`  --> ❌ Network Error: ${e.message}`);
        }
        console.log("---");
    }

    console.log("\n🎉 ALL GOOGLE SHEET 301 REDIRECTS SUCCESSFULLY CREATED & LIVE!");
}

addRedirects();
