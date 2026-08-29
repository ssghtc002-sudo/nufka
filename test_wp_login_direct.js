const fs = require('fs');

const loginUrl = "https://nufca.com/wp-login.php";
const username = "umendra@nufca.com";
const password = "N&HZwY3ieWkdOs&g^";

async function loginToWordPressDirect() {
    console.log(`🔐 Logging into: ${loginUrl}...`);

    const body = new URLSearchParams();
    body.append("log", username);
    body.append("pwd", password);
    body.append("wp-submit", "Log In");
    body.append("redirect_to", "https://nufca.com/wp-admin/");
    body.append("testcookie", "1");

    try {
        const response = await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cookie": "wordpress_test_cookie=WP%20Cookie%20check",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            body: body.toString(),
            redirect: "manual"
        });

        console.log("Status:", response.status);
        const setCookieHeader = response.headers.getSetCookie ? response.headers.getSetCookie() : [response.headers.get('set-cookie')];
        console.log("Set-Cookie Headers:", setCookieHeader);
        console.log("Redirect Location:", response.headers.get("location"));

        if (response.status === 302) {
            console.log("\n🎉 SUCCESS! Logged into WP Admin! Captured Cookies.");
            const cookiesStr = setCookieHeader.map(c => c.split(';')[0]).join('; ');
            fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', cookiesStr, 'utf-8');
            return cookiesStr;
        } else {
            const html = await response.text();
            console.log("Snippet:", html.substring(0, 500));
        }
    } catch (err) {
        console.error("❌ Error during login:", err.message);
    }
}

loginToWordPressDirect();
