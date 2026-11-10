# Guardian Edge Forensics website

Marketing site for **Guardian Edge Forensics** (GE Forensics), a brand of Guardian Edge Consulting, LLC.
Plain HTML, CSS, and a little JavaScript. No build step, no backend.

Live (temporary): https://andrewgaldys.github.io/geforensics/

## Files

| Path | What it is |
| --- | --- |
| `index.html` | All page content (single page: Services, About, Contact) |
| `assets/css/styles.css` | Styles. Brand colors are the variables at the top (`--navy` is the logo navy, `#0A192F`) |
| `assets/js/main.js` | Mobile menu, "Copy email" button, footer year |
| `assets/img/` | Logo, headshot (`michael-galdys.jpg`, backdrop matched to the logo navy), favicons, and the social-share image (`og-image.png`) |
| `michael-galdys.vcf` | "Save contact card" download |
| `404.html` | Page-not-found screen |

## Editing content

Open `index.html` and edit the text directly. Phone and email appear in several places, so search for
`485-8604` and `michael@geforensics.com` if they ever change (also update `michael-galdys.vcf`).

After changing `styles.css` or `main.js`, bump the `?v=` number where `index.html` loads them
(e.g. `styles.css?v=2` to `?v=3`). GitHub Pages lets browsers cache files for 10 minutes, and the new
number makes returning visitors fetch the updated file right away.

## Preview locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.

## Deployment

GitHub Pages publishes the `main` branch (repository root). Every push to `main` updates the live site
within a minute or two.

## Connecting the custom domain (e.g. geforensics.com)

1. **GitHub**: repository **Settings > Pages > Custom domain**, enter `geforensics.com`, and save.
   (This adds a `CNAME` file to the repo.)
2. **DNS** (at the domain registrar). Add these records:

   | Type | Host | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `andrewgaldys.github.io` |

   **Do not touch the MX or TXT records.** They route email for `michael@geforensics.com`.
   Remove any old A/AAAA records on `@` that point elsewhere (for example a registrar "parking" page).
3. Wait for DNS to propagate (minutes to a few hours), then tick **Enforce HTTPS** in Settings > Pages.
4. In `index.html`, replace every `https://andrewgaldys.github.io/geforensics/` with `https://geforensics.com/`
   (the `og:url` and `og:image` tags and the structured data) so link previews use the new domain.
5. Optional but recommended: verify the domain under your GitHub account
   (**Settings > Pages > Verified domains**) so no one else can claim it on GitHub Pages.
