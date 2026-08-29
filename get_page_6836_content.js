const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function getPage6836() {
    const res = await fetch("https://nufca.com/wp-json/wp/v2/pages/6836", { headers });
    const page = await res.json();

    console.log("Page ID 6836 Title:", page.title.rendered);
    console.log("Content Length:", page.content.rendered.length);
    console.log("Snippet:", page.content.rendered.substring(0, 300));
}

getPage6836();
