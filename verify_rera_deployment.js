const fs = require('fs');

async function verifyAll() {
    console.log("🔍 Verifying 5 RERA Programmatic Pages & Redirects...\n");

    const pages = [
        "https://nufca.com/rera-audit-uae/",
        "https://nufca.com/rera-audit-uae/dubai/",
        "https://nufca.com/rera-audit-uae/gold-souk-dubai/",
        "https://nufca.com/rera-audit-uae/abu-dhabi/",
        "https://nufca.com/rera-audit-uae/sharjah/"
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
        "https://nufca.com/services/rera-audit-consultancy",
        "https://nufca.com/service/rera-audit",
        "https://nufca.com/rera-audit-consultancy"
    ];

    for (const url of oldUrls) {
        const res = await fetch(url, { redirect: "manual", headers: { "User-Agent": "Mozilla/5.0" } });
        console.log(`  [${res.status}] ${url} -> Location: ${res.headers.get("location")}`);
    }

    console.log("\n3. Megamenu Link Verification:");
    const homeRes = await fetch("https://nufca.com/?nocache=" + Date.now());
    const homeHtml = await homeRes.text();
    console.log("  Megamenu contains /rera-audit-uae/:", homeHtml.includes("/rera-audit-uae/"));

    console.log("\n🎉 ALL RERA VERIFICATION CHECKS COMPLETED!");
}

verifyAll();
