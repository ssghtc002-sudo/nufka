async function inspectLiveHeader() {
    console.log("🔍 Fetching live header HTML from https://nufca.com/ ...");

    const res = await fetch("https://nufca.com/", {
        headers: { "User-Agent": "Mozilla/5.0" }
    });

    const html = await res.text();
    const navMatch = html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/i) || html.match(/<ul[^>]*class="[^"]*menu[^"]*"[^>]*>([\s\S]*?)<\/ul>/i);

    console.log("Navigation HTML snippet:");
    if (navMatch) {
        console.log(navMatch[0].substring(0, 3000));
    } else {
        console.log("Nav snippet not found in regex, searching for 'corporate-tax' or 'vat' links...");
        const links = [...html.matchAll(/href="([^"]*)"[^>]*>([^<]*)</gi)];
        links.filter(l => l[1].includes('tax') || l[1].includes('vat') || l[1].includes('services')).forEach(l => console.log(`  --> ${l[1]} | Text: ${l[2]}`));
    }
}

inspectLiveHeader();
