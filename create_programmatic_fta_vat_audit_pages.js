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
        slug: "fta-vat-audit-assistance-uae",
        city_name: "UAE",
        branch_title: "NUFCA Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "FTA VAT Audit Assistance in UAE",
        eyebrow: "Registered Tax Agents & Chartered Accountants",
        hero_headline: "FTA VAT Audit Assistance in UAE for Businesses & Corporate Entities",
        hero_subheadline: "Professional audit representation, VAT health checks, Form 211 voluntary disclosures, and penalty waiver assistance across the UAE."
    },
    {
        slug: "dubai",
        city_name: "Dubai",
        branch_title: "NUFCA Dubai Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "FTA VAT Audit Assistance in Dubai",
        eyebrow: "Registered Tax Agents & Chartered Accountants",
        hero_headline: "FTA VAT Audit Assistance in Dubai for Businesses & Corporate Entities",
        hero_subheadline: "Professional audit representation, VAT health checks, Form 211 voluntary disclosures, and penalty waiver assistance for Dubai mainland and free-zone companies."
    },
    {
        slug: "gold-souk-dubai",
        city_name: "Gold Souk (Deira, Dubai)",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "FTA VAT Audit Assistance in Gold Souk, Deira",
        eyebrow: "Specialized Tax Agents for Jewelers & Traders",
        hero_headline: "FTA VAT Audit Assistance in Gold Souk Deira for Jewelers & Traders",
        hero_subheadline: "VAT audit defense, reverse charge mechanism reviews, export evidence validation, and FTA compliance support for Gold Souk businesses."
    },
    {
        slug: "abu-dhabi",
        city_name: "Abu Dhabi",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "info@nufca.com",
        h1_title: "FTA VAT Audit Assistance in Abu Dhabi",
        eyebrow: "Registered Tax Agents & Chartered Accountants",
        hero_headline: "FTA VAT Audit Assistance in Abu Dhabi for Corporate Entities",
        hero_subheadline: "Tax audit representation, EmaraTax voluntary disclosures, penalty reconsideration applications, and VAT compliance for Abu Dhabi and ADGM entities."
    },
    {
        slug: "sharjah",
        city_name: "Sharjah",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com",
        h1_title: "FTA VAT Audit Assistance in Sharjah",
        eyebrow: "Registered Tax Agents & Chartered Accountants",
        hero_headline: "FTA VAT Audit Assistance in Sharjah for Free Zone & Mainland Firms",
        hero_subheadline: "FTA audit preparation, designated zone supply reviews, customs reconciliation, and tax audit representation for Sharjah companies."
    }
];

