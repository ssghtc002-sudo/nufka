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

const serviceMeta = {
    'corporate-tax-in-uae': {
        eyebrow: 'Direct Corporate Tax Advisory Access',
        titleTemplate: (city) => `Speak With Our Senior Corporate Tax Advisors in ${city}`,
        descTemplate: (city) => `Need corporate tax registration, CT return filing, tax grouping, or Free Zone 0% QFZP review in ${city}? Connect directly with our chartered accountants without filling forms.`
    },
    'vat-consultancy-in-uae': {
        eyebrow: 'Direct VAT Advisory Access',
        titleTemplate: (city) => `Speak With Our Registered VAT Consultants in ${city}`,
        descTemplate: (city) => `Get immediate guidance on quarterly VAT return filing, FTA voluntary disclosures (Form 211), or VAT deregistration in ${city}. Connect directly with our tax specialists without filling forms.`
    },
    'audit-assurance-uae': {
        eyebrow: 'Direct Audit Advisory Access',
        titleTemplate: (city) => `Speak With Our Senior Audit & Assurance Partners in ${city}`,
        descTemplate: (city) => `Need statutory financial audits, balance sheet certifications, or bank/free zone compliance in ${city}? Connect directly with our approved auditors without filling forms.`
    }
};

const locationMeta = {
    'main': {
        city: 'UAE',
        phone: '04 325 8361 / 055-9831923',
        cleanPhone: '04 325 8361',
        email: 'info@nufca.com'
    },
    'dubai': {
        city: 'Dubai',
        phone: '04 325 8361 / 055-9831923',
        cleanPhone: '04 325 8361',
        email: 'info@nufca.com'
    },
    'gold-souk-dubai': {
        city: 'Gold Souk (Deira, Dubai)',
        phone: '055-9831923',
        cleanPhone: '055-9831923',
        email: 'dmcc@nufca.com'
    },
    'abu-dhabi': {
        city: 'Abu Dhabi',
        phone: '055-9831923',
        cleanPhone: '055-9831923',
        email: 'info@nufca.com'
    },
    'sharjah': {
        city: 'Sharjah',
        phone: '055-5204830',
        cleanPhone: '055-5204830',
        email: 'hm@nufca.com'
    }
};

const cardCSS = `
    .nufca-consultation-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-left: 5px solid #134074;
        border-radius: 10px;
        padding: 20px 24px;
        margin: 20px 0 30px 0;
        box-shadow: 0 4px 15px rgba(11, 37, 69, 0.04);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    .nufca-card-content {
        flex: 1 1 340px;
    }
    .nufca-card-actions {
        flex: 0 0 240px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .nufca-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 6px;
        font-weight: 700;
        font-size: 13.5px;
        text-decoration: none !important;
        transition: all 0.2s ease;
        box-sizing: border-box;
        width: 100%;
        line-height: 1.3;
    }
    .nufca-btn-wa {
        background-color: #25d366;
        color: #ffffff !important;
    }
    .nufca-btn-wa:hover {
        background-color: #20ba5a;
    }
    .nufca-btn-call {
        background-color: #0b2545;
        color: #ffffff !important;
    }
    .nufca-btn-call:hover {
        background-color: #134074;
    }
    .nufca-btn-mail {
        background-color: #f8fafc;
        color: #334155 !important;
        border: 1px solid #cbd5e1;
        font-size: 13px;
        font-weight: 600;
    }
    .nufca-btn-mail:hover {
        background-color: #f1f5f9;
        color: #0b2545 !important;
    }
    @media (max-width: 768px) {
        .nufca-consultation-card {
            padding: 16px;
            gap: 16px;
        }
        .nufca-card-actions {
            flex: 1 1 100%;
            width: 100%;
        }
    }
`;

