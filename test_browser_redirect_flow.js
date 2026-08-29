async function testBrowserFlow() {
    console.log("🌐 Simulating Real Browser Navigation for https://nufca.com/service/company-formation-services ...");

    let currentUrl = "https://nufca.com/service/company-formation-services";
    for (let i = 0; i < 5; i++) {
        const res = await fetch(currentUrl, {
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            redirect: "manual"
        });

        console.log(`Step ${i + 1}: ${currentUrl} ➔ Status: ${res.status}`);
        const location = res.headers.get("location");
        if (location) {
            console.log(`   --> Redirecting to: ${location}`);
            currentUrl = location.startsWith("http") ? location : "https://nufca.com" + location;
        } else {
            console.log(`   --> Final Destination Page Reached: ${currentUrl}`);
            break;
        }
    }
}

testBrowserFlow();