function generatePageHTML(loc) {
    const currentSlug = loc.slug;
    const cleanPhone = loc.phone.split('/')[0].trim();
    
    return `<div class="nufca-article-container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.75; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 15px;">
    
    <style>
    .nufca-consultation-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-left: 5px solid #134074;
        border-radius: 10px;
        padding: 20px 24px;
        margin: 20px 0 30px 0;
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
        <option value="https://nufca.com/fta-vat-audit-assistance-uae/" ${currentSlug==='fta-vat-audit-assistance-uae'?'selected':''}>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/fta-vat-audit-assistance-uae/dubai/" ${currentSlug==='dubai'?'selected':''}>🏙️ Dubai (Bur Dubai Head Office)</option>
        <option value="https://nufca.com/fta-vat-audit-assistance-uae/gold-souk-dubai/" ${currentSlug==='gold-souk-dubai'?'selected':''}>🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/fta-vat-audit-assistance-uae/abu-dhabi/" ${currentSlug==='abu-dhabi'?'selected':''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/fta-vat-audit-assistance-uae/sharjah/" ${currentSlug==='sharjah'?'selected':''}>🏭 Sharjah (Hamriyah Free Zone)</option>
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
            <span>✓ FTA Tax Audit Representation</span>
            <span>✓ Form 211 Voluntary Disclosures</span>
            <span>✓ Penalty Waiver Support</span>
            <span>✓ Registered Tax Agents (NUFCA)</span>
        </div>

        <!-- Branch Address Bar -->
        <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); padding: 15px 20px; border-radius: 8px; margin-top: 20px; font-size: 14px;">
            <div style="font-weight: bold; color: #8da9c4; font-size: 11px; text-transform: uppercase;">📍 ${loc.branch_title}:</div>
            <div style="font-size: 15px; font-weight: bold; margin-top: 2px;">${loc.address}</div>
            <div style="margin-top: 4px;">📞 Phone: <strong>${loc.phone}</strong> | ✉️ Email: <strong>${loc.email}</strong></div>
        </div>
    </div>

    <!-- Direct Consultation Advisory Card -->
    <div class="nufca-consultation-card">
        <div class="nufca-card-content">
            <span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Urgent FTA Audit Support</span>
            <h3 style="color: #0b2545; margin: 4px 0 8px 0; font-size: clamp(18px, 3.2vw, 21px); font-weight: 800; line-height: 1.3;">Speak With Our Senior VAT Audit Specialists in ${loc.city_name}</h3>
            <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">Received an audit notification from the FTA or preparing for a voluntary disclosure? Connect directly with our registered tax agents for immediate technical representation.</p>
        </div>
        <div class="nufca-card-actions">
            <a href="https://wa.me/97142500679" target="_blank" class="nufca-btn nufca-btn-wa">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat on WhatsApp
            </a>
            <a href="tel:${cleanPhone.replace(/\s+/g, '')}" class="nufca-btn nufca-btn-call">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Direct Call (${cleanPhone})
            </a>
            <a href="mailto:${loc.email}" class="nufca-btn nufca-btn-mail">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                Email: ${loc.email}
            </a>
        </div>
    </div>

    <!-- Intro -->
    <p style="font-size: 16px;">Most companies in the UAE meet their VAT obligations without ever thinking hard about them. Returns get filed, payments get made, and the topic disappears until an email arrives from the <strong>Federal Tax Authority (FTA)</strong> announcing a tax audit. At that point, the question is no longer whether the business intended to comply — it is whether the records can prove it did.</p>
    <p style="font-size: 16px;">That distinction catches out a surprising number of otherwise well-run businesses. An FTA audit is a strict documentary exercise. Explanations carry weight only when the paperwork behind them holds up under forensic review.</p>
    <p style="font-size: 16px;"><strong>NUF Chartered Accountants</strong> provides comprehensive FTA VAT audit assistance in ${loc.city_name} — from pre-audit health checks and Form 211 voluntary disclosures to on-site audit representation and penalty waiver submissions.</p>

    <!-- How an Audit Begins -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">How an FTA Tax Audit Actually Begins</h2>
    <p>A tax audit is the FTA's formal examination of a taxable person's records to verify that declared liabilities match financial reality. It is a supervisory power, not an accusation, and the Authority does not need specific grounds to exercise it.</p>
    
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 17px;">Common Patterns That Trigger FTA Audits:</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
            <div>• Repeated VAT refund claims where input tax exceeds output tax</div>
            <div>• Sharp swings in reported turnover compared to industry norms</div>
            <div>• Persistent late filing or late payment history</div>
            <div>• Mismatches between VAT returns and UAE Customs import data</div>
            <div>• Voluntary disclosures revealing systemic accounting errors</div>
            <div>• Sector-wide industry compliance sweeps initiated by the FTA</div>
        </div>
    </div>

    <!-- What FTA Examines -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What the Authority Examines</h2>
    <p>An FTA tax auditor tests whether the numbers on the VAT return reconcile back through the accounting system to source documents, and whether the correct VAT treatment was applied:</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 25px 0;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">📑 Invoices & Credit Notes</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Verifying full tax invoice requirements: TRNs, sequential numbering, tax breakdown, and valid currency conversions.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🔄 General Ledger Reconciliations</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Matching revenue in audited financial statements 1:1 against declared turnover on quarterly VAT returns.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🚢 Export & Zero-Rating Proof</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Customs exit declarations, commercial evidence, transport documents, and cross-border service agreements.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🏦 Reverse Charge & Bank Ledgers</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Self-accounting on imported services and full trace of bank statements against sales/purchase ledgers.</p>
        </div>
    </div>

    <!-- 6-Step Preparation Checklist -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Practical 6-Step Audit Preparation Checklist</h2>
    <div style="margin: 20px 0; font-size: 15px;">
        <p><strong>1. Reconcile Returns to the Books:</strong> Tie every filed VAT return back to trial balances and general ledgers, explaining any variances.</p>
        <p><strong>2. Test Tax Invoices for Legal Compliance:</strong> Sample issued and received invoices to ensure TRN, supplier details, and VAT formatting are 100% compliant.</p>
        <p><strong>3. Assemble the Accounting File:</strong> Export trial balances, profit & loss statements, fixed asset registers, and bank statements covering the audit period.</p>
        <p><strong>4. Rebuild VAT Control Accounts:</strong> Reconcile output and input tax control accounts, checking for unadjusted credit notes and manual journal entries.</p>
        <p><strong>5. Gather Transaction Backing Evidence:</strong> Collect contracts, purchase orders, delivery notes, and customs exit certificates for zero-rated supplies.</p>
        <p><strong>6. Rectify Known Errors via Form 211:</strong> Proactively disclose any discovered errors before the FTA identifies them during the audit.</p>
    </div>

    <!-- Form 211 & Voluntary Disclosure -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Voluntary Disclosure (Form 211) & Timing Rules</h2>
    <p><strong>Form 211</strong> is the official mechanism in EmaraTax to notify the FTA of an error in a previously submitted return. Where an error results in a tax difference exceeding <strong>AED 10,000</strong>, a voluntary disclosure must be submitted within the statutory timeframe from the discovery date.</p>
    <p><em>Proactive voluntary disclosure carries significantly lower percentage penalties compared to errors uncovered during an FTA audit.</em></p>

    <!-- Penalty Table -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">FTA Administrative Penalties & Relief Framework</h2>
    
    <div style="overflow-x: auto; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <thead>
                <tr style="background: #0b2545; color: #ffffff;">
                    <th style="padding: 12px; border: 1px solid #cbd5e1; width: 30%;">Penalty Category</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1; width: 70%;">Scope & Typical Trigger</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Late Registration</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Failing to apply for VAT registration once mandatory threshold is crossed</td>
                </tr>
                <tr style="background: #f8fafc;">
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Late Filing & Late Payment</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Submitting return post-deadline or delayed settlement of tax due</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Incorrect Return Submission</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Errors identified in submitted returns without prior voluntary disclosure</td>
                </tr>
                <tr style="background: #f8fafc;">
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Record Keeping & Language</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Failure to maintain accounting records for 5 years or provide Arabic records upon request</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- FAQs Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What does FTA VAT audit assistance involve?</h3>
            <p style="margin: 0; color: #475569;">It covers reconciling filed returns to accounting records, reviewing invoice validity, preparing files requested by the FTA, representing your business during the audit, and drafting technical responses.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ How far back can an FTA audit go?</h3>
            <p style="margin: 0; color: #475569;">UAE tax law requires accounting records to be retained for at least 5 years (15 years for real estate). Audits generally cover open periods within the statutory limitation window.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is Form 211 and when should it be filed?</h3>
            <p style="margin: 0; color: #475569;">Form 211 is the VAT Voluntary Disclosure form in EmaraTax. It must be filed when a discovered error results in a tax difference exceeding AED 10,000.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Can FTA VAT penalties be waived or reduced?</h3>
            <p style="margin: 0; color: #475569;">Yes. Taxable persons can submit an administrative penalty waiver application or instalment request through EmaraTax backed by documentary proof of reasonable cause.</p>
        </div>
    </div>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px; margin-top: 40px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Prepare for Your FTA VAT Audit in ${loc.city_name}</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>${loc.phone}</strong> or consult our senior registered tax agents.</p>
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <a href="https://wa.me/97142500679" target="_blank" style="background: #25d366; color: #ffffff; font-weight: bold; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">💬 Chat on WhatsApp (+971 4 250 0679)</a>
            <a href="tel:${cleanPhone.replace(/\s+/g, '')}" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">📞 Call (${cleanPhone})</a>
        </div>
    </div>

</div>

<!-- JSON-LD Structured Schema Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "NUF Chartered Accountants - FTA VAT Audit Assistance",
  "url": "https://nufca.com/fta-vat-audit-assistance-uae/",
  "telephone": "+97143258361",
  "email": "info@nufca.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "serviceType": "FTA VAT Audit Assistance & Representation",
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
      "name": "What does FTA VAT audit assistance involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It covers reconciling filed returns to accounting records, reviewing invoice validity, preparing files requested by the FTA, representing your business during the audit, and drafting technical responses."
      }
    },
    {
      "@type": "Question",
      "name": "How far back can an FTA audit go?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UAE tax law requires accounting records to be retained for at least 5 years (15 years for real estate). Audits generally cover open periods within the statutory limitation window."
      }
    },
    {
      "@type": "Question",
      "name": "What is Form 211 and when should it be filed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Form 211 is the VAT Voluntary Disclosure form in EmaraTax. It must be filed when a discovered error results in a tax difference exceeding AED 10,000."
      }
    },
    {
      "@type": "Question",
      "name": "Can FTA VAT penalties be waived or reduced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Taxable persons can submit an administrative penalty waiver application or instalment request through EmaraTax backed by documentary proof of reasonable cause."
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
      "name": "Tax Services",
      "item": "https://nufca.com/vat-consultancy-in-uae/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "FTA VAT Audit Assistance UAE",
      "item": "https://nufca.com/fta-vat-audit-assistance-uae/"
    }
  ]
}
</script>`;
}

async function createAllProgrammaticFtaVatPages() {
    console.log("🚀 Creating 5 Programmatic FTA VAT Audit Location Pages in WordPress...\n");

    let parentId = 0;

    // 1. Create or Update Main Parent Page
    const mainLoc = locations[0];
    const mainHTML = generatePageHTML(mainLoc);

    const searchRes = await fetch(`https://nufca.com/wp-json/wp/v2/pages?slug=${mainLoc.slug}`, { headers });
    const searchPages = await searchRes.json();

    if (searchPages.length > 0) {
        parentId = searchPages[0].id;
        console.log(`Updating existing Parent Page ID ${parentId} (${mainLoc.slug})...`);
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
        console.log(`Creating NEW Parent Page (${mainLoc.slug})...`);
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
    for (let i = 1; i < locations.length; i++) {
        const childLoc = locations[i];
        const childHTML = generatePageHTML(childLoc);

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

    console.log("\n🎉 ALL 5 PROGRAMMATIC FTA VAT AUDIT PAGES CREATED & PUBLISHED SUCCESSFULLY!");
}

createAllProgrammaticFtaVatPages();
