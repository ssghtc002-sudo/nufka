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
        slug: "rera-audit-uae",
        city_name: "UAE",
        branch_title: "NUFCA Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "RERA Approved Auditors in UAE",
        eyebrow: "DLD & RERA Approved Financial Auditors",
        hero_headline: "RERA Approved Auditors in UAE for Escrow, Mollak & Service Charge Audits",
        hero_subheadline: "Accredited financial audit services for real estate developers, jointly owned properties (JOP), and property management companies across the UAE."
    },
    {
        slug: "dubai",
        city_name: "Dubai",
        branch_title: "NUFCA Dubai Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "RERA Approved Auditors in Dubai",
        eyebrow: "DLD & RERA Approved Financial Auditors",
        hero_headline: "RERA Approved Auditors in Dubai for Escrow, Mollak & Service Charge Audits",
        hero_subheadline: "Accredited financial audit services for real estate developers, jointly owned properties (JOP), and property management companies in Dubai."
    },
    {
        slug: "gold-souk-dubai",
        city_name: "Gold Souk (Deira, Dubai)",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "RERA Approved Auditors in Gold Souk, Deira",
        eyebrow: "DLD & RERA Approved Financial Auditors",
        hero_headline: "RERA Approved Auditors in Gold Souk Deira for Real Estate & Commercial Audits",
        hero_subheadline: "Escrow account reviews, commercial property audits, and financial compliance services for Deira real estate developers and property owners."
    },
    {
        slug: "abu-dhabi",
        city_name: "Abu Dhabi",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "info@nufca.com",
        h1_title: "RERA Approved Auditors in Abu Dhabi",
        eyebrow: "DLD & Real Estate Financial Auditors",
        hero_headline: "RERA Approved Auditors in Abu Dhabi for Real Estate & Property Audits",
        hero_subheadline: "Escrow account compliance, service charge audits, and financial reporting for developers and property management entities in Abu Dhabi."
    },
    {
        slug: "sharjah",
        city_name: "Sharjah",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com",
        h1_title: "RERA Approved Auditors in Sharjah",
        eyebrow: "DLD & Real Estate Financial Auditors",
        hero_headline: "RERA Approved Auditors in Sharjah for Property & Development Audits",
        hero_subheadline: "Escrow compliance, commercial property reviews, and financial statement audits for developers and management firms in Sharjah."
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
        <option value="https://nufca.com/rera-audit-uae/" ${currentSlug==='rera-audit-uae'?'selected':''}>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/rera-audit-uae/dubai/" ${currentSlug==='dubai'?'selected':''}>🏙️ Dubai (Bur Dubai Head Office)</option>
        <option value="https://nufca.com/rera-audit-uae/gold-souk-dubai/" ${currentSlug==='gold-souk-dubai'?'selected':''}>🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/rera-audit-uae/abu-dhabi/" ${currentSlug==='abu-dhabi'?'selected':''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/rera-audit-uae/sharjah/" ${currentSlug==='sharjah'?'selected':''}>🏭 Sharjah (Hamriyah Free Zone)</option>
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
            <span>✓ DLD Roster Listed</span>
            <span>✓ Law No. 8 of 2007 Compliant</span>
            <span>✓ Mollak Portal Approved</span>
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
            <span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Direct RERA Advisory Access</span>
            <h3 style="color: #0b2545; margin: 4px 0 8px 0; font-size: clamp(18px, 3.2vw, 21px); font-weight: 800; line-height: 1.3;">Speak With Our RERA & Mollak Audit Specialists in ${loc.city_name}</h3>
            <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">Get immediate support on developer escrow accounts, Mollak budget approvals, or service charge audits. Connect directly with our accredited auditors without delay.</p>
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
    <p style="font-size: 16px;"><strong>Nadeem and Umendra Chartered Accountants (NUFCA)</strong> works extensively with the audit obligations that Dubai and UAE's real estate sector carries — developers launching off-plan projects, management companies running residential communities, and the jointly owned buildings themselves.</p>
    <p style="font-size: 16px;">Our firm appears on the <strong>Dubai Land Department's (DLD) roster of approved financial auditors</strong>, which means we can act on both halves of the regulatory picture: the escrow controls that sit behind off-plan sales, and the annual financial and service-charge audits that apply to Jointly Owned Property (JOP).</p>
    <p style="font-size: 16px;">The work we take on ranges from escrow account audits and Mollak submission support to service-charge budget reviews, year-end final account audits, and general compliance advisory. In each case the aim is the same — records that reconcile, documentation that stands up to review, and submissions that move through the Dubai Land Department and Real Estate Regulatory Agency (RERA) without avoidable delay.</p>

    <!-- Escrow Account Obligations -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Escrow Account Obligations for Off-Plan Developers</h2>
    <p>Any developer selling units before completion in Dubai falls under <strong>Law No. 8 of 2007 on Escrow Accounts for Real Estate Development</strong>. The purpose of the framework is straightforward: money paid by buyers must be ring-fenced and spent solely on the project those buyers actually bought into.</p>
    <p>The mechanics follow from that principle. The account is opened through an approved escrow agent and held in the name of the individual development — not the developer as a whole. One project, one account. Whatever sits in it is committed strictly to constructing and completing that specific development.</p>
    <p>Opening the account is itself a documented exercise requiring a statement of projected costs and revenues, certified by an accredited chartered auditor. Oversight continues with periodic filing statements, and at completion, a 5% retention is held for one year post-registration.</p>

    <!-- What Escrow Audit Covers -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What Our Escrow Audit Covers</h2>
    <p>Depending on the stage and size of the development, our escrow audit procedures extend to:</p>
    
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
            <div>• Bank statements & transaction activity on project escrow account</div>
            <div>• Purchaser collections traced through to escrow deposits</div>
            <div>• Bank facilities drawn for project financing</div>
            <div>• Releases to contractors, consultants & permitted recipients</div>
            <div>• Underlying cost & revenue ledgers for the development</div>
            <div>• Invoices, payment certificates & contractor agreements</div>
            <div>• Construction progress records relevant to fund releases</div>
            <div>• Sales & collection data checked against DLD & Oqood records</div>
            <div>• Closing balances & bank reconciliations on escrow accounts</div>
            <div>• 5% retention balances arising upon project handover</div>
            <div>• Financial reports prepared for RERA and DLD filing</div>
        </div>
    </div>

    <!-- Mollak Submissions & Support -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Mollak Submissions and Audit Support</h2>
    <p><strong>Mollak</strong> is the Dubai Land Department’s electronic platform for regulating and monitoring service charges and the financial accounts of jointly owned properties. It handles registration of management companies, regulated community accounts, service-charge budget approvals, financial filings, and invoicing.</p>
    <p>We support management companies and jointly owned properties across the entire Mollak workflow:</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 25px 0;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">📑 Budget & Account Audits</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Audit of annual service charge budgets and year-end final financial statements.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🔄 Mollak Data Reconciliation</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Reconciliation of financial data in Mollak and regulated community bank accounts.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">💰 Service Charge Receivables</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Reconciliation of owner receivables and verification of allocation formulas.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🏦 Reserve Fund Reviews</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Detailed review of capital reserve fund contributions and emergency provisions.</p>
        </div>
    </div>

    <!-- 6-Step Service Charge Process -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">How the Service Charge Audit & Approval Process Works</h2>
    <p>Service charges levied on jointly owned properties sit under RERA supervision. The service charge budget is approved by RERA only once an approved auditing firm completes the audit:</p>

    <div style="margin: 20px 0; font-size: 15px;">
        <p><strong>1. Appointing Auditor Through Mollak:</strong> The management entity initiates appointment inside Mollak under DLD approved services.</p>
        <p><strong>2. Assembling Budget & Records:</strong> Collecting quotations, tender evaluations (minimum 3 bids per provider), maintenance agreements, utility records, and prior year accounts.</p>
        <p><strong>3. Auditing Budget Components:</strong> Detailed audit of security, cleaning, maintenance, utilities, management fees, insurance, and reserve funds.</p>
        <p><strong>4. Testing Against Dubai Service Charge Index:</strong> Benchmarking proposed rates against project historical data and public DLD benchmarks.</p>
        <p><strong>5. Filing Audit Report via Mollak:</strong> Preparation of auditor's report and financial schedules for RERA review.</p>
        <p><strong>6. RERA Approval & Invoicing:</strong> Approved figures are published on the Service Charge Index, allowing compliant invoicing to unit owners.</p>
    </div>

    <!-- FAQs Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is a RERA Escrow Audit in Dubai?</h3>
            <p style="margin: 0; color: #475569;">A RERA Escrow Audit verifies that all funds collected from off-plan property buyers under Law No. 8 of 2007 are deposited into the designated project escrow account and disbursed strictly for approved construction costs.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is the Mollak system in Dubai?</h3>
            <p style="margin: 0; color: #475569;">Mollak is the Dubai Land Department’s electronic system for jointly owned properties. It regulates service charges, oversees building management accounts, and mandates financial audits before service charges can be invoiced.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Can the same auditor audit a property in consecutive years?</h3>
            <p style="margin: 0; color: #475569;">Under Dubai Land Department regulations, the same auditing firm is not permitted to audit the same jointly owned property project in two consecutive years for budget and final account approvals.</p>
        </div>
    </div>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px; margin-top: 40px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Need RERA Approved Auditors in ${loc.city_name}?</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>${loc.phone}</strong> or speak to our accredited property audit team.</p>
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
  "name": "NUF Chartered Accountants - RERA Approved Auditors",
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
  "serviceType": "RERA Escrow & Mollak Audit Services",
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
      "name": "What is a RERA Escrow Audit in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A RERA Escrow Audit verifies that all funds collected from off-plan property buyers under Law No. 8 of 2007 are deposited into the designated project escrow account and disbursed strictly for approved construction costs."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Mollak system in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mollak is the Dubai Land Department’s electronic system for jointly owned properties. It regulates service charges, oversees building management accounts, and mandates financial audits before service charges can be invoiced."
      }
    },
    {
      "@type": "Question",
      "name": "Can the same auditor audit a property in consecutive years?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Dubai Land Department regulations, the same auditing firm is not permitted to audit the same jointly owned property project in two consecutive years for budget and final account approvals."
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
      "name": "RERA Audit UAE",
      "item": "https://nufca.com/rera-audit-uae/"
    }
  ]
}
</script>`;
}

async function createAllProgrammaticReraPages() {
    console.log("🚀 Creating 5 Programmatic RERA Audit Location Pages in WordPress...\n");

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

    console.log("\n🎉 ALL 5 PROGRAMMATIC RERA AUDIT PAGES CREATED & PUBLISHED SUCCESSFULLY!");
}

createAllProgrammaticReraPages();
