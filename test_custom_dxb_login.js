const fs = require('fs');

const loginUrl = "https://nufca.com/dxb/";
const username = "umendra@nufca.com";
const password = "N&HZwY3ieWkdOs&g^";

async function loginToWordPressCustom() {
    console.log(`🔐 Logging into custom WP Admin URL: ${loginUrl}...`);

    const body = new URLSearchParams();
    body.append("log", username);
    body.append("pwd", password);
    body.append("wp-submit", "Log In");
    body.append("redirect_to", "https://nufca.com/wp-admin/");
    body.append("testcookie", "1");

    let cookies = ["wordpress_test_cookie=WP%20Cookie%20check"];

    try {
        let currentUrl = loginUrl;
        let method = "POST";
        let reqBody = body.toString();
        let headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        };

        for (let step = 0; step < 5; step++) {
            headers["Cookie"] = cookies.join("; ");
            
            const response = await fetch(currentUrl, {
                method: method,
                headers: headers,
                body: method === "POST" ? reqBody : undefined,
                redirect: "manual"
            });

            console.log(`Step ${step + 1} -> ${currentUrl} (Status: ${response.status})`);
            const location = response.headers.get("location");
            if (location) console.log(`   --> Redirect Location: ${location}`);

            const newCookies = response.headers.getSetCookie ? response.headers.getSetCookie() : [];
            newCookies.forEach(c => {
                const cookiePair = c.split(';')[0];
                cookies = cookies.filter(existing => !existing.startsWith(cookiePair.split('=')[0] + '='));
                cookies.push(cookiePair);
            });

            if (response.status === 301 || response.status === 302) {
                currentUrl = location;
                if (currentUrl.startsWith("/")) {
                    currentUrl = "https://nufca.com" + currentUrl;
                }
                method = "GET";
            } else {
                console.log("\n=========================================");
                console.log("Final Page Reached! Cookies:", cookies);
                const html = await response.text();
                if (html.includes("wp-admin-bar") || html.includes("Dashboard") || html.includes("howdy")) {
                    console.log("🎉 SUCCESS! Logged into WP Admin!");
                    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', cookies.join('; '), 'utf-8');
                } else {
                    console.log("HTML snippet:", html.substring(0, 500));
                }
                console.log("=========================================\n");
                break;
            }
        }
    } catch (err) {
        console.error("❌ Error during login:", err.message);
    }
}

loginToWordPressCustom();
