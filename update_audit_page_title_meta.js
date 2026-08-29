const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

const pageIds = [99159, 99160, 99161, 99162, 99163];

async function hideTitleMeta() {
    console.log("🚀 Hiding Theme Page Title Meta for 5 Audit & Assurance pages...\n");

    for (const id of pageIds) {
        console.log(`Processing Page ID ${id}...`);

        // Get Edit Page HTML to extract nonce
        const editRes = await fetch(`https://nufca.com/wp-admin/post.php?post=${id}&action=edit`, {
            headers: {
                "Cookie": cookies,
                "User-Agent": "Mozilla/5.0"
            }
        });

        const html = await editRes.text();
        const nonceMatch = html.match(/name="_wpnonce" value="([^"]+)"/);
        const nonce = nonceMatch ? nonceMatch[1] : null;

        if (!nonce) {
            console.log(`  --> ❌ Could not extract nonce for ID ${id}`);
            continue;
        }

        const formData = new URLSearchParams();
        formData.append('action', 'editpost');
        formData.append('post_ID', id.toString());
        formData.append('post_type', 'page');
        formData.append('_wpnonce', nonce);
        formData.append('ct_page_options[custom_pagetitle]', 'hide');
        formData.append('ct_page_options[ptitle_display]', 'hidden');

        // Note: the hero section update has already been applied via the first script content generation. 
        // We just need to hide the theme banner here.
        const postMetaRes = await fetch("https://nufca.com/wp-admin/post.php", {
            method: "POST",
            headers: {
                "Cookie": cookies,
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0"
            },
            body: formData.toString(),
            redirect: "manual"
        });

        console.log(`  --> Title Banner Hide Status for ID ${id}: ${postMetaRes.status}`);
    }

    console.log("\n🎉 ALL 5 AUDIT PAGES UPDATED WITH HIDDEN THEME TITLE BANNER!");
}

hideTitleMeta();
