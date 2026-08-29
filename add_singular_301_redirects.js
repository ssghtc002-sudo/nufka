const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

const singularFixes = [
    { source: "/service/company-formation-services", target: "/services/company-set-up-consulting" },
    { source: "/service/tax-agent-services", target: "/services/tax-agent-services" }
];

async function addSingularRedirects() {
    console.log("🚀 Adding 301 Redirects for /service/ singular URLs...");

    for (const item of singularFixes) {
        const payload = {
            url: item.source,
            action_data: { url: item.target },
            action_code: 301,
            action_type: "url",
            match_type: "url",
            group_id: 3,
            match_data: {
                source: {
                    flag_query: "exact",
                    flag_case: true,
                    flag_trailing: false,
                    flag_regex: false
                }
            },
            title: "Singular path 301 redirect"
        };

        const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        });

        console.log(`Singular ${item.source} -> Status: ${res.status}`);
    }
}

addSingularRedirects();
