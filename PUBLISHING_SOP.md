# Standard Operating Procedure (SOP): Programmatic Service Page Publishing on NUFCA.com

Whenever a Google Doc link is provided to publish a service on `nufca.com`, execute the complete end-to-end automated workflow:

---

## 📋 The 8-Step Publishing Workflow

### 1. Extract & Analyze Document Content
- Fetch raw text/structure from the Google Doc export endpoint (`/export?format=txt`).
- Extract Service Title, Subtitle, Scope/Key Pillars, Risk Matrix/Tables, Case Studies/Findings, Benefits, Timing Triggers, and FAQs.

### 2. Programmatic 5-Location Page Generation
Generate 5 location-targeted pages in WordPress (Parent + 4 Child pages):
1. **Parent (All UAE / Main):** `https://nufca.com/<service-slug>-uae/`
2. **Dubai:** `https://nufca.com/<service-slug>-uae/dubai/`
3. **Gold Souk (Deira, Dubai):** `https://nufca.com/<service-slug>-uae/gold-souk-dubai/`
4. **Abu Dhabi:** `https://nufca.com/<service-slug>-uae/abu-dhabi/`
5. **Sharjah:** `https://nufca.com/<service-slug>-uae/sharjah/`

### 3. Embed Standard High-Converting UI Components
Each page must include:
* **📍 Location Filter Bar:** Interactive dropdown allowing users to jump between UAE, Dubai, Gold Souk, Abu Dhabi, and Sharjah.
* **🦸 Hero Section:** Service headline, subheadline, trust badges, and exact branch address + direct contact info.
* **💬 Direct Consultation Advisory Card:** WhatsApp (`+971 55 520 4830` / `https://wa.me/971555204830`), Click-to-Call (`04 325 8361`), and Branch Email buttons (NO broken HTML forms).
* **📊 Formatted Data Tables & Cards:** Styled scope cards, risk rating tables, case studies/finding elements.
* **❓ FAQ Accordions / Cards:** Full structured Q&A from the document.
* **🔗 Related Services Section:** Grid of 7 related services with branch-aware localized URL routing.
* **📞 Closing CTA Section:** Prominent WhatsApp & Call buttons.
* **🌐 JSON-LD Schema:** `AccountingService`, `FAQPage`, and `BreadcrumbList`.

### 4. Hide Theme Duplicate Title Banner
- Update post meta `ct_page_options[custom_pagetitle] = 'hide'` and `ct_page_options[ptitle_display] = 'hidden'` for all 5 page IDs via WP Admin POST to eliminate theme banner clutter.

### 5. Trash Old Legacy Pages & Configure 301 Redirects
- Identify and trash any older/duplicate pages under `/services/<slug>`.
- Set up 301 Redirects in Redirection plugin API for exact URLs and variations:
  - `/services/<slug>` ➡️ `/<service-slug>-uae/`
  - `/services/<slug>/` ➡️ `/<service-slug>-uae/`
  - `/service/<slug>` ➡️ `/<service-slug>-uae/`
  - `/<slug>` ➡️ `/<service-slug>-uae/`

### 6. Update Elementor Mega Menu (Post ID 5137)
- Find corresponding menu item in Elementor Builder for Post ID 5137 and update URL to point to `https://nufca.com/<service-slug>-uae/`.

### 7. Sync Related Services Cross-Linking Across All Hubs
- Re-run the Related Services updater across all service hubs so that all existing pages now include the new service in their cross-linking grid.

### 8. Purge WP Rocket Cache & Run Live Verification
- Purge WP Rocket cache via `purge_cache=all`.
- Verify HTTP 200 responses, schema presence, and 301 redirection headers on live site.
