const WP_URL = "https://nufca.com";
const RAW_PASS = "GORK XC6d MhAe fKrn k3h5 DKA6";

const candidateUsernames = [
    "$#@SHyami9413",
    "SHyami9413",
    "shyami9413",
    "SHyami",
    "shyami",
    "nufka",
    "nufca",
    "nufcaadmin",
    "nufca_admin",
    "admin",
    "administrator",
    "info@nufca.com",
    "contact@nufca.com"
];

const passwordVariants = [
    RAW_PASS,
    RAW_PASS.replace(/\s+/g, '')
];

async function testAuth(username, password) {
    const creds = Buffer.from(`${username}:${password}`).toString('base64');
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${creds}`,
                'Content-Type': 'application/json',
                'User-Agent': 'WordPress-Connector/1.0'
            }
        });

        if (res.ok) {
            const data = await res.json();
            return { success: true, username, password, data };
        } else {
            return { success: false, status: res.status, username };
        }
    } catch (e) {
        return { success: false, error: e.message, username };
    }
}

async function run() {
    console.log(`Testing new Application Password: "${RAW_PASS.substring(0, 9)}..."\n`);
    
    for (const user of candidateUsernames) {
        for (const pass of passwordVariants) {
            const res = await testAuth(user, pass);
            if (res.success) {
                console.log("=========================================");
                console.log("🎉 SUCCESSFUL WORDPRESS CONNECTION!");
                console.log(`Username: "${res.username}"`);
                console.log(`User ID: ${res.data.id}`);
                console.log(`Display Name: ${res.data.name}`);
                console.log(`Slug: ${res.data.slug}`);
                console.log("User Profile Data:", JSON.stringify(res.data, null, 2));
                console.log("=========================================");
                return;
            } else {
                console.log(`Failed for User "${user}" -> Status: ${res.status}`);
            }
        }
    }
    console.log("\n❌ All username candidates returned status 401.");
}

run();
