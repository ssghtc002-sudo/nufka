const fs = require('fs');
const cookies = fs.readFileSync('c:/Users/ssght/OneDrive/Desktop/nufka/wp_cookies.txt', 'utf-8').trim();

async function clearCache() {
    console.log('Fetching WP Dashboard to find WP Rocket clear cache nonce...');
    const res = await fetch('https://nufca.com/wp-admin/', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const rocketMatch = html.match(/wp-admin\/admin-post\.php\?action=rocket_purge_cache[^"']+_wpnonce=([^"']+)/);
    if(rocketMatch) {
        console.log('Purging WP Rocket Cache... Nonce:', rocketMatch[1]);
        const purgeRes = await fetch('https://nufca.com/wp-admin/admin-post.php?action=rocket_purge_cache&_wpnonce=' + rocketMatch[1], {
            headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' },
            redirect: 'manual'
        });
        console.log('Purge Status:', purgeRes.status);
    } else {
        console.log('WP Rocket purge link not found in dashboard.');
    }

    // Try to trigger Elementor CSS regeneration via the standard Elementor tool action if we can find its nonce
    // In WP Admin Elementor Tools page:
    const toolsRes = await fetch('https://nufca.com/wp-admin/admin.php?page=elementor-tools', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const toolsHtml = await toolsRes.text();
    const clearCssMatch = toolsHtml.match(/name="elementor_clear_cache_nonce"\s+value="([^"]+)"/);
    if(clearCssMatch) {
        console.log('Elementor Regenerate CSS Nonce:', clearCssMatch[1]);
        const formData = new URLSearchParams();
        formData.append('action', 'elementor_clear_cache');
        formData.append('elementor_clear_cache_nonce', clearCssMatch[1]);
        formData.append('_wp_http_referer', '/wp-admin/admin.php?page=elementor-tools');
        
        const cssRes = await fetch('https://nufca.com/wp-admin/admin.php?page=elementor-tools', {
            method: 'POST',
            headers: { 
                'Cookie': cookies, 
                'User-Agent': 'Mozilla/5.0',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString(),
            redirect: 'manual'
        });
        console.log('Elementor CSS Regenerate Status:', cssRes.status);
    } else {
        console.log('Elementor clear cache nonce not found.');
    }
}
clearCache();
