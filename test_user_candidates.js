const WP_URL = "https://nufca.com";
const RAW_PASS = "5ych pKMl j8D1 4gF2 OmmR 3ELc";

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
    "contact@nufca.com",
    "support@nufca.com",
    "sales@nufca.com"
];

async function testUser(username) {
    const cleanPass = RAW_PASS.replace(/\s+/g, '');
    const creds = Buffer.from(`${username}:${cleanPass}`).toString('base64');

    const res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
        headers: {
            'Authorization': `Basic ${creds}`,
            'User-Agent': 'WordPress-Connector/1.0'
        }
    });

    if (res.ok) {
        const data = await res.json();
        return { success: true, username, data };
    }
    return { success: false, status: res.status, username };
}

async function run() {
    console.log("Testing user list against new App Password...\n");
    for (const u of candidateUsernames) {
        const res = await testUser(u);
        if (res.success) {
            console.log("=========================================");
            console.log(`🎉 SUCCESS! WordPress User: "${res.username}"`);
            console.log("User Profile:", res.data);
            console.log("=========================================");
            return;
        } else {
            console.log(`User: "${u}" -> Status: ${res.status}`);
        }
    }
    console.log("\n❌ All username candidates returned 401.");
}

run();
