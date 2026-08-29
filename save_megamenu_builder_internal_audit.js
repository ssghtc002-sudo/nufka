const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

async function saveMegamenuWithInternalAudit() {
    console.log("🚀 Fetching Elementor Editor page for Post 5137 to extract fresh Elementor Nonce...");

    const editorRes = await fetch("https://nufca.com/wp-admin/post.php?post=5137&action=elementor", {
        headers: { "Cookie": cookies, "User-Agent": "Mozilla/5.0" }
    });

    const editorHtml = await editorRes.text();
    const nonceMatch = editorHtml.match(/"nonce":"([^"]+)"/);
    if (!nonceMatch) {
        console.log("❌ Could not extract Elementor nonce from editor HTML");
        return;
    }

    const nonce = nonceMatch[1];
    console.log("🔑 Extracted Elementor Nonce:", nonce);

    // Fetch latest builder elements
    const getPayload = {
        "get_builder": {
            "action": "get_builder",
            "data": { "editor_post_id": 5137 }
        }
    };

    const getForm = new URLSearchParams();
    getForm.append('action', 'elementor_ajax');
    getForm.append('_nonce', nonce);
    getForm.append('editor_post_id', '5137');
    getForm.append('actions', JSON.stringify(getPayload));

    const getRes = await fetch("https://nufca.com/wp-admin/admin-ajax.php", {
        method: "POST",
        headers: {
            "Cookie": cookies,
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0"
        },
        body: getForm.toString()
    });

    const getData = await getRes.json();
    let elements = getData.data.responses.get_builder.data;

    let elementsStr = JSON.stringify(elements);
    console.log("Original Elements JSON length:", elementsStr.length);
    console.log("Old link exists in builder JSON?", elementsStr.includes("internal-audit-system-review"));

    // Replace all internal audit URLs
    const replaceUrls = (str) => {
        return str
            .replace(/https:\/\/nufca\.com\/services\/internal-audit-system-review/g, 'https://nufca.com/internal-audit-uae/')
            .replace(/https:\/\/nufca\.com\/internal-audit-system-review/g, 'https://nufca.com/internal-audit-uae/')
            .replace(/\/services\/internal-audit-system-review/g, '/internal-audit-uae/')
            .replace(/\/internal-audit-system-review/g, '/internal-audit-uae/')
            .replace(/https:\\\/\\\/nufca\.com\\\/services\\\/internal-audit-system-review/g, 'https:\\\/\\\/nufca\.com\\\/internal-audit-uae\\\/')
            .replace(/https:\\\/\\\/nufca\.com\\\/internal-audit-system-review/g, 'https:\\\/\\\/nufca\.com\\\/internal-audit-uae\\\/');
    };

    const updatedElementsStr = replaceUrls(elementsStr);
    const updatedElements = JSON.parse(updatedElementsStr);

    console.log("New link exists in updated JSON?", updatedElementsStr.includes("internal-audit-uae"));

    // Save Builder
    const savePayload = {
        "save_builder": {
            "action": "save_builder",
            "data": {
                "status": "publish",
                "elements": updatedElements
            }
        }
    };

    const saveForm = new URLSearchParams();
    saveForm.append('action', 'elementor_ajax');
    saveForm.append('_nonce', nonce);
    saveForm.append('editor_post_id', '5137');
    saveForm.append('actions', JSON.stringify(savePayload));

    console.log("Submitting save_builder AJAX...");
    const saveRes = await fetch("https://nufca.com/wp-admin/admin-ajax.php", {
        method: "POST",
        headers: {
            "Cookie": cookies,
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0"
        },
        body: saveForm.toString()
    });

    const saveResult = await saveRes.json();
    console.log("Save Builder Response:", JSON.stringify(saveResult));

    if (saveResult.success) {
        console.log("\n🎉 MEGAMENU BUILDER DATA UPDATED WITH /internal-audit-uae/ LINK SUCCESSFULLY!");
    }
}

saveMegamenuWithInternalAudit();
