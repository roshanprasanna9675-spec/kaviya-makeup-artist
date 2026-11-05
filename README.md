# Kavya Suresh Make-up Artistry — GitHub Pages website

## Files
- `index.html` — website content and page sections
- `style.css` — colours, layout, responsive design and animations
- `script.js` — gallery filters, countdown, mobile menu and WhatsApp booking
- `offers.js` — easy-to-edit services, offers, gallery items and countdown date

## Before publishing
1. Replace the sample gallery photos and artist portrait with Kavya's own photos.
2. Replace the sample package descriptions and `price: null` values in `offers.js` with approved offer details.
3. Set `expiresAt` in `offers.js` to the actual offer end date and time, or set it to `null` to disable the countdown.
4. Add real customer testimonials only after receiving permission.
5. Check the WhatsApp number, Instagram link and address.

## Update offers
Open `offers.js`. Each item in `offers` has:
- `name`: package title
- `tag`: short label
- `description`: package summary
- `price`: numeric price, or `null` to display “Enquire for price”
- `oldPrice`: optional previous price, or `null`
- `includes`: list of inclusions
- `featured`: set one package to `true` for the highlighted card

Save and upload the updated file to GitHub to publish the changes.

## Publish with GitHub Pages
1. Sign in to https://github.com and create a **Public** repository named `kavya-makeup-artistry`.
2. Upload `index.html`, `style.css`, `script.js`, `offers.js`, and the `assets` folder if you add local assets.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish. Your URL will look like:
   `https://YOUR-GITHUB-USERNAME.github.io/kavya-makeup-artistry/`

## Notes
- This is a static website; booking enquiries are sent to WhatsApp. No booking is confirmed and no payment is processed automatically.
- The offer countdown is a client-side display only. Confirm actual offer validity with the business.
- The site uses Google Fonts and temporary Unsplash image URLs, so an internet connection is needed for those assets.
- GitHub Pages does not provide a secure admin login or database. For now, update offers by editing `offers.js` and uploading the changed file.
