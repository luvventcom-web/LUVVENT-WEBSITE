# Luvvent Events

An 18-page, traditional Indian celebration website with finished editorial copy, responsive layouts, the supplied Luvvent logo and original palace concept artwork. Built with HTML, CSS and JavaScript. No dependencies or build step.

## Preview

Open `index.html` directly, or install Node.js 20+ and run:

```sh
npm start
```

Visit http://127.0.0.1:4173. Run `npm run check` to check page count, links, assets, headings, metadata and concept labels. No `npm install` is required.

## GitHub deployment

1. Create a GitHub repository and upload the **contents** of this folder, including `.github/workflows/pages.yml`.
2. Use `main` as the default branch.
3. In repository Settings → Pages → Build and deployment, select **GitHub Actions**.
4. Push to `main`, or run “Deploy GitHub Pages” from Actions. The workflow checks and deploys only HTML and public assets.

All local URLs are relative, so repository-prefixed GitHub Pages sites work. No domain, account credential or hosting subscription is embedded. This handoff has not been pushed to a user repository or published.

## Structure

```text
├── index.html                     Home
├── about.html                     About Luvvent
├── services.html                  Services & directory
├── weddings.html                  Wedding Planning
├── haldi-mehendi.html              Haldi & Mehendi
├── sangeet.html                    Sangeet & Reception
├── private-events.html             Private Celebrations
├── corporate-events.html           Corporate Events
├── photography-films.html          Photography & Films
├── entertainment.html              Entertainment
├── gallery.html                    Gallery / concept collection
├── experience-marigold.html         Marigold Morning concept
├── experience-royal.html            Royal Vow concept
├── experience-midnight.html         Midnight Mehfil concept
├── process.html                    Our Process
├── journal.html                    Wedding Journal
├── faq.html                        Planning Questions
├── contact.html                    Contact Us / two-step enquiry
├── assets/                         Logo, illustration, CSS, JavaScript
├── docs/CREATIVE-BLUEPRINT.md        Detailed page and section blueprint
├── docs/content.json                Structured source copy
├── scripts/                        Preview server and checks
└── .github/workflows/pages.yml      Deployment workflow
```

## Enquiries

Contact uses two steps, browser validation and a review screen. It prepares a WhatsApp message; it does **not** submit or send automatically. There is no backend, inbox, analytics, database, email delivery or local-storage persistence. Visitors can call the number or copy the draft. The privacy dialog describes this exact behaviour.

The poster prints **090902 19319**. Telephone links preserve it. WhatsApp uses **+91 90902 19319**, based on the Indian context; confirm the agency actually receives WhatsApp at that number before public launch. No response-time claim is made.

## Editing & art direction

- The authoritative website copy is in the HTML files. `docs/content.json` is an editable copy inventory; editing it does not rebuild HTML automatically. Update the relevant HTML and inventory together.
- Colours, spacing and typography: `assets/styles.css`.
- Menu, privacy dialog and enquiry behaviour: `assets/site.js`.
- Original supplied logo: `assets/luvvent-logo.png`. Its lettering and colour are preserved.
- `assets/palace.svg` is original concept illustration. Gallery pages show variations on this shared art-direction asset; they are not distinct photographed events.
- Detailed per-section visual prompts, headlines, bodies, CTAs, motion and desktop/mobile wireframes: `docs/CREATIVE-BLUEPRINT.md`.

## Before public launch

Confirm contact details and the booked scope of services. Replace concept gallery content with permission-cleared, accurately captioned photography when available. Add verified event stories rather than fictional case studies. Add the production domain and absolute social-sharing image metadata when known. If introducing analytics, forms or a CRM, implement delivery and update the privacy notice to describe the actual data flow.

No founding history, international commissions, celebrity clients, testimonials, awards, pricing, email address or physical office has been invented. Destination availability is explicitly subject to confirmation.

## Accessibility and resilience

Semantic headings, keyboard-accessible menu, visible focus, native accordion/dialog, labelled fields, required-field validation, reduced-motion support, local font stack and a no-JavaScript readable page structure. JavaScript is required for the two-step enquiry and mobile menu; the footer navigation and telephone links remain available without it. Browser/device review is recommended before production launch.

## Rights

Agency identity and supplied logo remain the property of their owner. No third-party stock imagery or font downloads are bundled. The custom illustration and website source are included in this handoff; no third-party software dependencies are required.

## Business profile update — 31 October 2026

The user-provided Google business profile supplied the Hyderabad location and public address now shown on Contact and in the shared footer. Google Maps and Instagram links were added. See `docs/BUSINESS-SOURCES.md`. The user confirmed luvvent.com@gmail.com, now included in the site. The user confirmed this number receives WhatsApp. Three profile photos were subsequently added with source credit; no reviews were imported.

## Gallery photographs
Three 680px-wide photographs from the user-provided Google business profile are bundled locally as WebP assets. They now appear on Home and Gallery, with selected hero placements. Public uploader credit: M Dorababu (SAI). The original three concept studies remain labelled separately. The profile copies are suitable for the draft; higher-resolution originals can replace them later.

## DATA.zip collection update
22 selected stills from the user-supplied mixed archive now appear across service heroes, a homepage teaser and a filterable gallery with an accessible enlarged-image dialog. They are labelled inspiration while individual attribution is unconfirmed. Web-sized assets are bundled; the full archive and its videos are excluded. See `docs/ARCHIVE-CURATION.md` and `docs/collection-manifest.json`.
