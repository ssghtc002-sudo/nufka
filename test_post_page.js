const WP_URL = "https://nufca.com";
const USERNAME = "nufka";
const APP_PASSWORD = "GORK XC6d MhAe fKrn k3h5 DKA6";

async function testPostPage() {
    const cleanAppPass = APP_PASSWORD.replace(/\s+/g, '');
    const credentials = Buffer.from(`${USERNAME}:${cleanAppPass}`).toString('base64');

    console.log(`Attempting to create draft page on ${WP_URL} as '${USERNAME}'...`);

    try {
        const response = await fetch(`${WP_URL}/wp-json/wp/v2/pages`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json',
                'User-Agent': 'WordPress-Connector/1.0'
            },
            body: JSON.stringify({
                title: "pSEO Test Draft Page",
                content: "<p>This is a test draft page created via API.</p>",
                status: "draft"
            })
        });

        const status = response.status;
        const data = await response.json();

        console.log(`POST Response Status: ${status}`);
        console.log("Response:", JSON.stringify(data, null, 2));
    } catch(e) {
        console.log("Error:", e.message);
    }
}

testPostPage();
