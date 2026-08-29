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

async function testSinglePost() {
    const payload = {
        url: "/service/company-formation-services",
        action_data: { url: "/services/company-set-up-consulting" },
        action_code: 301,
        action_type: "url",
        match_type: "url",
        group_id: 3,
        title: "Test Redirect"
    };

    const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    });

    console.log("Status:", res.status);
    const data = await res.json();
    console.log("Response Data:", JSON.stringify(data, null, 2));
}

testSinglePost();
