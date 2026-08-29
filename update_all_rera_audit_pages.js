const https = require('https');

const locations = [
  { id: 99200, name: 'UAE', url: 'https://nufca.com/rera-audit-uae/', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE', locText: 'UAE' },
  { id: 99201, name: 'Dubai', url: 'https://nufca.com/rera-audit-uae/dubai/', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE', locText: 'Dubai' },
  { id: 99202, name: 'Gold Souk Dubai', url: 'https://nufca.com/rera-audit-uae/gold-souk-dubai/', office: 'Deira Gold Souk Commercial District, Dubai, UAE', locText: 'Gold Souk Dubai' },
  { id: 99203, name: 'Abu Dhabi', url: 'https://nufca.com/rera-audit-uae/abu-dhabi/', office: 'Office 2404, Tamouh Tower, 12 Al Reem St, Jazeerat Al Reem, Abu Dhabi, UAE', locText: 'Abu Dhabi' },
  { id: 99204, name: 'Sharjah', url: 'https://nufca.com/rera-audit-uae/sharjah/', office: 'Hamriyah Free Zone & Industrial Logistics Hub, Sharjah, UAE', locText: 'Sharjah' }
];

const credentials = Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

function buildContent(loc) {
  const locName = loc.locText;
  return `
<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb {
    display: none !important;
}
.location-filter {
    background: #f8f9fa; padding: 15px 0; border-bottom: 1px solid #dee2e6;
}
.location-filter select {
    padding: 8px 15px; border-radius: 5px; border: 1px solid #ced4da; font-size: 16px;
}
.hero-section {
    background: linear-gradient(135deg, #0b2545 0%, #134074 100%);
    color: white; padding: 60px 0;
}
.advisory-card {
    background: white; color: #333; padding: 30px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.btn-whatsapp { background: #25D366; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; display: inline-block; margin: 5px; }
.btn-call { background: #0b2545; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; display: inline-block; margin: 5px; }
.btn-email { background: #134074; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; display: inline-block; margin: 5px; }
.content-section { padding: 40px 0; }
.cta-section { background: #0b2545; color: white; padding: 50px 0; text-align: center; }
</style>

<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/rera-audit-uae/" ${loc.id === 99200 ? 'selected' : ''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/rera-audit-uae/dubai/" ${loc.id === 99201 ? 'selected' : ''}>🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/rera-audit-uae/gold-souk-dubai/" ${loc.id === 99202 ? 'selected' : ''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/rera-audit-uae/abu-dhabi/" ${loc.id === 99203 ? 'selected' : ''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/rera-audit-uae/sharjah/" ${loc.id === 99204 ? 'selected' : ''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<div class="hero-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-7">
                <span class="badge bg-primary mb-3">RERA APPROVED AUDITORS</span>
                <h1>RERA Approved Auditors in ${locName}</h1>
                <p class="lead">Escrow, Mollak and Service Charge Audit Services for Developers and Jointly Owned Properties</p>
                <div class="trust-badges mt-4">
                    <span class="badge bg-light text-dark me-2">DLD Approved</span>
                    <span class="badge bg-light text-dark me-2">Mollak Registered</span>
                    <span class="badge bg-light text-dark">RERA Accredited</span>
                </div>
                <div class="office-bar mt-4 p-3 bg-dark bg-opacity-25 rounded">
                    <strong>${locName} Office:</strong> ${loc.office}<br>
                    <strong>Phone:</strong> 04 325 8361 / 055-9831923
                </div>
            </div>
            <div class="col-md-5">
                <div class="advisory-card">
                    <h3 class="mb-4">Direct Advisory Consultation</h3>
                    <p>Speak directly with our RERA audit specialists for your escrow or service charge requirements.</p>
                    <a href="https://wa.me/97142500679" class="btn-whatsapp w-100 text-center mb-2">WhatsApp Us</a>
                    <a href="tel:043258361" class="btn-call w-100 text-center mb-2">Call 04 325 8361</a>
                    <a href="mailto:info@nufca.com" class="btn-email w-100 text-center">Email info@nufca.com</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="content-section container mt-5">
    <p>Nadeem and Umendra Chartered Accountants works exclusively with the audit obligations that ${locName}'s property sector carries — developers launching off-plan projects, management companies running communities, and the jointly owned buildings themselves. Our firm appears on the Dubai Land Department’s roster of approved financial auditors, which means we can act on both halves of the regulatory picture: the escrow controls that sit behind off-plan sales, and the annual financial and service-charge audits that apply to Jointly Owned Property (JOP).</p>
    
    <p>The work we take on ranges from escrow account audits and Mollak submission support to service-charge budget reviews, year-end final account audits and general compliance advisory. In each case the aim is the same — records that reconcile, documentation that stands up to review, and submissions that move through the Dubai Land Department and Real Estate Regulatory Agency without avoidable delay.</p>

    <h2>Escrow Account Obligations for Off-Plan Developers</h2>
    <p>Any developer selling units before completion in ${locName} falls under Law No. 8 of 2007 on Escrow Accounts for Real Estate Development. The purpose of the framework is straightforward: money paid by buyers should be ring-fenced and spent on the project those buyers actually bought into.</p>
    <p>The mechanics follow from that principle. The account is opened through an approved escrow agent and held in the name of the individual development — not the developer as a whole. One project, one account. Whatever sits in it is committed to constructing and completing that specific development.</p>
    <p>Opening the account is itself a documented exercise. Among the papers required is a statement of the project’s projected costs and revenues, certified by an accredited chartered auditor.</p>
    <div class="alert alert-info">
        <strong>Regulatory Authority:</strong> Oversight continues after the account is live. The Dubai Land Department may call on escrow agents to file periodic statements setting out what has come into the account and what has gone out, and it may arrange for those statements and the underlying information to be audited. Any financing a developer raises against the project is likewise required to go into that project’s escrow account rather than anywhere else.
    </div>
    <div class="alert alert-warning">
        <strong>Retention Release:</strong> At the far end of the project, the law allows the escrow agent to hold back 5% of the total value of the account. That retention is released a year after the units are registered in the purchasers’ names, subject to the conditions that apply.
    </div>
    <p>RERA has been consistent on one further point: registration of the project and the escrow arrangements must be in place before an off-plan development is marketed, and money tied to the project must not be collected outside the designated escrow account.</p>

    <h2>What Our Escrow Audit Covers</h2>
    <p>Depending on the stage and size of the development, our escrow audit procedures may extend to:</p>
    <ul>
        <li>Bank statements and transaction activity on the project escrow account</li>
        <li>Amounts collected from purchasers and traced through to escrow deposits</li>
        <li>Facilities drawn from banks or other financial institutions for the project</li>
        <li>Payments released to contractors, consultants and other permitted project recipients</li>
        <li>Underlying cost and revenue ledgers for the development</li>
        <li>Backing documentation — invoices, payment certificates and contracts</li>
        <li>Construction progress records, where these are relevant to releases</li>
        <li>Sales and collection data checked against DLD and Oqood records</li>
        <li>Closing balances and bank reconciliations on the escrow account</li>
        <li>Retention held and balances arising on project completion</li>
        <li>Exceptions, unsupported entries and points of regulatory concern</li>
        <li>Preparation of the financial information and reports needed for RERA and DLD purposes</li>
    </ul>
    <p>The intention throughout is to hand the developer a clean, followable audit trail — and to surface reconciliation gaps or missing paperwork early, while there is still time to fix them ahead of a filing deadline.</p>

    <h2>Mollak Submissions and Audit Support</h2>
    <p>Mollak is the Dubai Land Department’s electronic platform for regulating and monitoring service charges and the financial accounts of jointly owned properties. It handles registration of management companies and auditors, the regulated community accounts, approval of service-charge budgets, the filing of financial records and audit reports, service-charge invoicing and the payment flows that follow.</p>
    <p>We support management companies and jointly owned properties across that entire workflow — examining the information behind a budget or final-account filing, reconciling the financial records, flagging documentation that is missing or inconsistent, and producing the audit work the relevant Mollak process calls for.</p>
    <p>Typical areas of support include:</p>
    <ul>
        <li>Audit of the annual service charge budget</li>
        <li>Audit of the final financial accounts</li>
        <li>Reconciliation of financial data held in Mollak</li>
        <li>Examination of movements on the regulated bank account</li>
        <li>Reconciliation of service charge receivables</li>
        <li>Comparison of budgeted figures against actual outcomes</li>
        <li>Review of the reserve fund</li>
        <li>Verification of suppliers and contracts</li>
        <li>Review of how service charges are allocated across units</li>
        <li>Preparation of the audit reports required for RERA approval</li>
        <li>Handling audit-related queries raised during the Mollak approval cycle</li>
    </ul>

    <h2>How the Service Charge Audit and Approval Process Works</h2>
    <p>Service charges levied on jointly owned properties in ${locName} sit under RERA supervision. As the Dubai Land Department sets out, the service or usage charge budget is approved by RERA only once an approved financial auditing firm has completed the required audit.</p>
    <p>In practice the sequence runs roughly as follows.</p>
    
    <h3>1. Appointing the auditor through Mollak</h3>
    <p>The management entity starts the appointment process inside the Mollak system. DLD operates dedicated services for approving an auditor to review the annual budgets and final financial accounts of a jointly owned property.</p>
    
    <h3>2. Assembling the budget and its supporting records</h3>
    <p>The pack supporting a service and usage charge approval usually draws together the detailed annual budget, quotations and tender evaluations, service and maintenance agreements, insurance particulars, utility costs and other evidence behind the proposed expenditure.</p>
    <p>DLD’s current service requirements call specifically for a detailed annual service-charge budget, proposals and an evaluation of at least three tenders for each service provider, the relevant service and maintenance documentation, and an external financial audit report from a RERA-accredited financial auditor.</p>
    
    <h3>3. Auditing the individual service charge components</h3>
    <p>Our auditors work through the budget line by line — security, cleaning, maintenance, utilities, community management, insurance, master-community charges, reserve fund contributions and the other costs properly chargeable to common property.</p>
    <p>Attention centres on the supporting documentation, the contractual terms behind each cost, the allocation methodology, what was actually spent in the prior year, the assumptions built into the budget, and the financial records that sit underneath the proposed charges.</p>
    
    <h3>4. Testing rates against available benchmarks</h3>
    <p>Where it adds value, proposed costs and rates are measured against the project’s own history and against RERA-approved service charge information that is publicly available. The Dubai Service Charge Index lets users look up approved charges for a jointly owned property by selecting the project, the usage type and the year.</p>
    
    <h3>5. Issuing the report and filing through Mollak</h3>
    <p>Once the audit is complete and any material findings have been resolved, the auditor’s report and accompanying financial information are prepared for the applicable Mollak submission and RERA review.</p>
    
    <h3>6. Approval and publication</h3>
    <p>After the charges clear the regulatory process, the approved figures can be reflected through the Mollak and DLD systems and the Service Charge Index. Those approved charges then become the basis on which owners are invoiced.</p>
    
    <div class="alert alert-warning">
        <strong>Mandatory Auditor Rotation:</strong> Worth noting: the Dubai Land Department currently provides that the same auditor may not audit the same jointly owned property project in two consecutive years, for the purposes of the budget and final-account auditor appointment services.
    </div>

    <h2>Why Developers and Management Companies Work With Us</h2>
    <p>Nadeem and Umendra Chartered Accountants pairs hands-on real estate audit experience with a working knowledge of how Dubai’s RERA, escrow and Mollak requirements actually operate in practice — not merely how they read on paper.</p>
    <p>Few firms cover both regulatory tracks. We do: developer escrow accounts on the off-plan side, and financial and service-charge audits on the jointly owned property side. That breadth matters for clients whose portfolios straddle the two.</p>
    <p>What we emphasise is unglamorous but decisive — reconciliations that hold, documentation that is complete, reporting that is transparent, and compliance issues settled before a file ever reaches the regulator rather than after.</p>
    <p>Whether you are a developer preparing an escrow audit, a management company pushing a service charge budget through Mollak, or a jointly owned property that needs its annual financial audit, we can take the work on.</p>
    
    <h2>Frequently Asked Questions</h2>
    <div class="accordion" id="faqAccordion">
        <div class="accordion-item">
            <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">What is an escrow account audit?</button></h3>
            <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">An escrow account audit examines the funds paid by off-plan buyers into a designated project account to ensure they are strictly used for the construction and development of that specific project as per Law No. 8 of 2007.</div></div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">What is the 5% retention rule in escrow?</button></h3>
            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">According to the law, the escrow agent must hold back 5% of the total value of the account. This retention is only released one year after the units are registered in the purchasers' names, assuming all conditions are met.</div></div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">What is Mollak?</button></h3>
            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">Mollak is the Dubai Land Department's electronic platform used for regulating, monitoring, and managing the service charges and financial accounts of jointly owned properties.</div></div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">Can the same auditor audit a property every year?</button></h3>
            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">No. The Dubai Land Department mandates an auditor rotation rule, which means the same auditor may not audit the same jointly owned property project for two consecutive years for budget and final-account purposes.</div></div>
        </div>
    </div>
</div>

<div class="related-services-sec" style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 40px auto; max-width: 900px; border: 1px solid #e2e8f0;">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 24px;">Related Services in ${locName}</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/mollak-audit-services-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Mollak Audit</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Audit & Assurance</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/internal-audit-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Internal Audit</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Corporate Tax</a></li>
    </ul>
</div>

<div class="cta-section mt-5">
    <div class="container">
        <h2>Talk to Us</h2>
        <p class="lead">Need RERA approved auditors in ${locName} for an escrow account, a Mollak submission or a service charge audit?</p>
        <p>Get in touch with Nadeem and Umendra Chartered Accountants and we can talk through your project, the documentation you will need and a realistic timeline for the audit.</p>
        <div class="mt-4">
            <a href="https://wa.me/97142500679" class="btn-whatsapp fs-5 mx-2">WhatsApp Us</a>
            <a href="tel:043258361" class="btn-call fs-5 mx-2" style="background: #fff; color: #0b2545;">Call 04 325 8361</a>
        </div>
    </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA RERA Audit Services ${locName}",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "${loc.office}"
      },
      "telephone": "+971 4 325 8361",
      "url": "${loc.url}"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an escrow account audit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An escrow account audit examines the funds paid by off-plan buyers into a designated project account to ensure they are strictly used for the construction and development of that specific project as per Law No. 8 of 2007."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 5% retention rule in escrow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to the law, the escrow agent must hold back 5% of the total value of the account. This retention is only released one year after the units are registered in the purchasers' names, assuming all conditions are met."
          }
        },
        {
          "@type": "Question",
          "name": "What is Mollak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mollak is the Dubai Land Department's electronic platform used for regulating, monitoring, and managing the service charges and financial accounts of jointly owned properties."
          }
        },
        {
          "@type": "Question",
          "name": "Can the same auditor audit a property every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Dubai Land Department mandates an auditor rotation rule, which means the same auditor may not audit the same jointly owned property project for two consecutive years for budget and final-account purposes."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nufca.com"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "RERA Audit Services in ${locName}",
        "item": "${loc.url}"
      }]
    }
  ]
}
</script>
`;
}

async function updatePage(loc) {
  const content = buildContent(loc);
  const data = JSON.stringify({
    content: content,
    title: loc.id === 99200 ? 'RERA Approved Auditors in UAE | Escrow Audit - NUFCA' : `RERA Approved Auditors in ${loc.locText} | Escrow Audit - NUFCA`
  });

  const options = {
    hostname: 'nufca.com',
    path: `/wp-json/wp/v2/pages/${loc.id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentials}`,
      'Content-Length': Buffer.byteLength(data)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let resData = '';
      res.on('data', chunk => resData += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`Successfully updated ${loc.name} (ID: ${loc.id})`);
          resolve(true);
        } else {
          console.error(`Failed to update ${loc.name} (ID: ${loc.id}). Status: ${res.statusCode}`);
          console.error(resData);
          resolve(false);
        }
      });
    });

    req.on('error', e => {
      console.error(`Error updating ${loc.name}: ${e.message}`);
      resolve(false);
    });

    req.write(data);
    req.end();
  });
}

async function main() {
  for (const loc of locations) {
    await updatePage(loc);
  }
}

main();
