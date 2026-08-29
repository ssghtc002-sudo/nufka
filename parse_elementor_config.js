const fs = require('fs');

const code = fs.readFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\script_414.js', 'utf-8');

const jsonMatch = code.match(/var ElementorConfig = ({[\s\S]*});/);
if (jsonMatch) {
    try {
        const config = JSON.parse(jsonMatch[1]);
        console.log("ElementorConfig Keys:", Object.keys(config));
        if (config.document) console.log("Document Keys:", Object.keys(config.document));
        if (config.initial_document) {
            console.log("Initial Document ID:", config.initial_document.id);
            console.log("Initial Document Elements Count:", config.initial_document.elements ? config.initial_document.elements.length : 0);
            
            // Save elements array to file
            fs.writeFileSync('c:\\Users\\ssght\\OneDrive\\Desktop\\nufka\\elementor_elements_5137.json', JSON.stringify(config.initial_document.elements, null, 2), 'utf-8');
            console.log("Saved elementor_elements_5137.json!");
        }
    } catch(e) {
        console.log("JSON Parse Error:", e.message);
    }
}
