const https = require('https');

// ONLY Target Page ID 99222 (https://nufca.com/fta-vat-audit-assistance-uae/)
const targetPageId = 99222;
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
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/" selected>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/dubai/">🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/gold-souk-dubai/">🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/abu-dhabi/">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/sharjah/">🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<!-- Hero Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 50px 24px; text-align: center; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(11,37,69,0.15);">
    <div style="display: inline-block; background: rgba(255,255,255,0.15); color: #93c5fd; padding: 5px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 0.5px;">Federal Tax Authority — Audit Defense &amp; Penalty Relief</div>
    <h1 style="font-size: 32px; font-weight: 800; color: #ffffff !important; margin: 0 0 15px; line-height: 1.25;">FTA VAT Audit Assistance in UAE</h1>
    <p style="font-size: 16px; max-width: 800px; margin: 0 auto 18px; color: #e2e8f0; line-height: 1.6;">Pre-Audit Health Checks, Form 211 Voluntary Disclosures, Penalty Waiver Applications, and Complete FTA Representation by Registered Tax Agents.</p>
    <div style="font-size: 14px; color: #bae6fd; font-weight: 600; margin-bottom: 15px;">✓ FTA Registered Tax Agents &nbsp;|&nbsp; ✓ 100% Tax Ledger Reconciliation &nbsp;|&nbsp; ✓ Form 211 Specialists &nbsp;|&nbsp; ✓ Penalty Waiver &amp; Installment Defense</div>
    <div style="margin-top: 15px; font-size: 13.5px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px;">📍 Office: 510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE &nbsp;|&nbsp; 📞 Phone: 04 325 8361 / 055-9831923</div>
</div>

<!-- Top Direct Consultation Card -->
<div style="background: #f8fafc; border: 2px solid #134074; border-radius: 10px; padding: 28px 20px; text-align: center; margin: 30px 0; box-shadow: 0 4px 15px rgba(11,37,69,0.05);">
    <h3 style="color: #0b2545; margin: 0 0 10px; font-size: 21px; font-weight: 800;">Direct Advisory Consultation</h3>
    <p style="margin: 0 auto 18px; max-width: 700px; color: #475569; font-size: 15px;">Received an FTA Audit Notification or discovered historical VAT errors? Connect directly with our FTA-registered tax agents for immediate assistance.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #134074; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(19,64,116,0.25);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: #0b2545; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(11,37,69,0.25);">✉️ Email Us</a></div>
</div>

<p>Most companies in the UAE meet their VAT obligations without ever thinking hard about them. Returns get filed, payments get made, and the topic disappears until an email arrives from the Federal Tax Authority announcing a tax audit. At that point, the question is no longer whether the business intended to comply — it is whether the records can prove it did.</p>
<p>That distinction catches out a surprising number of otherwise well-run businesses. An FTA audit is a documentary exercise. Explanations carry weight only when the paperwork behind them holds up. This guide covers how audits actually work, what the FTA examines, where companies typically come unstuck, and how voluntary disclosure and penalty relief fit into the picture.</p>

<h2>How an FTA Tax Audit Actually Begins</h2>
<p>A tax audit is the FTA's formal examination of a taxable person's records to verify that declared liabilities match reality. It is a routine supervisory power, not an accusation, and the Authority does not need a reason to exercise it.</p>
<p>In practice, businesses are usually notified in writing in advance, with the notice specifying the timing and location. Audits may be conducted at the FTA's own offices using submitted documentation, or at the taxable person's premises in the UAE. In limited circumstances the Authority can proceed without prior notice — for example where it suspects evidence may be concealed.</p>

<h3>Patterns That Attract FTA Audit Attention:</h3>
<ul>
    <li>Repeated refund positions, where input VAT consistently exceeds output VAT</li>
    <li>Sharp swings in reported turnover that do not match the industry or the company's own history</li>
    <li>Persistent late filing or late payment</li>
    <li>Mismatches between VAT returns and customs import data</li>
    <li>A recent voluntary disclosure that reveals systemic rather than isolated errors</li>
    <li>Operating in a sector the FTA is reviewing as a whole</li>
</ul>
<p>None of these guarantees an audit, and their absence guarantees nothing either. Selection can be entirely random.</p>

<h2>What the Federal Tax Authority Examines</h2>
<p>An auditor is testing whether the numbers on the return can be traced back through the accounting system to source documents, and whether the VAT treatment applied to each transaction was correct. Expect requests covering:</p>
<ul>
    <li>Filed VAT returns for the periods under review, alongside proof of payment</li>
    <li>Sales and purchase ledgers, and the ability to reconcile them to the returns</li>
    <li>Tax invoices issued and received, including simplified tax invoices where used</li>
    <li>Credit notes, debit notes and the reasons behind them</li>
    <li>Trial balance, general ledger, and financial statements</li>
    <li>Bank statements, to trace receipts and payments</li>
    <li>Import and export documentation, customs declarations, and evidence supporting zero-rating</li>
    <li>Contracts and agreements that establish the nature and place of supply</li>
    <li>The working papers behind any input tax apportionment</li>
