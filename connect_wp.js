const WP_URL = process.env.WP_URL || "https://nufca.com";
const USERNAME = "nufka";
const APP_PASSWORD = "GORK XC6d MhAe fKrn k3h5 DKA6";

async function testWordPressConnection(siteUrl, username, appPassword) {
    const cleanUrl = siteUrl.replace(/\/$/, "");
    const endpoint = `${cleanUrl}/wp-json/wp/v2/users/me`;
    
    const cleanAppPass = appPassword.replace(/\s+/g, '');
    const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');

    console.log(`📡 Connecting to ${cleanUrl}...`);
    console.log(`👤 Username: ${username}`);
    console.log(`🔑 Application Password: ${appPassword.substring(0, 9)}...`);

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json',
                'User-Agent': 'WordPress-Connector/1.0'
            }
        });

        const status = response.status;
        const data = await response.json();

        if (status === 200) {
            console.log("\n=========================================");
            console.log("🎉 SUCCESS! WordPress Connection Established!");
            console.log(`User ID: ${data.id}`);
            console.log(`Display Name: ${data.name}`);
            console.log(`Slug: ${data.slug}`);
            console.log(`Roles: ${JSON.stringify(data.roles)}`);
            console.log("=========================================\n");
        } else {
            console.log(`\n❌ Connection Failed (HTTP Status ${status})`);
            console.log("Response:", JSON.stringify(data, null, 2));
        }
    } catch (err) {
        console.log(`\n❌ Network Error: ${err.message}`);
    }
}

testWordPressConnection(WP_URL, USERNAME, APP_PASSWORD);
