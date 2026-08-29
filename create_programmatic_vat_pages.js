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

const vatLocations = [
    {
        slug: "vat-consultancy-in-uae",
        city_name: "UAE",
        branch_title: "NUFCA Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "VAT Consultancy Services in UAE",
        eyebrow: "Federal Decree-Law No. 8 of 2017 & Cabinet Decision No. 129 of 2025",
        hero_headline: "VAT Consultancy Services in UAE Reviewed by Chartered Accountants",
        hero_subheadline: "Registration, return filing, health checks, VAT211 voluntary disclosures, input VAT recovery and FTA audit support - delivered by qualified tax advisors."
    },
    {
        slug: "dubai",
        city_name: "Dubai",
        branch_title: "NUFCA Dubai Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "VAT Consultancy Services in Dubai",
        eyebrow: "Federal Decree-Law No. 8 of 2017 & Cabinet Decision No. 129 of 2025",
        hero_headline: "VAT Consultancy Services in Dubai Reviewed by Chartered Accountants",
        hero_subheadline: "Registration, return filing, health checks, VAT211 voluntary disclosures, input VAT recovery and FTA audit support for Dubai mainland & free zone businesses."
    },
    {
        slug: "gold-souk-dubai",
        city_name: "Gold Souk (Deira, Dubai)",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "VAT Consultancy Services in Gold Souk, Deira",
        eyebrow: "Gold & Investment Precious Metals VAT Specialist",
        hero_headline: "VAT Consultancy Services in Gold Souk Deira Reviewed by Chartered Accountants",
        hero_subheadline: "Margin scheme VAT calculations, zero-rated precious metals, goAML cash reporting, return filing and FTA audit support for Gold Souk jewelers & bullion traders."
    },
    {
        slug: "abu-dhabi",
        city_name: "Abu Dhabi",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "info@nufca.com",
        h1_title: "VAT Consultancy Services in Abu Dhabi",
        eyebrow: "Federal Decree-Law No. 8 of 2017 - Abu Dhabi Branch",
        hero_headline: "VAT Consultancy Services in Abu Dhabi Reviewed by Chartered Accountants",
        hero_subheadline: "Registration, return filing, health checks, VAT211 voluntary disclosures, input VAT recovery and FTA audit support for Abu Dhabi businesses."
    },
    {
        slug: "sharjah",
        city_name: "Sharjah",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com",
        h1_title: "VAT Consultancy Services in Sharjah",
        eyebrow: "Federal Decree-Law No. 8 of 2017 - Hamriyah Free Zone Branch",
        hero_headline: "VAT Consultancy Services in Sharjah Reviewed by Chartered Accountants",
        hero_subheadline: "Registration, return filing, health checks, VAT211 voluntary disclosures, input VAT recovery and FTA audit support for Sharjah & HFZ companies."
    }
];

