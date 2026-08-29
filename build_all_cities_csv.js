const fs = require('fs');
const path = require('path');

const locations = [
    {
        parent_slug: "dubai",
        slug: "gold-souk",
        city_name: "Gold Souk (Deira, Dubai)",
        branch_name: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "Gold Souk Dubai Corporate Tax & Accounting Consultants | NUFCA Branch",
        meta_description: "NUFCA Gold Souk Branch: Office 115, Sheikha Building, Gold Souq, Deira. Corporate tax, VAT margin scheme & goAML compliance for jewelers.",
        h1_title: "Corporate Tax & Accounting Consultants in Gold Souk, Deira",
        eyebrow: "Official NUFCA Gold Souk Branch Office",
        hero_headline: "Corporate Tax & Accounting Consultants in Gold Souk, Deira",
        hero_subheadline: "Visit our physical branch in Sheikha Building, Gold Souq. Specialized corporate tax filing, daily bullion spot rate inventory valuation, margin scheme VAT, and goAML compliance.",
        industry_focus: "Precious Metals Refineries, Bullion Wholesalers, Diamond Merchants & Retail Jewelry Shops in Deira Gold Souk",
        local_regulations: "FTA Gold & Precious Metals Reverse Charge Mechanism, goAML Cash Transaction reporting, & IFRS FIFO/Weighted Average spot inventory valuation.",
        faq1_q: "Where is NUFCA's Gold Souk office located?",
        faq1_a: "Our Gold Souk branch is located at Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai. You can visit our consultants directly for tax and bookkeeping advice.",
        faq2_q: "How are gold inventory spot price fluctuations handled for corporate tax in Gold Souk?",
        faq2_a: "Inventory must be valued using IFRS compliant FIFO or Weighted Average Cost methods based on daily gold spot market rates, with unrealized mark-to-market gains adjusted as per corporate tax rules."
    },
    {
        parent_slug: "dubai",
        slug: "dmcc",
        city_name: "DMCC / JLT (Dubai)",
        branch_name: "NUFCA DMCC Branch Office",
        address: "01-34, 1st Floor, Almas Tower, Near JLT Metro Station, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "DMCC Corporate Tax Consultants Dubai | Almas Tower Branch | NUFCA",
        meta_description: "NUFCA DMCC Branch at Almas Tower JLT. Corporate tax registration, QFZP 0% tax valuation & commodity trading audit in DMCC.",
        h1_title: "Corporate Tax Consultants in DMCC, Dubai",
        eyebrow: "Official NUFCA DMCC Almas Tower Branch Office",
        hero_headline: "Corporate Tax & Financial Audit Consultants in DMCC Almas Tower",
        hero_subheadline: "Visit our DMCC branch office on the 1st Floor of Almas Tower. Expert Qualifying Free Zone Person (QFZP) 0% tax verification, commodity trading audit, and corporate tax returns.",
        industry_focus: "DMCC Commodity Traders, Tech Enterprises, Global Trading Firms, & Consultancies in Jumeirah Lakes Towers (JLT)",
        local_regulations: "DMCC Authority regulations, Designated Zone commodity trading rules, & Article 18 QFZP Qualifying Income criteria.",
        faq1_q: "Where is NUFCA's DMCC office located?",
        faq1_a: "Our DMCC office is located at 01-34, 1st Floor, Almas Tower, Near JLT Metro Station, Dubai. Call us at 055-9831923 or email dmcc@nufca.com.",
        faq2_q: "Do DMCC free zone companies qualify for 0% corporate tax?",
        faq2_a: "DMCC entities satisfying all QFZP conditions, including adequate substance in JLT and qualifying income from trading or headquarter services, enjoy a 0% tax rate."
    },
    {
        parent_slug: "dubai",
        slug: "dafza",
        city_name: "DAFZA (Dubai Airport Freezone)",
        branch_name: "NUFCA DAFZA Branch Office",
        address: "7WB 2134 Second Floor, DAFZA, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "DAFZA Corporate Tax Consultants Dubai | NUFCA DAFZA Branch",
        meta_description: "NUFCA DAFZA Branch: 7WB 2134 Second Floor, DAFZA. Corporate tax, air cargo logistics audit & free zone QFZP compliance.",
        h1_title: "Corporate Tax Consultants in DAFZA, Dubai",
        eyebrow: "Official NUFCA DAFZA Branch Office",
        hero_headline: "Corporate Tax & Audit Consultants in DAFZA (Dubai Airport Freezone)",
        hero_subheadline: "Visit our DAFZA branch office in Building 7WB. Comprehensive corporate tax filing, aviation logistics bookkeeping, and QFZP 0% tax assessment.",
        industry_focus: "Aviation Services, Electronics Importers, Pharmaceuticals, & Air Freight Forwarders in DAFZA",
        local_regulations: "DAFZA Authority regulations, Designated Zone warehouse distribution rules, & FTA 9% vs 0% QFZP tax guidelines.",
        faq1_q: "Where is NUFCA's DAFZA branch office located?",
        faq1_a: "Our DAFZA branch is located at 7WB 2134, Second Floor, Dubai Airport Freezone (DAFZA), Dubai, UAE.",
        faq2_q: "Is warehouse distribution in DAFZA considered Qualifying Income?",
        faq2_a: "Yes. Distribution of goods or materials in or from DAFZA to a reseller is a Qualifying Activity eligible for 0% corporate tax."
    },
    {
        parent_slug: "sharjah",
        slug: "hamriyah-free-zone",
        city_name: "Hamriyah Free Zone (Sharjah)",
        branch_name: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com",
        meta_title: "Hamriyah Free Zone Sharjah Corporate Tax Consultants | NUFCA Branch",
        meta_description: "NUFCA Hamriyah Free Zone Branch: ELOB Office No. E2-115F-35. Corporate tax, maritime & industrial audit services in Sharjah.",
        h1_title: "Corporate Tax Consultants in Hamriyah Free Zone, Sharjah",
        eyebrow: "Official NUFCA Hamriyah Free Zone Branch Office",
        hero_headline: "Corporate Tax & Industrial Audit Consultants in Hamriyah Free Zone",
        hero_subheadline: "Visit our Sharjah branch in ELOB Office E2-115F-35. Specialized corporate tax computation, maritime industrial auditing, and QFZP tax filing.",
        industry_focus: "Steel Fabricators, Oil & Gas Services, Maritime Logistics, Heavy Industry & Factories in Hamriyah Free Zone",
        local_regulations: "HFZA Authority rules, Industrial license capital expenditure deductions, & Article 18 QFZP Qualifying Income.",
        faq1_q: "Where is NUFCA's Sharjah branch office located?",
        faq1_a: "Our Sharjah branch is located at ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah. Call us at 055-5204830 or email hm@nufca.com.",
        faq2_q: "Are manufacturing activities in Hamriyah Free Zone eligible for 0% tax?",
        faq2_a: "Yes. Manufacturing and processing of goods in Hamriyah Free Zone are recognized Qualifying Activities eligible for 0% corporate tax rate."
    },
    {
        parent_slug: "abu-dhabi",
        slug: "reem-island",
        city_name: "Al Reem Island (Abu Dhabi)",
        branch_name: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "Al Reem Island Abu Dhabi Corporate Tax Consultants | NUFCA Tamouh Tower",
        meta_description: "NUFCA Abu Dhabi Branch: Office 2402G, 24th Floor, Tamouh Tower, Al Reem Island. 9% Corporate tax filing & financial advisory.",
        h1_title: "Corporate Tax Consultants in Al Reem Island, Abu Dhabi",
        eyebrow: "Official NUFCA Abu Dhabi Tamouh Tower Branch Office",
        hero_headline: "Corporate Tax Consultants in Tamouh Tower, Al Reem Island Abu Dhabi",
        hero_subheadline: "Visit our Abu Dhabi branch office on the 24th Floor of Tamouh Tower. Full corporate tax registration, 9% CT return filing, and financial audit.",
        industry_focus: "Real Estate Developers, Offshore Holding Entities, Financial Consultancies, & Capital Firms on Al Reem Island",
        local_regulations: "Abu Dhabi DED licensing, 9% Corporate Tax compliance, & FTA EmaraTax submission.",
        faq1_q: "Where is NUFCA's Abu Dhabi office located?",
        faq1_a: "Our Abu Dhabi branch is at Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE.",
        faq2_q: "When is corporate tax registration required for Abu Dhabi companies?",
        faq2_a: "All Abu Dhabi companies must register for corporate tax before the FTA deadline specified for their trade license issuance month."
    },
    {
        parent_slug: "dubai",
        slug: "business-bay",
        city_name: "Business Bay (Dubai)",
        branch_name: "NUFCA Dubai Headquarters",
        address: "Business Bay, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "Business Bay Dubai Corporate Tax Consultants | NUFCA Advisory",
        meta_description: "Corporate tax consultants in Business Bay Dubai. Specialized corporate tax registration, 9% CT return filing & transfer pricing.",
        h1_title: "Corporate Tax Consultants in Business Bay, Dubai",
        eyebrow: "Central Business District Tax Advisory",
        hero_headline: "Corporate Tax Consultants in Business Bay Who Handle Full Filing Compliance",
        hero_subheadline: "Tailored corporate tax filing, audited financial statement preparation, and corporate tax group consolidation for firms operating in Business Bay.",
        industry_focus: "Corporate Headquarters, Management Consultancies, Real Estate Agencies, & Commercial Enterprises in Business Bay",
        local_regulations: "Dubai DET licensing requirements, Corporate Tax registration, and Economic Substance Regulations (ESR).",
        faq1_q: "When is the corporate tax return due for a Business Bay company?",
        faq1_a: "Corporate tax returns and tax payments are due within 9 months of the end of the relevant tax period.",
        faq2_q: "Can a Business Bay holding company form a Corporate Tax Group?",
        faq2_a: "Yes. A UAE resident holding company owning 95% or more of subsidiary shares can form a Corporate Tax Group."
    },
    {
        parent_slug: "dubai",
        slug: "difc",
        city_name: "DIFC (Dubai International Financial Centre)",
        branch_name: "NUFCA DIFC Advisory Team",
        address: "DIFC, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "DIFC Corporate Tax Consultants | DFSA & QFZP Tax Advisory Dubai",
        meta_description: "DIFC corporate tax & DFSA compliance advisory. Qualifying Free Zone Person (QFZP) 0% tax assessment & transfer pricing.",
        h1_title: "Corporate Tax Consultants in DIFC, Dubai",
        eyebrow: "DFSA Regulated & QFZP Tax Compliance Specialist",
        hero_headline: "Corporate Tax & Transfer Pricing Consultants in DIFC",
        hero_subheadline: "Qualifying Free Zone Person (QFZP) 0% tax rate verification, DFSA regulatory alignment, and Master/Local File transfer pricing.",
        industry_focus: "Asset Managers, Investment Funds, Banks, Fintechs, & Family Offices in DIFC",
        local_regulations: "DFSA AML/CFT rules, Article 18 QFZP Qualifying Income regulations, & OECD Transfer Pricing thresholds.",
        faq1_q: "Does a DIFC company automatically get 0% corporate tax?",
        faq1_a: "No. A DIFC company must satisfy all Qualifying Free Zone Person (QFZP) conditions, including adequate substance and audited accounts.",
        faq2_q: "What happens if a DIFC firm breaches the de minimis threshold?",
        faq2_a: "Breaching the de minimis threshold causes the entity to lose QFZP status for that tax period and the following 4 tax periods."
    },
    {
        parent_slug: "abu-dhabi",
        slug: "adgm",
        city_name: "ADGM (Abu Dhabi Global Market)",
        branch_name: "NUFCA ADGM Advisory Team",
        address: "ADGM, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        meta_title: "ADGM Corporate Tax Consultants Abu Dhabi | QFZP & Transfer Pricing",
        meta_description: "ADGM corporate tax consultants. Specialized Qualifying Free Zone Person (QFZP) 0% rate assessment & transfer pricing.",
        h1_title: "Corporate Tax Consultants in ADGM, Abu Dhabi",
        eyebrow: "ADGM Financial Free Zone Tax Specialist",
        hero_headline: "Corporate Tax & QFZP Advisory Consultants in ADGM, Abu Dhabi",
        hero_subheadline: "Qualifying Free Zone Person 0% tax verification, FSRA regulatory alignment, and transfer pricing documentation.",
        industry_focus: "Venture Capital Funds, Private Equity, SPVs, & Tech Startups in ADGM",
        local_regulations: "ADGM FSRA guidelines, Article 18 QFZP Qualifying Income, & 15% MNE Top-up Tax rules.",
        faq1_q: "Can an ADGM SPV qualify for 0% corporate tax?",
        faq1_a: "An ADGM SPV can qualify for 0% rate if it satisfies QFZP requirements or participation exemption rules.",
        faq2_q: "What transfer pricing threshold applies to ADGM entities?",
        faq2_a: "Entities with revenue of AED 200 million or belonging to MNE groups with AED 3.15 billion revenue must prepare Master & Local Files."
    }
];

