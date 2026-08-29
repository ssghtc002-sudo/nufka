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

const reraAuditUAE_HTML = `<div class="nufca-article-container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.8; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 15px;">
    
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
        <option value="https://nufca.com/rera-audit-uae/" selected>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/rera-audit-uae/dubai/">🏙️ Dubai (Bur Dubai Head Office)</option>
        <option value="https://nufca.com/rera-audit-uae/gold-souk-dubai/">🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/rera-audit-uae/abu-dhabi/">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/rera-audit-uae/sharjah/">🏭 Sharjah (Hamriyah Free Zone)</option>
      </select>
    </div>

    <!-- Hero Section -->
    <div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 40px 25px; border-radius: 12px; margin-bottom: 30px;">
        <span style="background: rgba(255,255,255,0.15); color: #fff; font-size: 12px; font-weight: bold; padding: 6px 14px; border-radius: 20px; text-transform: uppercase;">
            Law No. 8 of 2007 • Escrow Audits • Mollak System • Service Charge Certification
        </span>
        <h1 style="color: #ffffff !important; font-size: clamp(24px, 5vw, 34px); margin-top: 15px; font-weight: 800; line-height: 1.25;">RERA Approved Auditors in Dubai & UAE: Escrow, Mollak & Service Charge Audit</h1>
        <p style="font-size: 17px; opacity: 0.95; max-width: 850px; margin-bottom: 20px;">Nadeem and Umendra Chartered Accountants (NUFCA) is listed on the Dubai Land Department (DLD) approved financial auditor roster — acting on developer escrow accounts and annual Mollak Jointly Owned Property (JOP) audits.</p>
        
        <!-- Trust Strip -->
        <div style="display: flex; flex-wrap: wrap; gap: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 13px; font-weight: 600;">
            <span>✓ RERA & DLD Approved Financial Auditors</span>
            <span>✓ Law No. 8 of 2007 Escrow Compliance</span>
            <span>✓ Mollak Portal Electronic Submissions</span>
            <span>✓ Service Charge Index Rate Benchmarking</span>
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
            <span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Direct RERA Audit Access</span>
            <h3 style="color: #0b2545; margin: 4px 0 8px 0; font-size: clamp(18px, 3.2vw, 21px); font-weight: 800; line-height: 1.3;">Speak With Our Approved RERA Auditors in UAE</h3>
            <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">Need project cost/revenue certification, escrow account compliance audits, or Mollak budget approvals in UAE? Connect directly with our accredited team without filling forms.</p>
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

    <!-- Escrow Account Obligations -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Escrow Account Obligations for Off-Plan Developers (Law No. 8 of 2007)</h2>
    <p>Any developer selling off-plan real estate units before completion falls strictly under <strong>Law No. 8 of 2007 on Escrow Accounts for Real Estate Development</strong>. Money paid by buyers is legally ring-fenced: <em>one development, one dedicated escrow account.</em></p>
    
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin: 15px 0;">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 17px;">Key Escrow Legal Requirements:</h3>
        <ul style="margin: 0; padding-left: 20px; font-size: 14.5px; line-height: 1.8;">
            <li><strong>Certified Initial Statement:</strong> Opening an escrow account requires a certified statement of projected project costs and revenues signed by an accredited chartered auditor.</li>
            <li><strong>Ring-Fenced Project Financing:</strong> All buyer collections and bank facilities must flow directly into the project's designated escrow account.</li>
            <li><strong>5% Completion Retention:</strong> The escrow agent retains 5% of total project value, released one full year after title registration in buyers' names.</li>
            <li><strong>Marketing Restrictions:</strong> Off-plan projects cannot be marketed or collect funds prior to RERA project registration and escrow account activation.</li>
        </ul>
    </div>

    <!-- What Our Escrow Audit Covers -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What Our Escrow Audit Covers</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; margin: 15px 0;">
        <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 6px; font-size: 13.5px;">• Escrow bank statements & deposit tracing</div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 6px; font-size: 13.5px;">• Collections matched against DLD & Oqood</div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 6px; font-size: 13.5px;">• Verification of construction release payments</div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 6px; font-size: 13.5px;">• Engineering payment certificates & contracts</div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 6px; font-size: 13.5px;">• Cost & revenue general ledgers</div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 6px; font-size: 13.5px;">• 5% retention verification on completion</div>
    </div>

    <!-- Mollak Submissions & Service Charge Audits -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Mollak Submissions & Jointly Owned Property Audits</h2>
    <p>Mollak is the Dubai Land Department’s electronic system governing service charges and accounts for Jointly Owned Properties (JOP). Service charge budgets cannot be billed to unit owners without a completed audit from a RERA-accredited auditor.</p>

    <!-- 6-Step Mollak Audit Workflow -->
    <h3 style="color: #0b2545; font-size: 18px; margin-top: 25px;">The 6-Step Service Charge Approval Workflow:</h3>
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin: 15px 0;">
        <ol style="margin: 0; padding-left: 20px; font-size: 14.5px; line-height: 1.8;">
            <li><strong>Auditor Appointment via Mollak:</strong> Management entity appoints NUFCA through the official DLD Mollak portal.</li>
            <li><strong>Assembling 3-Tender Documentation:</strong> Compiling detailed budgets, 3 competitive tender proposals per vendor, utility bills, and maintenance agreements.</li>
            <li><strong>Line-by-Line Component Audit:</strong> Testing security, cleaning, utilities, insurance, master-community charges, and capital reserve funds.</li>
            <li><strong>Benchmarking Against Service Charge Index:</strong> Measuring rates against historical data and the public DLD Service Charge Index.</li>
            <li><strong>Issuing Report & Electronic Mollak Filing:</strong> Uploading the accredited audit report and financial files to RERA.</li>
            <li><strong>RERA Approval & Invoicing:</strong> Once cleared, approved rates appear on Mollak for direct owner invoicing.</li>
        </ol>
        <p style="margin: 10px 0 0 0; font-size: 13px; color: #64748b;"><em>*Note: Under DLD regulations, the same auditor may not audit the same JOP project for more than two consecutive years.</em></p>
    </div>

    <!-- FAQs Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Frequently Asked Questions About RERA & Escrow Audits</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is Law No. 8 of 2007 for Escrow Accounts?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">It is Dubai’s real estate legislation requiring off-plan developers to deposit all buyer collections into a project-specific escrow account opened with an approved escrow agent.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Is an audit required for Mollak service charge approvals?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">Yes. RERA will only approve annual service charge budgets and usage fees after an independent financial audit report is submitted via the Mollak portal by a RERA-accredited auditor.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ When is the 5% escrow retention released to developers?</h3>
            <p style="margin: 0; color: #475569; font-size: 14.5px;">The 5% retention amount is released by the escrow agent one full year after the title deeds of the completed units are registered in the purchasers’ names.</p>
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
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Talk to Our RERA Approved Auditors in UAE</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">NUFCA Head Office • 510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>04 325 8361 / 055-9831923</strong> — Talk through your project timeline.</p>
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
  "name": "NUF Chartered Accountants - RERA Approved Auditors UAE",
  "url": "https://nufca.com/rera-audit-uae/",
  "telephone": "+97143258361",
  "email": "info@nufca.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "serviceType": "RERA Escrow Account Audit, Mollak Service Charge Audit & JOP Certification",
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
      "name": "What is Law No. 8 of 2007 for Escrow Accounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is Dubai’s real estate legislation requiring off-plan developers to deposit all buyer collections into a project-specific escrow account opened with an approved escrow agent."
      }
    },
    {
      "@type": "Question",
      "name": "Is an audit required for Mollak service charge approvals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. RERA will only approve annual service charge budgets and usage fees after an independent financial audit report is submitted via the Mollak portal by a RERA-accredited auditor."
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
      "name": "RERA Approved Auditors in UAE",
      "item": "https://nufca.com/rera-audit-uae/"
    }
  ]
}
</script>`;

async function updateRERAAuditUAE() {
    console.log("🚀 Updating Page ID 99200 (/rera-audit-uae/) with 100% full content from Doc 5...");

    const res = await fetch("https://nufca.com/wp-json/wp/v2/pages/99200", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            title: "RERA Approved Auditors in Dubai: Escrow, Mollak & Service Charge Audit | NUFCA",
            content: reraAuditUAE_HTML,
            status: "publish"
        })
    });

    console.log("Update status:", res.status);
    console.log("🎉 5. RERA Approved Auditors in UAE successfully updated!");
}

updateRERAAuditUAE();