function generateVatPageHTML(loc) {
    const currentSlug = loc.slug;
    
    return `<div class="nufca-article-container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.75; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 15px;">
    
    <!-- Filter Location Dropdown Bar -->
    <div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">📍</span>
        <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
      </div>
      <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
        <option value="https://nufca.com/vat-consultancy-in-uae/" ${currentSlug==='vat-consultancy-in-uae'?'selected':''}>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/vat-consultancy-in-uae/dubai/" ${currentSlug==='dubai'?'selected':''}>🏙️ Dubai (Bur Dubai Head Office)</option>
        <option value="https://nufca.com/vat-consultancy-in-uae/gold-souk-dubai/" ${currentSlug==='gold-souk-dubai'?'selected':''}>🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/vat-consultancy-in-uae/abu-dhabi/" ${currentSlug==='abu-dhabi'?'selected':''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/vat-consultancy-in-uae/sharjah/" ${currentSlug==='sharjah'?'selected':''}>🏭 Sharjah (Hamriyah Free Zone)</option>
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
            <span>✓ FTA-Registered Tax Agents</span>
            <span>✓ Chartered Accountants (NUFCA)</span>
            <span>✓ Mainland & Free Zone Compliance</span>
            <span>✓ Response within 1 Working Day</span>
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
        <h3 style="color: #0b2545; margin-top: 0; font-size: 22px; font-weight: 700;">Get Your VAT Position Reviewed in ${loc.city_name}</h3>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">Send your details and a chartered accountant will review your registration threshold, return filing status, or health check requirements. No cost, no obligation.</p>
        
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
                
                <div style="grid-column: 1 / -1; display: flex; flex-direction: column;">
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">VAT Help Needed</label>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; font-size: 14px;">
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="VAT Registration"> VAT Registration</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="VAT Return Filing"> VAT Return Filing</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="VAT Health Check"> VAT Health Check</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="VAT211 Voluntary Disclosure"> VAT211 Voluntary Disclosure</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="FTA Audit Assistance"> FTA Audit Assistance</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Input VAT Recovery Review"> Input VAT Recovery Review</label>
                    </div>
                </div>

                <div style="grid-column: 1 / -1;">
                    <button type="submit" style="background: #134074; color: #ffffff; font-weight: 700; font-size: 16px; padding: 14px 28px; border: none; border-radius: 8px; cursor: pointer; width: 100%;">Request VAT Review</button>
                    <div style="font-size: 12px; color: #64748b; margin-top: 8px; text-align: center;">Typical response time: under 24 hours on working days.</div>
                </div>
            </div>
        </form>
    </div>

    <!-- Main Intro -->
    <p style="font-size: 16px;">Filing a return on time is the easy part of VAT. The hard part happens months earlier - in how a transaction was classified, whether the invoice met FTA requirements, whether that input VAT was ever recoverable, and whether the export you zero-rated actually satisfied the conditions.</p>
    <p style="font-size: 16px;">By the time those decisions reach a VAT return, they have usually been repeated across hundreds of entries.</p>
    <p style="font-size: 16px;"><strong>Nadeem and Umendra Chartered Accountants (NUFCA)</strong> works with ${loc.city_name} businesses on the whole chain: registration thresholds, transaction treatment, record-keeping, input VAT recovery, import and export positions, error correction and audit readiness.</p>

    <!-- Why VAT Reaches Further -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Why VAT Reaches Further Than the Return</h2>
    <p>VAT touches sales, purchases, contracts, pricing, invoicing, imports, exports, your accounting system and your cash flow. A single misclassification entered into the ledger does not stay in the ledger - it flows into the return submitted to the Federal Tax Authority.</p>
    <p>Which is why the answer is controls, not just a quarterly filing exercise.</p>
    
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 18px;">Our VAT consultants in ${loc.city_name} support businesses with:</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; font-size: 14px;">
            <div>• VAT registration and deregistration</div>
            <div>• VAT return preparation and filing</div>
            <div>• Transaction-level VAT advisory</div>
            <div>• VAT health checks and pre-audit reviews</div>
            <div>• Input VAT recovery analysis</div>
            <div>• Output VAT reconciliation</div>
            <div>• Zero-rated and exempt supply assessments</div>
            <div>• Reverse Charge Mechanism reviews</div>
            <div>• Import and export VAT advisory</div>
            <div>• Tax invoice and ERP template compliance</div>
            <div>• VAT accounting and ledger reconciliation</div>
            <div>• VAT211 / Form 211 Voluntary Disclosure</div>
            <div>• FTA tax audit assistance</div>
            <div>• VAT documentation reviews</div>
            <div>• VAT training for finance teams</div>
        </div>
    </div>
    <p><em>The goal is not a submitted return. It is a return that is supported by the records behind it.</em></p>

    <!-- Registration Thresholds -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">VAT Registration Thresholds: AED 375,000 and AED 187,500</h2>
    <p>Taxable turnover needs monitoring continuously - not once a year when the accounts are closed. The registration test runs on a rolling basis.</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 25px 0;">
        <div style="background: #ffffff; border-top: 4px solid #dc2626; border: 1px solid #e2e8f0; border-top-width: 4px; padding: 20px; border-radius: 8px;">
            <div style="font-size: 22px; font-weight: 800; color: #dc2626;">AED 375,000</div>
            <h3 style="margin: 5px 0; color: #0b2545; font-size: 18px;">Mandatory Registration</h3>
            <p style="font-size: 14px; color: #475569;">Registration is mandatory for a UAE-resident business where taxable supplies and imports exceeded AED 375,000 over the previous 12 months, OR are expected to exceed AED 375,000 in the next 30 days.</p>
            <p style="font-size: 13px; color: #7f1d1d; font-weight: bold; margin-bottom: 0;">⚠️ Missing the deadline triggers AED 10,000 penalty plus uncollected VAT liabilities.</p>
        </div>
        <div style="background: #ffffff; border-top: 4px solid #2563eb; border: 1px solid #e2e8f0; border-top-width: 4px; padding: 20px; border-radius: 8px;">
            <div style="font-size: 22px; font-weight: 800; color: #2563eb;">AED 187,500</div>
            <h3 style="margin: 5px 0; color: #0b2545; font-size: 18px;">Voluntary Registration</h3>
            <p style="font-size: 14px; color: #475569;">A UAE-resident business may apply voluntarily once taxable supplies, imports or qualifying taxable expenses exceed AED 187,500.</p>
            <p style="font-size: 13px; color: #1e3a8a; font-weight: bold; margin-bottom: 0;">💡 Recovering input VAT on startup costs can outweigh compliance effort.</p>
        </div>
    </div>

    <!-- Rates & Exemption Comparison Table -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">5% Standard-Rated, 0% Zero-Rated and Exempt - The Difference That Costs Money</h2>
    <p>Zero-rated and exempt look identical from the customer’s side. The customer pays no VAT either way. From the supplier’s side they are not remotely the same.</p>

    <div style="overflow-x: auto; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
            <thead>
                <tr style="background-color: #134074; color: #ffffff;">
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">Treatment</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">Rate</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">What happens on supply</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">Input VAT recovery</th>
                </tr>
            </thead>
            <tbody>
                <tr style="background-color: #ffffff;">
                    <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold;">Standard-rated</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">5%</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">VAT charged to customer at 5% and reported as output VAT</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1; color: #166534; font-weight: bold;">Generally recoverable</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                    <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold;">Zero-rated</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">0%</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">Taxable supply, but VAT applied at 0% where conditions met</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1; color: #166534; font-weight: bold;">Generally recoverable</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold;">Exempt</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">Exempt</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">No VAT charged because supply falls within an exemption</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1; color: #991b1b; font-weight: bold;">NOT recoverable</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- What Misclassification Costs -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What Misclassification Actually Costs</h2>
    <p>Get the treatment wrong and the effects compound across periods: output VAT underdeclared, input VAT overclaimed, returns that no longer reconcile to the ledger, tax invoices issued with wrong treatment, cash-flow pressure, Voluntary Disclosure obligations, and FTA administrative penalties.</p>

    <!-- Services Detail -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Our VAT Services in Detail</h2>
    
    <h3 style="color: #134074; font-size: 19px;">1. VAT Registration</h3>
    <p>Registration requires taxable turnover to be calculated correctly and evidenced (taxable sales, zero-rated sales, imports, taxable expenses, forecast turnover, trade licence & ownership details). We submit through EmaraTax.</p>

    <h3 style="color: #134074; font-size: 19px;">2. VAT Return Preparation and Filing</h3>
    <p>Returns and payment are due within 28 days of tax period end. We cover sales, purchases, output & recoverable input VAT, Reverse Charge Mechanism entries, imports/exports, zero-rated/exempt supplies, and reconcile back to accounting ledgers before filing.</p>

    <h3 style="color: #134074; font-size: 19px;">3. VAT Health Checks</h3>
    <p>Structured review of filed returns against records to uncover incorrect rates, omitted output VAT, duplicated or non-recoverable input claims, non-compliant tax invoices, and ledger variances.</p>

    <h3 style="color: #134074; font-size: 19px;">4. VAT211 / Form 211 Voluntary Disclosure</h3>
    <p>Mechanism for notifying the FTA of qualifying errors or omissions. Required where filed positions are materially wrong (AED 10,000 threshold applies for error correction route).</p>

    <!-- Administrative Penalties Table -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">FTA Administrative Penalties (Cabinet Decision No. 129 of 2025 - Effective 14 April 2026)</h2>
    <p>Administrative penalties apply where VAT and Tax Procedures obligations are not met. The framework was amended by Cabinet Decision No. 129 of 2025, taking effect from 14 April 2026.</p>

    <div style="overflow-x: auto; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
            <thead>
                <tr style="background-color: #0b2545; color: #ffffff;">
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">Compliance Issue</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">Penalty / Treatment</th>
                </tr>
            </thead>
            <tbody>
                <tr style="background-color: #ffffff;">
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">Failure to provide requested records or documents in Arabic</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold;">AED 5,000</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">Failure to notify FTA of required changes to registration info</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold;">AED 1,000 per violation; AED 5,000 if repeated within 24 months</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">Legal representative not notifying FTA of appointment in time</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold;">AED 1,000 (payable by legal representative)</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">Late payment of payable tax</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">Calculated under statutory interest mechanism</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td style="padding: 12px; border: 1px solid #cbd5e1;">Failure to disclose before notification of an FTA audit</td>
                    <td style="padding: 12px; border: 1px solid #cbd5e1; color: #dc2626; font-weight: bold;">Additional penalty exposure arises</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- FTA Audit Support -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">FTA VAT Audit Support & Dubai Specific Issues</h2>
    <p>Our audit support includes pre-audit health checks, return-to-ledger reconciliations, transaction sampling, document preparation, and drafting responses to FTA audit queries.</p>
    <p>For ${loc.city_name} businesses, we handle cross-border trade, designated zone rules, mainland-to-free-zone supplies, Reverse Charge Mechanism (RCM), and real estate transactions.</p>

    <!-- Why NUFCA -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Why Businesses Choose NUFCA</h2>
    <ul style="padding-left: 20px; font-size: 15px;">
        <li><strong>Chartered Accountants doing VAT work:</strong> Reconciling returns directly to accounting ledgers.</li>
        <li><strong>Real commercial experience:</strong> Trading, services, real estate, precious metals & cross-border deals.</li>
        <li><strong>Full VAT Lifecycle Support:</strong> Registration, filing, health checks, VAT211 voluntary disclosure & audit defense.</li>
        <li><strong>Actionable controls:</strong> Invoice templates, ERP mapping & staff training.</li>
    </ul>

    <!-- FAQs Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">VAT Consultancy Services in ${loc.city_name} - Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What are VAT consultancy services in ${loc.city_name}?</h3>
            <p style="margin: 0; color: #475569;">They cover practical management of UAE VAT: registration, classifying transactions correctly, preparing & filing returns, recovering input VAT, correcting errors via voluntary disclosure (VAT211), running health checks and handling FTA audits.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is the mandatory VAT registration threshold in UAE?</h3>
            <p style="margin: 0; color: #475569;">For UAE-resident businesses, registration is mandatory once taxable supplies and imports exceed AED 375,000 across the previous 12 months, or are expected to exceed AED 375,000 in the next 30 days.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is the voluntary registration threshold?</h3>
            <p style="margin: 0; color: #475569;">A UAE-resident business may apply voluntarily once qualifying taxable supplies, imports or taxable expenses exceed AED 187,500.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is the difference between zero-rated and exempt?</h3>
            <p style="margin: 0; color: #475569;">Zero-rated supplies are still taxable supplies charged at 0%, and input VAT relating to qualifying zero-rated activity may generally be recovered. Exempt supplies are not taxable supplies, and input VAT directly attributable to them is NOT recoverable.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ When are VAT returns due?</h3>
            <p style="margin: 0; color: #475569;">Returns and the associated payment are generally due within 28 days of the end of the relevant tax period assigned to the business.</p>
        </div>
    </div>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px; margin-top: 40px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Speak to a VAT Consultant in ${loc.city_name}</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>${loc.phone}</strong> or request a free review online.</p>
        <a href="https://nufca.com/contact-us/" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 14px 32px; text-decoration: none; border-radius: 6px; display: inline-block;">Speak to a VAT Consultant →</a>
    </div>

</div>`;
}

