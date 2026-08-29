async function getAuthorSlug() {
    try {
        const res = await fetch("https://nufca.com/wp-json/wp/v2/users/5");
        console.log("Author 5 Status:", res.status);
        if (res.ok) {
            const user = await res.json();
            console.log("Author 5 User Details:", {
                id: user.id,
                name: user.name,
                slug: user.slug
            });
            return user.slug;
        } else {
            console.log("User endpoint response:", await res.text());
        }
    } catch (e) {
        console.log("Error:", e.message);
    }
}

getAuthorSlug();
