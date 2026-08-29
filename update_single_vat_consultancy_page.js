const https = require('https');

// ONLY Target Page ID 99146 (https://nufca.com/vat-consultancy-in-uae/)
const targetPageId = 99146;
const authHeader = 'Basic ' + Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

function buildHTML() {
    return `<style>
#pagetitle, .page-title.bg-image, .page-title-inner, .page-title-holder, .ct-breadcrumb { display: none !important; }
.nufca-content-wrap { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.7; font-size: 16px; max-width: 960px; margin: 0 auto; }
.nufca-content-wrap h2 { color: #0b2545; font-size: 24px; font-weight: 800; margin-top: 35px; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
.nufca-content-wrap h3 { color: #134074; font-size: 19px; font-weight: 700; margin-top: 25px; margin-bottom: 10px; }
.nufca-content-wrap h4 { color: #0b2545; font-size: 16px; font-weight: 700; margin-top: 18px; margin-bottom: 6px; }
.nufca-content-wrap p { margin-bottom: 16px; }
.nufca-content-wrap ul { margin-bottom: 20px; padding-left: 25px; }
.nufca-content-wrap li { margin-bottom: 8px; }
.nufca-card-step { background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #134074; border-radius: 6px; padding: 16px 20px; margin-bottom: 14px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
.nufca-card-step h4 { margin-top: 0; }
.nufca-card-step p:last-child { margin-bottom: 0; }
.nufca-box-info { background: #eff6ff; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 6px; margin: 20px 0; color: #1e40af; }
.nufca-box-warning { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 16px 20px; border-radius: 6px; margin: 20px 0; color: #92400e; }
.nufca-box-disclaimer { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #64748b; padding: 16px 20px; border-radius: 6px; font-size: 13.5px; color: #64748b; margin: 30px 0; }
.nufca-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
.nufca-table th, .nufca-table td { border: 1px solid #cbd5e1; padding: 12px; text-align: left; }
.nufca-table th { background-color: #0b2545; color: white; font-weight: 700; }
.nufca-table tr:nth-child(even) td { background-color: #f8fafc; }
</style>

<div class="nufca-content-wrap">

<!-- Filter Location Dropdown Bar -->
<div class="nufca-filter-bar" style="background: #ffffff; border: 2px solid #134074; padding: 12px 18px; border-radius: 10px; margin: 15px 0 25px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 4px 12px rgba(11,37,69,0.06);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-size: 20px;">📍</span>
    <span style="font-size: 14px; font-weight: 800; color: #0b2545; text-transform: uppercase; letter-spacing: 0.5px;">Filter Location:</span>
  </div>
  <select onchange="if(this.value) window.location.href=this.value;" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #0b2545; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; cursor: pointer; outline: none; min-width: 280px;">
    <option value="https://nufca.com/vat-consultancy-in-uae/" selected>🇦🇪 All UAE (Main Headquarters)</option>
    <option value="https://nufca.com/vat-consultancy-in-uae/dubai/">🏙️ Dubai (Bur Dubai Head Office)</option>
    <option value="https://nufca.com/vat-consultancy-in-uae/gold-souk-dubai/">🪙 Gold Souk (Deira, Dubai)</option>
    <option value="https://nufca.com/vat-consultancy-in-uae/abu-dhabi/">🏛️ Abu Dhabi (Tamouh Tower, Al Reem)</option>
    <option value="https://nufca.com/vat-consultancy-in-uae/sharjah/">🏭 Sharjah (Hamriyah Free Zone)</option>
  </select>
</div>

<!-- Hero Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 50px 24px; text-align: center; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(11,37,69,0.15);">
    <div style="display: inline-block; background: rgba(255,255,255,0.15); color: #93c5fd; padding: 5px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 0.5px;">Federal Decree-Law No. 8 of 2017 — FTA Compliant</div>
    <h1 style="font-size: 32px; font-weight: 800; color: #ffffff !important; margin: 0 0 15px; line-height: 1.25;">VAT Consultancy Services in UAE</h1>
    <p style="font-size: 16px; max-width: 800px; margin: 0 auto 18px; color: #e2e8f0; line-height: 1.6;">Registration, returns, health checks, voluntary disclosures, and FTA audit support — reviewed by qualified chartered accountants.</p>
    <div style="font-size: 14px; color: #bae6fd; font-weight: 600; margin-bottom: 15px;">✓ FTA Certified Tax Agents &nbsp;|&nbsp; ✓ 500+ UAE VAT Audits Handled &nbsp;|&nbsp; ✓ Pre-Audit Risk Assessment &nbsp;|&nbsp; ✓ Response Within 1 Working Day</div>
    <div style="margin-top: 15px; font-size: 13.5px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px;">📍 Office: 510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE &nbsp;|&nbsp; 📞 Phone: 04 325 8361 / 055-9831923</div>
</div>

<!-- Top Direct Consultation Card -->
<div style="background: #f8fafc; border: 2px solid #134074; border-radius: 10px; padding: 28px 20px; text-align: center; margin: 30px 0; box-shadow: 0 4px 15px rgba(11,37,69,0.05);">
    <h3 style="color: #0b2545; margin: 0 0 10px; font-size: 21px; font-weight: 800;">Direct Advisory Consultation</h3>
    <p style="margin: 0 auto 18px; max-width: 700px; color: #475569; font-size: 15px;">Speak directly with our VAT experts to secure your compliance, optimize input VAT recovery, and prevent costly FTA penalties.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #134074; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(19,64,116,0.25);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: #0b2545; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(11,37,69,0.25);">✉️ Email Us</a></div>
</div>

<p>Filing a return on time is the easy part of VAT. The hard part happens months earlier — in how a transaction was classified, whether the invoice met FTA requirements, whether that input VAT was ever recoverable, and whether the export you zero-rated actually satisfied the conditions.</p>
<p>By the time those decisions reach a VAT return, they have usually been repeated across hundreds of entries.</p>
<p><strong>Nadeem and Umendra Chartered Accountants (NUFCA)</strong> works with UAE businesses on the whole chain: registration thresholds, transaction treatment, record-keeping, input VAT recovery, import and export positions, error correction, and audit readiness.</p>

<h2>Why VAT Reaches Further Than the Return</h2>
<p>VAT touches sales, purchases, contracts, pricing, invoicing, imports, exports, your accounting system and your cash flow. A single misclassification entered into the ledger does not stay in the ledger — it flows into the return submitted to the Federal Tax Authority.</p>
<p>Which is why the answer is controls, not just a quarterly filing exercise.</p>

<h3>Our VAT consultants in the UAE support businesses with:</h3>
<ul>
    <li>VAT registration and deregistration</li>
    <li>VAT return preparation and filing</li>
    <li>Transaction-level VAT advisory</li>
    <li>VAT health checks and pre-audit reviews</li>
    <li>Input VAT recovery analysis</li>
    <li>Output VAT reconciliation</li>
    <li>Zero-rated and exempt supply assessments</li>
    <li>Reverse Charge Mechanism reviews</li>
    <li>Import and export VAT advisory</li>
    <li>Tax invoice and ERP template compliance</li>
    <li>VAT accounting and ledger reconciliation</li>
    <li>VAT211 / Form 211 Voluntary Disclosure</li>
    <li>FTA tax audit assistance</li>
    <li>VAT documentation reviews</li>
    <li>VAT training for finance teams</li>
</ul>
<div class="nufca-box-info">The goal is not just a submitted return. It is a return that is supported by the records behind it.</div>

<h2>VAT Registration Thresholds: AED 375,000 and AED 187,500</h2>
<p>Taxable turnover needs monitoring continuously — not once a year when the accounts are closed. The registration test runs on a rolling basis.</p>

<h3>Mandatory Registration — AED 375,000</h3>
<p>Registration is generally mandatory for a UAE-resident business where either condition is met:</p>
<ul>
    <li>Taxable supplies and imports exceeded AED 375,000 over the previous 12 months; or</li>
    <li>Taxable supplies and imports are expected to exceed AED 375,000 in the next 30 days.</li>
</ul>
<div class="nufca-box-warning">Miss the deadline and you face administrative penalties on top of VAT that should have been charged but was not — a bill you often cannot pass back to customers who have already been invoiced.</div>

<h3>Voluntary Registration — AED 187,500</h3>
<p>A UAE-resident business may generally apply to register voluntarily once taxable supplies, imports or qualifying taxable expenses exceed AED 187,500.</p>
<p>This is worth modelling rather than dismissing. A business below the mandatory threshold that pays significant VAT on its own costs may be better off registered — the recoverable input VAT can outweigh the compliance effort.</p>
<p>We review turnover, activity mix, expenses and forecast revenue to establish which threshold applies and when.</p>

<h2>5% Standard-Rated, 0% Zero-Rated and Exempt — The Difference That Costs Money</h2>
<p>Zero-rated and exempt look identical from the customer’s side. The customer pays no VAT either way.</p>
<p>From the supplier’s side they are not remotely the same.</p>

<table class="nufca-table">
    <thead>
        <tr>
            <th>Treatment</th>
            <th>Rate</th>
            <th>What happens on the supply</th>
            <th>Input VAT recovery</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Standard-rated</strong></td>
            <td>5%</td>
            <td>VAT charged to the customer at 5% and reported as output VAT</td>
            <td>Generally recoverable, subject to UAE VAT rules</td>
        </tr>
        <tr>
            <td><strong>Zero-rated</strong></td>
            <td>0%</td>
            <td>Still a taxable supply, but VAT applied at 0% where conditions are met</td>
            <td>Generally recoverable, subject to applicable rules</td>
        </tr>
        <tr>
            <td><strong>Exempt</strong></td>
            <td>Exempt</td>
            <td>No VAT charged. Not a taxable supply.</td>
            <td>Input VAT directly attributable is blocked and not recoverable</td>
        </tr>
        <tr>
            <td><strong>Out of scope</strong></td>
            <td>N/A</td>
            <td>Outside the UAE VAT system entirely</td>
            <td>Recovery depends on connection to taxable business activity</td>
        </tr>
    </tbody>
</table>

<p>Zero-rating applies only where specific legal conditions are satisfied. Treating a supply as zero-rated without the right paperwork is treated by the FTA as under-declared VAT at 5% plus late-payment penalties.</p>

<h2>Input VAT Recovery: Where Most Overclaims Happen</h2>
<p>Recovering input VAT is not automatic just because VAT appeared on an invoice.</p>
<p>To recover input VAT, all statutory conditions must be met:</p>
<ul>
    <li>The business must be a registered taxable person;</li>
    <li>The goods or services must have been acquired for taxable business purposes;</li>
    <li>A valid tax invoice meeting all FTA requirements must be held;</li>
    <li>The invoice must have been paid or intended to be paid within six months;</li>
    <li>The recovery must be claimed within the prescribed timeframe.</li>
</ul>

<h3>Blocked Input VAT Categories Under Executive Regulations</h3>
<p>Input VAT is specifically blocked under UAE VAT rules on:</p>
<ul>
    <li>Entertainment expenses provided to non-employees (clients, suppliers, guests);</li>
    <li>Motor vehicles purchased, rented or leased that are available for personal use;</li>
    <li>Employee-related expenses that are personal in nature and not a contractual or legal obligation.</li>
</ul>
<div class="nufca-box-warning"><strong>Common Mistake:</strong> Claiming input VAT on blocked categories is one of the first adjustments the FTA makes during a tax audit.</div>

<h2>Tax Invoices: The Details That Invalidate a Claim</h2>
<p>A document labelled "Invoice" or "Proforma Invoice" is not a tax invoice under UAE VAT law.</p>
<p>A full tax invoice must contain:</p>
<ul>
    <li>The words "Tax Invoice" clearly displayed;</li>
    <li>Name, address and TRN of the supplier;</li>
    <li>Name, address and TRN of the recipient (where registered);</li>
    <li>Sequential tax invoice number and date of issue;</li>
    <li>Date of supply (if different from issue date);</li>
    <li>Description of goods or services;</li>
    <li>Unit price, quantity, rate of VAT and amount payable in AED;</li>
    <li>Gross total and total VAT charged in AED.</li>
</ul>
<p>Where an invoice is issued in foreign currency, the VAT amount must be converted to AED using the official Central Bank of the UAE exchange rate for that date.</p>

<h2>Voluntary Disclosures (Form 211 / VAT211)</h2>
<p>Where an error in a previously submitted VAT return results in an underpayment or overpayment of tax greater than AED 10,000, the law requires the business to submit a Voluntary Disclosure (Form 211) within 20 business days of discovering the error.</p>
<p>Errors resulting in an impact of AED 10,000 or less may generally be corrected in the next VAT return, provided the discovery happens before an FTA audit is notified.</p>
<p>Submitting a Voluntary Disclosure before the FTA initiates an audit significantly reduces the applicable percentage-based penalties compared to errors uncovered during an FTA audit.</p>

<h2>Frequently Asked Questions</h2>

<h3>What are VAT consultancy services in the UAE?</h3>
<p>They cover the practical management of UAE VAT: registration, classifying transactions correctly, preparing and filing returns, recovering input VAT, correcting past errors through voluntary disclosure, running health checks and handling FTA tax audits.</p>

<h3>What is the mandatory VAT registration threshold in the UAE?</h3>
<p>For UAE-resident businesses, registration is generally mandatory once taxable supplies and imports exceed AED 375,000 across the previous 12 months, or where they are expected to exceed AED 375,000 in the next 30 days.</p>

<h3>What is the voluntary registration threshold?</h3>
<p>A UAE-resident business may generally apply voluntarily once qualifying taxable supplies, imports or taxable expenses exceed AED 187,500, subject to FTA requirements.</p>

<h3>What is the UAE VAT rate?</h3>
<p>The standard rate is 5%. Certain qualifying supplies are zero-rated at 0%, and specified supplies are exempt from VAT.</p>

<h3>What is the difference between zero-rated and exempt?</h3>
<p>Zero-rated supplies are still taxable supplies charged at 0%, and input VAT relating to qualifying zero-rated activity may generally be recovered. Exempt supplies are not taxable supplies, and input VAT directly attributable to them is generally not recoverable.</p>

<h3>When are VAT returns due?</h3>
<p>Returns and the associated payment are generally due within 28 days of the end of the relevant tax period, according to the tax periods assigned to the business.</p>

<!-- Related Services Section -->
<div class="related-services-sec" style="background: #f8fafc; padding: 30px 24px; border-radius: 10px; margin: 40px auto; max-width: 960px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(11,37,69,0.03);">
    <h3 style="color: #0b2545; margin-bottom: 20px; font-size: 22px; font-weight: 800; text-align: center;">Related Services in UAE</h3>
    <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 15px;">
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/corporate-tax-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Corporate Tax Advisory</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/audit-assurance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Audit &amp; Assurance</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/fta-vat-audit-assistance-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">FTA VAT Audit Assistance</a></li>
        <li style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.04); text-align: center;"><a href="https://nufca.com/excise-tax-services-in-uae/" style="color: #134074; text-decoration: none; font-weight: 700; font-size: 15px; display: block;">Excise Tax Services</a></li>
    </ul>
</div>

<!-- Closing CTA Section -->
<div style="background: linear-gradient(135deg, #0b2545 0%, #134074 100%); color: #ffffff; padding: 45px 24px; text-align: center; border-radius: 10px; margin-top: 40px; box-shadow: 0 10px 25px rgba(11,37,69,0.12);">
    <h2 style="color: #ffffff !important; font-size: 24px; font-weight: 800; margin-top: 0; margin-bottom: 12px; border-bottom: none;">Speak to a VAT Consultant in UAE</h2>
    <p style="font-size: 16px; color: #e2e8f0; max-width: 650px; margin: 0 auto 22px;">VAT errors are cheapest on the day they are found. Every period they survive adds to the correction. Protect your cash flow and compliance with certified tax accountants.</p>
    <div style="text-align: center; margin: 0 auto;"><a href="https://wa.me/97142500679" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">💬 WhatsApp Us</a><a href="tel:043258361" style="display: inline-block; background-color: #ffffff; color: #0b2545 !important; padding: 12px 24px; border-radius: 6px; font-weight: 800; text-decoration: none; margin: 6px; font-size: 14.5px; box-shadow: 0 4px 10px rgba(255,255,255,0.2);">📞 Call 04 325 8361</a><a href="mailto:info@nufca.com" style="display: inline-block; background-color: rgba(255,255,255,0.15); color: #ffffff !important; border: 1px solid rgba(255,255,255,0.3); padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none; margin: 6px; font-size: 14.5px;">✉️ Email Us</a></div>
</div>

<div class="nufca-box-disclaimer">
    <small>This page provides general information on UAE VAT and is not advice for any specific business or transaction. Thresholds, conditions, deadlines and penalties are set out in Federal Decree-Law No. 8 of 2017 on Value Added Tax, the Tax Procedures legislation and the related Cabinet and Ministerial Decisions, all of which may be amended. Please obtain advice on your own circumstances.</small>
</div>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "name": "NUFCA - VAT Consultancy Services UAE",
      "description": "VAT Registration, Returns, Health Checks, Voluntary Disclosures and FTA Audit Support in the UAE.",
      "url": "https://nufca.com/vat-consultancy-in-uae/",
      "telephone": "+97143258361",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "510, 5th Floor, Al Khaleej Centre, Bur Dubai, Dubai, UAE"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are VAT consultancy services in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They cover the practical management of UAE VAT: registration, classifying transactions correctly, preparing and filing returns, recovering input VAT, correcting past errors through voluntary disclosure, running health checks and handling FTA tax audits."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory VAT registration threshold in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For UAE-resident businesses, registration is generally mandatory once taxable supplies and imports exceed AED 375,000 across the previous 12 months, or where they are expected to exceed AED 375,000 in the next 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "What is the voluntary registration threshold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A UAE-resident business may generally apply voluntarily once qualifying taxable supplies, imports or taxable expenses exceed AED 187,500, subject to FTA requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What is the UAE VAT rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The standard rate is 5%. Certain qualifying supplies are zero-rated at 0%, and specified supplies are exempt from VAT."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between zero-rated and exempt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zero-rated supplies are still taxable supplies charged at 0%, and input VAT relating to qualifying zero-rated activity may generally be recovered. Exempt supplies are not taxable supplies, and input VAT directly attributable to them is generally not recoverable."
          }
        },
        {
          "@type": "Question",
          "name": "When are VAT returns due?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Returns and the associated payment are generally due within 28 days of the end of the relevant tax period, according to the tax periods assigned to the business."
          }
        }
      ]
    },
    {
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
          "name": "VAT Consultancy Services",
          "item": "https://nufca.com/vat-consultancy-in-uae/"
        }
      ]
    }
  ]
}
</script>
`;
}

async function deploySingleVATPage() {
    console.log("🚀 Deploying improved Hero, Consultation Card, Related Services & CTA ONLY to Page ID 99146...");
    const content = buildHTML();
    const url = 'https://nufca.com/wp-json/wp/v2/pages/' + targetPageId;
    
    const payload = JSON.stringify({
        content: content
    });
    
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
            console.log('✅ Deployment Status Code:', res.statusCode);
            if (res.statusCode === 200) {
                console.log('🎉 VAT Consultancy UAE (Page ID 99146) successfully updated!');
            } else {
                console.log('Response:', data);
            }
        });
    });
    
    req.on('error', (e) => console.error('Error:', e));
    req.write(payload);
    req.end();
}

deploySingleVATPage();
