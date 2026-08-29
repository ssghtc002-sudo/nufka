import os
import requests
import base64
import json

# Configuration
WP_URL = os.getenv("WP_URL", "")  # e.g. "https://your-wordpress-site.com"
USERNAME = os.getenv("WP_USERNAME", "$#@SHyami9413")
APP_PASSWORD = os.getenv("WP_APP_PASSWORD", "3Ejz fiqO bu4a Fw3V OMY0 wORy")

def test_wordpress_connection(site_url, username, app_password):
    if not site_url:
        print("❌ Error: WordPress Site URL is missing.")
        print("Please set the WP_URL environment variable or pass your site URL.")
        return False
    
    # Standardize URL
    site_url = site_url.rstrip('/')
    api_endpoint = f"{site_url}/wp-json/wp/v2/users/me"
    
    # Clean application password (spaces are optional in WP REST API basic auth)
    clean_app_pass = app_password.replace(" ", "")
    
    # Prepare basic auth header
    credentials = f"{username}:{clean_app_pass}"
    token = base64.b64encode(credentials.encode("utf-8")).decode("utf-8")
    
    headers = {
        "Authorization": f"Basic {token}",
        "Content-Type": "application/json",
        "User-Agent": "WordPress-Connector/1.0"
    }
    
    print(f"Connecting to {site_url} as '{username}'...")
    try:
        response = requests.get(api_endpoint, headers=headers, timeout=10)
        if response.status_code == 200:
            user_data = response.json()
            print("✅ Connection Successful!")
            print(f"User ID: {user_data.get('id')}")
            print(f"Name: {user_data.get('name')}")
            print(f"Username: {user_data.get('slug')}")
            print(f"Roles/Capabilities: {user_data.get('roles', [])}")
            return True
        else:
            print(f"❌ Connection Failed! Status Code: {response.status_code}")
            print(f"Response: {response.text}")
            return False
    except Exception as e:
        print(f"❌ Connection Error: {str(e)}")
        return False

if __name__ == "__main__":
    import sys
    url = sys.argv[1] if len(sys.argv) > 1 else WP_URL
    if url:
        test_wordpress_connection(url, USERNAME, APP_PASSWORD)
    else:
        print("Usage: python connect_wp.py <YOUR_WORDPRESS_SITE_URL>")
