const https = require('https');

const WP_API_URL = 'https://nufca.com/wp-json/wp/v2/pages';
const WP_USER = 'umendra';
const WP_PASS = 'pLA06DGbVynf10GbCwrHUsG1';
const AUTH_HEADER = 'Basic ' + Buffer.from(WP_USER + ':' + WP_PASS).toString('base64');

const locations = [
  {
    id: 99212,
    name: 'UAE',
    url: 'https://nufca.com/mollak-audit-services-uae/',
    address: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE'
  },
  {
    id: 99213,
    name: 'Dubai',
    url: 'https://nufca.com/mollak-audit-services-uae/dubai/',
    address: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE'
  },
  {
    id: 99214,
    name: 'Gold Souk Dubai',
    url: 'https://nufca.com/mollak-audit-services-uae/gold-souk-dubai/',
    address: 'Deira Gold Souk Commercial District, Dubai, UAE'
  },
  {
    id: 99215,
    name: 'Abu Dhabi',
    url: 'https://nufca.com/mollak-audit-services-uae/abu-dhabi/',
    address: 'Office 2404, Tamouh Tower, 12 Al Reem St, Jazeerat Al Reem, Abu Dhabi, UAE'
  },
  {
    id: 99216,
    name: 'Sharjah',
    url: 'https://nufca.com/mollak-audit-services-uae/sharjah/',
    address: 'Hamriyah Free Zone & Industrial Logistics Hub, Sharjah, UAE'
  }
];

