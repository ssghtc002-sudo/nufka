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
        id: 99172,
        slug: "internal-audit-uae",
        city_name: "UAE",
        branch_title: "NUFCA Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "Internal Audit Services in UAE",
        eyebrow: "Independent Internal Audit & Risk Advisory",
        hero_headline: "Internal Audit Services in UAE Reviewed by Chartered Accountants",
        hero_subheadline: "Independent risk assessments, internal control reviews, process reviews, COSO framework compliance, and governance support for UAE mainland and free-zone businesses."
    },
    {
        id: 99173,
        slug: "dubai",
        city_name: "Dubai",
        branch_title: "NUFCA Dubai Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "Internal Audit Services in Dubai",
        eyebrow: "Independent Internal Audit & Risk Advisory",
        hero_headline: "Internal Audit Services in Dubai Reviewed by Chartered Accountants",
        hero_subheadline: "Independent risk assessments, internal control reviews, process reviews, COSO framework compliance, and governance support for Dubai mainland and free-zone businesses."
    },
    {
        id: 99174,
        slug: "gold-souk-dubai",
        city_name: "Gold Souk (Deira, Dubai)",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "Internal Audit Services in Gold Souk, Deira",
        eyebrow: "Specialized Internal Audit for Jewelers & Traders",
        hero_headline: "Internal Audit Services in Gold Souk Deira Reviewed by Chartered Accountants",
        hero_subheadline: "Internal control reviews, stock controls, cash handling audits, and operational risk reviews for Gold Souk jewelers, bullion traders, and retail businesses."
    },
    {
        id: 99175,
        slug: "abu-dhabi",
        city_name: "Abu Dhabi",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "info@nufca.com",
        h1_title: "Internal Audit Services in Abu Dhabi",
        eyebrow: "Independent Internal Audit & Risk Advisory",
        hero_headline: "Internal Audit Services in Abu Dhabi Reviewed by Chartered Accountants",
        hero_subheadline: "Independent risk assessments, internal control reviews, process reviews, COSO framework compliance, and governance support for Abu Dhabi businesses and ADGM entities."
    },
    {
        id: 99176,
        slug: "sharjah",
        city_name: "Sharjah",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com",
        h1_title: "Internal Audit Services in Sharjah",
        eyebrow: "Independent Internal Audit & Risk Advisory",
        hero_headline: "Internal Audit Services in Sharjah Reviewed by Chartered Accountants",
        hero_subheadline: "Independent risk assessments, internal control reviews, process reviews, COSO framework compliance, and governance support for Sharjah and Hamriyah Free Zone companies."
    }
];

