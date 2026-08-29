const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

const duplicateSlugs = [
    "company-formation-services",
    "tax-agent-services",
    "tax-agent-dubai",
    "business-valuation-due-diligence",
    "why-bookkeeping-services-in-dubai-are-essential-for-business-growth",
    "freezone-offshore-company-formation-services-in-dubai-uae",
    "understanding-external-financial-audit-services-in-dubai",
    "the-role-of-tax-agent-services-in-dubai-uae-for-modern-businesses"
];

async function findDuplicatePosts() {
    console.log("🔍 Searching WordPress for existing pages & posts matching duplicate slugs...\n");

    for (const slug of duplicateSlugs) {
        // Check Pages
        const pageRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages?slug=${slug}`, { headers });
        const pages = await pageRes.json();

        // Check Posts
        const postRes = await fetch(`https://nufca.com/wp-json/wp/v2/posts?slug=${slug}`, { headers });
        const posts = await postRes.json();

        console.log(`Slug: ${slug}`);
        if (pages.length > 0) {
            console.log(`  --> Found PAGE ID: ${pages[0].id} (Status: ${pages[0].status}, Link: ${pages[0].link})`);
        }
        if (posts.length > 0) {
            console.log(`  --> Found POST ID: ${posts[0].id} (Status: ${posts[0].status}, Link: ${posts[0].link})`);
        }
        if (pages.length === 0 && posts.length === 0) {
            console.log(`  --> No exact page/post found for slug '${slug}'`);
        }
        console.log("---");
    }
}

findDuplicatePosts();
