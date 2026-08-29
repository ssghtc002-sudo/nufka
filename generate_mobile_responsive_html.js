const fs = require('fs');
const path = require('path');

const MAIN_CT_ID = 99000;

const mainCorporateTaxPage = {
    id: MAIN_CT_ID,
    slug: "corporate-tax-in-uae",
    title: "Corporate Tax in UAE | Corporate Tax Consultants",
    parent_id: 0,
    city_name: "UAE",
    branch_title: "NUFCA UAE Headquarters",
    address: "Dubai & Abu Dhabi, United Arab Emirates",
    phone: "055-9831923",
    email: "dmcc@nufca.com"
};

const childLocations = [
    {
        id: 99101,
        slug: "dubai",
        title: "Corporate Tax Consultants in Dubai | NUFCA",
        parent_id: MAIN_CT_ID,
        city_name: "Dubai",
        branch_title: "NUFCA Dubai Headquarters",
        address: "Dubai, United Arab Emirates",
        phone: "055-9831923",
        email: "dmcc@nufca.com"
    },
    {
        id: 99102,
        slug: "gold-souk-dubai",
        title: "Corporate Tax Consultants in Gold Souk (Deira, Dubai) | NUFCA",
        parent_id: MAIN_CT_ID,
        city_name: "Gold Souk (Deira, Dubai)",
        branch_title: "NUFCA Gold Souk Branch Office",
        address: "Office 115, Sheikha Building, Gold Souq, Al Ras, Deira, Dubai, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com"
    },
    {
        id: 99103,
        slug: "abu-dhabi",
        title: "Corporate Tax Consultants in Abu Dhabi | NUFCA",
        parent_id: MAIN_CT_ID,
        city_name: "Abu Dhabi",
        branch_title: "NUFCA Abu Dhabi Branch Office",
        address: "Office 2402G, 24th Floor, Tamouh Tower, Tamouh, Al Reem Island, Abu Dhabi, UAE",
        phone: "055-9831923",
        email: "dmcc@nufca.com"
    },
    {
        id: 99104,
        slug: "sharjah",
        title: "Corporate Tax Consultants in Sharjah | NUFCA",
        parent_id: MAIN_CT_ID,
        city_name: "Sharjah",
        branch_title: "NUFCA Sharjah Hamriyah Branch Office",
        address: "ELOB Office No. E2-115F-35, Hamriyah Free Zone, Sharjah, UAE",
        phone: "055-5204830",
        email: "hm@nufca.com"
    }
];