</ul>

<div class="nufca-box-info">
    <strong>The Point Auditors Return to Most Often: Reconciliation.</strong> If revenue in the audited financial statements does not agree with the total of the VAT returns for the same period, and the business cannot explain the gap line by line, everything else in the audit becomes harder.
</div>

<h2>Record Retention: How Far Back Does This Go?</h2>
<p>UAE tax legislation requires taxable persons to retain accounting records and commercial books for a defined minimum period — generally <strong>5 years</strong> following the end of the relevant tax period, with a <strong>15-year retention requirement</strong> applying to real estate records. The FTA's ability to open an audit is likewise subject to statutory time limits, which extend in cases involving voluntary disclosure late in the period, and extend considerably further where tax evasion or failure to register is alleged.</p>

<h2>A Practical 6-Step Audit Preparation Checklist</h2>
<ol>
    <li><strong>Reconcile returns to the books:</strong> Take each filed return and tie it back to the accounting records. Compare declared standard-rated sales, zero-rated sales, exempt supplies, reverse-charge entries and recoverable input tax against the ledger. Document every difference you find.</li>
    <li><strong>Test tax invoices against legal requirements:</strong> A valid tax invoice must carry specific statutory content: the words "Tax Invoice", supplier name, address and TRN, recipient details, sequential invoice number, date of issue/supply, description of supply, unit prices, gross total, and VAT amount in AED (with Central Bank exchange rates if foreign currency).</li>
    <li><strong>Assemble the complete accounting file:</strong> General ledger, trial balance, profit and loss account, balance sheet, fixed asset register, and bank statements covering the full period in exportable format.</li>
    <li><strong>Rebuild the VAT reconciliation:</strong> Reconcile output tax per ledger to output tax declared, and input tax per ledger to input tax recovered. Look for unadjusted credit notes and manual journal entries.</li>
    <li><strong>Gather transaction evidence:</strong> Contracts, purchase orders, delivery notes, proof of export, customs exit certificates, and payment records.</li>
    <li><strong>Deal with known errors proactively:</strong> If internal review surfaces mistakes, correcting them via Form 211 before the auditor arrives reduces penalties substantially.</li>
</ol>

<h2>Where Businesses Most Often Go Wrong (7 Recurring Pitfalls)</h2>
<ul>
    <li><strong>Recovering blocked input tax:</strong> Entertainment for non-employees, personal motor vehicles, and personal expenses claimed without statutory basis.</li>
    <li><strong>Claiming input tax without compliant tax invoices:</strong> Invoices missing supplier TRN, proper tax breakdowns, or sequential numbers.</li>
    <li><strong>Misapplying zero-rating on exports:</strong> Zero-rating cross-border services or goods exports without official customs exit certificates or commercial transport documents.</li>
    <li><strong>Confusing exempt with zero-rated supplies:</strong> Failing to perform mandatory input tax apportionment calculations on mixed or exempt supplies.</li>
    <li><strong>Overlooking Reverse Charge Mechanism (RCM):</strong> Failing to self-account for imported services or cross-border software/consultancy supplies.</li>
    <li><strong>Timing errors across tax periods:</strong> Claiming input tax before holding the tax invoice or recognizing revenue in the incorrect quarterly period.</li>
    <li><strong>Compounding micro-errors:</strong> Minor misclassifications repeated over dozens of quarterly returns compounding into hundreds of thousands in assessments.</li>
</ul>

<h2>Voluntary Disclosures &amp; Form 211</h2>
<p>Form 211 is the mechanism through which a taxable person notifies the FTA of an error or omission in a previously submitted VAT return, tax assessment or refund application. It is filed through EmaraTax and requires the business to identify the affected period, state the corrected figures, and explain the nature of the error.</p>
<p>Where the error exceeds <strong>AED 10,000 in tax due</strong>, a voluntary disclosure must be submitted within 20 business days of discovery. Errors below AED 10,000 may be corrected in the subsequent VAT return.</p>

<div class="nufca-box-warning">
    <strong>Financial Timing Rule:</strong> Voluntary disclosures made before the FTA issues an audit notification benefit from lower percentage penalties. Once an audit is notified, voluntary disclosure is blocked and higher audit penalties apply.
</div>

