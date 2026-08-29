const fs = require('fs');

async function verifyAll() {
    console.log("🔍 Verifying 5 Mollak Programmatic Pages & Redirects...\n");

    const pages = [
        "https://nufca.com/mollak-audit-services-uae/",
        "https://nufca.com/mollak-audit-services-uae/dubai/",
        "https://nufca.com/mollak-audit-services-uae/gold-souk-dubai/",
        "https://nufca.com/mollak-audit-services-uae/abu-dhabi/",
        "https://nufca.com/mollak-audit-services-uae/sharjah/"
    ];

    console.log("1. Live Page Verification:");
    for (const url of pages) {
        const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        const html = await res.text();
        console.log(`  [${res.status}] ${url}`);
        console.log(`      -> H1: ${html.includes('<h1') ? 'YES' : 'NO'} | Filter Bar: ${html.includes('nufca-filter-bar') ? 'YES' : 'NO'} | Schema: ${html.includes('AccountingService') ? 'YES' : 'NO'}`);
    }

    console.log("\n2. 301 Redirect Verification:");
    const oldUrls = [
        "https://nufca.com/services/mollak-services",
        "https://nufca.com/service/mollak-services",
        "https://nufca.com/mollak-services"
    ];

    for (const url of oldUrls) {
        const res = await fetch(url, { redirect: "manual", headers: { "User-Agent": "Mozilla/5.0" } });
        console.log(`  [${res.status}] ${url} -> Location: ${res.headers.get("location")}`);
    }

    console.log("\n🎉 ALL MOLLAK VERIFICATION CHECKS COMPLETED!");
}

verifyAll();
