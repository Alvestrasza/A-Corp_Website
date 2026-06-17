<!--
File Name     : README.md
Version       : v0.1.1
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Project overview and deployment notes for the public cinematic A-Corp website.
-->

# A-Corp Website

Public website for Alvestrasza Corporation.

## Pages

- `/` – Cinematic start page with corporate hero design
- `/contact` – Company and mail operations contact page
- `/it-service` – Initial IT Service / Solutions focus page

## Corporate Design

```json
{
  "colors": {
    "deepspace": "#071018",
    "void": "#04090e",
    "panel_blue": "#0b1721",
    "text_white": "#f1f4f5",
    "silver": "#c5cdd0",
    "crimson": "#d4483e"
  },
  "fonts": {
    "headline": "Cinzel (OFL replacement for Trajanor-style headings)",
    "body": "Inter (OFL)"
  }
}
```

## Font Decision

- Inter is used for body text.
- Cinzel is used as a free, open-source Roman inscription style headline font.
- Trajanor was not included because its commercial/licensing status should be verified before use.
- No font files are shipped in this package. Fonts are loaded through `next/font/google` during build.

## Installation

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Suggested Linux Deployment Path

```text
/opt/sites/acorp-website/app
```

## Design Notes

The homepage design has been updated to a cinematic dark-space visual language inspired by the supplied mockup: fixed top navigation, serif wordmark, central emblem, planet/citadel style hero composition, crimson accents and four-pillar section.

A transparent emblem variant is generated from the supplied logo for header and hero placement:

```text
public/assets/alvestrasza-emblem-transparent.png
```

The original logo remains available at:

```text
public/assets/alvestrasza-logo.png
```

## Notes

The contact page is suitable for publication under both:

```text
https://alvestrasza.com/contact
https://mail.alvestrasza.com/contact
```

The mail hostname can continue to serve Exchange services; only `/contact` needs to be routed to this website if required by the reverse proxy or load balancer.
