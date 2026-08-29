const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function getServicesListHTML() {
    console.log("🔍 Fetching WP Admin Services list page (edit.php?post_type=service)...");

    const res = await fetch("https://nufca.com/wp-admin/edit.php?post_type=service", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    console.log("Status:", res.status);
    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\services_list.html', html, 'utf-8');

    const trashLinks = [...html.matchAll(/href="([^"]*action=trash[^"]*)"/gi)];
    console.log("Found Trash Links:");
    trashLinks.forEach(l => console.log(`  --> ${l[1]}`));
}

getServicesListHTML();
