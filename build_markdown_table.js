const fs = require('fs');

const csvPath = 'C:\\Users\\ssght\\Downloads\\ubersuggest_bulk_analysis.csv';
const lines = fs.readFileSync(csvPath, 'utf8').trim().split('\n');

let mdTable = `| # | Focus Keyword | Search Volume | SEO Difficulty (SD) | Paid Difficulty (PD) | CPC (USD) |\n`;
mdTable += `|---|---|:---:|:---:|:---:|:---:|\n`;

for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Handle CSV split properly
    const parts = line.split(',');
    const no = parts[0];
    const keyword = parts[1];
    const searchVolume = parts[2];
    const cpcRaw = parseFloat(parts[3] || 0);
    const cpc = cpcRaw > 0 ? `$${cpcRaw.toFixed(2)}` : '$0.00';
    const paidDifficulty = parts[4];
    const seoDifficulty = parts[5];

    mdTable += `| ${no} | **${keyword}** | ${searchVolume} | ${seoDifficulty} | ${paidDifficulty} | ${cpc} |\n`;
}

console.log(mdTable);
fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\formatted_keyword_table.md', mdTable, 'utf-8');
