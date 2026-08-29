const allPages = [
  // 0. List of Audit Services (Hub Cluster)
  "https://nufca.com/list-of-audit-services-in-uae/",
  "https://nufca.com/list-of-audit-services-in-uae/dubai/",
  "https://nufca.com/list-of-audit-services-in-uae/gold-souk-dubai/",
  "https://nufca.com/list-of-audit-services-in-uae/abu-dhabi/",
  "https://nufca.com/list-of-audit-services-in-uae/sharjah/",

  // 1. Corporate Tax
  "https://nufca.com/corporate-tax-in-uae/",
  "https://nufca.com/corporate-tax-in-uae/dubai/",
  "https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/",
  "https://nufca.com/corporate-tax-in-uae/abu-dhabi/",
  "https://nufca.com/corporate-tax-in-uae/sharjah/",

  // 2. VAT Consultancy
  "https://nufca.com/vat-consultancy-in-uae/",
  "https://nufca.com/vat-consultancy-in-uae/dubai/",
  "https://nufca.com/vat-consultancy-in-uae/gold-souk-dubai/",
  "https://nufca.com/vat-consultancy-in-uae/abu-dhabi/",
  "https://nufca.com/vat-consultancy-in-uae/sharjah/",

  // 3. Audit & Assurance
  "https://nufca.com/audit-assurance-uae/",
  "https://nufca.com/audit-assurance-uae/dubai/",
  "https://nufca.com/audit-assurance-uae/gold-souk-dubai/",
  "https://nufca.com/audit-assurance-uae/abu-dhabi/",
  "https://nufca.com/audit-assurance-uae/sharjah/",

  // 4. Internal Audit
  "https://nufca.com/internal-audit-uae/",
  "https://nufca.com/internal-audit-uae/dubai/",
  "https://nufca.com/internal-audit-uae/gold-souk-dubai/",
  "https://nufca.com/internal-audit-uae/abu-dhabi/",
  "https://nufca.com/internal-audit-uae/sharjah/",

  // 5. RERA Audit
  "https://nufca.com/rera-audit-uae/",
  "https://nufca.com/rera-audit-uae/dubai/",
  "https://nufca.com/rera-audit-uae/gold-souk-dubai/",
  "https://nufca.com/rera-audit-uae/abu-dhabi/",
  "https://nufca.com/rera-audit-uae/sharjah/",

  // 6. Mollak Services
  "https://nufca.com/mollak-audit-services-uae/",
  "https://nufca.com/mollak-audit-services-uae/dubai/",
  "https://nufca.com/mollak-audit-services-uae/gold-souk-dubai/",
  "https://nufca.com/mollak-audit-services-uae/abu-dhabi/",
  "https://nufca.com/mollak-audit-services-uae/sharjah/",

  // 7. FTA VAT Audit
  "https://nufca.com/fta-vat-audit-assistance-uae/",
  "https://nufca.com/fta-vat-audit-assistance-uae/dubai/",
  "https://nufca.com/fta-vat-audit-assistance-uae/gold-souk-dubai/",
  "https://nufca.com/fta-vat-audit-assistance-uae/abu-dhabi/",
  "https://nufca.com/fta-vat-audit-assistance-uae/sharjah/",

  // 8. Excise Tax
  "https://nufca.com/excise-tax-services-in-uae/",
  "https://nufca.com/excise-tax-services-in-uae/dubai/",
  "https://nufca.com/excise-tax-services-in-uae/gold-souk-dubai/",
  "https://nufca.com/excise-tax-services-in-uae/abu-dhabi/",
  "https://nufca.com/excise-tax-services-in-uae/sharjah/",

  // 9. ESR Compliance
  "https://nufca.com/esr-compliance-services-in-uae/",
  "https://nufca.com/esr-compliance-services-in-uae/dubai/",
  "https://nufca.com/esr-compliance-services-in-uae/gold-souk-dubai/",
  "https://nufca.com/esr-compliance-services-in-uae/abu-dhabi/",
  "https://nufca.com/esr-compliance-services-in-uae/sharjah/",
];

async function verifyAllDropdowns() {
  console.log("🔍 Checking all 50 live pages for the new sleek Dropdown Filter Bar...\n");
  let passed = 0;
  for (let i = 0; i < allPages.length; i++) {
    const url = allPages[i];
    try {
      const res = await fetch(url);
      const html = await res.text();
      const hasDropdown = /class=["']nufca-filter-bar["']/i.test(html) && /<select/i.test(html);
      if (hasDropdown) {
        passed++;
        console.log(`✅ [${String(i+1).padStart(2, '0')}/50] Dropdown Active ✓ | ${url}`);
      } else {
        console.log(`❌ [${String(i+1).padStart(2, '0')}/50] Dropdown Missing | ${url}`);
      }
    } catch (e) {
      console.log(`❌ [${String(i+1).padStart(2, '0')}/50] Error ${e.message} | ${url}`);
    }
  }
  console.log(`\n🎉 Results: ${passed}/50 Pages have the sleek Dropdown Filter Bar!`);
}

verifyAllDropdowns();
