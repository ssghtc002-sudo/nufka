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

const esrComplianceUAE_HTML = `<div class="nufca-article-container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.8; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 15px;">
    
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
        <option value="https://nufca.com/esr-compliance-services-in-uae" selected>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/esr-compliance-services-in-uae/dubai">🏙️ Dubai (Bur Dubai Head Office)</option>
        <option value="https://nufca.com/esr-compliance-services-in-uae/gold-souk-dubai">🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/esr-compliance-services-in-uae/abu-dhabi">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/esr-compliance-services-in-uae/sharjah">🏭 Sharjah (Hamriyah Free Zone)</option>
      </select>
    </div>

    <!-- Hero Section -->
    <div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 40px 25px; border-radius: 12px; margin-bottom: 30px;">
        <span style="background: rgba(255,255,255,0.15); color: #fff; font-size: 12px; font-weight: bold; padding: 6px 14px; border-radius: 20px; text-transform: uppercase;">
            Cabinet Decision No. 98 of 2024 • 9 Relevant Activities • CIGA Test • Legacy Remediation
        </span>
        <h1 style="color: #ffffff !important; font-size: clamp(24px, 5vw, 34px); margin-top: 15px; font-weight: 800; line-height: 1.25;">ESR Compliance Services in Dubai & UAE: Relevant Activities & CIGA | NUFCA</h1>
        <p style="font-size: 17px; opacity: 0.95; max-width: 850px; margin-bottom: 20px;">Under Cabinet Decision No. 98 of 2024, the Economic Substance Regulations (ESR) apply to financial years 1 Jan 2019 through 31 Dec 2022. NUFCA provides legacy ESR remediation, FTA audit representation, penalty waivers, and guidance on Corporate Tax substance rules.</p>
        
        <!-- Trust Strip -->
        <div style="display: flex; flex-wrap: wrap; gap: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 13px; font-weight: 600;">
            <span>✓ Cabinet Decision 98/2024 Legal Expertise</span>
            <span>✓ CIGA & Substance Testing</span>
            <span>✓ 2019–2022 Legacy Remediation & MoF Portal</span>
            <span>✓ Corporate Tax 0% QFZP Substance Transition</span>
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
            <span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Direct ESR Advisory Access</span>
            <h3 style="color: #0b2545; margin: 4px 0 8px 0; font-size: clamp(18px, 3.2vw, 21px); font-weight: 800; line-height: 1.3;">Speak With Our Senior ESR & Tax Consultants in UAE</h3>
            <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">Need to correct past 2019-2022 ESR notifications, handle FTA penalty assessments, or establish Corporate Tax Qualifying Free Zone economic substance in UAE? Connect directly without filling forms.</p>
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

    <!-- Cabinet Decision 98 of 2024 Legal Notice -->
    <div style="background: #e0f2fe; border-left: 4px solid #0369a1; padding: 14px 18px; border-radius: 6px; margin: 20px 0;">
        <h4 style="margin: 0 0 4px 0; color: #0369a1; font-size: 15px;">📜 Crucial Regulatory Update: Cabinet Decision No. 98 of 2024</h4>
        <p style="margin: 0; font-size: 14px; color: #0c4a6e;">The UAE ESR regime officially applies only to financial years from <strong>1 January 2019 through 31 December 2022</strong>. No notifications or reports are required for financial years ending after 31 December 2022, and penalties for subsequent years have been withdrawn. However, the FTA retains full statutory powers to audit, examine, and penalise non-compliance for the 2019–2022 legacy years.</p>
    </div>

    <!-- 9 Relevant Activities -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">The 9 Relevant Activities Covered Under UAE ESR</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; margin: 15px 0;">
        <div style="background: #f8fafc; border-left: 3px solid #134074; padding: 10px 14px; font-size: 13.5px;"><strong>1. Banking Business:</strong> Regulated banking operations, credit extension & fund sourcing.</div>
        <div style="background: #f8fafc; border-left: 3px solid #134074; padding: 10px 14px; font-size: 13.5px;"><strong>2. Insurance Business:</strong> Underwriting, policy design, risk pricing & claim settlements.</div>
        <div style="background: #f8fafc; border-left: 3px solid #134074; padding: 10px 14px; font-size: 13.5px;"><strong>3. Investment Fund Management:</strong> Discretionary portfolio management & risk modeling.</div>
        <div style="background: #f8fafc; border-left: 3px solid #134074; padding: 10px 14px; font-size: 13.5px;"><strong>4. Lease-Finance Business:</strong> Asset leasing, financing terms negotiation & credit appraisal.</div>
        <div style="background: #f8fafc; border-left: 3px solid #134074; padding: 10px 14px; font-size: 13.5px;"><strong>5. Headquarters Business:</strong> Group strategy, senior management & operational direction.</div>
        <div style="background: #f8fafc; border-left: 3px solid #134074; padding: 10px 14px; font-size: 13.5px;"><strong>6. Holding Company Business:</strong> Holding equity participations & tracking dividends.</div>
        <div style="background: #f8fafc; border-left: 3px solid #134074; padding: 10px 14px; font-size: 13.5px;"><strong>7. Intellectual Property (IP) Business:</strong> R&D, patent/trademark exploitation & licensing.</div>
        <div style="background: #f8fafc; border-left: 3px solid #134074; padding: 10px 14px; font-size: 13.5px;"><strong>8. Distribution & Service Centre:</strong> Purchasing goods from foreign affiliates or servicing them.</div>
        <div style="background: #f8fafc; border-left: 3px solid #134074; padding: 10px 14px; font-size: 13.5px;"><strong>9. Shipping Business:</strong> Operating vessels in international traffic, crewing & logistics.</div>
    </div>

    <!-- CIGA & Substance Testing -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">The Core Income Generating Activities (CIGA) Test</h2>
    <p>To pass the Economic Substance Test during the relevant financial years, licensees were legally required to prove that their core income-generating activities took place inside the UAE with adequate local substance:</p>
    
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin: 15px 0;">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 17px;">The 5 Pillars of the Economic Substance Test:</h3>
        <ul style="margin: 0; padding-left: 20px; font-size: 14.5px; line-height: 1.8;">
            <li><strong>Adequate Qualified Employees:</strong> Full-time resident staff with matching competencies in the UAE.</li>
            <li><strong>Adequate Physical Premises:</strong> Dedicated commercial office space and operating equipment.</li>
            <li><strong>Adequate Operating Expenditure:</strong> Proportionate operational costs incurred locally in the UAE.</li>
            <li><strong>Directed and Managed Locally:</strong> Board meetings held with quorum physically present in UAE, minuted and signed.</li>
            <li><strong>Genuine Local CIGA:</strong> Core revenue-generating tasks executed within UAE borders without artificial outsourcing.</li>
        </ul>
    </div>

    <!-- Statutory Filing Deadlines Table -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">ESR Notification and Report Deadlines (2019–2022)</h2>
    <div style="overflow-x: auto; margin: 15px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
            <thead>
                <tr style="background: #134074; color: #ffffff;">
                    <th style="padding: 10px 14px; border: 1px solid #cbd5e1;">Financial Year End</th>
                    <th style="padding: 10px 14px; border: 1px solid #cbd5e1;">ESR Notification (6 Months)</th>
                    <th style="padding: 10px 14px; border: 1px solid #cbd5e1;">Economic Substance Report (12 Months)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1; font-weight: bold;">31 March</td>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1;">30 September</td>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1;">31 March (Following Year)</td>
                </tr>
                <tr style="background: #f8fafc;">
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1; font-weight: bold;">30 June</td>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1;">31 December</td>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1;">30 June (Following Year)</td>
                </tr>
                <tr>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1; font-weight: bold;">30 September</td>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1;">31 March</td>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1;">30 September (Following Year)</td>
                </tr>
                <tr style="background: #f8fafc;">
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1; font-weight: bold;">31 December</td>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1;">30 June</td>
                    <td style="padding: 10px 14px; border: 1px solid #cbd5e1;">31 December (Following Year)</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Transition to Corporate Tax -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Transition to Corporate Tax 0% Free Zone Substance</h2>
    <p>While standalone ESR filings are abolished for periods after 2022, economic substance remains vital under the <strong>UAE Corporate Tax Regime</strong>. Free Zone companies claiming the <strong>0% Qualifying Free Zone Person (QFZP)</strong> rate must demonstrate "Adequate Substance" in the UAE under Ministerial Decision No. 139 of 2023.</p>

    <!-- FAQs Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Frequently Asked Questions About ESR Compliance</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Are ESR filings still required in the UAE?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">No filings are required for financial years ending after 31 December 2022 pursuant to Cabinet Decision No. 98 of 2024. However, historical filings for 2019 to 2022 remain subject to FTA review and penalties.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What replaced ESR after 2022?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">The UAE Federal Corporate Tax regime replaced ESR, embedding adequate substance requirements for Free Zone entities seeking the 0% Qualifying Free Zone Person (QFZP) tax rate.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Can penalties still be assessed for 2019–2022 ESR non-compliance?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">Yes. The Federal Tax Authority retains enforcement powers over the 2019–2022 financial years and can inspect past records or issue amended penalty assessments within the statutory limitation period.</p>
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
                    <div style="font-size: 24px; margin-bottom: 8px;">🏢</div>
                    <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0b2545; font-weight: 700; line-height: 1.3;"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #0b2545; text-decoration: none;">Corporate Tax Advisory in UAE</a></h4>
                    <p style="color: #475569; font-size: 13.5px; line-height: 1.5; margin: 0 0 15px 0;">Registration, 9% taxable income computation, Free Zone 0% QFZP review, and annual filing.</p>
                </div>
                <div><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; font-weight: 700; font-size: 13px; text-decoration: none;">Explore Service →</a></div>
            </div>
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
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Need ESR Remediation or Substance Advisory in UAE?</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">NUFCA Head Office • 510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>04 325 8361 / 055-9831923</strong> — Talk through your substance compliance.</p>
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
  "name": "NUF Chartered Accountants - ESR Compliance Services UAE",
  "url": "https://nufca.com/esr-compliance-services-in-uae",
  "telephone": "+97143258361",
  "email": "info@nufca.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "serviceType": "ESR Compliance, CIGA Substance Reviews & Cabinet Decision 98/2024 Remediation",
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
      "name": "Are ESR filings still required in the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No filings are required for financial years ending after 31 December 2022 pursuant to Cabinet Decision No. 98 of 2024. However, historical filings for 2019 to 2022 remain subject to FTA review and penalties."
      }
    },
    {
      "@type": "Question",
      "name": "What replaced ESR after 2022?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The UAE Federal Corporate Tax regime replaced ESR, embedding adequate substance requirements for Free Zone entities seeking the 0% Qualifying Free Zone Person (QFZP) tax rate."
      }
    },
    {
      "@type": "Question",
      "name": "Can penalties still be assessed for 2019–2022 ESR non-compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Federal Tax Authority retains enforcement powers over the 2019–2022 financial years and can inspect past records or issue amended penalty assessments within the statutory limitation period."
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
      "name": "ESR Compliance Services in UAE",
      "item": "https://nufca.com/esr-compliance-services-in-uae"
    }
  ]
}
</script>`;

async function updateESRComplianceUAE() {
    console.log("🚀 Updating Page ID 99505 (/esr-compliance-services-in-uae) with 100% full content from Doc 9...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/pages/99505", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            title: "ESR Compliance Services in Dubai & UAE: Relevant Activities & CIGA | NUFCA",
            content: esrComplianceUAE_HTML,
            status: "publish"
        })
    });

    console.log("Update status:", res.status);
    console.log("🎉 9. ESR Compliance in UAE successfully updated!");
}

updateESRComplianceUAE();
