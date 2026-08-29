async function inspectPageAuthors() {
    try {
        const res = await fetch("https://nufca.com/wp-json/wp/v2/pages?per_page=20");
        if (res.ok) {
            const pages = await res.json();
            const authorIds = [...new Set(pages.map(p => p.author))];
            console.log("Author IDs for pages:", authorIds);
        }
    } catch(e) {
        console.log("Error:", e.message);
    }
}
inspectPageAuthors();
