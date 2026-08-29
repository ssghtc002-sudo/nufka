const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

const serviceHubs = [
    {
        id: 'corporate-tax',
        slug: 'corporate-tax-in-uae',
        title: 'Corporate Tax in UAE',
        short_title: 'Corporate Tax Advisory',
        desc: 'Corporate tax registration, tax return filing, CT group structuring, and FTA compliance.',
        icon: '🏢'
    },
    {
        id: 'vat-consultancy',
        slug: 'vat-consultancy-in-uae',
        title: 'VAT Consultancy Services',
        short_title: 'VAT Advisory & Return Filing',
        desc: 'Quarterly VAT filing, FTA registration/deregistration, input tax optimization, and refund claims.',
        icon: '📊'
    },
    {
        id: 'audit-assurance',
        slug: 'audit-assurance-uae',
        title: 'Audit & Assurance Services',
        short_title: 'External Financial Audit',
        desc: 'Statutory financial audit, balance sheet certification, and free zone / bank compliance.',
        icon: '📑'
    },
    {
        id: 'internal-audit',
        slug: 'internal-audit-uae',
        title: 'Internal Audit & Risk Review',
        short_title: 'Internal Audit & Controls',
        desc: 'Internal control evaluation, corporate governance, operational risk assessment, and SOP reviews.',
        icon: '🛡️'
    },
    {
        id: 'rera-audit',
        slug: 'rera-audit-uae',
        title: 'RERA & Escrow Audit Services',
        short_title: 'RERA Approved Escrow Audit',
        desc: 'Law No. 8 of 2007 escrow account auditing, project financial status reports, and DLD compliance.',
        icon: '🏗️'
    },
    {
        id: 'mollak-audit',
        slug: 'mollak-audit-services-uae',
        title: 'Mollak Services & Audit',
        short_title: 'Mollak Service Charge Audit',
        desc: 'Jointly owned property audits, service charge budget approvals, and owner balance reconciliations.',
        icon: '🏘️'
    },
    {
        id: 'fta-vat-audit',
        slug: 'fta-vat-audit-assistance-uae',
        title: 'FTA VAT Audit Assistance',
        short_title: 'FTA Tax Audit Representation',
        desc: 'Audit defense representation, Form 211 voluntary disclosures, and penalty waiver assistance.',
        icon: '⚖️'
    }
];

const locationMap = {
    'main': { name: 'UAE', suffix: '' },
    'dubai': { name: 'Dubai', suffix: 'dubai/' },
    'gold-souk-dubai': { name: 'Gold Souk (Deira)', suffix: 'gold-souk-dubai/' },
    'abu-dhabi': { name: 'Abu Dhabi', suffix: 'abu-dhabi/' },
    'sharjah': { name: 'Sharjah', suffix: 'sharjah/' }
};

function buildRelatedServicesHTML(currentServiceSlug, locKey) {
    const locInfo = locationMap[locKey] || locationMap['main'];
    const otherServices = serviceHubs.filter(s => s.slug !== currentServiceSlug);

    let cardsHTML = otherServices.map(s => {
        const link = `https://nufca.com/${s.slug}/${locInfo.suffix}`;
        return `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #134074; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(11,37,69,0.03); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s ease;">
            <div>
                <div style="font-size: 24px; margin-bottom: 8px;">${s.icon}</div>
                <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0b2545; font-weight: 700; line-height: 1.3;">
                    <a href="${link}" style="color: #0b2545; text-decoration: none;">${s.short_title} in ${locInfo.name}</a>
                </h4>
                <p style="color: #475569; font-size: 13.5px; line-height: 1.5; margin: 0 0 15px 0;">${s.desc}</p>
            </div>
            <div>
                <a href="${link}" style="display: inline-flex; align-items: center; gap: 5px; color: #134074; font-weight: 700; font-size: 13px; text-decoration: none;">
                    Explore Service <span style="font-size: 14px;">→</span>
                </a>
            </div>
        </div>`;
    }).join('');

    return `
    <!-- Related Services Section -->
    <div class="nufca-related-services-section" style="margin-top: 45px; padding-top: 30px; border-top: 2px solid #e2e8f0;">
        <div style="text-align: center; margin-bottom: 25px;">
            <span style="background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 11px; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">Comprehensive Advisory Suite</span>
            <h2 style="color: #0b2545; font-size: clamp(20px, 3.5vw, 25px); margin: 8px 0 6px 0; font-weight: 800;">Related Accounting, Tax & Audit Services in ${locInfo.name}</h2>
            <p style="color: #64748b; font-size: 14.5px; max-width: 700px; margin: 0 auto;">Discover our integrated chartered accountancy and regulatory compliance solutions across ${locInfo.name}.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 20px;">
            ${cardsHTML}
        </div>
    </div>`;
}

