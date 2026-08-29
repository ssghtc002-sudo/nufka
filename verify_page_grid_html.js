const fs = require('fs');

async function verifyPage() {
    console.log("🌐 Fetching updated page https://nufca.com/corporate-tax-in-uae/ ...");

    const res = await fetch("https://nufca.com/corporate-tax-in-uae/", {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\main_page_updated.html', html, 'utf-8');

    const containsGrid = html.includes('nufca-loc-grid');
    console.log("Contains nufca-loc-grid:", containsGrid);
}

verifyPage();
