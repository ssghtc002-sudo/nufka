const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\post28_edit.html', 'utf-8');

const matches = [...html.matchAll(/trash[^"'>]*/gi)];
console.log("Matches:", matches.map(m => m[0]));

const nonces = [...html.matchAll(/_wpnonce=([a-f0-9]+)/gi)];
console.log("Nonces:", nonces.map(n => n[0]));
