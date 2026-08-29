const https = require('https');

const locations = [
  {
    id: 99505,
    name: 'UAE',
    title: 'ESR Compliance Services in UAE | Economic Substance - NUFCA',
    slug: 'esr-compliance-services-in-uae',
    address: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE'
  },
  {
    id: 99506,
    name: 'Dubai',
    title: 'ESR Compliance Services in Dubai | Economic Substance - NUFCA',
    slug: 'dubai',
    address: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE'
  },
  {
    id: 99507,
    name: 'Gold Souk Dubai',
    title: 'ESR Compliance Services in Gold Souk Dubai | Economic Substance - NUFCA',
    slug: 'gold-souk-dubai',
    address: 'Deira Gold Souk Commercial District, Dubai, UAE'
  },
  {
    id: 99508,
    name: 'Abu Dhabi',
    title: 'ESR Compliance Services in Abu Dhabi | Economic Substance - NUFCA',
    slug: 'abu-dhabi',
    address: 'Office 2404, Tamouh Tower, 12 Al Reem St, Jazeerat Al Reem, Abu Dhabi, UAE'
  },
  {
    id: 99509,
    name: 'Sharjah',
    title: 'ESR Compliance Services in Sharjah | Economic Substance - NUFCA',
    slug: 'sharjah',
    address: 'Hamriyah Free Zone & Industrial Logistics Hub, Sharjah, UAE'
  }
];

const phone = '04 325 8361 / 055-9831923';

