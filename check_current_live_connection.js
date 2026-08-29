const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');

async function checkLiveStatus() {
    console.log("📡 Testing active connection right now...");
    try {
        const res = await fetch("https://nufca.com/wp-json/wp/v2/users/me", {
            headers: {
                "Authorization": `Basic ${credentials}`,
                "User-Agent": "WordPress-Connector/1.0"
            }
        });
        const status = res.status;
        const data = await res.json();
        console.log(`Status: ${status}`);
        if (status === 200) {
            console.log(`Connected User ID: ${data.id}`);
            console.log(`User Name: ${data.name}`);
            console.log(`Roles: ${data.roles.join(', ')}`);
        }
    } catch(e) {
        console.log("Error:", e.message);
    }
}

checkLiveStatus();
