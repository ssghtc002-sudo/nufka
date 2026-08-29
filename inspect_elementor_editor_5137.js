const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function inspectElementorEditor() {
    console.log("🔍 Fetching Elementor Editor screen for Post 5137...");

    const res = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=elementor", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    console.log("Status:", res.status);
    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_editor_5137.html', html, 'utf-8');

    const configMatch = html.match(/window\.elementorFrontendConfig\s*=\s*({[\s\S]*?});/i) || html.match(/ElementorConfig\s*=\s*({[\s\S]*?});/i);
    console.log("ElementorConfig found:", !!configMatch);

    const nonceMatch = html.match(/"nonces":({[^}]+})/);
    console.log("Nonces:", nonceMatch ? nonceMatch[1] : "none");
}

inspectElementorEditor();
