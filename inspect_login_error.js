const fs = require('fs');

const loginUrl = "https://nufca.com/dxb";
const username = "umendra@nufca.com";
const password = "N&HZwY3ieWkdOs&g^";

async function inspectLoginError() {
    const body = new URLSearchParams();
    body.append("log", username);
    body.append("pwd", password);
    body.append("wp-submit", "Log In");
    body.append("redirect_to", "https://nufca.com/wp-admin/");
    body.append("testcookie", "1");

    const res = await fetch(loginUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": "wordpress_test_cookie=WP%20Cookie%20check",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        body: body.toString()
    });

    const text = await res.text();
    console.log("Status:", res.status);
    
    // Look for div id="login_error" or error elements
    const match = text.match(/<div id="login_error">([\s\S]*?)<\/div>/i);
    if (match) {
        console.log("⚠️ LOGIN ERROR:", match[1].replace(/<[^>]+>/g, '').trim());
    } else {
        console.log("No explicit login_error div found.");
        // print inputs or forms on page
        const forms = text.match(/<form[\s\S]*?<\/form>/gi);
        if (forms) {
            console.log("Form HTML snippet:", forms[0].substring(0, 800));
        }
    }
}

inspectLoginError();
