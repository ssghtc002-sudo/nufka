const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();
const revData = require('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_revision_99153.json');

let elementsStr = JSON.stringify(revData.data.responses.get_revision.data.elements);
let settingsStr = JSON.stringify(revData.data.responses.get_revision.data.settings);

const replaceUrls = (str) => {
    return str
        .replace(/https:\/\/nufca\.com\/services\/vat-consultancy-services/g, 'https://nufca.com/vat-consultancy-in-uae/')
        .replace(/https:\/\/nufca\.com\/services\/corporate-tax-in-uae/g, 'https://nufca.com/corporate-tax-in-uae/')
        .replace(/https:\/\/nufca\.com\/services\/audit-assurance/g, 'https://nufca.com/audit-assurance-uae/')
        .replace(/https:\/\/nufca\.com\/services\/internal-audit-system-review/g, 'https://nufca.com/internal-audit-uae/')
        .replace(/https:\/\/nufca\.com\/internal-audit-system-review/g, 'https://nufca.com/internal-audit-uae/')
        .replace(/\/services\/vat-consultancy-services/g, '/vat-consultancy-in-uae/')
        .replace(/\/services\/corporate-tax-in-uae/g, '/corporate-tax-in-uae/')
        .replace(/\/services\/audit-assurance/g, '/audit-assurance-uae/')
        .replace(/\/services\/internal-audit-system-review/g, '/internal-audit-uae/')
        .replace(/\/internal-audit-system-review/g, '/internal-audit-uae/')
        .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/vat-consultancy-services/g, 'https:\\\/\\\/nufca\.com\\\/vat-consultancy-in-uae\\\/')
        .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/corporate-tax-in-uae/g, 'https:\\\/\\\/nufca\.com\\\/corporate-tax-in-uae\\\/')
        .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/audit-assurance/g, 'https:\\\/\\\/nufca\.com\\\/audit-assurance-uae\\\/')
        .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/internal-audit-system-review/g, 'https:\\\/\\\/nufca\.com\\\/internal-audit-uae\\\/')
        .replace(/https:\\\/\\\/nufca\.com\\\/internal-audit-system-review/g, 'https:\\\/\\\/nufca\.com\\\/internal-audit-uae\\\/');
};

const updatedElements = JSON.parse(replaceUrls(elementsStr));
const updatedSettings = JSON.parse(replaceUrls(settingsStr));
const updatedElementsStr = replaceUrls(elementsStr);
const updatedSettingsStr = replaceUrls(settingsStr);

async function saveAll() {
    console.log("1. Fetching Elementor Nonce from editor...");
    const editorRes = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=elementor", {
        headers: { "Cookie": cookies, "User-Agent": "Mozilla/5.0" }
    });
    const editorHtml = await editorRes.text();
    const nonceMatch = editorHtml.match(/"nonce":"([^"]+)"/);
    const nonce = nonceMatch ? nonceMatch[1] : null;
    console.log("Nonce:", nonce);

    if (nonce) {
        console.log("Submitting save_builder AJAX...");
        const savePayload = {
            "save_builder": {
                "action": "save_builder",
                "data": {
                    "status": "publish",
                    "elements": updatedElements,
                    "settings": updatedSettings
                }
            }
        };

        const saveForm = new URLSearchParams();
        saveForm.append('action', 'elementor_ajax');
        saveForm.append('_nonce', nonce);
        saveForm.append('editor_post_id', '5137');
        saveForm.append('actions', JSON.stringify(savePayload));

        const res = await fetch("https://nufca.com/wp-admin/admin-ajax.php", {
            method: "POST",
            headers: {
                "Cookie": cookies,
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0"
            },
            body: saveForm.toString()
        });

        const resData = await res.json();
        console.log("Save Builder Result:", resData.success ? "SUCCESS" : JSON.stringify(resData));
    }

    console.log("\n2. Also updating via direct post.php...");
    const editRes = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=edit", {
        headers: { "Cookie": cookies, "User-Agent": "Mozilla/5.0" }
    });
    const editHtml = await editRes.text();
    const postNonceMatch = editHtml.match(/name="_wpnonce" value="([^"]+)"/);
    if (postNonceMatch) {
        const postNonce = postNonceMatch[1];
        const contentMatch = editHtml.match(/<textarea[^>]*name="content"[^>]*>([\s\S]*?)<\/textarea>/i);
        let contentStr = contentMatch ? contentMatch[1] : "";
        let updatedContent = replaceUrls(contentStr);

        const formData = new URLSearchParams();
        formData.append('action', 'editpost');
        formData.append('post_ID', '5137');
        formData.append('post_type', 'ct-mega-menu');
        formData.append('post_title', 'Main menu');
        formData.append('post_name', 'elements');
        formData.append('_wpnonce', postNonce);
        formData.append('content', updatedContent);
        formData.append('_elementor_data', updatedElementsStr);
        formData.append('_elementor_page_settings', updatedSettingsStr);

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

        console.log("post.php update status:", postRes.status);
    }

    console.log("\n🎉 ALL MEGAMENU UPDATES COMPLETED!");
}

saveAll();
