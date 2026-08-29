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

const simpleFilterDropdownHTML = `
<!-- Simple Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 14px 20px; border-radius: 10px; margin: 20px 0 30px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 14px rgba(11,37,69,0.06); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 15px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 15px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px; transition: border-color 0.2s;">
    <option value="https://nufca.com/corporate-tax-in-uae/" selected>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/dubai/">🏙️ Dubai (Mainland & Free Zones)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/">🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/abu-dhabi/">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/sharjah/">🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>
`;

async function updatePageWithFilterDropdown() {
    console.log("🔍 Fetching main Corporate Tax page (ID 99001)...");

    const getRes = await fetch("https://nufca.com/wp-json/wp/v2/pages/99001", {
        headers: headers
    });

    if (!getRes.ok) {
        console.log("Failed to fetch page 99001, status:", getRes.status);
        return;
    }

    const pageData = await getRes.json();
    let currentContent = pageData.content.raw || pageData.content.rendered;

    // Remove old Grid HTML if present
    currentContent = currentContent.replace(/<!-- Modern Executive UAE Locations Grid Section -->[\s\S]*?<\/div>\s*<\/div>/g, '');

    // Remove old filter bar if present
    currentContent = currentContent.replace(/<!-- Simple Filter Location Dropdown Bar -->[\s\S]*?<\/div>/g, '');

    // Insert Simple Filter Bar right below hero section or at top
    let newContent = currentContent;
    if (currentContent.includes('</div>\n\n    <!-- Mobile-Optimized')) {
        newContent = currentContent.replace('</div>\n\n    <!-- Mobile-Optimized', `</div>\n\n${simpleFilterDropdownHTML}\n\n    <!-- Mobile-Optimized`);
    } else {
        newContent = simpleFilterDropdownHTML + "\n\n" + currentContent;
    }

    console.log("🚀 Updating Page 99001 via REST API with Simple Filter Location Dropdown...");

    const updateRes = await fetch("https://nufca.com/wp-json/wp/v2/pages/99001", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            content: newContent
        })
    });

    console.log("Update Status:", updateRes.status);
    if (updateRes.ok) {
        console.log("🎉 SUCCESS! Simple Filter Location Dropdown added to Main Page!");
    } else {
        console.log("Error:", await updateRes.text());
    }
}

updatePageWithFilterDropdown();
