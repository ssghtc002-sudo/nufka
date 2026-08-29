const WP_URL = "https://nufca.com";
const APP_PASSWORD = "3Ejz fiqO bu4a Fw3V OMY0 wORy";

// Usernames to test
const candidates = [
    "$#@SHyami9413",
    "SHyami9413",
    "shyami9413",
    "SHyami",
    "shyami",
    "admin"
];

async function checkPublicUsers() {
    console.log("Checking public users REST endpoint...");
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/users`);
        if (res.ok) {
            const users = await res.json();
            console.log("Public Users Found:", users.map(u => ({ id: u.id, name: u.name, slug: u.slug })));
            return users;
        } else {
            console.log("Public users endpoint response status:", res.status);
        }
    } catch (e) {
        console.log("Public users check error:", e.message);
    }
    return [];
}

async function testAuth(username) {
    const cleanPass = APP_PASSWORD.replace(/\s+/g, '');
    const credentials = Buffer.from(`${username}:${cleanPass}`).toString('base64');
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
            headers: {
                'Authorization': `Basic ${credentials}`,
                'User-Agent': 'WordPress-Connector/1.0'
            }
        });
        console.log(`Username: "${username}" -> Status: ${res.status}`);
        if (res.ok) {
            const data = await res.json();
            console.log(" SUCCESS! User profile:", data);
            return true;
        }
    } catch (e) {
        console.log(`Error testing "${username}": ${e.message}`);
    }
    return false;
}

async function run() {
    const publicUsers = await checkPublicUsers();
    
    // Add any slugs found from public users to candidates
    publicUsers.forEach(u => {
        if (!candidates.includes(u.slug)) candidates.push(u.slug);
    });

    console.log("\nTesting authentication candidates...");
    for (const user of candidates) {
        const success = await testAuth(user);
        if (success) {
            console.log(`\n🎉 WORKING USERNAME IS: "${user}"`);
            break;
        }
    }
}

run();
