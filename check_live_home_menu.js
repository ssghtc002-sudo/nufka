const fs = require('fs');

async function checkLiveHomeMenu() {
    console.log("🌐 Fetching live homepage https://nufca.com/ ...");
    const res = await fetch("https://nufca.com/", {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\live_home.html', html, 'utf-8');

    // Extract nav menu items
    const navMatch = html.match(/<nav[\s\S]*?<\/nav>/gi) || html.match(/class="[^"]*menu[^"]*"[\s\S]*?<\/ul>/gi);
    console.log("Nav HTML snippet:");
    if (navMatch) {
        console.log(navMatch[0].substring(0, 1000));
    } else {
        console.log("Nav element not found.");
    }
}

checkLiveHomeMenu();
