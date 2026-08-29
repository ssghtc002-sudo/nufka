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
        slug: "mollak-audit-services-uae",
        city_name: "UAE",
        branch_title: "NUFCA Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "Mollak Services & Audit in UAE",
        eyebrow: "DLD & RERA Approved Mollak Audit Services",
        hero_headline: "Mollak Audit Services in UAE for Service Charge & Owner Balance Verification",
        hero_subheadline: "Accredited financial audit, budget approval, owner statement reconciliation, and RERA compliance support for management companies and jointly owned properties across the UAE."
    },
    {
        slug: "dubai",
        city_name: "Dubai",
        branch_title: "NUFCA Dubai Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "Mollak Services & Audit in Dubai",
        eyebrow: "DLD & RERA Approved Mollak Audit Services",
        hero_headline: "Mollak Audit Services in Dubai for Service Charge & Owner Balance Verification",
        hero_subheadline: "Accredited financial audit, budget approval, owner statement reconciliation, and RERA compliance support for management companies and jointly owned properties in Dubai."
    },
    {
        slug: "gold-souk-dubai",
        city_name: "Gold Souk (Deira, Dubai)",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "Mollak Services & Audit in Gold Souk, Deira",
        eyebrow: "Commercial Property Mollak Support",
        hero_headline: "Mollak Audit Services in Gold Souk Deira for Commercial & Joint Properties",
        hero_subheadline: "Service charge audits, owner balance reconciliations, and property compliance for Deira commercial developments and management entities."
    },
    {
        slug: "abu-dhabi",
        city_name: "Abu Dhabi",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "info@nufca.com",
        h1_title: "Mollak Services & Audit in Abu Dhabi",
        eyebrow: "Real Estate Financial Audit Services",
        hero_headline: "Mollak & Property Audit Services in Abu Dhabi for Management Companies",
        hero_subheadline: "Service charge reviews, reserve fund verification, and financial reporting support for developers and property management entities in Abu Dhabi."
    },
    {
        slug: "sharjah",
        city_name: "Sharjah",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com",
        h1_title: "Mollak Services & Audit in Sharjah",
        eyebrow: "Real Estate Financial Audit Services",
        hero_headline: "Mollak & Property Audit Services in Sharjah for Joint Developments",
        hero_subheadline: "Service charge budget audits, property ledger reviews, and financial statement verification for Sharjah real estate management firms."
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
        <option value="https://nufca.com/mollak-audit-services-uae/" ${currentSlug==='mollak-audit-services-uae'?'selected':''}>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/mollak-audit-services-uae/dubai/" ${currentSlug==='dubai'?'selected':''}>🏙️ Dubai (Bur Dubai Head Office)</option>
        <option value="https://nufca.com/mollak-audit-services-uae/gold-souk-dubai/" ${currentSlug==='gold-souk-dubai'?'selected':''}>🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/mollak-audit-services-uae/abu-dhabi/" ${currentSlug==='abu-dhabi'?'selected':''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/mollak-audit-services-uae/sharjah/" ${currentSlug==='sharjah'?'selected':''}>🏭 Sharjah (Hamriyah Free Zone)</option>
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
            <span>✓ Mollak Portal Compliant</span>
            <span>✓ Law No. 6 of 2019 Aligned</span>
            <span>✓ RERA Approved Financial Auditors</span>
            <span>✓ Chartered Accountants (NUFCA)</span>
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
            <span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Direct Mollak Advisory Access</span>
            <h3 style="color: #0b2545; margin: 4px 0 8px 0; font-size: clamp(18px, 3.2vw, 21px); font-weight: 800; line-height: 1.3;">Speak With Our Mollak & RERA Audit Specialists in ${loc.city_name}</h3>
            <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">Get immediate assistance on service charge budget audits, owner statement reconciliations, or legal balance verifications. Connect directly with our chartered accountants without filling forms.</p>
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
    <p style="font-size: 16px;"><strong>NUF Chartered Accountants</strong> works directly with jointly owned properties, property management companies, and real estate stakeholders across ${loc.city_name} to fulfill their Mollak obligations — service charge budget audits, financial audits, owner balance verification, and the broader RERA compliance picture.</p>
    <p style="font-size: 16px;"><strong>Mollak</strong> operates under the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA). Its objective is governance, transparency, and financial integrity in jointly owned properties. The system regulates management company registrations, service charge budget approvals, financial statement filings, invoice issuance, and regulatory bank accounts.</p>
    <p style="font-size: 16px;">Our role sits on the financial and assurance side: preparing, auditing, reconciling, and verifying the financial records that enter Mollak and move through RERA approval.</p>

    <!-- Getting Mollak Submissions Right -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Getting Mollak Submissions Right</h2>
    <p>The core expectation for management companies is clear: all data submitted to Mollak must be complete, mathematically reconciled, and supported by independent documentation.</p>

    <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 17px;">Key Compliance Obligations Include:</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
            <div>• Management company & authorized user registrations</div>
            <div>• Registration of the jointly owned property community</div>
            <div>• Up-to-date management agreements in Mollak</div>
            <div>• Appointing a RERA-approved financial auditor</div>
            <div>• Maintaining the designated regulatory bank account</div>
            <div>• Filing annual service & usage charge budgets</div>
            <div>• Uploading audited financial statements & reports</div>
            <div>• Securing RERA approval prior to issuing invoices</div>
            <div>• Reconciling owner invoices against Mollak balances</div>
            <div>• Maintaining full paper trails for common-area spending</div>
        </div>
    </div>

    <!-- Law No. 6 of 2019 -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Audit Rules for Jointly Owned Properties (Law No. 6 of 2019)</h2>
    <p>Financial reporting for jointly owned properties in Dubai is governed by <strong>Law No. 6 of 2019 Concerning Ownership of Jointly Owned Real Property</strong>. Substantive responsibilities rest with authorized Management Companies, with oversight from Owners Committees.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 25px 0;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">📊 Service Charge Budget Audits</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Annual budgets must be built on verifiable cost estimates and audited by a RERA-approved firm before approval.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🏦 General vs Reserve Funds</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">General funds cover operating expenses, while reserve funds for capital replacement are accounted for and audited separately.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">⚖️ Legal Recovery Verification</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">For legal recovery of outstanding fees, auditors tie Mollak payment notices to statements of account and audited receivables.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🔄 Bank & Ledger Reconciliation</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Collections must sit in the regulatory bank account and reconcile 1:1 with owner ledgers and Mollak records.</p>
        </div>
    </div>

    <!-- Service Charge Verification Checklist -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">21-Point Service Charge Verification Checklist</h2>
    <p>Every management company should review the following checkpoints before finalizing a budget or audit submission:</p>

    <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin: 20px 0; font-size: 14px; line-height: 1.8;">
        <div>✓ 1. Jointly owned property and management company active in Mollak.</div>
        <div>✓ 2. Correct financial year and service charge period defined.</div>
        <div>✓ 3. Budget built on current, supportable cost quotations.</div>
        <div>✓ 4. Budget submitted for or cleared through RERA approval.</div>
        <div>✓ 5. Service charge income reconciled to unit schedules.</div>
        <div>✓ 6. Unit areas and allocation methodology agree with title records.</div>
        <div>✓ 7. Security, cleaning, and FM contracts audited.</div>
        <div>✓ 8. Common-area electricity, water, and cooling costs verified.</div>
        <div>✓ 9. Property insurance verified against underlying policies.</div>
        <div>✓ 10. Management and administrative fees reviewed.</div>
        <div>✓ 11. Master community usage charges verified where applicable.</div>
        <div>✓ 12. Reserve fund contributions separated from general operating funds.</div>
        <div>✓ 13. Actual spending compared to approved budget with variance notes.</div>
        <div>✓ 14. Supplier invoices and contracts support all material expenses.</div>
        <div>✓ 15. Regulatory bank account reconciled to accounting ledger.</div>
        <div>✓ 16. Owner statements of account reconcile to Mollak balances.</div>
        <div>✓ 17. Partial payments, credit notes, and receipts examined.</div>
        <div>✓ 18. Prior-year owner opening balances verified.</div>
        <div>✓ 19. Adjustments posted to owner accounts authorized and evidenced.</div>
        <div>✓ 20. Discrepancies between audited financials and Mollak resolved.</div>
        <div>✓ 21. Complete documentation file assembled for RERA review.</div>
    </div>

    <!-- How We Help -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Our Mollak Audit & Compliance Scope in ${loc.city_name}</h2>
    
    <div style="margin: 20px 0; font-size: 15px;">
        <p>• <strong>Service Charge Budget Reviews:</strong> Line-by-line verification of budget lines against tender evaluations and contracts.</p>
        <p>• <strong>Annual Final Account Audits:</strong> Independent financial audit of jointly owned property year-end statements.</p>
        <p>• <strong>Mollak Data Reconciliations:</strong> Resolving discrepancies between internal property management software and Mollak.</p>
        <p>• <strong>Owner Balance Verification for Legal Notices:</strong> Detailed auditing of unpaid service charges for legal notice execution.</p>
        <p>• <strong>Reserve Fund Studies & Reviews:</strong> Evaluating capital reserves to ensure compliance with RERA guidelines.</p>
    </div>

    <!-- FAQs Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is the Mollak system in Dubai?</h3>
            <p style="margin: 0; color: #475569;">Mollak is a Dubai Land Department and RERA electronic platform that regulates jointly owned properties, service charge budget approvals, financial audit filings, and owner invoicing.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Who approves service charges for jointly owned properties?</h3>
            <p style="margin: 0; color: #475569;">RERA approves service charge budgets once an accredited financial auditing firm completes the mandatory audit.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ How can an owner check an approved service charge?</h3>
            <p style="margin: 0; color: #475569;">Owners can check approved rates via the Dubai Land Department Service Charge Index by selecting the project, usage type, and financial year.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is the difference between general fund and reserve fund?</h3>
            <p style="margin: 0; color: #475569;">The general fund covers recurring operating costs (security, cleaning, maintenance), while the reserve fund is dedicated to capital replacements and major future repairs.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Can NUF Chartered Accountants verify owner balances for legal notices?</h3>
            <p style="margin: 0; color: #475569;">Yes. We perform independent verification of owner statements, Mollak notices, and audited receivables to ensure full compliance for legal recovery proceedings.</p>
        </div>
    </div>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px; margin-top: 40px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Need Mollak Audit & Compliance Support in ${loc.city_name}?</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>${loc.phone}</strong> or speak to our RERA audit specialists.</p>
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
  "name": "NUF Chartered Accountants - Mollak Services & Audit",
  "url": "https://nufca.com/mollak-audit-services-uae/",
  "telephone": "+97143258361",
  "email": "info@nufca.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "serviceType": "Mollak Service Charge & RERA Audit Services",
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
      "name": "What is the Mollak system in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mollak is a Dubai Land Department and RERA electronic platform that regulates jointly owned properties, service charge budget approvals, financial audit filings, and owner invoicing."
      }
    },
    {
      "@type": "Question",
      "name": "Who approves service charges for jointly owned properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RERA approves service charge budgets once an accredited financial auditing firm completes the mandatory audit."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between general fund and reserve fund?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The general fund covers recurring operating costs (security, cleaning, maintenance), while the reserve fund is dedicated to capital replacements and major future repairs."
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
      "name": "Audit & Assurance",
      "item": "https://nufca.com/audit-assurance-uae/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Mollak Audit Services UAE",
      "item": "https://nufca.com/mollak-audit-services-uae/"
    }
  ]
}
</script>`;
}

async function createAllProgrammaticMollakPages() {
    console.log("🚀 Creating 5 Programmatic Mollak Audit Location Pages in WordPress...\n");

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

    console.log("\n🎉 ALL 5 PROGRAMMATIC MOLLAK AUDIT PAGES CREATED & PUBLISHED SUCCESSFULLY!");
}

createAllProgrammaticMollakPages();
