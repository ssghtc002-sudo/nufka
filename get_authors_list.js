async function getPostAuthors() {
    try {
        const res = await fetch("https://nufca.com/wp-json/wp/v2/posts?per_page=100");
        if (res.ok) {
            const posts = await res.json();
            const authors = [...new Set(posts.map(p => p.author))];
            console.log("Unique Author IDs found across posts:", authors);
        }
    } catch (e) {
        console.log("Error:", e.message);
    }
}

getPostAuthors();