function buildContent(loc) {
  const isMain = loc.name === 'UAE';
  const displayLocation = loc.name;
  
  return `
<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb {
    display: none !important;
}

.location-bar { background: #f8f9fa; padding: 10px 0; border-bottom: 1px solid #e9ecef; text-align: center; font-family: sans-serif;}
.location-bar select { padding: 8px 15px; border-radius: 4px; border: 1px solid #ced4da; font-size: 14px; min-width: 200px;}
.hero-section { background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: white; padding: 60px 20px; text-align: center; font-family: sans-serif;}
.hero-badge { display: inline-block; background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;}
.hero-h1 { font-size: 42px; font-weight: 800; margin: 0 0 20px 0; line-height: 1.2;}
.hero-sub { font-size: 18px; max-width: 800px; margin: 0 auto 30px auto; opacity: 0.9; line-height: 1.6;}
.trust-strip { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 30px;}
.trust-badge { background: rgba(255,255,255,0.1); padding: 8px 15px; border-radius: 4px; font-size: 14px; font-weight: 500;}
.office-bar { background: rgba(0,0,0,0.2); display: inline-block; padding: 10px 25px; border-radius: 30px; font-size: 14px;}
.content-wrapper { max-width: 1000px; margin: 40px auto; padding: 0 20px; font-family: sans-serif; line-height: 1.7; color: #333;}
.content-wrapper h2 { color: #0b2545; font-size: 28px; margin: 40px 0 20px 0; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;}
.content-wrapper h3 { color: #134074; font-size: 22px; margin: 25px 0 15px 0;}
.content-wrapper ul { margin-bottom: 20px; padding-left: 20px;}
.content-wrapper li { margin-bottom: 8px;}
.consultation-card { background: white; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 30px; text-align: center; margin: 40px 0; border-top: 4px solid #134074;}
.consultation-card h3 { color: #0b2545; margin-top: 0;}
.contact-buttons { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 20px;}
.btn { display: inline-block; padding: 12px 25px; border-radius: 4px; text-decoration: none; font-weight: bold; transition: all 0.3s;}
.btn-wa { background: #25D366; color: white;}
.btn-call { background: #134074; color: white;}
.btn-email { background: #e9ecef; color: #333;}
.warning-box { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0;}
.cta-section { background: #0b2545; color: white; padding: 50px 20px; text-align: center; border-radius: 8px; margin: 40px 0;}
table { width: 100%; border-collapse: collapse; margin: 20px 0;}
th, td { padding: 12px; border: 1px solid #ddd; text-align: left;}
th { background: #f8f9fa; font-weight: bold;}
</style>

<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/esr-compliance-services-in-uae/" ${loc.name === 'UAE' ? 'selected' : ''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/esr-compliance-services-in-uae/dubai/" ${loc.name === 'Dubai' ? 'selected' : ''}>🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/esr-compliance-services-in-uae/gold-souk-dubai/" ${loc.name === 'Gold Souk Dubai' ? 'selected' : ''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/esr-compliance-services-in-uae/abu-dhabi/" ${loc.name === 'Abu Dhabi' ? 'selected' : ''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/esr-compliance-services-in-uae/sharjah/" ${loc.name === 'Sharjah' ? 'selected' : ''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<div class="hero-section">
    <div class="hero-badge">Expert ESR Advisory</div>
    <h1 class="hero-h1">ESR Compliance Services in ${displayLocation}</h1>
    <p class="hero-sub">Any business registered in ${displayLocation} or elsewhere in the UAE should establish whether its operations fell within the Economic Substance Regulations (ESR) framework. Entities carrying on a defined Relevant Activity had to show a genuine economic footprint in the UAE and meet ESR notification and reporting duties.</p>
    
    <div class="trust-strip">
        <div class="trust-badge">✓ Certified Advisors</div>
        <div class="trust-badge">✓ Legacy Filing Experts</div>
        <div class="trust-badge">✓ FTA Penalty Defense</div>
    </div>
    
    <div class="office-bar">
        📍 <strong>Local Office:</strong> ${loc.address} | 📞 ${phone}
    </div>
</div>

<div class="content-wrapper">
    <div class="warning-box">
        <strong>Important change:</strong> under Cabinet Decision No. 98 of 2024, the regime now applies only to financial years from 1 January 2019 through 31 December 2022. No notification or report arises for a financial year ending after 31 December 2022, and penalties for those later periods have been withdrawn. Filings, corrections and assessments covering 2019 to 2022 remain fully enforceable by the Federal Tax Authority.
    </div>

    <div class="consultation-card">
        <h3>Need Expert Guidance on ESR Compliance?</h3>
        <p>Contact our advisory team for immediate assistance with legacy filings and FTA defense.</p>
        <div class="contact-buttons">
            <a href="https://wa.me/97142500679" class="btn btn-wa">📱 WhatsApp Us</a>
            <a href="tel:043258361" class="btn btn-call">📞 Call 04 325 8361</a>
            <a href="mailto:info@nufca.com" class="btn btn-email">✉️ Email Us</a>
        </div>
    </div>

    <h2>Relevant Activities Covered Under UAE ESR</h2>
    <p>The core of the ESR framework targeted businesses operating within any of the 9 defined Relevant Activities.</p>
    
    <h3>1. Banking Business</h3>
    <p>Regulated banking operations had to hold real substance in the UAE — qualified staff, genuine operating spend, and decisions taken locally.</p>
    
    <h3>2. Insurance Business</h3>
    <p>Insurers and providers of insurance-linked services had to show their core underwriting and policy functions happened inside the UAE.</p>
    
    <h3>3. Investment Fund Management Business</h3>
    <p>Fund managers satisfied the regime by running portfolio management and supporting operations within the country.</p>
    
    <h3>4. Lease-Finance Business</h3>
    <p>Entities arranging credit, leasing assets or offering comparable financial accommodation were captured.</p>
    
    <h3>5. Headquarters Business</h3>
    <p>Companies steering group strategy or supplying management and administrative support to related entities were in scope.</p>
    
    <h3>6. Holding Company Business</h3>
    <p>Entities existing mainly to hold shares or equity stakes faced a reduced version of the substance requirements.</p>
    
    <h3>7. Intellectual Property (IP) Business</h3>
    <p>Businesses earning income from patents, trademarks, copyrights and similar rights faced a heightened standard, with high-risk IP holders subject to a rebuttable presumption of failure.</p>
    
    <h3>8. Distribution and Service Centre Business</h3>
    <p>Companies buying goods from connected parties for resale, or servicing related foreign entities, fell within scope.</p>
    
    <h3>9. Shipping Business</h3>
    <p>Operating or chartering vessels in international traffic, with associated crew and vessel management, formed the ninth Relevant Activity.</p>

    <h2>The Core Income Generating Activities (CIGA) Test</h2>
    <p>Central to the regime was proof that a licensee carried out its Core Income Generating Activities in the UAE. CIGA describes the substantive work that produces income from a Relevant Activity. Those functions had to happen locally, backed by resources proportionate to the business.</p>
    
    <p>Typical CIGA by activity included:</p>
    <ul>
        <li><strong>Banking:</strong> sourcing funds, managing risk exposure, extending credit, and servicing client relationships</li>
        <li><strong>Insurance:</strong> designing policies, pricing and underwriting risk, and settling claims</li>
        <li><strong>Fund management:</strong> taking investment decisions, running portfolios, modelling risk and return, and setting strategy</li>
        <li><strong>Lease-finance:</strong> negotiating terms, sourcing and acquiring assets, administering leases, and appraising credit risk</li>
        <li><strong>Headquarters:</strong> shaping group strategy, directing operations, and delivering administrative support</li>
        <li><strong>Holding company:</strong> overseeing holdings, tracking subsidiary performance, and making asset-level decisions</li>
        <li><strong>Intellectual property:</strong> research and development, brand or technology stewardship, and defending and commercialising IP</li>
        <li><strong>Distribution and service centre:</strong> procurement, inventory and logistics management, and servicing group companies</li>
        <li><strong>Shipping:</strong> voyage planning, crewing, vessel maintenance, and cargo handling</li>
    </ul>
    
    <h2>5 Pillars of the Economic Substance Test</h2>
    <p>Meeting the Economic Substance Test generally required a licensee to show:</p>
    <ol>
        <li>An adequate number of suitably qualified employees in the UAE</li>
        <li>Adequate premises and physical assets</li>
        <li>Adequate operating expenditure incurred locally</li>
        <li>Directed and managed decision-making taking place in the UAE</li>
        <li>CIGA genuinely performed within the UAE</li>
    </ol>

    <h2>ESR Notification and Report Deadlines</h2>
    <p>For the financial years still covered by the regime, two filing windows applied.</p>
    
    <h3>ESR Notification</h3>
    <p>Due within six months of the financial year end:</p>
    <table>
        <thead>
            <tr>
                <th>Financial Year End</th>
                <th>Notification Deadline</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>31 March</td><td>30 September</td></tr>
            <tr><td>30 June</td><td>31 December</td></tr>
            <tr><td>30 September</td><td>31 March</td></tr>
            <tr><td>31 December</td><td>30 June</td></tr>
        </tbody>
    </table>

    <h3>Economic Substance Report</h3>
    <p>Where required, due within twelve months of the financial year end:</p>
    <table>
        <thead>
            <tr>
                <th>Financial Year End</th>
                <th>Report Deadline</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>31 March</td><td>31 March (following year)</td></tr>
            <tr><td>30 June</td><td>30 June (following year)</td></tr>
            <tr><td>30 September</td><td>30 September (following year)</td></tr>
            <tr><td>31 December</td><td>31 December (following year)</td></tr>
        </tbody>
    </table>

    <h2>ESR Compliance Services in ${displayLocation} Today (Legacy Scope)</h2>
    <p>ESR Compliance Services in ${displayLocation} now focus on the legacy period. Advisers also help businesses move to the substance expectations built into the UAE corporate tax regime.</p>
    <p>Our key workflows include:</p>
    <ul>
        <li><strong>Identifying reportable years:</strong> Confirming which historic years were reportable under the regime.</li>
        <li><strong>Retroactive filing:</strong> Completing missed filings and ensuring full historical compliance.</li>
        <li><strong>Amending past returns:</strong> Correcting earlier returns with accurate and up-to-date documentation.</li>
        <li><strong>Audit file compilation:</strong> Assembling all necessary documentation and evidence for FTA review.</li>
        <li><strong>Penalty defense:</strong> Contesting penalties levied by the authorities with robust representation.</li>
    </ul>

    <h2>Frequently Asked Questions (FAQ)</h2>
    
    <h3>Are ESR filings still required in the UAE?</h3>
    <p>Not for financial years ending after 31 December 2022. Cabinet Decision No. 98 of 2024 confined the regime to the years 2019 to 2022, and cancelled penalties tied to later periods.</p>
    
    <h3>What do ESR Compliance Services in ${displayLocation} cover today?</h3>
    <p>Reviewing whether historic years were reportable, preparing or amending past filings, keeping supporting evidence in order, responding to FTA queries, and challenging penalties for the covered years.</p>

    <h3>Who was required to comply with the UAE ESR?</h3>
    <p>Mainland companies, free zone and financial free zone entities, branches and certain other UAE-registered businesses carrying on a Relevant Activity in the covered period.</p>

    <h3>What were the Relevant Activities under ESR?</h3>
    <p>Banking, insurance, investment fund management, lease-finance, headquarters, holding company, intellectual property, distribution and service centre, and shipping.</p>

    <h3>What was the CIGA test?</h3>
    <p>An assessment of whether the substantive, income-producing functions attached to a licensee's Relevant Activity were genuinely carried out inside the UAE rather than elsewhere.</p>

    <h3>Can penalties still be imposed for the 2019 to 2022 years?</h3>
    <p>Yes. The Federal Tax Authority keeps its assessment powers over those years and can review a historic report, reject a self-assessment or issue an amended assessment within the limitation period.</p>

    <h3>What replaced ESR for later financial years?</h3>
    <p>The federal corporate tax regime, effective from financial years beginning 1 June 2023, carries its own substance conditions — particularly for free zone entities seeking Qualifying Free Zone Person status and the 0% rate.</p>

    <h3>Can historic ESR work be outsourced?</h3>
    <p>Yes. Businesses may engage advisers to complete or remediate legacy filings, provided the work is properly evidenced and meets UAE requirements.</p>

    <div class="related-services-sec" style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 40px auto; max-width: 900px; border: 1px solid #e2e8f0;">
        <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 24px;">Related Services in ${displayLocation}</h3>
        <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
            <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Corporate Tax in UAE</a></li>
            <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">VAT Consultancy in UAE</a></li>
            <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Audit & Assurance</a></li>
        </ul>
    </div>

    <div class="cta-section">
        <h2>Secure Your Compliance History Today</h2>
        <p>Don't let past ESR issues turn into present penalties. Get expert assistance with your historic filings and FTA reviews in ${displayLocation}.</p>
        <div class="contact-buttons">
            <a href="https://wa.me/97142500679" class="btn btn-wa">📱 Discuss with an Expert</a>
            <a href="tel:043258361" class="btn btn-call">📞 04 325 8361</a>
        </div>
    </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - ESR Compliance Services in ${displayLocation}",
      "image": "https://nufca.com/wp-content/uploads/2023/10/logo.png",
      "@id": "https://nufca.com/${loc.slug === 'esr-compliance-services-in-uae' ? loc.slug : 'esr-compliance-services-in-uae/' + loc.slug}/",
      "url": "https://nufca.com/${loc.slug === 'esr-compliance-services-in-uae' ? loc.slug : 'esr-compliance-services-in-uae/' + loc.slug}/",
      "telephone": "043258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "${loc.address}"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are ESR filings still required in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not for financial years ending after 31 December 2022. Cabinet Decision No. 98 of 2024 confined the regime to the years 2019 to 2022, and cancelled penalties tied to later periods."
          }
        },
        {
          "@type": "Question",
          "name": "What do ESR Compliance Services in ${displayLocation} cover today?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviewing whether historic years were reportable, preparing or amending past filings, keeping supporting evidence in order, responding to FTA queries, and challenging penalties for the covered years."
          }
        },
        {
          "@type": "Question",
          "name": "Who was required to comply with the UAE ESR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mainland companies, free zone and financial free zone entities, branches and certain other UAE-registered businesses carrying on a Relevant Activity in the covered period."
          }
        },
        {
          "@type": "Question",
          "name": "What were the Relevant Activities under ESR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banking, insurance, investment fund management, lease-finance, headquarters, holding company, intellectual property, distribution and service centre, and shipping."
          }
        },
        {
          "@type": "Question",
          "name": "What was the CIGA test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An assessment of whether the substantive, income-producing functions attached to a licensee's Relevant Activity were genuinely carried out inside the UAE rather than elsewhere."
          }
        },
        {
          "@type": "Question",
          "name": "Can penalties still be imposed for the 2019 to 2022 years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Federal Tax Authority keeps its assessment powers over those years and can review a historic report, reject a self-assessment or issue an amended assessment within the limitation period."
          }
        },
        {
          "@type": "Question",
          "name": "What replaced ESR for later financial years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The federal corporate tax regime, effective from financial years beginning 1 June 2023, carries its own substance conditions — particularly for free zone entities seeking Qualifying Free Zone Person status and the 0% rate."
          }
        },
        {
          "@type": "Question",
          "name": "Can historic ESR work be outsourced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Businesses may engage advisers to complete or remediate legacy filings, provided the work is properly evidenced and meets UAE requirements."
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
          "name": "ESR Compliance Services in ${displayLocation}",
          "item": "https://nufca.com/${loc.slug === 'esr-compliance-services-in-uae' ? loc.slug : 'esr-compliance-services-in-uae/' + loc.slug}/"
        }
      ]
    }
  ]
}
</script>
`;
}

async function updatePages() {
  const auth = 'Basic ' + Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

  for (const loc of locations) {
    const html = buildContent(loc);
    const data = JSON.stringify({
      title: loc.title,
      content: html
    });

    const options = {
      hostname: 'nufca.com',
      path: '/wp-json/wp/v2/pages/' + loc.id,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth,
        'Content-Length': Buffer.byteLength(data)
      }
    };

    try {
      const result = await new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
          let body = '';
          res.on('data', chunk => body += chunk);
          res.on('end', () => {
            if (res.statusCode >= 200 && res.statusCode < 300) {
              resolve({ status: res.statusCode, data: body });
            } else {
              reject(new Error("HTTP " + res.statusCode + ": " + body));
            }
          });
        });

        req.on('error', e => reject(e));
        req.write(data);
        req.end();
      });

      console.log("Successfully updated " + loc.name + " (ID: " + loc.id + ")");
    } catch (err) {
      console.error("Failed to update " + loc.name + " (ID: " + loc.id + "):", err.message);
    }
  }
}

updatePages();
