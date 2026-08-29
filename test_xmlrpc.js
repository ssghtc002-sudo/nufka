const WP_URL = "https://nufca.com";

async function testXmlRpc() {
    try {
        const res = await fetch(`${WP_URL}/xmlrpc.php`, {
            method: 'POST',
            body: `<?xml version="1.0"?><methodCall><methodName>system.listMethods</methodName><params></params></methodCall>`,
            headers: { 'Content-Type': 'text/xml' }
        });
        console.log("XMLRPC Status:", res.status);
        const text = await res.text();
        console.log("XMLRPC Response snippet:", text.substring(0, 300));
    } catch(e) {
        console.log("XMLRPC Error:", e.message);
    }
}

testXmlRpc();
