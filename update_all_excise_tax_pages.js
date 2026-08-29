const fs = require('fs');
const https = require('https');

const username = 'umendra';
const password = 'pLA06DGbVynf10GbCwrHUsG1';
const auth = Buffer.from(`${username}:${password}`).toString('base64');

const locations = [
    {
        id: 99367,
        locName: 'UAE',
        city: 'UAE',
        title: 'Excise Tax Services in UAE | FTA Registration - NUFCA',
        address: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE',
        url: 'https://nufca.com/excise-tax-services-in-uae/'
    },
    {
        id: 99368,
        locName: 'Dubai',
        city: 'Dubai',
        title: 'Excise Tax Services in Dubai | FTA Registration - NUFCA',
        address: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE',
        url: 'https://nufca.com/excise-tax-services-in-uae/dubai/'
    },
    {
        id: 99369,
        locName: 'Gold Souk Dubai',
        city: 'Gold Souk Dubai',
        title: 'Excise Tax Services in Gold Souk Dubai | FTA Registration - NUFCA',
        address: 'Deira Gold Souk Commercial District, Dubai, UAE',
        url: 'https://nufca.com/excise-tax-services-in-uae/gold-souk-dubai/'
    },
    {
        id: 99370,
        locName: 'Abu Dhabi',
        city: 'Abu Dhabi',
        title: 'Excise Tax Services in Abu Dhabi | FTA Registration - NUFCA',
        address: 'Office 2404, Tamouh Tower, 12 Al Reem St, Jazeerat Al Reem, Abu Dhabi, UAE',
        url: 'https://nufca.com/excise-tax-services-in-uae/abu-dhabi/'
    },
    {
        id: 99371,
        locName: 'Sharjah',
        city: 'Sharjah',
        title: 'Excise Tax Services in Sharjah | FTA Registration - NUFCA',
        address: 'Hamriyah Free Zone & Industrial Logistics Hub, Sharjah, UAE',
        url: 'https://nufca.com/excise-tax-services-in-uae/sharjah/'
    }
];

