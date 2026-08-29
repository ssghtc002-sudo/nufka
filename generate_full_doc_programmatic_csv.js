const fs = require('fs');
const path = require('path');

// Ultimate Service-First SEO Hierarchy (/corporate-tax/<location>/)
const locations = [
    {
        parent_slug: "corporate-tax",
        slug: "dubai",
        city_name: "Dubai",
        full_location: "Dubai, UAE",
        branch_title: "NUFCA Dubai Headquarters",
        address: "Dubai, United Arab Emirates",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "Corporate Tax Consultants Dubai | UAE Corporate Tax Advisory",
        meta_description: "Corporate tax consultants in Dubai helping businesses register, file and stay compliant under Federal Decree-Law No. 47 of 2022. Free zone, TP and 9% CT advisory.",
        h1_title: "Corporate Tax Consultants in Dubai",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Now In Force",
        hero_headline: "Corporate Tax Consultants in Dubai Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, taxable income computation, free zone QFZP assessment, transfer pricing documentation and return filing - delivered by qualified UAE tax advisors before your nine-month deadline, not after it."
    },
    {
        parent_slug: "corporate-tax",
        slug: "gold-souk-dubai",
        city_name: "Gold Souk (Deira, Dubai)",
        full_location: "Gold Souk, Deira, Dubai",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "Gold Souk Dubai Corporate Tax Consultants | Jewelry & Bullion Tax Advisory",
        meta_description: "Corporate tax consultants in Gold Souk Deira. Office 115, Sheikha Building. Registration, margin scheme VAT, bullion spot inventory & 9% CT return filing.",
        h1_title: "Corporate Tax Consultants in Gold Souk, Deira",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Gold & Precious Metals Specialist",
        hero_headline: "Corporate Tax Consultants in Gold Souk Deira Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, bullion inventory spot rate valuation, margin scheme VAT, free zone QFZP assessment, and goAML cash reporting delivered by qualified tax advisors in Gold Souk."
    },
    {
        parent_slug: "corporate-tax",
        slug: "dmcc-dubai",
        city_name: "DMCC / JLT (Dubai)",
        full_location: "DMCC, Almas Tower, JLT, Dubai",
        branch_title: "NUFCA DMCC Branch Office",
        address: "01-34, 1st Floor, Almas Tower, Near JLT Metro Station, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "DMCC Corporate Tax Consultants Dubai | Almas Tower Branch | NUFCA",
        meta_description: "Corporate tax consultants in DMCC Almas Tower JLT. QFZP 0% tax rate assessment, commodity trading audit, transfer pricing & return filing.",
        h1_title: "Corporate Tax Consultants in DMCC, Dubai",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - DMCC Almas Tower Branch",
        hero_headline: "Corporate Tax Consultants in DMCC Almas Tower Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, taxable income computation, QFZP 0% qualifying income assessment, transfer pricing documentation and return filing for DMCC firms."
    },
    {
        parent_slug: "corporate-tax",
        slug: "business-bay-dubai",
        city_name: "Business Bay (Dubai)",
        full_location: "Business Bay, Dubai",
        branch_title: "NUFCA Business Bay Office",
        address: "Business Bay, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "Business Bay Dubai Corporate Tax Consultants | NUFCA Advisory",
        meta_description: "Corporate tax consultants in Business Bay Dubai. Corporate tax registration, 9% CT return filing, tax group consolidation & transfer pricing.",
        h1_title: "Corporate Tax Consultants in Business Bay, Dubai",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Business Bay CBD",
        hero_headline: "Corporate Tax Consultants in Business Bay Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, taxable income computation, ESR compliance, corporate tax group consolidation, and return filing delivered by qualified UAE tax advisors."
    },
    {
        parent_slug: "corporate-tax",
        slug: "difc-dubai",
        city_name: "DIFC (Dubai International Financial Centre)",
        full_location: "DIFC, Dubai",
        branch_title: "NUFCA DIFC Advisory Suite",
        address: "DIFC, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "DIFC Corporate Tax Consultants | DFSA & QFZP Advisory Dubai",
        meta_description: "DIFC corporate tax consultants. DFSA AML compliance, QFZP 0% qualifying income verification, Master/Local file transfer pricing & return filing.",
        h1_title: "Corporate Tax Consultants in DIFC, Dubai",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - DFSA Regulated Financial Centre",
        hero_headline: "Corporate Tax Consultants in DIFC Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, QFZP 0% rate verification, DFSA regulatory alignment, transfer pricing documentation and return filing delivered before your 9-month deadline."
    },
    {
        parent_slug: "corporate-tax",
        slug: "abu-dhabi",
        city_name: "Abu Dhabi",
        full_location: "Abu Dhabi, UAE",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "Corporate Tax Consultants Abu Dhabi | UAE Corporate Tax Advisory",
        meta_description: "Corporate tax consultants in Abu Dhabi Tamouh Tower Al Reem Island. 9% CT registration, government supplier tax advisory & return filing.",
        h1_title: "Corporate Tax Consultants in Abu Dhabi",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Abu Dhabi Tamouh Tower Branch",
        hero_headline: "Corporate Tax Consultants in Abu Dhabi Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, taxable income computation, corporate tax group consolidation, transfer pricing documentation and return filing delivered by qualified tax advisors."
    },
    {
        parent_slug: "corporate-tax",
        slug: "adgm-abu-dhabi",
        city_name: "ADGM (Abu Dhabi Global Market)",
        full_location: "ADGM, Abu Dhabi",
        branch_title: "NUFCA ADGM Advisory Suite",
        address: "ADGM, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "ADGM Corporate Tax Consultants Abu Dhabi | QFZP & TP Advisory",
        meta_description: "ADGM corporate tax consultants. FSRA regulatory alignment, QFZP 0% tax assessment, SPV taxation, transfer pricing & return filing.",
        h1_title: "Corporate Tax Consultants in ADGM, Abu Dhabi",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - ADGM Financial Free Zone",
        hero_headline: "Corporate Tax Consultants in ADGM Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, QFZP 0% qualifying income verification, SPV participation exemption, transfer pricing documentation and return filing for ADGM entities."
    },
    {
        parent_slug: "corporate-tax",
        slug: "sharjah",
        city_name: "Sharjah",
        full_location: "Sharjah, UAE",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com",
        meta_title: "Corporate Tax Consultants Sharjah | Hamriyah Free Zone Branch",
        meta_description: "Corporate tax consultants in Sharjah. Hamriyah Free Zone ELOB Office E2-115F-35. Industrial manufacturing CT filing, QFZP & return filing.",
        h1_title: "Corporate Tax Consultants in Sharjah",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Sharjah Hamriyah Branch",
        hero_headline: "Corporate Tax Consultants in Sharjah Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, industrial taxable income computation, machinery depreciation deductions, QFZP assessment and return filing for Sharjah entities."
    },
    {
        parent_slug: "corporate-tax",
        slug: "dafza-dubai",
        city_name: "DAFZA (Dubai Airport Freezone)",
        full_location: "DAFZA, Dubai",
        branch_title: "NUFCA DAFZA Branch Office",
        address: "7WB 2134 Second Floor, DAFZA, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "DAFZA Corporate Tax Consultants Dubai | NUFCA DAFZA Branch",
        meta_description: "Corporate tax consultants in DAFZA. Building 7WB 2134. Aviation logistics, warehouse distribution QFZP 0% tax assessment & return filing.",
        h1_title: "Corporate Tax Consultants in DAFZA, Dubai",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - DAFZA Building 7WB Branch",
        hero_headline: "Corporate Tax Consultants in DAFZA Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, warehouse logistics qualifying income verification, QFZP 0% assessment, transfer pricing documentation and return filing for DAFZA entities."
    }
];

