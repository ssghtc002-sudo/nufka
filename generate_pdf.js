const { spawnSync } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'C:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\executive_seo_report.html';
const pdfPath = 'C:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\NUFCA_Master_SEO_Executive_Report.pdf';

console.log('Generating PDF via Chrome Headless...');
const result = spawnSync(chromePath, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${pdfPath}`,
    htmlPath
]);

console.log('Status:', result.status);
if (fs.existsSync(pdfPath)) {
    const stats = fs.statSync(pdfPath);
    console.log(`✅ SUCCESS! PDF generated at: ${pdfPath}`);
    console.log(`File Size: ${(stats.size / 1024).toFixed(2)} KB`);
} else {
    console.log('❌ PDF file was not created. Error:', result.stderr.toString());
}
