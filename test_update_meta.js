const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function testUpdateMeta() {
  const newTitle = "List of Audit Services in UAE | Top Audit Firms";
  const newExcerpt = "Explore approved audit services in UAE. NUFCA provides statutory financial audits, internal audits, RERA & FTA tax audit assistance across the UAE.";
  
  console.log("Updating Page 99337...");
  const res = await fetch("https://nufca.com/wp-json/wp/v2/pages/99337", {
    method: "POST",
    headers,
    body: JSON.stringify({
      title: newTitle,
      excerpt: newExcerpt
    })
  });
  
  console.log("Update status:", res.status);
  
  // Now check live HTML
  const liveRes = await fetch("https://nufca.com/list-of-audit-services-in-uae");
  const html = await liveRes.text();
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  
  const liveTitle = titleMatch ? titleMatch[1].trim() : "None";
  const liveDesc = metaDescMatch ? metaDescMatch[1] : "None";
  
  console.log("\n--- Live Verification ---");
  console.log("Live Title:", liveTitle);
  console.log("Live Title Length:", liveTitle.length, "characters (Ideal: 50-60)");
  console.log("Live Description:", liveDesc);
  console.log("Live Desc Length:", liveDesc.length, "characters (Ideal: 140-160)");
}

testUpdateMeta();
