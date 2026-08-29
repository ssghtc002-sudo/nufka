const fs = require('fs');
const html = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/nav_menus_95.html', 'utf8');
const ids = [...html.matchAll(/name="menu-item-db-id\[(\d+)\]"/g)].map(m=>m[1]);
ids.forEach(id => {
    const getVal = (name) => {
        const m = html.match(new RegExp('name="'+name+'\\['+id+'\\]"\\s+value="([^"]*)"'));
        return m ? m[1] : '';
    };
    console.log(id, getVal('menu-item-title'), getVal('menu-item-type'));
});
