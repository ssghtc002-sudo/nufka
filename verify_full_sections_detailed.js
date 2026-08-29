const fs = require('fs');

async function verifyFullDetails() {
    const res = await fetch("https://nufca.com/corporate-tax-in-uae/", {
        headers: { "User-Agent": "Mozilla/5.0" }
    });

    const html = await res.text();
    console.log("HTML Total Length:", html.length);
    console.log("1. Filter Dropdown:", html.includes('Filter Location:'));
    console.log("2. Hero Headline:", html.includes('Corporate Tax Consultants in UAE Who Handle the Filing'));
    console.log("3. 0%, 9%, 15% Rate Cards:", html.includes('15% MNE Minimum Tax'));
    console.log("4. QFZP Rules & 5-Year Penalty:", html.includes('The Five-Period Penalty Consequence'));
    console.log("5. Transfer Pricing & Master File:", html.includes('Master File and a Local File'));
    console.log("6. Lead Form:", html.includes('Get Your Corporate Tax Position Reviewed'));
    console.log("7. FAQs Section:", html.includes('What is Federal Decree-Law No. 47 of 2022?'));
    console.log("8. Closing CTA:", html.includes('Book a Consultation with Our Corporate Tax Consultants'));
}

verifyFullDetails();
