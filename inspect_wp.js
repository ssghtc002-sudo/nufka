async function testServer() {
    try {
        const res = await fetch("https://nufca.com/wp-json/");
        console.log("Status:", res.status);
        console.log("Headers:");
        for (const [key, value] of res.headers.entries()) {
            console.log(`  ${key}: ${value}`);
        }
        if (res.ok) {
            const data = await res.json();
            console.log("Site Name:", data.name);
            console.log("Site Description:", data.description);
            console.log("Namespaces:", data.namespaces);
            console.log("Authentication routes:", data.authentication);
        }
    } catch (e) {
        console.error(e);
    }
}
testServer();
