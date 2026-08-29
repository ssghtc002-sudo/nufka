const https = require('https');

// ONLY Target Page ID 99505 (https://nufca.com/esr-compliance-services-in-uae/)
const targetPageId = 99505;
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
    <option value="https://nufca.com/esr-compliance-services-in-uae/" selected>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/esr-compliance-services-in-uae/dubai/">🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/esr-compliance-services-in-uae/gold-souk-dubai/">🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/esr-compliance-services-in-uae/abu-dhabi/">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/esr-compliance-services-in-uae/sharjah/">🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<!-- Hero Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 50px 24px; text-align: center; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(11,37,69,0.15);">
    <div style="display: inline-block; background: rgba(255,255,255,0.15); color: #93c5fd; padding: 5px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 0.5px;">Economic Substance Regulations &amp; FTA Audit Defense</div>
    <h1 style="font-size: 32px; font-weight: 800; color: #ffffff !important; margin: 0 0 15px; line-height: 1.25;">ESR Compliance Services in UAE</h1>
    <p style="font-size: 16px; max-width: 800px; margin: 0 auto 18px; color: #e2e8f0; line-height: 1.6;">Legacy Scope ESR Filings, CIGA Substance Reviews, FTA Penalty Defense &amp; Corporate Tax Substance Transition.</p>
    <div style="font-size: 14px; color: #bae6fd; font-weight: 600; margin-bottom: 15px;">✓ Certified ESR Advisors &nbsp;|&nbsp; ✓ Legacy (2019–2022) Remediation &nbsp;|&nbsp; ✓ FTA Penalty Defense &nbsp;|&nbsp; ✓ Corporate Tax Transition</div>
    <div style="margin-top: 15px; font-size: 13.5px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px;">📍 Office: 510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE &nbsp;|&nbsp; 📞 Phone: 04 325 8361 / 055-9831923</div>
</div>

<!-- Top Direct Consultation Card -->
<div style="background: #f8fafc; border: 2px solid #134074; border-radius: 10px; padding: 28px 20px; text-align: center; margin: 30px 0; box-shadow: 0 4px 15px rgba(11,37,69,0.05);">
    <h3 style="color: #0b2545; margin: 0 0 10px; font-size: 21px; font-weight: 800;">Direct Advisory Consultation</h3>
    <p style="margin: 0 auto 18px; max-width: 700px; color: #475569; font-size: 15px;">Need expert guidance on historic ESR notifications, CIGA documentation, or resolving FTA penalty assessments? Speak directly with our team.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #134074; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(19,64,116,0.25);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: #0b2545; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(11,37,69,0.25);">✉️ Email Us</a></div>
</div>

<div class="nufca-box-warning">
    <strong>Important Regulatory Update:</strong> Under Cabinet Decision No. 98 of 2024, the ESR regime applies strictly to financial years from <strong>1 January 2019 through 31 December 2022</strong>. No notification or report arises for a financial year ending after 31 December 2022, and penalties for later periods have been withdrawn. However, filings, corrections, and assessments covering 2019 to 2022 remain fully enforceable by the Federal Tax Authority within statutory limitation periods.
</div>

<p>Any business registered in the UAE must establish whether its historic operations fell within the Economic Substance Regulations (ESR) framework. Entities carrying on a defined Relevant Activity had to show a genuine economic footprint in the UAE and meet annual ESR notification and reporting duties.</p>
<p><strong>NUF Chartered Accountants</strong> delivers comprehensive ESR advisory services across the UAE, assisting clients with retrospective risk audits, amending historic submissions, compiling CIGA audit files, and defending against FTA penalty notices.</p>

<h2>Relevant Activities Covered Under UAE ESR (9 Defined Sectors)</h2>
<p>The core of the ESR framework targeted businesses operating within any of the 9 defined Relevant Activities:</p>

<div class="nufca-card-step">
    <h4>1. Banking Business</h4>
    <p>Regulated banking operations had to hold real substance in the UAE — qualified staff, genuine operating spend, and core credit and treasury decisions taken locally.</p>
</div>

<div class="nufca-card-step">
    <h4>2. Insurance Business</h4>
    <p>Insurers and providers of insurance-linked services had to show their core underwriting, risk pricing, and policy administration functions happened inside the UAE.</p>
</div>

<div class="nufca-card-step">
    <h4>3. Investment Fund Management Business</h4>
    <p>Fund managers satisfied the regime by running portfolio management, risk modelling, and supporting operations within the country.</p>
</div>

<div class="nufca-card-step">
    <h4>4. Lease-Finance Business</h4>
    <p>Entities arranging credit, leasing capital assets, or offering comparable financial accommodation were captured.</p>
</div>

<div class="nufca-card-step">
    <h4>5. Headquarters Business</h4>
    <p>Companies steering group strategy, managing regional risk, or supplying management and administrative support to related foreign entities.</p>
</div>

<div class="nufca-card-step">
    <h4>6. Holding Company Business</h4>
    <p>Entities existing mainly to hold shares or equity stakes faced a tailored, reduced version of the economic substance requirements.</p>
</div>

<div class="nufca-card-step">
    <h4>7. Intellectual Property (IP) Business</h4>
    <p>Businesses earning income from patents, trademarks, copyrights, and brand licensing faced heightened scrutiny, with high-risk IP holders subject to a rebuttable presumption of non-compliance.</p>
</div>

<div class="nufca-card-step">
    <h4>8. Distribution &amp; Service Centre Business</h4>
    <p>Companies purchasing goods from foreign connected parties for resale, or providing services to related foreign group entities.</p>
</div>

