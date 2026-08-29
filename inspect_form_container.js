const fs = require('fs');

const username = "umendra";
const appPassword = "pLA0 6DGb Vynf 10Gb CwrH UsG1";
const cleanAppPass = appPassword.replace(/\s+/g, '');
const credentials = Buffer.from(`${username}:${cleanAppPass}`).toString('base64');
const headers = { "Authorization": `Basic ${credentials}` };

async function checkExactFormContainer(id) {
    const res = await fetch(`https://nufca.com/wp-json/wp/v2/pages/${id}`, { headers });
    const p = await res.json();
    const c = p.content.rendered;
    
    // Find the enclosing div of <form
    const formStart = c.indexOf('<form');
    const formEnd = c.indexOf('</form>') + 7;
    
    const beforeForm = c.substring(0, formStart);
    const lastDivBefore = beforeForm.lastIndexOf('<div style="background: #ffffff; border: 2px solid #134074;');
    
    const afterForm = c.substring(formEnd);
    const firstDivAfter = afterForm.indexOf('</div>') + 6;
    
    console.log('ID', id, 'Container start found:', lastDivBefore !== -1);
    if (lastDivBefore !== -1) {
        const fullBlock = c.substring(lastDivBefore, formEnd + firstDivAfter);
        console.log('Full Block Length:', fullBlock.length);
        console.log('Snippet of Full Block Start:\n', fullBlock.substring(0, 150));
        console.log('Snippet of Full Block End:\n', fullBlock.substring(fullBlock.length - 150));
    }
}

checkExactFormContainer(99001);
checkExactFormContainer(99146);
checkExactFormContainer(99159);