function generatePageHTML(loc) {
    const currentSlug = loc.slug;
    const cleanPhone = loc.phone.split('/')[0].trim();
    
    return `<div class="nufca-article-container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.75; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 15px;">
    
    <!-- Filter Location Dropdown Bar -->
    <div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">📍</span>
        <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
      </div>
      <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
        <option value="https://nufca.com/internal-audit-uae/" ${currentSlug==='internal-audit-uae'?'selected':''}>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/internal-audit-uae/dubai/" ${currentSlug==='dubai'?'selected':''}>🏙️ Dubai (Bur Dubai Head Office)</option>
        <option value="https://nufca.com/internal-audit-uae/gold-souk-dubai/" ${currentSlug==='gold-souk-dubai'?'selected':''}>🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/internal-audit-uae/abu-dhabi/" ${currentSlug==='abu-dhabi'?'selected':''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/internal-audit-uae/sharjah/" ${currentSlug==='sharjah'?'selected':''}>🏭 Sharjah (Hamriyah Free Zone)</option>
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
            <span>✓ COSO Framework Aligned</span>
            <span>✓ Risk-Based Auditing</span>
            <span>✓ Fraud & Exposure Prevention</span>
            <span>✓ Chartered Accountants (NUFCA)</span>
        </div>

        <!-- Branch Address Bar -->
        <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); padding: 15px 20px; border-radius: 8px; margin-top: 20px; font-size: 14px;">
            <div style="font-weight: bold; color: #8da9c4; font-size: 11px; text-transform: uppercase;">📍 ${loc.branch_title}:</div>
            <div style="font-size: 15px; font-weight: bold; margin-top: 2px;">${loc.address}</div>
            <div style="margin-top: 4px;">📞 Phone: <strong>${loc.phone}</strong> | ✉️ Email: <strong>${loc.email}</strong></div>
        </div>
    </div>

    <!-- Replacement Instant Direct Consultation Box (Replaces HTML Form) -->
    <div style="background: #ffffff; border: 2px solid #134074; padding: 25px 20px; border-radius: 12px; margin-bottom: 35px; box-shadow: 0 8px 20px rgba(0,0,0,0.06);">
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px;">
            <div style="flex: 1; min-width: 280px;">
                <span style="background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 12px; padding: 5px 12px; border-radius: 20px; text-transform: uppercase;">Direct Advisory Access</span>
                <h3 style="color: #0b2545; margin: 10px 0 8px 0; font-size: 22px; font-weight: 800;">Speak With Our Senior Internal Audit Experts in ${loc.city_name}</h3>
                <p style="color: #475569; font-size: 15px; margin: 0;">Get immediate feedback on your internal controls, process walkthroughs, or compliance requirements. Connect directly with our chartered accountants without filling forms.</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px; min-width: 240px; width: 100%; max-width: 320px;">
                <a href="https://wa.me/97142500679" target="_blank" style="background: #25d366; color: #ffffff; font-weight: 800; font-size: 15px; padding: 13px 20px; border-radius: 8px; text-decoration: none; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 10px rgba(37,211,102,0.2);">
                    💬 Chat on WhatsApp (+971 4 250 0679)
                </a>
                <a href="tel:${cleanPhone.replace(/\s+/g, '')}" style="background: #134074; color: #ffffff; font-weight: 800; font-size: 15px; padding: 13px 20px; border-radius: 8px; text-decoration: none; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
                    📞 Direct Call (${cleanPhone})
                </a>
                <a href="mailto:${loc.email}" style="background: #f8fafc; color: #0b2545; border: 1px solid #cbd5e1; font-weight: 700; font-size: 14px; padding: 11px 20px; border-radius: 8px; text-decoration: none; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
                    ✉️ Email: ${loc.email}
                </a>
            </div>
        </div>
    </div>

    <!-- Main Intro -->
    <p style="font-size: 16px;">Most control failures don't announce themselves. They sit quietly inside a payment approval that nobody checks, a vendor master file that three people can edit, or a reconciliation that gets signed off without being performed. By the time the loss shows up in the numbers, the weakness has usually been there for months.</p>
    <p style="font-size: 16px;"><strong>That is the gap internal audit is built to close.</strong></p>
    <p style="font-size: 16px;"><strong>NUF Chartered Accountants</strong> delivers Internal Audit Services in ${loc.city_name} that companies use to test whether their controls actually work in practice, surface financial and operational exposures early, tighten governance, and make day-to-day processes run cleaner.</p>
    <p style="font-size: 16px;">We don't stop at listing what's broken. We look at how each control performs under real transaction volume, rank every issue by the damage it could cause, and hand management recommendations that can be implemented with the people and systems they already have.</p>
    <p style="font-size: 16px;">Need a full internal audit function? A focused review of one department? A process and systems walkthrough? Help building a control framework from the ground up? Each engagement is shaped around your business model, sector, and risk exposure.</p>

    <!-- What Internal Audit Means -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What Internal Audit Actually Means</h2>
    <p>Internal audit is an independent, structured examination of how an organisation governs itself — its risk management, its control activities, its processes, and its operations.</p>
    <p>It is not a smaller version of the statutory audit. An external audit exists to give an opinion on financial statements. Internal audit asks a broader question: <em>are our processes doing what we believe they are doing, and are the risks that matter actually under control?</em></p>
    <p>The answer goes to management and to those charged with governance, so they can act on it.</p>

    <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 18px;">Typical coverage under our Internal Audit Services in ${loc.city_name} includes:</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; font-size: 14px;">
            <div>• Finance & accounting controls</div>
            <div>• Purchasing & supplier management</div>
            <div>• Order-to-cash & revenue processes</div>
            <div>• Stock, warehousing & movement controls</div>
            <div>• HR & payroll administration</div>
            <div>• Treasury & cash handling</div>
            <div>• Capital assets management</div>
            <div>• Policy adherence & regulatory compliance</div>
            <div>• IT systems & user access rights</div>
            <div>• Fraud exposure & duty segregation</div>
            <div>• Documented operating procedures</div>
            <div>• Process efficiency & cycle times</div>
        </div>
    </div>

    <!-- Why Businesses Invest -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Why ${loc.city_name} Businesses Invest in Internal Audit</h2>
    <p>Companies operating here deal with shifting regulatory expectations, multi-entity structures, rapid system migrations, cross-border transactions, and stakeholders who ask harder questions than they did five years ago. Internal audit gives management a clear line of sight into all of it — and creates accountability that holds after the auditors leave.</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 25px 0;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🛡️ Controls That Hold Up Under Pressure</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">We test whether a control is designed correctly and whether it is being performed. Gaps get fixed while they are still cheap to fix.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">📊 Risk You Can Rank</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">A risk-based plan pushes audit effort toward the processes capable of doing the most damage, instead of spreading attention evenly.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">⚡ Leaner Operations</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Reviews routinely uncover duplicated approvals, redundant reconciliations, manual workarounds, and steps nobody can explain.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🔍 Reduced Fraud Exposure</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Authorisation thresholds, conflicting user roles, vendor onboarding, payment release, inventory movement — we examine them directly.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">📋 Compliance You Can Evidence</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Internal audit tests adherence to your own policies, your contractual commitments, and regulatory requirements.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; padding: 18px; border-radius: 8px; border-left: 4px solid #134074;">
            <h4 style="margin: 0 0 8px 0; color: #0b2545; font-size: 16px;">🎯 Governance With Teeth</h4>
            <p style="margin: 0; font-size: 14px; color: #475569;">Every finding carries a risk rating, a named owner, and a deadline. Management gets a tracking mechanism to drive completion.</p>
        </div>
    </div>

    <!-- Our Scope of Services -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Our Internal Audit Scope in ${loc.city_name}</h2>
    
    <h3 style="color: #134074; font-size: 19px;">Risk-Based Internal Audit</h3>
    <p>We map where your genuine exposure sits, then build an audit plan that concentrates effort there. Budget is spent where it changes outcomes, while still maintaining sensible coverage across financial, operational, compliance, and technology risks.</p>

    <h3 style="color: #134074; font-size: 19px;">Internal Control Review</h3>
    <p>We test control design and control performance to prevent direct financial loss, misstatement in reporting, fraudulent activity, unauthorized transactions, regulatory breaches, and operational disruptions.</p>

    <h3 style="color: #134074; font-size: 19px;">Business Process & Systems Review</h3>
    <p>We trace a process end to end — who does what, which approvals fire, what documentation exists, which system controls are configured, and what gets reported. This delivers control strength and process efficiency simultaneously.</p>

    <h3 style="color: #134074; font-size: 19px;">Financial Internal Audit</h3>
    <p>Comprehensive review of revenue recognition, receivables, procurement, payables, bank/cash controls, general ledger integrity, expense processing, payroll, capital assets, inventory valuation, and period-end close reconciliations.</p>

    <h3 style="color: #134074; font-size: 19px;">Fraud Risk & Control Review</h3>
    <p>A targeted examination of high-risk vulnerability points: duty segregation conflicts, authorisation overrides, vendor onboarding, payment release controls, related-party dealings, privileged IT access, stock movements, and cash handling.</p>

    <h3 style="color: #134074; font-size: 19px;">Internal Audit Outsourcing & Co-Sourcing</h3>
    <p>Outsource the internal audit function entirely, or bring in specialized experts alongside your in-house team to add technical depth — scaling capacity without permanent fixed headcount.</p>

    <!-- COSO Framework Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">The COSO Internal Control Framework</h2>
    <p>Where a structured control assessment is required, we align our work with the <strong>COSO Internal Control—Integrated Framework</strong>, the global gold standard for evaluating control systems.</p>

    <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin: 20px 0;">
        <h4 style="color: #0b2545; margin-top: 0; font-size: 16px;">1. Control Environment</h4>
        <p style="font-size: 14px; color: #475569;">The foundation — tone, governance structure, delegated authority levels, ethical standards, accountability, and competence of key personnel.</p>

        <h4 style="color: #0b2545; margin-top: 15px; font-size: 16px;">2. Risk Assessment</h4>
        <p style="font-size: 14px; color: #475569;">Identifying and evaluating financial exposure, operational risk, compliance obligations, cyber risk, fraud scenarios, and emerging threats.</p>

        <h4 style="color: #0b2545; margin-top: 15px; font-size: 16px;">3. Control Activities</h4>
        <p style="font-size: 14px; color: #475569;">Approval routines, authorisation limits, reconciliations, segregation of incompatible duties, access restrictions, and physical safeguards.</p>

        <h4 style="color: #0b2545; margin-top: 15px; font-size: 16px;">4. Information & Communication</h4>
        <p style="font-size: 14px; color: #475569;">Management reporting packs, data accuracy, escalation routes, internal communication flows, and documentation standards.</p>

        <h4 style="color: #0b2545; margin-top: 15px; font-size: 16px;">5. Monitoring Activities</h4>
        <p style="font-size: 14px; color: #475569;">Management review routines, KPI tracking, exception reports, internal audit reviews, and follow-up on corrective actions.</p>
    </div>

    <!-- Risk Assessment Matrix Table -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Internal Audit Risk Assessment Matrix</h2>
    <p>Audit findings are prioritised using likelihood against potential business impact:</p>
    
    <div style="overflow-x: auto; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
            <thead>
                <tr style="background: #0b2545; color: #ffffff;">
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">Likelihood / Impact</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">Low Impact</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">Moderate Impact</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">High Impact</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1;">Critical Impact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; background: #f8fafc;">Rare</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #e0f2fe; color: #0369a1; font-weight: bold;">Low</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #e0f2fe; color: #0369a1; font-weight: bold;">Low</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #fef3c7; color: #b45309; font-weight: bold;">Moderate</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #fef3c7; color: #b45309; font-weight: bold;">Moderate</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; background: #f8fafc;">Possible</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #e0f2fe; color: #0369a1; font-weight: bold;">Low</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #fef3c7; color: #b45309; font-weight: bold;">Moderate</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #ffedd5; color: #c2410c; font-weight: bold;">High</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #ffedd5; color: #c2410c; font-weight: bold;">High</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; background: #f8fafc;">Likely</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #fef3c7; color: #b45309; font-weight: bold;">Moderate</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #ffedd5; color: #c2410c; font-weight: bold;">High</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #ffedd5; color: #c2410c; font-weight: bold;">High</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #fee2e2; color: #b91c1c; font-weight: bold;">Critical</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; background: #f8fafc;">Almost Certain</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #fef3c7; color: #b45309; font-weight: bold;">Moderate</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #ffedd5; color: #c2410c; font-weight: bold;">High</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #fee2e2; color: #b91c1c; font-weight: bold;">Critical</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; background: #fee2e2; color: #b91c1c; font-weight: bold;">Critical</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Comparison Table: Internal vs External Audit -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Internal Audit vs External Audit</h2>
    <p>Both provide assurance, but they serve different purposes and audiences:</p>

    <div style="overflow-x: auto; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <thead>
                <tr style="background: #0b2545; color: #ffffff;">
                    <th style="padding: 12px; border: 1px solid #cbd5e1; width: 25%;">Area</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1; width: 37.5%;">Internal Audit</th>
                    <th style="padding: 12px; border: 1px solid #cbd5e1; width: 37.5%;">External Audit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Primary Objective</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Strengthen governance, controls, risk management, and operations</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Express an independent opinion on the financial statements</td>
                </tr>
                <tr style="background: #f8fafc;">
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Main Users</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Management, Board, Audit Committee, Governance team</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Shareholders, Regulators, Lenders, External Stakeholders</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Scope</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Financial, operational, compliance, IT, governance, & risk</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Financial statements and related reporting controls</td>
                </tr>
                <tr style="background: #f8fafc;">
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Focus</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Reducing future risk and improving process execution</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Reliability and fair presentation of historical statements</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Frequency</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Continuous, periodic, quarterly, or driven by risk</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Typically once a year</td>
                </tr>
                <tr style="background: #f8fafc;">
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Reporting Output</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Detailed findings, root causes, risk ratings, & action plans</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">Independent Auditor's Report & management letter</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 9-Step Process -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">How We Run an Internal Audit</h2>
    <div style="margin: 20px 0; font-size: 15px;">
        <p><strong>1. Business Understanding:</strong> We map structure, operating model, core processes, IT landscape, and compliance obligations.</p>
        <p><strong>2. Risk Assessment:</strong> Financial, operational, compliance, tech, and fraud risks are identified and weighted.</p>
        <p><strong>3. Audit Planning:</strong> Scope and work programs are drafted against risk profile and management priorities.</p>
        <p><strong>4. Process Walkthroughs:</strong> We sit with process owners and follow transactions end-to-end through systems.</p>
        <p><strong>5. Control Testing:</strong> Transaction samples are tested to verify operating effectiveness.</p>
        <p><strong>6. Root Cause Analysis:</strong> We determine <em>why</em> exceptions occurred (unwritten policy, system misconfiguration, duty segregation breakdown, lack of training).</p>
        <p><strong>7. Risk-Rated Audit Report:</strong> Findings are graded by significance with actionable recommendations.</p>
        <p><strong>8. Management Action Plan:</strong> Owners and completion target dates are assigned to corrective actions.</p>
        <p><strong>9. Follow-Up Review:</strong> We verify implementation of agreed actions.</p>
    </div>

    <!-- FAQs Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What are Internal Audit Services in ${loc.city_name}?</h3>
            <p style="margin: 0; color: #475569;">Internal audit services provide an independent examination of how an organisation manages governance, risk, controls, and business processes to expose weaknesses, measure risk exposure, and recommend process improvements.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is the COSO internal control framework?</h3>
            <p style="margin: 0; color: #475569;">COSO's Internal Control—Integrated Framework is the most widely used global model for evaluating control systems across 5 components: Control Environment, Risk Assessment, Control Activities, Information & Communication, and Monitoring.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Can internal audit be outsourced or co-sourced in ${loc.city_name}?</h3>
            <p style="margin: 0; color: #475569;">Yes. You can outsource the internal audit function entirely, or co-source with external specialists to work alongside your in-house team for technical depth without adding permanent headcount.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ How often should a company conduct an internal audit?</h3>
            <p style="margin: 0; color: #475569;">Frequency depends on size, complexity, and risk exposure. High-risk processes warrant quarterly or bi-annual review, while lower-risk areas can be scheduled across a multi-year audit plan.</p>
        </div>
    </div>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px; margin-top: 40px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Strengthen Your Control Environment in ${loc.city_name}</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>${loc.phone}</strong> or speak to our senior risk advisors.</p>
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <a href="https://wa.me/97142500679" target="_blank" style="background: #25d366; color: #ffffff; font-weight: bold; padding: 14px 28px; text-decoration: none; border-radius: 6px; display: inline-block;">💬 Chat on WhatsApp (+971 4 250 0679)</a>
            <a href="tel:${cleanPhone.replace(/\s+/g, '')}" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 14px 28px; text-decoration: none; border-radius: 6px; display: inline-block;">📞 Call (${cleanPhone})</a>
        </div>
    </div>

</div>`;
}

async function updateAllPages() {
    console.log("🚀 Updating 5 Internal Audit Pages with Instant Direct Consultation Box (Removing Form)...\n");

    for (const loc of locations) {
        console.log(`Updating Page ID ${loc.id} (${loc.slug})...`);
        const updatedHTML = generatePageHTML(loc);

        const res = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${loc.id}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                content: updatedHTML
            })
        });

        console.log(`  --> Status for ID ${loc.id}: ${res.status}`);
    }

    console.log("\n🎉 ALL 5 INTERNAL AUDIT PAGES UPDATED (FORM REMOVED & REPLACED WITH DIRECT CONSULTATION CTA)!");
}

updateAllPages();
