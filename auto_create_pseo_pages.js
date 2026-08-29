const fs = require('fs');
const path = require('path');

// Configuration
const WP_URL = process.env.WP_URL || "https://nufca.com";
const USERNAME = process.env.WP_USERNAME || "SHyami9413";
const APP_PASSWORD = process.env.WP_APP_PASSWORD || "5ych pKMl j8D1 4gF2 OmmR 3ELc";

function parseCSV(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').filter(l => l.trim().length > 0);
    const headers = parseCSVLine(lines[0]);
    
    const data = [];
    for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        if (values.length === headers.length) {
            const row = {};
            headers.forEach((h, index) => {
                row[h.trim()] = values[index].trim();
            });
            data.push(row);
        }
    }
    return data;
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"' && (i === 0 || line[i-1] !== '\\')) {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current);
    return result;
}

function generatePageHTML(item) {
    return `
<!-- Hierarchical Programmatic SEO Page for NUFCA -->
<div class="pseo-container" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #fff; padding: 40px 25px; border-radius: 12px; margin-bottom: 30px;">
        <span style="background: #eef4f8; color: #134074; font-size: 13px; font-weight: bold; padding: 4px 12px; border-radius: 20px; text-transform: uppercase;">
            ${item.location_name} • FTA Registered Consultants
        </span>
        <h1 style="color: #ffffff; font-size: 32px; margin-top: 15px; font-weight: 700;">${item.hero_headline}</h1>
        <p style="font-size: 18px; opacity: 0.9; max-width: 800px;">${item.meta_description}</p>
        <div style="margin-top: 25px;">
            <a href="https://nufca.com/contact-us/" style="background: #8da9c4; color: #0b2545; font-weight: bold; padding: 12px 28px; text-decoration: none; border-radius: 6px; display: inline-block;">Get Free Consultation</a>
        </div>
    </div>

    <!-- Location Overview -->
    <div style="background: #f8f9fa; border-left: 5px solid #134074; padding: 25px; border-radius: 4px; margin-bottom: 35px;">
        <h2 style="color: #0b2545; font-size: 24px; margin-top: 0;">Market Overview: ${item.service_name} in ${item.location_name}</h2>
        <p style="font-size: 16px;">${item.location_context}</p>
    </div>

    <!-- Regulatory Compliance -->
    <div style="margin-bottom: 35px;">
        <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #eef4f8; padding-bottom: 10px;">Key Regulatory & Compliance Requirements</h2>
        <div style="background: #fff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
            <p style="font-size: 16px;">${item.key_compliance}</p>
            <ul style="padding-left: 20px; margin-top: 15px;">
                <li><strong>FTA Registration & Audit Support:</strong> Assistance with Federal Tax Authority regulations.</li>
                <li><strong>Local Jurisdiction Expertise:</strong> Deep understanding of ${item.location_name} business laws.</li>
                <li><strong>Dedicated Chartered Accountants:</strong> Direct advisory support.</li>
            </ul>
        </div>
    </div>

    <!-- FAQs -->
    <div style="margin-bottom: 40px;">
        <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #eef4f8; padding-bottom: 10px;">Frequently Asked Questions (${item.location_name})</h2>
        <div style="margin-top: 20px;">
            <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px;">
                <h3 style="font-size: 18px; color: #134074; margin: 0 0 8px 0;">❓ ${item.faq1_question}</h3>
                <p style="margin: 0; color: #555;">${item.faq1_answer}</p>
            </div>
            <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px;">
                <h3 style="font-size: 18px; color: #134074; margin: 0 0 8px 0;">❓ ${item.faq2_question}</h3>
                <p style="margin: 0; color: #555;">${item.faq2_answer}</p>
            </div>
        </div>
    </div>

    <!-- CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px;">
        <h2 style="color: #fff; margin-top: 0;">Need Expert ${item.service_name} in ${item.location_name}?</h2>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 20px;">Speak with NUFCA’s certified tax advisors today.</p>
        <a href="https://nufca.com/contact-us/" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 14px 32px; text-decoration: none; border-radius: 6px; display: inline-block;">Book a Free Strategy Session</a>
    </div>

</div>

<!-- FAQ Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": ${JSON.stringify(item.faq1_question)},
    "acceptedAnswer": {
      "@type": "Answer",
      "text": ${JSON.stringify(item.faq1_answer)}
    }
  }, {
    "@type": "Question",
    "name": ${JSON.stringify(item.faq2_question)},
    "acceptedAnswer": {
      "@type": "Answer",
      "text": ${JSON.stringify(item.faq2_answer)}
    }
  }]
}
</script>
    `;
}

