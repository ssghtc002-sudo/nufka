const fs = require('fs');

const code = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\script_414.js', 'utf-8');

const nonces = [...code.matchAll(/"nonce":"([^"]+)"/g)];
console.log("Nonces found in script_414:", nonces.map(n => n[1]));

const editorNonces = [...code.matchAll(/editor_post_[^"]*":"([^"]+)"/g)];
console.log("Editor post nonces:", editorNonces.map(n => n[0]));

const saveNonce = code.match(/"save_builder":"([^"]+)"/) || code.match(/"save":"([^"]+)"/);
console.log("Save Nonce Match:", saveNonce ? saveNonce[0] : "none");
