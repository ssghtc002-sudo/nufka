const fs = require('fs');
const path = require('path');

const locations = [
    {
        parent_slug: "corporate-tax",
        slug: "dubai",
        city_name: "Dubai",
        branch_title: "NUFCA Dubai Headquarters",
        address: "Dubai, United Arab Emirates",
        phone: "055-9831923",
        email: "dmcc@nufca.com"
    },
    {
        parent_slug: "corporate-tax",
        slug: "gold-souk-dubai",
        city_name: "Gold Souk (Deira, Dubai)",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com"
    },
    {
        parent_slug: "corporate-tax",
        slug: "abu-dhabi",
        city_name: "Abu Dhabi",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com"
    },
    {
        parent_slug: "corporate-tax",
        slug: "sharjah",
        city_name: "Sharjah",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com"
    }
];

function generateVerbatimDocHTML(loc) {
    return `<div class="nufca-article-container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.7; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 20px;">
    
    <!-- Hero Section -->
    <div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 45px 30px; border-radius: 12px; margin-bottom: 35px;">
        <span style="background: rgba(255,255,255,0.15); color: #fff; font-size: 13px; font-weight: bold; padding: 6px 14px; border-radius: 20px; text-transform: uppercase;">
            Federal Decree-Law No. 47 of 2022 - Now In Force
        </span>
        <h1 style="color: #ffffff; font-size: 34px; margin-top: 15px; font-weight: 800; line-height: 1.25;">Corporate Tax Consultants in ${loc.city_name} Who Handle the Filing, Not Just the Advice</h1>
        <p style="font-size: 18px; opacity: 0.95; max-width: 850px; margin-bottom: 25px;">Registration, taxable income computation, free zone QFZP assessment, transfer pricing documentation and return filing - delivered by qualified UAE tax advisors before your nine-month deadline, not after it.</p>
        
        <!-- Trust Strip -->
        <div style="display: flex; flex-wrap: wrap; gap: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 14px; font-weight: 600;">
            <span>✓ FTA-registered tax agents</span>
            <span>✓ 500+ UAE entities onboarded</span>
            <span>✓ Mainland, free zone and multinational groups</span>
            <span>✓ Response within one working day</span>
        </div>

        <!-- Branch Address Bar -->
        <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); padding: 15px 20px; border-radius: 8px; margin-top: 25px; font-size: 14px;">
            <div style="font-weight: bold; color: #8da9c4; font-size: 12px; text-transform: uppercase;">📍 ${loc.branch_title}:</div>
            <div style="font-size: 15px; font-weight: bold; margin-top: 2px;">${loc.address}</div>
            <div style="margin-top: 4px;">📞 Phone: <strong>${loc.phone}</strong> | ✉️ Email: <strong>${loc.email}</strong></div>
        </div>
    </div>

    <!-- Complete Lead Form from Google Doc -->
    <div style="background: #ffffff; border: 2px solid #134074; padding: 30px; border-radius: 12px; margin-bottom: 40px; box-shadow: 0 10px 25px rgba(0,0,0,0.08);">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 24px; font-weight: 700;">Get Your Corporate Tax Position Reviewed in ${loc.city_name}</h3>
        <p style="color: #555; font-size: 14px; margin-bottom: 20px;">Send your details and a consultant will come back with your registration status, applicable rate and next filing date. No cost, no obligation.</p>
        
        <form action="https://nufca.com/contact-us/" method="POST" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
                <label style="font-size: 13px; font-weight: bold; display: block; margin-bottom: 5px;">Full Name *</label>
                <input type="text" placeholder="Your name" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
            </div>
            <div>
                <label style="font-size: 13px; font-weight: bold; display: block; margin-bottom: 5px;">Business Email *</label>
                <input type="email" placeholder="name@company.ae" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
            </div>
            <div>
                <label style="font-size: 13px; font-weight: bold; display: block; margin-bottom: 5px;">Mobile Number *</label>
                <input type="tel" placeholder="+971 50 123 4567" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
            </div>
            <div>
                <label style="font-size: 13px; font-weight: bold; display: block; margin-bottom: 5px;">Company Name *</label>
                <input type="text" placeholder="Registered trade name" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
            </div>
            <div>
                <label style="font-size: 13px; font-weight: bold; display: block; margin-bottom: 5px;">Entity Type *</label>
                <select required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
                    <option value="">Select Entity Type</option>
                    <option value="Mainland LLC">Mainland LLC</option>
                    <option value="Free Zone Company">Free Zone Company</option>
                    <option value="Branch of Foreign Company">Branch of Foreign Company</option>
                    <option value="Sole Establishment">Sole Establishment</option>
                    <option value="Holding Company">Holding Company</option>
                    <option value="Not yet incorporated">Not yet incorporated</option>
                </select>
            </div>
            <div>
                <label style="font-size: 13px; font-weight: bold; display: block; margin-bottom: 5px;">Annual Turnover *</label>
                <select required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
                    <option value="">Select Annual Turnover</option>
                    <option value="Under AED 3 million">Under AED 3 million</option>
                    <option value="AED 3 million–50 million">AED 3 million–50 million</option>
                    <option value="AED 50 million–200 million">AED 50 million–200 million</option>
                    <option value="Above AED 200 million">Above AED 200 million</option>
                </select>
            </div>
            <div style="grid-column: span 2;">
                <label style="font-size: 13px; font-weight: bold; display: block; margin-bottom: 5px;">Help Needed</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; font-size: 13px;">
                    <label><input type="checkbox"> Corporate tax registration</label>
                    <label><input type="checkbox"> Return filing</label>
                    <label><input type="checkbox"> Free zone QFZP assessment</label>
                    <label><input type="checkbox"> Transfer pricing documentation</label>
                    <label><input type="checkbox"> Tax group formation</label>
                    <label><input type="checkbox"> Health check or second opinion</label>
                </div>
            </div>
            <div style="grid-column: span 2;">
                <label style="font-size: 13px; font-weight: bold; display: block; margin-bottom: 5px;">Message</label>
                <textarea placeholder="Tell us about your financial year end and current status" rows="3" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;"></textarea>
            </div>
            <div style="grid-column: span 2;">
                <label style="font-size: 12px; color: #666;"><input type="checkbox" required> I agree to be contacted about my enquiry. We do not share your data.</label>
            </div>
            <div style="grid-column: span 2;">
                <button type="submit" style="background: #134074; color: #fff; font-weight: bold; font-size: 16px; padding: 14px 30px; border: none; border-radius: 6px; cursor: pointer; width: 100%;">Request My Tax Review</button>
                <div style="font-size: 12px; color: #777; margin-top: 8px; text-align: center;">Typical response time: under 24 hours on working days.</div>
            </div>
        </form>
    </div>

    <!-- Section 1 -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px;">The UAE Is No Longer a Zero-Tax Jurisdiction</h2>
    <p>For decades, the pitch for setting up in ${loc.city_name} was simple: no corporate tax. That ended with <strong>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses</strong>, which introduced a federal corporate tax applying to financial years beginning on or after 1 June 2023.</p>
    <p>A company with a calendar financial year entered its first tax period on 1 January 2024. A company with a June year-end entered it a full seven months earlier.</p>
    <p>The law is not punitive by international standards - the headline rate of 9% remains one of the lowest anywhere - but it is administratively demanding.</p>
    <p>Every taxable person in ${loc.city_name} must register with the Federal Tax Authority, maintain accounting records to a standard that supports a tax computation, determine taxable income under statutory adjustment rules, assess whether related-party dealings meet the arm’s length principle, and file a return within nine months of the end of the tax period.</p>
    <p>Missing any of those steps carries a penalty, and the penalties apply whether or not any tax is actually due.</p>
    <p>This is where most businesses discover the gap between having an accountant and having a corporate tax consultant. Bookkeeping produces financial statements. Corporate tax compliance requires a separate technical exercise on top of them - and one where the errors are expensive and often invisible until the FTA asks a question.</p>

    <!-- Section 2: Rates -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">The Rates: 0%, 9% and 15% Explained</h2>
    <p>The UAE operates a tiered structure, and understanding which tier applies is the single most common source of confusion we resolve for businesses in ${loc.city_name}.</p>
    
    <h3 style="color: #134074; margin-top: 20px;">0% Corporate Tax Rate</h3>
    <p>The 0% rate applies to taxable income up to AED 375,000. It also applies to the Qualifying Income of a Qualifying Free Zone Person.</p>
    <p>This is a genuine nil rate applied to the first slice of taxable income, not an exemption from the corporate tax regime.</p>
    <p>A business earning AED 500,000 in taxable income pays nothing on the first AED 375,000 and 9% on the remaining AED 125,000. Its resulting corporate tax liability would be AED 11,250. Being below the AED 375,000 threshold does not remove the obligation to register and file.</p>

    <h3 style="color: #134074; margin-top: 20px;">9% Corporate Tax Rate</h3>
    <p>The standard 9% rate applies to taxable income above AED 375,000. It applies to mainland companies, non-qualifying free zone income, free zone entities that do not satisfy the Qualifying Free Zone Person conditions, and UAE permanent establishments of foreign companies.</p>

    <h3 style="color: #134074; margin-top: 20px;">15% Domestic Minimum Top-up Tax</h3>
    <p>A 15% Domestic Minimum Top-up Tax applies to multinational enterprise groups with consolidated global revenues of at least EUR 750 million in at least two of the four preceding financial years. It applies to financial years starting on or after 1 January 2025. The measure is aligned with the OECD Pillar Two framework.</p>

    <h3 style="color: #134074; margin-top: 20px;">Small Business Relief</h3>
    <p>Under Ministerial Decision No. 73 of 2023, a resident taxable person with revenue of AED 3 million or less in the current and all previous relevant tax periods may elect to be treated as having no taxable income. The relief is available for tax periods ending on or before 31 December 2026. Small Business Relief must be claimed through an election in the corporate tax return. It is not automatic. It is not available to free zone persons claiming the 0% qualifying rate or to members of large multinational groups.</p>

    <!-- Section 3: Taxable Income Adjustments -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Taxable Income Is Not Accounting Profit</h2>
    <p>Taxable income begins with accounting profit but is adjusted under the corporate tax rules. Potential adjustments include:</p>
    <ul style="padding-left: 20px;">
        <li>Unrealised gains and losses.</li>
        <li>Exempt income, including qualifying dividends and gains covered by the participation exemption.</li>
        <li>Non-deductible expenditure.</li>
        <li>Interest expenses affected by the general interest deduction limitation, which is broadly based on 30% of adjusted EBITDA and is subject to a de minimis threshold.</li>
        <li>Entertainment expenditure, which is generally restricted to a 50% deduction.</li>
        <li>Transfer pricing adjustments.</li>
    </ul>
    <p>Tax losses may generally be carried forward indefinitely. However, they can normally offset only up to 75% of taxable income in a later tax period and remain subject to applicable continuity-of-ownership conditions.</p>

    <!-- Section 4: Free Zone QFZP Conditions -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Free Zone Companies: The QFZP Conditions Most Businesses Fail</h2>
    <p>Free zone companies in ${loc.city_name} can retain a 0% corporate tax rate, but only on Qualifying Income and only while they satisfy the conditions for Qualifying Free Zone Person status. This is the area where we see the most misplaced confidence. A trade licence issued by a free zone authority does not, by itself, confer Qualifying Free Zone Person status.</p>
    <p>To be treated as a Qualifying Free Zone Person under Article 18 of the Decree-Law and supporting Cabinet and Ministerial Decisions, an entity must satisfy all relevant conditions:</p>
    
    <h4 style="color: #134074; margin-bottom: 5px;">Maintain Adequate Substance in the Free Zone</h4>
    <p style="margin-top: 0;">Core income-generating activities must be conducted in a free zone. The entity must maintain adequate assets, an adequate number of qualified full-time employees and adequate operating expenditure in relation to the activities it carries out. Outsourcing may be permitted within a free zone, but the entity must be able to demonstrate adequate supervision of the outsourced activities.</p>

    <h4 style="color: #134074; margin-bottom: 5px;">Derive Qualifying Income</h4>
    <p style="margin-top: 0;">Qualifying Income can include income from transactions with other free zone persons where the recipient is the beneficial recipient of the relevant goods or services. It can also include income derived from Qualifying Activities conducted with a free zone person or another person. Qualifying Activities include:</p>
    <ul style="padding-left: 20px;">
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

    <h4 style="color: #134074; margin-bottom: 5px;">Avoid Excluded Activities</h4>
    <p style="margin-top: 0;">Excluded Activities can include:</p>
    <ul style="padding-left: 20px;">
        <li>Transactions with natural persons, subject to limited exceptions.</li>
        <li>Banking activities.</li>
        <li>Most insurance activities.</li>
        <li>Most financing and leasing activities.</li>
        <li>Ownership or exploitation of immovable property, other than qualifying commercial property located in a free zone and transacted with another free zone person.</li>
    </ul>

    <h4 style="color: #134074; margin-bottom: 5px;">Do Not Elect Into the Standard Corporate Tax Regime</h4>
    <p style="margin-top: 0;">A free zone entity that elects to be subject to the standard corporate tax regime cannot claim the 0% rate as a Qualifying Free Zone Person for the relevant period.</p>

    <h4 style="color: #134074; margin-bottom: 5px;">Comply With Transfer Pricing Requirements</h4>
    <p style="margin-top: 0;">The entity must comply with the arm’s length principle for transactions with Related Parties and Connected Persons. It must also maintain the required transfer pricing documentation.</p>

    <h4 style="color: #134074; margin-bottom: 5px;">Satisfy the De Minimis Requirement</h4>
    <p style="margin-top: 0;">Non-qualifying revenue must not exceed the lower of 5% of the entity’s total revenue or AED 5 million.</p>

    <h4 style="color: #134074; margin-bottom: 5px;">Prepare Audited Financial Statements</h4>
    <p style="margin-top: 0;">A Qualifying Free Zone Person must prepare audited financial statements in accordance with applicable corporate tax requirements.</p>

    <div style="background: #fff3cd; border-left: 5px solid #ffc107; padding: 15px 20px; border-radius: 6px; margin: 25px 0;">
        <strong style="color: #856404; font-size: 16px;">The Five-Period Consequence:</strong>
        <p style="margin: 5px 0 0 0; color: #856404;">Breaching the de minimis threshold or another Qualifying Free Zone Person condition can cause an entity to lose its QFZP status from the beginning of the relevant tax period. It will also remain disqualified for the following four tax periods. That means one breach can expose the entity to the standard corporate tax regime for five tax periods in total. Even a compliant Qualifying Free Zone Person pays 9% on any non-qualifying taxable income it earns.</p>
    </div>

    <!-- Section 5: Transfer Pricing -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Transfer Pricing and the Master File Requirement</h2>
    <p>Article 34 requires transactions with Related Parties and Connected Persons to satisfy the arm’s length standard. Article 55 imposes transfer pricing documentation obligations. Under Ministerial Decision No. 97 of 2023, a taxable person must maintain both a Master File and a Local File where either of the following conditions applies:</p>
    <ul style="padding-left: 20px;">
        <li>Its revenue in the relevant tax period is AED 200 million or more.</li>
        <li>It is a constituent entity of a multinational group with total consolidated group revenue of AED 3.15 billion or more in the relevant tax period.</li>
    </ul>
    <p>Both files must be submitted to the Federal Tax Authority within 30 days of a request. Thirty days is not enough time to build reliable transfer pricing documentation from scratch.</p>

    <h3 style="color: #134074; margin-top: 20px;">Master File & Local File Specifications</h3>
    <p>The <strong>Master File</strong> provides a group-level overview covering organisational structure, key value drivers, intangible assets, intercompany financial activities, and tax positions. The <strong>Local File</strong> focuses specifically on the UAE taxable person, covering management structure, controlled transactions, functional analysis, transfer pricing methodology, and economic benchmarking analysis.</p>

    <h3 style="color: #134074; margin-top: 20px;">Connected Persons & Remuneration Benchmarking</h3>
    <p>Connected Persons include owners, directors, officers and their related parties. Payments and benefits provided to Connected Persons are deductible only to the extent that they correspond to market value. Owner and director remuneration that has never been benchmarked is one of the most frequently adjusted items we encounter.</p>

    <!-- Section 6: Deliverables -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What Our Corporate Tax Consultants in ${loc.city_name} Deliver</h2>
    <ul style="padding-left: 20px; line-height: 1.8;">
        <li><strong>Corporate Tax Registration:</strong> We assess your taxable person status, prepare and submit the registration application through EmaraTax, and confirm your Corporate Tax Registration Number and first tax period.</li>
        <li><strong>Tax Computation and Return Filing:</strong> We convert audited or management accounts into a compliant taxable income computation with complete schedules of adjustments, elections, exemptions and reliefs before your nine-month deadline.</li>
        <li><strong>Free Zone QFZP Assessment:</strong> We test revenue streams, monitor de minimis headroom, assess substance and prepare a written corporate tax position paper for auditors or the FTA.</li>
        <li><strong>Transfer Pricing Services:</strong> Related-party transaction mapping, method selection, benchmarking studies, Master File, Local File, disclosure forms and intercompany agreements.</li>
        <li><strong>Tax Group Formation:</strong> Reviewing eligibility under the 95% ownership requirement and tax consolidation mechanics.</li>
        <li><strong>Health Checks and Second Opinions:</strong> Independent review of filed returns or in-house tax computations to prioritize risk remedial actions.</li>
        <li><strong>Ongoing Corporate Tax Advisory:</strong> Business restructuring, permanent establishment risk, cross-border payments, double tax treaties and foreign tax credits.</li>
    </ul>

    <!-- Section 7: Deadlines & Penalties -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Deadlines and Penalties</h2>
    <p>Late corporate tax registration can attract an administrative penalty of AED 10,000. Corporate tax returns and any resulting tax payments are generally due within nine months of the end of the relevant tax period. For a financial year ending on 31 December 2025, the return and any corporate tax payment are due by 30 September 2026.</p>
    <p>Late filing penalties accrue monthly and increase after the first year. Additional penalties apply for record-keeping failures, incorrect returns, and errors in voluntary disclosures. Corporate tax records must generally be retained for seven years.</p>

    <!-- FAQs Verbatim -->
    <h2 style="color: #0b2545; font-size: 26px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Corporate Tax in the UAE - Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ What is Federal Decree-Law No. 47 of 2022?</h3>
            <p style="margin: 0; color: #555;">Federal Decree-Law No. 47 of 2022 is the UAE’s corporate tax law introducing a federal corporate tax on business profits for financial years beginning on or after 1 June 2023.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ What are the UAE corporate tax rates?</h3>
            <p style="margin: 0; color: #555;">The UAE applies a 0% rate to taxable income up to AED 375,000 and a 9% rate above that threshold. A 0% rate also applies to Qualifying Income of a QFZP, while a 15% Domestic Minimum Top-up Tax applies to multinational groups with global revenues of EUR 750 million or more.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ Do I need to register if my profit is below AED 375,000?</h3>
            <p style="margin: 0; color: #555;">Yes. The AED 375,000 threshold determines the corporate tax rate applied to taxable income, not the registration requirement. Every taxable person must register with the FTA and file an annual return.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ Are free zone companies exempt from corporate tax in the UAE?</h3>
            <p style="margin: 0; color: #555;">No. A free zone company may access a 0% rate on its Qualifying Income only if it satisfies all Qualifying Free Zone Person conditions. It pays 9% on any non-qualifying taxable income.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ What happens if a free zone company breaches the de minimis threshold?</h3>
            <p style="margin: 0; color: #555;">The company ceases to be a Qualifying Free Zone Person from the beginning of the relevant tax period and remains disqualified for the following four tax periods (5 years total at 9%).</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ Who must prepare a transfer pricing Master File and Local File?</h3>
            <p style="margin: 0; color: #555;">A taxable person must maintain a Master File and Local File if its revenue is AED 200 million or more in the tax period, or if part of an MNE group with AED 3.15 billion revenue.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ When is the corporate tax return due?</h3>
            <p style="margin: 0; color: #555;">A corporate tax return and tax payment are due within nine months of the end of the relevant tax period (e.g. 30 September 2026 for a financial year ending 31 December 2025).</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ What is Small Business Relief?</h3>
            <p style="margin: 0; color: #555;">Small Business Relief is an election available to qualifying resident taxable persons with revenue of AED 3 million or less to be treated as having no taxable income for tax periods ending on or before 31 December 2026.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 17px; color: #134074; margin: 0 0 8px 0;">❓ Do I need a corporate tax consultant, or can my accountant handle it?</h3>
            <p style="margin: 0; color: #555;">Accounting produces financial statements. Corporate tax compliance is a separate technical exercise involving statutory adjustments, elections, exemptions, free zone qualification, related-party rules, and transfer pricing.</p>
        </div>
    </div>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 40px 25px; border-radius: 10px; margin-top: 45px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 26px;">Book a Consultation with Our Corporate Tax Consultants in ${loc.city_name}</h2>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 10px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 25px;">Call <strong>${loc.phone}</strong> or request a free review online.</p>
        <a href="https://nufca.com/contact-us/" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 14px 35px; text-decoration: none; border-radius: 6px; display: inline-block;">Book My Free Corporate Tax Review →</a>
    </div>

</div>`;
}

