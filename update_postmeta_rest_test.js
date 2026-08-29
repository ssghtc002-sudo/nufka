const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function testPostMetaUpdate() {
    console.log("🛠️ Testing meta field update via REST API...");

    // Fetch types to see rest_base for ct-mega-menu
    const typesRes = await fetch("https://nufca.com/wp-json/wp/v2/types", { headers });
    const types = await typesRes.json();

    console.log("ct-mega-menu in REST types:", types['ct-mega-menu']);
}

testPostMetaUpdate();
