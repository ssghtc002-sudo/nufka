const https = require('https');

// ONLY Target Page ID 99200 (https://nufca.com/rera-audit-uae/)
const targetPageId = 99200;
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
    <option value="https://nufca.com/rera-audit-uae/" selected>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/rera-audit-uae/dubai/">🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/rera-audit-uae/gold-souk-dubai/">🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/rera-audit-uae/abu-dhabi/">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/rera-audit-uae/sharjah/">🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<!-- Hero Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 50px 24px; text-align: center; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(11,37,69,0.15);">
    <div style="display: inline-block; background: rgba(255,255,255,0.15); color: #93c5fd; padding: 5px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 0.5px;">Dubai Land Department &amp; RERA Approved Auditors</div>
    <h1 style="font-size: 32px; font-weight: 800; color: #ffffff !important; margin: 0 0 15px; line-height: 1.25;">RERA Approved Auditors in UAE</h1>
    <p style="font-size: 16px; max-width: 800px; margin: 0 auto 18px; color: #e2e8f0; line-height: 1.6;">Escrow, Mollak and Service Charge Audit Services for Real Estate Developers, Owners Committees, and Jointly Owned Property Management Companies.</p>
    <div style="font-size: 14px; color: #bae6fd; font-weight: 600; margin-bottom: 15px;">✓ DLD &amp; RERA Approved &nbsp;|&nbsp; ✓ Mollak Registered Firm &nbsp;|&nbsp; ✓ Escrow Trust Account Audits &nbsp;|&nbsp; ✓ Law No. 8 of 2007 Compliant</div>
    <div style="margin-top: 15px; font-size: 13.5px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px;">📍 Office: 510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE &nbsp;|&nbsp; 📞 Phone: 04 325 8361 / 055-9831923</div>
</div>

<!-- Top Direct Consultation Card -->
<div style="background: #f8fafc; border: 2px solid #134074; border-radius: 10px; padding: 28px 20px; text-align: center; margin: 30px 0; box-shadow: 0 4px 15px rgba(11,37,69,0.05);">
    <h3 style="color: #0b2545; margin: 0 0 10px; font-size: 21px; font-weight: 800;">Direct Advisory Consultation</h3>
    <p style="margin: 0 auto 18px; max-width: 700px; color: #475569; font-size: 15px;">Speak directly with our RERA audit specialists for your escrow accounts, Mollak budget approvals, or service charge audit requirements.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #134074; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(19,64,116,0.25);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: #0b2545; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(11,37,69,0.25);">✉️ Email Us</a></div>
</div>

<p><strong>Nadeem and Umendra Chartered Accountants (NUFCA)</strong> works exclusively with the audit obligations that the UAE's property sector carries — developers launching off-plan projects, management companies running communities, and the jointly owned buildings themselves. Our firm appears on the Dubai Land Department’s roster of approved financial auditors, which means we can act on both halves of the regulatory picture: the escrow controls that sit behind off-plan sales, and the annual financial and service-charge audits that apply to Jointly Owned Property (JOP).</p>
<p>The work we take on ranges from escrow account audits and Mollak submission support to service-charge budget reviews, year-end final account audits and general compliance advisory. In each case the aim is the same — records that reconcile, documentation that stands up to review, and submissions that move through the Dubai Land Department and Real Estate Regulatory Agency without avoidable delay.</p>

<h2>Escrow Account Obligations for Off-Plan Developers</h2>
<p>Any developer selling units before completion in the UAE falls under <strong>Law No. 8 of 2007 on Escrow Accounts for Real Estate Development</strong>. The purpose of the framework is straightforward: money paid by buyers should be ring-fenced and spent on the project those buyers actually bought into.</p>
<p>The mechanics follow from that principle. The account is opened through an approved escrow agent and held in the name of the individual development — not the developer as a whole. One project, one account. Whatever sits in it is committed to constructing and completing that specific development.</p>
<p>Opening the account is itself a documented exercise. Among the papers required is a statement of the project’s projected costs and revenues, certified by an accredited chartered auditor.</p>

<div class="nufca-box-info">
    <strong>Regulatory Authority Oversight:</strong> Oversight continues after the account is live. The Dubai Land Department may call on escrow agents to file periodic statements setting out what has come into the account and what has gone out, and it may arrange for those statements and the underlying information to be audited. Any financing a developer raises against the project is likewise required to go into that project’s escrow account rather than anywhere else.
</div>

<div class="nufca-box-warning">
    <strong>The 5% Retention Release Rule:</strong> At the far end of the project, the law allows the escrow agent to hold back 5% of the total value of the account. That retention is released a year after the units are registered in the purchasers’ names, subject to the statutory conditions that apply.
