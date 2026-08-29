const WP_URL = "https://nufca.com";
const RAW_PASS = "GORK XC6d MhAe fKrn k3h5 DKA6";
const CLEAN_PASS = RAW_PASS.replace(/\s+/g, '');

const usernames = ["nufka", "Nufka", "NUFKA", "nufca"];

async function testUserReadOnly(user) {
    const creds = Buffer.from(`${user}:${CLEAN_PASS}`).toString('base64');
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${creds}`,
                'User-Agent': 'WordPress-Connector/1.0'
            }
        });
        console.log(`Username "${user}" -> Status ${res.status}`);
        if (res.ok) {
            const data = await res.json();
            console.log("🎉 SUCCESS!", { id: data.id, name: data.name, slug: data.slug });
            return true;
        }
    } catch(e) {
        console.log(`Error testing ${user}:`, e.message);
    }
    return false;
}

async function run() {
    console.log("Read-only test across username cases...\n");
    for (const u of usernames) {
        const ok = await testUserReadOnly(u);
        if (ok) break;
    }
}

run();
