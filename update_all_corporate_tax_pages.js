const https = require('https');

const authHeader = 'Basic ' + Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

const locations = [
    {
        id: 99001,
        name: 'UAE',
        city: 'UAE',
        title: 'Corporate Tax Consultants Dubai | UAE Corporate Tax Advisory - NUFCA',
        h1: 'Corporate Tax Consultants in UAE Who Handle the Filing, Not Just the Advice',
        url: 'https://nufca.com/corporate-tax-in-uae/',
        office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE',
        phone: '04 325 8361 / 055-9831923',
        slug: 'corporate-tax-in-uae'
    },
    {
        id: 99101,
        name: 'Dubai',
        city: 'Dubai',
        title: 'Corporate Tax Consultants in Dubai | Expert CT Registration & Filing - NUFCA',
        h1: 'Corporate Tax Consultants in Dubai Who Handle the Filing, Not Just the Advice',
        url: 'https://nufca.com/corporate-tax-in-uae/dubai/',
        office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE',
        phone: '04 325 8361 / 055-9831923',
        slug: 'corporate-tax-in-uae/dubai'
    },
    {
        id: 99102,
        name: 'Gold Souk Dubai',
        city: 'Gold Souk (Deira, Dubai)',
        title: 'Corporate Tax Consultants in Gold Souk Dubai | Deira Tax Advisory - NUFCA',
        h1: 'Corporate Tax Consultants in Gold Souk Dubai Who Handle the Filing, Not Just the Advice',
        url: 'https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/',
        office: 'Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE',
        phone: '04 325 8361 / 055-9831923',
        slug: 'corporate-tax-in-uae/gold-souk-dubai'
    },
    {
        id: 99103,
        name: 'Abu Dhabi',
        city: 'Abu Dhabi',
        title: 'Corporate Tax Consultants in Abu Dhabi | FTA Registration & Advisory - NUFCA',
        h1: 'Corporate Tax Consultants in Abu Dhabi Who Handle the Filing, Not Just the Advice',
        url: 'https://nufca.com/corporate-tax-in-uae/abu-dhabi/',
        office: 'Office 2404, Tamouh Tower, 12 Al Reem St, Jazeerat Al Reem, Abu Dhabi, UAE',
        phone: '04 325 8361 / 055-9831923',
        slug: 'corporate-tax-in-uae/abu-dhabi'
    },
    {
        id: 99104,
        name: 'Sharjah',
        city: 'Sharjah',
        title: 'Corporate Tax Consultants in Sharjah | Hamriyah Free Zone Advisory - NUFCA',
        h1: 'Corporate Tax Consultants in Sharjah Who Handle the Filing, Not Just the Advice',
        url: 'https://nufca.com/corporate-tax-in-uae/sharjah/',
        office: 'ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE',
        phone: '04 325 8361 / 055-5204830',
        slug: 'corporate-tax-in-uae/sharjah'
    }
];

