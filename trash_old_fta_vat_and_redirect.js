const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function processTrashAndRedirect() {
    console.log("🗑️ Trashing old page ID 6491 (fta-vat-audit-assistance)...");

    // 1. Trash Old Page ID 6491
    const trashRes = await fetch("https://nufca.com/wp-json/wp/v2/pages/6491", {
        method: "DELETE",
        headers: headers
    });

    console.log("  --> Trash Status:", trashRes.status);

    // 2. Setup 301 Redirects using Redirection Plugin API
    console.log("\n🔀 Setting up 301 Redirects for FTA VAT Audit legacy URLs...");

    const redirects = [
        { url: "/services/fta-vat-audit-assistance", target: "/fta-vat-audit-assistance-uae/" },
        { url: "/services/fta-vat-audit-assistance/", target: "/fta-vat-audit-assistance-uae/" },
        { url: "/service/fta-vat-audit-assistance", target: "/fta-vat-audit-assistance-uae/" },
        { url: "/service/fta-vat-audit-assistance/", target: "/fta-vat-audit-assistance-uae/" },
        { url: "/fta-vat-audit-assistance", target: "/fta-vat-audit-assistance-uae/" },
        { url: "/fta-vat-audit-assistance/", target: "/fta-vat-audit-assistance-uae/" }
    ];

    for (const r of redirects) {
        const payload = {
            url: r.url,
            match_url: r.url,
            action_data: { url: r.target },
            action_code: 301,
            action_type: "url",
            match_type: "url",
            title: "FTA VAT Audit 301 Redirect",
            group_id: 1
        };

        const redRes = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        });

        const redData = await redRes.json();
        console.log(`  --> 301 Redirect [${r.url} -> ${r.target}]: Status ${redRes.status}`, redData.id ? `(ID: ${redData.id})` : '');
    }

    console.log("\n🎉 TRASH & 301 REDIRECTS COMPLETED SUCCESSFULLY!");
}

processTrashAndRedirect();