<div class="nufca-card-step">
    <h4>9. Shipping Business</h4>
    <p>Operating or chartering vessels in international traffic, alongside associated crew, vessel maintenance, and cargo handling management.</p>
</div>

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
<p>Meeting the Economic Substance Test generally required a licensee to demonstrate:</p>
<ol>
    <li>An adequate number of suitably qualified employees resident in the UAE</li>
    <li>Adequate physical premises and office facilities in the UAE</li>
    <li>Adequate operating expenditure incurred locally</li>
    <li>Directed and managed governance (board meetings and strategic decisions) taking place inside the UAE</li>
    <li>CIGA genuinely performed within the UAE rather than outsourced overseas</li>
</ol>

<h2>Historic ESR Notification and Report Deadlines (2019–2022)</h2>
<p>For the financial years covered by the regime, two filing windows applied:</p>

<h3>1. ESR Notification Deadlines</h3>
<table class="nufca-table">
    <thead>
        <tr>
            <th>Financial Year End</th>
            <th>Notification Deadline (6 Months)</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>31 March</td><td>30 September</td></tr>
        <tr><td>30 June</td><td>31 December</td></tr>
        <tr><td>30 September</td><td>31 March</td></tr>
        <tr><td>31 December</td><td>30 June</td></tr>
    </tbody>
</table>

<h3>2. Economic Substance Report Deadlines</h3>
<table class="nufca-table">
    <thead>
        <tr>
            <th>Financial Year End</th>
            <th>Report Deadline (12 Months)</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>31 March</td><td>31 March (following year)</td></tr>
        <tr><td>30 June</td><td>30 June (following year)</td></tr>
        <tr><td>30 September</td><td>30 September (following year)</td></tr>
        <tr><td>31 December</td><td>31 December (following year)</td></tr>
    </tbody>
</table>

<h2>ESR Compliance Services in UAE Today (Legacy Scope)</h2>
<p>ESR Compliance Services now focus on the legacy period (2019–2022) and transitioning corporate governance into the substance requirements of the UAE Corporate Tax regime.</p>
<p>Our key workflows include:</p>
<ul>
    <li><strong>Identifying reportable years:</strong> Confirming which historic years were reportable under the regime.</li>
    <li><strong>Retroactive filing:</strong> Completing missed filings and ensuring full historical compliance.</li>
    <li><strong>Amending past returns:</strong> Correcting earlier returns with accurate and up-to-date documentation.</li>
    <li><strong>Audit file compilation:</strong> Assembling all necessary documentation and evidence for FTA review.</li>
    <li><strong>Penalty defense:</strong> Contesting penalties levied by the authorities with robust legal representation.</li>
</ul>

<h2>Frequently Asked Questions</h2>

<h3>Are ESR filings still required in the UAE?</h3>
<p>Not for financial years ending after 31 December 2022. Cabinet Decision No. 98 of 2024 confined the regime to the years 2019 to 2022, and cancelled penalties tied to later periods.</p>

<h3>What do ESR Compliance Services in the UAE cover today?</h3>
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

<!-- Related Services Section -->
<div class="related-services-sec" style="background: #f8fafc; padding: 30px 24px; border-radius: 10px; margin: 40px auto; max-width: 960px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(11,37,69,0.03);">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 22px; font-weight: 800; text-align: center;">Related Services in UAE</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 15px;">
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Corporate Tax in UAE</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">VAT Consultancy Services</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Audit &amp; Assurance</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/fta-vat-audit-assistance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">FTA VAT Audit Assistance</a></li>
    </ul>
</div>

<!-- Closing CTA Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 45px 24px; text-align: center; border-radius: 10px; margin-top: 40px; box-shadow: 0 10px 25px rgba(11,37,69,0.12);">
    <h2 style="color: #ffffff !important; font-size: 24px; font-weight: 800; margin-top: 0; margin-bottom: 12px; border-bottom: none;">Secure Your Compliance History Today</h2>
    <p style="font-size: 16px; color: #e2e8f0; max-width: 650px; margin: 0 auto 22px;">Don't let past ESR issues turn into present penalties. Get expert assistance with your historic filings and FTA reviews in the UAE.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #ffffff; color: #0b2545 !important; padding: 12px 24px; border-radius: 6px; font-weight: 800; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(255,255,255,0.2);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: rgba(255,255,255,0.15); color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3); padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px;">✉️ Email Us</a></div>
</div>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - ESR Compliance Services in UAE",
      "image": "https://nufca.com/wp-content/uploads/2023/10/logo.png",
      "@id": "https://nufca.com/esr-compliance-services-in-uae/",
      "url": "https://nufca.com/esr-compliance-services-in-uae/",
      "telephone": "043258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE"
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
          "name": "What do ESR Compliance Services in the UAE cover today?",
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
          "name": "ESR Compliance Services in UAE",
          "item": "https://nufca.com/esr-compliance-services-in-uae/"
        }
      ]
    }
  ]
}
</script>
`;
}

async function deploySingleESRPage() {
    console.log("🚀 Deploying improved Hero, Consultation Card, Related Services & CTA ONLY to Page ID 99505...");
    const content = buildHTML();
    const url = 'https://nufca.com/wp-json/wp/v2/pages/' + targetPageId;
    
    const payload = JSON.stringify({
        content: content,
        title: 'ESR Compliance Services in UAE | Economic Substance - NUFCA'
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
                console.log('🎉 ESR Compliance Services UAE (Page ID 99505) successfully updated!');
            } else {
                console.log('Response:', data);
            }
        });
    });
    
    req.on('error', (e) => console.error('Error:', e));
    req.write(payload);
    req.end();
}

deploySingleESRPage();
