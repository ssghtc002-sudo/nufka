const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function assignMenu() {
    const getRes = await fetch('https://nufca.com/wp-admin/nav-menus.php?action=locations', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await getRes.text();
    
    const formMatch = html.match(/<form[^>]*action="[^"]*action=locations"[^>]*>([\s\S]*?)<\/form>/);
    const formData = new URLSearchParams();
    
    const inputs = [...formMatch[1].matchAll(/<input[^>]+name="([^"]+)"[^>]*value="([^"]*)"/g)];
    inputs.forEach(i => formData.append(i[1], i[2]));
    
    formData.append('nav-menu-locations', 'Save Changes');
    formData.append('action', 'locations');
    
    const selects = [...html.matchAll(/<select[^>]+name="menu-locations\[([^\]]+)\]"[^>]*>([\s\S]*?)<\/select>/g)];
    
    selects.forEach(sel => {
        const locName = sel[1];
        formData.append(`menu-locations[${locName}]`, locName === 'primary' ? '95' : '0');
    });
    
    const postRes = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=locations", {
        method: "POST",
        headers: {
            "Cookie": cookies,
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0"
        },
        body: formData.toString(),
        redirect: "manual"
    });
    
    const resultHtml = await postRes.text();
    const errorMatch = resultHtml.match(/<div id="message"[^>]*>([\s\S]*?)<\/div>/);
    if(errorMatch) {
        console.log("Message:", errorMatch[1].replace(/<[^>]+>/g, '').trim());
    } else {
        console.log("No message found. Length:", resultHtml.length);
    }
}
assignMenu();
