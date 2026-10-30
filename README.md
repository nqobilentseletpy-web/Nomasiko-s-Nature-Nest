# Captivating Scents website

Responsive multi-page website built with HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — home, highlights, testimonials and newsletter call-to-action
- `about.html` — business story and facts
- `services.html` — searchable designer and pocket perfume catalogue, gift sets and recommendations
- `gallery.html` — fragrance/beauty image gallery
- `contact.html` — contact details and enquiry form
- `booking.html` — booking and consultation enquiry form
- `organisation.html` — donation/community impact information
- `account.html` — demo register/sign-in interface

## Run locally
Open `index.html` in a browser, or use a local web server (recommended):
`python -m http.server 8000`
Then visit `http://localhost:8000`.

## Connect forms to Google Sheets
1. Create a new Google Sheet.
2. Open **Extensions → Apps Script**.
3. Copy the contents of `google-apps-script/Code.gs` into the Apps Script editor and save.
4. In Apps Script choose **Deploy → New deployment → Web app**.
5. Set **Execute as: Me**. Choose an access setting that permits your website visitors to submit (commonly “Anyone”); understand that this makes the endpoint publicly callable. Do not put private data in the sheet.
6. Deploy and copy the Web app URL ending in `/exec`.
7. Open `script.js` and paste that URL into `SHEETS_ENDPOINT`.
8. Submit a test contact/booking form and verify a new row appears in the sheet.

The Apps Script sends an acknowledgement email to the supplied address after it records a form. Google may ask you to authorize access to Sheets and email. The front end also displays an immediate confirmation. Test the deployed endpoint and email delivery before launch.

## Important production notes
- The register/sign-in screen is a front-end demonstration using browser local storage. It is NOT secure authentication and must not be used for real customer passwords. For a live customer account system, integrate Firebase Authentication or another secure identity provider.
- The forms fall back to local browser storage until the Sheets URL is configured. Local storage is only on that device/browser and is not a shared database.
- The images are hosted illustrative fragrance/beauty images from Unsplash, not Google-hosted product photos or verified photographs of your actual inventory. Replace with your own product/store photos or properly licensed images. Do not imply that a stock image depicts your actual stock.
- Testimonials are sample layout copy. Replace with genuine customer feedback and permission before publishing.
- The community page describes a planned giving programme. Add real named beneficiary organisations, donation locations and proof only after partnerships and donations are confirmed.
- Confirm current stock, product authenticity, exact sizes and prices before publishing. The supplied list uses “RABANNE” as the commonly styled brand spelling; verify the product label. Burberry Goddess price was not supplied and is shown as “Price on request”.
- Add a privacy notice and obtain consent before collecting personal information. Keep the Google Sheet access restricted. The Apps Script endpoint is public if deployed for public submissions; add spam protection/rate limiting before production.
