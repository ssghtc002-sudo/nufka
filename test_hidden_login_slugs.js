const slugs = [
    "nufka",
    "nufca",
    "login",
    "wp-login",
    "my-login",
    "user-login",
    "admin-login",
    "portal",
    "dashboard",
    "signin",
    "sign-in",
    "backend",
    "secure",
    "control",
    "member",
    "members",
    "client",
    "access",
    "entrance",
    "gateway",
    "office",
    "staff",
    "management",
    "wp-admin-area"
];

async function findHiddenLogin() {
    console.log("🔍 Scanning for WPS Hide Login custom slug on nufca.com...");
    for (const slug of slugs) {
        const url = `https://nufca.com/${slug}/`;
        try {
            const res = await fetch(url, { method: 'HEAD', redirect: 'manual' });
            console.log(`Slug: /${slug}/ -> Status: ${res.status} | Location: ${res.headers.get("location") || "none"}`);
            if (res.status === 200 || (res.status === 302 && !res.headers.get("location").includes("404"))) {
                console.log(`✨ POTENTIAL HIDDEN LOGIN URL FOUND: https://nufca.com/${slug}/`);
            }
        } catch(e) {
            // ignore
        }
    }
}

findHiddenLogin();
