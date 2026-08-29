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

const locationsGridHTML = `
<!-- Modern Executive UAE Locations Grid Section -->
<style>
.nufca-loc-section {
  background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 35px 25px;
  margin: 40px 0;
  box-shadow: 0 10px 30px rgba(11, 37, 69, 0.05);
}
.nufca-loc-header {
  text-align: center;
  margin-bottom: 30px;
}
.nufca-loc-badge {
  background: #0b2545;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
}
.nufca-loc-title {
  color: #0b2545;
  font-size: clamp(22px, 4vw, 30px);
  font-weight: 800;
  margin: 5px 0 10px 0;
}
.nufca-loc-subtitle {
  color: #475569;
  font-size: 15px;
  max-width: 700px;
  margin: 0 auto;
}
.nufca-loc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 25px;
}
.nufca-loc-card {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}
.nufca-loc-card:hover {
  transform: translateY(-6px);
  border-color: #134074;
  box-shadow: 0 14px 28px rgba(11, 37, 69, 0.12);
}
.nufca-loc-icon-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.nufca-loc-icon {
  font-size: 32px;
}
.nufca-loc-tag {
  font-size: 11px;
  font-weight: 700;
  color: #134074;
  background: #e2e8f0;
  padding: 4px 10px;
  border-radius: 12px;
  text-transform: uppercase;
}
.nufca-card-city {
  color: #0b2545;
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 6px 0;
}
.nufca-card-addr {
  color: #64748b;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 14px;
  min-height: 40px;
}
.nufca-card-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}
.nufca-chip {
  background: #f1f5f9;
  color: #334155;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
}
.nufca-card-btn {
  background: #134074;
  color: #ffffff !important;
  text-decoration: none !important;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  padding: 10px 16px;
  border-radius: 8px;
  display: block;
  transition: background 0.2s ease;
}
.nufca-card-btn:hover {
  background: #0b2545;
}
</style>

<div class="nufca-loc-section">
  <div class="nufca-loc-header">
    <span class="nufca-loc-badge">📍 4 Physical Branch Offices Across UAE</span>
    <h2 class="nufca-loc-title">Select Your City or Business Hub</h2>
    <p class="nufca-loc-subtitle">Choose your location to access hyper-local corporate tax compliance, FTA registration, free zone QFZP rates, and local office contact details.</p>
  </div>

  <div class="nufca-loc-grid">
    
    <!-- Dubai Card -->
    <div class="nufca-loc-card">
      <div>
        <div class="nufca-loc-icon-bar">
          <span class="nufca-loc-icon">🏙️</span>
          <span class="nufca-loc-tag">Mainland & Free Zones</span>
        </div>
        <h3 class="nufca-card-city">Dubai</h3>
        <p class="nufca-card-addr">Almas Tower, JLT & Business Hubs, Dubai, United Arab Emirates</p>
        <div class="nufca-card-chips">
          <span class="nufca-chip">DMCC</span>
          <span class="nufca-chip">DAFZA</span>
          <span class="nufca-chip">DIFC</span>
          <span class="nufca-chip">Business Bay</span>
        </div>
      </div>
      <a href="https://nufca.com/corporate-tax-in-uae/dubai/" class="nufca-card-btn">Explore Dubai Tax Services →</a>
    </div>

    <!-- Gold Souk Card -->
    <div class="nufca-loc-card">
      <div>
        <div class="nufca-loc-icon-bar">
          <span class="nufca-loc-icon">🪙</span>
          <span class="nufca-loc-tag">Deira Branch</span>
        </div>
        <h3 class="nufca-card-city">Gold Souk (Deira)</h3>
        <p class="nufca-card-addr">Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai</p>
        <div class="nufca-card-chips">
          <span class="nufca-chip">Gold Traders</span>
          <span class="nufca-chip">Wholesale Tax</span>
          <span class="nufca-chip">Jewelry VAT/Tax</span>
        </div>
      </div>
      <a href="https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" class="nufca-card-btn">View Gold Souk Office →</a>
    </div>

    <!-- Abu Dhabi Card -->
    <div class="nufca-loc-card">
      <div>
        <div class="nufca-loc-icon-bar">
          <span class="nufca-loc-icon">🏛️</span>
          <span class="nufca-loc-tag">Capital Office</span>
        </div>
        <h3 class="nufca-card-city">Abu Dhabi</h3>
        <p class="nufca-card-addr">2402G, 24th Floor, Tamouh Tower, Al Reem Island, Abu Dhabi</p>
        <div class="nufca-card-chips">
          <span class="nufca-chip">ADGM</span>
          <span class="nufca-chip">KIZAD</span>
          <span class="nufca-chip">Oil & Gas Tax</span>
        </div>
      </div>
      <a href="https://nufca.com/corporate-tax-in-uae/abu-dhabi/" class="nufca-card-btn">Explore Abu Dhabi Services →</a>
    </div>

    <!-- Sharjah Card -->
    <div class="nufca-loc-card">
      <div>
        <div class="nufca-loc-icon-bar">
          <span class="nufca-loc-icon">🏭</span>
          <span class="nufca-loc-tag">Industrial Hub</span>
        </div>
        <h3 class="nufca-card-city">Sharjah</h3>
        <p class="nufca-card-addr">ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah</p>
        <div class="nufca-card-chips">
          <span class="nufca-chip">HFZ</span>
          <span class="nufca-chip">SAIF Zone</span>
          <span class="nufca-chip">Manufacturing</span>
        </div>
      </div>
      <a href="https://nufca.com/corporate-tax-in-uae/sharjah/" class="nufca-card-btn">View Sharjah Branch →</a>
    </div>

  </div>
</div>
`;

async function updateMainCorporateTaxPage() {
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

    console.log("Current content length:", currentContent.length);

    // Insert LocationsGridHTML right below the hero or at the top of content
    let newContent = currentContent;
    if (currentContent.includes('<div class="nufca-hero">')) {
        newContent = currentContent.replace('</div>\n\n    <!-- Mobile-Optimized', `</div>\n\n${locationsGridHTML}\n\n    <!-- Mobile-Optimized`);
    } else {
        newContent = locationsGridHTML + "\n\n" + currentContent;
    }

    console.log("🚀 Updating Page 99001 via REST API with Locations Grid...");

    const updateRes = await fetch("https://nufca.com/wp-json/wp/v2/pages/99001", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            content: newContent
        })
    });

    console.log("Update Status:", updateRes.status);
    if (updateRes.ok) {
        console.log("🎉 SUCCESS! Locations Grid integrated into Main Corporate Tax Page!");
    } else {
        console.log("Error:", await updateRes.text());
    }
}

updateMainCorporateTaxPage();
