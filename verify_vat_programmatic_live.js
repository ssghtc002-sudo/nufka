async function verifyVatLive() {
    console.log("🌐 Verifying new Programmatic VAT pages on live site...\n");

    const urls = [
        "https://nufca.com/vat-consultancy-in-uae/",
        "https://nufca.com/vat-consultancy-in-uae/dubai/",
        "https://nufca.com/vat-consultancy-in-uae/gold-souk-dubai/",
        "https://nufca.com/vat-consultancy-in-uae/abu-dhabi/",
        "https://nufca.com/vat-consultancy-in-uae/sharjah/"
    ];

    for (const u of urls) {
        const res = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0" } });
        console.log(`URL: ${u}`);
        console.log(`  --> Status: ${res.status}`);
        const html = await res.text();
        console.log(`  --> Length: ${html.length} chars`);
        console.log(`  --> Has Filter Bar: ${html.includes('Filter Location:')}`);
        console.log(`  --> Has Hero Title: ${html.includes('VAT Consultancy Services in')}`);
        console.log(`  --> Has Penalties Table: ${html.includes('Cabinet Decision No. 129 of 2025')}`);
        console.log("---");
    }

    console.log("Checking 301 Redirect for Old URL...");
    const oldUrl = "https://nufca.com/services/vat-consultancy-services";
    const oldRes = await fetch(oldUrl, { redirect: "manual" });
    console.log(`Old URL: ${oldUrl}`);
    console.log(`  --> Status: ${oldRes.status} | Redirect Location: ${oldRes.headers.get("location")}`);
}

verifyVatLive();
