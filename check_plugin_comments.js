async function checkPluginComments() {
  const res = await fetch("https://nufca.com/list-of-audit-services-in-uae");
  const html = await res.text();
  const head = html.split('</head>')[0];
  const lines = head.split('\n');
  lines.filter(l => l.includes('<!--') || l.includes('plugin') || l.includes('yoast') || l.includes('seo') || l.includes('rank')).forEach(l => console.log(l));
}
checkPluginComments();
