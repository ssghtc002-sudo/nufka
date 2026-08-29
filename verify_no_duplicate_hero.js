const pages = [
  { id: 99001, name: "1. Corporate Tax in UAE", url: "https://nufca.com/corporate-tax-in-uae/" },
  { id: 99146, name: "2. VAT Consultancy in UAE", url: "https://nufca.com/vat-consultancy-in-uae/" },
  { id: 99159, name: "3. Audit & Assurance in UAE", url: "https://nufca.com/audit-assurance-uae/" },
  { id: 99172, name: "4. Internal Audit in UAE", url: "https://nufca.com/internal-audit-uae/" },
  { id: 99200, name: "5. RERA Approved Auditors in UAE", url: "https://nufca.com/rera-audit-uae/" },
  { id: 99212, name: "6. Mollak Services in UAE", url: "https://nufca.com/mollak-audit-services-uae/" },
  { id: 99222, name: "7. FTA VAT Audit Assistance in UAE", url: "https://nufca.com/fta-vat-audit-assistance-uae/" },
  { id: 99367, name: "8. Excise Tax Services in UAE", url: "https://nufca.com/excise-tax-services-in-uae" },
  { id: 99505, name: "9. ESR Compliance Services in UAE", url: "https://nufca.com/esr-compliance-services-in-uae" }
];

async function verify() {
  console.log("================ VERIFYING CLEAN PAGES ================");
  for (const page of pages) {
    const res = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${page.id}`);
    const d = await res.json();
    const c = d.content.rendered;
    const hasHero = c.includes('Federal Decree-Law No. 47') || c.includes('Risk-Based Internal Audits • COSO') || c.includes('Law No. 8 of 2007 • Escrow Audits');
    const hasFilter = c.includes('nufca-filter-bar');
    const hasCard = c.includes('nufca-consultation-card');
    console.log(`✅ [ID: ${page.id}] ${page.name}`);
    console.log(`   Inner Hero Duplicate: ${hasHero ? '⚠️ STILL PRESENT' : '0 (DELETED)'} | Filter: ${hasFilter ? '✅' : '❌'} | Direct Card: ${hasCard ? '✅' : '❌'}`);
  }
}

verify();