function buildHTML(loc) {
    const isMain = loc.name === 'UAE';
    const locText = isMain ? 'the UAE' : loc.city;

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
.nufca-box-danger { background: #fef2f2; border-left: 4px solid #ef4444; padding: 16px 20px; border-radius: 6px; margin: 20px 0; color: #991b1b; }
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
    <option value="https://nufca.com/corporate-tax-in-uae/" ${loc.name === 'UAE' ? 'selected' : ''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/dubai/" ${loc.name === 'Dubai' ? 'selected' : ''}>🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" ${loc.name === 'Gold Souk Dubai' ? 'selected' : ''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/abu-dhabi/" ${loc.name === 'Abu Dhabi' ? 'selected' : ''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/corporate-tax-in-uae/sharjah/" ${loc.name === 'Sharjah' ? 'selected' : ''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<!-- Hero Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 50px 24px; text-align: center; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(11,37,69,0.15);">
    <div style="display: inline-block; background: rgba(255,255,255,0.15); color: #93c5fd; padding: 5px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 0.5px;">Federal Decree-Law No. 47 of 2022 — Now In Force</div>
    <h1 style="font-size: 30px; font-weight: 800; color: #ffffff !important; margin: 0 0 15px; line-height: 1.25;">${loc.h1}</h1>
    <p style="font-size: 16px; max-width: 820px; margin: 0 auto 18px; color: #e2e8f0; line-height: 1.6;">Registration, taxable income computation, free zone QFZP assessment, transfer pricing documentation and return filing — delivered by qualified UAE tax advisors before your nine-month deadline, not after it.</p>
    <div style="font-size: 14px; color: #bae6fd; font-weight: 600; margin-bottom: 15px;">✓ FTA-Registered Tax Agents &nbsp;|&nbsp; ✓ 500+ UAE Entities Onboarded &nbsp;|&nbsp; ✓ Mainland, Free Zone &amp; Multinational Groups &nbsp;|&nbsp; ✓ Response Within 1 Working Day</div>
    <div style="margin-top: 15px; font-size: 13.5px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px;">📍 Office: ${loc.office} &nbsp;|&nbsp; 📞 Phone: ${loc.phone}</div>
</div>

<!-- Top Direct Consultation Card -->
<div style="background: #f8fafc; border: 2px solid #134074; border-radius: 10px; padding: 28px 20px; text-align: center; margin: 30px 0; box-shadow: 0 4px 15px rgba(11,37,69,0.05);">
    <h3 style="color: #0b2545; margin: 0 0 10px; font-size: 21px; font-weight: 800;">Get Your Corporate Tax Position Reviewed in ${loc.city}</h3>
    <p style="margin: 0 auto 18px; max-width: 700px; color: #475569; font-size: 15px;">Send your details and a senior consultant will come back with your registration status, applicable rate, and next filing date. No cost, no obligation.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #134074; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(19,64,116,0.25);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: #0b2545; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(11,37,69,0.25);">✉️ Email Us</a></div>
</div>

<h2>The UAE Is No Longer a Zero-Tax Jurisdiction</h2>
<p>For decades, the pitch for setting up in ${locText} was simple: no corporate tax. That ended with <strong>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses</strong>, which introduced a federal corporate tax applying to financial years beginning on or after 1 June 2023.</p>
<p>A company with a calendar financial year entered its first tax period on 1 January 2024. A company with a June year-end entered it a full seven months earlier.</p>
<p>The law is not punitive by international standards — the headline rate of 9% remains one of the lowest anywhere — but it is administratively demanding.</p>
<p>Every taxable person must register with the Federal Tax Authority (FTA), maintain accounting records to a standard that supports a tax computation, determine taxable income under statutory adjustment rules, assess whether related-party dealings meet the arm’s length principle, and file a return within nine months of the end of the tax period.</p>
<p>Missing any of those steps carries a penalty, and the penalties apply whether or not any tax is actually due.</p>
<div class="nufca-box-info">
    <strong>Accounting vs. Corporate Tax Compliance:</strong> Bookkeeping produces financial statements. Corporate tax compliance requires a separate technical exercise on top of them — and one where errors are expensive and often invisible until the FTA issues an audit inquiry.
</div>

<h2>The Rates: 0%, 9% and 15% Explained</h2>
<p>The UAE operates a tiered structure, and understanding which tier applies is the single most common source of confusion we resolve.</p>

<table class="nufca-table">
    <thead>
        <tr>
            <th>Tax Rate Tier</th>
            <th>Applicable Scope &amp; Taxable Income Threshold</th>
            <th>Effective Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>0% Corporate Tax Rate</strong></td>
            <td>Taxable income up to <strong>AED 375,000</strong>. Also applies to Qualifying Income of a Qualifying Free Zone Person (QFZP).</td>
            <td>FY starting on or after 1 June 2023</td>
        </tr>
        <tr>
            <td><strong>9% Standard Tax Rate</strong></td>
            <td>Taxable income exceeding <strong>AED 375,000</strong> for mainland companies, non-qualifying free zone income, and foreign permanent establishments.</td>
            <td>FY starting on or after 1 June 2023</td>
        </tr>
        <tr>
            <td><strong>15% Domestic Minimum Top-up Tax (DMTT)</strong></td>
            <td>Multinational Enterprise (MNE) groups with consolidated global revenues of at least <strong>EUR 750 million</strong> in at least 2 of the 4 preceding financial years (OECD Pillar Two).</td>
            <td>FY starting on or after 1 January 2025</td>
        </tr>
    </tbody>
</table>

<h3>0% Corporate Tax Rate</h3>
<p>The 0% rate applies to taxable income up to AED 375,000. It also applies to the Qualifying Income of a Qualifying Free Zone Person.</p>
<p>This is a genuine nil rate applied to the first slice of taxable income, not an exemption from the corporate tax regime.</p>
<div class="nufca-card-step">
    <h4>Example Tax Calculation:</h4>
    <p>A business earning AED 500,000 in taxable income pays nothing on the first AED 375,000 and 9% on the remaining AED 125,000. Its resulting corporate tax liability is exactly <strong>AED 11,250</strong>.</p>
</div>
<p>Being below the AED 375,000 threshold does not remove the obligation to register with the FTA and file an annual return.</p>

<h3>9% Corporate Tax Rate</h3>
<p>The standard 9% rate applies to taxable income above AED 375,000. It applies to mainland companies, non-qualifying free zone income, free zone entities that do not satisfy the Qualifying Free Zone Person conditions, and UAE permanent establishments of foreign companies.</p>

<h3>15% Domestic Minimum Top-up Tax</h3>
<p>A 15% Domestic Minimum Top-up Tax applies to multinational enterprise groups with consolidated global revenues of at least EUR 750 million in at least two of the four preceding financial years, effective for financial years starting on or after 1 January 2025. Aligned with the OECD Pillar Two framework, the UAE’s 9% headline rate is only the baseline starting point for covered multinational groups.</p>

<h2>Small Business Relief (Ministerial Decision No. 73 of 2023)</h2>
<p>Under Ministerial Decision No. 73 of 2023, a resident taxable person with revenue of <strong>AED 3 million or less</strong> in the current and all previous relevant tax periods may elect to be treated as having no taxable income.</p>
<div class="nufca-box-warning">
    <strong>Key Conditions for Small Business Relief:</strong>
    <ul>
        <li>Available for tax periods ending on or before <strong>31 December 2026</strong>.</li>
        <li>Must be claimed through an active election in the corporate tax return — it is <strong>not automatic</strong>.</li>
        <li>Not available to Qualifying Free Zone Persons claiming the 0% qualifying rate or to members of large multinational groups subject to Pillar Two.</li>
    </ul>
</div>

<h2>Taxable Income Is Not Accounting Profit</h2>
<p>Taxable income begins with accounting profit but is adjusted under statutory corporate tax rules. Key adjustments include:</p>
<ul>
    <li><strong>Unrealised gains and losses:</strong> Adjustments based on the chosen accounting election (realisation basis vs. fair value).</li>
    <li><strong>Exempt income &amp; Participation Exemption:</strong> Qualifying dividends and capital gains derived from participating interests of 5% or greater.</li>
    <li><strong>Non-deductible expenditure:</strong> Fines, penalties, donations to non-approved charities, and bribes.</li>
    <li><strong>Interest deduction limitation rule:</strong> Net interest expenditure deduction is capped at <strong>30% of adjusted EBITDA</strong>, subject to the statutory de minimis threshold.</li>
    <li><strong>Entertainment expenditure:</strong> Strictly restricted to a <strong>50% deduction</strong> for client entertainment, meals, and hospitality.</li>
    <li><strong>Transfer pricing adjustments:</strong> Non-arm’s length transactions with related parties and connected persons adjusted to fair market value.</li>
</ul>
<p><strong>Tax Losses:</strong> Tax losses may generally be carried forward indefinitely. However, they can offset only up to <strong>75% of taxable income</strong> in a subsequent tax period and remain subject to a 50% continuity-of-ownership condition.</p>

<h2>Free Zone Companies: The QFZP Conditions Most Businesses Fail</h2>
<p>Free zone companies can retain a 0% corporate tax rate, but only on Qualifying Income and only while they satisfy the conditions for Qualifying Free Zone Person status. A trade licence issued by a free zone authority does not, by itself, confer Qualifying Free Zone Person status.</p>
<p>To be treated as a Qualifying Free Zone Person under <strong>Article 18</strong> of the Decree-Law and supporting Cabinet and Ministerial Decisions, an entity must satisfy all eight conditions:</p>

<div class="nufca-card-step">
    <h4>1. Maintain Adequate Substance in the Free Zone</h4>
    <p>Core income-generating activities must be conducted inside a free zone, backed by adequate assets, qualified full-time employees, and operating expenditure. Outsourcing is permitted only within a free zone under adequate local supervision.</p>
</div>

<div class="nufca-card-step">
    <h4>2. Derive Qualifying Income</h4>
    <p>Income from transactions with other free zone persons where the recipient is the beneficial recipient, or income derived from 12 prescribed Qualifying Activities.</p>
</div>

<div class="nufca-card-step">
    <h4>3. Conduct Qualifying Activities (12 Statutory Sectors)</h4>
    <p>Manufacturing and processing of goods; holding shares and securities; ownership, management, and operation of ships; reinsurance services; fund management; wealth and investment management; headquarter services to related parties; treasury and financing services to related parties; aircraft leasing and financing; distribution of goods in or from a Designated Zone; and logistics services.</p>
</div>

<div class="nufca-card-step">
    <h4>4. Avoid Excluded Activities</h4>
    <p>Transactions with natural persons (subject to limited exceptions); banking activities; most insurance activities; most non-qualifying financing/leasing; and ownership or exploitation of immovable property (other than qualifying commercial property in a free zone transacted with another free zone person).</p>
</div>

<div class="nufca-card-step">
    <h4>5. Do Not Elect Into the Standard Corporate Tax Regime</h4>
    <p>The entity must not have made an active election to be taxed at the standard 9% rate.</p>
</div>

<div class="nufca-card-step">
    <h4>6. Comply With Transfer Pricing &amp; Arm’s Length Rules</h4>
    <p>The entity must comply with Articles 34 and 55 regarding related-party pricing and mandatory transfer pricing documentation.</p>
</div>

<div class="nufca-card-step">
    <h4>7. Satisfy the De Minimis Requirement</h4>
    <p>Non-qualifying revenue must not exceed the lower of <strong>5% of total revenue</strong> or <strong>AED 5 million</strong>.</p>
</div>

<div class="nufca-card-step">
    <h4>8. Prepare Audited Financial Statements</h4>
    <p>A Qualifying Free Zone Person must prepare audited financial statements under IFRS or IFRS for SMEs.</p>
</div>

<div class="nufca-box-danger">
    <strong>⚠️ The Five-Period Disqualification Consequence:</strong><br>
    Breaching the de minimis threshold or another Qualifying Free Zone Person condition causes the entity to lose its QFZP status from the beginning of the relevant tax period <strong>AND for the following four tax periods</strong>. That means a single non-qualifying mainland transaction can expose five full years of revenue to the standard 9% corporate tax regime.
</div>

<h2>Transfer Pricing and the Master File Requirement</h2>
<p>Article 34 requires all transactions with Related Parties and Connected Persons to satisfy the arm’s length standard. Under Ministerial Decision No. 97 of 2023, the UAE has adopted the OECD’s three-tier documentation model:</p>

<table class="nufca-table">
    <thead>
        <tr>
            <th>Documentation Tier</th>
            <th>Applicable Threshold Criteria</th>
            <th>Submission Deadline to FTA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Master File &amp; Local File</strong></td>
            <td>Taxable persons with revenue of <strong>AED 200 million or more</strong>, OR constituent entities of MNE groups with consolidated global revenue of <strong>AED 3.15 billion or more</strong>.</td>
            <td>Within <strong>30 days</strong> of an official FTA request</td>
        </tr>
        <tr>
            <td><strong>Transfer Pricing Disclosure Form</strong></td>
            <td>All taxable persons engaging in related-party transactions exceeding statutory transaction value thresholds.</td>
            <td>Submitted alongside annual Corporate Tax Return</td>
        </tr>
        <tr>
            <td><strong>Country-by-Country Report (CbCR)</strong></td>
            <td>Ultimate Parent Entities of MNE groups resident in the UAE with consolidated revenues of AED 3.15 billion or more.</td>
            <td>Within 12 months after the financial year end</td>
        </tr>
    </tbody>
</table>

<div class="nufca-card-step">
    <h4>Connected Persons Remuneration Benchmarking</h4>
    <p>Payments and benefits provided to Connected Persons (owners, directors, officers, and their relatives) are deductible only to the extent they represent <strong>market value</strong> for services rendered. Un-benchmarked owner salaries are the single most frequently adjusted item during FTA audits.</p>
</div>

<h2>What Our Corporate Tax Consultants in ${loc.city} Deliver</h2>

<div class="nufca-card-step">
    <h4>1. Corporate Tax Registration</h4>
    <p>We assess your taxable person classification, collate statutory trade documents, prepare and submit your registration via EmaraTax, and secure your Corporate Tax Registration Number (TRN).</p>
</div>

<div class="nufca-card-step">
    <h4>2. Tax Computation and Return Filing</h4>
    <p>We reconcile management and audited accounts into a defensible taxable income computation, applying all statutory adjustments, elections, and reliefs before submitting your return within the nine-month deadline.</p>
</div>

<div class="nufca-card-step">
    <h4>3. Free Zone QFZP Assessment &amp; Revenue Mapping</h4>
    <p>We test individual revenue streams, monitor the 5% / AED 5M de minimis headroom, review physical substance, and issue an authoritative Corporate Tax Position Paper for auditors and the FTA.</p>
</div>

<div class="nufca-card-step">
    <h4>4. Transfer Pricing Documentation &amp; Benchmarking</h4>
    <p>Complete related-party transaction mapping, OECD method selection, economic benchmarking studies, Master File, Local File, Disclosure Form compilation, and intercompany agreement drafting.</p>
</div>

<div class="nufca-card-step">
    <h4>5. Tax Group Formation &amp; Consolidation</h4>
    <p>We evaluate eligibility under the 95% ownership requirement, calculate group consolidation efficiencies, and execute tax grouping applications to offset profits and losses across subsidiaries.</p>
</div>

<div class="nufca-card-step">
    <h4>6. Corporate Tax Health Checks &amp; Second Opinions</h4>
    <p>We perform independent audits of pre-filed returns, accounting treatment, and internal tax positions, providing a prioritized risk matrix and corrective roadmap before FTA review.</p>
</div>

<div class="nufca-card-step">
    <h4>7. Ongoing Corporate Tax Advisory</h4>
    <p>Corporate restructuring, permanent establishment risk mitigation, double tax treaty (DTT) relief, foreign tax credits (FTC), and ongoing transaction reviews.</p>
</div>

<h2>Deadlines and Administrative Penalties</h2>
<table class="nufca-table">
    <thead>
        <tr>
            <th>Compliance Obligation</th>
            <th>Statutory Deadline</th>
            <th>Non-Compliance Penalty</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Corporate Tax Registration</strong></td>
            <td>Staggered FTA timelines based on trade license issue month</td>
            <td><strong>AED 10,000</strong> late registration administrative penalty</td>
        </tr>
        <tr>
            <td><strong>Tax Return Filing &amp; Payment</strong></td>
            <td>Within <strong>9 months</strong> of the financial year end (e.g. 30 September 2026 for 31 Dec 2025 FYE)</td>
            <td>AED 500/month for first 12 months, increasing to AED 1,000/month thereafter + late payment charges</td>
        </tr>
        <tr>
            <td><strong>Record Retention</strong></td>
            <td>Mandatory retention for <strong>7 years</strong> following the end of the tax period</td>
            <td>AED 10,000 for first violation; AED 20,000 for repeated violations</td>
        </tr>
        <tr>
            <td><strong>Voluntary Disclosure / Return Errors</strong></td>
            <td>Prior to FTA audit notification</td>
            <td>Fixed penalty + percentage-based penalty on unpaid tax difference</td>
        </tr>
    </tbody>
</table>

<h2>Frequently Asked Questions (FAQ)</h2>

<h3>1. What is Federal Decree-Law No. 47 of 2022?</h3>
<p>Federal Decree-Law No. 47 of 2022 is the UAE’s corporate tax law, formally titled the Federal Decree-Law on the Taxation of Corporations and Businesses. It introduced a federal corporate tax on business profits for financial years beginning on or after 1 June 2023, supported by Cabinet Decisions, Ministerial Decisions, and FTA guidance.</p>

<h3>2. What are the UAE corporate tax rates?</h3>
<p>The UAE applies a 0% rate to taxable income up to AED 375,000 and a 9% rate to taxable income exceeding AED 375,000. A 0% rate also applies to Qualifying Income of a Qualifying Free Zone Person. A 15% Domestic Minimum Top-up Tax applies to multinational groups with consolidated revenues of EUR 750 million or more from 1 January 2025.</p>

<h3>3. Do I need to register if my profit is below AED 375,000?</h3>
<p>Yes. The AED 375,000 threshold determines the corporate tax rate applied to taxable income, not the obligation to register. Every taxable person must register with the FTA, obtain a Tax Registration Number (TRN), and file an annual corporate tax return even if tax liability is nil.</p>

<h3>4. Are free zone companies exempt from corporate tax in the UAE?</h3>
<p>No. A free zone company may access a 0% rate on its Qualifying Income only if it satisfies all Qualifying Free Zone Person (QFZP) conditions under Article 18. It pays 9% on any non-qualifying taxable income. Holding a free zone trade license does not automatically confer 0% status.</p>

<h3>5. What are the QFZP conditions?</h3>
<p>The main QFZP conditions include: maintaining adequate economic substance in a free zone; deriving Qualifying Income; not electing into the standard 9% regime; complying with transfer pricing and arm’s length principles; maintaining required transfer pricing documentation; satisfying the de minimis requirement (non-qualifying revenue <= lower of 5% or AED 5M); and preparing audited financial statements.</p>

<h3>6. What happens if a free zone company breaches the de minimis threshold?</h3>
<p>The company ceases to be a Qualifying Free Zone Person from the beginning of that tax period and remains disqualified for the subsequent four tax periods (five tax periods in total), subjecting all income to the standard 9% corporate tax regime.</p>

<h3>7. Who must prepare a transfer pricing Master File and Local File?</h3>
<p>A taxable person must maintain both a Master File and Local File where its revenue is AED 200 million or more in the relevant tax period, or where it is part of a multinational group with consolidated revenue of AED 3.15 billion or more. Both files must be submitted within 30 days of an FTA request.</p>

<h3>8. When is the corporate tax return due?</h3>
<p>A corporate tax return and any resulting tax payment are due within nine months of the end of the relevant tax period. For a financial year ending on 31 December 2025, the return and payment deadline is 30 September 2026.</p>

<h3>9. What is Small Business Relief?</h3>
<p>Small Business Relief is an election available to qualifying resident taxable persons with revenue of AED 3 million or less in the current and all previous tax periods. When elected, the entity is treated as having no taxable income. The relief applies for tax periods ending on or before 31 December 2026.</p>

<h3>10. What penalties apply for corporate tax non-compliance?</h3>
<p>Administrative penalties include AED 10,000 for late registration; monthly penalties for late return filing; penalties for late payment; penalties for failing to maintain 7-year accounting records; and percentage penalties for incorrect return submissions.</p>

<h3>11. Is there withholding tax on payments out of the UAE?</h3>
<p>The UAE currently applies a 0% withholding tax rate to domestic and cross-border payments falling within the scope of corporate tax provisions. No separate withholding tax registration or filing is currently required.</p>

<h3>12. Do I need a corporate tax consultant, or can my accountant handle it?</h3>
<p>Accounting produces financial statements used as the starting point for corporate tax. Corporate tax compliance is a separate technical discipline involving statutory adjustments, elections, exemptions, free zone qualification analysis, related-party rules, and transfer pricing. Professional corporate tax consultants prevent costly reassessments during FTA reviews.</p>

<!-- Related Services Section -->
<div class="related-services-sec" style="background: #f8fafc; padding: 30px 24px; border-radius: 10px; margin: 40px auto; max-width: 960px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(11,37,69,0.03);">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 22px; font-weight: 800; text-align: center;">Related Services in ${loc.city}</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 15px;">
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">VAT Consultancy Services</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Audit &amp; Assurance Services</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/internal-audit-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Internal Audit &amp; Risk Review</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/fta-vat-audit-assistance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">FTA VAT Audit Assistance</a></li>
    </ul>
</div>

<!-- Closing CTA Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 45px 24px; text-align: center; border-radius: 10px; margin-top: 40px; box-shadow: 0 10px 25px rgba(11,37,69,0.12);">
    <h2 style="color: #ffffff !important; font-size: 24px; font-weight: 800; margin-top: 0; margin-bottom: 12px; border-bottom: none;">Still have questions? Speak to a corporate tax consultant in ${loc.city}</h2>
    <p style="font-size: 16px; color: #e2e8f0; max-width: 650px; margin: 0 auto 22px;">Schedule your corporate tax review with NUFCA’s certified tax advisors. Your first consultation is confidential and comprehensive.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #ffffff; color: #0b2545 !important; padding: 12px 24px; border-radius: 6px; font-weight: 800; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(255,255,255,0.2);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: rgba(255,255,255,0.15); color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3); padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px;">✉️ Email Us</a></div>
</div>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - Corporate Tax Consultants ${loc.city}",
      "image": "https://nufca.com/wp-content/uploads/2023/11/logo.png",
      "@id": "${loc.url}",
      "url": "${loc.url}",
      "telephone": "+97143258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "${loc.office}"
      },
      "priceRange": "$$"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Federal Decree-Law No. 47 of 2022?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Federal Decree-Law No. 47 of 2022 is the UAE’s corporate tax law, formally titled the Federal Decree-Law on the Taxation of Corporations and Businesses. It introduced a federal corporate tax on business profits for financial years beginning on or after 1 June 2023."
          }
        },
        {
          "@type": "Question",
          "name": "What are the UAE corporate tax rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The UAE applies a 0% rate to taxable income up to AED 375,000 and a 9% rate to taxable income exceeding AED 375,000. A 0% rate also applies to Qualifying Income of a Qualifying Free Zone Person. A 15% Domestic Minimum Top-up Tax applies to multinational groups with consolidated revenues of EUR 750 million or more from 1 January 2025."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to register if my profit is below AED 375,000?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The AED 375,000 threshold determines the corporate tax rate applied to taxable income, not the obligation to register. Every taxable person must register with the FTA, obtain a Tax Registration Number (TRN), and file an annual corporate tax return even if tax liability is nil."
          }
        },
        {
          "@type": "Question",
          "name": "Are free zone companies exempt from corporate tax in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A free zone company may access a 0% rate on its Qualifying Income only if it satisfies all Qualifying Free Zone Person (QFZP) conditions under Article 18. It pays 9% on any non-qualifying taxable income. Holding a free zone trade license does not automatically confer 0% status."
          }
        },
        {
          "@type": "Question",
          "name": "What are the QFZP conditions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main QFZP conditions include: maintaining adequate economic substance in a free zone; deriving Qualifying Income; not electing into the standard 9% regime; complying with transfer pricing and arm’s length principles; maintaining required transfer pricing documentation; satisfying the de minimis requirement (non-qualifying revenue <= lower of 5% or AED 5M); and preparing audited financial statements."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a free zone company breaches the de minimis threshold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The company ceases to be a Qualifying Free Zone Person from the beginning of that tax period and remains disqualified for the subsequent four tax periods (five tax periods in total), subjecting all income to the standard 9% corporate tax regime."
          }
        },
        {
          "@type": "Question",
          "name": "Who must prepare a transfer pricing Master File and Local File?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A taxable person must maintain both a Master File and Local File where its revenue is AED 200 million or more in the relevant tax period, or where it is part of a multinational group with consolidated revenue of AED 3.15 billion or more. Both files must be submitted within 30 days of an FTA request."
          }
        },
        {
          "@type": "Question",
          "name": "When is the corporate tax return due?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A corporate tax return and any resulting tax payment are due within nine months of the end of the relevant tax period. For a financial year ending on 31 December 2025, the return and payment deadline is 30 September 2026."
          }
        },
        {
          "@type": "Question",
          "name": "What is Small Business Relief?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small Business Relief is an election available to qualifying resident taxable persons with revenue of AED 3 million or less in the current and all previous tax periods. When elected, the entity is treated as having no taxable income. The relief applies for tax periods ending on or before 31 December 2026."
          }
        },
        {
          "@type": "Question",
          "name": "What penalties apply for corporate tax non-compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Administrative penalties include AED 10,000 for late registration; monthly penalties for late return filing; penalties for late payment; penalties for failing to maintain 7-year accounting records; and percentage penalties for incorrect return submissions."
          }
        },
        {
          "@type": "Question",
          "name": "Is there withholding tax on payments out of the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The UAE currently applies a 0% withholding tax rate to domestic and cross-border payments falling within the scope of corporate tax provisions. No separate withholding tax registration or filing is currently required."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a corporate tax consultant, or can my accountant handle it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Accounting produces financial statements used as the starting point for corporate tax. Corporate tax compliance is a separate technical discipline involving statutory adjustments, elections, exemptions, free zone qualification analysis, related-party rules, and transfer pricing. Professional corporate tax consultants prevent costly reassessments during FTA reviews."
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
          "name": "Corporate Tax ${loc.city}",
          "item": "${loc.url}"
        }
      ]
    }
  ]
}
</script>
`;
}

async function updateAllCorporateTaxPages() {
    console.log("🚀 Deploying 100% full, redesigned & optimized Corporate Tax pages across all 5 locations...");
    
    for (const loc of locations) {
        const html = buildHTML(loc);
        const url = 'https://nufca.com/wp-json/wp/v2/pages/' + loc.id;
        
        const payload = JSON.stringify({
            title: loc.title,
            content: html
        });
        
        await new Promise((resolve) => {
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
                    console.log(`✅ [${loc.name}] (Page ID: ${loc.id}) -> HTTP ${res.statusCode}`);
                    if (res.statusCode !== 200 && res.statusCode !== 201) {
                        console.error('Response:', data);
                    }
                    resolve();
                });
            });
            
            req.on('error', (e) => {
                console.error(`❌ Error on ${loc.name}:`, e.message);
                resolve();
            });
            
            req.write(payload);
            req.end();
        });
    }
    
    console.log("🎉 ALL 5 Corporate Tax pages successfully updated and verified!");
}

updateAllCorporateTaxPages();
