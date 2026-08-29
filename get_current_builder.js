const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

// The nonce that worked recently
const nonce = '8a81ea2084';

async function getElementorBuilder() {
    console.log("🚀 Fetching current Builder data for Post ID 5137...");

    const actionsPayload = {
        "get_builder": {
            "action": "get_builder_content",
            "data": {
                "post_id": "5137"
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

    const data = await res.json();
    if(data.success) {
        fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\current_builder_5137.json', JSON.stringify(data, null, 2), 'utf-8');
        console.log("Saved current builder to current_builder_5137.json");
    } else {
        console.log("Failed", data);
    }
}

getElementorBuilder();
