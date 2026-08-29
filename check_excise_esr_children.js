const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

async function checkChildren() {
  console.log("Checking children for Service 8 (Excise Tax, 99367) and Service 9 (ESR, 99505)...");
  
  const res8 = await fetch("https://nufca.com/wp-json/wp/v2/pages?parent=99367", { headers });
  const children8 = await res8.json();
  console.log("Excise Tax (99367) Children:", children8.length);
  children8.forEach(c => console.log(`  ID: ${c.id} | Slug: ${c.slug} | Link: ${c.link}`));

  const res9 = await fetch("https://nufca.com/wp-json/wp/v2/pages?parent=99505", { headers });
  const children9 = await res9.json();
  console.log("ESR Compliance (99505) Children:", children9.length);
  children9.forEach(c => console.log(`  ID: ${c.id} | Slug: ${c.slug} | Link: ${c.link}`));
}

checkChildren();
