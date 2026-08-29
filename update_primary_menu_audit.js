const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function updateMenu() {
    console.log("⚙️ Fetching latest nav-menus.php for Menu 95...");
    const res = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=edit&menu=95", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0"
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

    const formParams = new URLSearchParams();
    formParams.append("action", "update");
    formParams.append("menu", "95");
    formParams.append("update-nav-menu-nonce", nonce);
    formParams.append("_wp_http_referer", "/wp-admin/nav-menus.php?action=edit&menu=95");

    const dbIds = [...html.matchAll(/name="menu-item-db-id\[(\d+)\]"/g)].map(m => m[1]);
    console.log(`Found ${dbIds.length} existing menu items.`);

    let replacedCount = 0;

    dbIds.forEach((id) => {
        const getVal = (name) => {
            const m = html.match(new RegExp(`name="${name.replace('[', '\\[').replace(']', '\\]')}"\\s+value="([^"]*)"`));
            return m ? m[1] : '';
        };

        let url = getVal(`menu-item-url[${id}]`);
        if (url && url.includes('services/audit-assurance')) {
            url = url.replace('services/audit-assurance', 'audit-assurance-uae');
            replacedCount++;
            console.log(`Updating item ID ${id} to ${url}`);
        }

        formParams.append(`menu-item-db-id[${id}]`, id);
        formParams.append(`menu-item-object-id[${id}]`, getVal(`menu-item-object-id[${id}]`));
        formParams.append(`menu-item-object[${id}]`, getVal(`menu-item-object[${id}]`));
        formParams.append(`menu-item-parent-id[${id}]`, getVal(`menu-item-parent-id[${id}]`));
        formParams.append(`menu-item-position[${id}]`, getVal(`menu-item-position[${id}]`));
        formParams.append(`menu-item-type[${id}]`, getVal(`menu-item-type[${id}]`));
        formParams.append(`menu-item-title[${id}]`, getVal(`menu-item-title[${id}]`));
        formParams.append(`menu-item-url[${id}]`, url);
    });

    if (replacedCount === 0) {
        console.log("⚠️ No audit-assurance URLs found to replace in the Primary Menu.");
    }

    console.log("🚀 Submitting updated menu to WordPress nav-menus.php...");

    const postRes = await fetch("https://nufca.com/wp-admin/nav-menus.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0"
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
