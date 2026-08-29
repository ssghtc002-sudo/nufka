const https = require('https');

const locations = [
    { id: 100549, name: 'UAE', city: 'UAE', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE' },
    { id: 100550, name: 'Dubai', city: 'Dubai', office: '510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE' },
    { id: 100551, name: 'Gold Souk Dubai', city: 'Gold Souk Dubai', office: 'Deira Gold Souk Commercial District, Dubai, UAE' },
    { id: 100552, name: 'Abu Dhabi', city: 'Abu Dhabi', office: 'Office 2404, Tamouh Tower, 12 Al Reem St, Jazeerat Al Reem, Abu Dhabi, UAE' },
    { id: 100553, name: 'Sharjah', city: 'Sharjah', office: 'Hamriyah Free Zone & Industrial Logistics Hub, Sharjah, UAE' }
];

const authHeader = 'Basic ' + Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

function generateHTML(loc) {
    const isMain = loc.name === 'UAE';
    const locationName = isMain ? 'UAE' : loc.name;
    const locText = isMain ? 'in the UAE' : `in ${locationName}`;

    return `<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb { display: none !important; }
.hero-sec { background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 50px 20px; text-align: center; border-radius: 8px; }
.hero-tag { display: inline-block; background: rgba(255,255,255,0.15); color: #93c5fd; padding: 5px 15px; border-radius: 20px; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; }
.hero-sec h1 { font-size: 32px; font-weight: 800; color: #ffffff !important; margin: 0 0 15px; }
.hero-sec p { font-size: 16px; max-width: 800px; margin: 0 auto 15px; color: #e2e8f0; }
.hero-trust { font-size: 14px; color: #bae6fd; font-weight: 600; }
.hero-office { margin-top: 15px; font-size: 13px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 10px; }

.contact-card { background: #f8fafc; border: 2px solid #134074; border-radius: 8px; padding: 25px; text-align: center; margin: 25px 0; }
.contact-card h3 { color: #0b2545; margin: 0 0 10px; font-size: 20px; }
.contact-card p { margin: 0 0 15px; color: #475569; }
.btn { display: inline-block; padding: 10px 20px; background: #134074; color: #ffffff !important; text-decoration: none; margin: 5px; border-radius: 5px; font-weight: bold; }
.btn-wa { background: #25d366; }
.btn-email { background: #0b2545; }

.doc-content { padding: 10px; max-width: 900px; margin: auto; }
.doc-content h2 { color: #0b2545; font-size: 24px; font-weight: 800; margin-top: 40px; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
.doc-content h3 { color: #134074; font-size: 19px; font-weight: 700; margin-top: 25px; margin-bottom: 10px; }
.doc-content h4 { color: #1e293b; font-size: 16px; font-weight: 700; margin-top: 20px; margin-bottom: 5px; }

.item-box { background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #134074; border-radius: 6px; padding: 15px 18px; margin-bottom: 12px; }
.alert-box { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 6px; margin: 15px 0; color: #92400e; }
.info-box { background: #eff6ff; border-left: 4px solid #2563eb; padding: 15px; border-radius: 6px; margin: 15px 0; color: #1e40af; }

.cta-sec { background: #0b2545; color: #ffffff; padding: 40px 20px; text-align: center; margin-top: 40px; border-radius: 8px; }
.cta-sec h2 { color: #ffffff !important; margin: 0 0 10px; font-size: 22px; }
.cta-sec p { color: #cbd5e1; max-width: 600px; margin: 0 auto 20px; font-size: 15px; }
</style>

<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/aml-cft-compliance-services-in-uae/" ${loc.name === 'UAE' ? 'selected' : ''}>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/aml-cft-compliance-services-in-uae/dubai/" ${loc.name === 'Dubai' ? 'selected' : ''}>🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/aml-cft-compliance-services-in-uae/gold-souk-dubai/" ${loc.name === 'Gold Souk Dubai' ? 'selected' : ''}>🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/aml-cft-compliance-services-in-uae/abu-dhabi/" ${loc.name === 'Abu Dhabi' ? 'selected' : ''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/aml-cft-compliance-services-in-uae/sharjah/" ${loc.name === 'Sharjah' ? 'selected' : ''}>🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<div class="hero-sec">
    <div class="hero-tag">Regulatory Compliance & Financial Crime Advisory</div>
    <h1>AML CFT Compliance Services ${locText}</h1>
    <p>Anti-Money Laundering and Combating the Financing of Terrorism compliance, goAML registration, Risk Assessments, and KYC/UBO procedures delivered by chartered accountants.</p>
    <div class="hero-trust">✓ goAML Portal Enrolment &nbsp;|&nbsp; ✓ Business-Wide Risk Assessment &nbsp;|&nbsp; ✓ KYC & UBO Verification &nbsp;|&nbsp; ✓ DNFBP Audit Readiness</div>
    <div class="hero-office">📍 Local Office: ${loc.office} &nbsp;|&nbsp; 📞 Phone: 04 325 8361 / 055-9831923</div>
</div>

<div class="contact-card">
    <h3>Talk to Us About Your AML Framework</h3>
    <p>Whether you are building a programme from scratch, working through goAML enrolment, revisiting dated KYC procedures or preparing for a supervisory inspection, NUF Chartered Accountants can help.</p>
    <a class="btn btn-wa" href="https://wa.me/97142500679" target="_blank">WhatsApp Us</a>
    <a class="btn" href="tel:043258361">Call 04 325 8361</a>
    <a class="btn btn-email" href="mailto:info@nufca.com">Email Us</a>
</div>

<div class="doc-content">

    <h2>AML CFT Compliance Services in ${locationName}</h2>
    <p>Anti-Money Laundering and Combating the Financing of Terrorism obligations are among the most closely supervised requirements facing regulated businesses in ${locationName} and the wider UAE. Supervisory inspections are routine, and administrative penalties for weak controls are substantial.</p>
    <p><strong>NUF Chartered Accountants</strong> delivers AML CFT Compliance Services in ${locationName}, helping businesses build and sustain controls that address money laundering, terrorist financing and proliferation financing risk in a way that stands up to regulatory scrutiny.</p>
    <p>Our work spans business-wide risk assessment, AML policy drafting, goAML enrolment, Customer Due Diligence and KYC design, Ultimate Beneficial Owner verification, PEP and sanctions screening, suspicious transaction reporting procedures, staff training and independent periodic review.</p>

    <h2>Our AML CFT Compliance Services</h2>
    <p>A compliance framework only works when it fits the business. Scale, complexity, customer base and product mix should all shape how far the controls go, and a programme built for a fifty-person brokerage rarely suits a two-person consultancy.</p>
    <p><strong>NUFCA can support you with:</strong></p>
    <ul>
        <li>AML, CFT and CPF policies and procedures</li>
        <li>Business-Wide Risk Assessment</li>
        <li>Customer Risk Assessment methodology</li>
        <li>goAML portal registration assistance</li>
        <li>KYC and Customer Due Diligence design</li>
        <li>Ultimate Beneficial Owner verification</li>
        <li>Politically Exposed Person screening</li>
        <li>Sanctions screening procedures</li>
        <li>Enhanced Due Diligence frameworks</li>
        <li>Source of Funds and Source of Wealth verification</li>
        <li>Suspicious Transaction Report procedures</li>
        <li>Suspicious Activity Report procedures</li>
        <li>Compliance Officer and MLRO support</li>
        <li>AML awareness training for staff</li>
        <li>Record-keeping procedures</li>
        <li>Periodic AML compliance reviews</li>
        <li>Gap assessments against supervisory expectations</li>
    </ul>

    <h2>goAML Portal Registration in the UAE</h2>
    <p><strong>goAML</strong> is the reporting platform operated by the UAE Financial Intelligence Unit, originally developed by the United Nations Office on Drugs and Crime and used to receive and analyse reports of suspicious transactions and activity.</p>
    <div class="info-box">
        <strong>Mandatory Registration:</strong> For Designated Non-Financial Businesses and Professions inside the applicable regulatory perimeter, enrolment is compulsory. It is worth stressing that the trigger is the licensed activity itself, not turnover or transaction volume. A dormant DNFBP with no filings is still expected to be registered.
    </div>
    <p>Access also needs to stay live. A lapsed account cannot be used when a report becomes necessary, and inspectors read that as a control failure in itself.</p>

    <h3>The goAML Registration Process, Step by Step</h3>
    <p>Enrolment runs in two broad phases: pre-registration through the Services Access Control Manager, followed by organisation registration on goAML itself.</p>

    <div class="item-box">
        <h4>Step 1: Assemble the information</h4>
        <p>Have the trade licence details ready, together with full particulars of the individual being appointed as Compliance Officer or Money Laundering Reporting Officer.</p>
    </div>

    <div class="item-box">
        <h4>Step 2: Complete SACM pre-registration</h4>
        <p>Enrol through the Services Access Control Manager as a reporting institution. Businesses supervised by the Ministry of Economy and Tourism must select the correct supervisory authority and organisation type at this point; an error here is tedious to unwind later.</p>
    </div>

    <div class="item-box">
        <h4>Step 3: Configure Google Authenticator</h4>
        <p>Two-factor authentication is part of login. The code rotates on a short cycle, so the authenticator should sit on a device the compliance function controls rather than a personal phone that may leave the business.</p>
    </div>

    <div class="item-box">
        <h4>Step 4: Open the production portal</h4>
        <p>Once pre-registration clears, go to the portal and choose the Live or Production environment rather than the test system. Sign in with the username issued at pre-registration and the current authenticator code.</p>
    </div>

    <div class="item-box">
        <h4>Step 5: Register the organisation</h4>
        <p>Choose the option to register a new organisation and work through the mandatory fields. Everything must reconcile with the pre-registration data and the company’s official documents; mismatched names or licence numbers are a common cause of rejection.</p>
    </div>

    <div class="item-box">
        <h4>Step 6: Upload supporting documents</h4>
        <p>Typical requirements include:</p>
        <ul>
            <li>Trade licence</li>
            <li>Board or management authorisation letter appointing the Compliance Officer or MLRO</li>
            <li>Passport copy for the authorised individual</li>
            <li>Emirates ID, where applicable</li>
            <li>UAE residence visa, where applicable</li>
        </ul>
        <p><em>Check the file format and size limits before uploading, as the portal rejects documents that fall outside them.</em></p>
    </div>

    <div class="item-box">
        <h4>Step 7: Submit</h4>
        <p>Review every field once more, then submit. A reference number normally follows by email and should be kept for any subsequent enquiries.</p>
    </div>

    <div class="item-box">
        <h4>Step 8: Track the outcome</h4>
        <p>Approval or rejection is communicated by email. Check junk and quarantine folders as well, since automated correspondence from government systems is frequently filtered.</p>
    </div>

    <h3>How NUFCA Assists With goAML Registration</h3>
    <p>We can help you with:</p>
    <ul>
        <li>Assessing whether your activity brings you within the DNFBP perimeter</li>
        <li>Compiling the information the application requires</li>
        <li>Reviewing supporting documents before submission</li>
        <li>Compliance Officer and MLRO appointment formalities</li>
        <li>Guidance at each stage of the registration</li>
        <li>Building the internal escalation route that feeds suspicious transaction reporting</li>
        <li>Drafting the AML policies that must sit behind the registration</li>
    </ul>

    <h2>DNFBP AML Obligations in the UAE</h2>
    <p>Designated Non-Financial Businesses and Professions face particular financial crime exposure and carry AML and CFT duties accordingly.</p>
    <p>The sectors we most often advise include:</p>
    <ul>
        <li>Real estate agents and brokers</li>
        <li>Dealers in precious metals and precious stones</li>
        <li>Independent accountants and auditors</li>
        <li>Trust and company service providers</li>
    </ul>
    <p>Each needs a programme calibrated to its own activity and risk profile. Lifting another firm’s manual and changing the letterhead is exactly what supervisors look for.</p>

    <h3>Real Estate Agents and Brokers</h3>
    <p>Property is an attractive route for placing and layering criminal proceeds, which puts brokers close to the risk.</p>
    <p>Controls should include:</p>
    <ul>
        <li>Customer identification and independent verification</li>
        <li>KYC on both buyer and seller sides</li>
        <li>UBO verification where a party is a corporate entity</li>
        <li>Documented customer risk classification</li>
        <li>PEP and sanctions screening</li>
        <li>Source of Funds verification</li>
        <li>Source of Wealth checks where the risk warrants it</li>
        <li>Enhanced Due Diligence on higher-risk relationships</li>
        <li>Alertness to transactions that do not fit a normal commercial pattern</li>
        <li>A clear internal escalation and reporting route</li>
        <li>Record keeping</li>
        <li>Staff training</li>
    </ul>
    <div class="alert-box">
        <strong>Warning Signs:</strong> Watch for opaque corporate ownership, third-party payments with no evident connection to the buyer, unusual deal structuring, and funds that do not square with the customer’s known finances.
    </div>

    <h3>Dealers in Precious Metals and Precious Stones</h3>
    <p>This covers trading in gold, silver, platinum, diamonds, finished jewellery and other qualifying metals and stones. Risk is shaped by high values, cash intensity and cross-border movement.</p>
    <p>Appropriate procedures include:</p>
    <ul>
        <li>Customer and UBO verification</li>
        <li>Transaction-level risk assessment</li>
        <li>Identification of linked or structured transactions</li>
        <li>PEP screening</li>
        <li>Sanctions screening</li>
        <li>Source of Funds verification</li>
        <li>Screening for exposure to high-risk jurisdictions</li>
        <li>Counterparty and supply chain checks</li>
        <li>Scrutiny of pricing or trading patterns that make no commercial sense</li>
        <li>Suspicious transaction reporting</li>
        <li>Record keeping</li>
    </ul>
    <div class="info-box">
        <strong>AED 55,000 Threshold:</strong> Customer Due Diligence obligations apply to occasional transactions at or above <strong>AED 55,000</strong>, and that figure captures linked transactions that reach the threshold in aggregate. Splitting a single deal into smaller payments does not take it outside the requirement. Equally, a transaction sitting below the threshold does not become unreportable. Suspicion triggers the reporting duty regardless of value.
    </div>

    <h3>Accountants and Auditors</h3>
    <p>Independent accountants and auditors should operate a documented, risk-based programme covering:</p>
    <ul>
        <li>Appointment of a suitably senior Compliance Officer or MLRO</li>
        <li>Business-Wide Risk Assessment</li>
        <li>Customer Risk Assessment</li>
        <li>Written AML policies and procedures</li>
        <li>Customer identification and verification</li>
        <li>Beneficial ownership checks</li>
        <li>PEP and sanctions screening</li>
        <li>Enhanced Due Diligence</li>
        <li>Ongoing monitoring of client relationships</li>
        <li>Internal escalation of suspicious activity</li>
        <li>goAML reporting procedures</li>
        <li>Staff training</li>
        <li>Record keeping</li>
        <li>Periodic independent testing of the framework</li>
    </ul>
    <p>Heightened diligence is sensible where an engagement involves layered structures, cross-border elements, restructuring, or arrangements that obscure who ultimately benefits.</p>

    <h3>Trust and Company Service Providers</h3>
    <p>TCSPs sit at an elevated risk point because the services they sell are the very instruments through which ownership can be obscured.</p>
    <p>Relevant activities include:</p>
    <ul>
        <li>Incorporating companies and other legal persons</li>
        <li>Providing a registered office or business address</li>
        <li>Supplying directors or company secretaries</li>
        <li>Acting as trustee, or arranging for another party to act</li>
        <li>Providing nominee shareholder arrangements</li>
        <li>General business administration services</li>
    </ul>
    <p>Procedures must establish who ultimately owns or controls the client and why the structure exists. A structure with no coherent commercial rationale is a warning sign on its own.</p>
    <p><strong>Focus areas:</strong> Layered ownership chains, Ultimate Beneficial Owners, nominee arrangements, cross-border structures, exposure to high-risk jurisdictions, Source of Funds, Source of Wealth, PEP connections, sanctions exposure, and unexplained changes in ownership or control.</p>

    <h2>KYC Verification: A Practical Framework</h2>
    <p>KYC sits at the centre of any AML programme, and it means far more than filing a passport copy. The objective is knowing who you are dealing with, who stands behind them, why they want the service, and whether their behaviour matches that picture over time.</p>

    <div class="item-box">
        <h4>1. Identify the customer</h4>
        <p>For individuals, collect: Full legal name, Nationality, Date of birth, Passport particulars, Emirates ID particulars (where applicable), Residential address, Contact details.</p>
        <p><em>Verification must rest on reliable, independent documents or data, not on what the customer tells you.</em></p>
    </div>

    <div class="item-box">
        <h4>2. Verify corporate customers</h4>
        <p>For entities, obtain: Registered legal name, Trade licence or registration number, Date and place of incorporation, Registered address, Principal place of business, Nature of the business, Legal form, Ownership structure, Control structure, Details of those authorised to act.</p>
        <p><em>The authority of any representative signing or instructing on the entity’s behalf should be verified as well.</em></p>
    </div>

    <div class="item-box">
        <h4>3. Identify the Ultimate Beneficial Owner</h4>
        <p>Work through the ownership chain to the natural person or persons who ultimately own or control the customer. Stopping at the first shareholder on the certificate defeats the purpose, and unusually layered structures call for Enhanced Due Diligence.</p>
    </div>

    <div class="item-box">
        <h4>4. Screen for PEPs and sanctions</h4>
        <p>Screen customers, beneficial owners and connected parties against applicable sanctions lists, and establish whether anyone involved is a Politically Exposed Person. Matches generally call for senior approval, additional verification and evidence of Source of Funds and Wealth.</p>
    </div>

    <div class="item-box">
        <h4>5. Understand the purpose of the relationship</h4>
        <p>Establish what the customer wants and why. Depending on the service, that may cover: Expected transaction types, Expected values, Countries involved, Likely counterparties, Source of funds, Commercial rationale, Expected frequency.</p>
        <p><em>This becomes the baseline against which later activity is judged. Without it, monitoring has nothing to measure against.</em></p>
    </div>

    <div class="item-box">
        <h4>6. Verify Source of Funds and Source of Wealth</h4>
        <p>Source of Funds concerns the origin of money in a particular transaction. Source of Wealth is the broader question of how the person accumulated their assets. The two are often confused and are not interchangeable.</p>
        <p>Supporting evidence may include: Bank statements, Audited financial statements, Salary or employment records, Business income records, Property sale agreements, Investment statements, Dividend records, Inheritance or probate documentation, Other reliable third-party evidence. Depth of verification should track the level of risk, not be applied uniformly to everyone.</p>
    </div>

    <div class="item-box">
        <h4>7. Assign a risk rating</h4>
        <p>Every customer should be scored against a documented methodology. Typical factors: Customer type, Nationality and country of residence, Geographic exposure, Business activity, Ownership complexity, Products or services used, Transaction patterns, Delivery channels, PEP status, Sanctions exposure, Source of Funds, Source of Wealth. Higher ratings must translate into visibly stronger controls, otherwise the rating exercise is decorative.</p>
    </div>

    <div class="item-box">
        <h4>8. Apply Enhanced Due Diligence</h4>
        <p>EDD is required wherever elevated money laundering, terrorist financing or proliferation financing risk is present. It can involve: Additional identification information, Deeper beneficial ownership enquiry, Independent corroboration from further sources, Establishing Source of Funds, Establishing Source of Wealth, More detail on the purpose behind transactions, Senior management sign-off on the relationship, Shortened review cycles, Closer transaction monitoring.</p>
    </div>

    <div class="item-box">
        <h4>9. Monitor on an ongoing basis</h4>
        <p>Onboarding is the beginning, not the end. Relationships need monitoring and records need refreshing at a frequency driven by risk.</p>
        <p>Ask continually whether activity stays consistent with the customer’s stated business, expected behaviour, risk rating and declared funding sources. Anything outside that picture goes to the Compliance Officer or MLRO for assessment and, where warranted, reporting.</p>
    </div>

    <div class="item-box">
        <h4>10. Retain the records</h4>
        <p>Maintain adequate documentation of: Customer identification, Beneficial ownership, KYC verification, Risk assessments, Transactions, Source of Funds, Source of Wealth, PEP and sanctions screening, Enhanced Due Diligence, Internal reviews, Suspicious activity assessments, Regulatory reports, Training attendance and content.</p>
        <p><em>DNFBPs are generally required to keep these records for a minimum of five years, subject to the applicable requirements. Note that assessments concluding no report was needed should be documented too, since the reasoning is what an inspector will want to see.</em></p>
    </div>

    <h2>Why Work With NUFCA</h2>
    <p>AML compliance is not a template exercise. Supervisors look for policies that describe what the business actually does, risk assessments grounded in real customer data, and evidence that controls operate in practice.</p>
    <p><strong>NUF Chartered Accountants</strong> provides hands-on AML support to businesses in ${locationName} and across the UAE, covering:</p>
    <ul>
        <li>Framework design and implementation</li>
        <li>goAML registration</li>
        <li>Policies and procedures</li>
        <li>Business-Wide Risk Assessments</li>
        <li>Customer Risk Assessments</li>
        <li>KYC and CDD procedures</li>
        <li>UBO verification processes</li>
        <li>PEP and sanctions screening controls</li>
        <li>Enhanced Due Diligence</li>
        <li>Source of Funds and Source of Wealth procedures</li>
        <li>Compliance Officer and MLRO support</li>
        <li>STR and SAR reporting procedures</li>
        <li>Staff training</li>
        <li>Periodic compliance reviews and inspection readiness</li>
    </ul>

    <h2>Talk to Us About Your AML Framework</h2>
    <p>Whether you are building a programme from scratch, working through goAML enrolment, revisiting dated KYC procedures or preparing for a supervisory inspection, NUF Chartered Accountants can help.</p>
    <p>Contact NUF Chartered Accountants for AML CFT compliance services in ${locationName} and throughout the UAE.</p>

    <h2>Frequently Asked Questions</h2>

    <div class="item-box">
        <h4>1. What do AML CFT compliance services in ${locationName} cover?</h4>
        <p>They help a business identify, assess and reduce money laundering, terrorist financing and proliferation financing risk. Typical scope includes risk assessments, written policies, goAML enrolment, KYC and Customer Due Diligence, beneficial ownership verification, PEP and sanctions screening, training and reporting procedures.</p>
    </div>

    <div class="item-box">
        <h4>2. Which businesses are DNFBPs in the UAE?</h4>
        <p>The main categories we advise are real estate agents and brokers, dealers in precious metals and stones, independent accountants and auditors, and trust and company service providers. Other professions fall within the perimeter depending on the activity performed, so check your licensed activity against the current definitions.</p>
    </div>

    <div class="item-box">
        <h4>3. Is goAML registration compulsory?</h4>
        <p>For DNFBPs within the reporting framework, yes. It is how regulated entities submit Suspicious Transaction Reports, Suspicious Activity Reports and other filings to the UAE Financial Intelligence Unit. Low activity is not an exemption.</p>
    </div>

    <div class="item-box">
        <h4>4. How does registration work?</h4>
        <p>In outline: SACM pre-registration, Google Authenticator setup, login to the production portal, organisation registration, completion of mandatory fields, document upload, and submission for approval.</p>
    </div>

    <div class="item-box">
        <h4>5. What documents are needed?</h4>
        <p>Usually the trade licence, an authorisation letter appointing the Compliance Officer or MLRO, and identification for that individual, typically passport plus Emirates ID where applicable.</p>
    </div>

    <div class="item-box">
        <h4>6. What KYC checks are expected of DNFBPs?</h4>
        <p>Identify and verify the customer, confirm representatives’ authority, establish beneficial ownership, understand the purpose of the relationship, assign a risk rating, screen for PEP and sanctions exposure, verify Source of Funds or Wealth where risk requires it, and monitor thereafter.</p>
    </div>

    <div class="item-box">
        <h4>7. When is Enhanced Due Diligence needed?</h4>
        <p>Wherever elevated risk is identified. Common triggers are PEP involvement, high-risk jurisdictions, opaque ownership, transactions without clear economic purpose, and doubts about information gathered earlier.</p>
    </div>

    <div class="item-box">
        <h4>8. When does CDD apply to an occasional transaction?</h4>
        <p>For dealers in precious metals and stones, at or above AED 55,000, counting linked transactions that reach that level together. CDD is also required where suspicion arises or where previously obtained customer information is in doubt, whatever the amount.</p>
    </div>

    <div class="item-box">
        <h4>9. How long must records be kept?</h4>
        <p>Generally at least five years for AML, KYC, transaction and supporting records, subject to the applicable UAE requirements.</p>
    </div>

    <div class="item-box">
        <h4>10. Can NUFCA handle goAML registration and ongoing compliance?</h4>
        <p>Yes. We assist with registration, policies, risk assessments, KYC and CDD processes, UBO verification, PEP and sanctions controls, Enhanced Due Diligence, training and periodic reviews.</p>
    </div>

    <div style="background:#f8f9fa; padding:15px; border-left:4px solid #134074; margin-top:25px; font-size: 14px; color: #555;">
        <p><em>This page is general information and is not legal or regulatory advice. UAE AML and CFT requirements, thresholds and supervisory guidance are subject to change. Confirm your position with your supervisory authority or with NUF Chartered Accountants before acting.</em></p>
    </div>

</div>

<!-- Related Services Section (Clean UL / LI structure - 100% WP-safe) -->
<div class="related-services-sec" style="background: #f8fafc; padding: 30px 20px; border-radius: 8px; margin: 40px auto; max-width: 900px; border: 1px solid #e2e8f0;">
    <h3 style="color: #0b2545; margin-bottom: 8px; font-size: 22px; text-align: center; font-weight: 800;">Related Compliance & Advisory Services in ${locationName}</h3>
    <p style="text-align: center; color: #64748b; font-size: 14px; margin-bottom: 25px;">Strengthen your financial governance with our integrated corporate advisory services.</p>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        <li style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); text-align: center;">
            <a href="https://nufca.com/corporate-tax-in-uae/" style="color: #0b2545; text-decoration: none; font-weight: 700; font-size: 16px; display: block; margin-bottom: 6px;">Corporate Tax Advisory</a>
            <span style="display: block; font-size: 13px; color: #64748b; line-height: 1.4; margin-bottom: 10px;">Registration, 9% CT computations, QFZP & TP documentation</span>
            <a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 13px; display: inline-block;">Explore Service &rarr;</a>
        </li>
        <li style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); text-align: center;">
            <a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #0b2545; text-decoration: none; font-weight: 700; font-size: 16px; display: block; margin-bottom: 6px;">VAT Consultancy Services</a>
            <span style="display: block; font-size: 13px; color: #64748b; line-height: 1.4; margin-bottom: 10px;">VAT registration, return filings, health checks & FTA audits</span>
            <a href="https://nufca.com/vat-consultancy-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 13px; display: inline-block;">Explore Service &rarr;</a>
        </li>
        <li style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); text-align: center;">
            <a href="https://nufca.com/audit-assurance-uae/" style="color: #0b2545; text-decoration: none; font-weight: 700; font-size: 16px; display: block; margin-bottom: 6px;">Audit & Assurance</a>
            <span style="display: block; font-size: 13px; color: #64748b; line-height: 1.4; margin-bottom: 10px;">Statutory audits, IFRS compliance, free zone renewals & reports</span>
            <a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 13px; display: inline-block;">Explore Service &rarr;</a>
        </li>
        <li style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); text-align: center;">
            <a href="https://nufca.com/esr-compliance-services-in-uae/" style="color: #0b2545; text-decoration: none; font-weight: 700; font-size: 16px; display: block; margin-bottom: 6px;">ESR Compliance Services</a>
            <span style="display: block; font-size: 13px; color: #64748b; line-height: 1.4; margin-bottom: 10px;">Economic Substance assessments, CIGA tests & notifications</span>
            <a href="https://nufca.com/esr-compliance-services-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 13px; display: inline-block;">Explore Service &rarr;</a>
        </li>
    </ul>
</div>

<div class="cta-sec">
    <h2>Still have questions? Speak to an AML CFT compliance consultant in ${locationName}</h2>
    <p>Contact NUF Chartered Accountants for AML CFT compliance services in ${locationName} and throughout the UAE.</p>
    <a class="btn btn-wa" href="https://wa.me/97142500679" target="_blank">WhatsApp Us</a>
    <a class="btn" href="tel:043258361">Call 04 325 8361</a>
    <a class="btn btn-email" href="mailto:info@nufca.com">Email Us</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - AML CFT Compliance Services ${locationName}",
      "telephone": "+97143258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "${loc.office}"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What do AML CFT compliance services in ${locationName} cover?", "acceptedAnswer": { "@type": "Answer", "text": "They help a business identify, assess and reduce money laundering, terrorist financing and proliferation financing risk. Typical scope includes risk assessments, written policies, goAML enrolment, KYC and Customer Due Diligence, beneficial ownership verification, PEP and sanctions screening, training and reporting procedures." } },
        { "@type": "Question", "name": "Which businesses are DNFBPs in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "The main categories we advise are real estate agents and brokers, dealers in precious metals and stones, independent accountants and auditors, and trust and company service providers. Other professions fall within the perimeter depending on the activity performed, so check your licensed activity against the current definitions." } },
        { "@type": "Question", "name": "Is goAML registration compulsory?", "acceptedAnswer": { "@type": "Answer", "text": "For DNFBPs within the reporting framework, yes. It is how regulated entities submit Suspicious Transaction Reports, Suspicious Activity Reports and other filings to the UAE Financial Intelligence Unit. Low activity is not an exemption." } },
        { "@type": "Question", "name": "How does registration work?", "acceptedAnswer": { "@type": "Answer", "text": "In outline: SACM pre-registration, Google Authenticator setup, login to the production portal, organisation registration, completion of mandatory fields, document upload, and submission for approval." } },
        { "@type": "Question", "name": "What documents are needed?", "acceptedAnswer": { "@type": "Answer", "text": "Usually the trade licence, an authorisation letter appointing the Compliance Officer or MLRO, and identification for that individual, typically passport plus Emirates ID where applicable." } },
        { "@type": "Question", "name": "What KYC checks are expected of DNFBPs?", "acceptedAnswer": { "@type": "Answer", "text": "Identify and verify the customer, confirm representatives’ authority, establish beneficial ownership, understand the purpose of the relationship, assign a risk rating, screen for PEP and sanctions exposure, verify Source of Funds or Wealth where risk requires it, and monitor thereafter." } },
        { "@type": "Question", "name": "When is Enhanced Due Diligence needed?", "acceptedAnswer": { "@type": "Answer", "text": "Wherever elevated risk is identified. Common triggers are PEP involvement, high-risk jurisdictions, opaque ownership, transactions without clear economic purpose, and doubts about information gathered earlier." } },
        { "@type": "Question", "name": "When does CDD apply to an occasional transaction?", "acceptedAnswer": { "@type": "Answer", "text": "For dealers in precious metals and stones, at or above AED 55,000, counting linked transactions that reach that level together. CDD is also required where suspicion arises or where previously obtained customer information is in doubt, whatever the amount." } },
        { "@type": "Question", "name": "How long must records be kept?", "acceptedAnswer": { "@type": "Answer", "text": "Generally at least five years for AML, KYC, transaction and supporting records, subject to the applicable UAE requirements." } },
        { "@type": "Question", "name": "Can NUFCA handle goAML registration and ongoing compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We assist with registration, policies, risk assessments, KYC and CDD processes, UBO verification, PEP and sanctions controls, Enhanced Due Diligence, training and periodic reviews." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nufca.com/" },
        { "@type": "ListItem", "position": 2, "name": "AML CFT Compliance Services UAE", "item": "https://nufca.com/aml-cft-compliance-services-in-uae/" }
      ]
    }
  ]
}
</script>
`;
}

async function run() {
    for (const loc of locations) {
        const content = generateHTML(loc);
        const url = 'https://nufca.com/wp-json/wp/v2/pages/' + loc.id;
        const seoTitle = `AML CFT Compliance Services ${loc.name === 'UAE' ? 'in UAE' : 'in ' + loc.name} | AML Consultants`;
        const metaExcerpt = `NUF Chartered Accountants provides AML CFT compliance services ${loc.name === 'UAE' ? 'in UAE' : 'in ' + loc.name}. goAML registration, KYC, UBO verification, and DNFBP audit advisory.`;
        console.log('Deploying to', loc.name, url);
        
        const payload = JSON.stringify({
            content: content,
            title: seoTitle,
            excerpt: metaExcerpt
        });
        
        try {
            await new Promise((resolve, reject) => {
                const req = https.request(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': authHeader,
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(payload)
                    }
                }, (res) => {
                    let data = '';
                    res.on('data', chunk => data += chunk);
                    res.on('end', () => {
                        console.log('Status for ' + loc.name + ':', res.statusCode);
                        resolve();
                    });
                });
                req.on('error', reject);
                req.write(payload);
                req.end();
            });
        } catch(e) {
            console.error('Error for ' + loc.name, e);
        }
    }
}
run();
