const fs = require('fs');

async function checkFrontend() {
    console.log("Fetching frontend menu HTML...");
    const res = await fetch("https://nufca.com/");
    const html = await res.text();
    fs.writeFileSync("c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\frontend_check.html", html, "utf-8");
    console.log("Saved to frontend_check.html. Length:", html.length);
}

checkFrontend();
