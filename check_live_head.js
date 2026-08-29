async function checkLiveHead() {
  const res = await fetch("https://nufca.com/list-of-audit-services-in-uae");
  const html = await res.text();
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  console.log("Live <title>:", titleMatch ? titleMatch[1].trim() : "None");
  console.log("Title length:", titleMatch ? titleMatch[1].trim().length : 0);
  console.log("Live meta description:", metaDescMatch ? metaDescMatch[1] : "None");
  
  // Let's also check plugins or other meta tags
  const allMetas = html.match(/<meta[^>]*>/gi) || [];
  console.log("All meta tags found:");
  allMetas.filter(m => m.includes('description') || m.includes('title') || m.includes('robots') || m.includes('og:')).forEach(m => console.log("  ", m));
}
checkLiveHead();
