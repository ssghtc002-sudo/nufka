const fs = require('fs');

const batch1Keywords = [
    { kw: "car check up frequency", sv: 0, sd: 4, pd: 1, cpc: "$0.00" },
    { kw: "car detailing dubai cost", sv: 140, sd: 28, pd: 75, cpc: "$12.40" },
    { kw: "peelable paint vs wrap", sv: 20, sd: 12, pd: 15, cpc: "$0.00" },
    { kw: "types of car upholstery", sv: 90, sd: 18, pd: 22, cpc: "$0.00" },
    { kw: "benefits of car detailing", sv: 210, sd: 25, pd: 40, cpc: "$1.50" },
    { kw: "uae car window tinting rules", sv: 390, sd: 22, pd: 60, cpc: "$5.80" },
    { kw: "ceramic coating vs ppf dubai", sv: 70, sd: 16, pd: 82, cpc: "$14.20" },
    { kw: "car seat upholstery cost uae", sv: 50, sd: 19, pd: 65, cpc: "$8.10" },
    { kw: "flood car repair dubai", sv: 90, sd: 15, pd: 45, cpc: "$18.50" },
    { kw: "35 vs 20 window tint", sv: 170, sd: 14, pd: 10, cpc: "$0.00" },
    { kw: "carbon vs ceramic tint", sv: 260, sd: 21, pd: 35, cpc: "$2.10" },
    { kw: "car polish vs wax", sv: 480, sd: 30, pd: 25, cpc: "$0.80" },
    { kw: "ceramic coating explained", sv: 110, sd: 17, pd: 18, cpc: "$0.00" },
    { kw: "ceramic coating maintenance", sv: 140, sd: 20, pd: 30, cpc: "$1.20" },
    { kw: "uv protection for car windows", sv: 210, sd: 24, pd: 40, cpc: "$2.50" },
    { kw: "clean mercedes leather seats", sv: 40, sd: 11, pd: 5, cpc: "$0.00" },
    { kw: "car wax vs car polish", sv: 320, sd: 28, pd: 20, cpc: "$0.60" },
    { kw: "how to find car paint code", sv: 590, sd: 26, pd: 12, cpc: "$0.00" },
    { kw: "nano ceramic coating protection", sv: 90, sd: 18, pd: 50, cpc: "$3.40" },
    { kw: "car wrap vs car paint", sv: 320, sd: 25, pd: 35, cpc: "$4.10" },
    { kw: "how to get amg exhaust sound", sv: 30, sd: 13, pd: 8, cpc: "$0.00" },
    { kw: "luxury car paint color ideas", sv: 50, sd: 15, pd: 10, cpc: "$0.00" },
    { kw: "g63 body kits mercedes g class", sv: 110, sd: 22, pd: 55, cpc: "$7.20" },
    { kw: "car upholstery cleaning and repair", sv: 70, sd: 20, pd: 48, cpc: "$5.00" },
    { kw: "best car tint brands uae", sv: 260, sd: 23, pd: 70, cpc: "$9.40" },
    { kw: "ceramic coating aftercare", sv: 90, sd: 16, pd: 25, cpc: "$0.90" },
    { kw: "luxury car customization trends", sv: 30, sd: 14, pd: 15, cpc: "$0.00" },
    { kw: "car detailing in dubai", sv: 720, sd: 35, pd: 88, cpc: "$18.90" },
    { kw: "best car wrapping dubai", sv: 480, sd: 33, pd: 82, cpc: "$16.50" },
    { kw: "best car window tinting dubai", sv: 590, sd: 31, pd: 85, cpc: "$14.80" },
    { kw: "best paint protection film brands", sv: 210, sd: 24, pd: 60, cpc: "$6.20" }
];

const csvPath = 'C:\\Users\\ssght\\Downloads\\ubersuggest_bulk_analysis.csv';
const lines = fs.readFileSync(csvPath, 'utf8').trim().split('\n');

const batch2Keywords = [];
for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].trim().split(',');
    if (parts.length >= 6) {
        const cpcRaw = parseFloat(parts[3] || 0);
        batch2Keywords.push({
            kw: parts[1],
            sv: parseInt(parts[2] || 0),
            sd: parseInt(parts[5] || 0),
            pd: parseInt(parts[4] || 0),
            cpc: cpcRaw > 0 ? `$${cpcRaw.toFixed(2)}` : '$0.00',
            src: "Sheet 2 (Dubai Service)"
        });
    }
}

const b1Mapped = batch1Keywords.map(item => ({ ...item, src: "Sheet 1 (Blog & Guide)" }));
const allKeywords = [...b1Mapped, ...batch2Keywords];

// Filter out 0 search volume
const filtered = allKeywords.filter(item => item.sv > 0);

// Sort by search volume descending
filtered.sort((a, b) => b.sv - a.sv);

console.log(`Filtered out 0 search volume keywords. Remaining: ${filtered.length} keywords out of ${allKeywords.length}.`);

let mdTable = `### 📊 Filtered High-Volume Keywords Table (Search Volume > 0 Only)\n\n`;
mdTable += `| # | Focus Keyword | Search Volume | SEO Difficulty (SD) | Paid Difficulty (PD) | CPC (USD) | Source Sheet |\n`;
mdTable += `|---|---|:---:|:---:|:---:|:---:|:---:|\n`;

filtered.forEach((item, idx) => {
    mdTable += `| ${idx + 1} | **${item.kw}** | **${item.sv.toLocaleString()}** | ${item.sd} | ${item.pd} | ${item.cpc} | ${item.src} |\n`;
});

fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\filtered_keyword_table.md', mdTable, 'utf-8');
