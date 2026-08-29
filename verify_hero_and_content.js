const fs = require('fs');

async function verifyPageSections() {
    console.log("🌐 Fetching live page https://nufca.com/corporate-tax-in-uae/ ...");

    const res = await fetch("https://nufca.com/corporate-tax-in-uae/", {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\current_live_page.html', html, 'utf-8');

    console.log("\n🔍 SECTION VERIFICATION CHECKLIST:");
    console.log("1. Hero Section (<div class=\"nufca-hero\">):", html.includes('nufca-hero'));
    console.log("2. Hero H1 Title:", html.includes('Corporate Tax Consultants in UAE'));
    console.log("3. Branch Bar / Address:", html.includes('nufca-branch-bar'));
    console.log("4. Filter Location Dropdown:", html.includes('nufca-filter-bar'));
    console.log("5. Lead Form (<div class=\"nufca-form-card\">):", html.includes('nufca-form-card'));
    console.log("6. Main Content Sections:", html.includes('Federal Decree-Law No. 47 of 2022'));
    console.log("7. Closing CTA (<div class=\"nufca-cta-footer\">):", html.includes('nufca-cta-footer'));

    // Print snippet of Hero Section
    const heroMatch = html.match(/<div class="nufca-hero">[\s\S]*?<\/div>\s*<\/div>/i) || html.match(/<div class="nufca-hero">[\s\S]*?<\/div>/i);
    if (heroMatch) {
        console.log("\nHero Section HTML Snippet:\n", heroMatch[0].substring(0, 600));
    } else {
        console.log("\n⚠️ HERO SECTION NOT FOUND IN RENDERED HTML!");
    }
}

verifyPageSections();