function generateFullArticleHTML(loc) {
    return `<div class="nufca-article-container" style="font-family: Arial, sans-serif; line-height: 1.7; color: #1d2d44; max-width: 1000px; margin: 0 auto;">
    
    <!-- Hero Section -->
    <div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 45px 30px; border-radius: 12px; margin-bottom: 35px;">
        <span style="background: rgba(255,255,255,0.15); color: #fff; font-size: 13px; font-weight: bold; padding: 6px 14px; border-radius: 20px; text-transform: uppercase;">
            ${loc.eyebrow}
        </span>
        <h1 style="color: #ffffff; font-size: 34px; margin-top: 15px; font-weight: 800; line-height: 1.25;">${loc.hero_headline}</h1>
        <p style="font-size: 18px; opacity: 0.95; max-width: 850px; margin-bottom: 25px;">${loc.hero_subheadline}</p>
        
        <!-- Trust Strip -->
        <div style="display: flex; flex-wrap: wrap; gap: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 14px; font-weight: 600;">
            <span>✓ FTA-registered tax agents</span>
            <span>✓ 500+ UAE entities onboarded</span>
            <span>✓ Mainland, free zone & MNEs</span>
            <span>✓ Response within 1 working day</span>
        </div>

        <!-- Branch Address Bar -->
        <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); padding: 15px 20px; border-radius: 8px; margin-top: 25px; font-size: 14px;">
            <div style="font-weight: bold; color: #8da9c4; font-size: 12px; text-transform: uppercase;">📍 ${loc.branch_title}:</div>
            <div style="font-size: 15px; font-weight: bold; margin-top: 2px;">${loc.address}</div>
            <div style="margin-top: 4px;">📞 Phone: <strong>${loc.phone}</strong> | ✉️ Email: <strong>${loc.email}</strong></div>
        </div>
    </div>

    <!-- Lead Form Box -->
    <div style="background: #f8f9fa; border: 2px solid #134074; padding: 30px; border-radius: 10px; margin-bottom: 40px;">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 22px;">Get Your Corporate Tax Position Reviewed in ${loc.city_name}</h3>
        <p style="color: #555; font-size: 14px;">Send your details and a consultant will come back with your registration status, applicable rate and next filing date. No cost, no obligation.</p>
        <div style="margin-top: 15px;">
            <a href="https://nufca.com/contact-us/" style="background: #134074; color: #fff; font-weight: bold; padding: 12px 28px; text-decoration: none; border-radius: 6px; display: inline-block;">Request My Tax Review →</a>
        </div>
        <div style="font-size: 12px; color: #777; margin-top: 8px;">Typical response time: under 24 hours on working days.</div>
    </div>

    <!-- Section 1 -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px;">The UAE Is No Longer a Zero-Tax Jurisdiction</h2>
    <p>For decades, the pitch for setting up in ${loc.city_name} was simple: no corporate tax. That ended with <strong>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses</strong>, which introduced a federal corporate tax applying to financial years beginning on or after 1 June 2023.</p>
    <p>A company with a calendar financial year entered its first tax period on 1 January 2024. A company with a June year-end entered it a full seven months earlier.</p>
    <p>The law is not punitive by international standards - the headline rate of 9% remains one of the lowest anywhere - but it is administratively demanding. Every taxable person in ${loc.city_name} must register with the Federal Tax Authority, maintain accounting records to a standard that supports a tax computation, determine taxable income under statutory adjustment rules, assess whether related-party dealings meet the arm’s length principle, and file a return within nine months of the end of the tax period.</p>
    <p>Missing any of those steps carries a penalty, and the penalties apply whether or not any tax is actually due. This is where most businesses discover the gap between having an accountant and having a corporate tax consultant in ${loc.city_name}.</p>

    <!-- Section 2: Rates -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">The Rates: 0%, 9% and 15% Explained</h2>
    <p>The UAE operates a tiered structure, and understanding which tier applies is the single most common source of confusion we resolve for businesses in ${loc.city_name}.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 25px 0;">
        <div style="background: #f8f9fa; border-top: 4px solid #134074; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <div style="font-size: 32px; font-weight: 800; color: #134074;">0%</div>
            <h3 style="margin: 5px 0; color: #0b2545;">0% Tax Rate</h3>
            <p style="font-size: 14px; color: #555;">Applies to taxable income up to AED 375,000. Also applies to Qualifying Income of a Qualifying Free Zone Person (QFZP).</p>
        </div>
        <div style="background: #f8f9fa; border-top: 4px solid #134074; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <div style="font-size: 32px; font-weight: 800; color: #134074;">9%</div>
            <h3 style="margin: 5px 0; color: #0b2545;">9% Standard Rate</h3>
            <p style="font-size: 14px; color: #555;">Applies to taxable income exceeding AED 375,000 for mainland companies and non-qualifying free zone income in ${loc.city_name}.</p>
        </div>
        <div style="background: #f8f9fa; border-top: 4px solid #134074; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <div style="font-size: 32px; font-weight: 800; color: #134074;">15%</div>
            <h3 style="margin: 5px 0; color: #0b2545;">15% MNE Minimum Tax</h3>
            <p style="font-size: 14px; color: #555;">Applies to multinational enterprise groups with consolidated global revenues of EUR 750 million or more under OECD Pillar Two.</p>
        </div>
    </div>

    <!-- Section 3: QFZP Free Zone Rules -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Free Zone Companies: The QFZP Conditions Most Businesses Fail</h2>
    <p>Free zone companies in ${loc.city_name} can retain a 0% corporate tax rate, but only on Qualifying Income and only while they satisfy the conditions for Qualifying Free Zone Person status.</p>
    <p>To be treated as a Qualifying Free Zone Person under Article 18 of the Decree-Law, an entity must satisfy all conditions:</p>
    <ul style="padding-left: 20px;">
        <li><strong>Maintain Adequate Substance:</strong> Core income-generating activities conducted in a free zone with adequate assets, employees, and operating expenditure.</li>
        <li><strong>Derive Qualifying Income:</strong> Income from transactions with other free zone persons or qualifying activities (manufacturing, treasury, investment holding, distribution).</li>
        <li><strong>Avoid Excluded Activities:</strong> Natural person transactions, banking, insurance, or mainland commercial real estate.</li>
        <li><strong>Comply with Transfer Pricing:</strong> Arm’s length principle for Related Parties & Connected Persons.</li>
        <li><strong>De Minimis Requirement:</strong> Non-qualifying revenue must not exceed lower of 5% of total revenue or AED 5 million.</li>
        <li><strong>Audited Financial Statements:</strong> Mandatory preparation of annual audited accounts.</li>
    </ul>

    <div style="background: #fff3cd; border-left: 5px solid #ffc107; padding: 15px 20px; border-radius: 4px; margin: 20px 0;">
        <strong>⚠️ The Five-Period Penalty Consequence:</strong> Breaching the de minimis threshold or QFZP condition causes an entity to lose 0% status for that tax period AND the following 4 tax periods (5 years total at 9% tax).
    </div>

    <!-- Section 4: Transfer Pricing -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Transfer Pricing and the Master File Requirement</h2>
    <p>Article 34 requires transactions with Related Parties and Connected Persons to satisfy the arm’s length standard. Under Ministerial Decision No. 97 of 2023, a taxable person in ${loc.city_name} must maintain both a <strong>Master File</strong> and a <strong>Local File</strong> if revenue is AED 200 million or more, or if part of an MNE group with AED 3.15 billion revenue.</p>
    <p>Both files must be submitted to the FTA within 30 days of request. Connected Person remuneration (owners/directors) must be benchmarked to market value.</p>

    <!-- Section 5: What NUFCA Delivers -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What Our Corporate Tax Consultants in ${loc.city_name} Deliver</h2>
    <ul style="padding-left: 20px;">
        <li><strong>Corporate Tax Registration:</strong> Submission via EmaraTax & confirmation of Corporate Tax Registration Number.</li>
        <li><strong>Tax Computation & Return Filing:</strong> Converting accounts into compliant taxable income computations before the 9-month deadline.</li>
        <li><strong>Free Zone QFZP Assessment:</strong> Written position paper testing revenue streams & de minimis headroom.</li>
        <li><strong>Transfer Pricing:</strong> Related-party mapping, benchmarking studies, Master File & Local File preparation.</li>
        <li><strong>Tax Group Formation:</strong> 95% ownership consolidation reviews.</li>
        <li><strong>Health Checks & Second Opinions:</strong> Independent audit of existing computations & filed returns.</li>
    </ul>

    <!-- FAQ Section -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Corporate Tax in ${loc.city_name} - Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ What is Federal Decree-Law No. 47 of 2022?</h3>
            <p style="margin: 0; color: #555;">It is the UAE’s federal corporate tax law introducing a 9% tax on business profits for financial years beginning on or after 1 June 2023.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ Do I need to register if my profit is below AED 375,000?</h3>
            <p style="margin: 0; color: #555;">Yes. The AED 375,000 threshold determines the tax rate, not the registration requirement. Every taxable person must register with the FTA and file an annual return.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ What penalties apply for late corporate tax registration in ${loc.city_name}?</h3>
            <p style="margin: 0; color: #555;">Late corporate tax registration attracts a fixed administrative penalty of AED 10,000 imposed by the Federal Tax Authority.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ When is the corporate tax return due?</h3>
            <p style="margin: 0; color: #555;">A corporate tax return and tax payment are due within nine months of the end of the relevant tax period (e.g. 30 September 2026 for December 2025 year end).</p>
        </div>
    </div>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 40px 25px; border-radius: 10px; margin-top: 45px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 26px;">Book a Consultation with Our Corporate Tax Consultants in ${loc.city_name}</h2>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 10px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 25px;">Call <strong>${loc.phone}</strong> or request a free review online.</p>
        <a href="https://nufca.com/contact-us/" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 14px 35px; text-decoration: none; border-radius: 6px; display: inline-block;">Speak to a Corporate Tax Consultant →</a>
    </div>

</div>

<!-- FAQ & LocalBusiness Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA ${loc.city_name} Branch",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": ${JSON.stringify(loc.address)},
        "addressCountry": "AE"
      },
      "telephone": ${JSON.stringify(loc.phone)},
      "email": ${JSON.stringify(loc.email)},
      "url": "https://nufca.com/${loc.parent_slug}/${loc.slug}/"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is Federal Decree-Law No. 47 of 2022?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is the UAE’s federal corporate tax law introducing a 9% tax on business profits for financial years beginning on or after 1 June 2023."
        }
      }, {
        "@type": "Question",
        "name": "Do I need to register if my profit is below AED 375,000?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The AED 375,000 threshold determines the tax rate, not the registration requirement. Every taxable person must register with the FTA and file an annual return."
        }
      }, {
        "@type": "Question",
        "name": "What penalties apply for late corporate tax registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Late corporate tax registration attracts a fixed administrative penalty of AED 10,000 imposed by the Federal Tax Authority."
        }
      }, {
        "@type": "Question",
        "name": "When is the corporate tax return due?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A corporate tax return and tax payment are due within nine months of the end of the relevant tax period."
        }
      }]
    }
  ]
}
</script>`;
}

function escapeCSV(str) {
    if (typeof str !== 'string') return '';
    return '"' + str.replace(/"/g, '""') + '"';
}

function buildCSV() {
    const headers = [
        "parent_slug",
        "slug",
        "post_title",
        "meta_description",
        "post_content"
    ];

    let csvContent = headers.join(',') + '\n';

    locations.forEach(loc => {
        const row = [
            escapeCSV(loc.parent_slug),
            escapeCSV(loc.slug),
            escapeCSV(loc.h1_title),
            escapeCSV(loc.meta_description),
            escapeCSV(generateFullArticleHTML(loc))
        ];
        csvContent += row.join(',') + '\n';
    });

    const targetPath = path.join(__dirname, 'full_doc_article_programmatic_pages.csv');
    fs.writeFileSync(targetPath, csvContent, 'utf-8');
    console.log(`✅ Ultimate Service-First CSV built at: ${targetPath}`);
}

buildCSV();
