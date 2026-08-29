const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

// Get the perfect elements and settings from the revision JSON
const revData = require('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_revision_99153.json');
let elementsStr = JSON.stringify(revData.data.responses.get_revision.data.elements);
let settingsStr = JSON.stringify(revData.data.responses.get_revision.data.settings);

const replaceUrls = (str) => {
    return str
        .replace(/https:\/\/nufca\.com\/services\/vat-consultancy-services/g, 'https://nufca.com/vat-consultancy-in-uae/')
        .replace(/https:\/\/nufca\.com\/services\/corporate-tax-in-uae/g, 'https://nufca.com/corporate-tax-in-uae/')
        .replace(/https:\/\/nufca\.com\/services\/audit-assurance/g, 'https://nufca.com/audit-assurance-uae/')
        .replace(/\/services\/vat-consultancy-services/g, '/vat-consultancy-in-uae/')
        .replace(/\/services\/corporate-tax-in-uae/g, '/corporate-tax-in-uae/')
        .replace(/\/services\/audit-assurance/g, '/audit-assurance-uae/')
        .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/vat-consultancy-services/g, 'https:\\\/\\\/nufca\.com\\\/vat-consultancy-in-uae\\\/')
        .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/corporate-tax-in-uae/g, 'https:\\\/\\\/nufca\.com\\\/corporate-tax-in-uae\\\/')
        .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/audit-assurance/g, 'https:\\\/\\\/nufca\.com\\\/audit-assurance-uae\\\/');
};

const updatedElementsStr = replaceUrls(elementsStr);
const updatedSettingsStr = replaceUrls(settingsStr);

async function directPostMetaUpdate() {
    console.log("🛠️ Fetching post.php for ID 5137...");
    const editRes = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=edit", {
        headers: { "Cookie": cookies, "User-Agent": "Mozilla/5.0" }
    });

    const html = await editRes.text();
    const nonceMatch = html.match(/name="_wpnonce" value="([^"]+)"/);
    if (!nonceMatch) {
        console.log("Failed to find nonce");
        return;
    }
    const nonce = nonceMatch[1];
    console.log("Nonce:", nonce);

    const contentMatch = html.match(/<textarea[^>]*name="content"[^>]*>([\s\S]*?)<\/textarea>/i);
    let contentStr = contentMatch ? contentMatch[1] : "";
    let updatedContent = replaceUrls(contentStr);

    const formData = new URLSearchParams();
    formData.append('action', 'editpost');
    formData.append('post_ID', '5137');
    formData.append('post_type', 'ct-mega-menu');
    formData.append('post_title', 'Main menu');
    formData.append('post_name', 'elements');
    formData.append('_wpnonce', nonce);
    formData.append('content', updatedContent);
    formData.append('_elementor_data', updatedElementsStr);
    formData.append('_elementor_page_settings', updatedSettingsStr);

    console.log("Submitting direct POST to post.php...");
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

directPostMetaUpdate();
