const fs = require('fs');
async function check() {
    const res = await fetch('https://nufca.com/audit-assurance-uae/?nocache=123');
    const html = await res.text();
    const cssMatch = html.match(/post-5137\.css/);
    console.log('CSS 5137 exists?', cssMatch ? 'YES' : 'NO');
    const elementorData = html.match(/data-elementor-type="ct-mega-menu"/);
    console.log('Elementor Megamenu HTML exists?', elementorData ? 'YES' : 'NO');
}
check();
