const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function addDirectRedirect() {
    console.log("Adding direct 301 redirect for singular /service/internal-audit-system-review...");
    const payload = {
        url: "/service/internal-audit-system-review",
        match_url: "/service/internal-audit-system-review",
        action_data: { url: "/internal-audit-uae/" },
        action_code: 301,
        action_type: "url",
        match_type: "url",
        title: "Internal Audit Direct 301",
        group_id: 1
    };

    const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    });
    console.log("Status:", res.status);
}

addDirectRedirect();
