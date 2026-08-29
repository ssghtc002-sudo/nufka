const https = require('https');

const locations = [
    { id: 99001, name: 'UAE', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE' },
    { id: 99101, name: 'Dubai', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE' },
    { id: 99102, name: 'Gold Souk Dubai', office: 'Deira Gold Souk Commercial District, Dubai, UAE' },
    { id: 99103, name: 'Abu Dhabi', office: 'Office 2404, Tamouh Tower, 12 Al Reem St, Jazeerat Al Reem, Abu Dhabi, UAE' },
    { id: 99104, name: 'Sharjah', office: 'Hamriyah Free Zone & Industrial Logistics Hub, Sharjah, UAE' }
];

const authHeader = 'Basic ' + Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

function generateHTML(loc) {
    const isMain = loc.name === 'UAE';
    const locationName = isMain ? 'UAE' : loc.name;
    const html = `
<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb {
    display: none !important;
}
.hero-sec { background: linear-gradient(to right, #0b2545, #134074); color: #fff; padding: 50px 20px; text-align: center; }
.contact-card { background: #f8f9fa; padding: 20px; border: 1px solid #ddd; margin: 20px 0; text-align: center; }
.btn { display: inline-block; padding: 10px 20px; background: #134074; color: #fff; text-decoration: none; margin: 5px; border-radius: 5px; }
.cta-sec { background: #0b2545; color: #fff; padding: 40px; text-align: center; margin-top: 40px; }
.doc-content { padding: 20px; max-width: 900px; margin: auto; }
</style>

<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/corporate-tax-in-uae/" \${loc.name === 'UAE' ? 'selected' : ''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/dubai/" \${loc.name === 'Dubai' ? 'selected' : ''}>🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" \${loc.name === 'Gold Souk Dubai' ? 'selected' : ''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/abu-dhabi/" \${loc.name === 'Abu Dhabi' ? 'selected' : ''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/sharjah/" \${loc.name === 'Sharjah' ? 'selected' : ''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<div class="hero-sec">
    <div class="eyebrow">Federal Decree-Law No. 47 of 2022 - Now In Force</div>
    <h1>Corporate Tax Consultants in ${locationName} Who Handle the Filing, Not Just the Advice</h1>
    <p>Registration, taxable income computation, free zone QFZP assessment, transfer pricing documentation and return filing - delivered by qualified UAE tax advisors before your nine-month deadline, not after it.</p>
    <div class="trust-strip">
        <p>✓ FTA-registered tax agents | ✓ 500+ UAE entities onboarded | ✓ Mainland, free zone and multinational groups | ✓ Response within one working day</p>
    </div>
    <div class="office-address">
        <p>📍 Office: ${loc.office} | 📞 04 325 8361 / 055-9831923</p>
    </div>
</div>

<div class="contact-card">
    <h3>Get Your Corporate Tax Position Reviewed</h3>
    <p>Send your details and a consultant will come back with your registration status, applicable rate and next filing date. No cost, no obligation.</p>
    <a class="btn" href="https://wa.me/97142500679">WhatsApp Us</a>
    <a class="btn" href="tel:043258361">Call 04 325 8361</a>
    <a class="btn" href="mailto:info@nufca.com">Email Us</a>
</div>

<div class="doc-content">
    <h2>The UAE Is No Longer a Zero-Tax Jurisdiction</h2>
    <p>For decades, the pitch for setting up in ${locationName} was simple: no corporate tax. That ended with Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses, which introduced a federal corporate tax applying to financial years beginning on or after 1 June 2023.</p>
    <p>A company with a calendar financial year entered its first tax period on 1 January 2024. A company with a June year-end entered it a full seven months earlier.</p>
    <p>The law is not punitive by international standards - the headline rate of 9% remains one of the lowest anywhere - but it is administratively demanding.</p>
    <p>Every taxable person must register with the Federal Tax Authority, maintain accounting records to a standard that supports a tax computation, determine taxable income under statutory adjustment rules, assess whether related-party dealings meet the arm’s length principle, and file a return within nine months of the end of the tax period.</p>
    <p>Missing any of those steps carries a penalty, and the penalties apply whether or not any tax is actually due.</p>
    <p>This is where most businesses discover the gap between having an accountant and having a corporate tax consultant.</p>
    <p>Bookkeeping produces financial statements. Corporate tax compliance requires a separate technical exercise on top of them - and one where the errors are expensive and often invisible until the FTA asks a question.</p>

    <h2>The Rates: 0%, 9% and 15% Explained</h2>
    <p>The UAE operates a tiered structure, and understanding which tier applies is the single most common source of confusion we resolve.</p>
    
    <h3>0% corporate tax rate</h3>
    <p>The 0% rate applies to taxable income up to AED 375,000. It also applies to the Qualifying Income of a Qualifying Free Zone Person.</p>
    <p>This is a genuine nil rate applied to the first slice of taxable income, not an exemption from the corporate tax regime.</p>
    <p>A business earning AED 500,000 in taxable income pays nothing on the first AED 375,000 and 9% on the remaining AED 125,000. Its resulting corporate tax liability would be AED 11,250.</p>
    <p>Being below the AED 375,000 threshold does not remove the obligation to register and file.</p>
    
    <h3>9% corporate tax rate</h3>
    <p>The standard 9% rate applies to taxable income above AED 375,000.</p>
    <p>It applies to mainland companies, non-qualifying free zone income, free zone entities that do not satisfy the Qualifying Free Zone Person conditions, and UAE permanent establishments of foreign companies.</p>
    
    <h3>15% Domestic Minimum Top-up Tax</h3>
    <p>A 15% Domestic Minimum Top-up Tax applies to multinational enterprise groups with consolidated global revenues of at least EUR 750 million in at least two of the four preceding financial years.</p>
    <p>It applies to financial years starting on or after 1 January 2025.</p>
    <p>The measure is aligned with the OECD Pillar Two framework. For groups that fall within its scope, the UAE’s 9% headline rate is only the starting point of the analysis.</p>

    <h2>Small Business Relief</h2>
    <p>Under Ministerial Decision No. 73 of 2023, a resident taxable person with revenue of AED 3 million or less in the current and all previous relevant tax periods may elect to be treated as having no taxable income.</p>
    <p>The relief is available for tax periods ending on or before 31 December 2026.</p>
    <p>Small Business Relief must be claimed through an election in the corporate tax return. It is not automatic.</p>
    <p>It is not available to free zone persons claiming the 0% qualifying rate or to members of large multinational groups.</p>

    <h2>Taxable Income Is Not Accounting Profit</h2>
    <p>Taxable income begins with accounting profit but is adjusted under the corporate tax rules.</p>
    <p>Potential adjustments include:</p>
    <ul>
        <li>Unrealised gains and losses.</li>
        <li>Exempt income, including qualifying dividends and gains covered by the participation exemption.</li>
        <li>Non-deductible expenditure.</li>
        <li>Interest expenses affected by the general interest deduction limitation, which is broadly based on 30% of adjusted EBITDA and is subject to a de minimis threshold.</li>
        <li>Entertainment expenditure, which is generally restricted to a 50% deduction.</li>
        <li>Transfer pricing adjustments.</li>
    </ul>
    <p>Tax losses may generally be carried forward indefinitely. However, they can normally offset only up to 75% of taxable income in a later tax period and remain subject to applicable continuity-of-ownership conditions.</p>

    <h2>Free Zone Companies: The QFZP Conditions Most Businesses Fail</h2>
    <p>Free zone companies can retain a 0% corporate tax rate, but only on Qualifying Income and only while they satisfy the conditions for Qualifying Free Zone Person status.</p>
    <p>This is the area where we see the most misplaced confidence.</p>
    <p>A trade licence issued by a free zone authority does not, by itself, confer Qualifying Free Zone Person status.</p>
    <p>To be treated as a Qualifying Free Zone Person under Article 18 of the Decree-Law and the supporting Cabinet and Ministerial Decisions, an entity must satisfy all the relevant conditions.</p>
    
    <h3>Maintain Adequate Substance in the Free Zone</h3>
    <p>Core income-generating activities must be conducted in a free zone.</p>
    <p>The entity must maintain adequate assets, an adequate number of qualified full-time employees and adequate operating expenditure in relation to the activities it carries out.</p>
    <p>Outsourcing may be permitted within a free zone, but the entity must be able to demonstrate adequate supervision of the outsourced activities.</p>
    
    <h3>Derive Qualifying Income</h3>
    <p>Qualifying Income can include income from transactions with other free zone persons where the recipient is the beneficial recipient of the relevant goods or services.</p>
    <p>It can also include income derived from Qualifying Activities conducted with a free zone person or another person.</p>
    <p>Qualifying Activities can include:</p>
    <ul>
        <li>Manufacturing of goods or materials.</li>
        <li>Processing of goods or materials.</li>
        <li>Holding shares and other securities for investment purposes.</li>
        <li>Ownership, management and operation of ships.</li>
        <li>Reinsurance services.</li>
        <li>Fund management services.</li>
        <li>Wealth and investment management services.</li>
        <li>Headquarter services provided to related parties.</li>
        <li>Treasury and financing services provided to related parties.</li>
        <li>Financing and leasing of aircraft.</li>
        <li>Distribution of goods or materials in or from a Designated Zone.</li>
        <li>Logistics services.</li>
    </ul>
    
    <h3>Avoid Excluded Activities</h3>
    <p>Excluded Activities can include:</p>
    <ul>
        <li>Transactions with natural persons, subject to limited exceptions.</li>
        <li>Banking activities.</li>
        <li>Most insurance activities.</li>
        <li>Most financing and leasing activities.</li>
        <li>Ownership or exploitation of immovable property, other than qualifying commercial property located in a free zone and transacted with another free zone person.</li>
    </ul>

    <h3>Do Not Elect Into the Standard Corporate Tax Regime</h3>
    <p>A free zone entity that elects to be subject to the standard corporate tax regime cannot claim the 0% rate as a Qualifying Free Zone Person for the relevant period.</p>
    
    <h3>Comply With Transfer Pricing Requirements</h3>
    <p>The entity must comply with the arm’s length principle for transactions with Related Parties and Connected Persons.</p>
    <p>It must also maintain the required transfer pricing documentation.</p>

    <h3>Satisfy the De Minimis Requirement</h3>
    <p>Non-qualifying revenue must not exceed the lower of:</p>
    <ul>
        <li>5% of the entity’s total revenue; or</li>
        <li>AED 5 million.</li>
    </ul>
    
    <h3>Prepare Audited Financial Statements</h3>
    <p>A Qualifying Free Zone Person must prepare audited financial statements in accordance with the applicable corporate tax requirements.</p>
    
    <h3>The Five-Period Consequence</h3>
    <div style="background:#fff3cd; padding:15px; border-left:4px solid #ffc107; margin-bottom:20px;">
        <p>Breaching the de minimis threshold or another Qualifying Free Zone Person condition can cause an entity to lose its QFZP status from the beginning of the relevant tax period.</p>
        <p>It will also remain disqualified for the following four tax periods.</p>
        <p>That means one breach can expose the entity to the standard corporate tax regime for five tax periods in total.</p>
        <p>A single mishandled mainland income stream can therefore convert five years of income from a potential 0% rate to the standard corporate tax rates.</p>
    </div>
    
    <p>Even a compliant Qualifying Free Zone Person pays 9% on any non-qualifying taxable income it earns. The 0% rate is not a blanket exemption covering every income stream of the entity.</p>
    <p>Our free zone work typically begins with a revenue-stream mapping exercise.</p>
    <p>Every income line is tested against the Qualifying Activities and Excluded Activities rules. We calculate the available de minimis headroom and identify substance or documentation gaps while there is still time to correct them before the end of the financial year.</p>

    <h2>Transfer Pricing and the Master File Requirement</h2>
    <p>Article 34 requires transactions with Related Parties and Connected Persons to satisfy the arm’s length standard.</p>
    <p>Article 55 imposes transfer pricing documentation obligations.</p>
    <p>The UAE has adopted the OECD’s three-tier transfer pricing documentation model, and the applicable thresholds matter.</p>
    <p>Under Ministerial Decision No. 97 of 2023, a taxable person must maintain both a Master File and a Local File where either of the following conditions applies:</p>
    <ul>
        <li>Its revenue in the relevant tax period is AED 200 million or more.</li>
        <li>It is a constituent entity of a multinational group with total consolidated group revenue of AED 3.15 billion or more in the relevant tax period.</li>
    </ul>
    <p>Both files must be submitted to the Federal Tax Authority within 30 days of a request.</p>
    <p>Thirty days is not enough time to build reliable transfer pricing documentation from scratch. Credible groups prepare their documentation contemporaneously rather than waiting for an FTA request.</p>

    <h3>Master File</h3>
    <p>The Master File provides a group-level overview.</p>
    <p>It should cover the group’s organisational structure, its businesses and key value drivers, its intangible assets and research and development arrangements, its intercompany financial activities, and its financial and tax positions.</p>
    <p>It may also include details of relevant advance pricing agreements.</p>
    
    <h3>Local File</h3>
    <p>The Local File focuses specifically on the UAE taxable person.</p>
    <p>It should cover the entity’s management structure, controlled transactions with related parties, functional analysis, the selected transfer pricing methodology and the benchmarking or economic analysis used to support the pricing.</p>

    <h3>Transfer Pricing Disclosure Form</h3>
    <p>A transfer pricing disclosure form may need to be filed with the corporate tax return where transactions with Related Parties and Connected Persons exceed the prescribed thresholds.</p>
    
    <h3>Country-by-Country Reporting</h3>
    <p>Country-by-Country Reporting continues to apply to qualifying multinational groups at the AED 3.15 billion consolidated group revenue level.</p>

    <h3>Connected Persons</h3>
    <p>Connected Persons can include owners, directors, officers and their related parties.</p>
    <p>Payments and benefits provided to Connected Persons are deductible only to the extent that they correspond to the market value of the service or benefit received by the business.</p>
    <p>Owner and director remuneration that has never been benchmarked is one of the most frequently adjusted items we encounter during corporate tax health checks.</p>

    <h2>What Our Corporate Tax Consultants in ${locationName} Deliver</h2>
    
    <h3>1. Corporate Tax Registration</h3>
    <p>We assess your taxable person status, prepare and submit the registration application through EmaraTax, and confirm your Corporate Tax Registration Number and first tax period.</p>
    
    <h3>2. Tax Computation and Return Filing</h3>
    <p>We convert audited or management accounts into a compliant taxable income computation.</p>
    <p>The work includes a complete schedule of statutory adjustments, elections, exemptions and reliefs, followed by submission of the corporate tax return within the applicable nine-month deadline.</p>

    <h3>3. Free Zone QFZP Assessment</h3>
    <p>We test revenue streams, monitor the de minimis threshold, assess substance and prepare a written corporate tax position paper that can be presented to an auditor or the Federal Tax Authority.</p>

    <h3>4. Transfer Pricing</h3>
    <p>Our transfer pricing services include:</p>
    <ul>
        <li>Related-party transaction mapping.</li>
        <li>Transfer pricing method selection.</li>
        <li>Benchmarking studies.</li>
        <li>Master File preparation.</li>
        <li>Local File preparation.</li>
        <li>Transfer pricing disclosure form support.</li>
        <li>Intercompany agreement drafting.</li>
    </ul>

    <h3>5. Tax Group Formation</h3>
    <p>We review eligibility under the 95% ownership requirement, assess the mechanics of consolidation and determine whether forming a corporate tax group would genuinely improve the group’s position.</p>

    <h3>6. Health Checks and Second Opinions</h3>
    <p>We independently review filed corporate tax returns, existing computations or in-house tax positions.</p>
    <p>You receive a prioritised list of errors, risks and recommended remedial actions.</p>

    <h3>7. Ongoing Corporate Tax Advisory</h3>
    <p>Our ongoing advisory services can cover:</p>
    <ul>
        <li>Business and group restructuring.</li>
        <li>Permanent establishment risk.</li>
        <li>Cross-border payments.</li>
        <li>Double tax treaty relief.</li>
        <li>Foreign tax credits.</li>
        <li>Corporate tax elections.</li>
        <li>Related-party arrangements.</li>
        <li>Changes to free zone activities or revenue streams.</li>
    </ul>

    <h2>Deadlines and Penalties</h2>
    <div style="background:#f8d7da; padding:15px; border-left:4px solid #dc3545; margin-bottom:20px;">
        <p>Corporate tax registration deadlines are established by Federal Tax Authority decisions and can vary according to the date on which an entity’s licence was issued.</p>
        <p>Late corporate tax registration can attract an administrative penalty of AED 10,000.</p>
        <p>Corporate tax returns and any resulting tax payments are generally due within nine months of the end of the relevant tax period.</p>
        <p>Late filing penalties accrue monthly and increase after the first year.</p>
        <p>Additional penalties can apply for record-keeping failures, incorrect tax returns and errors in voluntary disclosures.</p>
        <p>Corporate tax records must generally be retained for seven years.</p>
        <p>If you are unregistered, unsure of your free zone status or approaching a filing deadline without a completed tax computation, the cost of acting now is materially lower than the cost of correcting the position later.</p>
    </div>

    <h2>Corporate Tax in the UAE - Frequently Asked Questions</h2>
    
    <h3>1. What is Federal Decree-Law No. 47 of 2022?</h3>
    <p>Federal Decree-Law No. 47 of 2022 is the UAE’s corporate tax law, formally titled the Federal Decree-Law on the Taxation of Corporations and Businesses.</p>
    <p>It introduced a federal corporate tax on business profits for financial years beginning on or after 1 June 2023.</p>
    <p>The law is supported by Cabinet Decisions, Ministerial Decisions and Federal Tax Authority guidance that provide the detailed operational rules.</p>
    
    <h3>2. What are the UAE corporate tax rates?</h3>
    <p>The UAE applies a 0% rate to taxable income up to AED 375,000 and a 9% rate to taxable income above that threshold.</p>
    <p>A 0% rate may also apply to the Qualifying Income of a Qualifying Free Zone Person.</p>
    <p>A 15% Domestic Minimum Top-up Tax applies to multinational groups with consolidated global revenues of at least EUR 750 million in at least two of the four preceding financial years.</p>
    <p>The Domestic Minimum Top-up Tax applies to financial years starting on or after 1 January 2025.</p>
    
    <h3>3. Do I need to register if my profit is below AED 375,000?</h3>
    <p>Yes. The AED 375,000 threshold determines the corporate tax rate applied to taxable income. It does not determine whether a taxable person falls within the corporate tax regime.</p>
    <p>Every taxable person must register with the Federal Tax Authority, obtain a Corporate Tax Registration Number and file an annual corporate tax return, even where the resulting liability is nil.</p>

    <h3>4. Are free zone companies exempt from corporate tax in the UAE?</h3>
    <p>No. A free zone company may access a 0% rate on its Qualifying Income if it satisfies all the Qualifying Free Zone Person conditions.</p>
    <p>It pays 9% on any non-qualifying taxable income above the applicable threshold.</p>
    <p>Holding a free zone licence does not, by itself, confer Qualifying Free Zone Person status.</p>

    <h3>5. What are the QFZP conditions?</h3>
    <p>The main Qualifying Free Zone Person conditions include:</p>
    <ul>
        <li>Maintaining adequate substance in a free zone.</li>
        <li>Deriving Qualifying Income.</li>
        <li>Not electing to be subject to the standard corporate tax regime.</li>
        <li>Complying with the arm’s length principle.</li>
        <li>Maintaining the required transfer pricing documentation.</li>
        <li>Satisfying the de minimis requirement.</li>
        <li>Preparing audited financial statements.</li>
    </ul>
    <p>Under the de minimis requirement, non-qualifying revenue must not exceed the lower of 5% of total revenue or AED 5 million.</p>

    <h3>6. What happens if a free zone company breaches the de minimis threshold?</h3>
    <p>The company can cease to be a Qualifying Free Zone Person from the beginning of the relevant tax period.</p>
    <p>It will remain disqualified for the following four tax periods.</p>
    <p>Its income may therefore be taxed under the standard corporate tax rules for five tax periods in total.</p>

    <h3>7. Who must prepare a transfer pricing Master File and Local File?</h3>
    <p>A taxable person must maintain a Master File and Local File where:</p>
    <ul>
        <li>Its revenue is AED 200 million or more in the relevant tax period; or</li>
        <li>It is a constituent entity of a multinational group with consolidated group revenue of AED 3.15 billion or more in the relevant tax period.</li>
    </ul>
    <p>Both documents must be provided to the Federal Tax Authority within 30 days of a request.</p>

    <h3>8. When is the corporate tax return due?</h3>
    <p>A corporate tax return and the related tax payment are generally due within nine months of the end of the relevant tax period.</p>
    <p>For a financial year ending on 31 December 2025, the return and any corporate tax payment are due by 30 September 2026.</p>

    <h3>9. What is Small Business Relief?</h3>
    <p>Small Business Relief is an election available to qualifying resident taxable persons with revenue of AED 3 million or less.</p>
    <p>Where the election is validly made, the taxable person is treated as having no taxable income for the relevant period.</p>
    <p>The relief applies to tax periods ending on or before 31 December 2026.</p>
    <p>It must be elected in the corporate tax return and is not automatic.</p>
    <p>It is not available to Qualifying Free Zone Persons or members of large multinational groups that fall within the relevant exclusions.</p>
    
    <h3>10. What penalties apply for corporate tax non-compliance?</h3>
    <p>Potential administrative penalties include:</p>
    <ul>
        <li>AED 10,000 for late corporate tax registration.</li>
        <li>Monthly penalties for late filing.</li>
        <li>Penalties for late payment.</li>
        <li>Penalties for failing to maintain adequate records.</li>
        <li>Penalties for filing incorrect tax returns.</li>
        <li>Penalties connected with errors in voluntary disclosures.</li>
    </ul>
    <p>The exact exposure depends on the nature and duration of the non-compliance.</p>

    <h3>11. Is there withholding tax on payments out of the UAE?</h3>
    <p>The UAE currently applies a 0% withholding tax rate to domestic and cross-border payments that fall within the scope of the corporate tax withholding provisions.</p>
    <p>No separate withholding tax registration or periodic withholding tax filing is currently required.</p>
    
    <h3>12. Do I need a corporate tax consultant, or can my accountant handle it?</h3>
    <p>Accounting produces the financial statements used as the starting point for a corporate tax computation.</p>
    <p>Corporate tax compliance is a separate technical exercise involving statutory adjustments, elections, exemptions, free zone qualification analysis, related-party rules and transfer pricing.</p>
    <p>Where a business has related-party transactions, free zone income, Connected Person payments or cross-border structures, specialist corporate tax advice materially reduces the risk of an adjustment during an FTA review.</p>

</div>

<div class="related-services-sec" style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 40px auto; max-width: 900px; border: 1px solid #e2e8f0;">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 24px;">Related Services in ${locationName}</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">VAT Consultancy</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Audit & Assurance</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/excise-tax-services-in-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">Excise Tax</a></li>
        <li style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><a href="https://nufca.com/fta-vat-audit-assistance-uae/" style="color: #134074; text-decoration: none; font-weight: 600;">FTA VAT Audit</a></li>
    </ul>
</div>

<div class="cta-sec">
    <h2>Still have questions? Speak to a corporate tax consultant in ${locationName} - your first consultation is free.</h2>
    <a class="btn" href="https://wa.me/97142500679">WhatsApp Us</a>
    <a class="btn" href="tel:043258361">Call 04 325 8361</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - Corporate Tax Consultants ${locationName}",
      "telephone": "+97143258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "${loc.office}"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Federal Decree-Law No. 47 of 2022?", "acceptedAnswer": { "@type": "Answer", "text": "Federal Decree-Law No. 47 of 2022 is the UAE’s corporate tax law. It introduced a federal corporate tax on business profits for financial years beginning on or after 1 June 2023." } },
        { "@type": "Question", "name": "What are the UAE corporate tax rates?", "acceptedAnswer": { "@type": "Answer", "text": "The UAE applies a 0% rate to taxable income up to AED 375,000 and a 9% rate to taxable income above that threshold." } },
        { "@type": "Question", "name": "Do I need to register if my profit is below AED 375,000?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The AED 375,000 threshold determines the rate, not the obligation to register." } },
        { "@type": "Question", "name": "Are free zone companies exempt from corporate tax in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "No. A free zone company may access a 0% rate on its Qualifying Income if it satisfies all conditions." } },
        { "@type": "Question", "name": "What are the QFZP conditions?", "acceptedAnswer": { "@type": "Answer", "text": "Maintaining adequate substance, deriving qualifying income, not electing standard rate, complying with transfer pricing, meeting de minimis." } },
        { "@type": "Question", "name": "What happens if a free zone company breaches the de minimis threshold?", "acceptedAnswer": { "@type": "Answer", "text": "The company ceases to be a Qualifying Free Zone Person for that tax period and the following four." } },
        { "@type": "Question", "name": "Who must prepare a transfer pricing Master File and Local File?", "acceptedAnswer": { "@type": "Answer", "text": "Taxable persons with revenue AED 200M+ or in a multinational group with AED 3.15B+ revenue." } },
        { "@type": "Question", "name": "When is the corporate tax return due?", "acceptedAnswer": { "@type": "Answer", "text": "Within nine months of the end of the relevant tax period." } },
        { "@type": "Question", "name": "What is Small Business Relief?", "acceptedAnswer": { "@type": "Answer", "text": "An election for resident persons with revenue AED 3M or less to be treated as having no taxable income." } },
        { "@type": "Question", "name": "What penalties apply for corporate tax non-compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Late registration AED 10,000, monthly late filing penalties, late payment and record-keeping penalties." } },
        { "@type": "Question", "name": "Is there withholding tax on payments out of the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "The UAE currently applies a 0% withholding tax rate." } },
        { "@type": "Question", "name": "Do I need a corporate tax consultant, or can my accountant handle it?", "acceptedAnswer": { "@type": "Answer", "text": "Corporate tax compliance is a separate technical exercise requiring specialized corporate tax advice." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nufca.com/" },
        { "@type": "ListItem", "position": 2, "name": "Corporate Tax UAE", "item": "https://nufca.com/corporate-tax-in-uae/" }
      ]
    }
  ]
}
</script>
`;
    return html;
}

async function run() {
    for (const loc of locations) {
        const content = generateHTML(loc);
        const url = 'https://nufca.com/wp-json/wp/v2/pages/' + loc.id;
        console.log('Deploying to', loc.name, url);
        
        const payload = JSON.stringify({
            content: content
        });
        
        try {
            await new Promise((resolve, reject) => {
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
                        console.log('Status for ' + loc.name + ':', res.statusCode);
                        resolve();
                    });
                });
                req.on('error', reject);
                req.write(payload);
                req.end();
            });
        } catch(e) {
            console.error('Error for ' + loc.name, e);
        }
    }
}
run();
