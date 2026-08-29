const fs = require('fs');
const html = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/frontend_check.html', 'utf8');

const navMatch = html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/);
if(navMatch) {
    console.log(navMatch[0].substring(0, 1000));
}
