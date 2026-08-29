const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();
const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\menu_loc_form.html', 'utf-8');

// Find form with name nav-menu-theme-locations
const match = html.match(/<form[^>]*id="nav-menu-theme-locations"[\s\S]*?<\/form>/i);
if (match) {
    console.log("Found nav-menu-theme-locations form!");
    const formHtml = match[0];
    const action = formHtml.match(/action="([^"]*)"/)[1];
    const inputs = [...formHtml.matchAll(/<input[^>]*name="([^"]+)"[^>]*value="([^"]*)"/gi)];
    console.log("Action:", action);
    inputs.forEach(i => console.log(`Input: ${i[1]} = ${i[2]}`));

    // Extract selects
    const selects = [...formHtml.matchAll(/<select[^>]*name="([^"]+)"/gi)];
    selects.forEach(s => console.log("Select:", s[1]));
} else {
    console.log("Form nav-menu-theme-locations not found in html!");
}
