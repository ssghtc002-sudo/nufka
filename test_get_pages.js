async function testPages() {
    try {
        const res = await fetch("https://nufca.com/wp-json/wp/v2/pages?per_page=5");
        console.log("Pages Status:", res.status);
        if (res.ok) {
            const pages = await res.json();
            console.log(`Retrieved ${pages.length} public pages.`);
            pages.forEach(p => {
                console.log(`- Page ID ${p.id}: "${p.title.rendered}" (${p.link})`);
            });
        } else {
            console.log("Pages response:", await res.text());
        }
    } catch(e) {
        console.log("Error:", e.message);
    }
}
testPages();
