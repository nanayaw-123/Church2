# Our Church Website

A fast, responsive, multi-page static site for a local church.

## Structure
- `index.html`, `about.html`, `ministries.html`, `events.html`, `sermons.html`, `give.html`, `contact.html`
- `assets/css/styles.css`, `assets/js/main.js`, images in `assets/img/`
- SEO: `sitemap.xml`, `robots.txt`

## Customize
- Replace logo and favicon in `assets/img/`
- Update service times, address, phone, and email across pages
- Set real social links and giving provider in `give.html`
- Update `sitemap.xml` and `robots.txt` with your domain

## Contact Form
### Vercel (default in this repo)
Form uses Formspree. In `contact.html`, replace `https://formspree.io/f/your-form-id` with your endpoint from Formspree. Add your site domain to Formspree’s allowed origins.

### Netlify (optional alternative)
If deploying to Netlify instead, switch the form back to Netlify Forms (see earlier edit in git history) or add the Netlify attributes to the `<form>` and remove the Formspree `action`.

## Deploy

### Netlify
- Use the included `netlify.toml`
- Publish directory: `.` (project root)
- Drag-and-drop folder to Netlify or connect your Git repo

### Vercel
- Use the included `vercel.json`
- `vercel` detects static files and deploys instantly

### Any static host
- Upload the whole folder and set `index.html` as the default document

## Development
- Open `index.html` in a browser, or use a simple local server
- Example: `npx serve .` or VS Code “Live Server” extension

## License
MIT


