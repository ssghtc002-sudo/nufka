const html=require('fs').readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/nav_menus_95.html', 'utf8'); 
const ids=[...html.matchAll(/name="menu-item-db-id\[(\d+)\]"/g)].map(m=>m[1]); 
console.log("IDs in nav_menus_95.html:", ids);
const data=require('./extracted_menu_95_backup.json'); 
if (ids.length > 0) {
    const firstId = ids[0];
    console.log(`Example parent id for ${firstId}:`, data[`menu-item-parent-id[${firstId}]`]);
}
