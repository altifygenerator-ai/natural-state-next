# Natural State Interior-Exterior Solutions

Launch-ready Next.js App Router site for Natural State Interior-Exterior Solutions LLC in Hot Springs, Arkansas.

## Included pages

- Home / Hot Springs landing page
- Project Gallery
- Interior Remodeling
- Bathroom Remodeling & Custom Tile
- Exterior Remodeling & Siding
- Decks & Outdoor Construction
- Lake Hamilton service-area page
- Malvern service-area page
- Hot Springs Village service-area page
- Benton service-area page
- Contact / estimate request

## Business details in the build

- Office: 501-625-3925
- Cell: 501-318-9082
- Address: 145 Nimbus St, Hot Springs, AR 71913
- Main domain: https://www.naturalstateexteriors.net
- Quote email destination: jonmunz@gmail.com
- Resend sending domain: hometownwebservices.cc

## Quote form

The estimate form posts to `/api/quote` and includes:

- Server-side validation
- Hidden honeypot spam field
- Cloudflare Turnstile verification
- Resend email delivery
- Customer-safe error messages with both phone numbers as fallback

Set these production environment variables in Vercel:

```env
RESEND_API_KEY=
QUOTE_TO_EMAIL=jonmunz@gmail.com
QUOTE_FROM_EMAIL=Natural State Website <website@hometownwebservices.cc>
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_SITE_URL=https://www.naturalstateexteriors.net
```

For Cloudflare Turnstile, create a widget for `naturalstateexteriors.net` and `www.naturalstateexteriors.net`, then add the site key and secret above.

## SEO / Search Console

The site includes:

- Unique title and description metadata for the home, service, gallery, location and contact pages
- Canonical URLs based on `https://www.naturalstateexteriors.net`
- Open Graph / social metadata
- `robots.txt`
- XML sitemap at `/sitemap.xml`
- Local `HomeAndConstructionBusiness` JSON-LD with address, both phone numbers, service areas and services
- Large image preview directives for Google
- Google Search Console verification support through `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- Web app manifest and site icons

After the production domain is attached, add the Search Console verification token to the environment variable above, redeploy, verify the property, and submit:

`https://www.naturalstateexteriors.net/sitemap.xml`

## Run locally

```bash
npm install
npm run dev
```

## Before public launch

1. Add the Resend API key.
2. Add the Cloudflare Turnstile site key and secret.
3. Add the Google Search Console verification token when available.
4. Confirm `www.naturalstateexteriors.net` is the preferred production domain in Vercel and redirect the bare domain to it.
5. Test one estimate submission and confirm delivery to `jonmunz@gmail.com`.
6. Add any additional project photos as they are supplied.