function generateCardHTML(serviceSlug, locKey) {
    const sMeta = serviceMeta[serviceSlug];
    const lMeta = locationMeta[locKey] || locationMeta['main'];
    const title = sMeta.titleTemplate(lMeta.city);
    const desc = sMeta.descTemplate(lMeta.city);

    return `<!-- Direct Consultation Advisory Card -->
    <div class="nufca-consultation-card">
        <div class="nufca-card-content">
            <span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">${sMeta.eyebrow}</span>
            <h3 style="color: #0b2545; margin: 4px 0 8px 0; font-size: clamp(18px, 3.2vw, 21px); font-weight: 800; line-height: 1.3;">${title}</h3>
            <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">${desc}</p>
        </div>
        <div class="nufca-card-actions">
            <a href="https://wa.me/97142500679" target="_blank" class="nufca-btn nufca-btn-wa">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat on WhatsApp
            </a>
            <a href="tel:${lMeta.cleanPhone.replace(/\s+/g, '')}" class="nufca-btn nufca-btn-call">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Direct Call (${lMeta.cleanPhone})
            </a>
            <a href="mailto:${lMeta.email}" class="nufca-btn nufca-btn-mail">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                Email: ${lMeta.email}
            </a>
        </div>
    </div>`;
}

async function replaceFormsOnTargetPages() {
    console.log("🚀 Replacing forms with Direct Advisory Consultation Cards on Corporate Tax, VAT Consultancy, and Audit & Assurance...\n");

    const targetHubs = ['corporate-tax-in-uae', 'vat-consultancy-in-uae', 'audit-assurance-uae'];

    for (const hubSlug of targetHubs) {
        console.log(`\n======================================================`);
        console.log(`Processing Service: ${hubSlug}`);
        console.log(`======================================================`);

        // Parent page
        const pRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages?slug=${hubSlug}`, { headers });
        const pData = await pRes.json();
        if (pData.length > 0) {
            const parentPage = pData[0];
            await cleanAndReplaceFormOnPage(parentPage, hubSlug, 'main');

            // Child pages
            const cRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages?parent=${parentPage.id}`, { headers });
            const children = await cRes.json();
            for (const child of children) {
                await cleanAndReplaceFormOnPage(child, hubSlug, child.slug);
            }
        }
    }

    console.log("\n🎉 ALL FORMS HAVE BEEN REPLACED WITH DIRECT ADVISORY CONSULTATION CARDS!");
}

async function cleanAndReplaceFormOnPage(page, serviceSlug, locKey) {
    let content = page.content.rendered;
    const cardHTML = generateCardHTML(serviceSlug, locKey);

    // 1. Ensure Card CSS is present
    if (!content.includes('.nufca-consultation-card {')) {
        const styleTagMatch = content.match(/<style>([\s\S]*?)<\/style>/i);
        if (styleTagMatch) {
            content = content.replace('</style>', cardCSS + '\n</style>');
        } else {
            content = `<style>${cardCSS}</style>\n` + content;
        }
    }

    // 2. Remove the existing form container
    const formStart = content.indexOf('<form');
    if (formStart !== -1) {
        const formEnd = content.indexOf('</form>') + 7;
        const beforeForm = content.substring(0, formStart);
        const lastDivBefore = beforeForm.lastIndexOf('<div style="background: #ffffff; border: 2px solid #134074;');

        if (lastDivBefore !== -1) {
            const afterForm = content.substring(formEnd);
            const firstDivAfter = afterForm.indexOf('</div>') + 6;
            const fullFormBlock = content.substring(lastDivBefore, formEnd + firstDivAfter);

            content = content.replace(fullFormBlock, cardHTML);
        } else {
            // Fallback: replace just <form> ... </form>
            const fullForm = content.substring(formStart, formEnd);
            content = content.replace(fullForm, cardHTML);
        }
    } else {
        console.log(`  --> Page ID ${page.id} had no form tag.`);
    }

    console.log(`Updating Page ID ${page.id} (${page.slug}) for location [${locKey}]...`);
    const updateRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${page.id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ content: content })
    });

    console.log(`  --> Update Status for ID ${page.id}: ${updateRes.status}`);
}

replaceFormsOnTargetPages();