function buildContent(loc) {
    const cityName = loc.city;
    const isMain = loc.locName === 'UAE';
    const locText = isMain ? 'the UAE' : cityName;
    
    let locationLinks = locations.map(l => 
        `<a href="${l.url}" class="loc-link ${l.id === loc.id ? 'active' : ''}" style="display:inline-block; padding: 5px 10px; margin: 0 5px; background: ${l.id === loc.id ? '#134074' : '#eee'}; color: ${l.id === loc.id ? '#fff' : '#333'}; text-decoration: none; border-radius: 4px;">${l.locName}</a>`
    ).join('');

    return `
<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb {
    display: none !important;
}
.loc-filter { text-align: center; padding: 20px; background: #fff; border-bottom: 1px solid #ccc; }
.hero-sec { background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #fff; padding: 60px 20px; text-align: center; }
.eyebrow { background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 20px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; display: inline-block; margin-bottom: 20px; }
.hero-sec h1 { color: #fff; font-size: 3rem; margin-bottom: 20px; }
.hero-sec p { font-size: 1.2rem; max-width: 800px; margin: 0 auto 30px; line-height: 1.6; }
.trust-badges { display: flex; justify-content: center; gap: 20px; margin-bottom: 30px; flex-wrap: wrap; }
.trust-badges span { background: rgba(255,255,255,0.1); padding: 10px 20px; border-radius: 5px; }
.office-bar { background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; display: inline-block; }
.consult-card { background: #fff; border-radius: 10px; padding: 30px; margin: -40px auto 40px; max-width: 800px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; position: relative; z-index: 10; }
.consult-card h3 { color: #0b2545; margin-bottom: 20px; }
.btn-group { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
.btn { padding: 12px 25px; border-radius: 5px; text-decoration: none; font-weight: bold; color: #fff; transition: opacity 0.3s; }
.btn:hover { opacity: 0.9; color: #fff; }
.btn-wa { background: #25D366; }
.btn-call { background: #134074; }
.btn-email { background: #E53935; }
.content-sec { padding: 40px 20px; max-width: 1000px; margin: 0 auto; line-height: 1.8; color: #333; }
.content-sec h2 { color: #0b2545; margin-top: 40px; border-bottom: 2px solid #134074; padding-bottom: 10px; }
.content-sec h3 { color: #134074; margin-top: 30px; }
.content-sec ul, .content-sec ol { margin-left: 20px; margin-bottom: 20px; }
.content-sec li { margin-bottom: 10px; }
.callout { background: #f8f9fa; border-left: 4px solid #134074; padding: 20px; margin: 20px 0; }
.cta-sec { background: #0b2545; color: #fff; padding: 60px 20px; text-align: center; margin-top: 40px; }
.cta-sec h2 { color: #fff; border: none; margin-top: 0; }
.faq-sec { margin-top: 50px; }
.faq-item { background: #f9f9f9; border: 1px solid #eee; border-radius: 5px; padding: 20px; margin-bottom: 15px; }
.faq-item h4 { margin: 0 0 10px 0; color: #0b2545; }
.faq-item p { margin: 0; }
</style>

<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/excise-tax-services-in-uae/" ${loc.locName === 'UAE' ? 'selected' : ''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/excise-tax-services-in-uae/dubai/" ${loc.locName === 'Dubai' ? 'selected' : ''}>🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/excise-tax-services-in-uae/gold-souk-dubai/" ${loc.locName === 'Gold Souk Dubai' ? 'selected' : ''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/excise-tax-services-in-uae/abu-dhabi/" ${loc.locName === 'Abu Dhabi' ? 'selected' : ''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/excise-tax-services-in-uae/sharjah/" ${loc.locName === 'Sharjah' ? 'selected' : ''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<div class="hero-sec">
    <div class="eyebrow">Excise Tax Services UAE</div>
    <h1>Expert Excise Tax Compliance & Advisory Services in ${cityName}</h1>
    <p>Any business bringing excise goods into the UAE, producing them, holding them in storage, or moving them down the supply chain carries a compliance burden that cannot be handled casually. Products need to be placed in the correct category, the tax has to be computed accurately, records have to be kept in order, and everything has to line up with Federal Tax Authority (FTA) rules.</p>
    <div class="trust-badges">
        <span>FTA Registered Tax Agency</span>
        <span>Certified Tax Experts</span>
        <span>100% Compliance Focus</span>
    </div>
    <div class="office-bar">
        📍 <strong>${cityName} Office:</strong> ${loc.address} | 📞 04 325 8361 / 055-9831923
    </div>
</div>

<div class="consult-card">
    <h3>Need Immediate Excise Tax Assistance in ${cityName}?</h3>
    <p style="color: #666; margin-bottom: 20px;">Contact our tax experts directly for a consultation. No forms to fill out.</p>
    <div class="btn-group">
        <a href="https://wa.me/97142500679" class="btn btn-wa">📱 WhatsApp Us</a>
        <a href="tel:043258361" class="btn btn-call">📞 Call 04 325 8361</a>
        <a href="mailto:info@nufca.com" class="btn btn-email">✉️ Email Us</a>
    </div>
</div>

<div class="content-sec">
    <p>Nufca delivers complete Excise Tax services across ${locText}, helping companies stay on top of their obligations while keeping compliance exposure to a minimum. Our specialists handle registration, product classification, tax computations, warehouse controls, reporting duties, and dealings with the FTA.</p>
    <p>Manufacturer, importer, distributor, retailer, or warehouse operator, our team supplies workable answers that keep you aligned with UAE Excise Tax regulations.</p>

    <h2>What is Excise Tax in UAE?</h2>
    <p>Excise Tax is an indirect charge levied on a selected range of goods judged harmful to health or to the environment. It is triggered when a business imports, produces, or stores those goods inside the UAE.</p>
    <div class="callout">
        <strong>Policy Aim:</strong> The policy aim is twofold: discourage consumption of harmful products, and tighten regulatory oversight of the industries that supply them.
    </div>
    <p>Companies handling excise goods need to be sure of the following:</p>
    <ul>
        <li>Products are classified correctly</li>
        <li>Excise Tax registration is properly in place</li>
        <li>Tax computations are accurate</li>
        <li>Returns are filed within the deadlines</li>
        <li>Documentation and records are maintained as required</li>
    </ul>

    <h2>UAE Excise Goods Covered Under Excise Tax</h2>
    <p>Only defined product categories fall within the charge under UAE tax rules. Nufca works through your product range with you and pins down where each item sits.</p>
    
    <h3>1. Tobacco Products</h3>
    <p>Tobacco is taxed at the top rate of 100% in the UAE. The category takes in items such as:</p>
    <ul>
        <li>Cigarettes</li>
        <li>Cigars</li>
        <li>Shisha tobacco</li>
        <li>Other tobacco goods named under UAE Excise Tax regulations</li>
    </ul>
    <p>Importers and distributors of tobacco face additional duties around product tracking, supporting paperwork, and the tax stamp regime.</p>
    
    <h3>2. Energy Drinks</h3>
    <p>Energy drinks also carry 100% Excise Tax, worked out on the excise price basis. The category ordinarily reaches beverages formulated with stimulants such as:</p>
    <ul>
        <li>Caffeine</li>
        <li>Taurine</li>
        <li>Ginseng</li>
        <li>Comparable energy-boosting ingredients</li>
    </ul>
    <p>Manufacturers and importers should confirm how a product is assessed before settling on its Excise Tax treatment.</p>
    
    <h3>3. Sweetened Drinks</h3>
    <p>For sweetened beverages, the charge is driven by sugar and sweetener content under the tiered volumetric model applied in the UAE. The computation turns on:</p>
    <ul>
        <li>Total sugar per 100 ml</li>
        <li>Sugars that have been added</li>
        <li>Any other sweeteners present</li>
        <li>The overall composition of the product</li>
    </ul>
    <p>Which rate applies follows from the product category and the FTA requirements in force at the time.</p>
    
    <h3>4. Electronic Smoking Devices and Liquids</h3>
    <p>Electronic smoking devices, vaping hardware, and the liquids that go with them sit within the Excise Tax net as well. Businesses in this space need to have:</p>
    <ul>
        <li>Products classified accurately</li>
        <li>Tax computed on the right basis</li>
        <li>Import and storage paperwork in order</li>
        <li>Practices that satisfy FTA requirements</li>
    </ul>

    <h2>Excise Tax Calculation UAE</h2>
    <p>Getting the computation right is what keeps a business clear of underpayments, penalties, and reporting problems.</p>
    
    <h3>Excise Tax Formula for Percentage-Based Goods</h3>
    <p>Where the charge is driven by excise price:<br>
    <strong>Excise Tax = Excise Price × Excise Tax Rate</strong></p>
    <div class="callout">
        <strong>Worked example:</strong><br>
        Excise Price: AED 100<br>
        Excise Tax Rate: 100%<br>
        Computation: AED 100 × 100% = AED 100 Excise Tax<br>
        Total value with Excise Tax included: AED 100 + AED 100 = AED 200
    </div>

    <h3>Volumetric Excise Tax Calculation</h3>
    <p>For the beverage categories it applies to, the charge is based on how much product is supplied.<br>
    <strong>Excise Tax = Quantity (Litres) × Applicable Tax Rate per Litre</strong></p>
    <div class="callout">
        <strong>Worked example:</strong><br>
        Product quantity: 20,000 litres<br>
        Applicable rate: AED X per litre<br>
        Excise Tax: 20,000 × AED X
    </div>
    <p>The rate that applies depends on how the product is classified, its sugar content, and the Excise Tax rules currently in force.</p>

    <h2>Excise Tax Registration Services UAE</h2>
    <p>Businesses dealing in excise goods may be required to register with the Federal Tax Authority before they begin any taxable activity. Nufca supports clients with:</p>
    <ol>
        <li>Guidance through the Excise Tax registration process</li>
        <li>A review of what the business actually does</li>
        <li>Identifying which goods are taxable</li>
        <li>Assembling the documentation required</li>
        <li>Explaining the compliance duties that follow</li>
    </ol>

    <h2>Excise Tax Return Filing Support</h2>
    <p>Once registered, a business has to submit Excise Tax returns and settle what it owes in line with FTA requirements. Our support covers:</p>
    <ul>
        <li>Checking Excise Tax computations</li>
        <li>Verifying taxable transactions</li>
        <li>Assistance with filing</li>
        <li>Compliance reviews</li>
        <li>Preparation of supporting documentation</li>
    </ul>

    <h2>Excise Warehouse Licensing & Compliance UAE</h2>
    <p>Where excise goods are held in storage, the controls and paperwork surrounding them must meet UAE tax requirements in their own right.</p>
    
    <h3>Key Excise Warehouse Requirements</h3>
    <p>Businesses should have the following in place:</p>
    
    <h4>1. Proper Licensing</h4>
    <p>Warehouse operations need to satisfy whatever licensing requirements apply to them in the UAE.</p>
    
    <h4>2. Inventory Control</h4>
    <p>Accurate records should be kept covering:</p>
    <ul>
        <li>Goods received</li>
        <li>Goods held in storage</li>
        <li>Goods transferred</li>
        <li>Goods released</li>
        <li>Adjustments to stock</li>
    </ul>
    
    <h4>3. Documentation Management</h4>
    <p>The record set should include:</p>
    <ul>
        <li>Import documents</li>
        <li>Purchase invoices</li>
        <li>Production records</li>
        <li>Movement records</li>
        <li>Excise Tax documentation</li>
    </ul>
    
    <h4>4. FTA Compliance Readiness</h4>
    <p>Records should be organised well enough to stand behind an FTA review, inspection, or audit at short notice.</p>
    <p>Nufca helps businesses build excise warehouse procedures that work in practice and raise the level of audit readiness.</p>

    <h2>Who Requires Excise Tax Services?</h2>
    <p>Our Excise Tax advisory work suits:</p>
    <ul>
        <li>Beverage manufacturers</li>
        <li>Food and beverage importers</li>
        <li>FMCG companies</li>
        <li>Tobacco distributors</li>
        <li>Retail businesses</li>
        <li>Trading companies</li>
        <li>Logistics providers</li>
        <li>Warehouse operators</li>
    </ul>

    <h2>Why Choose Nufca for Excise Tax Services?</h2>
    <ul>
        <li><strong>UAE Tax Expertise:</strong> Our team knows how UAE tax regulations operate and turns that into compliance solutions a business can actually apply.</li>
        <li><strong>Accurate Tax Calculations:</strong> We revisit product classifications with you and make sure the correct computation method is being used.</li>
        <li><strong>Compliance Risk Management:</strong> Our advisory work is aimed squarely at reducing exposure to misreporting, classification errors, and gaps in documentation.</li>
        <li><strong>End-to-End Support:</strong> From first registration through to reporting and compliance reviews, Nufca stays with you across the whole cycle.</li>
    </ul>

    <h2>Our Excise Tax Service Process</h2>
    <ol>
        <li><strong>Step 1: Business Assessment</strong> - We examine what the business does, what it sells, and where Excise Tax bites.</li>
        <li><strong>Step 2: Product Classification Review</strong> - We work through the taxable range and establish the treatment that applies to each item.</li>
        <li><strong>Step 3: Calculation & Compliance Review</strong> - We verify the computations and confirm what the reporting obligations require.</li>
        <li><strong>Step 4: Ongoing Support</strong> - We stay available on a continuing basis so UAE Excise Tax compliance holds up over time.</li>
    </ol>

    <div class="faq-sec">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div class="faq-item">
            <h4>Which products fall under Excise Tax in the UAE?</h4>
            <p>The charge covers a defined list that takes in tobacco, energy drinks, sweetened beverages, electronic smoking devices, and further goods named under UAE regulations.</p>
        </div>
        <div class="faq-item">
            <h4>What Excise Tax rate applies to tobacco in the UAE?</h4>
            <p>Tobacco products are taxed at the top rate of 100%.</p>
        </div>
        <div class="faq-item">
            <h4>Is Excise Tax charged on energy drinks in the UAE?</h4>
            <p>Yes. Energy drinks carry 100% Excise Tax, worked out on the excise price basis.</p>
        </div>
        <div class="faq-item">
            <h4>How is Excise Tax worked out for sweetened drinks?</h4>
            <p>Sweetened drinks follow the tiered volumetric method, with the outcome driven by the sugar and sweetener content of the product.</p>
        </div>
        <div class="faq-item">
            <h4>Are compliance procedures required for excise warehouses?</h4>
            <p>They are. Storage operations must keep licensing, stock records, supporting paperwork, and documented controls in place at all times.</p>
        </div>
        <div class="faq-item">
            <h4>Can Nufca assist with Excise Tax registration?</h4>
            <p>Yes. Nufca covers registration, tax computations, compliance reviews, and support on FTA matters.</p>
        </div>
    </div>
</div>

<div class="related-services-sec" style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 40px auto; max-width: 900px; border: 1px solid #e2e8f0;">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 24px;">Related Services in ${cityName}</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Corporate Tax</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">VAT Consultancy</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Audit & Assurance</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/fta-vat-audit-assistance-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">FTA VAT Audit</a></li>
    </ul>
</div>

<div class="cta-sec">
    <h2>Ready to Secure Your Excise Tax Compliance in ${cityName}?</h2>
    <p style="margin-bottom: 30px;">Reach out to Nufca's tax experts to ensure complete compliance and accuracy.</p>
    <div class="btn-group">
        <a href="https://wa.me/97142500679" class="btn btn-wa">📱 WhatsApp Us</a>
        <a href="tel:043258361" class="btn btn-call">📞 Call 04 325 8361</a>
    </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - Excise Tax Services ${cityName}",
      "image": "https://nufca.com/wp-content/uploads/2023/11/logo.png",
      "@id": "${loc.url}",
      "url": "${loc.url}",
      "telephone": "+97143258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "${loc.address}"
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
          "name": "Can Nufca assist with Excise Tax registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Nufca covers registration, tax computations, compliance reviews, and support on FTA matters."
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
          "name": "Excise Tax Services ${cityName}",
          "item": "${loc.url}"
        }
      ]
    }
  ]
}
</script>
`;
}

async function updatePages() {
    for (const loc of locations) {
        const content = buildContent(loc);
        const data = JSON.stringify({
            title: loc.title,
            content: content
        });

        const options = {
            hostname: 'nufca.com',
            port: 443,
            path: '/wp-json/wp/v2/pages/' + loc.id,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + auth,
                'Content-Length': Buffer.byteLength(data)
            }
        };

        await new Promise((resolve) => {
            const req = https.request(options, (res) => {
                let responseBody = '';
                res.on('data', (chunk) => responseBody += chunk);
                res.on('end', () => {
                    if (res.statusCode === 200 || res.statusCode === 201) {
                        console.log("✅ Successfully updated " + loc.locName + " (" + loc.id + ")");
                    } else {
                        console.error("❌ Failed to update " + loc.locName + " (" + loc.id + "): HTTP " + res.statusCode);
                        console.error(responseBody);
                    }
                    resolve();
                });
            });

            req.on('error', (e) => {
                console.error("❌ Request error for " + loc.locName + " (" + loc.id + "):", e.message);
                resolve();
            });

            req.write(data);
            req.end();
        });
    }
}

updatePages();
