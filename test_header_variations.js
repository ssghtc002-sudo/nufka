const WP_URL = "https://nufca.com";
const RAW_PASS = "GORK XC6d MhAe fKrn k3h5 DKA6";
const CLEAN_PASS = RAW_PASS.replace(/\s+/g, '');

const usernames = [
    "SHyami9413",
    "$#@SHyami9413",
    "shyami9413",
    "admin"
];

async function testHeader(user, pass, headerName) {
    const creds = Buffer.from(`${user}:${pass}`).toString('base64');
    const headers = {};
    headers[headerName] = `Basic ${creds}`;
    headers['User-Agent'] = 'Mozilla/5.0';

    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, { headers });
        console.log(`User "${user}" | Header "${headerName}" -> Status: ${res.status}`);
        if (res.ok) {
            const data = await res.json();
            console.log("🎉 SUCCESS!", data);
            return true;
        }
    } catch(e) {
        console.log(`Error: ${e.message}`);
    }
    return false;
}

async function run() {
    console.log("Testing header variations for Application Password...\n");
    const headerNames = [
        "Authorization",
        "authorization",
        "X-HTTP-Authorization",
        "X-Authorization",
        "REDIRECT_HTTP_AUTHORIZATION"
    ];

    for (const u of usernames) {
        for (const h of headerNames) {
            const ok = await testHeader(u, CLEAN_PASS, h);
            if (ok) return;
        }
    }
    console.log("\n❌ All header variations returned 401.");
}

run();
