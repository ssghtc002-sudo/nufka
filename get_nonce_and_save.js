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

async function getNonceAndSave() {
    console.log("Fetching editor page to extract fresh nonce...");
    const res = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=elementor", {
        headers: { "Cookie": cookies, "User-Agent": "Mozilla/5.0" }
    });
    const html = await res.text();
    
    // Nonce in Elementor App Config
    const nonces = [...html.matchAll(/"nonce":"([a-f0-9]{10})"/g)].map(m => m[1]);
    console.log("Found candidate nonces:", nonces);

    for (const nonce of nonces) {
        console.log(`Trying nonce: ${nonce}...`);
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

        const postRes = await fetch("https://nufca.com/wp-admin/admin-ajax.php", {
            method: "POST",
            headers: {
                "Cookie": cookies,
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0"
            },
            body: saveForm.toString()
        });

        const postData = await postRes.json();
        console.log("  Result:", JSON.stringify(postData));
        if (postData.success) {
            console.log("🎉 SUCCESS WITH NONCE:", nonce);
            break;
        }
    }
}

getNonceAndSave();
