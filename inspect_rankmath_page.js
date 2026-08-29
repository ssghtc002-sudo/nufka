const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function inspectRankMath() {
    console.log("🔍 Fetching Rank Math Redirections page in WP Admin...");

    const res = await fetch("https://nufca.com/wp-admin/admin.php?page=rank-math-redirections", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\rankmath_page.html', html, 'utf-8');
    console.log("Status:", res.status);

    const nonceMatch = html.match(/id="_wpnonce" name="_wpnonce" value="([^"]+)"/) || html.match(/name="security" value="([^"]+)"/) || html.match(/rankMath = [^;]*"security":"([^"]+)"/);
    console.log("Rank Math Nonce:", nonceMatch ? nonceMatch[1] : "none");

    const forms = [...html.matchAll(/<form[^>]*action="([^"]*)"[^>]*>/gi)];
    console.log("Form Actions:");
    forms.forEach(f => console.log(`  --> ${f[1]}`));
}

inspectRankMath();
