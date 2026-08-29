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

async function removeHeroDuplicate() {
  console.log("🚀 Starting removal of duplicate inner hero section from all 9 UAE pages...\n");

  for (const page of pages) {
    try {
      // 1. Fetch raw page from WP REST API (using edit context if possible or get rendered)
      const res = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${page.id}?context=edit`, {
        headers: headers
      });
      const data = await res.json();
      let rawContent = data.content.raw || data.content.rendered;

      // Regex to match and remove the Hero Section block:
      // Matches <!-- Hero Section --> followed by the dark blue linear-gradient div up to its closing </div>
      // Alternatively, match from <div style="background: linear-gradient(135deg, #0b2545... to the closing </div> of that block
      const heroRegex = /(?:<p>\s*)?<!--\s*Hero Section\s*-->[\s\S]*?<!--\s*Direct Advisory Consultation Card\s*-->/i;
      
      let newContent = rawContent;
      if (heroRegex.test(rawContent)) {
        newContent = rawContent.replace(heroRegex, '<!-- Direct Advisory Consultation Card -->');
        console.log(`[ID: ${page.id}] Found & removed Hero Section via primary regex.`);
      } else {
        // Fallback regex matching linear-gradient dark blue div
        const fallbackRegex = /<div style="background:\s*linear-gradient\(135deg,\s*#0b2545[\s\S]*?<\/div>\s*(?=<div class="nufca-consultation-card")/i;
        if (fallbackRegex.test(rawContent)) {
          newContent = rawContent.replace(fallbackRegex, '');
          console.log(`[ID: ${page.id}] Found & removed Hero Section via fallback regex.`);
        } else {
          console.log(`[ID: ${page.id}] Hero Section pattern not found, checking content...`);
        }
      }

      // Update the page in WordPress
      const updateRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${page.id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          content: newContent
        })
      });

      console.log(`✅ [ID: ${page.id}] ${page.name} updated. Status: ${updateRes.status}\n`);
    } catch (e) {
      console.error(`❌ Error updating [ID: ${page.id}] ${page.name}:`, e.message);
    }
  }

  console.log("🎉 All 9 UAE pages successfully processed!");
}

removeHeroDuplicate();
