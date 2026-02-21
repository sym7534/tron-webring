# Tron Webring

<p align="center">
  <img src="./public/tronorangeonblack.png" alt="Tron Webring logo" height="140" />
</p>

## Overview

A webring for University of Waterloo Mechatronics Engineering students and alumni. Webrings are a classic way to link personal sites in a ring so visitors can discover more people in the community.

This site also supports prev/next navigation via URL hash routing (see the widget template below).

## How to Join

1. Add the webring widget to your site (template below). Put it in your footer or about page.
2. Fork this repo.
3. Add your info to `data/members.json` at the bottom of `sites[]`.
4. Open a Pull Request.

### Entry format

```json
{
  "name": "Your Name",
  "website": "https://your-site.com",
  "url": "your-site.com",
  "class": "Class of 20XX",
  "status": "Active"
}
```

## Widget Template

Replace `WEBRING_BASE_URL` with the live site domain (for example, your Vercel or GitHub Pages URL).

### HTML

```html
<div style="display:flex;align-items:center;gap:10px;">
  <a href="WEBRING_BASE_URL/#your-site.com?nav=prev" aria-label="Previous site">←</a>
  <a href="WEBRING_BASE_URL/#your-site.com" target="_blank" rel="noreferrer">
    <img src="WEBRING_BASE_URL/tronorangeonblack.png" alt="Tron Webring" style="width:24px;height:auto;" />
  </a>
  <a href="WEBRING_BASE_URL/#your-site.com?nav=next" aria-label="Next site">→</a>
</div>
```

### JSX

```jsx
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <a href="WEBRING_BASE_URL/#your-site.com?nav=prev" aria-label="Previous site">←</a>
  <a href="WEBRING_BASE_URL/#your-site.com" target="_blank" rel="noreferrer">
    <img
      src="WEBRING_BASE_URL/tronorangeonblack.png"
      alt="Tron Webring"
      style={{ width: 24, height: "auto" }}
    />
  </a>
  <a href="WEBRING_BASE_URL/#your-site.com?nav=next" aria-label="Next site">→</a>
</div>
```

## Assets

Logos live in `public/` and can be used directly from the site root:

- `tronblack.png`
- `tronorange.png`
- `tronorangeonblack.png`
- `trontransparent.png`
- `waterloo.png`

## Local Development

```bash
npm install
npm run dev
```

Build and run:

```bash
npm run build
npm run start
```

## Credits

Inspired by other UWaterloo program webrings and the broader webring community.
