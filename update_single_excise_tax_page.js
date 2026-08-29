const https = require('https');

// ONLY Target Page ID 99367 (https://nufca.com/excise-tax-services-in-uae/)
const targetPageId = 99367;
const authHeader = 'Basic ' + Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

function buildHTML() {
    return `<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb { display: none !important; }
.nufca-content-wrap { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.7; font-size: 16px; max-width: 960px; margin: 0 auto; }
.nufca-content-wrap h2 { color: #0b2545; font-size: 24px; font-weight: 800; margin-top: 35px; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
.nufca-content-wrap h3 { color: #134074; font-size: 19px; font-weight: 700; margin-top: 25px; margin-bottom: 10px; }
.nufca-content-wrap h4 { color: #0b2545; font-size: 16px; font-weight: 700; margin-top: 18px; margin-bottom: 6px; }
.nufca-content-wrap p { margin-bottom: 16px; }
.nufca-content-wrap ul { margin-bottom: 20px; padding-left: 25px; }
.nufca-content-wrap ol { margin-bottom: 20px; padding-left: 25px; }
.nufca-content-wrap li { margin-bottom: 8px; }
.nufca-card-step { background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #134074; border-radius: 6px; padding: 16px 20px; margin-bottom: 14px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
.nufca-card-step h4 { margin-top: 0; }
.nufca-card-step p:last-child { margin-bottom: 0; }
.nufca-box-info { background: #eff6ff; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 6px; margin: 20px 0; color: #1e40af; }
.nufca-box-warning { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 16px 20px; border-radius: 6px; margin: 20px 0; color: #92400e; }
.nufca-box-disclaimer { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #64748b; padding: 16px 20px; border-radius: 6px; font-size: 13.5px; color: #64748b; margin: 30px 0; }
.nufca-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
.nufca-table th, .nufca-table td { border: 1px solid #cbd5e1; padding: 12px; text-align: left; }
.nufca-table th { background-color: #0b2545; color: white; font-weight: 700; }
.nufca-table tr:nth-child(even) td { background-color: #f8fafc; }
</style>

<div class="nufca-content-wrap">

<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/excise-tax-services-in-uae/" selected>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/excise-tax-services-in-uae/dubai/">🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/excise-tax-services-in-uae/gold-souk-dubai/">🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/excise-tax-services-in-uae/abu-dhabi/">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/excise-tax-services-in-uae/sharjah/">🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<!-- Hero Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 50px 24px; text-align: center; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(11,37,69,0.15);">
    <div style="display: inline-block; background: rgba(255,255,255,0.15); color: #93c5fd; padding: 5px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 0.5px;">Federal Decree-Law No. 7 of 2017 — FTA Compliant</div>
    <h1 style="font-size: 32px; font-weight: 800; color: #ffffff !important; margin: 0 0 15px; line-height: 1.25;">Excise Tax Services in UAE</h1>
    <p style="font-size: 16px; max-width: 800px; margin: 0 auto 18px; color: #e2e8f0; line-height: 1.6;">Expert Excise Tax Registration, Product Classification, Return Filing, Designated Zone Warehouse Compliance, and FTA Representation.</p>
    <div style="font-size: 14px; color: #bae6fd; font-weight: 600; margin-bottom: 15px;">✓ FTA-Registered Tax Agency &nbsp;|&nbsp; ✓ 100% Product Classification Accuracy &nbsp;|&nbsp; ✓ Designated Zone Warehouse Audit &nbsp;|&nbsp; ✓ Penalty Prevention</div>
    <div style="margin-top: 15px; font-size: 13.5px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px;">📍 Office: 510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE &nbsp;|&nbsp; 📞 Phone: 04 325 8361 / 055-9831923</div>
</div>

<!-- Top Direct Consultation Card -->
<div style="background: #f8fafc; border: 2px solid #134074; border-radius: 10px; padding: 28px 20px; text-align: center; margin: 30px 0; box-shadow: 0 4px 15px rgba(11,37,69,0.05);">
    <h3 style="color: #0b2545; margin: 0 0 10px; font-size: 21px; font-weight: 800;">Need Immediate Excise Tax Assistance in UAE?</h3>
    <p style="margin: 0 auto 18px; max-width: 700px; color: #475569; font-size: 15px;">Speak directly with our registered tax agents for excise product registration, laboratory testing compliance, and monthly return filing.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #134074; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(19,64,116,0.25);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: #0b2545; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(11,37,69,0.25);">✉️ Email Us</a></div>
</div>

<p>Any business bringing excise goods into the UAE, producing them, holding them in storage, or moving them down the supply chain carries a compliance burden that cannot be handled casually. Products need to be placed in the correct category, the tax has to be computed accurately, records have to be kept in order, and everything has to line up with Federal Tax Authority (FTA) rules.</p>
<p><strong>NUF Chartered Accountants</strong> delivers complete Excise Tax services across the UAE, helping companies stay on top of their obligations while keeping compliance exposure to a minimum. Our specialists handle registration, product classification, tax computations, warehouse controls, reporting duties, and dealings with the FTA.</p>
<p>Whether you are a manufacturer, importer, distributor, retailer, or warehouse operator, our team supplies workable answers that keep you aligned with UAE Excise Tax regulations.</p>

<h2>What is Excise Tax in UAE?</h2>
<p>Excise Tax is an indirect charge levied on a selected range of goods judged harmful to human health or to the environment. It is triggered when a business imports, produces, or stockpiles those goods inside the UAE.</p>
<div class="nufca-box-info">
    <strong>Policy Aim:</strong> The policy aim is twofold: discourage consumption of harmful products, and tighten regulatory oversight of the supply chains that distribute them.
</div>
<p>Companies handling excise goods need to be sure of the following:</p>
<ul>
    <li>Products are classified correctly</li>
    <li>Excise Tax registration is properly in place prior to commercial activity</li>
    <li>Tax computations are accurate under the designated pricing formulas</li>
    <li>Monthly returns are filed within the strict statutory deadlines</li>
    <li>Designated Zone movement and warehouse inventory records are maintained as required</li>
</ul>

<h2>Core Excise Tax Compliance Pillars</h2>
<p>Our Excise Tax services cover the five core areas critical to maintaining good standing with the FTA:</p>
<ul>
    <li><strong>Product Classification &amp; Laboratory Analysis:</strong> Determining exact statutory categories, sugar concentrations, and ingredients against FTA standards.</li>
    <li><strong>FTA Excise Registration:</strong> Registering the entity, the excise warehouse (if applicable), and each individual excise item on the FTA product database.</li>
    <li><strong>Monthly Return Preparation &amp; Filing:</strong> Calculating monthly liabilities, compiling import declarations, and submitting returns via EmaraTax.</li>
    <li><strong>Designated Zone &amp; Warehouse Inventory Control:</strong> Auditing physical stock against registered records, managing transport declarations, and preventing unreleased stock leakages.</li>
    <li><strong>Audit Defense &amp; Penalty Mitigation:</strong> Representing clients during FTA inspections, drafting technical clarifications, and handling penalty reconsideration requests.</li>
</ul>

<h2>Excise Goods &amp; Applicable Tax Rates</h2>
<table class="nufca-table">
    <thead>
        <tr>
            <th>Excise Product Category</th>
            <th>Tax Rate</th>
            <th>Detailed Classification &amp; Ingredient Criteria</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Tobacco &amp; Tobacco Products</strong></td>
            <td>100%</td>
            <td>All items listed under Chapter 24 of the GCC Common Customs Tariff, including cigarettes, cigars, pipe tobacco, and shisha / waterpipe molasses.</td>
        </tr>
        <tr>
            <td><strong>Energy Drinks</strong></td>
            <td>100%</td>
            <td>Beverages containing stimulant substances (caffeine, taurine, ginseng, guarana) that stimulate the body and mind.</td>
        </tr>
        <tr>
            <td><strong>Electronic Smoking Devices &amp; Liquids</strong></td>
            <td>100%</td>
            <td>All electronic cigarettes, vape devices, e-liquids (with or without nicotine), and related refill accessories.</td>
        </tr>
        <tr>
            <td><strong>Carbonated &amp; Sweetened Drinks</strong></td>
            <td>50%</td>
            <td>Any aerated drink or beverage with added sugar or other sweeteners, including ready-to-drink concentrates, gels, and powders.</td>
        </tr>
    </tbody>
</table>

<h2>Excise Tax Registration Services UAE</h2>
<p>Operating without a valid Excise Tax registration when handling excise goods exposes the business to mandatory penalties of AED 20,000 or more, plus retroactive tax assessments.</p>
<p>Our onboarding workflow ensures zero delay:</p>
<ol>
    <li>Reviewing trade license, customs codes, and import activity</li>
    <li>Collating required lab testing reports and ingredient certificates</li>
    <li>Classifying each SKU and submitting product registrations to the FTA</li>
    <li>Registering the business as an Excise Taxable Person in EmaraTax</li>
    <li>Establishing warehouse registration for qualifying Designated Zones</li>
</ol>

<h2>Designated Zone &amp; Warehouse Inventory Control</h2>
<p>Excise goods stored in a registered Designated Zone warehouse are held in duty suspension until released into the UAE mainland. This requires rigorous 4-part recordkeeping:</p>

<div class="nufca-card-step">
    <h4>1. Stock Movement Reconciliation</h4>
    <p>Complete reconciliation of stock received, held in storage, transferred between Designated Zones, released into the domestic market, and scrap adjustments.</p>
</div>
<div class="nufca-card-step">
    <h4>2. Customs &amp; Transport Declarations</h4>
    <p>Ensuring every shipment carries the corresponding Customs Bill, Transit Declaration, and FTA release certificate.</p>
</div>
<div class="nufca-card-step">
    <h4>3. Documentation &amp; Production Logs</h4>
    <p>Maintaining factory batch logs, conversion ratios for raw materials, and verified commercial invoices for 5 years.</p>
</div>
<div class="nufca-card-step">
    <h4>4. FTA Inspection Readiness</h4>
    <p>Conducting pre-emptive inventory counts and mock inspections so warehouse operations are always ready for surprise FTA visits.</p>
</div>

<h2>Who Requires Excise Tax Services?</h2>
<ul>
    <li>Beverage manufacturers and bottlers</li>
    <li>Food and beverage importers and FMCG distributors</li>
    <li>Tobacco and vape distributors and retailers</li>
    <li>Trading companies and logistics providers</li>
    <li>Bonded and Designated Zone warehouse operators</li>
</ul>

<h2>Frequently Asked Questions</h2>

<h3>Which products fall under Excise Tax in the UAE?</h3>
<p>The charge covers a defined list that takes in tobacco, energy drinks, sweetened beverages, electronic smoking devices, and further goods named under UAE regulations.</p>

<h3>What Excise Tax rate applies to tobacco in the UAE?</h3>
<p>Tobacco products are taxed at the top rate of 100%.</p>

<h3>Is Excise Tax charged on energy drinks in the UAE?</h3>
<p>Yes. Energy drinks carry 100% Excise Tax, worked out on the excise price basis.</p>

<h3>How is Excise Tax worked out for sweetened drinks?</h3>
<p>Sweetened drinks follow the tiered volumetric method, with the outcome driven by the sugar and sweetener content of the product.</p>

<h3>Are compliance procedures required for excise warehouses?</h3>
<p>They are. Storage operations must keep licensing, stock records, supporting paperwork, and documented controls in place at all times.</p>

<h3>Can NUFCA assist with Excise Tax registration?</h3>
<p>Yes. NUFCA covers registration, tax computations, compliance reviews, and support on FTA matters.</p>

<!-- Related Services Section -->
<div class="related-services-sec" style="background: #f8fafc; padding: 30px 24px; border-radius: 10px; margin: 40px auto; max-width: 960px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(11,37,69,0.03);">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 22px; font-weight: 800; text-align: center;">Related Services in UAE</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 15px;">
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Corporate Tax Advisory</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">VAT Consultancy Services</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Audit &amp; Assurance</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/fta-vat-audit-assistance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">FTA VAT Audit Assistance</a></li>
    </ul>
</div>

<!-- Closing CTA Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 45px 24px; text-align: center; border-radius: 10px; margin-top: 40px; box-shadow: 0 10px 25px rgba(11,37,69,0.12);">
    <h2 style="color: #ffffff !important; font-size: 24px; font-weight: 800; margin-top: 0; margin-bottom: 12px; border-bottom: none;">Ready to Secure Your Excise Tax Compliance in UAE?</h2>
    <p style="font-size: 16px; color: #e2e8f0; max-width: 650px; margin: 0 auto 22px;">Reach out to NUFCA's registered tax agents to ensure complete compliance, accurate classification, and seamless return filing.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #ffffff; color: #0b2545 !important; padding: 12px 24px; border-radius: 6px; font-weight: 800; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(255,255,255,0.2);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: rgba(255,255,255,0.15); color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3); padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px;">✉️ Email Us</a></div>
</div>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - Excise Tax Services UAE",
      "image": "https://nufca.com/wp-content/uploads/2023/11/logo.png",
      "@id": "https://nufca.com/excise-tax-services-in-uae/",
      "url": "https://nufca.com/excise-tax-services-in-uae/",
      "telephone": "+97143258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE"
      },
      "priceRange": "$$"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which products fall under Excise Tax in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The charge covers a defined list that takes in tobacco, energy drinks, sweetened beverages, electronic smoking devices, and further goods named under UAE regulations."
          }
        },
        {
          "@type": "Question",
          "name": "What Excise Tax rate applies to tobacco in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tobacco products are taxed at the top rate of 100%."
          }
        },
        {
          "@type": "Question",
          "name": "Is Excise Tax charged on energy drinks in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Energy drinks carry 100% Excise Tax, worked out on the excise price basis."
          }
        },
        {
          "@type": "Question",
          "name": "How is Excise Tax worked out for sweetened drinks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sweetened drinks follow the tiered volumetric method, with the outcome driven by the sugar and sweetener content of the product."
          }
        },
        {
          "@type": "Question",
          "name": "Are compliance procedures required for excise warehouses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are. Storage operations must keep licensing, stock records, supporting paperwork, and documented controls in place at all times."
          }
        },
        {
          "@type": "Question",
          "name": "Can NUFCA assist with Excise Tax registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. NUFCA covers registration, tax computations, compliance reviews, and support on FTA matters."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nufca.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Excise Tax Services UAE",
          "item": "https://nufca.com/excise-tax-services-in-uae/"
        }
      ]
    }
  ]
}
</script>
`;
}

async function deploySingleExcisePage() {
    console.log("🚀 Deploying improved Hero, Consultation Card, Related Services & CTA ONLY to Page ID 99367...");
    const content = buildHTML();
    const url = 'https://nufca.com/wp-json/wp/v2/pages/' + targetPageId;
    
    const payload = JSON.stringify({
        content: content,
        title: 'Excise Tax Services in UAE | FTA Registration - NUFCA'
    });
    
    const req = https.request(url, {
        method: 'POST',
        headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
        }
    }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            console.log('✅ Deployment Status Code:', res.statusCode);
            if (res.statusCode === 200) {
                console.log('🎉 Excise Tax UAE (Page ID 99367) successfully updated!');
            } else {
                console.log('Response:', data);
            }
        });
    });
    
    req.on('error', (e) => console.error('Error:', e));
    req.write(payload);
    req.end();
}

deploySingleExcisePage();
