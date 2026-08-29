const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

async function executeAll() {
    console.log("==================================================");
    console.log("1. TRASHING OLD PAGE ID 6726 & CREATING 301 REDIRECT");
    console.log("==================================================");

    // 1. Move Page 6726 to trash
    try {
        const pageRes = await fetch("https://nufca.com/wp-json/wp/v2/pages/6726", {
            method: "DELETE",
            headers: headers
        });
        console.log("🗑️ Trash Page 6726 Status:", pageRes.status);
    } catch(e) {
        console.error("Error trashing page 6726:", e);
    }

    // 2. Add 301 Redirects in Redirection plugin
    const redirects = [
        { url: "/services/aml-cft-compliance-services", target: "/aml-cft-compliance-services-in-uae/" },
        { url: "/services/aml-cft-compliance-services/", target: "/aml-cft-compliance-services-in-uae/" },
        { url: "^/services/aml-cft-compliance-services/?$", target: "/aml-cft-compliance-services-in-uae/", regex: true }
    ];

    for (const r of redirects) {
        try {
            const payload = {
                url: r.url,
                match_url: r.url,
                action_data: { url: r.target },
                action_code: 301,
                action_type: "url",
                match_type: "url",
                regex: !!r.regex,
                group_id: 3,
                title: "Old AML CFT compliance service page 301 redirect"
            };

            const res = await fetch("https://nufca.com/wp-json/redirection/v1/redirect", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(payload)
            });

            console.log(`✅ Add 301 Redirect for ${r.url} -> Status: ${res.status}`);
        } catch(e) {
            console.error("Error creating redirect:", e);
        }
    }

    console.log("\n==================================================");
    console.log("2. UPDATING MEGAMENU (POST ID 5137)");
    console.log("==================================================");

    let cookies = "";
    try {
        cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();
    } catch(e) {}

    if (cookies) {
        try {
            const editRes = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=edit", {
                headers: { "Cookie": cookies, "User-Agent": "Mozilla/5.0" }
            });
            const editHtml = await editRes.text();
            const postNonceMatch = editHtml.match(/name="_wpnonce" value="([^"]+)"/);
            
            if (postNonceMatch) {
                const postNonce = postNonceMatch[1];
                const contentMatch = editHtml.match(/<textarea[^>]*name="content"[^>]*>([\s\S]*?)<\/textarea>/i);
                let contentStr = contentMatch ? contentMatch[1] : "";
                
                let updatedContent = contentStr
                    .replace(/https:\/\/nufca\.com\/services\/aml-cft-compliance-services/g, 'https://nufca.com/aml-cft-compliance-services-in-uae/')
                    .replace(/\/services\/aml-cft-compliance-services/g, '/aml-cft-compliance-services-in-uae/');

                const formData = new URLSearchParams();
                formData.append('action', 'editpost');
                formData.append('post_ID', '5137');
                formData.append('post_type', 'ct-mega-menu');
                formData.append('post_title', 'Main menu');
                formData.append('post_name', 'elements');
                formData.append('_wpnonce', postNonce);
                formData.append('content', updatedContent);

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

                console.log("✅ Megamenu Post.php Update Status:", postRes.status);
            }
        } catch(e) {
            console.error("Error updating megamenu with cookies:", e);
        }
    }

    console.log("\n==================================================");
    console.log("3. TESTING REDIRECT FLOW");
    console.log("==================================================");
    
    try {
        const testRes = await fetch("https://nufca.com/services/aml-cft-compliance-services", {
            redirect: "manual"
        });
        console.log("Old URL Status:", testRes.status);
        console.log("Location Header:", testRes.headers.get("location"));
    } catch(e) {
        console.error("Test error:", e);
    }
}

executeAll();
