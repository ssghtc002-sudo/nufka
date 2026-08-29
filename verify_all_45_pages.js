const allPages = [
  // Corporate Tax
  { name: "Corporate Tax - UAE", url: "https://nufca.com/corporate-tax-in-uae/" },
  { name: "Corporate Tax - Dubai", url: "https://nufca.com/corporate-tax-in-uae/dubai/" },
  { name: "Corporate Tax - Gold Souk", url: "https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" },
  { name: "Corporate Tax - Abu Dhabi", url: "https://nufca.com/corporate-tax-in-uae/abu-dhabi/" },
  { name: "Corporate Tax - Sharjah", url: "https://nufca.com/corporate-tax-in-uae/sharjah/" },
  // VAT Consultancy
  { name: "VAT Consultancy - UAE", url: "https://nufca.com/vat-consultancy-in-uae/" },
  { name: "VAT Consultancy - Dubai", url: "https://nufca.com/vat-consultancy-in-uae/dubai/" },
  { name: "VAT Consultancy - Gold Souk", url: "https://nufca.com/vat-consultancy-in-uae/gold-souk-dubai/" },
  { name: "VAT Consultancy - Abu Dhabi", url: "https://nufca.com/vat-consultancy-in-uae/abu-dhabi/" },
  { name: "VAT Consultancy - Sharjah", url: "https://nufca.com/vat-consultancy-in-uae/sharjah/" },
  // Audit & Assurance
  { name: "Audit & Assurance - UAE", url: "https://nufca.com/audit-assurance-uae/" },
  { name: "Audit & Assurance - Dubai", url: "https://nufca.com/audit-assurance-uae/dubai/" },
  { name: "Audit & Assurance - Gold Souk", url: "https://nufca.com/audit-assurance-uae/gold-souk-dubai/" },
  { name: "Audit & Assurance - Abu Dhabi", url: "https://nufca.com/audit-assurance-uae/abu-dhabi/" },
  { name: "Audit & Assurance - Sharjah", url: "https://nufca.com/audit-assurance-uae/sharjah/" },
  // Internal Audit
  { name: "Internal Audit - UAE", url: "https://nufca.com/internal-audit-uae/" },
  { name: "Internal Audit - Dubai", url: "https://nufca.com/internal-audit-uae/dubai/" },
  { name: "Internal Audit - Gold Souk", url: "https://nufca.com/internal-audit-uae/gold-souk-dubai/" },
  { name: "Internal Audit - Abu Dhabi", url: "https://nufca.com/internal-audit-uae/abu-dhabi/" },
  { name: "Internal Audit - Sharjah", url: "https://nufca.com/internal-audit-uae/sharjah/" },
  // RERA Audit
  { name: "RERA Audit - UAE", url: "https://nufca.com/rera-audit-uae/" },
  { name: "RERA Audit - Dubai", url: "https://nufca.com/rera-audit-uae/dubai/" },
  { name: "RERA Audit - Gold Souk", url: "https://nufca.com/rera-audit-uae/gold-souk-dubai/" },
  { name: "RERA Audit - Abu Dhabi", url: "https://nufca.com/rera-audit-uae/abu-dhabi/" },
  { name: "RERA Audit - Sharjah", url: "https://nufca.com/rera-audit-uae/sharjah/" },
  // Mollak Services
  { name: "Mollak Services - UAE", url: "https://nufca.com/mollak-audit-services-uae/" },
  { name: "Mollak Services - Dubai", url: "https://nufca.com/mollak-audit-services-uae/dubai/" },
  { name: "Mollak Services - Gold Souk", url: "https://nufca.com/mollak-audit-services-uae/gold-souk-dubai/" },
  { name: "Mollak Services - Abu Dhabi", url: "https://nufca.com/mollak-audit-services-uae/abu-dhabi/" },
  { name: "Mollak Services - Sharjah", url: "https://nufca.com/mollak-audit-services-uae/sharjah/" },
  // FTA VAT Audit
  { name: "FTA VAT Audit - UAE", url: "https://nufca.com/fta-vat-audit-assistance-uae/" },
  { name: "FTA VAT Audit - Dubai", url: "https://nufca.com/fta-vat-audit-assistance-uae/dubai/" },
  { name: "FTA VAT Audit - Gold Souk", url: "https://nufca.com/fta-vat-audit-assistance-uae/gold-souk-dubai/" },
  { name: "FTA VAT Audit - Abu Dhabi", url: "https://nufca.com/fta-vat-audit-assistance-uae/abu-dhabi/" },
  { name: "FTA VAT Audit - Sharjah", url: "https://nufca.com/fta-vat-audit-assistance-uae/sharjah/" },
  // Excise Tax
  { name: "Excise Tax - UAE", url: "https://nufca.com/excise-tax-services-in-uae/" },
  { name: "Excise Tax - Dubai", url: "https://nufca.com/excise-tax-services-in-uae/dubai/" },
  { name: "Excise Tax - Gold Souk", url: "https://nufca.com/excise-tax-services-in-uae/gold-souk-dubai/" },
  { name: "Excise Tax - Abu Dhabi", url: "https://nufca.com/excise-tax-services-in-uae/abu-dhabi/" },
  { name: "Excise Tax - Sharjah", url: "https://nufca.com/excise-tax-services-in-uae/sharjah/" },
  // ESR Compliance
  { name: "ESR Compliance - UAE", url: "https://nufca.com/esr-compliance-services-in-uae/" },
  { name: "ESR Compliance - Dubai", url: "https://nufca.com/esr-compliance-services-in-uae/dubai/" },
  { name: "ESR Compliance - Gold Souk", url: "https://nufca.com/esr-compliance-services-in-uae/gold-souk-dubai/" },
  { name: "ESR Compliance - Abu Dhabi", url: "https://nufca.com/esr-compliance-services-in-uae/abu-dhabi/" },
  { name: "ESR Compliance - Sharjah", url: "https://nufca.com/esr-compliance-services-in-uae/sharjah/" },
];

