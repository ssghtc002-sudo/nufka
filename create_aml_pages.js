const https = require('https');

const authHeader = 'Basic ' + Buffer.from('umendra:pLA06DGbVynf10GbCwrHUsG1').toString('base64');

async function createPage(title, slug, parentId = 0) {
    const payload = JSON.stringify({
        title: title,
        slug: slug,
        status: 'publish',
        parent: parentId
    });

    return new Promise((resolve, reject) => {
        const req = https.request('https://nufca.com/wp-json/wp/v2/pages', {
            method: 'POST',
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if(res.statusCode === 201) {
                    resolve(JSON.parse(data).id);
                } else {
                    reject('Error creating ' + slug + ': ' + data);
                }
            });
        });
        req.on('error', reject);
        req.write(payload);
        req.end();
    });
}

async function run() {
    try {
        console.log("Creating Main UAE Page...");
        const mainId = await createPage('AML CFT Compliance Services in UAE', 'aml-cft-compliance-services-in-uae');
        console.log("Main ID:", mainId);

        console.log("Creating Dubai Page...");
        const dubaiId = await createPage('AML CFT Compliance Services Dubai', 'dubai', mainId);
        console.log("Dubai ID:", dubaiId);

        console.log("Creating Gold Souk Dubai Page...");
        const goldId = await createPage('AML CFT Compliance Services in Gold Souk Dubai', 'gold-souk-dubai', mainId);
        console.log("Gold Souk ID:", goldId);

        console.log("Creating Abu Dhabi Page...");
        const abuId = await createPage('AML CFT Compliance Services in Abu Dhabi', 'abu-dhabi', mainId);
        console.log("Abu Dhabi ID:", abuId);

        console.log("Creating Sharjah Page...");
        const sharjahId = await createPage('AML CFT Compliance Services in Sharjah', 'sharjah', mainId);
        console.log("Sharjah ID:", sharjahId);
    } catch (e) {
        console.error(e);
    }
}
run();
