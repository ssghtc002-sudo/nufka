const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
    "User-Agent": "WordPress-Connector/1.0"
};

const locations = [
    {
        id: 99001,
        parent_slug: "corporate-tax-in-uae",
        slug: "corporate-tax-in-uae",
        city_name: "UAE",
        branch_title: "NUFCA UAE Headquarters",
        address: "Dubai & Abu Dhabi, United Arab Emirates",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "Corporate Tax Consultants in UAE",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Now In Force",
        hero_headline: "Corporate Tax Consultants in UAE Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, taxable income computation, free zone QFZP assessment, transfer pricing documentation and return filing - delivered by qualified UAE tax advisors before your nine-month deadline, not after it."
    },
    {
        id: 99101,
        parent_slug: "corporate-tax-in-uae",
        slug: "dubai",
        city_name: "Dubai",
        branch_title: "NUFCA Dubai Headquarters",
        address: "Dubai, United Arab Emirates",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "Corporate Tax Consultants in Dubai",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Mainland & Free Zones",
        hero_headline: "Corporate Tax Consultants in Dubai Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, taxable income computation, free zone QFZP assessment, transfer pricing documentation and return filing - delivered by qualified UAE tax advisors before your nine-month deadline, not after it."
    },
    {
        id: 99102,
        parent_slug: "corporate-tax-in-uae",
        slug: "gold-souk-dubai",
        city_name: "Gold Souk (Deira, Dubai)",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "Corporate Tax Consultants in Gold Souk, Deira",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Gold & Precious Metals Specialist",
        hero_headline: "Corporate Tax Consultants in Gold Souk Deira Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, bullion inventory spot rate valuation, margin scheme VAT, free zone QFZP assessment, and goAML cash reporting delivered by qualified tax advisors in Gold Souk."
    },
    {
        id: 99103,
        parent_slug: "corporate-tax-in-uae",
        slug: "abu-dhabi",
        city_name: "Abu Dhabi",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "Corporate Tax Consultants in Abu Dhabi",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Abu Dhabi Tamouh Tower Branch",
        hero_headline: "Corporate Tax Consultants in Abu Dhabi Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, taxable income computation, corporate tax group consolidation, transfer pricing documentation and return filing delivered by qualified tax advisors."
    },
    {
        id: 99104,
        parent_slug: "corporate-tax-in-uae",
        slug: "sharjah",
        city_name: "Sharjah",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com",
        h1_title: "Corporate Tax Consultants in Sharjah",
        eyebrow: "Federal Decree-Law No. 47 of 2022 - Hamriyah Free Zone Branch",
        hero_headline: "Corporate Tax Consultants in Sharjah Who Handle the Filing, Not Just the Advice",
        hero_subheadline: "Registration, taxable income computation, free zone QFZP assessment, transfer pricing documentation and return filing for Sharjah & HFZ businesses."
    }
];

