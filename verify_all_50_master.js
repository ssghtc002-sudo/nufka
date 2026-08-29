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

async function verifyAllMaster() {
  console.log(`🚀 Starting Global Master Verification for ALL ${allPages.length} Pages (9 Services + 1 Hub × 5 Locations)...\n`);
  
  let passed = 0;
  let failed = 0;
  const failures = [];

  for (let i = 0; i < allPages.length; i++) {
    const page = allPages[i];
    try {
      const res = await fetch(page.url);
      const html = await res.text();
      
      const statusOk = res.status === 200;
      const hasHero = /hero-sec|hero-section|nufca-hero|linear-gradient.*#0b2545|#134074/i.test(html);
      const hasBannerHide = /#pagetitle/i.test(html) && /display\s*:\s*none/i.test(html);
      const hasWhatsApp = /wa\.me\/97142500679/i.test(html);
      const hasPhone = /04\s*325\s*8361|tel:043258361/i.test(html);
      const hasJsonLd = /application\/ld\+json/i.test(html);
      const hasLocationNav = /location-filter|loc-bar|select.*window\.location\.href|location-selector|Filter Location|nufca-filter-bar|Select Location|loc-link/i.test(html);
      const isRichContent = html.length > 5000;

      const passedAll = statusOk && hasHero && hasBannerHide && hasWhatsApp && hasPhone && hasJsonLd && hasLocationNav && isRichContent;

      if (passedAll) {
        passed++;
        console.log(`✅ [${String(i+1).padStart(2, '0')}/${allPages.length}] ${page.name.padEnd(30, ' ')} | 200 OK | Banner Hide ✓ | Hero ✓ | LocNav ✓ | WhatsApp ✓ | Schema ✓ | Size: ${Math.round(html.length/1024)}KB`);
      } else {
        failed++;
        const issues = [];
        if (!statusOk) issues.push(`HTTP ${res.status}`);
        if (!hasBannerHide) issues.push("Banner Not Hidden");
        if (!hasHero) issues.push("Hero Missing");
        if (!hasLocationNav) issues.push("Location Nav Missing");
        if (!hasWhatsApp) issues.push("WhatsApp Missing");
        if (!hasJsonLd) issues.push("Schema Missing");
        if (!isRichContent) issues.push(`Content too short (${html.length} chars)`);
        
        console.log(`❌ [${String(i+1).padStart(2, '0')}/${allPages.length}] ${page.name.padEnd(30, ' ')} | FAILED: ${issues.join(", ")}`);
        failures.push({ name: page.name, url: page.url, issues });
      }
    } catch (e) {
      failed++;
      console.log(`❌ [${String(i+1).padStart(2, '0')}/${allPages.length}] ${page.name.padEnd(30, ' ')} | EXCEPTION: ${e.message}`);
      failures.push({ name: page.name, url: page.url, issues: [e.message] });
    }
  }

  console.log(`\n${"=".repeat(80)}`);
  console.log(`📊 FINAL MASTER VERIFICATION: ${passed}/${allPages.length} PAGES PASSED (${failed} failures)`);
  console.log(`${"=".repeat(80)}`);
}

verifyAllMaster();
