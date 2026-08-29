const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\profile_page.html', 'utf-8');

const matches = [...html.matchAll(/<input[^>]*name="([^"]+)"[^>]*value="([^"]*)"/gi)];
console.log("Hidden & Text Inputs on profile.php:");
matches.forEach(m => {
    if (m[1].includes('nonce') || m[1].includes('password') || m[1].includes('action')) {
        console.log(`Name: ${m[1]} | Value: ${m[2]}`);
    }
});
