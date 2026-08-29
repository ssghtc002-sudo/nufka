const WP_URL = "https://nufca.com";
const USERNAME = "nufka";
const APP_PASSWORD = "GORK XC6d MhAe fKrn k3h5 DKA6";

async function testMe() {
    const cleanAppPass = APP_PASSWORD.replace(/\s+/g, '');
    const credentials = Buffer.from(`${USERNAME}:${cleanAppPass}`).toString('base64');

    console.log(`Checking /wp-json/wp/v2/users/me for '${USERNAME}'...`);

    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me?context=edit`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json',
                'User-Agent': 'WordPress-Connector/1.0'
            }
        });

        console.log(`Status: ${res.status}`);
        const data = await res.json();
        console.log("User Profile Response:", JSON.stringify(data, null, 2));
    } catch(e) {
        console.log("Error:", e.message);
    }
}

testMe();
