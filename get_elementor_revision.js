const fs = require('fs');

const cookies = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\wp_cookies.txt', 'utf-8').trim();

// A valid nonce we found before, maybe it still works, or we can fetch a fresh one
// Actually, earlier the nonce '8a81ea2084' worked.
const nonces = ['8a81ea2084', '2833c49409', '7df63396e0', 'd4343048e1'];

async function getRevisionData() {
    console.log("Fetching revision 99153 data from Elementor...");
    
    for (const nonce of nonces) {
        const payload = {
            "get_revision": {
                "action": "get_revision_data",
                "data": { "id": 99153 }
            }
        };

        const formData = new URLSearchParams();
        formData.append('action', 'elementor_ajax');
        formData.append('_nonce', nonce);
        formData.append('editor_post_id', '5137');
        formData.append('actions', JSON.stringify(payload));

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
        if (data.success) {
            console.log("SUCCESS! Got revision data.");
            fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_revision_99153.json', JSON.stringify(data, null, 2), 'utf-8');
            return;
        } else {
            console.log("Failed with nonce", nonce, data);
        }
    }
}

getRevisionData();