function generateFullPageHTML(loc) {
    const currentSlug = loc.slug;
    
    return `<div class="nufca-article-container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 15px;">
    
    <!-- Filter Location Dropdown Bar -->
    <div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">📍</span>
        <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
      </div>
      <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px; transition: border-color 0.2s;">
        <option value="https://nufca.com/corporate-tax-in-uae/" ${currentSlug==='corporate-tax-in-uae'?'selected':''}>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/corporate-tax-in-uae/dubai/" ${currentSlug==='dubai'?'selected':''}>🏙️ Dubai (Mainland & Free Zones)</option>
        <option value="https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" ${currentSlug==='gold-souk-dubai'?'selected':''}>🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/corporate-tax-in-uae/abu-dhabi/" ${currentSlug==='abu-dhabi'?'selected':''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/corporate-tax-in-uae/sharjah/" ${currentSlug==='sharjah'?'selected':''}>🏭 Sharjah (Hamriyah Free Zone)</option>
      </select>
    </div>

    <!-- Hero Section -->
    <div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 40px 25px; border-radius: 12px; margin-bottom: 30px;">
        <span style="background: rgba(255,255,255,0.15); color: #fff; font-size: 12px; font-weight: bold; padding: 6px 14px; border-radius: 20px; text-transform: uppercase;">
            ${loc.eyebrow}
        </span>
        <h1 style="color: #ffffff !important; font-size: clamp(24px, 5vw, 34px); margin-top: 15px; font-weight: 800; line-height: 1.25;">${loc.hero_headline}</h1>
        <p style="font-size: 17px; opacity: 0.95; max-width: 850px; margin-bottom: 20px;">${loc.hero_subheadline}</p>
        
        <!-- Trust Strip -->
        <div style="display: flex; flex-wrap: wrap; gap: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 13px; font-weight: 600;">
            <span>✓ FTA-registered tax agents</span>
            <span>✓ 500+ UAE entities onboarded</span>
            <span>✓ Mainland, free zone & MNEs</span>
            <span>✓ Response within 1 working day</span>
        </div>

        <!-- Branch Address Bar -->
        <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); padding: 15px 20px; border-radius: 8px; margin-top: 20px; font-size: 14px;">
            <div style="font-weight: bold; color: #8da9c4; font-size: 11px; text-transform: uppercase;">📍 ${loc.branch_title}:</div>
            <div style="font-size: 15px; font-weight: bold; margin-top: 2px;">${loc.address}</div>
            <div style="margin-top: 4px;">📞 Phone: <strong>${loc.phone}</strong> | ✉️ Email: <strong>${loc.email}</strong></div>
        </div>
    </div>

    <!-- Lead Form Box -->
    <div style="background: #ffffff; border: 2px solid #134074; padding: 25px 20px; border-radius: 12px; margin-bottom: 35px; box-shadow: 0 8px 20px rgba(0,0,0,0.06);">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 22px; font-weight: 700;">Get Your Corporate Tax Position Reviewed in ${loc.city_name}</h3>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">Send your details and a consultant will come back with your registration status, applicable rate and next filing date. No cost, no obligation.</p>
        
        <form action="https://nufca.com/contact-us/" method="POST">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px;">
                <div style="display: flex; flex-direction: column;">
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">Full Name *</label>
                    <input type="text" name="fullname" style="width: 100%; padding: 12px; font-size: 15px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #f8fafc;" placeholder="Your name" required>
                </div>
                <div style="display: flex; flex-direction: column;">
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">Business Email *</label>
                    <input type="email" name="email" style="width: 100%; padding: 12px; font-size: 15px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #f8fafc;" placeholder="name@company.ae" required>
                </div>
                <div style="display: flex; flex-direction: column;">
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">Mobile Number *</label>
                    <input type="tel" name="mobile" style="width: 100%; padding: 12px; font-size: 15px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #f8fafc;" placeholder="+971 50 123 4567" required>
                </div>
                <div style="display: flex; flex-direction: column;">
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">Company Name *</label>
                    <input type="text" name="company" style="width: 100%; padding: 12px; font-size: 15px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #f8fafc;" placeholder="Registered trade name" required>
                </div>
                <div style="display: flex; flex-direction: column;">
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">Entity Type *</label>
                    <select name="entity_type" style="width: 100%; padding: 12px; font-size: 15px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #f8fafc;" required>
                        <option value="">Select Entity Type</option>
                        <option value="Mainland LLC">Mainland LLC</option>
                        <option value="Free Zone Company">Free Zone Company</option>
                        <option value="Branch of Foreign Company">Branch of Foreign Company</option>
                        <option value="Sole Establishment">Sole Establishment</option>
                        <option value="Holding Company">Holding Company</option>
                        <option value="Not yet incorporated">Not yet incorporated</option>
                    </select>
                </div>
                <div style="display: flex; flex-direction: column;">
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">Annual Turnover *</label>
                    <select name="turnover" style="width: 100%; padding: 12px; font-size: 15px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #f8fafc;" required>
                        <option value="">Select Annual Turnover</option>
                        <option value="Under AED 3 million">Under AED 3 million</option>
                        <option value="AED 3 million–50 million">AED 3 million–50 million</option>
                        <option value="AED 50 million–200 million">AED 50 million–200 million</option>
                        <option value="Above AED 200 million">Above AED 200 million</option>
                    </select>
                </div>
                
                <div style="grid-column: 1 / -1; display: flex; flex-direction: column;">
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">Help Needed</label>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; font-size: 14px;">
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Corporate tax registration"> Corporate tax registration</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Return filing"> Return filing</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Free zone QFZP assessment"> Free zone QFZP assessment</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Transfer pricing documentation"> Transfer pricing documentation</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Tax group formation"> Tax group formation</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Health check or second opinion"> Health check or second opinion</label>
                    </div>
                </div>

                <div style="grid-column: 1 / -1; display: flex; flex-direction: column;">
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">Message</label>
                    <textarea name="message" rows="3" style="width: 100%; padding: 12px; font-size: 15px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #f8fafc;" placeholder="Tell us about your financial year end and current status"></textarea>
                </div>

                <div style="grid-column: 1 / -1;">
                    <button type="submit" style="background: #134074; color: #ffffff; font-weight: 700; font-size: 16px; padding: 14px 28px; border: none; border-radius: 8px; cursor: pointer; width: 100%;">Request My Tax Review</button>
                    <div style="font-size: 12px; color: #64748b; margin-top: 8px; text-align: center;">Typical response time: under 24 hours on working days.</div>
                </div>
            </div>
        </form>
    </div>

    <!-- Section 1 -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px;">The UAE Is No Longer a Zero-Tax Jurisdiction</h2>
    <p>For decades, the pitch for setting up in ${loc.city_name} was simple: no corporate tax. That ended with <strong>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses</strong>, which introduced a federal corporate tax applying to financial years beginning on or after 1 June 2023.</p>
    <p>A company with a calendar financial year entered its first tax period on 1 January 2024. A company with a June year-end entered it a full seven months earlier.</p>
    <p>The law is not punitive by international standards - the headline rate of 9% remains one of the lowest anywhere - but it is administratively demanding. Every taxable person in ${loc.city_name} must register with the Federal Tax Authority, maintain accounting records to a standard that supports a tax computation, determine taxable income under statutory adjustment rules, assess whether related-party dealings meet the arm’s length principle, and file a return within nine months of the end of the tax period.</p>
    <p>Missing any of those steps carries a penalty, and the penalties apply whether or not any tax is actually due. This is where most businesses discover the gap between having an accountant and having a corporate tax consultant in ${loc.city_name}.</p>

    <!-- Section 2: Rates -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">The Rates: 0%, 9% and 15% Explained</h2>
    <p>The UAE operates a tiered structure, and understanding which tier applies is the single most common source of confusion we resolve for businesses in ${loc.city_name}.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin: 25px 0;">
        <div style="background: #f8fafc; border-top: 4px solid #134074; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
            <div style="font-size: 32px; font-weight: 800; color: #134074;">0%</div>
            <h3 style="margin: 5px 0; color: #0b2545; font-size: 18px;">0% Tax Rate</h3>
            <p style="font-size: 14px; color: #475569;">Applies to taxable income up to AED 375,000. Also applies to Qualifying Income of a Qualifying Free Zone Person (QFZP).</p>
        </div>
        <div style="background: #f8fafc; border-top: 4px solid #134074; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
            <div style="font-size: 32px; font-weight: 800; color: #134074;">9%</div>
            <h3 style="margin: 5px 0; color: #0b2545; font-size: 18px;">9% Standard Rate</h3>
            <p style="font-size: 14px; color: #475569;">Applies to taxable income exceeding AED 375,000 for mainland companies and non-qualifying free zone income in ${loc.city_name}.</p>
        </div>
        <div style="background: #f8fafc; border-top: 4px solid #134074; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
            <div style="font-size: 32px; font-weight: 800; color: #134074;">15%</div>
            <h3 style="margin: 5px 0; color: #0b2545; font-size: 18px;">15% MNE Minimum Tax</h3>
            <p style="font-size: 14px; color: #475569;">Applies to multinational enterprise groups with consolidated global revenues of EUR 750 million or more under OECD Pillar Two.</p>
        </div>
    </div>

    <!-- Section 3: QFZP Free Zone Rules -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Free Zone Companies: The QFZP Conditions Most Businesses Fail</h2>
    <p>Free zone companies in ${loc.city_name} can retain a 0% corporate tax rate, but only on Qualifying Income and only while they satisfy the conditions for Qualifying Free Zone Person status.</p>
    <p>To be treated as a Qualifying Free Zone Person under Article 18 of the Decree-Law, an entity must satisfy all conditions:</p>
    <ul style="padding-left: 20px;">
        <li><strong>Maintain Adequate Substance:</strong> Core income-generating activities conducted in a free zone with adequate assets, employees, and operating expenditure.</li>
        <li><strong>Derive Qualifying Income:</strong> Income from transactions with other free zone persons or qualifying activities (manufacturing, treasury, investment holding, distribution).</li>
        <li><strong>Avoid Excluded Activities:</strong> Natural person transactions, banking, insurance, or mainland commercial real estate.</li>
        <li><strong>Comply with Transfer Pricing:</strong> Arm’s length principle for Related Parties & Connected Persons.</li>
        <li><strong>De Minimis Requirement:</strong> Non-qualifying revenue must not exceed lower of 5% of total revenue or AED 5 million.</li>
        <li><strong>Audited Financial Statements:</strong> Mandatory preparation of annual audited accounts.</li>
    </ul>

    <div style="background: #fff3cd; border-left: 5px solid #ffc107; padding: 15px 20px; border-radius: 6px; margin: 25px 0;">
        <strong>⚠️ The Five-Period Penalty Consequence:</strong> Breaching the de minimis threshold or QFZP condition causes an entity to lose 0% status for that tax period AND the following 4 tax periods (5 years total at 9% tax).
    </div>

    <!-- Section 4: Transfer Pricing -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Transfer Pricing and the Master File Requirement</h2>
    <p>Article 34 requires transactions with Related Parties and Connected Persons to satisfy the arm’s length standard. Under Ministerial Decision No. 97 of 2023, a taxable person in ${loc.city_name} must maintain both a <strong>Master File</strong> and a <strong>Local File</strong> if revenue is AED 200 million or more, or if part of an MNE group with AED 3.15 billion revenue.</p>
    <p>Both files must be submitted to the FTA within 30 days of request. Connected Person remuneration (owners/directors) must be benchmarked to market value.</p>

    <!-- Section 5: What NUFCA Delivers -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What Our Corporate Tax Consultants in ${loc.city_name} Deliver</h2>
    <ul style="padding-left: 20px;">
        <li><strong>Corporate Tax Registration:</strong> Submission via EmaraTax & confirmation of Corporate Tax Registration Number.</li>
        <li><strong>Tax Computation & Return Filing:</strong> Converting accounts into compliant taxable income computations before the 9-month deadline.</li>
        <li><strong>Free Zone QFZP Assessment:</strong> Written position paper testing revenue streams & de minimis headroom.</li>
        <li><strong>Transfer Pricing:</strong> Related-party mapping, benchmarking studies, Master File & Local File preparation.</li>
        <li><strong>Tax Group Formation:</strong> 95% ownership consolidation reviews.</li>
        <li><strong>Health Checks & Second Opinions:</strong> Independent audit of existing computations & filed returns.</li>
    </ul>

    <!-- FAQ Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Corporate Tax in ${loc.city_name} - Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is Federal Decree-Law No. 47 of 2022?</h3>
            <p style="margin: 0; color: #475569;">It is the UAE’s federal corporate tax law introducing a 9% tax on business profits for financial years beginning on or after 1 June 2023.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Do I need to register if my profit is below AED 375,000?</h3>
            <p style="margin: 0; color: #475569;">Yes. The AED 375,000 threshold determines the tax rate, not the registration requirement. Every taxable person must register with the FTA and file an annual return.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What penalties apply for late corporate tax registration in ${loc.city_name}?</h3>
            <p style="margin: 0; color: #475569;">Late corporate tax registration attracts a fixed administrative penalty of AED 10,000 imposed by the Federal Tax Authority.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ When is the corporate tax return due?</h3>
            <p style="margin: 0; color: #475569;">A corporate tax return and tax payment are due within nine months of the end of the relevant tax period (e.g. 30 September 2026 for December 2025 year end).</p>
        </div>
    </div>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px; margin-top: 40px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Book a Consultation with Our Corporate Tax Consultants in ${loc.city_name}</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>${loc.phone}</strong> or request a free review online.</p>
        <a href="https://nufca.com/contact-us/" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 14px 32px; text-decoration: none; border-radius: 6px; display: inline-block;">Speak to a Corporate Tax Consultant →</a>
    </div>

</div>`;
}

async function pushFullContentToAllPages() {
    console.log("🚀 Pushing 100% Full Comprehensive Article Content + Filter Bar to all 5 pages...");

    for (const loc of locations) {
        const fullContent = generateFullPageHTML(loc);
        console.log(`Writing full content to Page ID ${loc.id} (${loc.slug}). Length: ${fullContent.length} chars...`);

        const res = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${loc.id}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                content: fullContent
            })
        });

        console.log(`  --> Status for ${loc.slug}: ${res.status}`);
    }

    console.log("🎉 ALL 5 PAGES UPDATED WITH FULL COMPREHENSIVE ARTICLE CONTENT!");
}

pushFullContentToAllPages();
