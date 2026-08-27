# Natural State Interior-Exterior Solutions

Next.js App Router site for Natural State Interior-Exterior Solutions LLC in Hot Springs, Arkansas.

## Included pages

- Home / Hot Springs landing page
- Project gallery
- Interior Remodeling
- Bathroom Remodeling & Custom Tile
- Exterior Remodeling & Siding
- Decks & Outdoor Construction
- Lake Hamilton service-area page
- Malvern service-area page
- Contact / estimate request

## Brand assets

The two logo marks in `public/brand/` were cleaned from the supplied business signage so the header and footer use the marks themselves rather than a photograph of the sign.

## Estimate form

The form posts to `/api/quote` and sends with Resend when these environment values are present:

```env
RESEND_API_KEY=
QUOTE_TO_EMAIL=
QUOTE_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

Until delivery is configured, the form returns a customer-facing message directing visitors to call the business rather than exposing setup details.

## Run locally

```bash
npm install
npm run dev
```

## Production check

Before launch, confirm the final domain, destination email, Google Business Profile URL, and any business details that should be added such as a contractor license number or verified customer reviews.
