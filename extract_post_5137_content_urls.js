const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\post5137_edit.html', 'utf-8');

const contentMatch = html.match(/<textarea[^>]*name="content"[^>]*>([\s\S]*?)<\/textarea>/i);

if (contentMatch) {
    const postContent = contentMatch[1];
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\megamenu_post_content.html', postContent, 'utf-8');
    console.log("Extracted postContent! Length:", postContent.length);

    const urls = [...postContent.matchAll(/href="([^"]*)"/gi)];
    console.log("\nURLs in Megamenu 5137 Content:");
    urls.forEach(u => console.log(`  --> ${u[1]}`));
} else {
    console.log("content textarea not found.");
}
