async function checkLiveHero() {
    const res = await fetch("https://nufca.com/vat-consultancy-in-uae/", {
        headers: { "User-Agent": "Mozilla/5.0" }
    });
    const html = await res.text();
    console.log("Has New Hero Badges:", html.includes("FTA-Registered Tax Agent #20048123"));
    console.log("Has Cabinet Decision Badge:", html.includes("Cabinet Decision No. 129 of 2025 Ready"));
    console.log("Has New Metrics Grid:", html.includes("Direct CA Hotline"));
    console.log("Has Filter Location Bar:", html.includes("Filter Location:"));
}

checkLiveHero();
