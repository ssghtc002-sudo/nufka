const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function getMegaMenu5137() {
    console.log("🔍 Fetching Elementor Mega Menu Template (Post ID 5137)...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/posts/5137", { headers });
    console.log("Status:", res.status);

    if (!res.ok) {
        // Try elementor_library or pages
        const res2 = await fetch("https://nufca.com/wp-json/wp/v2/elementor_library/5137", { headers });
        console.log("Elementor Library Status:", res2.status);
        if (res2.ok) {
            const data = await res2.json();
            fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\megamenu_5137.json', JSON.stringify(data, null, 2), 'utf-8');
            console.log("Saved megamenu_5137.json!");
            console.log("Content Length:", data.content.rendered.length);
        }
    }
}

getMegaMenu5137();
