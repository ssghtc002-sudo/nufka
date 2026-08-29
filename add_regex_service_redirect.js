const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

async function addRegexRedirect() {
    console.log("🚀 Adding Regex 301 Redirect for /service/* to /services/* ...");

    const payload = {
        url: "^/service/(.*)",
        action_data: { url: "/services/$1" },
        action_code: 301,
        action_type: "url",
        match_type: "url",
        regex: true,
        group_id: 3,
        title: "Singular /service/ to /services/ Regex 301 Redirect"
    };

    const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    });

    console.log("Regex Add Status:", res.status);
    const data = await res.json();
    console.log("Created Redirect ID:", data.id);
}

addRegexRedirect();
