const fs = require('fs');

async function getFullResponse() {
    const body = new URLSearchParams();
    body.append("log", "umendra@nufca.com");
    body.append("pwd", "N&HZwY3ieWkdOs&g^");
    body.append("wp-submit", "Log In");
    body.append("redirect_to", "https://nufca.com/wp-admin/");
    body.append("testcookie", "1");

    const res = await fetch("https://nufca.com/dxb", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": "wordpress_test_cookie=WP%20Cookie%20check",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        body: body.toString()
    });

    const text = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\login_response.html', text, 'utf-8');
    
    // search for error string
    const match = text.match(/<div id="login_error">([\s\S]*?)<\/div>/i) || text.match(/class="message[^"]*">([\s\S]*?)<\/div>/i);
    if (match) {
        console.log("LOGIN MSG:", match[1].replace(/<[^>]+>/g, '').trim());
    } else {
        console.log("No specific error div found. Check login_response.html.");
    }
}

getFullResponse();