async function verifyAll() {
  console.log(`🔍 Final Verification: ${allPages.length} Pages\n`);
  
  let passed = 0;
  let failed = 0;
  const failures = [];

  for (const page of allPages) {
    try {
      const res = await fetch(page.url);
      const html = await res.text();
      
      const hasHero = /linear-gradient.*#0b2545|#134074/i.test(html);
      const hasBannerHide = /#pagetitle/i.test(html) && /display\s*:\s*none/i.test(html);
      const hasConsultCard = /nufca-consultation-card|Direct Partner Access|nufca-card-actions/i.test(html);
      const hasJsonLd = /application\/ld\+json/i.test(html);
      const hasFAQ = /FAQPage|acceptedAnswer/i.test(html);
      
      const allChecks = res.status === 200 && hasHero && hasBannerHide && hasConsultCard && hasJsonLd;
      
      if (allChecks) {
        console.log(`✅ ${page.name} | HTTP ${res.status} | Hero ✓ | Banner ✓ | Card ✓ | Schema ✓ | FAQ ${hasFAQ ? '✓' : '⚠️'}`);
        passed++;
      } else {
        const issues = [];
        if (res.status !== 200) issues.push(`HTTP ${res.status}`);
        if (!hasHero) issues.push("No Hero");
        if (!hasBannerHide) issues.push("No Banner Hide");
        if (!hasConsultCard) issues.push("No Consult Card");
        if (!hasJsonLd) issues.push("No JSON-LD");
        console.log(`❌ ${page.name} | ISSUES: ${issues.join(", ")}`);
        failed++;
        failures.push({ name: page.name, url: page.url, issues });
      }
    } catch (e) {
      console.log(`❌ ${page.name} | ERROR: ${e.message}`);
      failed++;
      failures.push({ name: page.name, url: page.url, issues: [e.message] });
    }
  }

  console.log(`\n${"=".repeat(60)}`);
  console.log(`📊 FINAL RESULTS: ${passed}/${allPages.length} PASSED | ${failed} FAILED`);
  
  if (failures.length > 0) {
    console.log(`\n⚠️ Failed Pages:`);
    failures.forEach(f => console.log(`   ${f.name}: ${f.issues.join(", ")}`));
  }
  
  console.log(`${"=".repeat(60)}`);
}

verifyAll();
