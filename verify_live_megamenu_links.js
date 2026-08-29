async function verifyLiveMegamenuLinks() {
    console.log("🌐 Verifying live Megamenu links on https://nufca.com/ ...");

    const res = await fetch("https://nufca.com/", {
        headers: { "User-Agent": "Mozilla/5.0" }
    });

    const html = await res.text();

    const matches = [...html.matchAll(/href="([^"]*)"[^>]*>([^<]*)</gi)];
    console.log("Megamenu Links in Live Rendered Page:");
    matches.filter(m => m[1].includes('vat') || m[1].includes('tax')).forEach(m => console.log(`  --> URL: ${m[1]} | Text: ${m[2].trim()}`));
}

verifyLiveMegamenuLinks();
