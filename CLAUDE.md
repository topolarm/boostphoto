# boost.photo — Burst2GIF

## Projekt
- **Produkt**: Burst2GIF — Lightroom Classic plugin pro konverzi burst fotek → GIF/MP4
- **Web**: https://boost.photo (Vercel, repo topolarm/boostphoto)
- **Doména**: boost.photo (registrována přes Gigaserver)
- **Platby**: LemonSqueezy (Merchant of Record)
  - Free: https://boostphoto.lemonsqueezy.com/checkout/buy/9cd642ca-5f6e-42f8-b22b-eff44f377977
  - Standard $39: https://boostphoto.lemonsqueezy.com/checkout/buy/6ba26fba-8555-4797-9b9b-5a03f475b4a5
- **Email**: boostphotox@gmail.com
- **Analytics**: Google Analytics G-7MJZKV3844
- **Search Console**: Ověřeno přes DNS, sitemap submitnut

## Tech Stack
- **Framework**: Astro 6 (static output)
- **Styling**: Tailwind CSS v4 (@tailwindcss/vite)
- **Typography**: @tailwindcss/typography pro blog prose
- **Sitemap**: @astrojs/sitemap (automatický)
- **Fonty**: Inter (self-hosted woff2, /public/fonts/)
- **Hosting**: Vercel (framework: Astro, build: npm run build, output: dist)
- **Git**: github.com/topolarm/boostphoto, branch main

## Struktura
```
src/
  layouts/BaseLayout.astro     — head, meta, cookie banner, GA, JSON-LD Organization
  components/
    Nav.astro                  — hlavní navigace (desktop + mobile)
    NavSimple.astro            — jednoduchá nav (privacy, terms, blog detail)
    Footer.astro               — footer s linky
    BlogCard.astro             — karta článku pro archiv
    BlogCTA.astro              — CTA v článcích (variant: full | inline)
    TableOfContents.astro      — auto-generovaný TOC z headings
  pages/
    index.astro                — homepage (všechny sekce)
    about.astro                — o autorovi
    privacy.astro              — privacy policy (dark theme, noindex)
    terms.astro                — terms of service (dark theme, noindex)
    hvco-guide.astro           — lead magnet opt-in stránka
    blog/index.astro           — blog archiv (2 sloupce)
    blog/[...slug].astro       — blog detail (TOC, prose, CTA, related)
  content/blog/                — 10 Markdown článků
  content.config.ts            — content collection schema (glob loader)
  styles/global.css            — Tailwind imports, custom CSS (.glow-*, .gradient-text, .card-hover)
  utils/reading-time.ts        — počet slov → minuty čtení
public/
  assets/images/               — demo-poster.webp, marek-topolar.webp, blog thumbnails (SVG)
  assets/videos/               — demo.mp4, step videos, use case videos
  assets/videos/blog/          — komprimované materiály pro blog
  fonts/                       — inter-latin.woff2, inter-latin-ext.woff2
  robots.txt                   — AI search boty povoleny, training boty bloknuty
  llms.txt                     — AI-readable popis webu
  favicon.svg, favicon.png
```

## SEO
- JSON-LD na homepage: SoftwareApplication, FAQPage, HowTo
- JSON-LD na blog: Article (s dateModified, wordCount, mainEntityOfPage)
- JSON-LD site-wide: Organization (v BaseLayout)
- Canonical URLs na všech stránkách
- OG + Twitter Card meta tagy
- Sitemap: /sitemap-index.xml (automatický)
- robots.txt: AI search boty (ChatGPT, Claude, Perplexity) povoleny, training boty bloknuty
- llms.txt: souhrn pro AI crawlery

## Pricing
- FREE: $0, 10 exportů, 1500px max, email za download (lead magnet)
- STANDARD: $39 lifetime (launch price, regular $59), unlimited, 6K
- Platforma: macOS only (Windows planned)
- Bez licence klíče — free verze omezena počtem exportů v kódu

## Performance
- PageSpeed: 99 mobile / 99 desktop
- Fonty: self-hosted Inter (ne Google Fonts CDN!)
- Obrázky: WebP, mobilní varianty, lazy loading
- Videa: lazy-loaded přes IntersectionObserver, preload="none"
- Demo poster: 22KB mobile / 133KB desktop

## Blog
- 10 SEO článků (22,900+ slov celkem)
- Každý má: TOC nahoře, inline CTA uprostřed, full CTA na konci, related posts
- Blog thumbnaily: SVG s názvem článku a gradientem
- Články v angličtině, tón: fotograf radí kolegovi

## Příkazy
```bash
npm run dev        # Dev server
npm run build      # Production build
npm run preview    # Preview built site
```

## Důležité
- NIKDY nepoužívej Google Fonts CDN — fonty jsou self-hosted
- NIKDY nedávej preload="metadata" na videa která se nepřehrávají automaticky
- Obrázky vždy WebP + mobilní varianta pro LCP
- "Lightroom" NESMÍ být v názvu produktu (trademark), jen v copy
- Komunikace s uživatelem v češtině
