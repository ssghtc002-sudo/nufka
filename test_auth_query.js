const WP_URL = "https://nufca.com";
const USERNAME = "nufka";
const APP_PASSWORD = "GORK XC6d MhAe fKrn k3h5 DKA6";

async function testQueryParamAuth() {
    const cleanAppPass = APP_PASSWORD.replace(/\s+/g, '');
    const creds = Buffer.from(`${USERNAME}:${cleanAppPass}`).toString('base64');
    
    console.log("Testing auth query parameters and headers...");

    // Test 1: Query param _wp_http_authorization
    try {
        let res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me?_wp_http_authorization=Basic%20${creds}`);
        console.log("Query param _wp_http_authorization:", res.status);
    } catch(e) {}

    // Test 2: Custom Header X-WP-Authorization
    try {
        let res = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
            headers: { 'X-WP-Authorization': `Basic ${creds}` }
        });
        console.log("Header X-WP-Authorization:", res.status);
    } catch(e) {}

    // Test 3: Standard Basic Auth in URL
    try {
        let res = await fetch(`https://${USERNAME}:${cleanAppPass}@nufca.com/wp-json/wp/v2/users/me`);
        console.log("URL Basic Auth:", res.status);
    } catch(e) {}
}

testQueryParamAuth();
