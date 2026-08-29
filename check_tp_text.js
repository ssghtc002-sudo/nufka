async function checkTP() {
    const res = await fetch("https://nufca.com/corporate-tax-in-uae/", {
        headers: { "User-Agent": "Mozilla/5.0" }
    });
    const text = await res.text();
    console.log("Includes 'Transfer Pricing':", text.includes("Transfer Pricing"));
    console.log("Includes 'Master File':", text.includes("Master File"));
    console.log("Includes '0%, 9% and 15%':", text.includes("0%, 9% and 15%"));
    console.log("Includes 'Frequently Asked Questions':", text.includes("Frequently Asked Questions"));
}

checkTP();
