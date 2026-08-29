const pages = [
  { name: "1. Corporate Tax in UAE", id: 99001, url: "https://nufca.com/corporate-tax-in-uae/" },
  { name: "2. VAT Consultancy in UAE", id: 99146, url: "https://nufca.com/vat-consultancy-in-uae/" },
  { name: "3. Audit & Assurance in UAE", id: 99159, url: "https://nufca.com/audit-assurance-uae/" },
  { name: "4. Internal Audit in UAE", id: 99172, url: "https://nufca.com/internal-audit-uae/" },
  { name: "5. RERA Approved Auditors in UAE", id: 99200, url: "https://nufca.com/rera-audit-uae/" },
  { name: "6. Mollak Services in UAE", id: 99212, url: "https://nufca.com/mollak-audit-services-uae/" },
  { name: "7. FTA VAT Audit in UAE", id: 99222, url: "https://nufca.com/fta-vat-audit-assistance-uae/" },
  { name: "8. Excise Tax Services in UAE", id: 99367, url: "https://nufca.com/excise-tax-services-in-uae" },
  { name: "9. ESR Compliance in UAE", id: 99505, url: "https://nufca.com/esr-compliance-services-in-uae" }
];

async function verifyAll() {
  console.log("================ VERIFYING ALL 9 UAE MAIN PAGES ================");
  for (const page of pages) {
    try {
      const res = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${page.id}`);
      const data = await res.json();
      const content = data.content.rendered;
      const hasForm = content.includes('<form');
      const hasCard = content.includes('nufca-consultation-card');
      const hasFilter = content.includes('nufca-filter-bar');
      const hasSchema = content.includes('application/ld+json');
      console.log(`✅ [ID: ${page.id}] ${page.name}`);
      console.log(`   URL: ${page.url}`);
      console.log(`   Title: ${data.title.rendered}`);
      console.log(`   Status: HTTP ${res.status} | Length: ${content.length} chars`);
      console.log(`   Raw Forms: ${hasForm ? '⚠️ YES' : '0 (CLEAN)'} | Card: ${hasCard ? '✅' : '❌'} | Filter Bar: ${hasFilter ? '✅' : '❌'} | Schema: ${hasSchema ? '✅' : '❌'}`);
    } catch (e) {
      console.error(`❌ Error verifying ${page.name}:`, e.message);
    }
  }
}

verifyAll();
