const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function addMenuCustomItems() {
    console.log("🚀 Adding Corporate Tax & Cities Dropdown to Primary Menu (ID 95)...");

    // 1. Get current page html to extract nonce
    const pageRes = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=edit&menu=95", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await pageRes.text();
    const nonceMatch = html.match(/id="menu-settings-column-nonce" value="([^"]+)"/) || html.match(/id="update-nav-menu-nonce" value="([^"]+)"/);
    const ajaxNonceMatch = html.match(/id="add-menu-item-nonce" value="([^"]+)"/);

    console.log("Page Nonce:", nonceMatch ? nonceMatch[1] : "none");
    console.log("AJAX Nonce:", ajaxNonceMatch ? ajaxNonceMatch[1] : "none");

    const menuId = 95;

    // Use admin-ajax.php to add custom links
    const links = [
        { label: "Corporate Tax (UAE)", url: "https://nufca.com/corporate-tax-in-uae/" },
        { label: "Dubai", url: "https://nufca.com/corporate-tax-in-uae/dubai/" },
        { label: "Gold Souk (Deira)", url: "https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" },
        { label: "Abu Dhabi", url: "https://nufca.com/corporate-tax-in-uae/abu-dhabi/" },
        { label: "Sharjah", url: "https://nufca.com/corporate-tax-in-uae/sharjah/" }
    ];

    const body = new URLSearchParams();
    body.append("action", "add-menu-item");
    body.append("menu", menuId);
    body.append("menu-settings-column-nonce", nonceMatch ? nonceMatch[1] : "");
    
    links.forEach((link, idx) => {
        body.append(`menu-item[-${idx + 1}][menu-item-title]`, link.label);
        body.append(`menu-item[-${idx + 1}][menu-item-url]`, link.url);
        body.append(`menu-item[-${idx + 1}][menu-item-type]`, "custom");
        body.append(`menu-item[-${idx + 1}][menu-item-object]`, "custom");
    });

    const res = await fetch("https://nufca.com/wp-admin/admin-ajax.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        body: body.toString()
    });

    console.log("AJAX Add Status:", res.status);
    const responseText = await res.text();
    console.log("Response snippet:", responseText.substring(0, 500));
}

addMenuCustomItems();
