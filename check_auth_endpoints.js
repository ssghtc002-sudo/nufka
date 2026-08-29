async function checkAuthEndpoints() {
    try {
        const res = await fetch("https://nufca.com/wp-json/");
        if (res.ok) {
            const data = await res.json();
            console.log("Authentication capabilities exposed by WP REST API:");
            console.log(JSON.stringify(data.authentication, null, 2));
        }
    } catch(e) {
        console.log("Error:", e.message);
    }
}
checkAuthEndpoints();
