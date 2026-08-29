const WP_URL = "https://nufca.com";
const USERNAME = "nufka";
const APP_PASSWORD = "GORK XC6d MhAe fKrn k3h5 DKA6";

async function verifyConnectionAndPermissions() {
    const cleanAppPass = APP_PASSWORD.replace(/\s+/g, '');
    const credentials = Buffer.from(`${USERNAME}:${cleanAppPass}`).toString('base64');

    console.log(`🔍 Testing read-only connection to ${WP_URL}...`);
    console.log(`👤 User: ${USERNAME}`);

    try {
        const response = await fetch(`${WP_URL}/wp-json/wp/v2/users/me?context=edit`, {
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
            console.log("🎉 CONNECTION & PERMISSIONS VERIFIED!");
            console.log(`User ID: ${data.id}`);
            console.log(`Display Name: ${data.name}`);
            console.log(`Username Slug: ${data.slug}`);
            console.log(`Roles: ${JSON.stringify(data.roles)}`);
            console.log(`Capabilities: ${Object.keys(data.capabilities || {}).length} capabilities granted`);
            console.log("=========================================\n");
            return true;
        } else {
            console.log(`\n❌ Status Code: ${status}`);
            console.log("Response:", JSON.stringify(data, null, 2));
            return false;
        }
    } catch (err) {
        console.log(`\n❌ Network Error: ${err.message}`);
        return false;
    }
}

verifyConnectionAndPermissions();
