const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\post5137_edit.html', 'utf-8');

const formMatch = html.match(/<form[^>]*name="post"[^>]*>([\s\S]*?)<\/form>/i);

if (formMatch) {
    const formHtml = formMatch[1];
    const inputs = [...formHtml.matchAll(/<input[^>]*name="([^"]*)"[^>]*value="([^"]*)"/gi)];
    console.log("Form Inputs found in post.php for 5137:");
    inputs.forEach(i => console.log(`  ${i[1]} = "${i[2]}"`));
} else {
    console.log("form name='post' not found.");
}
