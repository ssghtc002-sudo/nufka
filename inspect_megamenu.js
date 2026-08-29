const fs = require('fs');

async function inspectMegamenu() {
    const res = await fetch('https://nufca.com/?nocache=' + Date.now());
    const html = await res.text();
    const matches = [...html.matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
    const auditLinks = matches.filter(m => m[1].includes('audit') || m[2].toLowerCase().includes('audit'));
    console.log("Audit Links on Live Homepage:\n", auditLinks.map(m => `[${m[2].replace(/<[^>]+>/g, '').trim()}] -> ${m[1]}`));
}

inspectMegamenu();
