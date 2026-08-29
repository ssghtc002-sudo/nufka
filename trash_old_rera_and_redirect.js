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
    console.log("🗑️ Trashing old page ID 6760 (rera-audit-consultancy)...");

    // 1. Trash Old Page ID 6760
    const trashRes = await fetch("https://nufca.com/wp-json/wp/v2/pages/6760", {
        method: "DELETE",
        headers: headers
    });

    console.log("  --> Trash Status:", trashRes.status);

    // 2. Setup 301 Redirects using Redirection Plugin API
    console.log("\n🔀 Setting up 301 Redirects for RERA Audit legacy URLs...");

    const redirects = [
        { url: "/services/rera-audit-consultancy", target: "/rera-audit-uae/" },
        { url: "/services/rera-audit-consultancy/", target: "/rera-audit-uae/" },
        { url: "/service/rera-audit", target: "/rera-audit-uae/" },
        { url: "/service/rera-audit/", target: "/rera-audit-uae/" },
        { url: "/rera-audit-consultancy", target: "/rera-audit-uae/" },
        { url: "/rera-audit-consultancy/", target: "/rera-audit-uae/" },
        { url: "/services/rera-audit-dubai", target: "/rera-audit-uae/dubai/" }
    ];

    for (const r of redirects) {
        const payload = {
            url: r.url,
            match_url: r.url,
            action_data: { url: r.target },
            action_code: 301,
            action_type: "url",
            match_type: "url",
            title: "RERA Audit 301 Redirect",
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
