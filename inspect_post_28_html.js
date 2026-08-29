const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function inspectPost28() {
    console.log("🔍 Fetching post 28 edit HTML...");

    const res = await fetch("https://nufca.com/wp-admin/post.php?post=28&action=edit", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    console.log("Status:", res.status);
    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\post28_edit.html', html, 'utf-8');

    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    console.log("Page Title:", titleMatch ? titleMatch[1] : "none");

    const links = [...html.matchAll(/href="([^"]*action=[^"]*)"/gi)];
    console.log("Action Links:");
    links.slice(0, 10).forEach(l => console.log(`  --> ${l[1]}`));
}

inspectPost28();
