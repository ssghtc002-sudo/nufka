const https = require('https');

const API_BASE = 'https://nufca.com/wp-json/wp/v2/pages';
const AUTH_TOKEN = Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

const locations = [
  { id: 99222, name: 'UAE', slug: 'uae', url: 'https://nufca.com/fta-vat-audit-assistance-uae/', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE' },
  { id: 99223, name: 'Dubai', slug: 'dubai', url: 'https://nufca.com/fta-vat-audit-assistance-uae/dubai/', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE' },
  { id: 99224, name: 'Gold Souk Dubai', slug: 'gold-souk-dubai', url: 'https://nufca.com/fta-vat-audit-assistance-uae/gold-souk-dubai/', office: 'Deira Gold Souk Commercial District, Dubai, UAE' },
  { id: 99225, name: 'Abu Dhabi', slug: 'abu-dhabi', url: 'https://nufca.com/fta-vat-audit-assistance-uae/abu-dhabi/', office: 'Office 2404, Tamouh Tower, 12 Al Reem St, Jazeerat Al Reem, Abu Dhabi, UAE' },
  { id: 99226, name: 'Sharjah', slug: 'sharjah', url: 'https://nufca.com/fta-vat-audit-assistance-uae/sharjah/', office: 'Hamriyah Free Zone & Industrial Logistics Hub, Sharjah, UAE' }
];

function buildContent(loc) {
  const isMain = loc.name === 'UAE';
  const locName = isMain ? 'UAE' : loc.name;

  const html = `
<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb { display: none !important; }
.loc-filter { background: #f8f9fa; padding: 15px; text-align: center; border-bottom: 1px solid #ddd; }
.loc-filter select { padding: 8px 15px; font-size: 16px; border-radius: 4px; border: 1px solid #ccc; }
.hero-section { background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: white; padding: 60px 20px; text-align: center; }
.hero-badge { display: inline-block; background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 20px; font-size: 14px; margin-bottom: 20px; }
.trust-strip { display: flex; justify-content: center; gap: 20px; margin-top: 30px; flex-wrap: wrap; }
.trust-badge { background: rgba(255,255,255,0.1); padding: 10px 20px; border-radius: 5px; }
.office-bar { background: rgba(0,0,0,0.2); padding: 10px; margin-top: 30px; font-size: 14px; }
.content-section { max-width: 900px; margin: 40px auto; padding: 0 20px; line-height: 1.6; }
.consultation-card { background: white; border: 1px solid #ddd; border-radius: 8px; padding: 30px; margin: 40px 0; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.btn { display: inline-block; padding: 12px 25px; border-radius: 5px; text-decoration: none; font-weight: bold; margin: 10px; }
.btn-whatsapp { background: #25D366; color: white; }
.btn-call { background: #0b2545; color: white; }
.btn-email { background: #134074; color: white; }
.closing-cta { background: #0b2545; color: white; padding: 40px 20px; text-align: center; margin-top: 60px; }
.callout { background: #e9ecef; border-left: 4px solid #134074; padding: 15px; margin: 20px 0; }
table { width: 100%; border-collapse: collapse; margin: 20px 0; }
th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
th { background: #0b2545; color: white; }
</style>

<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/" ${loc.slug === 'uae' ? 'selected' : ''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/dubai/" ${loc.slug === 'dubai' ? 'selected' : ''}>🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/gold-souk-dubai/" ${loc.slug === 'gold-souk-dubai' ? 'selected' : ''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/abu-dhabi/" ${loc.slug === 'abu-dhabi' ? 'selected' : ''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/fta-vat-audit-assistance-uae/sharjah/" ${loc.slug === 'sharjah' ? 'selected' : ''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<div class="hero-section">
    <div class="hero-badge">Tax Audit & Compliance</div>
    <h1>FTA VAT Audit Assistance in ${locName}: What Businesses Need to Know</h1>
    <p>Most companies in the UAE meet their VAT obligations without ever thinking hard about them. Returns get filed, payments get made, and the topic disappears until an email arrives from the Federal Tax Authority announcing a tax audit. At that point, the question is no longer whether the business intended to comply — it is whether the records can prove it did.</p>
    
    <div class="trust-strip">
        <div class="trust-badge">FTA Registered Tax Agents</div>
        <div class="trust-badge">Pre-Audit Health Checks</div>
        <div class="trust-badge">Penalty Waiver Assistance</div>
    </div>
    
    <div class="office-bar">
        📍 ${loc.office} | 📞 04 325 8361
    </div>
</div>

<div class="content-section">
    <p>That distinction catches out a surprising number of otherwise well-run businesses. An FTA audit is a documentary exercise. Explanations carry weight only when the paperwork behind them holds up. This guide covers how audits actually work, what the FTA examines, where companies typically come unstuck, and how voluntary disclosure and penalty relief fit into the picture.</p>

    <h2>How an FTA Tax Audit Actually Begins</h2>
    <p>A tax audit is the FTA's formal examination of a taxable person's records to verify that declared liabilities match reality. It is a routine supervisory power, not an accusation, and the Authority does not need a reason to exercise it.</p>
    <p>In practice, businesses are usually notified in writing in advance, with the notice specifying the timing and location. Audits may be conducted at the FTA's own offices using submitted documentation, or at the taxable person's premises in ${locName}. In limited circumstances the Authority can proceed without prior notice — for example where it suspects evidence may be concealed.</p>
    
    <h3>Patterns that attract attention:</h3>
    <ul>
        <li>Repeated refund positions, where input VAT consistently exceeds output VAT</li>
        <li>Sharp swings in reported turnover that do not match the industry or the company's own history</li>
        <li>Persistent late filing or late payment</li>
        <li>Mismatches between VAT returns and customs import data</li>
        <li>A recent voluntary disclosure that reveals systemic rather than isolated errors</li>
        <li>Operating in a sector the FTA is reviewing as a whole</li>
    </ul>
    <p>None of these guarantees an audit, and their absence guarantees nothing either. Selection can be entirely random.</p>

    <h2>What the Authority Examines</h2>
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

    <div class="callout">
        <strong>The point auditors return to most often: Reconciliation.</strong> If revenue in the audited financial statements does not agree with the total of the VAT returns for the same period, and the business cannot explain the gap line by line, everything else in the audit becomes harder.
    </div>

    <h2>Record Retention: How Far Back Does This Go?</h2>
    <p>UAE tax legislation requires taxable persons to retain accounting records and commercial books for a defined minimum period — generally five years following the end of the relevant tax period, with a longer retention requirement applying to real estate records. The FTA's ability to open an audit is likewise subject to statutory time limits, which extend in cases involving voluntary disclosure late in the period, and extend considerably further where tax evasion or failure to register is alleged.</p>
    <p>Because these periods and their exceptions have been amended since VAT was introduced, confirm the limits that apply to your situation against the current Tax Procedures Law and its executive regulations rather than relying on general summaries.</p>

    <div class="consultation-card">
        <h3>Need Immediate FTA Audit Support in ${locName}?</h3>
        <p>Connect directly with our FTA-registered tax agents for a confidential assessment.</p>
        <a href="https://wa.me/97142500679" class="btn btn-whatsapp">📱 WhatsApp Us</a>
        <a href="tel:043258361" class="btn btn-call">📞 Call 04 325 8361</a>
        <a href="mailto:info@nufca.com" class="btn btn-email">✉️ Email Us</a>
    </div>

    <h2>A Practical Preparation Checklist</h2>
    <p>Preparation is far easier when it begins before a notice arrives. Work through the following in order.</p>
    <ol>
        <li><strong>Reconcile returns to the books:</strong> Take each filed return and tie it back to the accounting records. Compare declared standard-rated sales, zero-rated sales, exempt supplies, reverse-charge entries and recoverable input tax against the ledger. Document every difference you find and the reason for it — an explained variance is a very different thing from an unexplained one.</li>
        <li><strong>Test your tax invoices against the legal requirements:</strong> A valid tax invoice must carry specific content, including the words identifying it as a tax invoice, supplier name, address and TRN, the recipient's details where required, a sequential invoice number, the date of issue and the date of supply where different, a description of the goods or services, the amount payable and the tax charged, and the exchange rate applied where the invoice is not in dirhams. Sample your issued invoices and, more importantly, the ones you received — recovery of input tax depends on holding a compliant document.</li>
        <li><strong>Assemble the accounting file:</strong> General ledger, trial balance, profit and loss account, balance sheet, fixed asset register, and bank statements covering the full period. Have them exportable, not just viewable.</li>
        <li><strong>Rebuild the VAT reconciliation:</strong> Reconcile output tax per the system to output tax declared, and the same for input tax. Look specifically for credit notes posted without a corresponding return adjustment, transactions recorded in the wrong period, and manual journals touching VAT control accounts.</li>
        <li><strong>Gather transaction evidence:</strong> Contracts, purchase orders, delivery notes, proof of export, customs paperwork, and payment records. Zero-rating and out-of-scope treatment are the positions most likely to be challenged, and both stand or fall on evidence.</li>
        <li><strong>Deal with known errors before the auditor finds them:</strong> If a review surfaces mistakes, correcting them proactively puts the business in a materially better position than waiting to be asked about them.</li>
    </ol>

    <h2>Where Businesses Most Often Go Wrong</h2>
    <p>The recurring findings in UAE VAT audits are rarely exotic. They cluster around a handful of issues.</p>
    <ul>
        <li><strong>Recovering input tax that was never recoverable.</strong> Entertainment provided to non-employees and certain motor vehicles available for personal use are the classic examples. Blanket recovery on all expenses is a reliable way to generate an assessment.</li>
        <li><strong>Claiming input tax without a valid document.</strong> A supplier invoice missing a TRN, or lacking the required content, is not a basis for recovery, however genuine the underlying expense.</li>
        <li><strong>Misapplying zero-rating.</strong> Exports, international transport, certain healthcare and education supplies, and qualifying medicines each carry conditions. Treating a supply as zero-rated because the customer is overseas, without holding the required evidence, is a frequent finding.</li>
        <li><strong>Confusing exempt with zero-rated.</strong> The distinction changes input tax recovery entirely. Businesses making exempt supplies may need to apportion input tax, and many discover this only under examination.</li>
        <li><strong>Overlooking the reverse charge.</strong> Imported services and goods acquired from outside the UAE frequently need to be self-accounted. Because the entry is often tax-neutral, it gets missed — but the disclosure obligation remains.</li>
        <li><strong>Timing errors.</strong> Recording supplies in the wrong tax period, or recovering input tax before the entitlement arises, creates differences that surface immediately on reconciliation.</li>
        <li><strong>Letting small errors compound.</strong> A minor misclassification repeated across thousands of transactions stops being minor. Errors identified and left uncorrected are treated less sympathetically than errors identified and disclosed.</li>
    </ul>

    <h2>Voluntary Disclosure and Form 211</h2>
    <p>Form 211 is the mechanism through which a taxable person notifies the FTA of an error or omission in a previously submitted VAT return, tax assessment or refund application. It is filed through EmaraTax and requires the business to identify the affected period, state the corrected figures, and explain the nature of the error.</p>
    <p>The framework distinguishes between larger and smaller errors. Where the error exceeds the prescribed threshold — set at AED 10,000 in tax due — a voluntary disclosure must be submitted within the period specified in the legislation, generally counted in business days from the date the error was discovered. Errors below that threshold may in defined circumstances be corrected through the next return instead, provided a subsequent return exists in which to make the adjustment.</p>
    <p>Two points are worth emphasising. First, the obligation is triggered by discovery, not by convenience — the clock starts when the business becomes aware. Second, the rules governing which errors require disclosure have been amended since VAT was introduced, including in respect of errors that do not change the tax payable. Check the current position before deciding that a correction can wait.</p>
    
    <div class="callout">
        <strong>Timing matters financially:</strong> Percentage-based penalties associated with voluntary disclosure generally increase the longer the correction is delayed, and increase again if the error is instead identified by the FTA during an audit. Disclosing early is usually the cheaper path.
    </div>

    <h2>Penalties and How Relief Works</h2>
    <p>Administrative penalties in the UAE VAT regime are set by Cabinet Decision and cover both fixed and percentage-based charges. The main categories are summarised below; specific amounts and rates have been revised more than once, so treat this as an orientation and verify current figures against the FTA's published schedule.</p>
    
    <table>
        <thead>
            <tr>
                <th>Category</th>
                <th>What it typically covers</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Late registration</td>
                <td>Failing to apply for registration once the mandatory threshold is met</td>
            </tr>
            <tr>
                <td>Late filing</td>
                <td>Submitting a VAT return after the deadline, with a higher amount for repeat occurrences</td>
            </tr>
            <tr>
                <td>Late payment</td>
                <td>An immediate percentage of unpaid tax, plus a monthly charge that accrues up to a capped ceiling</td>
            </tr>
            <tr>
                <td>Voluntary disclosure</td>
                <td>A fixed penalty plus a percentage of the tax difference, scaled by how promptly the disclosure was made</td>
            </tr>
            <tr>
                <td>Incorrect return</td>
                <td>Errors identified in a submitted return, where no valid disclosure was made</td>
            </tr>
            <tr>
                <td>Record keeping</td>
                <td>Failure to maintain required records, or to produce them in Arabic when requested</td>
            </tr>
            <tr>
                <td>Obstructing an audit</td>
                <td>Not facilitating the work of a tax auditor</td>
            </tr>
        </tbody>
    </table>

    <h3>Requesting a waiver or instalment plan</h3>
    <p>UAE law provides a route for taxable persons to apply to the FTA for administrative penalties to be waived or paid in instalments. Applications are considered by a dedicated committee against defined criteria, and the outcome turns heavily on the quality of the submission.</p>
    <p>A workable application generally involves four stages:</p>
    <ol>
        <li><strong>Establish the exact basis of the penalty.</strong> Identify which decision imposed it, for which period, and on what grounds. Applications that misstate the underlying penalty rarely succeed.</li>
        <li><strong>Build the evidential case.</strong> The Authority is looking for a genuine and documented reason for the non-compliance — system failures, incapacity of a key individual, circumstances outside the company's control — together with evidence of what was done to correct matters and prevent recurrence.</li>
        <li><strong>Submit through EmaraTax within the applicable window.</strong> Requests are made through the FTA's online portal with supporting documents attached. Deadlines apply, and late requests can be rejected on that basis alone.</li>
        <li><strong>Respond promptly to follow-up queries.</strong> The committee may request further information. Delays at this stage weaken an otherwise sound application.</li>
    </ol>
    <p>A waiver is discretionary. Approaching it as a formality, or submitting a general appeal for leniency without documentation, is the most common reason applications fail.</p>

    <h2>What Professional Audit Support Adds</h2>
    <p>Businesses generally engage a tax adviser for one of two reasons: an audit notice has arrived, or management wants to know what an auditor would find before one does. The second is considerably cheaper.</p>
    
    <h3>A pre-audit health check</h3>
    <p>A structured review of filed returns against the underlying records, testing invoice compliance, input tax recovery positions, zero-rating evidence and reverse-charge treatment. The output is a list of exposures ranked by materiality, with a remediation plan for each.</p>
    
    <h3>Correcting the past properly</h3>
    <p>Deciding whether an error requires a voluntary disclosure, correction in the next return, or no action, and preparing the disclosure so that it is complete and internally consistent. A poorly drafted Form 211 can invite scrutiny rather than close it.</p>
    
    <h3>Managing the audit itself</h3>
    <p>Assembling the requested documentation in the format the FTA expects, controlling the flow of information so responses are accurate and consistent, and drafting technical explanations where a treatment needs to be defended by reference to the legislation.</p>
    
    <h3>Handling the outcome</h3>
    <p>If an assessment is issued, there are formal routes to challenge it — reconsideration to the FTA, and beyond that the objection and appeal process — each with strict deadlines. Missing a deadline usually ends the argument regardless of its merits.</p>
    
    <h3>Fixing the process, not just the numbers</h3>
    <p>The most useful outcome of an audit is a system that will not produce the same findings again: a documented VAT treatment matrix for recurring transactions, a monthly reconciliation routine, and a review step before each return is submitted.</p>

    <h2>Staying Audit-Ready Between Audits</h2>
    <ul>
        <li>Reconcile the VAT return to the trial balance every quarter, and keep the working paper</li>
        <li>Store tax invoices so that any transaction can be located within minutes, not days</li>
        <li>Maintain a written record of the VAT treatment applied to unusual or high-value transactions, and why</li>
        <li>Review supplier invoices for compliance at the point of receipt rather than years later</li>
        <li>Keep the FTA portal contact details current so notices are not missed</li>
        <li>Assign clear internal ownership of VAT — audits go badly when nobody can answer questions about the filings</li>
    </ul>

    <h2>Closing Thoughts</h2>
    <p>An FTA audit is difficult in proportion to how much reconstruction it requires. A business that reconciles regularly, holds compliant invoices, and can explain its VAT positions by reference to evidence will find the process procedural. A business assembling three years of records under time pressure will not.</p>
    <p>If your records have never been independently reviewed, the practical next step is a scoped health check covering the open periods. It identifies what needs correcting while voluntary disclosure remains available, which is almost always the least expensive point at which to deal with an error.</p>

    <div class="callout" style="font-size: 0.9em;">
        <strong>Disclaimer:</strong> This document is general information about UAE VAT procedure and is not tax or legal advice. Thresholds, penalty amounts, deadlines and retention periods are set by legislation that is amended periodically — verify the current position with the Federal Tax Authority or a registered tax agent before acting on any point above.
    </div>

    <h2>Frequently Asked Questions</h2>
    <div class="faq-section">
        <h3>1. What does FTA VAT audit assistance actually involve?</h3>
        <p>It covers reviewing filed returns against the underlying accounting records, testing invoice and documentation compliance, identifying and correcting errors through the appropriate mechanism, preparing the file the FTA has requested, and drafting technical responses during the audit itself.</p>
        
        <h3>2. How much notice does the FTA give before a tax audit?</h3>
        <p>Notification is normally given in writing in advance of the audit, specifying when and where it will take place. In limited circumstances the Authority may proceed without prior notice, for instance where it suspects that evidence might otherwise be concealed.</p>
        
        <h3>3. How far back can an FTA audit go?</h3>
        <p>Statutory time limits apply, and they extend in defined circumstances — including where a voluntary disclosure is submitted near the end of the period, and substantially further where tax evasion or failure to register is alleged. Confirm the limits applicable to your case under the current Tax Procedures Law.</p>
        
        <h3>4. What is Form 211 used for?</h3>
        <p>Form 211 is the VAT voluntary disclosure form. It is used to notify the FTA of an error or omission in a previously submitted VAT return, tax assessment or refund application, and to submit the corrected figures with an explanation.</p>
        
        <h3>5. When must a voluntary disclosure be filed?</h3>
        <p>Where the error exceeds the prescribed threshold in tax due — AED 10,000 — a disclosure must be filed within the period set out in the legislation, counted from the date the error was discovered. Smaller errors may in defined circumstances be corrected in the next return instead. The rules have been amended, so check the current requirements.</p>
        
        <h3>6. Can VAT penalties be reduced or cancelled?</h3>
        <p>A formal application can be made to the FTA for a waiver or an instalment arrangement. It is considered by a committee against set criteria and requires a documented, credible explanation for the non-compliance together with evidence of corrective action. Approval is discretionary.</p>
        
        <h3>7. What happens if we disagree with the FTA's assessment?</h3>
        <p>There are formal routes to challenge an assessment, beginning with a request for reconsideration and continuing through objection and appeal. Each stage carries a strict deadline, and missing one generally forecloses the challenge.</p>
        
        <h3>8. Do records need to be in Arabic?</h3>
        <p>The FTA can require records and documents to be provided in Arabic, and there is a specific penalty for failing to do so on request. Businesses operating entirely in English should plan for how they would meet such a request.</p>
        
        <h3>9. Is it worth engaging help if we have not been audited?</h3>
        <p>Usually yes. A review conducted before an audit notice arrives allows errors to be corrected through voluntary disclosure, which typically carries lower consequences than the same error being identified by an auditor.</p>
    </div>
</div>

<div class="related-services-sec" style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 40px auto; max-width: 900px; border: 1px solid #e2e8f0;">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 24px;">Related Services in ${locName}</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Corporate Tax</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">VAT Consultancy</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Audit & Assurance</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/internal-audit-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Internal Audit</a></li>
    </ul>
</div>

<div class="closing-cta">
    <h2>Ready to Secure Your Tax Position in ${locName}?</h2>
    <p>Don't wait for an FTA notice. Book a pre-audit health check today.</p>
    <a href="https://wa.me/97142500679" class="btn btn-whatsapp">📱 Chat on WhatsApp</a>
    <a href="tel:043258361" class="btn btn-call">📞 Call 04 325 8361</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - FTA VAT Audit Assistance ${locName}",
      "url": "${loc.url}",
      "telephone": "+97143258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "${loc.office.split(',')[0]}",
        "addressLocality": "${locName}",
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
          "name": "FTA VAT Audit Assistance ${locName}",
          "item": "${loc.url}"
        }
      ]
    }
  ]
}
</script>
`;

  return html;
}

async function updatePage(loc) {
  const content = buildContent(loc);
  const isMain = loc.name === 'UAE';
  const seoTitle = isMain ? "FTA VAT Audit Assistance in UAE | Tax Audit - NUFCA" : `FTA VAT Audit Assistance in ${loc.name} | Tax Audit - NUFCA`;
  
  const payload = JSON.stringify({
    content: content,
    title: seoTitle
  });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + AUTH_TOKEN
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(`${API_BASE}/${loc.id}`, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ Successfully updated ${loc.name} (ID: ${loc.id})`);
          resolve(data);
        } else {
          console.error(`❌ Failed to update ${loc.name} (ID: ${loc.id}): ${res.statusCode}`);
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (e) => {
      console.error(`❌ Request error for ${loc.name}: ${e.message}`);
      reject(e);
    });

    req.write(payload);
    req.end();
  });
}

async function run() {
  console.log('Starting FTA VAT Audit Assistance updates...');
  for (const loc of locations) {
    try {
      await updatePage(loc);
    } catch (err) {
      console.error(err);
    }
  }
  console.log('Done.');
}

run();
