const urls = [
  { name: "UAE (Main)", url: "https://nufca.com/list-of-audit-services-in-uae" },
  { name: "Dubai", url: "https://nufca.com/list-of-audit-services-in-uae/dubai" },
  { name: "Gold Souk", url: "https://nufca.com/list-of-audit-services-in-uae/gold-souk-dubai" },
  { name: "Abu Dhabi", url: "https://nufca.com/list-of-audit-services-in-uae/abu-dhabi" },
  { name: "Sharjah", url: "https://nufca.com/list-of-audit-services-in-uae/sharjah" }
];

async function verifyAllMeta() {
  console.log("🔍 Live Verification of Titles & Meta Descriptions:\n");
  for (const item of urls) {
    const res = await fetch(item.url);
    const html = await res.text();
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
    
    const title = titleMatch ? titleMatch[1].trim() : "None";
    const desc = descMatch ? descMatch[1].trim() : "None";
    
    console.log(`📌 Location: ${item.name}`);
    console.log(`   🔗 URL: ${item.url}`);
    console.log(`   🏷️ Title (${title.length} chars): ${title}`);
    console.log(`   📝 Description (${desc.length} chars): ${desc}`);
    console.log("--------------------------------------------------");
  }
}

verifyAllMeta();
