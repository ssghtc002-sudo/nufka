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
    { from: "/service/company-formation-services/", to: "/services/company-set-up-consulting" },
    { from: "/service/company-formation-services", to: "/services/company-set-up-consulting" },
    { from: "/service/tax-agent-services/", to: "/services/tax-agent-services" },
    { from: "/service/tax-agent-services", to: "/services/tax-agent-services" }
];

async function addExactSingular() {
    for (const item of items) {
        const payload = {
            url: item.from,
            action_data: { url: item.to },
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
        console.log(`Add ${item.from} -> Status: ${res.status}`);
    }
}

addExactSingular();
