# Marketing Plan — Burst2GIF (boost.photo)

## Co může AI agent (Claude Code) udělat za tebe

### PLNĚ AUTOMATIZOVATELNÉ (zadáš → hotovo)

| Aktivita | Jak | Rizika |
|---|---|---|
| **Google Search Console** | Přes API — submit sitemap, request indexing pro všech 16 URL | Žádná. Potřebuješ jen přidat web v GSC a dát mi service account. |
| **HVCO PDF obsah** | Napíšu celý lead magnet guide | Žádná |
| **Email sekvence** | Napíšu 4-email onboarding drip (free→paid) | Žádná (content prep) |
| **Influencer seznam** | Přes YouTube Data API najdu 50+ fotografů (5K-50K subs), vytáhnu emaily z About sekcí | Potřebuješ YouTube API key |
| **Outreach emaily** | Napíšu personalizované cold emaily pro každého influencera | Content prep — odeslání viz níže |
| **Product Hunt materiály** | Tagline, popis, maker comment, screenshot captions | Content prep |
| **Directory submissions texty** | AlternativeTo, SourceForge, SaaSHub, Photographer's Toolbox — prepared listings | Content prep |
| **Social media posty** | 20+ postů pro X, LinkedIn s textem, hashtagy | Content prep |
| **Blog komentáře** | Napíšu relevantní komentáře k photography blogům | Content prep |

### SEMI-AUTOMATIZOVATELNÉ (připravím, ty klikneš)

| Aktivita | Co udělám | Co uděláš ty |
|---|---|---|
| **Cold email influencerům** | Najdu emaily, napíšu personalizované zprávy, připravím vše | Pošleš z hello@boost.photo (nebo nastavíš SMTP a pošlu já) |
| **Product Hunt launch** | Připravím vše (texty, screenshoty, timing) | Submitneš přes svůj PH účet (manuální) |
| **Directory submissions** | Vyplním formuláře přes Playwright | Potvrdíš captchy / email verifikaci |
| **Hacker News Show HN** | Napíšu post | Postneš z tvého HN účtu |
| **Quora odpovědi** | Napíšu odpovědi na relevantní otázky | Postneš z tvého účtu |

### VYŽADUJE ČLOVĚKA (připravím content, ty postneš)

| Aktivita | Proč nemůžu | Co připravím |
|---|---|---|
| **Reddit** | ⚠️ VYSOKÉ RIZIKO — viz detail níže | Texty postů/odpovědí |
| **Instagram/Facebook** | Žádné API pro posting, Playwright detekován | Texty + doporučení kdy postovat |
| **X/Twitter** | API $100/měs, Playwright rizikový | Hotové tweety ke copy-paste |
| **Facebook skupiny** | Skupiny detekují automatizaci, ban riziko | Texty příspěvků |
| **YouTube video** | Musíš natočit a nahrát ty | Script/osnovu pro demo video |

---

## REDDIT — DETAILNÍ ANALÝZA

### Proč NEAUTOMATIZOVAT Reddit

Reddit má striktní anti-spam politiku:
- **10:1 pravidlo** (neoficiální ale dodržované): na každý self-promo post bys měl mít 10 normálních příspěvků/komentářů
- **Shadowban**: účet vypadá normálně tobě, ale nikdo jiný tvoje posty nevidí
- **Subreddit ban**: moderátoři r/Lightroom, r/photography aktivně mazou promo
- Nový účet + promo post = okamžitý ban

### Bezpečná Reddit strategie

1. **Používej svůj osobní účet** (ne nový "brandový")
2. **Prvních 2-4 týdny**: jen komentuj, pomáhej, odpovídej na otázky
3. **Pak**: sdílej výsledky (GIF z burst fotek) bez zmínky o pluginu
4. **Až se někdo zeptá "jak jsi to udělal?"**: přirozeně zmiň Burst2GIF
5. **Nikdy**: "Check out my plugin!" posty

### Co pro tebe připravím
- 10 přirozených komentářů/odpovědí na existující vlákna v r/Lightroom, r/photography
- 3 "show and tell" posty (ukázka výsledku, ne prodej)
- Seznam vláken kde se ptají na burst→GIF workflow

---

## INFLUENCER OUTREACH — POSTUP

### Automatizovatelné kroky

1. **YouTube API search**: `photography lightroom plugin tutorial` → seznam kanálů 5K-50K subs
2. **Scrape About page**: většina kanálů má business email v About sekci
3. **Personalizace**: přečtu poslední 3 videa, zmíním je v emailu

### Realistická očekávání
- Pošleš 50 emailů → 10-15 odpovědí → 3-5 reálně natočí review
- Conversion rate cold email influencerům: 5-10% (se free licencí)
- Timeline: 2-4 týdny od odeslání do publikace videa

### Co potřebuji od tebe
- YouTube Data API key (zdarma přes Google Cloud Console)
- SMTP přístup k hello@boost.photo (nebo jiný email)
- LemonSqueezy licence kódy pro free Standard licence

---

## DIRECTORY SUBMISSIONS — SEZNAM

| Platforma | Typ | Cena | Dopad | Automatizovatelné? |
|---|---|---|---|---|
| **AlternativeTo** | Software directory | Zdarma | Vysoký (SEO backlink) | Semi — formulář přes Playwright |
| **SourceForge** | Software directory | Zdarma | Střední | Semi |
| **Product Hunt** | Launch platform | Zdarma | Vysoký (jednorázově) | Semi — člověk submitne |
| **SaaSHub** | SaaS directory | Zdarma | Střední | Semi |
| **Photographer's Toolbox** | LR plugin directory | Zdarma | Vysoký (cílová audience) | Semi |
| **Lightroom Queen** | LR plugin list | Zdarma | Vysoký | Email — požádat o zařazení |
| **Shotkit** | Photography blog | Zdarma/placený | Vysoký | Email — požádat o zmínku |
| **PetaPixel** | Photography news | Zdarma | Velmi vysoký | Email — press release |

---

## PRIORITNÍ POŘADÍ (co dělat teď)

### Týden 1
1. ✅ Web hotový (DONE)
2. LemonSqueezy setup (ty)
3. Google Search Console — submit sitemap (já, potřebuji access)
4. Napíšu HVCO PDF guide (já)
5. Napíšu email sekvenci (já)

### Týden 2
6. YouTube influencer research + outreach emaily (já + ty odešleš)
7. Directory submissions (já připravím, ty potvrdíš)
8. Product Hunt prep (já)

### Týden 3
9. Reddit strategie — začneš komentovat (ty s mými texty)
10. Product Hunt launch (ty)
11. Social media posty (ty s mými texty)

### Ongoing
- Blog SEO články rankují za 2-6 měsíců
- Influencer videa přijdou za 2-4 týdny po outreach
- Reddit autorita roste postupně

---

## CO UDĚLAT HNED

Řekni mi co z tohohle chceš spustit jako první a já začnu:
1. **HVCO PDF** — napíšu celý obsah "5 Ways to Add Motion"
2. **Email sekvence** — 4 emaily pro onboarding free→paid
3. **Influencer research** — seznam 50 YouTube fotografů s emaily
4. **Outreach emaily** — personalizované cold emaily
5. **Directory listing texty** — pro všechny platformy
6. **Social media content** — 20+ postů
7. **Reddit content** — komentáře a posty
