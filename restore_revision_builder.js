const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();
const revData = require('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_revision_99153.json');

const elements = revData.data.responses.get_revision.data.elements;
const settings = revData.data.responses.get_revision.data.settings;

// Stringify to apply replacements
let elementsStr = JSON.stringify(elements);
let settingsStr = JSON.stringify(settings);

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

const updatedElements = JSON.parse(replaceUrls(elementsStr));
const updatedSettings = JSON.parse(replaceUrls(settingsStr));

// The nonce that worked recently
const nonce = '8a81ea2084';

async function restoreElementorBuilder() {
    console.log("🚀 Saving PERFECT revision (with updated settings + audit links) for Post ID 5137...");

    const actionsPayload = {
        "save_builder": {
            "action": "save_builder",
            "data": {
                "status": "publish",
                "elements": updatedElements,
                "settings": updatedSettings
            }
        }
    };

    const formData = new URLSearchParams();
    formData.append('action', 'elementor_ajax');
    formData.append('_nonce', nonce);
    formData.append('editor_post_id', '5137');
    formData.append('actions', JSON.stringify(actionsPayload));

    const res = await fetch("https://nufca.com/wp-admin/admin-ajax.php", {
        method: "POST",
        headers: {
            "Cookie": cookies,
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0"
        },
        body: formData.toString()
    });

    const responseText = await res.text();
    console.log(`  --> Status: ${res.status}`);
    
    if (res.ok && responseText.includes('"success":true')) {
        console.log("🎉 ELEMENTOR MEGAMENU RESTORED & FIXED SUCCESSFULLY!");
    } else {
        console.log("Response snippet:", responseText.substring(0, 300));
        console.log("⚠️ Failed to restore.");
    }
}

restoreElementorBuilder();
