const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

async function trashServiceCPTDuplicates() {
    console.log("🧹 Trashing CPT 'service' Item ID 28 (company-formation-services) and Item ID 125 (tax-agent-services)...");

    const ids = [28, 125];
    for (const id of ids) {
        const res = await fetch(`https://nufca.com/wp-json/wp/v2/services/${id}`, {
            method: "DELETE",
            headers: headers
        });
        console.log(`Trash status for CPT service ID ${id}: ${res.status}`);
    }

    console.log("🎉 CPT SERVICE ITEMS MOVED TO TRASH!");
}

trashServiceCPTDuplicates();