function buildContent(loc) {
  const isUAE = loc.name === 'UAE';
  const locNameText = isUAE ? 'the UAE' : loc.name;
  
  return `
<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb {
    display: none !important;
}
.nufca-container { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
.loc-filter { background: #f4f4f4; padding: 15px; text-align: center; border-bottom: 1px solid #ddd; }
.loc-filter select { padding: 10px; font-size: 16px; width: 300px; max-width: 100%; border-radius: 4px; border: 1px solid #ccc; }
.hero-section { background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: white; padding: 60px 20px; text-align: center; }
.hero-eyebrow { background: rgba(255,255,255,0.2); display: inline-block; padding: 5px 15px; border-radius: 20px; font-size: 14px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; }
.hero-h1 { font-size: 42px; margin: 0 0 20px 0; font-weight: bold; }
.hero-sub { font-size: 20px; max-width: 800px; margin: 0 auto 30px auto; opacity: 0.9; }
.trust-strip { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 30px; }
.trust-badge { background: rgba(255,255,255,0.1); padding: 10px 20px; border-radius: 4px; font-weight: bold; }
.office-bar { background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; display: inline-block; }
.content-wrapper { max-width: 1100px; margin: 0 auto; padding: 50px 20px; display: flex; flex-wrap: wrap; gap: 40px; }
.main-content { flex: 1; min-width: 300px; }
.sidebar { width: 350px; }
@media (max-width: 768px) { .sidebar { width: 100%; } }
.advisory-card { background: white; border: 1px solid #eee; border-radius: 8px; padding: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); position: sticky; top: 20px; text-align: center; }
.advisory-card h3 { color: #0b2545; margin-top: 0; font-size: 24px; }
.btn-whatsapp { display: block; background: #25D366; color: white; text-decoration: none; padding: 15px; border-radius: 4px; font-weight: bold; margin-bottom: 15px; }
.btn-call { display: block; background: #0b2545; color: white; text-decoration: none; padding: 15px; border-radius: 4px; font-weight: bold; margin-bottom: 15px; }
.btn-email { display: block; background: #f4f4f4; color: #333; text-decoration: none; padding: 15px; border-radius: 4px; font-weight: bold; }
.btn-whatsapp:hover, .btn-call:hover, .btn-email:hover { opacity: 0.9; color: inherit; }
h2 { color: #0b2545; border-bottom: 2px solid #134074; padding-bottom: 10px; margin-top: 40px; }
h3 { color: #134074; margin-top: 30px; }
ul, ol { padding-left: 20px; margin-bottom: 20px; }
li { margin-bottom: 10px; }
.callout { background: #eef5fa; border-left: 4px solid #134074; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0; }
.faq-item { border: 1px solid #eee; border-radius: 8px; margin-bottom: 15px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); }
.faq-item h3 { margin-top: 0; margin-bottom: 10px; font-size: 18px; color: #0b2545; }
.faq-item p { margin: 0; }
.cta-section { background: #0b2545; color: white; text-align: center; padding: 60px 20px; margin-top: 50px; }
.cta-section h2 { color: white; border: none; margin-top: 0; }
.cta-buttons { display: flex; justify-content: center; gap: 20px; margin-top: 30px; flex-wrap: wrap; }
.cta-buttons a { padding: 15px 30px; border-radius: 4px; font-weight: bold; text-decoration: none; }
.cta-btn-primary { background: #25D366; color: white; }
.cta-btn-secondary { background: white; color: #0b2545; }
</style>

<div class="nufca-container">
  
<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/mollak-audit-services-uae/" ${loc.id === 99212 ? 'selected' : ''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/mollak-audit-services-uae/dubai/" ${loc.id === 99213 ? 'selected' : ''}>🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/mollak-audit-services-uae/gold-souk-dubai/" ${loc.id === 99214 ? 'selected' : ''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/mollak-audit-services-uae/abu-dhabi/" ${loc.id === 99215 ? 'selected' : ''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/mollak-audit-services-uae/sharjah/" ${loc.id === 99216 ? 'selected' : ''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

  <div class="hero-section">
    <div class="hero-eyebrow">RERA Audit & Compliance</div>
    <h1 class="hero-h1">Mollak Services in ${loc.name}</h1>
    <p class="hero-sub">RERA Service Charge Audit, Owner Balance Verification and Compliance Support</p>
    <div class="trust-strip">
      <div class="trust-badge">RERA Approved Auditors</div>
      <div class="trust-badge">DLD Compliance</div>
      <div class="trust-badge">Expert Verification</div>
    </div>
    <div class="office-bar">
      <strong>${loc.name} Office:</strong> ${loc.address} | <strong>Phone:</strong> 04 325 8361 / 055-9831923
    </div>
  </div>

  <div class="content-wrapper">
    <div class="main-content">
      <p>NUF Chartered Accountants works with jointly owned properties, property management companies and other real estate stakeholders that need help getting their Mollak obligations right — service charge budgets, financial audits, owner balance verification and the broader RERA compliance picture that sits behind all of it.</p>
      <p>Mollak runs under the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA), and its purpose is governance and transparency in how jointly owned properties are managed. The platform handles registration of communities and management companies, approval of service charge budgets, submission of financial records and audit reports, issuance of service charge invoices, and ongoing monitoring of the regulated service charge accounts.</p>
      <p>Our role sits on the financial side of that process: preparing, reviewing and verifying the information that ends up in a Mollak submission and, ultimately, in front of RERA.</p>
      
      <h2>Getting Mollak Submissions Right</h2>
      <p>The basic expectation for management companies and other authorised users is simple to state and harder to deliver consistently — whatever goes into the portal should be complete, accurate and backed by documentation that someone else can follow.</p>
      <p>In practice, compliance clusters around the following areas:</p>
      <ol>
        <li>Registering the management company and keeping authorised employee details current.</li>
        <li>Registering the jointly owned property or community itself.</li>
        <li>Registering management agreements and keeping them up to date.</li>
        <li>Appointing a RERA-approved financial auditor where the requirement applies.</li>
        <li>Opening and maintaining the approved regulatory bank account for the property.</li>
        <li>Preparing and filing the annual service charge or usage charge budget.</li>
        <li>Uploading financial records together with any applicable audit reports.</li>
        <li>Securing RERA approval before approved service charge invoices are issued.</li>
        <li>Making sure owner invoices and balances agree with what Mollak shows.</li>
        <li>Holding on to the contracts, invoices, utility records and other papers behind common-area spending.</li>
        <li>Posting payments and adjustments accurately, so that Mollak, the owner statement of account and the accounting ledger continue to tell the same story.</li>
      </ol>
      <p>The documentation point deserves emphasis. Maintenance contracts, security, cleaning, utilities, insurance, management expenses, reserve fund contributions — every cost carried in the budget should have a paper trail behind it that survives scrutiny months later.</p>

      <h2>Audit Rules for Jointly Owned Property and Owners Associations</h2>
      <p>Financial reporting for jointly owned property in ${loc.name} follows the DLD and RERA requirements built on Law No. 6 of 2019 Concerning Ownership of Jointly Owned Real Property in the Emirate of Dubai, together with the regulations and circulars issued under it.</p>
      <p>“Owners Association audit” is still what most people type into a search bar, but the terminology has moved on. Under the current framework the substantive responsibilities rest with the authorised Management Company or Management Entity, while Owners Committees carry out the functions the regulations assign to them.</p>

      <h3>What this means for service and usage charges</h3>
      <ul>
        <li>Annual budgets need to rest on proper financial records and expenditure documentation.</li>
        <li>The service or usage charge budget is subject to audit by an appropriately approved audit firm.</li>
        <li>RERA approval should be obtained for the applicable budget.</li>
        <li>Collections belong in the designated regulatory account.</li>
        <li>Actual spending should be measured back against the approved budget.</li>
        <li>Where a reserve fund applies, its collections and expenditure should be separately identifiable.</li>
        <li>Supplier contracts, utilities, insurance, maintenance and management costs should be supported and independently verifiable.</li>
        <li>Owner receivable balances should agree across the accounting records, the statements of account and Mollak.</li>
        <li>Anything that does not reconcile — unsupported charges, incorrect owner balances, material discrepancies — needs investigating and correcting rather than carrying forward.</li>
      </ul>

      <div class="callout">
        <strong>Additional verification for legal recovery:</strong><br/>
        Where an outstanding owner balance is going to be relied on in legal recovery proceedings, RERA expects a further layer of checking. The auditor may need to tie the Mollak payment notice back to the statement of account, confirm title deed information, work through the audited financial statements and receivables, confirm that the relevant budgets carried RERA approval, isolate partial or unidentified payments, and report any discrepancies found.
      </div>

      <h2>Service Charge Verification Checklist</h2>
      <p>Run through the following before a service charge budget, owner statement or audit submission is treated as final.</p>
      <ul>
        <li>Jointly owned property and management company are correctly registered in Mollak.</li>
        <li>The financial year and service charge period are correctly identified.</li>
        <li>The budget has been built on current, supportable cost estimates.</li>
        <li>The budget has RERA approval, or is on its way through the approval process.</li>
        <li>Service charge income reconciles to the owner and unit schedules.</li>
        <li>Unit areas and the allocation methodology agree with the property records.</li>
        <li>Security, cleaning, maintenance and facilities-management contracts have been reviewed.</li>
        <li>Electricity, water, district cooling and other common-area utility costs are verified.</li>
        <li>Insurance costs are supported by the underlying policy documentation.</li>
        <li>Management fees and other administrative expenses have been reviewed.</li>
        <li>Master community or usage charges are verified where they apply.</li>
        <li>Reserve fund contributions and spending are reviewed separately from the general fund.</li>
        <li>Actual expenditure has been compared with the approved budget and material variances explained.</li>
        <li>Supplier invoices and contracts support every material expense.</li>
        <li>The regulatory bank account reconciles to the accounting ledger.</li>
        <li>Owner statements of account reconcile to Mollak balances.</li>
        <li>Partial payments, credit notes and unidentified receipts have been examined.</li>
        <li>Prior-year owner balances and opening balance reconciliations have been reviewed.</li>
        <li>Adjustments posted to individual owner accounts are authorised and supported.</li>
        <li>Differences between audited financial statements, receivable schedules and Mollak records have been resolved.</li>
        <li>Complete supporting documentation is on file and ready for RERA or auditor review.</li>
      </ul>

      <h2>How We Can Help</h2>
      <p>Our Mollak support typically covers:</p>
      <ul>
        <li>Review and audit support for service charge budgets.</li>
        <li>Examination of jointly owned property financial records.</li>
        <li>Reconciliation of financial data held in Mollak.</li>
        <li>Verification of service charges and usage charges.</li>
        <li>Reconciliation of the regulatory bank account.</li>
        <li>Verification of owner receivables and individual balances.</li>
        <li>Review of supplier and maintenance expenditure and its supporting documents.</li>
        <li>Review of the general fund and the reserve fund.</li>
        <li>Preparation of documentation needed for RERA submissions.</li>
        <li>Verification of owner balances for applicable legal notice procedures.</li>
        <li>Identifying and reporting financial or reconciliation discrepancies.</li>
      </ul>
      <p>Most of the friction management companies experience with Mollak comes from incomplete or inconsistent financial submissions rather than from the rules themselves. Having an experienced audit and accounting team on the file tightens the records, keeps the supporting documentation where it should be, and removes a good deal of the back-and-forth that otherwise delays approval.</p>

      <h2>Frequently Asked Questions</h2>
      
      <div class="faq-item">
        <h3>What is the Mollak system in Dubai?</h3>
        <p>Mollak is a Dubai Land Department and RERA platform for regulating and monitoring jointly owned properties and the service charges levied on them. It covers property and management company registration, service charge budget approval, financial and audit submissions, owner invoicing and payment-related processes.</p>
      </div>
      
      <div class="faq-item">
        <h3>Who approves service charges for jointly owned properties?</h3>
        <p>RERA does, once the required review and audit process has been completed.</p>
      </div>
      
      <div class="faq-item">
        <h3>How can an owner check an approved service charge?</h3>
        <p>Through the Dubai Land Department Service Charge Index or the relevant DLD digital services. When comparing a charge against the approved rate, make sure the property, the usage type and the financial year all match — a mismatch on any of the three will give a misleading comparison.</p>
      </div>
      
      <div class="faq-item">
        <h3>What can a service charge cover?</h3>
        <p>It depends on the property and the approved budget, but items typically include security, cleaning, maintenance, utilities, insurance, management and administrative costs, master community charges and reserve fund contributions.</p>
      </div>
      
      <div class="faq-item">
        <h3>Does a service charge budget have to be audited?</h3>
        <p>The service or usage charge budget goes through the applicable RERA audit and approval process, and RERA-approved auditors are used for the relevant jointly owned property budget audits.</p>
      </div>
      
      <div class="faq-item">
        <h3>What should be checked when verifying an owner’s outstanding balance?</h3>
        <p>The Mollak payment notice, the owner statement of account, the relevant Mollak records, the applicable RERA-approved budgets, payments and adjustments posted to the account, title deed information where required, prior audited receivable balances, and any partial or unidentified payments sitting unallocated.</p>
      </div>
      
      <div class="faq-item">
        <h3>Where should service charge payments be made?</h3>
        <p>Through the approved payment arrangements and the regulatory account designated for that jointly owned property. Owners should follow their Mollak-generated invoice or instructions from the authorised management company, and treat anything else with caution.</p>
      </div>
      
      <div class="faq-item">
        <h3>What is the difference between the general fund and the reserve fund?</h3>
        <p>The general fund carries the recurring operating and management costs of running the property. The reserve fund is set aside for qualifying major repairs, replacements and longer-term capital needs, in line with the jointly owned property framework.</p>
      </div>
      
      <div class="faq-item">
        <h3>Can NUF Chartered Accountants help with Mollak service charge verification?</h3>
        <p>Yes — financial record review, service charge budget verification, owner balance reconciliation, supporting-document review and the audit requirements attached to Mollak and jointly owned property compliance in Dubai.</p>
      </div>
    </div>
    
    <div class="sidebar">
      <div class="advisory-card">
        <h3>Consult an Expert</h3>
        <p>Get professional assistance with Mollak audit and RERA compliance services.</p>
        <a href="https://wa.me/97142500679" class="btn-whatsapp">Chat on WhatsApp</a>
        <a href="tel:043258361" class="btn-call">Call 04 325 8361</a>
        <a href="mailto:info@nufca.com" class="btn-email">Email Us</a>
      </div>
    </div>
  </div>

  <div class="related-services-sec" style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 40px auto; max-width: 900px; border: 1px solid #e2e8f0;">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 24px;">Related Services in ${loc.name}</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Corporate Tax</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Audit & Assurance</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">VAT Consultancy</a></li>
    </ul>
  </div>

  <div class="cta-section">
    <h2>Ready to Simplify Your Mollak Submissions?</h2>
    <p>Contact our RERA-approved auditing team for professional compliance support.</p>
    <div class="cta-buttons">
      <a href="https://wa.me/97142500679" class="cta-btn-primary">WhatsApp Us</a>
      <a href="tel:043258361" class="cta-btn-secondary">Call Now</a>
    </div>
  </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUF Chartered Accountants - Mollak Services ${loc.name}",
      "description": "RERA Service Charge Audit, Owner Balance Verification and Compliance Support in ${loc.name}",
      "url": "${loc.url}",
      "telephone": "+97143258361",
      "email": "info@nufca.com",
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
          "name": "What is the Mollak system in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mollak is a Dubai Land Department and RERA platform for regulating and monitoring jointly owned properties and the service charges levied on them. It covers property and management company registration, service charge budget approval, financial and audit submissions, owner invoicing and payment-related processes."
          }
        },
        {
          "@type": "Question",
          "name": "Who approves service charges for jointly owned properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RERA does, once the required review and audit process has been completed."
          }
        },
        {
          "@type": "Question",
          "name": "How can an owner check an approved service charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through the Dubai Land Department Service Charge Index or the relevant DLD digital services. When comparing a charge against the approved rate, make sure the property, the usage type and the financial year all match — a mismatch on any of the three will give a misleading comparison."
          }
        },
        {
          "@type": "Question",
          "name": "What can a service charge cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the property and the approved budget, but items typically include security, cleaning, maintenance, utilities, insurance, management and administrative costs, master community charges and reserve fund contributions."
          }
        },
        {
          "@type": "Question",
          "name": "Does a service charge budget have to be audited?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The service or usage charge budget goes through the applicable RERA audit and approval process, and RERA-approved auditors are used for the relevant jointly owned property budget audits."
          }
        },
        {
          "@type": "Question",
          "name": "What should be checked when verifying an owner’s outstanding balance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Mollak payment notice, the owner statement of account, the relevant Mollak records, the applicable RERA-approved budgets, payments and adjustments posted to the account, title deed information where required, prior audited receivable balances, and any partial or unidentified payments sitting unallocated."
          }
        },
        {
          "@type": "Question",
          "name": "Where should service charge payments be made?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through the approved payment arrangements and the regulatory account designated for that jointly owned property. Owners should follow their Mollak-generated invoice or instructions from the authorised management company, and treat anything else with caution."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between the general fund and the reserve fund?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The general fund carries the recurring operating and management costs of running the property. The reserve fund is set aside for qualifying major repairs, replacements and longer-term capital needs, in line with the jointly owned property framework."
          }
        },
        {
          "@type": "Question",
          "name": "Can NUF Chartered Accountants help with Mollak service charge verification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — financial record review, service charge budget verification, owner balance reconciliation, supporting-document review and the audit requirements attached to Mollak and jointly owned property compliance in Dubai."
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
          "name": "Mollak Services ${loc.name}",
          "item": "${loc.url}"
        }
      ]
    }
  ]
}
</script>
  `;
}

function updatePage(loc) {
  return new Promise((resolve, reject) => {
    const content = buildContent(loc);
    const postData = JSON.stringify({
      content: content,
      title: loc.id === 99212 ? 'Mollak Audit Services in UAE | Service Charge - NUFCA' : 'Mollak Audit Services in ' + loc.name + ' | Service Charge - NUFCA'
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AUTH_HEADER,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(WP_API_URL + '/' + loc.id, options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('✅ Successfully updated ' + loc.name + ' (ID: ' + loc.id + ')');
          resolve();
        } else {
          console.error('❌ Failed to update ' + loc.name + ' (ID: ' + loc.id + '). Status: ' + res.statusCode);
          console.error(data);
          resolve();
        }
      });
    });

    req.on('error', (e) => {
      console.error('❌ Network error updating ' + loc.name + ': ' + e.message);
      resolve();
    });

    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log('Starting deployment of Mollak Services pages...');
  for (const loc of locations) {
    await updatePage(loc);
  }
  console.log('Deployment complete.');
}

run();
