const fs = require('fs');

async function verifyAll() {
    console.log("🔍 Verifying 5 Internal Audit Programmatic Pages & Redirects...\n");

    const pages = [
        "https://nufca.com/internal-audit-uae/",
        "https://nufca.com/internal-audit-uae/dubai/",
        "https://nufca.com/internal-audit-uae/gold-souk-dubai/",
        "https://nufca.com/internal-audit-uae/abu-dhabi/",
        "https://nufca.com/internal-audit-uae/sharjah/"
    ];

    console.log("1. Live Page Verification:");
    for (const url of pages) {
        const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        const html = await res.text();
        const hasTitleHidden = html.includes('custom_pagetitle') || !html.includes('<section class="ct-page-title');
        console.log(`  [${res.status}] ${url}`);
        console.log(`      -> H1: ${html.includes('<h1') ? 'YES' : 'NO'} | Filter Bar: ${html.includes('nufca-filter-bar') ? 'YES' : 'NO'}`);
    }

    console.log("\n2. 301 Redirect Verification:");
    const oldUrls = [
        "https://nufca.com/internal-audit-system-review",
        "https://nufca.com/services/internal-audit-system-review",
        "https://nufca.com/internal-audit-services"
    ];

    for (const url of oldUrls) {
        const res = await fetch(url, { redirect: "manual", headers: { "User-Agent": "Mozilla/5.0" } });
        console.log(`  [${res.status}] ${url} -> Location: ${res.headers.get("location")}`);
    }

    console.log("\n🎉 ALL VERIFICATION CHECKS COMPLETED!");
}

verifyAll();