async function createAllProgrammaticVatPages() {
    console.log("🚀 Creating 5 Programmatic VAT Location Pages in WordPress...\n");

    let parentId = 0;

    // 1. Create or Update Main Parent Page: vat-consultancy-in-uae
    const mainLoc = vatLocations[0];
    const mainHTML = generateVatPageHTML(mainLoc);

    // Search if parent page already exists
    const searchRes = await fetch("https://nufca.com/wp-json/wp/v2/pages?slug=vat-consultancy-in-uae", { headers });
    const searchPages = await searchRes.json();

    if (searchPages.length > 0) {
        parentId = searchPages[0].id;
        console.log(`Updating existing Parent Page ID ${parentId} (vat-consultancy-in-uae)...`);
        await fetch(`https://nufca.com/wp-json/wp/v2/pages/${parentId}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                title: mainLoc.h1_title,
                content: mainHTML,
                status: "publish"
            })
        });
    } else {
        console.log("Creating NEW Parent Page (vat-consultancy-in-uae)...");
        const createRes = await fetch("https://nufca.com/wp-json/wp/v2/pages", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                title: mainLoc.h1_title,
                slug: mainLoc.slug,
                content: mainHTML,
                status: "publish"
            })
        });
        const createdData = await createRes.json();
        parentId = createdData.id;
        console.log(`🎉 Parent Page Created with ID ${parentId}!`);
    }

    // 2. Create or Update 4 Child Location Pages
    for (let i = 1; i < vatLocations.length; i++) {
        const childLoc = vatLocations[i];
        const childHTML = generateVatPageHTML(childLoc);

        console.log(`Processing Child Page: ${childLoc.slug} under Parent ID ${parentId}...`);

        const childSearchRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages?slug=${childLoc.slug}&parent=${parentId}`, { headers });
        const childPages = await childSearchRes.json();

        if (childPages.length > 0) {
            console.log(`  --> Updating existing Child Page ID ${childPages[0].id}...`);
            await fetch(`https://nufca.com/wp-json/wp/v2/pages/${childPages[0].id}`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    title: childLoc.h1_title,
                    content: childHTML,
                    status: "publish"
                })
            });
        } else {
            console.log(`  --> Creating NEW Child Page ${childLoc.slug}...`);
            const cRes = await fetch("https://nufca.com/wp-json/wp/v2/pages", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    title: childLoc.h1_title,
                    slug: childLoc.slug,
                    parent: parentId,
                    content: childHTML,
                    status: "publish"
                })
            });
            const cData = await cRes.json();
            console.log(`  --> 🎉 Child Page Created with ID ${cData.id}!`);
        }
    }

    console.log("\n🎉 ALL 5 PROGRAMMATIC VAT PAGES CREATED & PUBLISHED SUCCESSFULLY!");
}

createAllProgrammaticVatPages();
