const fs = require('fs');

async function verifyAll() {
    console.log("🔍 Verifying 5 FTA VAT Audit Programmatic Pages & Redirects...\n");

    const pages = [
        "https://nufca.com/fta-vat-audit-assistance-uae/",
        "https://nufca.com/fta-vat-audit-assistance-uae/dubai/",
        "https://nufca.com/fta-vat-audit-assistance-uae/gold-souk-dubai/",
        "https://nufca.com/fta-vat-audit-assistance-uae/abu-dhabi/",
        "https://nufca.com/fta-vat-audit-assistance-uae/sharjah/"
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
        "https://nufca.com/services/fta-vat-audit-assistance",
        "https://nufca.com/service/fta-vat-audit-assistance",
        "https://nufca.com/fta-vat-audit-assistance"
    ];

    for (const url of oldUrls) {
        const res = await fetch(url, { redirect: "manual", headers: { "User-Agent": "Mozilla/5.0" } });
        console.log(`  [${res.status}] ${url} -> Location: ${res.headers.get("location")}`);
    }

    console.log("\n3. Megamenu Link Verification:");
    const homeRes = await fetch("https://nufca.com/?nocache=" + Date.now());
    const homeHtml = await homeRes.text();
    console.log("  Megamenu contains /fta-vat-audit-assistance-uae/:", homeHtml.includes("/fta-vat-audit-assistance-uae/"));

    console.log("\n🎉 ALL FTA VAT AUDIT VERIFICATION CHECKS COMPLETED!");
}

verifyAll();
