const RAW_PASS = "5ych pKMl j8D1 4gF2 OmmR 3ELc";
const CLEAN_PASS = RAW_PASS.replace(/\s+/g, '');

const usernames = [
    "SHyami9413",
    "$#@SHyami9413",
    "shyami9413"
];

async function testUrlAuth(user) {
    const creds = Buffer.from(`${user}:${CLEAN_PASS}`).toString('base64');
    
    // Method A: Authorization Header
    try {
        let res = await fetch("https://nufca.com/wp-json/wp/v2/users/me", {
            headers: {
                'Authorization': `Basic ${creds}`
            }
        });
        console.log(`Method A (Header) for "${user}": Status ${res.status}`);
        if (res.ok) {
            const data = await res.json();
            console.log("🎉 SUCCESS!", data);
            return true;
        }
    } catch(e) {}

    // Method B: URL Embedded Basic Auth
    try {
        let encodedUser = encodeURIComponent(user);
        let url = `https://${encodedUser}:${CLEAN_PASS}@nufca.com/wp-json/wp/v2/users/me`;
        let res = await fetch(url);
        console.log(`Method B (URL Auth) for "${user}": Status ${res.status}`);
        if (res.ok) {
            const data = await res.json();
            console.log("🎉 SUCCESS!", data);
            return true;
        }
    } catch(e) {}

    return false;
}

async function run() {
    for (const u of usernames) {
        let ok = await testUrlAuth(u);
        if (ok) break;
    }
}

run();
