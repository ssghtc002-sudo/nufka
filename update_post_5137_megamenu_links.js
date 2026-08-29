const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function updateMegamenu5137Links() {
    console.log("🛠️ Reading Post 5137 edit page to fetch current nonces & content...");

    const res = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=edit", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });

    const html = await res.text();

    const nonceMatch = html.match(/name="_wpnonce" value="([^"]+)"/);
    const nonce = nonceMatch ? nonceMatch[1] : null;

    const contentMatch = html.match(/<textarea[^>]*name="content"[^>]*>([\s\S]*?)<\/textarea>/i);
    let content = contentMatch ? contentMatch[1] : "";

    console.log("Original content length:", content.length);

    // Replacements
    let updatedContent = content
        .replace(/https:\/\/nufca\.com\/services\/vat-consultancy-services/g, 'https://nufca.com/vat-consultancy-in-uae/')
        .replace(/https:\/\/nufca\.com\/services\/corporate-tax-in-uae/g, 'https://nufca.com/corporate-tax-in-uae/')
        .replace(/\/services\/vat-consultancy-services/g, '/vat-consultancy-in-uae/')
        .replace(/\/services\/corporate-tax-in-uae/g, '/corporate-tax-in-uae/');

    console.log("Submitting POST to post.php for ID 5137 with post_type=ct-mega-menu ...");

    const formData = new URLSearchParams();
    formData.append('action', 'editpost');
    formData.append('post_ID', '5137');
    formData.append('post_type', 'ct-mega-menu');
    formData.append('post_title', 'Main menu');
    formData.append('post_name', 'elements');
    formData.append('_wpnonce', nonce);
    formData.append('content', updatedContent);
    formData.append('user_ID', '1');
    formData.append('post_author', '1');
    formData.append('original_post_status', 'publish');
    formData.append('hidden_post_status', 'publish');

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

    console.log("Post submit status:", postRes.status);
    console.log("Redirect location:", postRes.headers.get("location"));
}

updateMegamenu5137Links();
