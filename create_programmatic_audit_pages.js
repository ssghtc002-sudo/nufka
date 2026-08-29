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
        slug: "audit-assurance-uae",
        city_name: "UAE",
        branch_title: "NUFCA Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "Audit & Assurance Services in UAE",
        eyebrow: "Independent Audit & Assurance Services",
        hero_headline: "Audit & Assurance Services in UAE Reviewed by Chartered Accountants",
        hero_subheadline: "Statutory audits, internal audits, due diligence, and financial reporting compliance for mainland, free-zone, and international businesses across the UAE."
    },
    {
        slug: "dubai",
        city_name: "Dubai",
        branch_title: "NUFCA Dubai Head Office",
        address: "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE",
        phone: "04 325 8361 / 055-9831923",
        email: "info@nufca.com",
        h1_title: "Audit & Assurance Services in Dubai",
        eyebrow: "Independent Audit & Assurance Services",
        hero_headline: "Audit & Assurance Services in Dubai Reviewed by Chartered Accountants",
        hero_subheadline: "Statutory audits, internal audits, due diligence, and financial reporting compliance for mainland and free-zone businesses in Dubai."
    },
    {
        slug: "gold-souk-dubai",
        city_name: "Gold Souk (Deira, Dubai)",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com",
        h1_title: "Audit & Assurance Services in Gold Souk, Deira",
        eyebrow: "Specialized Audit for Precious Metals & Jewelers",
        hero_headline: "Audit & Assurance Services in Gold Souk Deira Reviewed by Chartered Accountants",
        hero_subheadline: "Financial audits, internal controls, and assurance services tailored for Gold Souk jewelers, bullion traders, and retail businesses."
    },
    {
        slug: "abu-dhabi",
        city_name: "Abu Dhabi",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "info@nufca.com",
        h1_title: "Audit & Assurance Services in Abu Dhabi",
        eyebrow: "Independent Audit & Assurance Services",
        hero_headline: "Audit & Assurance Services in Abu Dhabi Reviewed by Chartered Accountants",
        hero_subheadline: "Statutory audits, internal audits, due diligence, and financial reporting compliance for Abu Dhabi businesses and ADGM entities."
    },
    {
        slug: "sharjah",
        city_name: "Sharjah",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com",
        h1_title: "Audit & Assurance Services in Sharjah",
        eyebrow: "Independent Audit & Assurance Services",
        hero_headline: "Audit & Assurance Services in Sharjah Reviewed by Chartered Accountants",
        hero_subheadline: "Statutory audits, internal audits, due diligence, and financial reporting compliance for Sharjah and Hamriyah Free Zone companies."
    }
];

