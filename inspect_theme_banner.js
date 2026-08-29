async function inspect() {
  const res = await fetch('https://nufca.com/corporate-tax-in-uae/');
  const html = await res.text();
  
  // Find where "Home - Corporate Tax in UAE" appears in html
  const idx = html.indexOf('Home - Corporate Tax in UAE');
  if (idx !== -1) {
    console.log("Found breadcrumb text around index:", idx);
    console.log("=== SURROUNDING HTML (800 chars before and after) ===");
    console.log(html.substring(Math.max(0, idx - 600), Math.min(html.length, idx + 400)));
  } else {
    console.log("Breadcrumb text not found, searching for 'Corporate Tax Consultants'");
    const idx2 = html.indexOf('Corporate Tax Consultants');
    if (idx2 !== -1) {
      console.log(html.substring(Math.max(0, idx2 - 400), Math.min(html.length, idx2 + 400)));
    }
  }
}
inspect();
