async function verifyVatPage() {
  const res = await fetch("https://nufca.com/vat-consultancy-in-uae");
  const html = await res.text();
  
  const hasOldBadFilter = /class=["']location-filter["']/i.test(html);
  const hasNewDropdownFilter = /class=["']nufca-filter-bar["']/i.test(html) && /<select/i.test(html);
  
  console.log("Live VAT Consultancy Page Check:");
  console.log("  - HTTP Status:", res.status);
  console.log("  - Old Bad Stacked Filter Gone?:", !hasOldBadFilter ? "YES (Removed ✓)" : "NO (Still present ❌)");
  console.log("  - New Sleek Dropdown Filter Bar Present?:", hasNewDropdownFilter ? "YES (Active ✓)" : "NO ❌");
}

verifyVatPage();
