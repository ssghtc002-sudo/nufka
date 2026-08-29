async function testSingle() {
    const res = await fetch("https://nufca.com/service/vat-consultancy-services", { method: "GET", redirect: "manual" });
    console.log("Status:", res.status, "Location:", res.headers.get("location"));
}
testSingle();
