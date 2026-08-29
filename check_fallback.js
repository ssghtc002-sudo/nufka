const fs = require('fs');
async function checkItem(url) {
    const res = await fetch(url);
    const html = await res.text();
    console.log(url, 'has fallback list?', html.includes('class="page_item'));
}
checkItem('https://nufca.com/audit-assurance-uae/');
checkItem('https://nufca.com/vat-consultancy-in-uae/');
