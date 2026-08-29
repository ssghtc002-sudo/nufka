const allPages = [
  // 0. List of Audit Services (Hub Cluster)
  { category: "Audit List Hub", name: "Audit List - UAE", url: "https://nufca.com/list-of-audit-services-in-uae/" },
  { category: "Audit List Hub", name: "Audit List - Dubai", url: "https://nufca.com/list-of-audit-services-in-uae/dubai/" },
  { category: "Audit List Hub", name: "Audit List - Gold Souk", url: "https://nufca.com/list-of-audit-services-in-uae/gold-souk-dubai/" },
  { category: "Audit List Hub", name: "Audit List - Abu Dhabi", url: "https://nufca.com/list-of-audit-services-in-uae/abu-dhabi/" },
  { category: "Audit List Hub", name: "Audit List - Sharjah", url: "https://nufca.com/list-of-audit-services-in-uae/sharjah/" },

  // 1. Corporate Tax
  { category: "Corporate Tax", name: "Corporate Tax - UAE", url: "https://nufca.com/corporate-tax-in-uae/" },
  { category: "Corporate Tax", name: "Corporate Tax - Dubai", url: "https://nufca.com/corporate-tax-in-uae/dubai/" },
  { category: "Corporate Tax", name: "Corporate Tax - Gold Souk", url: "https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" },
  { category: "Corporate Tax", name: "Corporate Tax - Abu Dhabi", url: "https://nufca.com/corporate-tax-in-uae/abu-dhabi/" },
  { category: "Corporate Tax", name: "Corporate Tax - Sharjah", url: "https://nufca.com/corporate-tax-in-uae/sharjah/" },

  // 2. VAT Consultancy
  { category: "VAT Consultancy", name: "VAT Consultancy - UAE", url: "https://nufca.com/vat-consultancy-in-uae/" },
  { category: "VAT Consultancy", name: "VAT Consultancy - Dubai", url: "https://nufca.com/vat-consultancy-in-uae/dubai/" },
  { category: "VAT Consultancy", name: "VAT Consultancy - Gold Souk", url: "https://nufca.com/vat-consultancy-in-uae/gold-souk-dubai/" },
  { category: "VAT Consultancy", name: "VAT Consultancy - Abu Dhabi", url: "https://nufca.com/vat-consultancy-in-uae/abu-dhabi/" },
  { category: "VAT Consultancy", name: "VAT Consultancy - Sharjah", url: "https://nufca.com/vat-consultancy-in-uae/sharjah/" },

  // 3. Audit & Assurance
  { category: "Audit & Assurance", name: "Audit & Assurance - UAE", url: "https://nufca.com/audit-assurance-uae/" },
  { category: "Audit & Assurance", name: "Audit & Assurance - Dubai", url: "https://nufca.com/audit-assurance-uae/dubai/" },
  { category: "Audit & Assurance", name: "Audit & Assurance - Gold Souk", url: "https://nufca.com/audit-assurance-uae/gold-souk-dubai/" },
  { category: "Audit & Assurance", name: "Audit & Assurance - Abu Dhabi", url: "https://nufca.com/audit-assurance-uae/abu-dhabi/" },
  { category: "Audit & Assurance", name: "Audit & Assurance - Sharjah", url: "https://nufca.com/audit-assurance-uae/sharjah/" },

  // 4. Internal Audit
  { category: "Internal Audit", name: "Internal Audit - UAE", url: "https://nufca.com/internal-audit-uae/" },
  { category: "Internal Audit", name: "Internal Audit - Dubai", url: "https://nufca.com/internal-audit-uae/dubai/" },
  { category: "Internal Audit", name: "Internal Audit - Gold Souk", url: "https://nufca.com/internal-audit-uae/gold-souk-dubai/" },
  { category: "Internal Audit", name: "Internal Audit - Abu Dhabi", url: "https://nufca.com/internal-audit-uae/abu-dhabi/" },
  { category: "Internal Audit", name: "Internal Audit - Sharjah", url: "https://nufca.com/internal-audit-uae/sharjah/" },

  // 5. RERA Audit
  { category: "RERA Audit", name: "RERA Audit - UAE", url: "https://nufca.com/rera-audit-uae/" },
  { category: "RERA Audit", name: "RERA Audit - Dubai", url: "https://nufca.com/rera-audit-uae/dubai/" },
  { category: "RERA Audit", name: "RERA Audit - Gold Souk", url: "https://nufca.com/rera-audit-uae/gold-souk-dubai/" },
  { category: "RERA Audit", name: "RERA Audit - Abu Dhabi", url: "https://nufca.com/rera-audit-uae/abu-dhabi/" },
  { category: "RERA Audit", name: "RERA Audit - Sharjah", url: "https://nufca.com/rera-audit-uae/sharjah/" },

  // 6. Mollak Services
  { category: "Mollak Services", name: "Mollak Services - UAE", url: "https://nufca.com/mollak-audit-services-uae/" },
  { category: "Mollak Services", name: "Mollak Services - Dubai", url: "https://nufca.com/mollak-audit-services-uae/dubai/" },
  { category: "Mollak Services", name: "Mollak Services - Gold Souk", url: "https://nufca.com/mollak-audit-services-uae/gold-souk-dubai/" },
  { category: "Mollak Services", name: "Mollak Services - Abu Dhabi", url: "https://nufca.com/mollak-audit-services-uae/abu-dhabi/" },
  { category: "Mollak Services", name: "Mollak Services - Sharjah", url: "https://nufca.com/mollak-audit-services-uae/sharjah/" },

  // 7. FTA VAT Audit
  { category: "FTA VAT Audit", name: "FTA VAT Audit - UAE", url: "https://nufca.com/fta-vat-audit-assistance-uae/" },
  { category: "FTA VAT Audit", name: "FTA VAT Audit - Dubai", url: "https://nufca.com/fta-vat-audit-assistance-uae/dubai/" },
  { category: "FTA VAT Audit", name: "FTA VAT Audit - Gold Souk", url: "https://nufca.com/fta-vat-audit-assistance-uae/gold-souk-dubai/" },
  { category: "FTA VAT Audit", name: "FTA VAT Audit - Abu Dhabi", url: "https://nufca.com/fta-vat-audit-assistance-uae/abu-dhabi/" },
  { category: "FTA VAT Audit", name: "FTA VAT Audit - Sharjah", url: "https://nufca.com/fta-vat-audit-assistance-uae/sharjah/" },

  // 8. Excise Tax
  { category: "Excise Tax", name: "Excise Tax - UAE", url: "https://nufca.com/excise-tax-services-in-uae/" },
  { category: "Excise Tax", name: "Excise Tax - Dubai", url: "https://nufca.com/excise-tax-services-in-uae/dubai/" },
  { category: "Excise Tax", name: "Excise Tax - Gold Souk", url: "https://nufca.com/excise-tax-services-in-uae/gold-souk-dubai/" },
  { category: "Excise Tax", name: "Excise Tax - Abu Dhabi", url: "https://nufca.com/excise-tax-services-in-uae/abu-dhabi/" },
  { category: "Excise Tax", name: "Excise Tax - Sharjah", url: "https://nufca.com/excise-tax-services-in-uae/sharjah/" },

  // 9. ESR Compliance
  { category: "ESR Compliance", name: "ESR Compliance - UAE", url: "https://nufca.com/esr-compliance-services-in-uae/" },
  { category: "ESR Compliance", name: "ESR Compliance - Dubai", url: "https://nufca.com/esr-compliance-services-in-uae/dubai/" },
  { category: "ESR Compliance", name: "ESR Compliance - Gold Souk", url: "https://nufca.com/esr-compliance-services-in-uae/gold-souk-dubai/" },
  { category: "ESR Compliance", name: "ESR Compliance - Abu Dhabi", url: "https://nufca.com/esr-compliance-services-in-uae/abu-dhabi/" },
  { category: "ESR Compliance", name: "ESR Compliance - Sharjah", url: "https://nufca.com/esr-compliance-services-in-uae/sharjah/" },
];

