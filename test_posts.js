async function testPosts() {
    try {
        const res = await fetch("https://nufca.com/wp-json/wp/v2/posts");
        console.log("Posts Status:", res.status);
        if (res.ok) {
            const posts = await res.json();
            console.log(`Found ${posts.length} public posts.`);
            if (posts.length > 0) {
                console.log("First post title:", posts[0].title.rendered);
                console.log("Author ID:", posts[0].author);
            }
        } else {
            console.log("Response:", await res.text());
        }
    } catch (e) {
        console.log("Error:", e.message);
    }
}
testPosts();
