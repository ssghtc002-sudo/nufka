const https = require('https');

// ONLY Target Page ID 99212 (https://nufca.com/mollak-audit-services-uae/)
const targetPageId = 99212;
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
</style>

<div class="nufca-content-wrap">

<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/mollak-audit-services-uae/" selected>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/mollak-audit-services-uae/dubai/">🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/mollak-audit-services-uae/gold-souk-dubai/">🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/mollak-audit-services-uae/abu-dhabi/">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/mollak-audit-services-uae/sharjah/">🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<!-- Hero Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 50px 24px; text-align: center; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(11,37,69,0.15);">
    <div style="display: inline-block; background: rgba(255,255,255,0.15); color: #93c5fd; padding: 5px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 0.5px;">Dubai Land Department &amp; RERA Compliant Auditors</div>
    <h1 style="font-size: 32px; font-weight: 800; color: #ffffff !important; margin: 0 0 15px; line-height: 1.25;">Mollak Audit Services in UAE</h1>
    <p style="font-size: 16px; max-width: 800px; margin: 0 auto 18px; color: #e2e8f0; line-height: 1.6;">RERA Service Charge Audit, Owner Balance Verification, Budget Approvals and Compliance Support for Jointly Owned Properties and Management Companies.</p>
    <div style="font-size: 14px; color: #bae6fd; font-weight: 600; margin-bottom: 15px;">✓ RERA Approved Financial Auditors &nbsp;|&nbsp; ✓ DLD Mollak Registered &nbsp;|&nbsp; ✓ 21-Point Verification Checklist &nbsp;|&nbsp; ✓ Law No. 6 of 2019 Compliant</div>
    <div style="margin-top: 15px; font-size: 13.5px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px;">📍 Office: 510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE &nbsp;|&nbsp; 📞 Phone: 04 325 8361 / 055-9831923</div>
</div>

<!-- Top Direct Consultation Card -->
<div style="background: #f8fafc; border: 2px solid #134074; border-radius: 10px; padding: 28px 20px; text-align: center; margin: 30px 0; box-shadow: 0 4px 15px rgba(11,37,69,0.05);">
    <h3 style="color: #0b2545; margin: 0 0 10px; font-size: 21px; font-weight: 800;">Direct Advisory Consultation</h3>
    <p style="margin: 0 auto 18px; max-width: 700px; color: #475569; font-size: 15px;">Speak directly with our RERA and Mollak audit specialists for your annual service charge budget approval, owner reconciliation, or final account audit.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #134074; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(19,64,116,0.25);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: #0b2545; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(11,37,69,0.25);">✉️ Email Us</a></div>
</div>

<p><strong>NUF Chartered Accountants</strong> works with jointly owned properties, property management companies and other real estate stakeholders that need help getting their Mollak obligations right — service charge budgets, financial audits, owner balance verification and the broader RERA compliance picture that sits behind all of it.</p>
<p>Mollak runs under the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA), and its purpose is governance and transparency in how jointly owned properties are managed. The platform handles registration of communities and management companies, approval of service charge budgets, submission of financial records and audit reports, issuance of service charge invoices, and ongoing monitoring of the regulated service charge accounts.</p>
<p>Our role sits on the financial side of that process: preparing, reviewing and verifying the information that ends up in a Mollak submission and, ultimately, in front of RERA.</p>

<h2>Getting Mollak Submissions Right: 11 Compliance Clusters</h2>
<p>The basic expectation for management companies and other authorised users is simple to state and harder to deliver consistently — whatever goes into the portal should be complete, accurate and backed by documentation that someone else can follow.</p>
<p>In practice, compliance clusters around the following 11 core areas:</p>
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
<p>Financial reporting for jointly owned property follows the DLD and RERA requirements built on <strong>Law No. 6 of 2019 Concerning Ownership of Jointly Owned Real Property in the Emirate of Dubai</strong>, together with the regulations and circulars issued under it.</p>
<p>“Owners Association audit” is still what most people type into a search bar, but the terminology has moved on. Under the current framework the substantive responsibilities rest with the authorised Management Company or Management Entity, while Owners Committees carry out the functions the regulations assign to them.</p>

<h3>What This Means for Service and Usage Charges (9 Core Rules):</h3>
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

<div class="nufca-box-info">
    <strong>Additional Verification for Legal Recovery:</strong><br/>
    Where an outstanding owner balance is going to be relied on in legal recovery proceedings, RERA expects a further layer of checking. The auditor may need to tie the Mollak payment notice back to the statement of account, confirm title deed information, work through the audited financial statements and receivables, confirm that the relevant budgets carried RERA approval, isolate partial or unidentified payments, and report any discrepancies found.
</div>

<h2>Complete 21-Point Service Charge Verification Checklist</h2>
<p>Run through the following before a service charge budget, owner statement or audit submission is treated as final:</p>
<ol>
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
</ol>