async function runComplete50Check() {
  console.log(`\n================================================================================`);
  console.log(`🌐 COMPREHENSIVE LIVE AUDIT: ALL 50 PAGES (9 Services + 1 Hub × 5 Locations)`);
  console.log(`================================================================================\n`);
  
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < allPages.length; i++) {
    const p = allPages[i];
    try {
      const res = await fetch(p.url);
      const html = await res.text();
      
      const statusOk = res.status === 200;
      const bannerHidden = /#pagetitle/i.test(html) && /display\s*:\s*none/i.test(html);
      const hasHero = /#0b2545/i.test(html) && /#134074/i.test(html);
      const hasWa = /wa\.me\/97142500679/i.test(html);
      const hasPhone = /04\s*325\s*8361|043258361/i.test(html);
      const hasSchema = /application\/ld\+json/i.test(html);
      const isRich = html.length > 10000;

      const isSuccess = statusOk && bannerHidden && hasHero && hasWa && hasPhone && hasSchema && isRich;

      if (isSuccess) {
        passed++;
        console.log(`✅ [${String(i+1).padStart(2, '0')}/50] ${p.name.padEnd(28, ' ')} | HTTP 200 | Banner Hidden ✓ | Hero ✓ | WA ✓ | Schema ✓ | Size: ${Math.round(html.length/1024)}KB`);
      } else {
        failed++;
        console.log(`❌ [${String(i+1).padStart(2, '0')}/50] ${p.name.padEnd(28, ' ')} | Failed checks!`);
      }
    } catch (e) {
      failed++;
      console.log(`❌ [${String(i+1).padStart(2, '0')}/50] ${p.name.padEnd(28, ' ')} | Error: ${e.message}`);
    }
  }

  console.log(`\n================================================================================`);
  console.log(`🎯 AUDIT SUMMARY: ${passed}/50 PASSED | ${failed} FAILED`);
  console.log(`================================================================================\n`);
}

runComplete50Check();