<h2>Administrative Penalty Categories Table</h2>
<table class="nufca-table">
    <thead>
        <tr>
            <th>Violation / Non-Compliance</th>
            <th>First Violation Penalty</th>
            <th>Repeated Violation Penalty</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Late Tax Registration</strong></td>
            <td>AED 10,000</td>
            <td>AED 10,000</td>
        </tr>
        <tr>
            <td><strong>Late Return Submission</strong></td>
            <td>AED 1,000</td>
            <td>AED 2,000</td>
        </tr>
        <tr>
            <td><strong>Late Payment of Declared Tax</strong></td>
            <td>2% immediately + 4% monthly (max 300%)</td>
            <td>2% immediately + 4% monthly (max 300%)</td>
        </tr>
        <tr>
            <td><strong>Submission of Incorrect Tax Return</strong></td>
            <td>Fixed AED 1,000 + percentage penalty</td>
            <td>Fixed AED 2,000 + percentage penalty</td>
        </tr>
        <tr>
            <td><strong>Failure to Keep Required Records in Arabic</strong></td>
            <td>AED 5,000 (upon request)</td>
            <td>AED 10,000</td>
        </tr>
        <tr>
            <td><strong>Failure to Issue Compliant Tax Invoice</strong></td>
            <td>AED 2,500 per instance</td>
            <td>AED 5,000 per instance</td>
        </tr>
    </tbody>
</table>

<h2>4-Stage Penalty Waiver &amp; Instalment Process</h2>
<div class="nufca-card-step">
    <h4>Stage 1: Penalty Assessment &amp; Grounds Identification</h4>
    <p>We review the penalty notices, quantify exposures, and determine eligible grounds under Cabinet Decisions governing penalty waivers and reductions.</p>
</div>
<div class="nufca-card-step">
    <h4>Stage 2: Preparation of Justification Dossier</h4>
    <p>We assemble comprehensive legal and factual proof demonstrating reasonable excuse, absence of deliberate evasion, and corrective steps taken.</p>
</div>
<div class="nufca-card-step">
    <h4>Stage 3: Submission of Waiver / Instalment Request</h4>
    <p>We submit the formal application through the FTA EmaraTax portal to the dedicated Penalty Waiver Committee.</p>
</div>
<div class="nufca-card-step">
    <h4>Stage 4: Committee Follow-Up &amp; Settlement</h4>
    <p>We handle committee requests for additional clarifications, follow through to the decision, and structure instalment settlement plans where applicable.</p>
</div>

<h2>Frequently Asked Questions</h2>

<h3>What does FTA VAT audit assistance actually involve?</h3>
<p>It covers reviewing filed returns against the underlying accounting records, testing invoice and documentation compliance, identifying and correcting errors through the appropriate mechanism, preparing the file the FTA has requested, and drafting technical responses during the audit itself.</p>

<h3>How much notice does the FTA give before a tax audit?</h3>
<p>Notification is normally given in writing in advance of the audit, specifying when and where it will take place. In limited circumstances the Authority may proceed without prior notice, for instance where it suspects that evidence might otherwise be concealed.</p>

<h3>How far back can an FTA audit go?</h3>
<p>Statutory time limits apply, and they extend in defined circumstances — including where a voluntary disclosure is submitted near the end of the period, and substantially further where tax evasion or failure to register is alleged. Confirm the limits applicable to your case under the current Tax Procedures Law.</p>

<h3>What is Form 211 used for?</h3>
<p>Form 211 is the VAT voluntary disclosure form. It is used to notify the FTA of an error or omission in a previously submitted VAT return, tax assessment or refund application, and to submit the corrected figures with an explanation.</p>

<h3>When must a voluntary disclosure be filed?</h3>
<p>Where the error exceeds the prescribed threshold in tax due — AED 10,000 — a disclosure must be filed within the period set out in the legislation, counted from the date the error was discovered. Smaller errors may in defined circumstances be corrected in the next return instead. The rules have been amended, so check the current requirements.</p>

<h3>Can VAT penalties be reduced or cancelled?</h3>
<p>A formal application can be made to the FTA for a waiver or an instalment arrangement. It is considered by a committee against set criteria and requires a documented, credible explanation for the non-compliance together with evidence of corrective action. Approval is discretionary.</p>

<h3>What happens if we disagree with the FTA's assessment?</h3>
<p>There are formal routes to challenge an assessment, beginning with a request for reconsideration and continuing through objection and appeal. Each stage carries a strict deadline, and missing one generally forecloses the challenge.</p>

<h3>Do records need to be in Arabic?</h3>
<p>The FTA can require records and documents to be provided in Arabic, and there is a specific penalty for failing to do so on request. Businesses operating entirely in English should plan for how they would meet such a request.</p>

<h3>Is it worth engaging help if we have not been audited?</h3>
<p>Usually yes. A review conducted before an audit notice arrives allows errors to be corrected through voluntary disclosure, which typically carries lower consequences than the same error being identified by an auditor.</p>

