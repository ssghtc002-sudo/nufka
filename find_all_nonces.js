const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\primary_menu_95.html', 'utf-8');

// Find all hidden inputs
const matches = [...html.matchAll(/<input[^>]*type="hidden"[^>]*name="([^"]+)"[^>]*value="([^"]*)"/gi)];
console.log("Hidden inputs in nav-menus.php:");
matches.forEach(m => {
    console.log(`Name: ${m[1]} | Value: ${m[2]}`);
});

// Find forms
const forms = [...html.matchAll(/<form[^>]*id="([^"]+)"[^>]*action="([^"]*)"/gi)];
console.log("\nForms on page:");
forms.forEach(f => console.log(`Form ID: ${f[1]} | Action: ${f[2]}`));
