const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function scanAllPagesForForms() {
    console.log("🔍 Scanning all WordPress pages for forms...\n");

    let pageNum = 1;
    let allPagesWithForms = [];

    while (true) {
        const res = await fetch(`https://nufca.com/wp-json/wp/v2/pages?per_page=100&page=${pageNum}&status=publish`, { headers });
        if (!res.ok) break;

        const pages = await res.json();
        if (!pages || pages.length === 0) break;

        for (const p of pages) {
            const rawContent = p.content.raw || p.content.rendered || "";
            if (rawContent.includes('<form') || rawContent.includes('<input type="submit"') || rawContent.includes('wpcf7') || rawContent.includes('elementor-form')) {
                allPagesWithForms.push({
                    id: p.id,
                    slug: p.slug,
                    title: p.title.rendered,
                    link: p.link
                });
            }
        }

        pageNum++;
    }

    console.log(`Found ${allPagesWithForms.length} pages containing forms:`);
    console.log(JSON.stringify(allPagesWithForms, null, 2));

    fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\pages_with_forms.json', JSON.stringify(allPagesWithForms, null, 2), 'utf-8');
}

scanAllPagesForForms();