</div>

<p>RERA has been consistent on one further point: registration of the project and the escrow arrangements must be in place before an off-plan development is marketed, and money tied to the project must not be collected outside the designated escrow account.</p>

<h2>What Our 12-Point Escrow Audit Covers</h2>
<p>Depending on the stage and size of the development, our escrow audit procedures extend across 12 comprehensive checkpoints:</p>

<div class="nufca-card-step">
    <h4>1. Bank Statements &amp; Escrow Account Activity</h4>
    <p>Complete reconciliation of bank statements and transaction activity on the project's designated escrow account.</p>
</div>

<div class="nufca-card-step">
    <h4>2. Purchaser Collections &amp; Escrow Deposits</h4>
    <p>Tracing all buyer installment payments directly through to verified escrow account bank deposits.</p>
</div>

<div class="nufca-card-step">
    <h4>3. Financing Facilities Verification</h4>
    <p>Auditing bank facilities or institutional financing drawn specifically for the project.</p>
</div>

<div class="nufca-card-step">
    <h4>4. Permitted Payments &amp; Contractor Releases</h4>
    <p>Reviewing disbursements released to main contractors, sub-contractors, and engineering consultants.</p>
</div>

<div class="nufca-card-step">
    <h4>5. Cost &amp; Revenue Ledgers Reconciliation</h4>
    <p>Reconciling project developmental costs, marketing allocations, and revenue ledgers against real expenditure.</p>
</div>

<div class="nufca-card-step">
    <h4>6. Supporting Documentation &amp; Engineer Certificates</h4>
    <p>Verifying payment certificates issued by the project engineering consultant, invoices, and verified contracts.</p>
</div>

<div class="nufca-card-step">
    <h4>7. Construction Progress Linkage</h4>
    <p>Checking construction milestone records against DLD project inspection reports to validate payout milestones.</p>
</div>

<div class="nufca-card-step">
    <h4>8. DLD &amp; Oqood Sales Register Reconciliation</h4>
    <p>Reconciling internal sales data with official Dubai Land Department Oqood registration records.</p>
</div>

<div class="nufca-card-step">
    <h4>9. Year-End Escrow Account Bank Reconciliations</h4>
    <p>Closing balance verification, unallocated receipts investigation, and bank confirmation letters.</p>
</div>

<div class="nufca-card-step">
    <h4>10. 5% Retention Account Balances</h4>
    <p>Tracking the statutory 5% completion retention held by the escrow agent and post-handover release timelines.</p>
</div>

<div class="nufca-card-step">
    <h4>11. Regulatory Exceptions &amp; Unsupported Entries</h4>
    <p>Investigating and rectifying any unsupported entries, reversals, or points of regulatory exposure.</p>
</div>

<div class="nufca-card-step">
    <h4>12. RERA &amp; DLD Audit Reporting</h4>
    <p>Preparation and submission of the certified audit reports and financial schedules required by RERA inspectors.</p>
</div>

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
<p>Service charges levied on jointly owned properties sit under RERA supervision. As the Dubai Land Department sets out, the service or usage charge budget is approved by RERA only once an approved financial auditing firm has completed the required audit.</p>

<div class="nufca-card-step">
    <h4>1. Appointing the auditor through Mollak</h4>
    <p>The management entity starts the appointment process inside the Mollak system. DLD operates dedicated services for approving an auditor to review the annual budgets and final financial accounts of a jointly owned property.</p>
</div>

<div class="nufca-card-step">
    <h4>2. Assembling the budget and supporting records</h4>
    <p>The pack supporting a service and usage charge approval draws together the detailed annual budget, proposals and evaluations of at least three tenders for each service provider, service and maintenance documentation, and an external financial audit report from a RERA-accredited auditor.</p>
</div>

<div class="nufca-card-step">
    <h4>3. Auditing individual service charge components</h4>
    <p>Our auditors work through the budget line by line — security, cleaning, maintenance, utilities, community management, insurance, master-community charges, reserve fund contributions and other costs properly chargeable to common property.</p>
</div>

<div class="nufca-card-step">
    <h4>4. Testing rates against available benchmarks</h4>
    <p>Proposed costs and rates are measured against the project’s own history and against RERA-approved service charge benchmarks published on the Dubai Service Charge Index.</p>
</div>

<div class="nufca-card-step">
    <h4>5. Issuing the report and filing through Mollak</h4>
    <p>Once the audit is complete and any material findings have been resolved, the auditor’s report and accompanying financial information are prepared for the applicable Mollak submission and RERA review.</p>
