const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function findCompanyFormation() {
    console.log("🔍 Searching edit.php?post_type=service for 'Company Formation'...");

    const res = await fetch("https://nufca.com/wp-admin/edit.php?post_type=service&s=Company+Formation", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    const trashMatches = [...html.matchAll(/href="([^"]*action=trash[^"]*)"/gi)];
    console.log(`Trash Links Found for 'Company Formation': ${trashMatches.length}`);

    for (const m of trashMatches) {
        let trashUrl = m[1].replace(/&amp;/g, '&');
        if (trashUrl.startsWith('/')) trashUrl = "https://nufca.com" + trashUrl;

        console.log(`Executing Trash URL: ${trashUrl}`);
        const delRes = await fetch(trashUrl, {
            headers: {
                "Cookie": cookies,
                "User-Agent": "Mozilla/5.0"
            },
            redirect: "manual"
        });

        console.log(`  --> Trash Response Status: ${delRes.status} | Location: ${delRes.headers.get("location")}`);
    }
}

findCompanyFormation();