function generatePageHTML(loc) {
    const currentSlug = loc.slug;
    
    return `<div class="nufca-article-container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.75; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 15px;">
    
    <!-- Filter Location Dropdown Bar -->
    <div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">📍</span>
        <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
      </div>
      <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
        <option value="https://nufca.com/audit-assurance-uae/" ${currentSlug==='audit-assurance-uae'?'selected':''}>🇦🇪 All UAE (Main Headquarters)</option>
        <option value="https://nufca.com/audit-assurance-uae/dubai/" ${currentSlug==='dubai'?'selected':''}>🏙️ Dubai (Bur Dubai Head Office)</option>
        <option value="https://nufca.com/audit-assurance-uae/gold-souk-dubai/" ${currentSlug==='gold-souk-dubai'?'selected':''}>🪙 Gold Souk (Deira, Dubai)</option>
        <option value="https://nufca.com/audit-assurance-uae/abu-dhabi/" ${currentSlug==='abu-dhabi'?'selected':''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
        <option value="https://nufca.com/audit-assurance-uae/sharjah/" ${currentSlug==='sharjah'?'selected':''}>🏭 Sharjah (Hamriyah Free Zone)</option>
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
            <span>✓ Approved Auditors</span>
            <span>✓ Chartered Accountants (NUFCA)</span>
            <span>✓ Mainland & Free Zone Compliance</span>
            <span>✓ Risk-Based Approach</span>
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
        <h3 style="color: #0b2545; margin-top: 0; font-size: 22px; font-weight: 700;">Request an Audit Proposal in ${loc.city_name}</h3>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">Send your details and our assurance team will review your requirements for statutory audit, internal audit, or due diligence. No cost, no obligation.</p>
        
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
                    <label style="font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px;">Audit Services Needed</label>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; font-size: 14px;">
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Statutory External Audit"> Statutory External Audit</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Internal Audit"> Internal Audit</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Financial Due Diligence"> Financial Due Diligence</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Free Zone Audit"> Free Zone Compliance Audit</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Forensic Audit"> Forensic Audit</label>
                        <label style="display: flex; align-items: center; gap: 8px;"><input type="checkbox" name="services[]" value="Agreed-Upon Procedures"> Agreed-Upon Procedures</label>
                    </div>
                </div>

                <div style="grid-column: 1 / -1;">
                    <button type="submit" style="background: #134074; color: #ffffff; font-weight: 700; font-size: 16px; padding: 14px 28px; border: none; border-radius: 8px; cursor: pointer; width: 100%;">Request Audit Proposal</button>
                    <div style="font-size: 12px; color: #64748b; margin-top: 8px; text-align: center;">Typical response time: under 24 hours on working days.</div>
                </div>
            </div>
        </form>
    </div>

    <!-- Main Intro -->
    <p style="font-size: 16px;">Every business decision that matters—a bank facility, an investor round, a licence renewal, a tax filing—eventually rests on one question: can your numbers be trusted?</p>
    <p style="font-size: 16px;">That is what an audit answers.</p>
    <p style="font-size: 16px;"><strong>NUF Chartered Accountants</strong> provides independent audit and assurance services to companies across ${loc.city_name} and the wider UAE. We work with mainland entities, free-zone companies, owner-managed SMEs and subsidiaries of international groups, and we shape each engagement around the client's size, sector, legal form and risk profile rather than applying a single template.</p>
    <p style="font-size: 16px;">Our aim goes beyond signing a report. We want management to finish the year with financial information they can actually rely on—and with a clear picture of any accounting, reporting or control issues worth fixing before they grow.</p>

    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">What Audit and Assurance Actually Mean</h2>
    <p>Assurance is the broad category. Audit is the best-known part of it.</p>
    <p>In an external financial statement audit, an independent auditor gathers sufficient appropriate evidence and forms an opinion on whether the financial statements are prepared, in all material respects, in line with the applicable financial reporting framework. The auditor examines records, balances, transactions, estimates, disclosures and the documentation behind them.</p>
    
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 18px;">Where the value shows up</h3>
        <p style="margin-bottom: 10px;">A well-run audit typically helps a business:</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; font-size: 14px;">
            <div>• Increase reliability of reported financial position</div>
            <div>• Build confidence among shareholders and investors</div>
            <div>• Support credit applications and bank reviews</div>
            <div>• Surface accounting errors and weak reporting practices</div>
            <div>• Tighten internal controls and approval processes</div>
            <div>• Reinforce governance at board and management level</div>
            <div>• Meet regulatory, licensing and filing obligations</div>
            <div>• Improve readiness for UAE Corporate Tax</div>
            <div>• Support transactions, due diligence and restructuring</div>
            <div>• Give management better information to decide with</div>
        </div>
    </div>

    <!-- Mainland & Free Zone Comparison Table -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Statutory Audit Obligations: Mainland vs Free Zone Companies</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 25px 0;">
        <div style="background: #ffffff; border-top: 4px solid #134074; border: 1px solid #e2e8f0; border-top-width: 4px; padding: 20px; border-radius: 8px;">
            <h3 style="margin: 5px 0 15px 0; color: #0b2545; font-size: 18px;">UAE Mainland Companies</h3>
            <p style="font-size: 14px; color: #475569;">Mainland companies need to establish their audit position by reference to their legal form and the legislation that applies to them. Under the UAE Commercial Companies Law, joint stock companies and limited liability companies are generally required to appoint one or more auditors and have their accounts audited annually.</p>
            <p style="font-size: 14px; color: #475569;">The auditor reviews the financial statements, underlying records and supporting information, then issues an independent auditor's report.</p>
        </div>
        <div style="background: #ffffff; border-top: 4px solid #0ea5e9; border: 1px solid #e2e8f0; border-top-width: 4px; padding: 20px; border-radius: 8px;">
            <h3 style="margin: 5px 0 15px 0; color: #0b2545; font-size: 18px;">UAE Free Zone Companies</h3>
            <p style="font-size: 14px; color: #475569;">Free zones do not follow a common rulebook. Requirements differ from one authority to the next. Authorities like DMCC and ADGM have specific auditing requirements, and often require auditors to be on an approved or registered list.</p>
            <p style="font-size: 14px; color: #475569;">Other zones such as JAFZA, DAFZ, DIFC, RAKEZ, and Hamriyah Free Zone may require audited statements for annual filing, regulatory compliance, or licence renewal.</p>
        </div>
    </div>

    <!-- Corporate Tax Context -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">How UAE Corporate Tax Changes the Picture</h2>
    <p>Corporate Tax introduced a second, parallel set of reporting considerations.</p>
    <p>Certain taxable persons may be required to prepare and maintain audited financial statements, depending on factors such as revenue level, entity status and free-zone status. Qualifying Free Zone Persons have been subject to their own financial statement and audit conditions.</p>
    <p>The critical point is that these obligations sit alongside—not instead of—statutory and licensing requirements.</p>

    <!-- Services Detail -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Our Audit and Assurance Services</h2>
    
    <h3 style="color: #134074; font-size: 19px;">External Audit</h3>
    <p>An independent examination of the annual financial statements. We test accounting records, balances, transactions, estimates and disclosures, gather appropriate evidence and issue an independent opinion.</p>

    <h3 style="color: #134074; font-size: 19px;">Statutory Audit</h3>
    <p>An audit required by legislation, regulation or licence conditions. We help companies prepare properly and move through the process efficiently, while holding the independence and quality standards the engagement demands.</p>

    <h3 style="color: #134074; font-size: 19px;">Internal Audit</h3>
    <p>Internal audit looks inward—at controls, processes, governance and risk management. Its value is in timing: it finds weaknesses while they are still cheap to fix.</p>

    <h3 style="color: #134074; font-size: 19px;">Financial Due Diligence</h3>
    <p>Before a transaction closes, buyers and investors need to understand what they are actually acquiring. Due diligence clarifies the financial position and flags risks while there is still time to renegotiate or walk away.</p>
    
    <h3 style="color: #134074; font-size: 19px;">Forensic Audit & Agreed-Upon Procedures</h3>
    <p>When there are concerns about fraud or misconduct, a forensic engagement investigates them. For specific information testing without a full audit, we perform agreed-upon procedures and report factual findings.</p>

    <!-- The Audit Process -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">The Audit Process, Step by Step</h2>
    <div style="margin: 20px 0; padding-left: 20px; font-size: 15px;">
        <p><strong>1. Initial consultation:</strong> Understand the company, structure, industry, obligations and purpose.</p>
        <p><strong>2. Engagement acceptance:</strong> Agree scope, responsibilities and terms; confirm independence.</p>
        <p><strong>3. Planning:</strong> Build an audit strategy around activities and risk profile.</p>
        <p><strong>4. Risk assessment:</strong> Identify material misstatement risks and evaluate controls.</p>
        <p><strong>5. Information gathering:</strong> Collect financial statements, trial balances, ledgers, and documents.</p>
        <p><strong>6. Testing:</strong> Carry out substantive testing, analytical procedures, and sampling.</p>
        <p><strong>7. Review of findings:</strong> Discuss accounting differences and control observations with management.</p>
        <p><strong>8. Finalising statements:</strong> Process adjustments and settle presentation and disclosure.</p>
        <p><strong>9. Opinion and report:</strong> Issue the independent auditor's report.</p>
        <p><strong>10. Management recommendations:</strong> Communicate practical improvements.</p>
    </div>

    <!-- Why NUFCA -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Why Work With NUF Chartered Accountants</h2>
    <ul style="padding-left: 20px; font-size: 15px;">
        <li><strong>Experienced professionals:</strong> Our team knows the UAE accounting, regulatory and commercial environment.</li>
        <li><strong>Risk-based approach:</strong> We concentrate effort where the risk of material misstatement is highest.</li>
        <li><strong>Mainland and free-zone experience:</strong> We support entities across mainland Dubai and multiple free-zone jurisdictions.</li>
        <li><strong>Clear communication:</strong> You will understand what we need and what we found—throughout the engagement.</li>
    </ul>

    <!-- FAQs Section -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px; margin-top: 40px;">Frequently Asked Questions</h2>
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Is an audit mandatory for companies in Dubai?</h3>
            <p style="margin: 0; color: #475569;">It depends on legal form, jurisdiction and regulatory status. Mainland LLCs and joint stock companies fall under statutory audit requirements. Free-zone entities need to check the rules of their own licensing authority.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Does DMCC require audited financial statements?</h3>
            <p style="margin: 0; color: #475569;">DMCC member companies are generally required to prepare and submit audited financial statements under applicable DMCC regulations and guidance.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ Are audited financial statements required for UAE Corporate Tax?</h3>
            <p style="margin: 0; color: #475569;">For some taxable persons, yes. Applicable ministerial decisions have tied the requirement to factors including revenue level and free-zone status (Qualifying Free Zone Persons).</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ How long does an audit take?</h3>
            <p style="margin: 0; color: #475569;">It varies with the size of the business and the quality of the accounting records. A small, well-prepared entity may complete in a few weeks; incomplete records are the most common cause of delay.</p>
        </div>
        <div style="margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #fff;">
            <h3 style="font-size: 16px; color: #134074; margin: 0 0 8px 0;">❓ What is the difference between an audit and a review?</h3>
            <p style="margin: 0; color: #475569;">An audit provides reasonable assurance and involves substantive testing. A review provides limited assurance and relies more on enquiry and analytical procedures, carrying less weight with lenders and regulators.</p>
        </div>
    </div>

    <!-- Disclaimer -->
    <p style="font-size: 12px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px;">
        <em>Disclaimer: This page is general information, not advice for a specific entity. Audit and tax requirements in the UAE change, and the correct position depends on your legal form, jurisdiction and circumstances. Please seek advice based on your own facts.</em>
    </p>

    <!-- Closing CTA -->
    <div style="background: #0b2545; color: #fff; text-align: center; padding: 35px 20px; border-radius: 10px; margin-top: 40px;">
        <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Speak to our Auditors in ${loc.city_name}</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>${loc.phone}</strong> or request a consultation.</p>
        <a href="https://nufca.com/contact-us/" style="background: #ffffff; color: #0b2545; font-weight: bold; padding: 14px 32px; text-decoration: none; border-radius: 6px; display: inline-block;">Request an Audit Proposal →</a>
    </div>

</div>`;
}

async function createAllProgrammaticPages() {
    console.log("🚀 Creating 5 Programmatic Audit Location Pages in WordPress...\n");

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

    console.log("\n🎉 ALL 5 PROGRAMMATIC AUDIT PAGES CREATED & PUBLISHED SUCCESSFULLY!");
}

createAllProgrammaticPages();