</div>

<div class="nufca-card-step">
    <h4>6. Approval and publication</h4>
    <p>After the charges clear the regulatory process, the approved figures are reflected through Mollak and the Service Charge Index, forming the legal basis on which owners are invoiced.</p>
</div>

<div class="nufca-box-warning">
    <strong>Mandatory Auditor Rotation Rule:</strong> The Dubai Land Department mandates that the same auditor may not audit the same jointly owned property project in two consecutive years for the purpose of annual budget and final-account approvals.
</div>

<h2>Why Developers and Management Companies Work With Us</h2>
<p>NUF Chartered Accountants pairs hands-on real estate audit experience with a working knowledge of how Dubai’s RERA, escrow and Mollak requirements actually operate in practice — not merely how they read on paper.</p>
<p>Few firms cover both regulatory tracks. We do: developer escrow accounts on the off-plan side, and financial and service-charge audits on the jointly owned property side. That breadth matters for clients whose portfolios straddle the two.</p>
<p>What we emphasise is unglamorous but decisive — reconciliations that hold, documentation that is complete, reporting that is transparent, and compliance issues settled before a file ever reaches the regulator rather than after.</p>

<h2>Frequently Asked Questions</h2>

<h3>What is an escrow account audit?</h3>
<p>An escrow account audit examines the funds paid by off-plan buyers into a designated project account to ensure they are strictly used for the construction and development of that specific project as per Law No. 8 of 2007.</p>

<h3>What is the 5% retention rule in escrow?</h3>
<p>According to the law, the escrow agent must hold back 5% of the total value of the account. This retention is only released one year after the units are registered in the purchasers' names, assuming all conditions are met.</p>

<h3>What is Mollak?</h3>
<p>Mollak is the Dubai Land Department's electronic platform used for regulating, monitoring, and managing the service charges and financial accounts of jointly owned properties.</p>

<h3>Can the same auditor audit a property every year?</h3>
<p>No. The Dubai Land Department mandates an auditor rotation rule, which means the same auditor may not audit the same jointly owned property project for two consecutive years for budget and final-account purposes.</p>

<!-- Related Services Section -->
<div class="related-services-sec" style="background: #f8fafc; padding: 30px 24px; border-radius: 10px; margin: 40px auto; max-width: 960px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(11,37,69,0.03);">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 22px; font-weight: 800; text-align: center;">Related Services in UAE</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 15px;">
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/mollak-audit-services-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Mollak Audit Services</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Audit &amp; Assurance</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/internal-audit-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Internal Audit &amp; Risk Review</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Corporate Tax Advisory</a></li>
    </ul>
</div>

<!-- Closing CTA Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 45px 24px; text-align: center; border-radius: 10px; margin-top: 40px; box-shadow: 0 10px 25px rgba(11,37,69,0.12);">
    <h2 style="color: #ffffff !important; font-size: 24px; font-weight: 800; margin-top: 0; margin-bottom: 12px; border-bottom: none;">Talk to Our RERA Audit Team</h2>
    <p style="font-size: 16px; color: #e2e8f0; max-width: 650px; margin: 0 auto 22px;">Need RERA approved auditors in the UAE for an escrow account, a Mollak submission or a service charge audit? Get in touch with NUFCA today.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #ffffff; color: #0b2545 !important; padding: 12px 24px; border-radius: 6px; font-weight: 800; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(255,255,255,0.2);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: rgba(255,255,255,0.15); color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3); padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px;">✉️ Email Us</a></div>
</div>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA RERA Audit Services UAE",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE"
      },
      "telephone": "+971 4 325 8361",
      "url": "https://nufca.com/rera-audit-uae/"
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
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nufca.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "RERA Audit Services in UAE",
          "item": "https://nufca.com/rera-audit-uae/"
        }
      ]
    }
  ]
}
</script>
`;
}

async function deploySingleRERAPage() {
    console.log("🚀 Deploying improved Hero, Consultation Card, Related Services & CTA ONLY to Page ID 99200...");
    const content = buildHTML();
    const url = 'https://nufca.com/wp-json/wp/v2/pages/' + targetPageId;
    
    const payload = JSON.stringify({
        content: content,
        title: 'RERA Approved Auditors in UAE | Escrow Audit - NUFCA'
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
                console.log('🎉 RERA Approved Auditors UAE (Page ID 99200) successfully updated!');
            } else {
                console.log('Response:', data);
            }
        });
    });
    
    req.on('error', (e) => console.error('Error:', e));
    req.write(payload);
    req.end();
}

deploySingleRERAPage();