async function updateAllPagesWithRelatedServices() {
    console.log("🚀 Starting Related Services Injection across all 35 Programmatic Pages...\n");

    let totalUpdated = 0;

    for (const currentHub of serviceHubs) {
        console.log(`\n======================================================`);
        console.log(`Processing Service Hub: ${currentHub.title} (${currentHub.slug})`);
        console.log(`======================================================`);

        // 1. Fetch Parent Page
        const pRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages?slug=${currentHub.slug}`, { headers });
        const pData = await pRes.json();

        if (pData.length === 0) {
            console.log(`❌ Parent page for ${currentHub.slug} not found!`);
            continue;
        }

        const parentPage = pData[0];
        const parentId = parentPage.id;

        // Update Parent Page Content
        await updateSinglePageContent(parentPage, currentHub.slug, 'main');
        totalUpdated++;

        // 2. Fetch Child Pages
        const cRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages?parent=${parentId}`, { headers });
        const children = await cRes.json();

        for (const child of children) {
            const locKey = child.slug; // 'dubai', 'gold-souk-dubai', 'abu-dhabi', 'sharjah'
            await updateSinglePageContent(child, currentHub.slug, locKey);
            totalUpdated++;
        }
    }

    console.log(`\n🎉 ALL ${totalUpdated} PROGRAMMATIC PAGES SUCCESSFULLY UPDATED WITH RELATED SERVICES!`);
}

async function updateSinglePageContent(page, currentHubSlug, locKey) {
    let content = page.content.rendered;
    const relatedHTML = buildRelatedServicesHTML(currentHubSlug, locKey);

    // Remove existing related services section if present
    content = content.replace(/<!-- Related Services Section -->[\s\S]*?<!-- \/Related Services Section -->/g, '');
    content = content.replace(/<div class="nufca-related-services-section"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');

    // Determine insertion position:
    // Place right before Closing CTA (e.g. '<div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px;' or '<div style="background: #0b2545;')
    // If not found, place right before the closing </div> of nufca-article-container or before <script type="application/ld+json">
    let newContent = "";
    const closingCtaIndex = content.indexOf('<div style="background: #0b2545; color: #fff; text-align: center;');

    if (closingCtaIndex !== -1) {
        newContent = content.slice(0, closingCtaIndex) + relatedHTML + "\n\n" + content.slice(closingCtaIndex);
    } else {
        const lastDivIndex = content.lastIndexOf('</div>');
        if (lastDivIndex !== -1) {
            newContent = content.slice(0, lastDivIndex) + relatedHTML + "\n\n" + content.slice(lastDivIndex);
        } else {
            newContent = content + "\n\n" + relatedHTML;
        }
    }

    console.log(`Updating Page ID ${page.id} (${page.slug}) for location [${locKey}]...`);
    const updateRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${page.id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            content: newContent
        })
    });

    console.log(`  --> Status for ID ${page.id}: ${updateRes.status}`);
}

updateAllPagesWithRelatedServices();
