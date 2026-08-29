const fs = require('fs');

const docIds = [
    "1uQFSHSxhL0KzKY3dlPWIXQ4jbblLDOAJ-zyklxO-GQo",
    "19Xfsi99adZBZvyO2DuZemT3QrjIpU7zqlYktO5HdzSs",
    "18IBuQPmKtmI8BhFxGaIxZVMsC6yweDKZo-4nvYgJUqw",
    "18bwY9U4FDhi8emYudRx2fUcBBu2eUrbgn6QeVrzkJAM",
    "1TbNNdo9GHyFhV7ogzFpTyUz5v-suQypSFknFk9VozCg",
    "1ceNRD7HA2AxsAErHtV38VO5zVOC-RG4566HWp3tfx4A",
    "1snruMhsBXHrJCU3YI5vNFC87UkArglOC6knCdW6n3EM",
    "1-GCe1OnCZmZD64x4_3a7tmqvcmnsjK__",
    "16ggOLLbOpymoM7juOuclYrHEPs3g0tct_XW30ZXdUrQ",
    "1MKMPsdPnWSWtLDp2mlXhGO0aKmWiU91la2xp_XZINAM",
    "1RM5ftu3u8hbjNckkHK0GU-v57Nx8aOPd1I7xN7u_TLA",
    "1J0KJDDv0I2EpABVmQ-Syy3hNT7ZBzEIdJMeFwiAP-s8",
    "1c9Qwu4R5JvL5U1SHjltjq_sRC4xHPvXMP2Q05rKXVSc",
    "1RoO9uXxdqn14ZAjcxeF13yVG2VWCvH2stmTgSPUxG4s",
    "1yocjRFlYOJWLTI1whLnixQo8xGkcAAClmUd8-M0jxB",
    "10FfC80Vz0cHcVB8wPij1qLa9ttALgny-fc6jJuTaksg",
    "1XDYDK5CfiHJH8L7CGM0ipQNbnbtFSXDB0R9jYRo8z5g",
    "13QAqySOuBFQn8lQyBLzU7ETZzjmM_unaRUUgVXRgScI",
    "1rHMsrx6MDge8ZmTXk_JthfUi5cebcqW3m9QM-hWlMto",
    "1avC9hbbxpeHJEhvE_XBCcuZyKh9ooP6Y-92XEzfi7xI",
    "1rqyrlwk5_NGZ98RoCe6rORCiNnYZNz17avcFPJDtkAQ",
    "1LoU4x7XSbUUhscZ1sGaFgJKdiU2qcGs9mqm3voshyjE",
    "1WFfj6kwfx-bKklyu9UPTiyXwqhmadQlZa-cGb1UOyD4",
    "1XPX9e2tQvKi_POUOIgpKsaIazbupq1_CjGdEqwyNsvQ",
    "1YxCjebEb4t5n25YTBwKKAhP8HYQLLirTgmz6HpYFy2s",
    "126I2LmA7mSntK0b-j4VxbPTVMpC79QC7ePiWg64scYM",
    "11dT7sBEMhXIvNzUxy-bGTnp-WFSkm_4DgA9wDFOXOrI"
];

const logPath = 'C:\\Users\\ssght\\.gemini\\antigravity\\brain\\17ee58be-e51c-4eb0-b8f5-4280b2c6eca4\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf-8').split('\n');

const results = {};

for (const id of docIds) {
    for (const l of lines) {
        if (l.includes(id)) {
            try {
                const parsed = JSON.parse(l);
                const str = JSON.stringify(parsed);
                // check if contains topic/keyword
                if (!results[id]) results[id] = [];
                if (str.includes('Excise') || str.includes('excise')) results[id].push('Excise Tax');
                if (str.includes('ESR') || str.includes('Economic Substance')) results[id].push('ESR');
                if (str.includes('UBO') || str.includes('Beneficial Owner')) results[id].push('UBO');
                if (str.includes('Health Check') || str.includes('health-check')) results[id].push('VAT Health Check');
                if (str.includes('Corporate Tax') || str.includes('corporate-tax')) results[id].push('Corporate Tax');
                if (str.includes('VAT Consultancy') || str.includes('vat-consultancy')) results[id].push('VAT Consultancy');
                if (str.includes('Audit & Assurance') || str.includes('audit-assurance')) results[id].push('Audit Assurance');
                if (str.includes('Internal Audit') || str.includes('internal-audit')) results[id].push('Internal Audit');
                if (str.includes('RERA') || str.includes('rera-audit')) results[id].push('RERA Audit');
                if (str.includes('Mollak') || str.includes('mollak-audit')) results[id].push('Mollak');
                if (str.includes('FTA VAT') || str.includes('fta-vat-audit')) results[id].push('FTA VAT Audit');
                if (str.includes('Oscar') || str.includes('Tinting') || str.includes('Car Wrapping')) results[id].push('Oscar Luxury / Tinting');
            } catch (e) {}
        }
    }
}

for (const [id, topics] of Object.entries(results)) {
    console.log(`https://docs.google.com/document/d/${id} -> ${Array.from(new Set(topics)).join(', ')}`);
}