<h2>How We Can Help: 10 Comprehensive Support Workflows</h2>
<p>Our Mollak support covers:</p>
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
</ul>
<p>Most of the friction management companies experience with Mollak comes from incomplete or inconsistent financial submissions rather than from the rules themselves. Having an experienced audit and accounting team on the file tightens the records, keeps the supporting documentation where it should be, and removes a good deal of the back-and-forth that otherwise delays approval.</p>

<h2>Frequently Asked Questions</h2>

<h3>What is the Mollak system in Dubai?</h3>
<p>Mollak is a Dubai Land Department and RERA platform for regulating and monitoring jointly owned properties and the service charges levied on them. It covers property and management company registration, service charge budget approval, financial and audit submissions, owner invoicing and payment-related processes.</p>

<h3>Who approves service charges for jointly owned properties?</h3>
<p>RERA does, once the required review and audit process has been completed.</p>

<h3>How can an owner check an approved service charge?</h3>
<p>Through the Dubai Land Department Service Charge Index or the relevant DLD digital services. When comparing a charge against the approved rate, make sure the property, the usage type and the financial year all match — a mismatch on any of the three will give a misleading comparison.</p>

<h3>What can a service charge cover?</h3>
<p>It depends on the property and the approved budget, but items typically include security, cleaning, maintenance, utilities, insurance, management and administrative costs, master community charges and reserve fund contributions.</p>

<h3>Does a service charge budget have to be audited?</h3>
<p>The service or usage charge budget goes through the applicable RERA audit and approval process, and RERA-approved auditors are used for the relevant jointly owned property budget audits.</p>

<h3>What should be checked when verifying an owner’s outstanding balance?</h3>
<p>The Mollak payment notice, the owner statement of account, the relevant Mollak records, the applicable RERA-approved budgets, payments and adjustments posted to the account, title deed information where required, prior audited receivable balances, and any partial or unidentified payments sitting unallocated.</p>

<h3>Where should service charge payments be made?</h3>
<p>Through the approved payment arrangements and the regulatory account designated for that jointly owned property. Owners should follow their Mollak-generated invoice or instructions from the authorised management company, and treat anything else with caution.</p>

<h3>What is the difference between the general fund and the reserve fund?</h3>
<p>The general fund carries the recurring operating and management costs of running the property. The reserve fund is set aside for qualifying major repairs, replacements and longer-term capital needs, in line with the jointly owned property framework.</p>

<h3>Can NUF Chartered Accountants help with Mollak service charge verification?</h3>
<p>Yes — financial record review, service charge budget verification, owner balance reconciliation, supporting-document review and the audit requirements attached to Mollak and jointly owned property compliance in Dubai.</p>

<!-- Related Services Section -->
<div class="related-services-sec" style="background: #f8fafc; padding: 30px 24px; border-radius: 10px; margin: 40px auto; max-width: 960px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(11,37,69,0.03);">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 22px; font-weight: 800; text-align: center;">Related Services in UAE</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 15px;">
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/rera-audit-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">RERA Escrow Audit</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Audit &amp; Assurance</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/internal-audit-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Internal Audit &amp; Risk Review</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Corporate Tax Advisory</a></li>
    </ul>
</div>

<!-- Closing CTA Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 45px 24px; text-align: center; border-radius: 10px; margin-top: 40px; box-shadow: 0 10px 25px rgba(11,37,69,0.12);">
    <h2 style="color: #ffffff !important; font-size: 24px; font-weight: 800; margin-top: 0; margin-bottom: 12px; border-bottom: none;">Ready to Simplify Your Mollak Submissions?</h2>
    <p style="font-size: 16px; color: #e2e8f0; max-width: 650px; margin: 0 auto 22px;">Contact our RERA-approved auditing team for professional compliance support and budget approval assistance.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #ffffff; color: #0b2545 !important; padding: 12px 24px; border-radius: 6px; font-weight: 800; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(255,255,255,0.2);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: rgba(255,255,255,0.15); color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3); padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px;">✉️ Email Us</a></div>
</div>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUF Chartered Accountants - Mollak Services UAE",
      "description": "RERA Service Charge Audit, Owner Balance Verification and Compliance Support in UAE",
      "url": "https://nufca.com/mollak-audit-services-uae/",
      "telephone": "+97143258361",
      "email": "info@nufca.com",
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
          "name": "Mollak Services UAE",
          "item": "https://nufca.com/mollak-audit-services-uae/"
        }
      ]
    }
  ]
}
</script>
`;
}

async function deploySingleMollakPage() {
    console.log("🚀 Deploying improved Hero, Consultation Card, Related Services & CTA ONLY to Page ID 99212...");
    const content = buildHTML();
    const url = 'https://nufca.com/wp-json/wp/v2/pages/' + targetPageId;
    
    const payload = JSON.stringify({
        content: content,
        title: 'Mollak Audit Services in UAE | Service Charge - NUFCA'
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
                console.log('🎉 Mollak Audit Services UAE (Page ID 99212) successfully updated!');
            } else {
                console.log('Response:', data);
            }
        });
    });
    
    req.on('error', (e) => console.error('Error:', e));
    req.write(payload);
    req.end();
}

deploySingleMollakPage();
