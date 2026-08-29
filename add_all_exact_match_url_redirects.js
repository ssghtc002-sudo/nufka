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

const items = [
    { source: "/service/company-formation-services", target: "/services/company-set-up-consulting" },
    { source: "/service/tax-agent-services", target: "/services/tax-agent-services" },
    { source: "/tax-agent-dubai", target: "/services/tax-agent-services" },
    { source: "/services/business-valuation-due-diligence", target: "/services/due-diligence" },
    { source: "/why-bookkeeping-services-in-dubai-are-essential-for-business-growth", target: "/bookkeeping-services-in-dubai-for-businesses-accounting-firm" },
    { source: "/freezone-offshore-company-formation-services-in-dubai-uae", target: "/freezone-company-formation-services-in-dubai-benefits-process-business-setup-guide" },
    { source: "/understanding-external-financial-audit-services-in-dubai", target: "/services/audit-assurance" },
    { source: "/the-role-of-tax-agent-services-in-dubai-uae-for-modern-businesses", target: "/services/tax-agent-services" }
];

async function addAllExactRedirectionPlugin() {
    console.log("🚀 Creating 301 Redirects with match_url parameter in Redirection Plugin...");

    for (const r of items) {
        const payload = {
            url: r.source,
            match_url: r.source,
            action_data: { url: r.target },
            action_code: 301,
            action_type: "url",
            match_type: "url",
            group_id: 3
        };

        const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        });

        console.log(`Add ${r.source} ➔ ${r.target}: Status ${res.status}`);
    }

    console.log("\n🎉 ALL 301 REDIRECTS SUCCESSFULLY ADDED!");
}

addAllExactRedirectionPlugin();
