const urlsToCheck = [
  // List of Audit Services
  "https://nufca.com/list-of-audit-services-in-uae",
  "https://nufca.com/list-of-audit-services-in-uae/dubai",
  "https://nufca.com/list-of-audit-services-in-uae/gold-souk-dubai",
  "https://nufca.com/list-of-audit-services-in-uae/abu-dhabi",
  "https://nufca.com/list-of-audit-services-in-uae/sharjah",
  // Service 1: Corporate Tax
  "https://nufca.com/corporate-tax-in-uae/",
  "https://nufca.com/corporate-tax-in-uae/dubai/",
  "https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/",
  "https://nufca.com/corporate-tax-in-uae/abu-dhabi/",
  "https://nufca.com/corporate-tax-in-uae/sharjah/",
  // Service 2: VAT Consultancy
  "https://nufca.com/vat-consultancy-in-uae/",
  "https://nufca.com/vat-consultancy-in-uae/dubai/",
  "https://nufca.com/vat-consultancy-in-uae/gold-souk-dubai/",
  "https://nufca.com/vat-consultancy-in-uae/abu-dhabi/",
  "https://nufca.com/vat-consultancy-in-uae/sharjah/",
  // Service 3: Audit & Assurance
  "https://nufca.com/audit-assurance-uae/",
  "https://nufca.com/audit-assurance-uae/dubai/",
  "https://nufca.com/audit-assurance-uae/gold-souk-dubai/",
  "https://nufca.com/audit-assurance-uae/abu-dhabi/",
  "https://nufca.com/audit-assurance-uae/sharjah/",
  // Service 4: Internal Audit
  "https://nufca.com/internal-audit-uae/",
  "https://nufca.com/internal-audit-uae/dubai/",
  "https://nufca.com/internal-audit-uae/gold-souk-dubai/",
  "https://nufca.com/internal-audit-uae/abu-dhabi/",
  "https://nufca.com/internal-audit-uae/sharjah/",
  // Service 5: RERA Audit
  "https://nufca.com/rera-audit-uae/",
  "https://nufca.com/rera-audit-uae/dubai/",
  "https://nufca.com/rera-audit-uae/gold-souk-dubai/",
  "https://nufca.com/rera-audit-uae/abu-dhabi/",
  "https://nufca.com/rera-audit-uae/sharjah/",
  // Service 6: Mollak Audit
  "https://nufca.com/mollak-audit-services-uae/",
  "https://nufca.com/mollak-audit-services-uae/dubai/",
  "https://nufca.com/mollak-audit-services-uae/gold-souk-dubai/",
  "https://nufca.com/mollak-audit-services-uae/abu-dhabi/",
  "https://nufca.com/mollak-audit-services-uae/sharjah/",
  // Service 7: FTA VAT Audit
  "https://nufca.com/fta-vat-audit-assistance-uae/",
  "https://nufca.com/fta-vat-audit-assistance-uae/dubai/",
  "https://nufca.com/fta-vat-audit-assistance-uae/gold-souk-dubai/",
  "https://nufca.com/fta-vat-audit-assistance-uae/abu-dhabi/",
  "https://nufca.com/fta-vat-audit-assistance-uae/sharjah/",
  // Service 8: Excise Tax
  "https://nufca.com/excise-tax-services-in-uae/",
  "https://nufca.com/excise-tax-services-in-uae/dubai/",
  "https://nufca.com/excise-tax-services-in-uae/gold-souk-dubai/",
  "https://nufca.com/excise-tax-services-in-uae/abu-dhabi/",
  "https://nufca.com/excise-tax-services-in-uae/sharjah/",
  // Service 9: ESR Compliance
  "https://nufca.com/esr-compliance-services-in-uae/",
  "https://nufca.com/esr-compliance-services-in-uae/dubai/",
  "https://nufca.com/esr-compliance-services-in-uae/gold-souk-dubai/",
  "https://nufca.com/esr-compliance-services-in-uae/abu-dhabi/",
  "https://nufca.com/esr-compliance-services-in-uae/sharjah/"
];

async function verifyAllPages() {
  console.log(`🔍 Starting Live Verification of all ${urlsToCheck.length} pages...\n`);
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < urlsToCheck.length; i++) {
    const url = urlsToCheck[i];
    try {
      const res = await fetch(url);
      const html = await res.text();
      
      const hasHero = html.includes("nufca-article-container");
      const hasConsultationCard = html.includes("nufca-consultation-card");
      const hasHideCSS = /#pagetitle/i.test(html) || /display\s*:\s*none/i.test(html);
      
      if (res.status === 200 && hasHero && hasConsultationCard && hasHideCSS) {
        console.log(`[${i+1}/${urlsToCheck.length}] ✅ 200 OK | ${url}`);
        passed++;
      } else {
        console.warn(`[${i+1}/${urlsToCheck.length}] ⚠️ Warning | Status: ${res.status} | Hero: ${hasHero} | Card: ${hasConsultationCard} | CSS: ${hasHideCSS} | URL: ${url}`);
        failed++;
      }
    } catch (e) {
      console.error(`[${i+1}/${urlsToCheck.length}] ❌ Failed: ${url} | Error: ${e.message}`);
      failed++;
    }
  }

  console.log(`\n========================================`);
  console.log(`🏁 Verification Complete: ${passed}/${urlsToCheck.length} Passed, ${failed} Failed`);
  console.log(`========================================`);
}

verifyAllPages();
