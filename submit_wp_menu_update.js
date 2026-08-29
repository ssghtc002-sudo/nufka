const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function updateMenu() {
    console.log("⚙️ Fetching latest nav-menus.php for Menu 95...");
    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=edit&menu=95", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();
    const nonceMatch = html.match(/name="update-nav-menu-nonce"\s+value="([^"]+)"/);
    if (!nonceMatch) {
        console.log("❌ Nonce not found!");
        return;
    }

    const nonce = nonceMatch[1];
    console.log(`🔑 Extracted Nonce: ${nonce}`);

    // Parse all existing inputs from the nav-menu-header/form
    const formParams = new URLSearchParams();
    formParams.append("action", "update");
    formParams.append("menu", "95");
    formParams.append("update-nav-menu-nonce", nonce);
    formParams.append("_wp_http_referer", "/wp-admin/nav-menus.php?action=edit&menu=95");

    // Add existing menu items
    const dbIds = [...html.matchAll(/name="menu-item-db-id\[(\d+)\]"/g)].map(m => m[1]);
    console.log(`Found ${dbIds.length} existing menu items.`);

    dbIds.forEach((id) => {
        const getVal = (name) => {
            const m = html.match(new RegExp(`name="${name.replace('[', '\\[').replace(']', '\\]')}"\\s+value="([^"]*)"`));
            return m ? m[1] : '';
        };

        formParams.append(`menu-item-db-id[${id}]`, id);
        formParams.append(`menu-item-object-id[${id}]`, getVal(`menu-item-object-id[${id}]`));
        formParams.append(`menu-item-object[${id}]`, getVal(`menu-item-object[${id}]`));
        formParams.append(`menu-item-parent-id[${id}]`, getVal(`menu-item-parent-id[${id}]`));
        formParams.append(`menu-item-position[${id}]`, getVal(`menu-item-position[${id}]`));
        formParams.append(`menu-item-type[${id}]`, getVal(`menu-item-type[${id}]`));
        formParams.append(`menu-item-title[${id}]`, getVal(`menu-item-title[${id}]`));
        formParams.append(`menu-item-url[${id}]`, getVal(`menu-item-url[${id}]`));
    });

    // Add New Parent Menu Item: Corporate Tax in UAE (-1)
    formParams.append("menu-item[-1][menu-item-db-id]", "0");
    formParams.append("menu-item[-1][menu-item-object-id]", "0");
    formParams.append("menu-item[-1][menu-item-object]", "custom");
    formParams.append("menu-item[-1][menu-item-parent-id]", "0");
    formParams.append("menu-item[-1][menu-item-position]", (dbIds.length + 1).toString());
    formParams.append("menu-item[-1][menu-item-type]", "custom");
    formParams.append("menu-item[-1][menu-item-title]", "Corporate Tax in UAE");
    formParams.append("menu-item[-1][menu-item-url]", "https://nufca.com/corporate-tax-in-uae/");

    // Add Child Items under -1
    const children = [
        { label: "Dubai", url: "https://nufca.com/corporate-tax-in-uae/dubai/" },
        { label: "Gold Souk (Deira)", url: "https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" },
        { label: "Abu Dhabi", url: "https://nufca.com/corporate-tax-in-uae/abu-dhabi/" },
        { label: "Sharjah", url: "https://nufca.com/corporate-tax-in-uae/sharjah/" }
    ];

    children.forEach((c, idx) => {
        const tempId = `-${idx + 2}`;
        formParams.append(`menu-item[${tempId}][menu-item-db-id]`, "0");
        formParams.append(`menu-item[${tempId}][menu-item-object-id]`, "0");
        formParams.append(`menu-item[${tempId}][menu-item-object]`, "custom");
        formParams.append(`menu-item[${tempId}][menu-item-parent-id]`, "-1");
        formParams.append(`menu-item[${tempId}][menu-item-position]`, (dbIds.length + 2 + idx).toString());
        formParams.append(`menu-item[${tempId}][menu-item-type]`, "custom");
        formParams.append(`menu-item[${tempId}][menu-item-title]`, c.label);
        formParams.append(`menu-item[${tempId}][menu-item-url]`, c.url);
    });

    console.log("🚀 Submitting updated menu to WordPress nav-menus.php...");

    const postRes = await fetch("https://nufca.com/wp-admin/nav-menus.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        body: formParams.toString(),
        redirect: "manual"
    });

    console.log("Status:", postRes.status);
    console.log("Redirect Location:", postRes.headers.get("location"));

    if (postRes.status === 302 || postRes.status === 200) {
        console.log("🎉 SUCCESS! Navigation Menu updated on WordPress!");
    } else {
        console.log("❌ Failed to update menu.");
    }
}

updateMenu();
