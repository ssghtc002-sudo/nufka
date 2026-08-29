const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_editor_5137.html', 'utf-8');

const initialDocMatch = html.match(/"initialDocument":({[\s\S]*?}),"postData"/);

if (initialDocMatch) {
    console.log("Found initialDocument! Length:", initialDocMatch[1].length);
    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\initial_doc_5137.json', initialDocMatch[1], 'utf-8');

    const docObj = JSON.parse(initialDocMatch[1]);
    console.log("Document Title:", docObj.title);
    console.log("Elements count:", docObj.elements ? docObj.elements.length : 0);

    const docStr = JSON.stringify(docObj);
    const urls = [...docStr.matchAll(/https?:\/\/[^\s"'<>\\]+/gi)];
    console.log("\nURLs in Elementor initialDocument:");
    urls.filter(u => u[0].includes('nufca.com')).forEach(u => console.log(`  --> ${u[0]}`));
} else {
    console.log("initialDocMatch not found.");
}
