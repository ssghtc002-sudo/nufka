const https = require('https');

const pages = [
  { id: 99146, loc: 'UAE', city: 'UAE', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE' },
  { id: 99147, loc: 'Dubai', city: 'Dubai', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE' },
  { id: 99148, loc: 'Gold Souk Dubai', city: 'Gold Souk Dubai', office: 'Deira Gold Souk Commercial District, Dubai, UAE' },
  { id: 99149, loc: 'Abu Dhabi', city: 'Abu Dhabi', office: 'Office 2404, Tamouh Tower, 12 Al Reem St, Jazeerat Al Reem, Abu Dhabi, UAE' },
  { id: 99150, loc: 'Sharjah', city: 'Sharjah', office: 'Hamriyah Free Zone & Industrial Logistics Hub, Sharjah, UAE' }
];

const credentials = Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

function buildHTML(page) {
    const cityName = page.city;
    const isUAE = cityName === 'UAE';
    const locText = isUAE ? 'in the UAE' : `in ${cityName}`;
    
    const html = `
<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb {
    display: none !important;
}
.nufca-container { font-family: sans-serif; color: #333; line-height: 1.6; }
.hero-section { background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: white; padding: 60px 20px; text-align: center; }
.eyebrow { display: inline-block; background: #ff9800; color: #fff; padding: 5px 15px; border-radius: 20px; font-weight: bold; margin-bottom: 20px; font-size: 14px; }
.hero-h1 { font-size: 2.5rem; margin-bottom: 20px; color: #fff; }
.hero-sub { font-size: 1.2rem; max-width: 800px; margin: 0 auto 30px; }
.trust-badges, .office-bar { margin-top: 20px; font-size: 0.9rem; }
.content-section { max-width: 1000px; margin: 40px auto; padding: 0 20px; }
.advisory-card { background: #f8f9fa; border: 2px solid #134074; border-radius: 8px; padding: 30px; text-align: center; margin: 40px 0; }
.contact-btn { display: inline-block; padding: 12px 25px; margin: 10px; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold; }
.btn-wa { background: #25d366; }
.btn-call { background: #134074; }
.btn-email { background: #0b2545; }
.content-section h2 { color: #0b2545; margin-top: 40px; border-bottom: 2px solid #f4f4f4; padding-bottom: 10px; }
.content-section h3 { color: #134074; margin-top: 25px; }
table { width: 100%; border-collapse: collapse; margin: 20px 0; }
th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
th { background-color: #0b2545; color: white; }
.callout { background: #eef2f5; border-left: 4px solid #134074; padding: 15px; margin: 20px 0; font-style: italic; }
.cta-box { background: #0b2545; color: white; padding: 40px 20px; text-align: center; margin-top: 60px; border-radius: 8px; }
.cta-box h3 { color: white; border: none; }
</style>

<div class="nufca-container">
<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/vat-consultancy-in-uae/" \${isUAE ? 'selected' : ''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/vat-consultancy-in-uae/dubai/" \${cityName === 'Dubai' ? 'selected' : ''}>🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/vat-consultancy-in-uae/gold-souk-dubai/" \${cityName === 'Gold Souk Dubai' ? 'selected' : ''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/vat-consultancy-in-uae/abu-dhabi/" \${cityName === 'Abu Dhabi' ? 'selected' : ''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/vat-consultancy-in-uae/sharjah/" \${cityName === 'Sharjah' ? 'selected' : ''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

    <div class="hero-section">
        <div class="eyebrow">Expert VAT Advisory</div>
        <h1 class="hero-h1">VAT Consultancy Services ${locText}</h1>
        <p class="hero-sub">Registration, returns, health checks, voluntary disclosures and FTA audit support - reviewed by chartered accountants.</p>
        <div class="trust-badges">✓ Chartered Accountants ✓ FTA Compliant ✓ Expert Advisors</div>
        <div class="office-bar">📍 Office: ${page.office} | 📞 Phone: 04 325 8361 / 055-9831923</div>
    </div>

    <div class="content-section">
        <p>Filing a return on time is the easy part of VAT. The hard part happens months earlier - in how a transaction was classified, whether the invoice met FTA requirements, whether that input VAT was ever recoverable, and whether the export you zero-rated actually satisfied the conditions.</p>
        <p>By the time those decisions reach a VAT return, they have usually been repeated across hundreds of entries.</p>
        <p>Nadeem and Umendra Chartered Accountants (NUFCA) works with UAE businesses on the whole chain: registration thresholds, transaction treatment, record-keeping, input VAT recovery, import and export positions, error correction and audit readiness.</p>

        <div class="advisory-card">
            <h3>Direct Advisory Consultation</h3>
            <p>Speak directly with our VAT experts to secure your compliance.</p>
            <a href="https://wa.me/97142500679" class="contact-btn btn-wa">WhatsApp Us</a>
            <a href="tel:043258361" class="contact-btn btn-call">Call 04 325 8361</a>
            <a href="mailto:info@nufca.com" class="contact-btn btn-email">Email Us</a>
        </div>

        <h2>Why VAT Reaches Further Than the Return</h2>
        <p>VAT touches sales, purchases, contracts, pricing, invoicing, imports, exports, your accounting system and your cash flow. A single misclassification entered into the ledger does not stay in the ledger - it flows into the return submitted to the Federal Tax Authority.</p>
        <p>Which is why the answer is controls, not just a quarterly filing exercise.</p>
        
        <h3>Our VAT consultants ${locText} support businesses with:</h3>
        <ul>
            <li>VAT registration and deregistration</li>
            <li>VAT return preparation and filing</li>
            <li>Transaction-level VAT advisory</li>
            <li>VAT health checks and pre-audit reviews</li>
            <li>Input VAT recovery analysis</li>
            <li>Output VAT reconciliation</li>
            <li>Zero-rated and exempt supply assessments</li>
            <li>Reverse Charge Mechanism reviews</li>
            <li>Import and export VAT advisory</li>
            <li>Tax invoice and ERP template compliance</li>
            <li>VAT accounting and ledger reconciliation</li>
            <li>VAT211 / Form 211 Voluntary Disclosure</li>
            <li>FTA tax audit assistance</li>
            <li>VAT documentation reviews</li>
            <li>VAT training for finance teams</li>
        </ul>
        <div class="callout">The goal is not a submitted return. It is a return that is supported by the records behind it.</div>

        <h2>VAT Registration Thresholds: AED 375,000 and AED 187,500</h2>
        <p>Taxable turnover needs monitoring continuously - not once a year when the accounts are closed. The registration test runs on a rolling basis.</p>
        
        <h3>Mandatory Registration - AED 375,000</h3>
        <p>Registration is generally mandatory for a UAE-resident business where either condition is met:</p>
        <ul>
            <li>Taxable supplies and imports exceeded AED 375,000 over the previous 12 months; or</li>
            <li>Taxable supplies and imports are expected to exceed AED 375,000 in the next 30 days.</li>
        </ul>
        <div class="callout">Miss the deadline and you face administrative penalties on top of VAT that should have been charged but was not - a bill you often cannot pass back to customers who have already been invoiced.</div>

        <h3>Voluntary Registration - AED 187,500</h3>
        <p>A UAE-resident business may generally apply to register voluntarily once taxable supplies, imports or qualifying taxable expenses exceed AED 187,500.</p>
        <p>This is worth modelling rather than dismissing. A business below the mandatory threshold that pays significant VAT on its own costs may be better off registered - the recoverable input VAT can outweigh the compliance effort.</p>
        <p>We review turnover, activity mix, expenses and forecast revenue to establish which threshold applies and when.</p>

        <h2>5% Standard-Rated, 0% Zero-Rated and Exempt - The Difference That Costs Money</h2>
        <p>Zero-rated and exempt look identical from the customer’s side. The customer pays no VAT either way.</p>
        <p>From the supplier’s side they are not remotely the same.</p>

        <table>
            <thead>
                <tr>
                    <th>Treatment</th>
                    <th>Rate</th>
                    <th>What happens on the supply</th>
                    <th>Input VAT recovery</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Standard-rated</td>
                    <td>5%</td>
                    <td>VAT charged to the customer at 5% and reported as output VAT</td>
                    <td>Generally recoverable, subject to UAE VAT rules</td>
                </tr>
                <tr>
                    <td>Zero-rated</td>
                    <td>0%</td>
                    <td>Still a taxable supply, but VAT applied at 0% where conditions are met</td>
                    <td>Generally recoverable, subject to applicable rules</td>
                </tr>
                <tr>
                    <td>Exempt</td>
                    <td>Exempt</td>
                    <td>No VAT charged because the supply falls within an exemption</td>
                    <td>Input VAT directly attributable to exempt supplies is generally not recoverable</td>
                </tr>
            </tbody>
        </table>
        <p>Both standard-rated and zero-rated supplies count towards taxable turnover for registration purposes. Exempt supplies are treated differently.</p>

        <h3>Standard-rated supplies</h3>
        <p>Most goods and services supplied in the UAE carry VAT at 5% unless a specific zero-rating or exemption applies. The supplier charges the 5%, and it is reported as output VAT in the relevant return.</p>

        <h3>Zero-rated supplies</h3>
        <p>These remain taxable supplies - VAT is simply applied at 0% once every condition is satisfied. Transactions that may qualify include:</p>
        <ul>
            <li>Certain exports of goods</li>
            <li>Certain exports of services</li>
            <li>Qualifying international transportation</li>
            <li>Certain healthcare services</li>
            <li>Certain educational services</li>
            <li>Certain investment precious metals</li>
            <li>Certain newly constructed residential buildings</li>
        </ul>
        <div class="callout">An overseas customer is not, by itself, a zero-rating. The conditions and the supporting documentation both have to be in place.</div>

        <h3>Exempt supplies</h3>
        <p>Certain supplies are exempt altogether. Qualifying examples may include:</p>
        <ul>
            <li>Financial services</li>
            <li>Residential property transactions</li>
            <li>Bare land transactions</li>
            <li>Local passenger transportation</li>
        </ul>
        <p>The recovery consequence is the reason this distinction matters: input VAT directly attributable to exempt activity is generally not recoverable.</p>

        <h2>What Misclassification Actually Costs</h2>
        <p>Get the treatment wrong and the effects compound across periods:</p>
        <ul>
            <li>Output VAT underdeclared</li>
            <li>Input VAT overclaimed</li>
            <li>Returns that no longer reconcile to the ledger</li>
            <li>Tax invoices issued with the wrong treatment</li>
            <li>Cash-flow pressure when the correction lands</li>
            <li>A Voluntary Disclosure obligation</li>
            <li>FTA administrative penalties</li>
            <li>Wider exposure once an audit begins</li>
        </ul>
        <p>Two examples that appear repeatedly in practice. Applying 0% purely because the customer is overseas, without meeting the export-of-services conditions, leaves output VAT undercharged. Treating an exempt supply as zero-rated leads to input VAT being recovered where there was no entitlement.</p>
        
        <h3>When we assess a transaction, we look at:</h3>
        <ul>
            <li>The nature of the supply</li>
            <li>Place-of-supply rules</li>
            <li>Supplier and customer location</li>
            <li>Contractual terms and incoterms</li>
            <li>Import and export documentation</li>
            <li>Whether an exemption applies</li>
            <li>Whether zero-rating conditions are satisfied</li>
            <li>The input VAT recovery position</li>
            <li>How the transaction must be reported in the return</li>
        </ul>

        <h2>Our VAT Services in Detail</h2>
        <h3>1. VAT Registration</h3>
        <p>Registration requires taxable turnover to be calculated correctly and evidenced. We review:</p>
        <ul>
            <li>Taxable sales and zero-rated sales</li>
            <li>Imports</li>
            <li>Taxable expenses</li>
            <li>Forecast turnover</li>
            <li>Business activities and trade licence details</li>
            <li>Ownership structure</li>
            <li>Supporting financial records</li>
        </ul>
        <p>We then confirm whether mandatory or voluntary registration applies and prepare the information required through the FTA’s EmaraTax platform.</p>

        <h3>2. VAT Return Preparation and Filing</h3>
        <p>Registered businesses file according to their assigned tax periods. Returns and the related payment are generally due within 28 days of the end of the tax period.</p>
        <p>Our return work covers:</p>
        <ul>
            <li>Sales and purchase transactions</li>
            <li>Output VAT and recoverable input VAT</li>
            <li>Reverse Charge Mechanism entries</li>
            <li>Imports and exports</li>
            <li>Zero-rated and exempt supplies</li>
            <li>Debit and credit notes</li>
            <li>Adjustments and prior-period corrections</li>
        </ul>
        <p>Before anything is submitted, we reconcile the VAT figures back to the accounting records. Discrepancies get resolved at that stage - not after the FTA finds them.</p>

        <h3>3. VAT Health Checks</h3>
        <p>A health check is a structured review of filed returns against the records that produced them. It commonly surfaces:</p>
        <ul>
            <li>Incorrect VAT rates applied</li>
            <li>Output VAT omitted</li>
            <li>Duplicated input VAT claims</li>
            <li>Non-recoverable input VAT claimed</li>
            <li>Tax invoices that do not meet requirements</li>
            <li>Reverse charge applied incorrectly or not at all</li>
            <li>Import figures that do not reconcile to customs data</li>
            <li>Zero-rating without supporting evidence</li>
            <li>Exempt supply treatment errors</li>
            <li>Credit notes recorded incorrectly</li>
            <li>Adjustments never reported</li>
            <li>Variances between the VAT returns and the general ledger</li>
        </ul>
        <p>Where an error is found, we assess whether it can be corrected in a later return or whether a formal Voluntary Disclosure is required.</p>

        <h2>VAT211 / Form 211 Voluntary Disclosure</h2>
        <p>A Voluntary Disclosure is the mechanism for telling the FTA that previously submitted information contained a qualifying error or omission. On the FTA portal the process appears as VAT211 – Voluntary Disclosure / Tax Assessment.</p>
        <p>It may be required where a previously filed position is materially wrong - for instance where:</p>
        <ul>
            <li>Output VAT was omitted</li>
            <li>The wrong VAT rate was applied</li>
            <li>Input VAT was over-recovered</li>
            <li>Input VAT was claimed without valid supporting documents</li>
            <li>Imports were reported incorrectly</li>
            <li>A refund application contained incorrect information</li>
            <li>A return understated VAT payable or overstated recoverable VAT</li>
        </ul>
        <p>Smaller errors may be capable of correction through a subsequent return where the legal conditions are satisfied. FTA guidance applies an AED 10,000 threshold for relevant underpaid-tax errors when determining which correction route applies.</p>
        
        <h3>What a disclosure needs to establish</h3>
        <ul>
            <li>Which tax periods were affected</li>
            <li>What caused the error</li>
            <li>Which return boxes changed</li>
            <li>How the corrected figures were calculated</li>
            <li>Whether additional VAT is payable</li>
            <li>What evidence supports the correction</li>
        </ul>

        <h3>How we assist</h3>
        <ul>
            <li>Identify the affected VAT periods</li>
            <li>Quantify the error</li>
            <li>Reconcile the corrected figures</li>
            <li>Prepare the supporting calculations</li>
            <li>Draft the explanatory documentation</li>
            <li>Review the VAT211 submission content</li>
            <li>Assess likely administrative penalty exposure</li>
            <li>Support the business through follow-up FTA correspondence</li>
        </ul>
        <div class="callout">An error left running across multiple periods does not get cheaper. It multiplies.</div>

        <h2>FTA Administrative Penalties</h2>
        <p>Administrative penalties apply where VAT and Tax Procedures obligations are not met. The framework was amended by Cabinet Decision No. 129 of 2025, with the amended framework taking effect from 14 April 2026.</p>
        <p>Exposure depends on the type of violation, whether it is repeated, the amount of unpaid tax, when the correction is made, and critically whether an FTA audit has already been notified.</p>

        <table>
            <thead>
                <tr>
                    <th>Compliance issue</th>
                    <th>Penalty / treatment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Failure to provide requested records or documents in Arabic</td>
                    <td>AED 5,000</td>
                </tr>
                <tr>
                    <td>Failure to notify the FTA of required changes to registration information</td>
                    <td>AED 1,000 per violation; AED 5,000 where repeated within 24 months</td>
                </tr>
                <tr>
                    <td>Legal representative not notifying the FTA of appointment in time</td>
                    <td>AED 1,000, payable by the legal representative</td>
                </tr>
                <tr>
                    <td>Late payment of payable tax</td>
                    <td>Calculated under the applicable statutory mechanism</td>
                </tr>
                <tr>
                    <td>Submission of an incorrect tax return</td>
                    <td>Penalty exposure depends on the circumstances</td>
                </tr>
                <tr>
                    <td>Voluntary Disclosure on an incorrect return, assessment or refund</td>
                    <td>Consequences depend on timing and the applicable legislation</td>
                </tr>
                <tr>
                    <td>Failure to disclose before notification of an FTA audit</td>
                    <td>Additional penalty exposure arises</td>
                </tr>
            </tbody>
        </table>
        <div class="callout">Penalty rules change. Schedules published on older websites and blog posts are frequently out of date - verify against current FTA material before relying on any figure.</div>

        <h2>FTA VAT Audit Support</h2>
        <p>The FTA may audit a business to test whether VAT legislation has been applied correctly. An audit can reach into:</p>
        <ul>
            <li>VAT returns</li>
            <li>Sales and purchase invoices</li>
            <li>General ledger accounts and trial balances</li>
            <li>Bank records</li>
            <li>Contracts</li>
            <li>Credit notes</li>
            <li>Import, export and customs documentation</li>
            <li>Input VAT claims and supporting schedules</li>
        </ul>
        
        <h3>Our audit support includes:</h3>
        <ul>
            <li>Pre-audit VAT health checks</li>
            <li>Return-to-ledger reconciliation</li>
            <li>Review of accounting records</li>
            <li>Transaction sampling</li>
            <li>Preparation of supporting documentation</li>
            <li>Review of FTA information requests</li>
            <li>Quantification of VAT exposures</li>
            <li>Reconciliation schedules</li>
            <li>Assistance drafting responses to FTA queries</li>
            <li>Corrective action recommendations</li>
        </ul>
        <div class="callout">Organised records shorten audits. Disorganised records extend them, and extended audits tend to find more.</div>

        <h2>VAT Issues Specific to ${cityName === 'UAE' ? 'Dubai' : cityName} Businesses</h2>
        <p>${cityName === 'UAE' ? 'Dubai' : cityName} companies routinely trade across mainland UAE, free zones, designated zones, GCC markets and further afield. That mix produces recurring VAT questions around:</p>
        <ul>
            <li>Import and export of goods</li>
            <li>Export of services</li>
            <li>Designated zone transactions</li>
            <li>Mainland-to-free-zone supplies</li>
            <li>International customers and overseas suppliers</li>
            <li>Reverse Charge Mechanism obligations</li>
            <li>Real estate transactions</li>
            <li>Intercompany charges</li>
            <li>Mixed taxable and exempt activity</li>
        </ul>
        <div class="callout">A free zone address does not place a transaction outside the scope of VAT. Treatment follows the nature of the supply and whether the legislative conditions are met.</div>

        <h2>Input VAT Recovery</h2>
        <p>Registered businesses may generally recover input VAT on eligible business expenses where the conditions are satisfied. Recovery problems typically originate in:</p>
        <ul>
            <li>Entertainment expenditure</li>
            <li>Motor vehicles available for personal use</li>
            <li>Exempt business activity</li>
            <li>Mixed-use costs</li>
            <li>Supplier invoices that do not meet tax invoice requirements</li>
            <li>Missing tax invoices</li>
            <li>Timing differences</li>
            <li>Partial exemption calculations</li>
        </ul>
        <p>We review claims in both directions - the VAT being claimed that should not be, and the VAT that could have been claimed and was not.</p>

        <h2>Tax Invoice Compliance</h2>
        <p>Invoices that fall short of UAE VAT requirements create problems for the supplier and for the customer trying to recover the VAT. We check invoices for:</p>
        <ul>
            <li>Supplier details and Tax Registration Number</li>
            <li>Invoice date and sequential tax invoice number</li>
            <li>Customer information where required</li>
            <li>Description of the goods or services</li>
            <li>Taxable amount</li>
            <li>VAT rate and VAT amount</li>
            <li>Total payable</li>
        </ul>
        <p>We also review accounting and ERP invoice templates, because a template error repeats itself on every invoice until someone fixes it.</p>

        <h2>Reverse Charge Mechanism</h2>
        <p>Under the Reverse Charge Mechanism, the recipient accounts for the VAT instead of the supplier. It is most often relevant when buying goods or services from suppliers outside the UAE.</p>
        <p>Getting it wrong distorts both sides of the return - output VAT and input VAT - which is why reverse charge errors are a common health check finding. We identify which transactions require the treatment and confirm the amounts are reflected correctly.</p>

        <h2>Why Businesses Choose NUFCA</h2>
        <ul>
            <li><strong>Chartered accountants doing the VAT work.</strong> VAT compliance rests on the accounting records underneath it. We reconcile the return to the ledger rather than treating them as separate exercises.</li>
            <li><strong>Experience across sectors.</strong> We apply UAE VAT rules to real commercial transactions - trading, services, real estate, cross-border arrangements - not to textbook scenarios.</li>
            <li><strong>Support across the whole VAT lifecycle.</strong> Registration, implementation, transaction advisory, return filing, health checks, Voluntary Disclosure, deregistration and FTA audit support.</li>
            <li><strong>Recommendations you can actually implement.</strong> Invoice controls, documentation procedures, VAT account mapping, periodic reconciliations, transaction review routines and staff training.</li>
            <li><strong>Coverage across the UAE.</strong> VAT, accounting, audit and tax services for businesses in Dubai and the wider Emirates.</li>
        </ul>

        <div class="related-services-sec" style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 40px auto; max-width: 900px; border: 1px solid #e2e8f0;">
            <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 24px;">Related Services ${locText}</h3>
            <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Corporate Tax</a></li>
                <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/fta-vat-audit-assistance-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">FTA VAT Audit Assistance</a></li>
                <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/excise-tax-services-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Excise Tax</a></li>
                <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/esr-compliance-services-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">ESR Compliance</a></li>
            </ul>
        </div>

        <div class="cta-box">
            <h3>Speak to a VAT Consultant ${locText}</h3>
            <p>VAT errors are cheapest on the day they are found. Every period they survive adds to the correction.</p>
            <p>Whether the need is registration, return filing, a transaction opinion, a health check, a VAT211 Voluntary Disclosure or preparation for an FTA audit, we can help.</p>
            <p>Nadeem and Umendra Chartered Accountants<br>
            Phone: 04 325 8361<br>
            Email: info@nufca.com<br>
            Office: ${page.office}</p>
            <div style="margin-top: 20px;">
                <a href="https://wa.me/97142500679" class="contact-btn btn-wa">WhatsApp Now</a>
                <a href="tel:043258361" class="contact-btn btn-call">Call Us</a>
            </div>
        </div>

        <h2>Frequently Asked Questions</h2>
        
        <h3>What are VAT consultancy services ${locText}?</h3>
        <p>They cover the practical management of UAE VAT: registration, classifying transactions correctly, preparing and filing returns, recovering input VAT, correcting past errors through voluntary disclosure, running health checks and handling FTA tax audits.</p>
        
        <h3>What is the mandatory VAT registration threshold in the UAE?</h3>
        <p>For UAE-resident businesses, registration is generally mandatory once taxable supplies and imports exceed AED 375,000 across the previous 12 months, or where they are expected to exceed AED 375,000 in the next 30 days.</p>
        
        <h3>What is the voluntary registration threshold?</h3>
        <p>A UAE-resident business may generally apply voluntarily once qualifying taxable supplies, imports or taxable expenses exceed AED 187,500, subject to FTA requirements.</p>
        
        <h3>What is the UAE VAT rate?</h3>
        <p>The standard rate is 5%. Certain qualifying supplies are zero-rated at 0%, and specified supplies are exempt from VAT.</p>
        
        <h3>What is the difference between zero-rated and exempt?</h3>
        <p>Zero-rated supplies are still taxable supplies charged at 0%, and input VAT relating to qualifying zero-rated activity may generally be recovered. Exempt supplies are not taxable supplies, and input VAT directly attributable to them is generally not recoverable.</p>
        
        <h3>When are VAT returns due?</h3>
        <p>Returns and the associated payment are generally due within 28 days of the end of the relevant tax period, according to the tax periods assigned to the business.</p>
        
        <p><small>This page provides general information on UAE VAT and is not advice for any specific business or transaction. Thresholds, conditions, deadlines and penalties are set out in Federal Decree-Law No. 8 of 2017 on Value Added Tax, the Tax Procedures legislation and the related Cabinet and Ministerial Decisions, all of which may be amended. Please obtain advice on your own circumstances.</small></p>

    </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA VAT Consultancy ${cityName}",
      "description": "VAT Registration, Returns, Health Checks, Voluntary Disclosures and FTA Audit Support ${locText}.",
      "url": "https://nufca.com/vat-consultancy-in-uae/${isUAE ? '' : cityName.toLowerCase().replace(/ /g, '-') + '/'}",
      "telephone": "+971 4 325 8361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "${page.office.split(', Dubai')[0]}",
        "addressLocality": "${cityName}",
        "addressCountry": "AE"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are VAT consultancy services ${locText}?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They cover the practical management of UAE VAT: registration, classifying transactions correctly, preparing and filing returns, recovering input VAT, correcting past errors through voluntary disclosure, running health checks and handling FTA tax audits."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory VAT registration threshold in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For UAE-resident businesses, registration is generally mandatory once taxable supplies and imports exceed AED 375,000 across the previous 12 months, or where they are expected to exceed AED 375,000 in the next 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "What is the voluntary registration threshold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A UAE-resident business may generally apply voluntarily once qualifying taxable supplies, imports or taxable expenses exceed AED 187,500, subject to FTA requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What is the UAE VAT rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The standard rate is 5%. Certain qualifying supplies are zero-rated at 0%, and specified supplies are exempt from VAT."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between zero-rated and exempt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zero-rated supplies are still taxable supplies charged at 0%, and input VAT relating to qualifying zero-rated activity may generally be recovered. Exempt supplies are not taxable supplies, and input VAT directly attributable to them is generally not recoverable."
          }
        },
        {
          "@type": "Question",
          "name": "When are VAT returns due?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Returns and the associated payment are generally due within 28 days of the end of the relevant tax period, according to the tax periods assigned to the business."
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
          "name": "VAT Consultancy Services",
          "item": "https://nufca.com/vat-consultancy-in-uae/"
        }${isUAE ? '' : `,
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${cityName}",
          "item": "https://nufca.com/vat-consultancy-in-uae/${cityName.toLowerCase().replace(/ /g, '-')}/"
        }`}
      ]
    }
  ]
}
</script>
`;
    return html;
}

async function updatePage(page) {
    return new Promise((resolve, reject) => {
        const content = buildHTML(page);
        
        const payload = JSON.stringify({
            content: content
        });

        const options = {
            hostname: 'nufca.com',
            path: '/wp-json/wp/v2/pages/' + page.id,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + credentials,
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    console.log(`Success updating page ${page.id} (${page.loc})`);
                    resolve(true);
                } else {
                    console.error(`Failed to update page ${page.id} (${page.loc}). Status: ${res.statusCode}`);
                    console.error(data);
                    resolve(false);
                }
            });
        });

        req.on('error', (e) => {
            console.error(`Error updating page ${page.id}: ${e.message}`);
            resolve(false);
        });

        req.write(payload);
        req.end();
    });
}

async function run() {
    for (const page of pages) {
        await updatePage(page);
    }
}

run();