<!-- Related Services Section -->
<div class="related-services-sec" style="background: #f8fafc; padding: 30px 24px; border-radius: 10px; margin: 40px auto; max-width: 960px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(11,37,69,0.03);">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 22px; font-weight: 800; text-align: center;">Related Services in UAE</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 15px;">
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">VAT Consultancy Services</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Corporate Tax Advisory</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Audit &amp; Assurance</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/excise-tax-services-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Excise Tax Services</a></li>
    </ul>
</div>

<!-- Closing CTA Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 45px 24px; text-align: center; border-radius: 10px; margin-top: 40px; box-shadow: 0 10px 25px rgba(11,37,69,0.12);">
    <h2 style="color: #ffffff !important; font-size: 24px; font-weight: 800; margin-top: 0; margin-bottom: 12px; border-bottom: none;">Ready to Secure Your Tax Position in UAE?</h2>
    <p style="font-size: 16px; color: #e2e8f0; max-width: 650px; margin: 0 auto 22px;">Don't wait for an FTA notice. Book a comprehensive pre-audit health check or voluntary disclosure consultation today.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #ffffff; color: #0b2545 !important; padding: 12px 24px; border-radius: 6px; font-weight: 800; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(255,255,255,0.2);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: rgba(255,255,255,0.15); color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3); padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px;">✉️ Email Us</a></div>
</div>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - FTA VAT Audit Assistance UAE",
      "url": "https://nufca.com/fta-vat-audit-assistance-uae/",
      "telephone": "+97143258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        "addressLocality": "UAE",
        "addressCountry": "AE"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does FTA VAT audit assistance actually involve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It covers reviewing filed returns against the underlying accounting records, testing invoice and documentation compliance, identifying and correcting errors through the appropriate mechanism, preparing the file the FTA has requested, and drafting technical responses during the audit itself."
          }
        },
        {
          "@type": "Question",
          "name": "How much notice does the FTA give before a tax audit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Notification is normally given in writing in advance of the audit, specifying when and where it will take place. In limited circumstances the Authority may proceed without prior notice, for instance where it suspects that evidence might otherwise be concealed."
          }
        },
        {
          "@type": "Question",
          "name": "How far back can an FTA audit go?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Statutory time limits apply, and they extend in defined circumstances — including where a voluntary disclosure is submitted near the end of the period, and substantially further where tax evasion or failure to register is alleged. Confirm the limits applicable to your case under the current Tax Procedures Law."
          }
        },
        {
          "@type": "Question",
          "name": "What is Form 211 used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Form 211 is the VAT voluntary disclosure form. It is used to notify the FTA of an error or omission in a previously submitted VAT return, tax assessment or refund application, and to submit the corrected figures with an explanation."
          }
        },
        {
          "@type": "Question",
          "name": "When must a voluntary disclosure be filed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Where the error exceeds the prescribed threshold in tax due — AED 10,000 — a disclosure must be filed within the period set out in the legislation, counted from the date the error was discovered. Smaller errors may in defined circumstances be corrected in the next return instead. The rules have been amended, so check the current requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can VAT penalties be reduced or cancelled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A formal application can be made to the FTA for a waiver or an instalment arrangement. It is considered by a committee against set criteria and requires a documented, credible explanation for the non-compliance together with evidence of corrective action. Approval is discretionary."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if we disagree with the FTA's assessment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There are formal routes to challenge an assessment, beginning with a request for reconsideration and continuing through objection and appeal. Each stage carries a strict deadline, and missing one generally forecloses the challenge."
          }
        },
        {
          "@type": "Question",
          "name": "Do records need to be in Arabic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The FTA can require records and documents to be provided in Arabic, and there is a specific penalty for failing to do so on request. Businesses operating entirely in English should plan for how they would meet such a request."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth engaging help if we have not been audited?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes. A review conducted before an audit notice arrives allows errors to be corrected through voluntary disclosure, which typically carries lower consequences than the same error being identified by an auditor."
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
          "name": "FTA VAT Audit Assistance UAE",
          "item": "https://nufca.com/fta-vat-audit-assistance-uae/"
        }
      ]
    }
  ]
}
</script>
`;
}

async function deploySingleFTAPage() {
    console.log("🚀 Deploying improved Hero, Consultation Card, Related Services & CTA ONLY to Page ID 99222...");
    const content = buildHTML();
    const url = 'https://nufca.com/wp-json/wp/v2/pages/' + targetPageId;
    
    const payload = JSON.stringify({
        content: content,
        title: 'FTA VAT Audit Assistance in UAE | Tax Audit - NUFCA'
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
                console.log('🎉 FTA VAT Audit Assistance UAE (Page ID 99222) successfully updated!');
            } else {
                console.log('Response:', data);
            }
        });
    });
    
    req.on('error', (e) => console.error('Error:', e));
    req.write(payload);
    req.end();
}

deploySingleFTAPage();
