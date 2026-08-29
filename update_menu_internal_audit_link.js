const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function updateMegamenuAndNav() {
    console.log("🔍 Checking and updating Menu links for Internal Audit...\n");

    // 1. Update Elementor Megamenu (Post ID 5137)
    console.log("1. Updating Elementor Megamenu (Post ID 5137)...");
    const editRes = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=edit", {
        headers: { "Cookie": cookies, "User-Agent": "Mozilla/5.0" }
    });

    const html = await editRes.text();
    const nonceMatch = html.match(/name="_wpnonce" value="([^"]+)"/);
    if (!nonceMatch) {
        console.log("❌ Could not extract nonce for Post 5137");
    } else {
        const nonce = nonceMatch[1];
        
        // Extract content & elementor data
        const contentMatch = html.match(/<textarea[^>]*name="content"[^>]*>([\s\S]*?)<\/textarea>/i);
        let contentStr = contentMatch ? contentMatch[1] : "";
        
        const elDataMatch = html.match(/<textarea[^>]*name="_elementor_data"[^>]*>([\s\S]*?)<\/textarea>/i);
        let elDataStr = elDataMatch ? elDataMatch[1] : "";

        // Replacement logic
        const replaceOldLinks = (str) => {
            return str
                .replace(/https:\/\/nufca\.com\/services\/internal-audit-system-review/g, 'https://nufca.com/internal-audit-uae/')
                .replace(/https:\/\/nufca\.com\/internal-audit-system-review/g, 'https://nufca.com/internal-audit-uae/')
                .replace(/\/services\/internal-audit-system-review/g, '/internal-audit-uae/')
                .replace(/\/internal-audit-system-review/g, '/internal-audit-uae/')
                .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/internal-audit-system-review/g, 'https:\\\/\\\/nufca\.com\\\/internal-audit-uae\\\/')
                .replace(/https:\\\/\\\/nufca\.com\\\/internal-audit-system-review/g, 'https:\\\/\\\/nufca\.com\\\/internal-audit-uae\\\/');
        };

        const updatedContent = replaceOldLinks(contentStr);
        const updatedElData = replaceOldLinks(elDataStr);

        const formData = new URLSearchParams();
        formData.append('action', 'editpost');
        formData.append('post_ID', '5137');
        formData.append('post_type', 'ct-mega-menu');
        formData.append('post_title', 'Main menu');
        formData.append('post_name', 'elements');
        formData.append('_wpnonce', nonce);
        formData.append('content', updatedContent);
        if (updatedElData) {
            formData.append('_elementor_data', updatedElData);
        }

        const postRes = await fetch("https://nufca.com/wp-admin/post.php", {
            method: "POST",
            headers: {
                "Cookie": cookies,
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0"
            },
            body: formData.toString(),
            redirect: "manual"
        });

        console.log(`  --> Megamenu Post 5137 Update Status: ${postRes.status}`);
    }

    // 2. Check and Update WordPress Nav Menus (Menu 95)
    console.log("\n2. Checking WordPress Primary Menu (Menu 95)...");
    const menuRes = await fetch("https://nufca.com/wp-admin/nav-menus.php?action=edit&menu=95", {
        headers: { "Cookie": cookies, "User-Agent": "Mozilla/5.0" }
    });
    const menuHtml = await menuRes.text();
    const menuNonceMatch = menuHtml.match(/name="update-nav-menu-nonce"\s+value="([^"]+)"/);

    if (menuNonceMatch) {
        const nonce = menuNonceMatch[1];
        const dbIds = [...menuHtml.matchAll(/name="menu-item-db-id\[(\d+)\]"/g)].map(m => m[1]);
        
        let foundOldLink = false;
        const formParams = new URLSearchParams();
        formParams.append("action", "update");
        formParams.append("menu", "95");
        formParams.append("update-nav-menu-nonce", nonce);
        formParams.append("_wp_http_referer", "/wp-admin/nav-menus.php?action=edit&menu=95");

        dbIds.forEach((id) => {
            const getVal = (name) => {
                const m = menuHtml.match(new RegExp(`name="${name.replace('[', '\\[').replace(']', '\\]')}"\\s+value="([^"]*)"`));
                return m ? m[1] : '';
            };

            let itemUrl = getVal(`menu-item-url[${id}]`);
            if (itemUrl.includes("internal-audit")) {
                console.log(`  Found menu item ID ${id} with URL: ${itemUrl} -> Updating to /internal-audit-uae/`);
                itemUrl = "https://nufca.com/internal-audit-uae/";
                foundOldLink = true;
            }

            formParams.append(`menu-item-db-id[${id}]`, id);
            formParams.append(`menu-item-object-id[${id}]`, getVal(`menu-item-object-id[${id}]`));
            formParams.append(`menu-item-object[${id}]`, getVal(`menu-item-object[${id}]`));
            
            const parentMatch = menuHtml.match(new RegExp(`name="menu-item-parent-id\\[${id}\\]"[^>]*value="([^"]*)"`));
            formParams.append(`menu-item-parent-id[${id}]`, parentMatch ? parentMatch[1] : '0');
            
            const posMatch = menuHtml.match(new RegExp(`name="menu-item-position\\[${id}\\]"[^>]*value="([^"]*)"`));
            formParams.append(`menu-item-position[${id}]`, posMatch ? posMatch[1] : getVal(`menu-item-position[${id}]`));
            
            formParams.append(`menu-item-type[${id}]`, getVal(`menu-item-type[${id}]`));
            formParams.append(`menu-item-title[${id}]`, getVal(`menu-item-title[${id}]`));
            formParams.append(`menu-item-url[${id}]`, itemUrl);
        });

        formParams.append("menu-locations[primary]", "95");

        if (foundOldLink) {
            console.log("  Submitting updated nav menu 95...");
            const updateMenuRes = await fetch("https://nufca.com/wp-admin/nav-menus.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Cookie": cookies,
                    "User-Agent": "Mozilla/5.0"
                },
                body: formParams.toString(),
                redirect: "manual"
            });
            console.log(`  --> Nav Menu 95 Update Status: ${updateMenuRes.status}`);
        } else {
            console.log("  No direct item in Menu 95 (Megamenu template handles service items).");
        }
    }

    console.log("\n🎉 MENU LINK UPDATE COMPLETED!");
}

updateMegamenuAndNav();
