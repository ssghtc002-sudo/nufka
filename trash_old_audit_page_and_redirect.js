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

async function trashAndRedirect() {
    console.log("🚀 Starting trash and redirect for Audit & Assurance...");
    
    // 1. Find and Trash the Service CPT
    const searchRes = await fetch("https://nufca.com/wp-json/wp/v2/services?slug=audit-assurance", { headers });
    const pages = await searchRes.json();
    
    if (pages && pages.length > 0) {
        const pageId = pages[0].id;
        console.log(`Found Service CPT 'audit-assurance' with ID ${pageId}. Trashing...`);
        const trashRes = await fetch(`https://nufca.com/wp-json/wp/v2/services/${pageId}`, {
            method: 'DELETE',
            headers: headers
        });
        const trashData = await trashRes.json();
        if (trashData.deleted || trashData.status === 'trash') {
            console.log(`✅ Successfully trashed post ID ${pageId}`);
        } else {
            console.log(`⚠️ Trash response:`, trashData);
        }
    } else {
        console.log("ℹ️ No active Service CPT found for 'audit-assurance'. It might be already trashed or a different post type.");
    }

    // 2. Add RankMath Redirection
    const redirections = [
        {
            url: "/services/audit-assurance",
            action_data: { url: "/audit-assurance-uae/" },
            action_code: 301,
            action_type: "url",
            match_type: "url",
            group_id: 3,
            title: "Audit Page Programmatic Optimization"
        },
        {
            url: "/services/audit-assurance/",
            action_data: { url: "/audit-assurance-uae/" },
            action_code: 301,
            action_type: "url",
            match_type: "url",
            group_id: 3,
            title: "Audit Page Programmatic Optimization Slash"
        }
    ];

    console.log("Setting up 301 Redirection via Redirection Plugin...");
    for (const redir of redirections) {
        const redirRes = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(redir)
        });
        
        if (redirRes.ok) {
            const redirData = await redirRes.json();
            console.log(`✅ Successfully added redirect to ${redir.action_data.url}`);
        } else {
            console.log(`⚠️ Redirect response:`, await redirRes.text());
        }
    }
}

trashAndRedirect();