function generateCleanResponsiveHTML(loc) {
    const currentSlug = loc.slug;
    
    return `<style>
.nufca-container { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.7; color: #1d2d44; max-width: 1000px; margin: 0 auto; padding: 15px; }
.nufca-city-nav { background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin-bottom: 25px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.nufca-city-nav-title { font-size: 13px; font-weight: 700; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px; }
.nufca-city-select { padding: 8px 14px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer; outline: none; }
.nufca-hero { background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 35px 20px; border-radius: 12px; margin-bottom: 30px; }
.nufca-eyebrow { background: rgba(255,255,255,0.15); color: #ffffff; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; display: inline-block; }
.nufca-hero-h1 { color: #ffffff !important; font-size: clamp(24px, 5vw, 34px); margin-top: 15px; font-weight: 800; line-height: 1.25; }
.nufca-trust-strip { display: flex; flex-wrap: wrap; gap: 12px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 13px; font-weight: 600; }
.nufca-branch-bar { background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); padding: 15px; border-radius: 8px; margin-top: 20px; font-size: 14px; }
.nufca-form-card { background: #ffffff; border: 2px solid #134074; padding: 25px 20px; border-radius: 12px; margin-bottom: 35px; box-shadow: 0 8px 20px rgba(0,0,0,0.06); }
.nufca-form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; }
.nufca-form-group { display: flex; flex-direction: column; }
.nufca-form-group.full-width { grid-column: 1 / -1; }
.nufca-label { font-size: 13px; font-weight: 700; color: #0b2545; margin-bottom: 6px; }
.nufca-input, .nufca-select, .nufca-textarea { width: 100%; padding: 12px 14px; font-size: 16px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; background-color: #f8fafc; color: #1e293b; transition: border-color 0.2s, background-color 0.2s; }
.nufca-input:focus, .nufca-select:focus, .nufca-textarea:focus { outline: none; border-color: #134074; background-color: #ffffff; }
.nufca-checkbox-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; font-size: 14px; margin-top: 4px; }
.nufca-checkbox-label { display: flex; align-items: center; gap: 8px; cursor: pointer; color: #334155; font-size: 14px; }
.nufca-btn { background: #134074; color: #ffffff; font-weight: 700; font-size: 16px; padding: 15px 30px; border: none; border-radius: 8px; cursor: pointer; width: 100%; transition: background 0.2s; }
.nufca-btn:hover { background: #0b2545; }
.nufca-warning-box { background: #fff3cd; border-left: 5px solid #ffc107; padding: 15px 20px; border-radius: 6px; margin: 25px 0; }
.nufca-faq-item { margin-bottom: 12px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; background: #ffffff; }
.nufca-cta-footer { background: #0b2545; color: #ffffff; text-align: center; padding: 35px 20px; border-radius: 10px; margin-top: 40px; }
.nufca-cta-btn { background: #ffffff; color: #0b2545; font-weight: 700; padding: 14px 32px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 15px; }
</style>

<div class="nufca-container">
    
    <!-- Top Interactive Cities Selector Dropdown Bar -->
    <div class="nufca-city-nav">
        <span class="nufca-city-nav-title">📍 Select NUFCA City / Branch Location:</span>
        <select class="nufca-city-select" onchange="if(this.value) window.location.href=this.value;">
            <option value="https://nufca.com/corporate-tax-in-uae/" ${currentSlug==='corporate-tax-in-uae'?'selected':''}>🇦🇪 All UAE (Main Headquarters)</option>
            <option value="https://nufca.com/corporate-tax-in-uae/dubai/" ${currentSlug==='dubai'?'selected':''}>🏙️ Dubai (Mainland & Free Zones)</option>
            <option value="https://nufca.com/corporate-tax-in-uae/gold-souk-dubai/" ${currentSlug==='gold-souk-dubai'?'selected':''}>🪙 Gold Souk (Deira, Dubai)</option>
            <option value="https://nufca.com/corporate-tax-in-uae/abu-dhabi/" ${currentSlug==='abu-dhabi'?'selected':''}>🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
            <option value="https://nufca.com/corporate-tax-in-uae/sharjah/" ${currentSlug==='sharjah'?'selected':''}>🏭 Sharjah (Hamriyah Free Zone)</option>
        </select>
    </div>

    <!-- Hero Section -->
    <div class="nufca-hero">
        <span class="nufca-eyebrow">Federal Decree-Law No. 47 of 2022 - Now In Force</span>
        <h1 class="nufca-hero-h1">Corporate Tax Consultants in ${loc.city_name} Who Handle the Filing, Not Just the Advice</h1>
        <p style="font-size: 17px; opacity: 0.95; max-width: 850px; margin-bottom: 20px;">Registration, taxable income computation, free zone QFZP assessment, transfer pricing documentation and return filing - delivered by qualified UAE tax advisors before your nine-month deadline, not after it.</p>
        
        <!-- Trust Strip -->
        <div class="nufca-trust-strip">
            <span>✓ FTA-registered tax agents</span>
            <span>✓ 500+ UAE entities onboarded</span>
            <span>✓ Mainland, free zone and multinational groups</span>
            <span>✓ Response within one working day</span>
        </div>

        <!-- Branch Address Bar -->
        <div class="nufca-branch-bar">
            <div style="font-weight: bold; color: #8da9c4; font-size: 11px; text-transform: uppercase;">📍 ${loc.branch_title}:</div>
            <div style="font-size: 15px; font-weight: bold; margin-top: 2px;">${loc.address}</div>
            <div style="margin-top: 4px;">📞 Phone: <strong>${loc.phone}</strong> | ✉️ Email: <strong>${loc.email}</strong></div>
        </div>
    </div>

    <!-- Mobile-Optimized Interactive Lead Form -->
    <div class="nufca-form-card">
        <h3 style="color: #0b2545; margin-top: 0; font-size: 22px; font-weight: 700;">Get Your Corporate Tax Position Reviewed in ${loc.city_name}</h3>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">Send your details and a consultant will come back with your registration status, applicable rate and next filing date. No cost, no obligation.</p>
        
        <form action="https://nufca.com/contact-us/" method="POST">
            <div class="nufca-form-grid">
                <div class="nufca-form-group">
                    <label class="nufca-label">Full Name *</label>
                    <input type="text" name="fullname" class="nufca-input" placeholder="Your name" required>
                </div>
                <div class="nufca-form-group">
                    <label class="nufca-label">Business Email *</label>
                    <input type="email" name="email" class="nufca-input" placeholder="name@company.ae" required>
                </div>
                <div class="nufca-form-group">
                    <label class="nufca-label">Mobile Number *</label>
                    <input type="tel" name="mobile" class="nufca-input" placeholder="+971 50 123 4567" required>
                </div>
                <div class="nufca-form-group">
                    <label class="nufca-label">Company Name *</label>
                    <input type="text" name="company" class="nufca-input" placeholder="Registered trade name" required>
                </div>
                <div class="nufca-form-group">
                    <label class="nufca-label">Entity Type *</label>
                    <select name="entity_type" class="nufca-select" required>
                        <option value="">Select Entity Type</option>
                        <option value="Mainland LLC">Mainland LLC</option>
                        <option value="Free Zone Company">Free Zone Company</option>
                        <option value="Branch of Foreign Company">Branch of Foreign Company</option>
                        <option value="Sole Establishment">Sole Establishment</option>
                        <option value="Holding Company">Holding Company</option>
                        <option value="Not yet incorporated">Not yet incorporated</option>
                    </select>
                </div>
                <div class="nufca-form-group">
                    <label class="nufca-label">Annual Turnover *</label>
                    <select name="turnover" class="nufca-select" required>
                        <option value="">Select Annual Turnover</option>
                        <option value="Under AED 3 million">Under AED 3 million</option>
                        <option value="AED 3 million–50 million">AED 3 million–50 million</option>
                        <option value="AED 50 million–200 million">AED 50 million–200 million</option>
                        <option value="Above AED 200 million">Above AED 200 million</option>
                    </select>
                </div>
                
                <div class="nufca-form-group full-width">
                    <label class="nufca-label">Help Needed</label>
                    <div class="nufca-checkbox-grid">
                        <label class="nufca-checkbox-label"><input type="checkbox" name="services[]" value="Corporate tax registration"> Corporate tax registration</label>
                        <label class="nufca-checkbox-label"><input type="checkbox" name="services[]" value="Return filing"> Return filing</label>
                        <label class="nufca-checkbox-label"><input type="checkbox" name="services[]" value="Free zone QFZP assessment"> Free zone QFZP assessment</label>
                        <label class="nufca-checkbox-label"><input type="checkbox" name="services[]" value="Transfer pricing documentation"> Transfer pricing documentation</label>
                        <label class="nufca-checkbox-label"><input type="checkbox" name="services[]" value="Tax group formation"> Tax group formation</label>
                        <label class="nufca-checkbox-label"><input type="checkbox" name="services[]" value="Health check or second opinion"> Health check or second opinion</label>
                    </div>
                </div>

                <div class="nufca-form-group full-width">
                    <label class="nufca-label">Message</label>
                    <textarea name="message" class="nufca-textarea" rows="3" placeholder="Tell us about your financial year end and current status"></textarea>
                </div>

                <div class="nufca-form-group full-width">
                    <label class="nufca-checkbox-label" style="font-size: 13px; color: #64748b;">
                        <input type="checkbox" required style="width: 16px; height: 16px;"> I agree to be contacted about my enquiry. We do not share your data.
                    </label>
                </div>

                <div class="nufca-form-group full-width">
                    <button type="submit" class="nufca-btn">Request My Tax Review</button>
                    <div style="font-size: 12px; color: #64748b; margin-top: 8px; text-align: center;">Typical response time: under 24 hours on working days.</div>
                </div>
            </div>
        </form>
    </div>

    <!-- Section 1 -->
    <h2 style="color: #0b2545; font-size: 24px; border-bottom: 2px solid #134074; padding-bottom: 8px;">The UAE Is No Longer a Zero-Tax Jurisdiction</h2>
    <p>For decades, the pitch for setting up in ${loc.city_name} was simple: no corporate tax. That ended with <strong>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses</strong>, which introduced a federal corporate tax applying to financial years beginning on or after 1 June 2023.</p>
    <p>A company with a calendar financial year entered its first tax period on 1 January 2024. A company with a June year-end entered it a full seven months earlier.</p>
    <p>The law is not punitive by international standards - the headline rate of 9% remains one of the lowest anywhere - but it is administratively demanding.</p>

    <!-- Closing CTA -->
    <div class="nufca-cta-footer">
        <h2 style="color: #ffffff; margin-top: 0; font-size: 24px;">Book a Consultation with Our Corporate Tax Consultants in ${loc.city_name}</h2>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 8px;">${loc.branch_title} • ${loc.address}</p>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Call <strong>${loc.phone}</strong> or request a free review online.</p>
        <a href="https://nufca.com/contact-us/" class="nufca-cta-btn">Book My Free Corporate Tax Review →</a>
    </div>

</div>`;
}

