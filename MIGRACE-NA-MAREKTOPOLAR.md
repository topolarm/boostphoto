# boost.photo → marektopolar.com (5. 8. 2026)

Marek se rozhodl mít všechno na jedné doméně. Tenhle repozitář **zůstává naživu jen jako rozcestník**, nový vývoj patří do `29topolarcom` (marektopolar.com).

## Proč se to dělalo

Oba weby servírovaly **stejných 10 článků**, každý s vlastním canonicalem na sebe. Google si musel vybrat a vybral boost.photo. Důsledek za 90 dní (GSC):

| | boost.photo | marektopolar.com |
|---|---|---|
| Kliky | 4 | **0** |
| Zobrazení | 450 | 67 |
| Nejlepší stránka | `/blog/lightroom-video-export-guide`, 189 zobrazení, **pozice 8,1** | `/tools/preset-to-lut`, 41 zobrazení, pozice 43,5 |

Patnáct článků na marektopolar.com bylo prakticky neviditelných, protože si konkurovaly s vlastními kopiemi jinde.

## Baseline před zásahem (kontrola za 3–4 týdny)

- boost.photo, 90 dní: **4 kliky, 450 zobrazení**
- `/blog/lightroom-video-export-guide`: 189 zobrazení, **pozice 8,1**
- marektopolar.com, 90 dní: **0 kliků**, 67 zobrazení

Ověřovat v GSC přes `advanced_search_analytics`, dimenze `date` + `page`, obě property. Doména zůstává registrovaná, takže **přesměrování jde kdykoli vrátit**.

## Co se udělalo

**Přesměrování** jsou v `vercel.json`. Ve Vercelu se `redirects` vyhodnocují **před filesystemem**, takže obsah v `dist/` se nikdy neservíruje a zůstává jen jako záloha.

| Zdroj | Cíl |
|---|---|
| `/` | `marektopolar.com/` |
| `/blog/:slug` | `marektopolar.com/blog/:slug` |
| `/blog`, `/about`, `/privacy`, `/terms` | stejná cesta na marektopolar.com |
| `/hvco-guide` | `marektopolar.com/tools` |

Všech 16 URL z buildu je pokryto. Před nasazením bylo ověřeno, že 13 cílů vrací 200; zbylé tři (`privacy`, `terms`, `hvco-guide`) se řešily zvlášť.

**Sitemapa se záměrně nepřesměrovává.** Google si přes ni dojde pro staré URL a přesun zaznamená rychleji.

**Homepage míří na homepage**, ne na `/tools`. Vyžaduje to nástroj Change of address v Search Console a obsahově to sedí, `marektopolar.com/` je „Tools That Make Photography Effortless" s dvanácti odkazy na `/tools`.

## Co se nepřeneslo a proč

- **`hvco-guide`** (lead magnet „5 Ways to Add Motion to Your Photography Portfolio") je **atrapa**. Formulář nemá `action` ani submit handler, takže e-maily nikam neodesílá, a nevede na něj jediný odkaz. Přesměrován na `/tools`. Když bude potřeba skutečný lead magnet, staví se od nuly.
- `privacy` a `terms` se přenesly na marektopolar.com, protože tam žádné nebyly.

## Co zůstalo nedořešené

- **Lemon Squeezy obchod se pořád jmenuje „Boost photo"** a checkout běží na `boostphoto.lemonsqueezy.com`. Název obchodu vidí zákazník na pokladně i na účtence a jde změnit bezpečně v dashboardu. **Slug měnit nedoporučuju**, rozbil by existující checkout odkazy.
- Analytika se sjednocovat nemusí: po nasazení přesměrování se GA tag na boost.photo (`G-7MJZKV3844`) už nikdy nespustí, protože redirect proběhne dřív než načtení stránky. Měří se jen `G-RNFBL65MML` na marektopolar.com.

## Poznámka k měření

Na marektopolar.com byla GA4 od 15. 4. nasazená, ale **sama sebe blokovala** až do opravy 31. 7. (commit `94eea0f`). Data proto začínají až srpnem 2026. Cokoli o zdrojích návštěv před tímhle datem je nedohledatelné.

## Stav Change of address (5. 8. 2026)

**Nedokončeno, čeká na Marka.** Není to blokující, přesměrování dělají hlavní práci samy; tenhle nástroj přesun jen urychluje.

První pokus o validaci selhal na testu „301-redirect from homepage" s hláškou **„Couldn't fetch the page: http://boost.photo/"**. Příčina: z apexu vedl řetěz tří přesměrování a prostřední bylo **dočasné (307)**, protože Vercel měl `boost.photo → www.boost.photo` nastavené jako Temporary Redirect.

**Opraveno ve Vercelu na 301 Moved Permanently.** Řetěz je teď celý trvalý:

```
http://boost.photo/       308 → https://boost.photo/
https://boost.photo/      301 → https://www.boost.photo/
https://www.boost.photo/  308 → https://marektopolar.com/
```

Validace ale padala dál i po opravě řetězu. **Skutečná příčina byla jinde a je to nejdůležitější zjištění celé migrace.**

## robots.txt blokoval celé procházení (a rozbil by celou migraci)

Na boost.photo bylo od **15. 4. 2026** (commit `df552c5`, „block all search engine indexing") tohle:

```
# Blocking all crawlers to prevent duplicate content.
User-agent: *
Disallow: /
```

Záměr byl zabránit duplicitě. Efekt byl opačný:

- **`Disallow` neodstraní už zaindexované stránky**, jen zabrání jejich novému procházení. boost.photo proto zůstal od dubna v indexu **zamrzlý** a dál rankoval (pozice 8,1 na `/blog/lightroom-video-export-guide`).
- Google se na doménu nemohl podívat, takže **neviděl ani 301 přesměrování**. Signál by se nikdy nepřenesl a rankingy by místo přesunu prostě umřely.
- Odtud i hláška validace „Couldn't fetch the page: http://boost.photo/".

Vysvětluje to zpětně i to, proč si Google z duplicit vybral boost.photo a proč byly kopie na marektopolar.com neviditelné: měl jednu verzi zaindexovanou a zmraženou, druhou bez důvodu upřednostnit.

**Opraveno 5. 8. 2026 na `Allow: /`.** Ověřeno na apexu i na www.

**Pravidlo:** při stěhování domény se procházení staré domény **nikdy nezakazuje**. Duplicitu řeší přesměrování, ne robots.txt. Zákaz procházení je přesně to, co přenosu signálu zabrání.

Zbývá jen v Search Console (property `boost.photo` → Settings → Change of address) vybrat **marektopolar.com** a dát Validate & update. Google si robots.txt cachuje řádově hodiny, takže hned po opravě může validace ještě spadnout.
