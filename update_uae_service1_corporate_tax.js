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

const corporateTaxUAE_HTML = `<div class="nufca-article-container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.8; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 15px;">
    
    <style>
    .nufca-consultation-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-left: 5px solid #134074;
        border-radius: 10px;
        padding: 20px 24px;
        margin: 25px 0 35px 0;
        box-shadow: 0 4px 15px rgba(11, 37, 69, 0.04);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    .nufca-card-content {
        flex: 1 1 340px;
    }
    .nufca-card-actions {
        flex: 0 0 240px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .nufca-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 6px;
        font-weight: 700;
        font-size: 13.5px;
        text-decoration: none !important;
        transition: all 0.2s ease;
        box-sizing: border-box;
        width: 100%;
        line-height: 1.3;
    }
    .nufca-btn-wa {
        background-color: #25d366;
        color: #ffffff !important;
    }
    .nufca-btn-wa:hover {
        background-color: #20ba5a;
    }
    .nufca-btn-call {
        background-color: #0b2545;
        color: #ffffff !important;
    }
    .nufca-btn-call:hover {
        background-color: #134074;
    }
    .nufca-btn-mail {
        background-color: #f8fafc;
        color: #334155 !important;
        border: 1px solid #cbd5e1;
        font-size: 13px;
        font-weight: 600;
    }
    .nufca-btn-mail:hover {
        background-color: #f1f5f9;
        color: #0b2545 !important;
    }
    @media (max-width: 768px) {
        .nufca-consultation-card {
            padding: 16px;
            gap: 16px;
        }
        .nufca-card-actions {
            flex: 1 1 100%;
            width: 100%;
        }
    }
    </style>

    <!-- Filter Location Dropdown Bar -->
    <div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">📍</span>
        <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
      </div>
      <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
        <option value="https://nufca.com/corporate-tax-in-uae/" selected>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/corporate-tax-in-uae/dubai/">🏙️ Dubai (Bur Dubai Head Office)</option>
        <option value="https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/">🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/corporate-tax-in-uae/abu-dhabi/">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/corporate-tax-in-uae/sharjah/">🏭 Sharjah (Hamriyah Free Zone)</option>
      </select>
    </div>

    <!-- Hero Section -->
    <div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 40px 25px; border-radius: 12px; margin-bottom: 30px;">
        <span style="background: rgba(255,255,255,0.15); color: #fff; font-size: 12px; font-weight: bold; padding: 6px 14px; border-radius: 20px; text-transform: uppercase;">
            Federal Decree-Law No. 47 of 2022 - Now In Force
        </span>
        <h1 style="color: #ffffff !important; font-size: clamp(24px, 5vw, 34px); margin-top: 15px; font-weight: 800; line-height: 1.25;">Corporate Tax Consultants in UAE Who Handle the Filing, Not Just the Advice</h1>
        <p style="font-size: 17px; opacity: 0.95; max-width: 850px; margin-bottom: 20px;">Registration, taxable income computation, free zone QFZP assessment, transfer pricing documentation, and return filing — delivered by qualified UAE tax advisors before your nine-month deadline, not after it.</p>
        
        <!-- Trust Strip -->
        <div style="display: flex; flex-wrap: wrap; gap: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 13px; font-weight: 600;">
            <span>✓ FTA-registered tax agents</span>
            <span>✓ 500+ UAE entities onboarded</span>
            <span>✓ Mainland, free zone & multinational groups</span>
            <span>✓ Response within one working day</span>
        </div>

        <!-- Branch Address Bar -->
        <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); padding: 15px 20px; border-radius: 8px; margin-top: 20px; font-size: 14px;">
            <div style="font-weight: bold; color: #8da9c4; font-size: 11px; text-transform: uppercase;">📍 NUFCA Head Office:</div>
            <div style="font-size: 15px; font-weight: bold; margin-top: 2px;">510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE</div>
            <div style="margin-top: 4px;">📞 Phone: <strong>04 325 8361 / 055-9831923</strong> | ✉️ Email: <strong>info@nufca.com</strong></div>
        </div>
    </div>

    <!-- Direct Advisory Consultation Card -->
    <div class="nufca-consultation-card">
        <div class="nufca-card-content">
            <span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Direct Corporate Tax Advisory Access</span>
            <h3 style="color: #0b2545; margin: 4px 0 8px 0; font-size: clamp(18px, 3.2vw, 21px); font-weight: 800; line-height: 1.3;">Speak With Our Senior Corporate Tax Advisors in UAE</h3>
            <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">Need corporate tax registration, CT return filing, tax grouping, or Free Zone 0% QFZP review in UAE? Connect directly with our chartered accountants without filling forms.</p>
        </div>
        <div class="nufca-card-actions">
            <a href="https://wa.me/97142500679" target="_blank" class="nufca-btn nufca-btn-wa">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat on WhatsApp
            </a>
            <a href="tel:043258361" class="nufca-btn nufca-btn-call">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Direct Call (04 325 8361)
            </a>
            <a href="mailto:info@nufca.com" class="nufca-btn nufca-btn-mail">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                Email: info@nufca.com
            </a>
        </div>
    </div>

    <!-- The UAE Is No Longer a Zero-Tax Jurisdiction -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">The UAE Is No Longer a Zero-Tax Jurisdiction</h2>
    <p>For decades, the pitch for setting up in Dubai was simple: no corporate tax. That ended with <strong>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses</strong>, which introduced a federal corporate tax applying to financial years beginning on or after 1 June 2023.</p>
    <p>A company with a calendar financial year entered its first tax period on 1 January 2024. A company with a June year-end entered it a full seven months earlier.</p>
    <p>The law is not punitive by international standards — the headline rate of 9% remains one of the lowest anywhere — but it is administratively demanding.</p>
    <p>Every taxable person must register with the Federal Tax Authority, maintain accounting records to a standard that supports a tax computation, determine taxable income under statutory adjustment rules, assess whether related-party dealings meet the arm’s length principle, and file a return within nine months of the end of the tax period.</p>
    <p>Missing any of those steps carries a penalty, and the penalties apply whether or not any tax is actually due.</p>
    <p>This is where most businesses discover the gap between having an accountant and having a corporate tax consultant. Bookkeeping produces financial statements. Corporate tax compliance requires a separate technical exercise on top of them — and one where the errors are expensive and often invisible until the FTA asks a question.</p>

    <!-- The Rates: 0%, 9% and 15% Explained -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">The Rates: 0%, 9% and 15% Explained</h2>
    <p>The UAE operates a tiered structure, and understanding which tier applies is the single most common source of confusion we resolve.</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 25px 0;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; border-top: 4px solid #134074;">
            <h3 style="margin: 0 0 10px 0; color: #0b2545; font-size: 18px;">0% Corporate Tax Rate</h3>
            <p style="font-size: 14px; color: #475569; margin-bottom: 10px;">The 0% rate applies to taxable income up to <strong>AED 375,000</strong>. It also applies to the Qualifying Income of a Qualifying Free Zone Person (QFZP).</p>
            <p style="font-size: 13.5px; color: #64748b; margin: 0;">This is a genuine nil rate applied to the first slice of taxable income, not an exemption. A business earning AED 500,000 pays nothing on the first AED 375,000 and 9% on the remaining AED 125,000 (AED 11,250 tax). Being below AED 375,000 does not remove the obligation to register and file.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; border-top: 4px solid #134074;">
            <h3 style="margin: 0 0 10px 0; color: #0b2545; font-size: 18px;">9% Standard Tax Rate</h3>
            <p style="font-size: 14px; color: #475569; margin-bottom: 10px;">The standard 9% rate applies to taxable income exceeding <strong>AED 375,000</strong>.</p>
            <p style="font-size: 13.5px; color: #64748b; margin: 0;">It applies to mainland companies, non-qualifying free zone income, free zone entities that fail QFZP conditions, and UAE permanent establishments of foreign entities.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; border-top: 4px solid #134074;">
            <h3 style="margin: 0 0 10px 0; color: #0b2545; font-size: 18px;">15% Pillar Two Top-up Tax</h3>
            <p style="font-size: 14px; color: #475569; margin-bottom: 10px;">A 15% Domestic Minimum Top-up Tax applies to multinational groups with global revenues of at least <strong>EUR 750 million</strong>.</p>
            <p style="font-size: 13.5px; color: #64748b; margin: 0;">Applies to financial years starting on or after 1 January 2025 aligned with the OECD Pillar Two framework.</p>
        </div>
    </div>

    <!-- Small Business Relief -->
    <div style="background: #f8fafc; border-left: 4px solid #0369a1; padding: 18px 20px; border-radius: 6px; margin: 25px 0;">
        <h4 style="margin: 0 0 6px 0; color: #0b2545; font-size: 16px;">💡 Small Business Relief (Ministerial Decision No. 73 of 2023)</h4>
        <p style="margin: 0; font-size: 14.5px; color: #334155;">A resident taxable person with gross revenue of <strong>AED 3 million or less</strong> in the current and all previous tax periods may elect to be treated as having no taxable income. Available for tax periods ending on or before 31 December 2026. <em>Small Business Relief must be claimed through an election in the corporate tax return — it is not automatic.</em> Not available to QFZPs or members of qualifying multinational groups.</p>
    </div>

    <!-- Taxable Income Is Not Accounting Profit -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Taxable Income Is Not Accounting Profit</h2>
    <p>Taxable income begins with accounting profit but is adjusted under statutory corporate tax rules. Potential mandatory adjustments include:</p>
    
    <ul style="padding-left: 20px; font-size: 15px; color: #334155;">
        <li><strong>Unrealised Gains and Losses:</strong> Adjustments for capital and revenue assets.</li>
        <li><strong>Exempt Income:</strong> Including qualifying dividends and capital gains covered by the participation exemption.</li>
        <li><strong>Non-deductible Expenditure:</strong> Fines, penalties, bribes, and personal expenses.</li>
        <li><strong>Interest Limitation Rule:</strong> Net interest deduction capped broadly at 30% of adjusted EBITDA, subject to de minimis threshold.</li>
        <li><strong>Entertainment Expenses:</strong> Restricted strictly to a 50% deduction.</li>
        <li><strong>Transfer Pricing Adjustments:</strong> Adjustments on non-arm's-length related-party transactions.</li>
        <li><strong>Tax Losses Carry-Forward:</strong> Tax losses may be carried forward indefinitely, but can offset only up to <strong>75% of taxable income</strong> in any subsequent tax period under continuity-of-ownership rules.</li>
    </ul>

    <!-- Free Zone QFZP Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Free Zone Companies: The QFZP Conditions Most Businesses Fail</h2>
    <p>Free zone companies can retain a 0% corporate tax rate, but only on Qualifying Income and only while they satisfy all conditions for <strong>Qualifying Free Zone Person (QFZP)</strong> status under Article 18 of the Decree-Law. A trade licence issued by a free zone does not, by itself, confer QFZP status.</p>

    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 22px; margin: 20px 0;">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 18px;">Mandatory QFZP Qualifying Criteria:</h3>
        <ol style="padding-left: 20px; margin: 0; font-size: 14.5px; line-height: 1.8;">
            <li><strong>Maintain Adequate Substance in the Free Zone:</strong> Core income-generating activities (CIGA), adequate physical assets, qualified full-time staff, and operating expenditure within the free zone.</li>
            <li><strong>Derive Qualifying Income:</strong> Income from transactions with other Free Zone Persons (who are beneficial recipients) or income from specified Qualifying Activities:
                <div style="margin: 8px 0 8px 10px; font-size: 13.5px; color: #475569;">
                    • Manufacturing & processing of goods<br>
                    • Holding shares and securities for investment<br>
                    • Ownership, management & operation of ships<br>
                    • Reinsurance & fund management services<br>
                    • Wealth & investment management services<br>
                    • Headquarter & treasury services to related parties<br>
                    • Financing & leasing of aircraft<br>
                    • Distribution of goods in or from a Designated Zone<br>
                    • Logistics services
                </div>
            </li>
            <li><strong>Avoid Excluded Activities:</strong> Transactions with natural persons (with limited exceptions), banking, insurance, commercial property outside free zones, and non-commercial real estate.</li>
            <li><strong>Do Not Elect Into Standard CT Regime:</strong> Free zone entities that elect into standard 9% cannot claim 0% QFZP status.</li>
            <li><strong>Comply With Transfer Pricing:</strong> Adhere to the arm's length principle and prepare required TP documentation.</li>
            <li><strong>Satisfy the De Minimis Requirement:</strong> Non-qualifying revenue must not exceed the lower of <strong>5% of total revenue</strong> or <strong>AED 5 million</strong>.</li>
            <li><strong>Prepare Audited Financial Statements:</strong> Mandatory audited financials are required by law for all QFZPs.</li>
        </ol>
    </div>

    <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 15px 20px; border-radius: 6px; margin: 20px 0;">
        <h4 style="margin: 0 0 5px 0; color: #991b1b; font-size: 15px;">⚠️ The Five-Period Disqualification Consequence:</h4>
        <p style="margin: 0; font-size: 14px; color: #7f1d1d;">Breaching the de minimis threshold or any other QFZP condition causes an entity to lose its 0% status for the current tax period <strong>plus the following four tax periods (5 years in total)</strong>. A single mishandled mainland contract can expose five full years of revenue to standard corporate tax.</p>
    </div>

    <!-- Transfer Pricing & Documentation -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Transfer Pricing and the Master File Requirement</h2>
    <p>Article 34 requires all transactions with Related Parties and Connected Persons to satisfy the arm's length standard. Under Ministerial Decision No. 97 of 2023, taxable persons must maintain both a <strong>Master File</strong> and a <strong>Local File</strong> where:</p>
    <ul style="padding-left: 20px; font-size: 14.5px;">
        <li>Entity revenue in the tax period is <strong>AED 200 million or more</strong>; or</li>
        <li>The entity is part of an MNE group with consolidated revenue of <strong>AED 3.15 billion or more</strong>.</li>
    </ul>
    <p><em>Both files must be submitted to the FTA within 30 days of a request. Contemporaneous preparation is essential.</em></p>
    <p><strong>Connected Persons Remuneration:</strong> Payments to owners, directors, and officers are deductible only to the extent of market value. Un-benchmarked director salaries are the most frequently adjusted items in FTA audits.</p>

    <!-- What Our Consultants Deliver -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What Our Corporate Tax Consultants in UAE Deliver</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 25px 0;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px;">
            <h4 style="color: #0b2545; margin: 0 0 6px 0; font-size: 16px;">1. Corporate Tax Registration</h4>
            <p style="margin: 0; font-size: 13.5px; color: #475569;">Taxable person assessment, EmaraTax filing, and obtaining your Corporate Tax Registration Number (TRN).</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px;">
            <h4 style="color: #0b2545; margin: 0 0 6px 0; font-size: 16px;">2. Tax Computation & Return Filing</h4>
            <p style="margin: 0; font-size: 13.5px; color: #475569;">Converting financial accounts into compliant tax computations with complete statutory adjustment schedules.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px;">
            <h4 style="color: #0b2545; margin: 0 0 6px 0; font-size: 16px;">3. Free Zone QFZP Assessment</h4>
            <p style="margin: 0; font-size: 13.5px; color: #475569;">Revenue mapping, de minimis tracking, substance review, and formal tax position papers for auditors & FTA.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px;">
            <h4 style="color: #0b2545; margin: 0 0 6px 0; font-size: 16px;">4. Transfer Pricing Services</h4>
            <p style="margin: 0; font-size: 13.5px; color: #475569;">Benchmarking studies, Master File & Local File compilation, TP disclosure forms, and intercompany agreements.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px;">
            <h4 style="color: #0b2545; margin: 0 0 6px 0; font-size: 16px;">5. Tax Group Formation</h4>
            <p style="margin: 0; font-size: 13.5px; color: #475569;">Reviewing 95% ownership criteria, consolidation modeling, and filing tax group applications on EmaraTax.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px;">
            <h4 style="color: #0b2545; margin: 0 0 6px 0; font-size: 16px;">6. Health Checks & Second Opinions</h4>
            <p style="margin: 0; font-size: 13.5px; color: #475569;">Independent review of filed returns and tax positions, identifying exposures before FTA audit notices arrive.</p>
        </div>
    </div>

    <!-- Deadlines and Penalties -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Deadlines and Penalties</h2>
    <p>• <strong>Late Registration Penalty:</strong> AED 10,000 administrative penalty for missing FTA registration deadlines based on licence issuance month.<br>
    • <strong>Filing Deadlines:</strong> Tax returns and payments are due within <strong>9 months</strong> of the financial year-end (e.g. 30 September 2026 for Dec 2025 year-end).<br>
    • <strong>Record Retention:</strong> Corporate tax records must be retained for at least <strong>7 years</strong>.</p>

    <!-- FAQs Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Corporate Tax in the UAE - Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is Federal Decree-Law No. 47 of 2022?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">It is the UAE’s federal corporate tax law on the Taxation of Corporations and Businesses, introducing a 9% federal tax on business profits for financial years starting on or after 1 June 2023.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What are the UAE corporate tax rates?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">The UAE applies a 0% rate to taxable income up to AED 375,000 and 9% above AED 375,000. Qualifying Free Zone Persons can access 0% on Qualifying Income. Large MNEs (global revenue &ge; EUR 750M) are subject to a 15% Domestic Minimum Top-up Tax under Pillar Two starting 2025.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Do I need to register if my profit is below AED 375,000?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">Yes. The AED 375,000 threshold determines the tax rate, not the registration requirement. Every taxable entity must register with the FTA, obtain a Corporate Tax Registration Number, and file an annual tax return.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Are free zone companies exempt from corporate tax in the UAE?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">No. Free zone companies access 0% only on Qualifying Income if they meet all QFZP conditions. Non-qualifying income is taxed at 9%. Holding a free zone licence does not automatically grant 0% tax.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What are the QFZP conditions?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">Maintaining adequate substance, deriving Qualifying Income, not electing standard 9% CT, complying with transfer pricing, maintaining audited financial statements, and satisfying the de minimis rule (non-qualifying revenue not exceeding lower of 5% total revenue or AED 5 million).</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What happens if a free zone company breaches the de minimis threshold?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">The company loses its QFZP status for that tax period and remains disqualified for the subsequent 4 tax periods (5 years in total), subjecting all income to the standard corporate tax regime.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Who must prepare a transfer pricing Master File and Local File?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">Taxable persons with revenue of AED 200 million or more, or members of an MNE group with consolidated revenue of AED 3.15 billion or more. Both files must be submitted within 30 days upon FTA request.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ When is the corporate tax return due?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">The return and tax payment are due within 9 months following the end of the tax period (e.g. 30 September 2026 for a financial year ending 31 December 2025).</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is Small Business Relief?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">An election available to resident taxable persons with revenue of AED 3 million or less per tax period up to 31 December 2026, treating taxable income as nil. Must be explicitly elected in the tax return.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What penalties apply for corporate tax non-compliance?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">Penalties include AED 10,000 for late registration, monthly progressive penalties for late filing, percentage charges for late payment, and penalties for incorrect returns or record-keeping failures.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Is there withholding tax on payments out of the UAE?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">The UAE currently applies a 0% withholding tax rate on domestic and cross-border payments. No separate withholding tax registration or filing is currently required.</p>
        </div>
    </div>

    <!-- Related Services Section -->
    <div class="nufca-related-services-section" style="margin-top: 45px; padding-top: 30px; border-top: 2px solid #e2e8f0;">
        <div style="text-align: center; margin-bottom: 25px;">
            <span style="background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 11px; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">Comprehensive Advisory Suite</span>
            <h2 style="color: #0b2545; font-size: clamp(20px, 3.5vw, 25px); margin: 8px 0 6px 0; font-weight: 800;">Related Accounting, Tax & Audit Services in UAE</h2>
            <p style="color: #64748b; font-size: 14.5px; max-width: 700px; margin: 0 auto;">Discover our integrated chartered accountancy and regulatory compliance solutions across UAE.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 20px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #134074; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(11,37,69,0.03); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="font-size: 24px; margin-bottom: 8px;">📊</div>
                    <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0b2545; font-weight: 700; line-height: 1.3;"><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #0b2545; text-decoration: none;">VAT Advisory & Return Filing in UAE</a></h4>
                    <p style="color: #475569; font-size: 13.5px; line-height: 1.5; margin: 0 0 15px 0;">Quarterly VAT filing, FTA registration/deregistration, input tax optimization, and refund claims.</p>
                </div>
                <div><a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; font-weight: 700; font-size: 13px; text-decoration: none;">Explore Service →</a></div>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #134074; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(11,37,69,0.03); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="font-size: 24px; margin-bottom: 8px;">📑</div>
                    <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0b2545; font-weight: 700; line-height: 1.3;"><a href="https://nufca.com/audit-assurance-uae/" style="color: #0b2545; text-decoration: none;">External Financial Audit in UAE</a></h4>
                    <p style="color: #475569; font-size: 13.5px; line-height: 1.5; margin: 0 0 15px 0;">Statutory financial audit, balance sheet certification, and free zone / bank compliance.</p>
                </div>
                <div><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; font-weight: 700; font-size: 13px; text-decoration: none;">Explore Service →</a></div>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #134074; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(11,37,69,0.03); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="font-size: 24px; margin-bottom: 8px;">🛡️</div>
                    <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0b2545; font-weight: 700; line-height: 1.3;"><a href="https://nufca.com/internal-audit-uae/" style="color: #0b2545; text-decoration: none;">Internal Audit & Controls in UAE</a></h4>
                    <p style="color: #475569; font-size: 13.5px; line-height: 1.5; margin: 0 0 15px 0;">Internal control evaluation, corporate governance, operational risk assessment, and SOP reviews.</p>
                </div>
                <div><a href="https://nufca.com/internal-audit-uae/" style="color: #134074; font-weight: 700; font-size: 13px; text-decoration: none;">Explore Service →</a></div>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #134074; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(11,37,69,0.03); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="font-size: 24px; margin-bottom: 8px;">🏗️</div>
                    <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0b2545; font-weight: 700; line-height: 1.3;"><a href="https://nufca.com/rera-audit-uae/" style="color: #0b2545; text-decoration: none;">RERA Approved Escrow Audit in UAE</a></h4>
                    <p style="color: #475569; font-size: 13.5px; line-height: 1.5; margin: 0 0 15px 0;">Law No. 8 of 2007 escrow account auditing, project financial status reports, and DLD compliance.</p>
                </div>
                <div><a href="https://nufca.com/rera-audit-uae/" style="color: #134074; font-weight: 700; font-size: 13px; text-decoration: none;">Explore Service →</a></div>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #134074; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(11,37,69,0.03); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="font-size: 24px; margin-bottom: 8px;">🏘️</div>
                    <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0b2545; font-weight: 700; line-height: 1.3;"><a href="https://nufca.com/mollak-audit-services-uae/" style="color: #0b2545; text-decoration: none;">Mollak Service Charge Audit in UAE</a></h4>
                    <p style="color: #475569; font-size: 13.5px; line-height: 1.5; margin: 0 0 15px 0;">Jointly owned property audits, service charge budget approvals, and owner balance reconciliations.</p>
                </div>
                <div><a href="https://nufca.com/mollak-audit-services-uae/" style="color: #134074; font-weight: 700; font-size: 13px; text-decoration: none;">Explore Service →</a></div>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #134074; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(11,37,69,0.03); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="font-size: 24px; margin-bottom: 8px;">⚖️</div>
                    <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0b2545; font-weight: 700; line-height: 1.3;"><a href="https://nufca.com/fta-vat-audit-assistance-uae/" style="color: #0b2545; text-decoration: none;">FTA Tax Audit Representation in UAE</a></h4>
                    <p style="color: #475569; font-size: 13.5px; line-height: 1.5; margin: 0 0 15px 0;">Audit defense representation, Form 211 voluntary disclosures, and penalty waiver assistance.</p>
                </div>
                <div><a href="https://nufca.com/fta-vat-audit-assistance-uae/" style="color: #134074; font-weight: 700; font-size: 13px; text-decoration: none;">Explore Service →</a></div>
            </div>
        </div>
    </div>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px; margin-top: 40px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Still Have Questions? Speak to a Corporate Tax Consultant in UAE</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">NUFCA Head Office • 510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>04 325 8361 / 055-9831923</strong> — Your first consultation is free.</p>
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <a href="https://wa.me/97142500679" target="_blank" style="background: #25d366; color: #ffffff; font-weight: bold; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">💬 Chat on WhatsApp (+971 4 250 0679)</a>
            <a href="tel:043258361" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">📞 Call (04 325 8361)</a>
        </div>
    </div>

</div>

<!-- JSON-LD Structured Schema Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "NUF Chartered Accountants - Corporate Tax in UAE",
  "url": "https://nufca.com/corporate-tax-in-uae/",
  "telephone": "+97143258361",
  "email": "info@nufca.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "serviceType": "Corporate Tax Advisory, Registration & Return Filing",
  "provider": {
    "@type": "AccountingService",
    "name": "NUF Chartered Accountants"
  }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Federal Decree-Law No. 47 of 2022?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is the UAE’s federal corporate tax law on the Taxation of Corporations and Businesses, introducing a 9% federal tax on business profits for financial years starting on or after 1 June 2023."
      }
    },
    {
      "@type": "Question",
      "name": "What are the UAE corporate tax rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The UAE applies a 0% rate to taxable income up to AED 375,000 and 9% above AED 375,000. Qualifying Free Zone Persons can access 0% on Qualifying Income. Large MNEs (global revenue >= EUR 750M) are subject to a 15% Domestic Minimum Top-up Tax under Pillar Two starting 2025."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to register if my profit is below AED 375,000?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The AED 375,000 threshold determines the tax rate, not the registration requirement. Every taxable entity must register with the FTA, obtain a Corporate Tax Registration Number, and file an annual tax return."
      }
    },
    {
      "@type": "Question",
      "name": "Are free zone companies exempt from corporate tax in the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Free zone companies access 0% only on Qualifying Income if they meet all QFZP conditions. Non-qualifying income is taxed at 9%. Holding a free zone licence does not automatically grant 0% tax."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a free zone company breaches the de minimis threshold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The company loses its QFZP status for that tax period and remains disqualified for the subsequent 4 tax periods (5 years in total), subjecting all income to the standard corporate tax regime."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
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
      "name": "Corporate Tax in UAE",
      "item": "https://nufca.com/corporate-tax-in-uae/"
    }
  ]
}
</script>`;

async function updateCorporateTaxUAE() {
    console.log("🚀 Updating Page ID 99001 (/corporate-tax-in-uae/) with 100% full content from Doc 1...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/pages/99001", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            title: "Corporate Tax in UAE | Corporate Tax Consultants",
            content: corporateTaxUAE_HTML,
            status: "publish"
        })
    });

    console.log("Update status:", res.status);
    console.log("🎉 1. Corporate Tax in UAE successfully updated!");
}

updateCorporateTaxUAE();