function buildFullPreviewHTML() {
    let pagesObject = {};

    locations.forEach(loc => {
        pagesObject[loc.slug] = {
            url: `https://nufca.com/corporate-tax/${loc.slug}/`,
            html: generateVerbatimDocHTML(loc)
        };
    });

    const fileContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WordPress Import Live Preview | Filtered NUFCA pSEO Pages</title>
    <style>
        :root {
            --primary-dark: #0b2545;
            --primary-blue: #134074;
            --accent-blue: #8da9c4;
            --light-bg: #f8f9fa;
            --text-dark: #1d2d44;
            --border: #e2e8f0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f4f8;
            color: var(--text-dark);
        }

        .header-bar {
            background: var(--primary-dark);
            color: #ffffff;
            padding: 20px;
            text-align: center;
            border-bottom: 4px solid var(--accent-blue);
        }

        .header-bar h1 { margin: 0; font-size: 24px; }
        .header-bar p { margin: 5px 0 0 0; opacity: 0.8; font-size: 14px; }

        .preview-container {
            max-width: 1240px;
            margin: 25px auto;
            padding: 0 15px;
        }

        .grid-layout {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: 20px;
        }

        @media (max-width: 900px) {
            .grid-layout { grid-template-columns: 1fr; }
        }

        .sidebar {
            background: #ffffff;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border: 1px solid var(--border);
            height: fit-content;
            position: sticky;
            top: 20px;
        }

        .sidebar h3 { margin-top: 0; font-size: 15px; color: var(--primary-dark); border-bottom: 2px solid var(--light-bg); padding-bottom: 8px; }

        .url-list { list-style: none; padding: 0; margin: 0; }
        .url-item { margin-bottom: 6px; }

        .url-link {
            display: block;
            padding: 9px 12px;
            background: var(--light-bg);
            color: var(--primary-blue);
            text-decoration: none;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 600;
            border: 1px solid var(--border);
            transition: all 0.2s;
        }

        .url-link:hover, .url-link.active {
            background: var(--primary-blue);
            color: #ffffff;
            border-color: var(--primary-blue);
        }

        .preview-frame {
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border: 1px solid var(--border);
            overflow: hidden;
        }

        .browser-header {
            background: #e2e8f0;
            padding: 10px 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 1px solid #cbd5e1;
        }

        .dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .address-bar {
            background: #ffffff;
            flex-grow: 1;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 13px;
            color: #334155;
            font-family: monospace;
            border: 1px solid #cbd5e1;
        }

        .page-content { padding: 20px; }
    </style>
</head>
<body>

    <div class="header-bar">
        <h1>Filtered Master Pages Live Preview (4 Main Locations)</h1>
        <p>Previewing Dubai, Gold Souk Deira, Abu Dhabi, and Sharjah locations.</p>
    </div>

    <div class="preview-container">
        <div class="grid-layout">
            
            <div class="sidebar">
                <h3>Active Location Pages</h3>
                <ul class="url-list">
                    <li class="url-item"><a href="#" class="url-link active" onclick="loadPreview('dubai', event)">📍 Dubai (Main Headquarters)</a></li>
                    <li class="url-item"><a href="#" class="url-link" onclick="loadPreview('gold-souk-dubai', event)">📍 Gold Souk (Deira, Dubai)</a></li>
                    <li class="url-item"><a href="#" class="url-link" onclick="loadPreview('abu-dhabi', event)">📍 Abu Dhabi (Tamouh Tower)</a></li>
                    <li class="url-item"><a href="#" class="url-link" onclick="loadPreview('sharjah', event)">📍 Sharjah (Hamriyah Free Zone)</a></li>
                </ul>
            </div>

            <div class="preview-frame">
                <div class="browser-header">
                    <span class="dot dot-red"></span>
                    <span class="dot dot-yellow"></span>
                    <span class="dot dot-green"></span>
                    <div class="address-bar" id="previewAddress">https://nufca.com/corporate-tax/dubai/</div>
                </div>

                <div class="page-content" id="previewBody">
                    <!-- HTML Content renders here -->
                </div>
            </div>

        </div>
    </div>

    <script>
        const pagesData = ${JSON.stringify(pagesObject)};

        function loadPreview(slug, evt) {
            const data = pagesData[slug] || pagesData['dubai'];
            document.getElementById('previewAddress').innerText = data.url;
            document.getElementById('previewBody').innerHTML = data.html;

            if (evt) {
                document.querySelectorAll('.url-link').forEach(el => el.classList.remove('active'));
                evt.target.classList.add('active');
            }
        }

        // Initial Load
        loadPreview('dubai');
    </script>
</body>
</html>`;

    const outputPath = path.join(__dirname, 'preview_import_results.html');
    fs.writeFileSync(outputPath, fileContent, 'utf-8');
    console.log(`✅ Filtered preview_import_results.html updated!`);
}

buildFullPreviewHTML();
