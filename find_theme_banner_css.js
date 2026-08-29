async function checkThemeCSS() {
  const res = await fetch("https://nufca.com/corporate-tax-in-uae/");
  const html = await res.text();
  
  // Find where "page-title" or "page-header" is used
  const matches = html.match(/class=["'][^"']*(?:pagetitle|page-title|page-header|title-area|breadcrumb)[^"']*["']/gi);
  console.log("Class matches:", matches ? [...new Set(matches)] : "None");
  
  // Find the exact tag containing the text "Corporate Tax in UAE | Corporate Tax Consultants" in the header
  const regex = /<([^>]+)>[^<]*Corporate Tax in UAE \| Corporate Tax Consultants[^<]*<\/[^>]+>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    console.log("Found title tag:", match[0]);
  }
}
checkThemeCSS();