function generateHTML(loc) {
    return `<div class="pseo-container" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #fff; padding: 40px 25px; border-radius: 12px; margin-bottom: 30px;">
        <span style="background: #eef4f8; color: #134074; font-size: 13px; font-weight: bold; padding: 4px 12px; border-radius: 20px; text-transform: uppercase;">
            ${loc.city_name} • FTA Registered Tax Agents
        </span>
        <h1 style="color: #ffffff; font-size: 32px; margin-top: 15px; font-weight: 700;">${loc.hero_headline}</h1>
        <p style="font-size: 18px; opacity: 0.9; max-width: 800px;">${loc.hero_subheadline}</p>
        
        <!-- Physical Branch Office Highlight Box -->
        <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); padding: 15px 20px; border-radius: 8px; margin-top: 20px; font-size: 14px;">
            <div style="font-weight: bold; color: #8da9c4; font-size: 12px; text-transform: uppercase;">📍 Visit Our ${loc.city_name} Branch:</div>
            <div style="font-size: 15px; font-weight: bold; margin-top: 4px;">${loc.branch_name}</div>
            <div style="opacity: 0.9;">${loc.address}</div>
            <div style="margin-top: 6px;">📞 Phone: <strong>${loc.phone}</strong> | ✉️ Email: <strong>${loc.email}</strong></div>
        </div>

        <div style="margin-top: 25px;">
            <a href="https://nufca.com/contact-us/" style="background: #8da9c4; color: #0b2545; font-weight: bold; padding: 12px 28px; text-decoration: none; border-radius: 6px; display: inline-block;">Get Free Corporate Tax Consultation</a>
        </div>
    </div>

    <div style="background: #f8f9fa; border-left: 5px solid #134074; padding: 25px; border-radius: 4px; margin-bottom: 35px;">
        <h2 style="color: #0b2545; font-size: 24px; margin-top: 0;">Industry Focus in ${loc.city_name}</h2>
        <p style="font-size: 16px;">Specialized tax advisory for <strong>${loc.industry_focus}</strong>. Our qualified tax agents at our ${loc.city_name} branch ensure your business complies with Federal Decree-Law No. 47 of 2022 before your 9-month filing deadline.</p>
    </div>

    <div style="margin-bottom: 35px;">
        <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #eef4f8; padding-bottom: 10px;">Key Regulations in ${loc.city_name}</h2>
        <div style="background: #fff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
            <p style="font-size: 16px;">${loc.local_regulations}</p>
            <ul style="padding-left: 20px; margin-top: 15px;">
                <li><strong>FTA Registration & EmaraTax Filing:</strong> Complete setup and registration number confirmation.</li>
                <li><strong>Taxable Income Adjustments:</strong> Accounting profit adjustments for non-deductibles & depreciation.</li>
                <li><strong>Transfer Pricing & Related Party Rules:</strong> Market value benchmarking & documentation.</li>
            </ul>
        </div>
    </div>

    <div style="margin-bottom: 40px;">
        <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #eef4f8; padding-bottom: 10px;">Frequently Asked Questions (${loc.city_name})</h2>
        <div style="margin-top: 20px;">
            <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px;">
                <h3 style="font-size: 18px; color: #134074; margin: 0 0 8px 0;">❓ ${loc.faq1_q}</h3>
                <p style="margin: 0; color: #555;">${loc.faq1_a}</p>
            </div>
            <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px;">
                <h3 style="font-size: 18px; color: #134074; margin: 0 0 8px 0;">❓ ${loc.faq2_q}</h3>
                <p style="margin: 0; color: #555;">${loc.faq2_a}</p>
            </div>
        </div>
    </div>

    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px;">
        <h2 style="color: #fff; margin-top: 0;">Visit Our ${loc.city_name} Branch Office Today</h2>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 5px;">${loc.address}</p>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 20px;">Call us at <strong>${loc.phone}</strong> or book online.</p>
        <a href="https://nufca.com/contact-us/" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 14px 32px; text-decoration: none; border-radius: 6px; display: inline-block;">Book Free Consultation</a>
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
        "name": ${JSON.stringify(loc.faq1_q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(loc.faq1_a)}
        }
      }, {
        "@type": "Question",
        "name": ${JSON.stringify(loc.faq2_q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(loc.faq2_a)}
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
            escapeCSV(generateHTML(loc))
        ];
        csvContent += row.join(',') + '\n';
    });

    const targetPath = path.join(__dirname, 'all_uae_cities_corporate_tax.csv');
    fs.writeFileSync(targetPath, csvContent, 'utf-8');
    console.log(`✅ CSV updated with actual NUFCA branch office addresses at: ${targetPath}`);
}

buildCSV();
