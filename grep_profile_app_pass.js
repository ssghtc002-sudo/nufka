const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\profile_page.html', 'utf-8');

const matches = html.match(/application[_\-][^"'\s>]+/gi);
console.log("Matches:", matches ? [...new Set(matches)] : "none");

const nonces = html.match(/name="[^"]*nonce[^"]*"\s+value="([^"]+)"/gi);
console.log("Nonces:", nonces);
