const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function assignMenu() {
    console.log("Fetching locations page...");
    const getRes = await fetch('https://nufca.com/wp-admin/nav-menus.php?action=locations', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await getRes.text();
    
    const formMatch = html.match(/<form[^>]*action="[^"]*action=locations"[^>]*>([\s\S]*?)<\/form>/);
    if (!formMatch) {
        console.log("Form not found!");
        return;
    }
    
    const formData = new URLSearchParams();
    
    // Add all hidden inputs
    const inputs = [...formMatch[1].matchAll(/<input[^>]+name="([^"]+)"[^>]*value="([^"]*)"/g)];
    inputs.forEach(i => formData.append(i[1], i[2]));
    
    // Ensure we submit the save button name/value
    formData.append('nav-menu-locations', 'Save Changes');
    formData.append('action', 'locations');
    
    // Extract all current menu location dropdowns and their selected values
    const selects = [...html.matchAll(/<select[^>]+name="menu-locations\[([^\]]+)\]"[^>]*>([\s\S]*?)<\/select>/g)];
    
    selects.forEach(sel => {
        const locName = sel[1];
        const optionsHtml = sel[2];
        
        let selectedVal = "0";
        const selectedMatch = optionsHtml.match(/<option[^>]+value="([^"]+)"[^>]*selected/);
        if (selectedMatch) {
            selectedVal = selectedMatch[1];
        }
        
        // Update primary to 95, keep others unchanged
        if (locName === 'primary') {
            selectedVal = "95";
        }
        
        formData.append(`menu-locations[${locName}]`, selectedVal);
    });
    
    console.log("Submitting locations form exactly as expected...");
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
    
    console.log("Status:", postRes.status);
    console.log("Location:", postRes.headers.get("location"));
}

assignMenu();