function escapeXML(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

function buildWXRXML() {
    let itemsXML = `
        <!-- Main Parent Page: /corporate-tax-in-uae/ -->
        <item>
            <title>${escapeXML(mainCorporateTaxPage.title)}</title>
            <dc:creator><![CDATA[admin]]></dc:creator>
            <content:encoded><![CDATA[${generateCleanResponsiveHTML(mainCorporateTaxPage)}]]></content:encoded>
            <wp:post_id>${mainCorporateTaxPage.id}</wp:post_id>
            <wp:post_date><![CDATA[2026-08-03 12:00:00]]></wp:post_date>
            <wp:post_date_gmt><![CDATA[2026-08-03 12:00:00]]></wp:post_date_gmt>
            <wp:comment_status><![CDATA[closed]]></wp:comment_status>
            <wp:ping_status><![CDATA[closed]]></wp:ping_status>
            <wp:post_name><![CDATA[${mainCorporateTaxPage.slug}]]></wp:post_name>
            <wp:status><![CDATA[publish]]></wp:status>
            <wp:post_parent>0</wp:post_parent>
            <wp:menu_order>0</wp:menu_order>
            <wp:post_type><![CDATA[page]]></wp:post_type>
            <wp:is_sticky>0</wp:is_sticky>
        </item>`;

    childLocations.forEach((loc) => {
        const htmlContent = generateCleanResponsiveHTML(loc);

        itemsXML += `
        <!-- Child Location Page: /corporate-tax-in-uae/${loc.slug}/ -->
        <item>
            <title>${escapeXML(loc.title)}</title>
            <dc:creator><![CDATA[admin]]></dc:creator>
            <content:encoded><![CDATA[${htmlContent}]]></content:encoded>
            <wp:post_id>${loc.id}</wp:post_id>
            <wp:post_date><![CDATA[2026-08-03 12:00:00]]></wp:post_date>
            <wp:post_date_gmt><![CDATA[2026-08-03 12:00:00]]></wp:post_date_gmt>
            <wp:comment_status><![CDATA[closed]]></wp:comment_status>
            <wp:ping_status><![CDATA[closed]]></wp:ping_status>
            <wp:post_name><![CDATA[${loc.slug}]]></wp:post_name>
            <wp:status><![CDATA[publish]]></wp:status>
            <wp:post_parent>${loc.parent_id}</wp:post_parent>
            <wp:menu_order>0</wp:menu_order>
            <wp:post_type><![CDATA[page]]></wp:post_type>
            <wp:is_sticky>0</wp:is_sticky>
        </item>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
    xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:wfw="http://wellformedweb.org/CommentAPI/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:wp="http://wordpress.org/export/1.2/"
>
<channel>
    <title>NUFCA Corporate Tax Pages</title>
    <link>https://nufca.com</link>
    <description>WordPress 1-Click Importer XML File with Embedded City Dropdown Bar</description>
    <pubDate>Fri, 07 Aug 2026 12:00:00 +0000</pubDate>
    <language>en-US</language>
    <wp:wxr_version>1.2</wp:wxr_version>
    <wp:base_site_url>https://nufca.com</wp:base_site_url>
    <wp:base_blog_url>https://nufca.com</wp:base_blog_url>
    ${itemsXML}
</channel>
</rss>`;

    const targetPath1 = path.join(__dirname, 'nufca_corporate_tax_pages.xml');
    const targetPath2 = "c:\\Users\\ssght\\OneDrive\\Desktop\\nufca_corporate_tax_pages.xml";

    fs.writeFileSync(targetPath1, xml, 'utf-8');
    fs.writeFileSync(targetPath2, xml, 'utf-8');
    console.log(`✅ Direct XML with Embedded City Dropdown Selector created at: ${targetPath2}`);
}

buildWXRXML();
