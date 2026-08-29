const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json"
};

async function checkSeoMeta() {
  const res = await fetch("https://nufca.com/wp-json/wp/v2/pages/99337", { headers });
  const data = await res.json();
  console.log("Current Title:", data.title);
  console.log("Yoast Head present?:", !!data.yoast_head);
  console.log("RankMath present?:", !!data.rank_math_title);
  console.log("Meta fields:", data.meta);
  if (data.yoast_head_json) {
    console.log("Yoast title:", data.yoast_head_json.title);
    console.log("Yoast description:", data.yoast_head_json.description);
  }
}

checkSeoMeta();
