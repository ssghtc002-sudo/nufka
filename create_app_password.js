const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function createAppPassword() {
    console.log("⚙️ Creating Application Password via WP Admin Session...");

    const pageRes = await fetch("https://nufca.com/wp-admin/profile.php", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await pageRes.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\profile_page.html', html, 'utf-8');

    const nonceMatch = html.match(/id="new_application_password_nonce"\s+value="([^"]+)"/) || html.match(/name="_wpnonce"\s+value="([^"]+)"/);
    console.log("Profile Nonce:", nonceMatch ? nonceMatch[1] : "none");

    if (nonceMatch) {
        const body = new URLSearchParams();
        body.append("action", "create_new_application_password");
        body.append("new_application_password_name", "Antigravity_Auto_Menu");
        body.append("new_application_password_nonce", nonceMatch[1]);

        const postRes = await fetch("https://nufca.com/wp-admin/admin-ajax.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cookie": cookies,
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            },
            body: body.toString()
        });

        console.log("Create App Pass Status:", postRes.status);
        const data = await postRes.json();
        console.log("Response:", JSON.stringify(data, null, 2));

        if (data.success && data.data && data.data.password) {
            console.log("🔑 GENERATED APPLICATION PASSWORD:", data.data.password);
            fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\app_password.txt', data.data.password, 'utf-8');
        }
    }
}

createAppPassword();
