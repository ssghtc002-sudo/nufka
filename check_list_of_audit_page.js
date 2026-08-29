const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

async function checkListOfAudit() {
  const res = await fetch("https://nufca.com/wp-json/wp/v2/pages?slug=list-of-audit-services-in-uae", { headers });
  const data = await res.json();
  console.log("Check slug list-of-audit-services-in-uae:", data.length > 0 ? `Found ID ${data[0].id}` : "Not found by exact slug");
  
  if (data.length > 0) {
    console.log("Page link:", data[0].link);
    console.log("Page title:", data[0].title.rendered);
    console.log("Page parent:", data[0].parent);
    
    // Check if children exist
    const childRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages?parent=${data[0].id}`, { headers });
    const children = await childRes.json();
    console.log("Children found:", children.length);
    children.forEach(c => console.log("Child ID:", c.id, "| Slug:", c.slug, "| Link:", c.link));
  } else {
    // Search broadly
    const searchRes = await fetch("https://nufca.com/wp-json/wp/v2/pages?search=list-of-audit", { headers });
    const sData = await searchRes.json();
    console.log("Broad search results:", sData.length);
    sData.forEach(p => console.log("ID:", p.id, "| Slug:", p.slug, "| Link:", p.link));
  }
}

checkListOfAudit();
