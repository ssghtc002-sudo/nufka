const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function updatePostMeta5137() {
    console.log("🛠️ Fetching _elementor_data from postmeta for ID 5137...");

    // We can fetch via REST API or WP Admin
    const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

    const editRes = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=edit", {
        headers: {
            "Cookie": cookies,
            "User-Agent": "Mozilla/5.0"
        }
    });

    const html = await editRes.text();
    const nonceMatch = html.match(/name="_wpnonce" value="([^"]+)"/);
    const nonce = nonceMatch ? nonceMatch[1] : null;

    // Search for _elementor_data in post.php edit screen or raw HTML
    const elDataMatch = html.match(/<textarea[^>]*name="_elementor_data"[^>]*>([\s\S]*?)<\/textarea>/i);
    let elDataStr = elDataMatch ? elDataMatch[1] : "";
    console.log("elDataStr length in edit HTML:", elDataStr.length);

    // Let's do a direct replacement in content and elDataStr
    const contentMatch = html.match(/<textarea[^>]*name="content"[^>]*>([\s\S]*?)<\/textarea>/i);
    let contentStr = contentMatch ? contentMatch[1] : "";

    let updatedContent = contentStr
        .replace(/https:\/\/nufca\.com\/services\/vat-consultancy-services/g, 'https://nufca.com/vat-consultancy-in-uae/')
        .replace(/https:\/\/nufca\.com\/services\/corporate-tax-in-uae/g, 'https://nufca.com/corporate-tax-in-uae/')
        .replace(/\/services\/vat-consultancy-services/g, '/vat-consultancy-in-uae/')
        .replace(/\/services\/corporate-tax-in-uae/g, '/corporate-tax-in-uae/');

    let updatedElData = elDataStr
        .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/vat-consultancy-services/g, 'https:\\\/\\\/nufca\.com\\\/vat-consultancy-in-uae\\\/')
        .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/corporate-tax-in-uae/g, 'https:\\\/\\\/nufca\.com\\\/corporate-tax-in-uae\\\/')
        .replace(/https:\/\/nufca\.com\/services\/vat-consultancy-services/g, 'https://nufca.com/vat-consultancy-in-uae/')
        .replace(/https:\/\/nufca\.com\/services\/corporate-tax-in-uae/g, 'https://nufca.com/corporate-tax-in-uae/')
        .replace(/\/services\/vat-consultancy-services/g, '/vat-consultancy-in-uae/')
        .replace(/\/services\/corporate-tax-in-uae/g, '/corporate-tax-in-uae/');

    const formData = new URLSearchParams();
    formData.append('action', 'editpost');
    formData.append('post_ID', '5137');
    formData.append('post_type', 'ct-mega-menu');
    formData.append('post_title', 'Main menu');
    formData.append('post_name', 'elements');
    formData.append('_wpnonce', nonce);
    formData.append('content', updatedContent);
    formData.append('_elementor_data', updatedElData);

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

    console.log("Submit status:", postRes.status);
    console.log("Location:", postRes.headers.get("location"));
}

updatePostMeta5137();
