const endpoints = [
    "https://nufca.com/wp-login.php/",
    "https://nufca.com/wp-login.php",
    "https://nufca.com/wp-admin/wp-login.php",
    "https://nufca.com/login/",
    "https://nufca.com/admin/",
    "https://nufca.com/wp-admin/"
];

const username = "umendra@nufca.com";
const password = "N&HZwY3ieWkdOs&g^";

async function checkEndpoints() {
    for (const url of endpoints) {
        try {
            const body = new URLSearchParams();
            body.append("log", username);
            body.append("pwd", password);
            body.append("wp-submit", "Log In");

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Cookie": "wordpress_test_cookie=WP%20Cookie%20check",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                },
                redirect: "manual"
            });

            console.log(`URL: ${url} | Status: ${res.status} | Location: ${res.headers.get("location") || "none"}`);
            const cookies = res.headers.getSetCookie ? res.headers.getSetCookie() : [];
            if (cookies.length > 0) {
                console.log("--> Got Cookies:", cookies);
            }
        } catch (e) {
            console.log(`URL: ${url} | Error: ${e.message}`);
        }
    }
}

checkEndpoints();
