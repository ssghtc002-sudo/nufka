const fs = require('fs');
async function checkEle(url) {
    const res = await fetch(url);
    const html = await res.text();
    console.log(url, 'frontend.min.css:', html.includes('frontend.min.css') ? 'YES' : 'NO');
    console.log(url, 'elementor-frontend-css:', html.includes('id="elementor-frontend-css"') ? 'YES' : 'NO');
}
async function check() {
    await checkEle('https://nufca.com/vat-consultancy-in-uae/');
    await checkEle('https://nufca.com/audit-assurance-uae/');
}
check();
