const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

async function fixNoSlashRedirects() {
    console.log("🚀 Adding Regex 301 Redirect for /service/company-formation-services with optional slash...");

    const items = [
        {
            url: "^/service/company-formation-services/?$",
            target: "/services/company-set-up-consulting"
        },
        {
            url: "^/service/tax-agent-services/?$",
            target: "/services/tax-agent-services"
        }
    ];

    for (const item of items) {
        const payload = {
            url: item.url,
            match_url: item.url,
            action_data: { url: item.target },
            action_code: 301,
            action_type: "url",
            match_type: "url",
            regex: true,
            group_id: 3,
            title: "Exact Regex optional slash 301"
        };

        const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        });

        console.log(`Add ${item.url} -> Status: ${res.status}`);
    }
}

fixNoSlashRedirects();
