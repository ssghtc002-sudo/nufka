const WP_URL = "https://nufca.com";
const RAW_PASS = "5ych pKMl j8D1 4gF2 OmmR 3ELc";

const usernames = [
    "$#@SHyami9413",
    "SHyami9413",
    "shyami9413",
    "SHyami",
    "shyami",
    "nufka",
    "admin"
];

const passwords = [
    RAW_PASS,                         // "5ych pKMl j8D1 4gF2 OmmR 3ELc"
    RAW_PASS.replace(/\s+/g, ""),      // "5ychpKMlj8D14gF2OmmR3ELc"
];

async function testCombination(u, p) {
    const creds = Buffer.from(`${u}:${p}`).toString('base64');
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${creds}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0'
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
    console.log("Testing new Application Password across usernames...\n");
    for (const u of usernames) {
        for (const p of passwords) {
            const result = await testCombination(u, p);
            if (result.success) {
                console.log("=========================================");
                console.log("🎉 SUCCESSFUL CONNECTION FOUND!");
                console.log(`Username: "${result.user}"`);
                console.log(`Password format: "${result.pass}"`);
                console.log("User Profile Data:", JSON.stringify(result.data, null, 2));
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
