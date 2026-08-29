const WP_URL = "https://nufca.com";
const USERNAME = "SHyami9413";
const APP_PASS = "3EjzfiqObu4aFw3VOMY0wORy";

async function testHeaderPassing() {
    const creds = Buffer.from(`${USERNAME}:${APP_PASS}`).toString('base64');
    
    console.log("Testing Authorization variants...");

    // Test 1: Standard Authorization Header
    let r1 = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
        headers: { 'Authorization': `Basic ${creds}` }
    });
    console.log("1. Standard Authorization Header:", r1.status);

    // Test 2: Lowercase authorization
    let r2 = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
        headers: { 'authorization': `Basic ${creds}` }
    });
    console.log("2. Lowercase authorization:", r2.status);

    // Test 3: X-HTTP-Authorization
    let r3 = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
        headers: { 'X-HTTP-Authorization': `Basic ${creds}` }
    });
    console.log("3. X-HTTP-Authorization:", r3.status);
}

testHeaderPassing();