// Cache for Parent Page IDs
const parentPageCache = {};

async function getOrCreateParentPage(parentSlug, authHeader, endpoint) {
    if (parentPageCache[parentSlug]) return parentPageCache[parentSlug];

    // Check if parent page exists
    try {
        const checkRes = await fetch(`${endpoint}?slug=${parentSlug}`, {
            headers: { 'Authorization': authHeader }
        });
        if (checkRes.ok) {
            const pages = await checkRes.json();
            if (pages.length > 0) {
                console.log(`📌 Found Parent Page "/${parentSlug}/" (ID: ${pages[0].id})`);
                parentPageCache[parentSlug] = pages[0].id;
                return pages[0].id;
            }
        }
    } catch(e) {}

    // Create Parent Page if not found
    const parentTitle = parentSlug.replace(/-/g, ' ').toUpperCase();
    console.log(`⚙️ Creating Parent Page "/${parentSlug}/"...`);
    try {
        const createRes = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: `Accounting & Tax Services in ${parentTitle}`,
                slug: parentSlug,
                content: `<h1>Accounting & Tax Services in ${parentTitle}</h1><p>Explore specialized auditing, VAT, and financial advisory services across ${parentTitle}.</p>`,
                status: 'draft'
            })
        });
        if (createRes.ok) {
            const newParent = await createRes.json();
            console.log(` ✅ Parent Page "/${parentSlug}/" Created! ID: ${newParent.id}`);
            parentPageCache[parentSlug] = newParent.id;
            return newParent.id;
        }
    } catch(e) {
        console.error(`Error creating parent page "/${parentSlug}/":`, e.message);
    }
    return 0;
}

async function publishHierarchicalPages() {
    const csvPath = path.join(__dirname, 'programmatic_seo_nufca.csv');
    if (!fs.existsSync(csvPath)) {
        console.error("❌ CSV file not found at", csvPath);
        return;
    }

    const rows = parseCSV(csvPath);
    console.log(`🚀 Found ${rows.length} hierarchical pages to generate for NUFCA.\n`);

    const endpoint = `${WP_URL.replace(/\/$/, '')}/wp-json/wp/v2/pages`;
    const cleanAppPass = APP_PASSWORD.replace(/\s+/g, '');
    const authHeader = `Basic ${Buffer.from(`${USERNAME}:${cleanAppPass}`).toString('base64')}`;

    for (const item of rows) {
        const parentId = await getOrCreateParentPage(item.parent_slug, authHeader, endpoint);
        const expectedURL = `https://nufca.com/${item.parent_slug}/${item.slug}/`;
        
        console.log(`Creating Child Page: "${expectedURL}"...`);
        const pageContent = generatePageHTML(item);

        const payload = {
            title: item.post_title,
            slug: item.slug,
            parent: parentId, // Parent-Child Page Relationship in WordPress!
            content: pageContent,
            status: 'draft',
            excerpt: item.meta_description
        };

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': authHeader,
                    'Content-Type': 'application/json',
                    'User-Agent': 'NUFCA-pSEO-Bot/1.0'
                },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                const data = await res.json();
                console.log(` 🎉 SUCCESS! Created Page: ${data.link}`);
            } else {
                console.log(` ❌ Failed (Status ${res.status}): ${await res.text()}`);
            }
        } catch (e) {
            console.log(` ❌ Network Error: ${e.message}`);
        }
    }
}

publishHierarchicalPages();
