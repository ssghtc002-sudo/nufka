async function testOldVatRedirect() {
    console.log("🔍 Testing 301 Redirect for old VAT page...");

    const urls = [
        "https://nufca.com/services/vat-consultancy-services",
        "https://nufca.com/services/vat-consultancy-services/"
    ];

    for (const url of urls) {
        const res = await fetch(url, { method: "GET", redirect: "manual" });
        console.log(`URL: ${url} | Status: ${res.status} | Location: ${res.headers.get("location")}`);
    }
}

testOldVatRedirect();
