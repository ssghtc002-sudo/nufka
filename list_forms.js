const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\menu_loc_form.html', 'utf-8');

const forms = [...html.matchAll(/<form[\s\S]*?<\/form>/gi)];
console.log(`Found ${forms.length} forms in menu_loc_form.html:`);
forms.forEach((f, idx) => {
    const idMatch = f[0].match(/id="([^"]+)"/);
    const actionMatch = f[0].match(/action="([^"]+)"/);
    console.log(`Form ${idx + 1}: ID=${idMatch ? idMatch[1] : 'none'}, Action=${actionMatch ? actionMatch[1] : 'none'}`);
});
