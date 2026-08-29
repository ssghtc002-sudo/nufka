const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

const pages = [
    { id: 99001, slug: "corporate-tax-in-uae" },
    { id: 99101, slug: "dubai" },
    { id: 99102, slug: "gold-souk-dubai" },
    { id: 99103, slug: "abu-dhabi" },
    { id: 99104, slug: "sharjah" }
];

function getFilterDropdownHTML(activeSlug) {
    return `
<!-- Simple Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 20px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px; transition: border-color 0.2s;">
    <option value="https://nufca.com/corporate-tax-in-uae/" ${activeSlug==='corporate-tax-in-uae'?'selected':''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/dubai/" ${activeSlug==='dubai'?'selected':''}>🏙️ Dubai (Mainland & Free Zones)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" ${activeSlug==='gold-souk-dubai'?'selected':''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/abu-dhabi/" ${activeSlug==='abu-dhabi'?'selected':''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/sharjah/" ${activeSlug==='sharjah'?'selected':''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>
`;
}

async function updateAllPagesWithFilter() {
    for (const page of pages) {
        console.log(`\n⚙️ Processing Page ID ${page.id} (${page.slug})...`);

        const getRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${page.id}`, { headers });
        if (!getRes.ok) {
            console.log(`Failed to fetch page ${page.id}`);
            continue;
        }

        const pageData = await getRes.json();
        let content = pageData.content.raw || pageData.content.rendered;

        // Clean out old filter bars or grid
        content = content.replace(/<!-- Simple Filter Location Dropdown Bar -->[\s\S]*?<\/div>\s*<\/div>/g, '');
        content = content.replace(/<!-- Simple Filter Location Dropdown Bar -->[\s\S]*?<\/div>/g, '');
        content = content.replace(/<div class="nufca-city-nav">[\s\S]*?<\/div>/g, '');
        content = content.replace(/<!-- Modern Executive UAE Locations Grid Section -->[\s\S]*?<\/div>\s*<\/div>/g, '');

        const filterHTML = getFilterDropdownHTML(page.slug);

        let newContent = content;
        if (content.includes('</div>\n\n    <!-- Mobile-Optimized')) {
            newContent = content.replace('</div>\n\n    <!-- Mobile-Optimized', `</div>\n\n${filterHTML}\n\n    <!-- Mobile-Optimized`);
        } else {
            newContent = filterHTML + "\n\n" + content;
        }

        const updateRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${page.id}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ content: newContent })
        });

        console.log(`  --> Update Status for ${page.slug}: ${updateRes.status}`);
    }

    console.log("\n🎉 ALL 5 PAGES UPDATED WITH CLEAN SIMPLE FILTER LOCATION DROPDOWN!");
}

updateAllPagesWithFilter();
