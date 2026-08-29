const WP_URL = "https://nufca.com";
const RAW_PASS = "3Ejz fiqO bu4a Fw3V OMY0 wORy";

const usernames = [
    "$#@SHyami9413",
    "SHyami9413",
    "shyami9413",
    "SHyami",
    "shyami",
    "shyami9413@gmail.com"
];

const passwords = [
    RAW_PASS,                         // "3Ejz fiqO bu4a Fw3V OMY0 wORy"
    RAW_PASS.replace(/\s+/g, ""),      // "3EjzfiqObu4aFw3VOMY0wORy"
    RAW_PASS.trim()
];

async function testCombination(u, p) {
    const creds = Buffer.from(`${u}:${p}`).toString('base64');
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${creds}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        });
        
        if (res.ok) {
            const data = await res.json();
            return { success: true, user: u, pass: p, data };
        } else {
            const text = await res.text();
            return { success: false, status: res.status, user: u, pass: p, msg: text };
        }
    } catch (e) {
        return { success: false, error: e.message, user: u, pass: p };
    }
}

async function main() {
    console.log("Starting comprehensive auth test...\n");
    for (const u of usernames) {
        for (const p of passwords) {
            const result = await testCombination(u, p);
            if (result.success) {
                console.log("=========================================");
                console.log("🎉 SUCCESSFUL CONNECTION FOUND!");
                console.log(`Username: "${result.user}"`);
                console.log(`Password format: "${result.pass}"`);
                console.log("User details:", JSON.stringify(result.data, null, 2));
                console.log("=========================================");
                return;
            } else {
                console.log(`Failed: User "${u}" | Pass "${result.pass.substring(0, 8)}..." | Status: ${result.status}`);
            }
        }
    }
    console.log("\n❌ None of the tested username/password combinations succeeded.");
}

main();
