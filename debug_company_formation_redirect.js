async function debugSingularRedirect() {
    console.log("🔍 Testing https://nufca.com/service/company-formation-services ...");
    
    const url1 = "https://nufca.com/service/company-formation-services";
    const res1 = await fetch(url1, { method: "GET", redirect: "manual" });
    console.log(`URL: ${url1} | Status: ${res1.status} | Location: ${res1.headers.get("location")}`);

    const url2 = "https://nufca.com/service/company-formation-services/";
    const res2 = await fetch(url2, { method: "GET", redirect: "manual" });
    console.log(`URL: ${url2} | Status: ${res2.status} | Location: ${res2.headers.get("location")}`);
}

debugSingularRedirect();
