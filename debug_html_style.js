async function debugHTML() {
  const res = await fetch("https://nufca.com/corporate-tax-in-uae/");
  const html = await res.text();
  console.log("Length of HTML:", html.length);
  console.log("Includes #pagetitle:", html.includes("#pagetitle"));
  console.log("Includes nufca-article-container:", html.includes("nufca-article-container"));
  
  // Find style tag content
  const match = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
  if (match) {
    console.log("Found style tags count:", match.length);
    match.forEach((s, idx) => {
      if (s.includes("pagetitle") || s.includes("nufca")) {
        console.log(`Style tag #${idx+1}:`, s.substring(0, 300));
      }
    });
  } else {
    console.log("No style tags found in HTML");
  }
}
debugHTML();
