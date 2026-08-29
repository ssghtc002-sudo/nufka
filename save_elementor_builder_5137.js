const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();
const updatedElements = JSON.parse(fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\updated_elementor_elements_5137.json', 'utf-8'));

const nonces = ['2833c49409', '7df63396e0', '8a81ea2084', 'd4343048e1'];

async function saveElementorBuilder() {
    console.log("🚀 Saving updated Elementor Builder data for Post ID 5137 via admin-ajax.php...");

    for (const nonce of nonces) {
        console.log(`Testing _nonce: ${nonce}`);

        const actionsPayload = {
            "save_builder": {
                "action": "save_builder",
                "data": {
                    "status": "publish",
                    "elements": updatedElements,
                    "settings": {}
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

        console.log(`  --> Status: ${res.status}`);
        const responseText = await res.text();
        console.log(`  --> Response snippet: ${responseText.substring(0, 300)}`);

        if (res.ok && responseText.includes('"success":true')) {
            console.log("🎉 ELEMENTOR BUILDER SAVED SUCCESSFULLY!");
            break;
        }
    }
}

saveElementorBuilder();
