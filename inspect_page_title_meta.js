const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function inspectPostMetaHtml() {
    console.log("🔍 Fetching edit page HTML for Page ID 99146 to check page title setting...");

    const res = await fetch("https://nufca.com/wp-admin/post.php?post=99146&action=edit", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\page99146_edit.html', html, 'utf-8');

    const titleMatches = [...html.matchAll(/name="([^"]*title[^"]*)"[^>]*value="([^"]*)"/gi)];
    console.log("Title Meta Fields found:");
    titleMatches.forEach(m => console.log(`  --> ${m[1]} = ${m[2]}`));

    const selectMatches = [...html.matchAll(/<select[^>]*name="([^"]*title[^"]*)"[\s\S]*?<\/select>/gi)];
    console.log("Title Select Fields found:");
    selectMatches.forEach(s => console.log(`  --> ${s[1]}`));
}

inspectPostMetaHtml();
