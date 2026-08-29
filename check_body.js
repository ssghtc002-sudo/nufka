const fs = require('fs');
async function checkBody(url) {
    const res = await fetch(url);
    const html = await res.text();
    const bodyMatch = html.match(/<body[^>]*class="([^"]*)"/);
    console.log(url, 'Body Classes:', bodyMatch ? bodyMatch[1] : 'none');
}
async function check() {
    await checkBody('https://nufca.com/vat-consultancy-in-uae/');
    await checkBody('https://nufca.com/audit-assurance-uae/');
}
check();
