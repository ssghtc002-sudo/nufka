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

async function trashOldVatPageAndRedirect() {
    console.log("🧹 Trashing Page ID 6836 (services/vat-consultancy-services)...");

    // 1. Move Page 6836 to trash
    const pageRes = await fetch("https://nufca.com/wp-json/wp/v2/pages/6836", {
        method: "DELETE",
        headers: headers
    });

    console.log("Trash Page 6836 Status:", pageRes.status);

    // 2. Add 301 Redirects in Redirection plugin
    const redirects = [
        { url: "/services/vat-consultancy-services", target: "/vat-consultancy-in-uae/" },
        { url: "/services/vat-consultancy-services/", target: "/vat-consultancy-in-uae/" },
        { url: "^/services/vat-consultancy-services/?$", target: "/vat-consultancy-in-uae/", regex: true }
    ];

    for (const r of redirects) {
        const payload = {
            url: r.url,
            match_url: r.url,
            action_data: { url: r.target },
            action_code: 301,
            action_type: "url",
            match_type: "url",
            regex: !!r.regex,
            group_id: 3,
            title: "Old VAT service page 301 redirect"
        };

        const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        });

        console.log(`Add 301 Redirect for ${r.url} -> Status: ${res.status}`);
    }

    console.log("🎉 OLD VAT PAGE TRASHED & 301 REDIRECT CREATED!");
}

trashOldVatPageAndRedirect();
