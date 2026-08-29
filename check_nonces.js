const fs = require('fs');
const html = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/locations.html', 'utf8');
const nonces = [...html.matchAll(/name="([^"]*nonce[^"]*)"[^>]*value="([^"]*)"/ig)];
nonces.forEach(n => console.log(n[1], '=', n[2]));
