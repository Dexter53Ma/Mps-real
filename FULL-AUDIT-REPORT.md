# Full Website SEO Audit Report
## Marrakech Property Service
**URL:** https://www.marrakechpropertyservice.com  
**Date:** July 2, 2026  
**Business Type:** Hybrid (Brick-and-Mortar + Service Area) — Property Management  
**Industry:** Real Estate / Short-Term Rental Management  
**Platform:** Next.js 16 App Router (Static SSG) on Vercel

---

## Executive Summary

### SEO Health Score: 64/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 68/100 | 22% | 14.96 |
| Content Quality | 47/100 | 23% | 10.81 |
| On-Page SEO (SXO) | 62/100 | 20% | 12.40 |
| Schema / Structured Data | 78/100 | 10% | 7.80 |
| Performance (CWV) | 70/100 | 10% | 7.00 |
| AI Search Readiness | 74/100 | 10% | 7.40 |
| Images | 80/100 | 5% | 4.00 |
| **TOTAL** | | | **64.37 ≈ 64** |

**Additional Score (not weighted):**
- Local SEO: 72/100

---

### Top 5 Critical Issues

1. **Trailing Slash Mismatch (CRITICAL)** — Sitemap and canonicals use trailing slashes, but Next.js strips them via 308 redirects. Every URL in the sitemap triggers a redirect before loading. Fix: add `trailingSlash: true` to `next.config.ts`.

2. **Thin Content on 4 Pages (CRITICAL)** — `/properties/` (206 words), `/locations/` (106 words), `/our-latest-storey/` (49 words), `/contact-us/` (76 words) are all below minimum thresholds. Google may consider these low-quality.

3. **Zero Author Attribution (HIGH)** — No author bylines, team bios, or credentials on any page. Critical E-E-A-T gap for a financial-service-adjacent business (property investment management).

4. **Duplicate Brand Name in Title Tags (HIGH)** — 6 of 8 pages show "Page Name | Marrakech Property Service | Marrakech Property Service" (brand repeated twice).

5. **Services Page URL Mismatch (HIGH)** — `/meeting-and-events/` serves property management services content, not meeting/event content. Confuses users and crawlers.

### Top 5 Quick Wins

1. **Fix title tag duplication** — Remove repeated brand name from all titles (effort: 15 min)
2. **Add meta descriptions to 6 pages** — Only homepage has one (effort: 30 min)
3. **Fix About page duplicate H1** — Change "Sustainability at MPS" to H2 (effort: 5 min)
4. **Add visible NAP to footer** — Address is only in schema, not visible HTML (effort: 15 min)
5. **Add FAQPage schema** — FAQ content exists but no structured data (effort: 1 hour)

---

## Technical SEO (68/100)

### Issues Found

| Issue | Severity | Details |
|-------|----------|---------|
| Trailing slash mismatch | CRITICAL | Sitemap/canonicals have trailing slashes; Next.js issues 308 redirects to strip them |
| HSTS header missing from response | CRITICAL | Configured in next.config.ts but not served by Vercel |
| Inconsistent trailing slashes in internal links | HIGH | Both `/properties` and `/properties/` linked throughout site |
| Orphan pages | HIGH | `/locations/`, `/meeting-space/`, `/event-space/` not linked from homepage/nav |
| No meta robots tags | HIGH | No explicit `index, follow` declarations |
| CSP uses unsafe-inline/eval | HIGH | Weakens XSS protection |
| Sitemap lastmod identical for all 16 URLs | MEDIUM | Suggests build-time stamp, not actual content dates |
| 404 page uses homepage title | MEDIUM | Misleading for users and crawlers |
| No IndexNow protocol | LOW | Missing instant indexing notifications |

### Passes
- robots.txt valid with AI crawler access
- XML sitemap valid (16 URLs)
- HTTP→HTTPS redirect working
- www→non-www redirect working
- Mobile viewport tag present
- Google site verification present
- All content SSG-rendered (no client-side rendering dependency)

---

## Content Quality (47/100)

### E-E-A-T Assessment

| Factor | Score | Weight |
|--------|-------|--------|
| Experience | 8/25 | 20% |
| Expertise | 10/25 | 25% |
| Authoritativeness | 12/25 | 25% |
| Trustworthiness | 8/25 | 30% |

**Who/How/Why Test:**
- **Who created it?** WEAK — No author bylines, no team bios, no credentials
- **How was it created?** WEAK — No methodology disclosure, no case study process
- **Why does it exist?** MODERATE — Clear commercial intent but buried under generic copy

### Thin Content Pages

| Page | Word Count | Threshold | Status |
|------|-----------|-----------|--------|
| Homepage | 589 | 500+ | PASS |
| /properties/ | 206 | 300+ | FAIL |
| /about-mps/ | 571 | 500+ | PASS |
| /contact-us/ | 76 | Form page | ACCEPTABLE |
| /meeting-and-events/ | 443 | 800+ | FAIL |
| /frequently-asked-questions/ | 1,059 | 500+ | PASS |
| /locations/ | 106 | 500+ | FAIL |
| /our-latest-storey/ | 49 | 300+ | FAIL |

### Cross-Cutting Issues
- **Duplicate content:** Same testimonial block on all 8 pages
- **Author attribution:** Zero across entire site
- **Content freshness:** No publication dates, no "last updated" timestamps
- **External brand leakage:** Blog/service pages link to S3 URLs referencing "Storey Club" (different brand)

---

## On-Page SEO / SXO (62/100)

### SERP Landscape
- Dominant page type for "marrakech property management": Service/Landing Page (2,000-3,000 words)
- Competitors use income calculators, pricing tiers, and ROI data
- AI Overviews cite Azure Concierge, Nouni, HouseBooking

### Page-Type Mismatch
- Homepage is Hybrid (multi-purpose) when SERP expects focused Service/Landing Page
- This dilutes conversion focus vs. competitors

### Missing Conversion Tools
- No income calculator (competitors like HouseBooking show "$75/night = $1,700/month")
- No ROI estimator
- No pricing transparency

### Persona Scores

| Persona | Score |
|---------|-------|
| Remote Property Owner | 60/100 |
| Airbnb Revenue Seeker | 52/100 |
| Overwhelmed Riad Owner | 56/100 |
| Luxury Villa Investor | 48/100 |
| ROI-Focused Analyzer | 39/100 |
| New-to-Marrakech Buyer | 43/100 |

---

## Schema / Structured Data (78/100)

### Current Implementation (10 JSON-LD blocks on homepage)
- LocalBusiness (with address, geo, aggregateRating, sameAs)
- Organization (with ContactPoint)
- WebSite (with SearchAction)
- 2× Service (Property Management, Airbnb Management)
- BreadcrumbList (on all pages)
- 4× Review (individual testimonials)
- FAQPage (on /frequently-asked-questions/)

### Issues
| Issue | Priority |
|-------|----------|
| Review schema missing `datePublished` | Medium |
| FAQPage restricted to gov/healthcare for rich results | Info |
| No RealEstateAgent or RealEstateListing schema | Medium |
| No WebPage schema in layout | Low |

---

## Performance (70/100)

### Based on Technical Assessment
- SSG architecture should deliver fast performance
- 3 console errors on `/properties/` page may affect INP
- Hero images use CSS transitions (Ken Burns effect) — adds paint overhead
- No lazy loading detected on below-fold images

### Visual Audit (8/10)
- All images load correctly
- No horizontal scroll on any viewport
- Zero console errors on homepage
- Good color contrast for readability

### Mobile Issues
- 33 of 102 clickable elements below 44px touch target minimum
- Footer links and navigation dropdowns too small for comfortable tapping
- 4 text elements below 12px font size

---

## AI Search Readiness (74/100)

### AI Crawler Access: EXCELLENT
All major AI crawlers explicitly allowed: GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, Bingbot

### llms.txt: Present and Well-Structured
- Business description, services, locations, contact info, social media
- Note: llms.txt not currently consumed by any major AI system (per Google May 2026)

### Citability: 68/100
**Strengths:**
- FAQ page with clear Q&A format (20+ questions)
- Named testimonials with specific claims
- Property cards with structured data

**Weaknesses:**
- No definitional opening on homepage (first 60 words lack "X is..." pattern)
- No author credentials
- No external data citations
- No Wikipedia/Wikidata entity
- No Reddit presence (Reddit mentions correlate with 46.7% of Perplexity citations)

### Platform Scores
| Platform | Score |
|----------|-------|
| Google AI Overviews | 78/100 |
| ChatGPT Search | 65/100 |
| Perplexity | 68/100 |
| Bing Copilot | 72/100 |

---

## Images (80/100)

### Findings
- 100% of homepage images load correctly
- 0 broken images
- 1 image with empty alt text (footer logo)
- All images have alt attributes
- Hero images use Ken Burns animation (CSS transitions)

### Issues
- 7 empty alt text instances on About page gallery
- No lazy loading on below-fold images
- No WebP/AVIF format optimization
- Comparison table uses `role="table"` divs instead of semantic `<table>`

---

## Local SEO (72/100)

### NAP Consistency: CONSISTENT
- Name: Marrakech Property Service (all sources match)
- Phone: +212621189496 (consistent)
- Address: Route de Ouarzazate, Marrakech (in schema only, NOT visible in HTML)

### Local Schema: EXCELLENT (90/100)
- Full LocalBusiness schema with address, geo, aggregateRating, sameAs
- Service schema for Property Management and Airbnb Management
- BreadcrumbList on all pages

### Issues
| Issue | Priority |
|-------|----------|
| Address not visible in HTML footer | CRITICAL |
| No Google Maps embed (static image only) | HIGH |
| No dedicated service pages (all services → single page) | HIGH |
| No dedicated location pages (query params only, no unique URLs) | HIGH |
| No Bing Places or Apple Business Connect | MEDIUM |
| No local citations (Yelp, TripAdvisor, directories) | MEDIUM |
| areaServed only at city level (not neighborhood) | MEDIUM |

---

## Priority Action Plan

### CRITICAL (Fix Immediately)

| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 1 | Fix trailing slash mismatch — add `trailingSlash: true` to next.config.ts | Low | High |
| 2 | Fix HSTS header — configure at Vercel project level | Low | High |
| 3 | Expand thin content pages (properties, locations, blog) | High | High |

### HIGH (Fix Within 1 Week)

| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 4 | Remove duplicate brand name from all title tags | Low | High |
| 5 | Add meta descriptions to 6 pages missing them | Low | High |
| 6 | Fix About page duplicate H1 | Low | Medium |
| 7 | Add author/team bios for E-E-A-T | Medium | High |
| 8 | Create dedicated service pages | High | High |
| 9 | Create dedicated location pages | High | High |
| 10 | Add visible NAP to footer | Low | Medium |
| 11 | Add orphan pages to navigation | Low | Medium |
| 12 | Fix services page URL mismatch (/meeting-and-events → /services) | Medium | Medium |

### MEDIUM (Fix Within 1 Month)

| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 13 | Add FAQPage schema to FAQ page | Low | Medium |
| 14 | Add Google Maps embed | Low | Medium |
| 15 | Fix CSP unsafe-inline/eval | High | Medium |
| 16 | Add income calculator to homepage | Medium | High |
| 17 | Add review dates to Review schemas | Low | Low |
| 18 | Fix sitemap lastmod timestamps | Medium | Low |
| 19 | Add meta robots tags | Low | Low |
| 20 | Expand areaServed in schema to neighborhoods | Low | Medium |

### LOW (Backlog)

| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 21 | Implement IndexNow | Medium | Low |
| 22 | Fix title tag duplication | Low | Low |
| 23 | Add lazy loading to below-fold images | Low | Low |
| 24 | Convert comparison table to semantic HTML | Low | Low |
| 25 | Increase mobile touch targets to 44px+ | Medium | Low |
| 26 | Build YouTube channel with property tours | High | High |
| 27 | Build Reddit presence | High | Medium |
| 28 | Create Wikipedia/Wikidata entity | High | Medium |
| 29 | Add hreflang for French/Arabic | Medium | Low |
| 30 | Build case studies with real metrics | High | High |

---

## Competitive Landscape Summary

| Factor | MPS | Top Competitors |
|--------|-----|-----------------|
| Content depth | 200-600 words | 1,500-3,000 words |
| Income calculator | None | Standard (HouseBooking, Azure, Nouni) |
| Author attribution | None | Common |
| Video content | None | Property tours common |
| Schema quality | Excellent (78/100) | Good-Average |
| AI search readiness | Good (74/100) | Average |
| Blog content | 3 posts | 10-50+ posts |

---

## What We've Already Fixed (Previous Sessions)

| Fix | Status |
|-----|--------|
| Hero section responsive height | ✅ Done |
| Mobile padding standardized | ✅ Done |
| 5× broken form links → /enquire/ | ✅ Done |
| 2× broken nav links → /about-mps/ | ✅ Done |
| Footer Login → Contact Us link | ✅ Done |
| robots.txt with AI crawler rules | ✅ Done |
| Dynamic sitemap.ts (16 pages) | ✅ Done |
| JSON-LD: LocalBusiness, Organization, WebSite | ✅ Done |
| JSON-LD: 2× Service schemas | ✅ Done |
| JSON-LD: BreadcrumbList on all pages | ✅ Done |
| JSON-LD: FAQPage on FAQ page | ✅ Done |
| JSON-LD: Review schemas for testimonials | ✅ Done |
| JSON-LD: ContactPage, AboutPage schemas | ✅ Done |
| LocalBusiness address completed | ✅ Done |
| AggregateRating bestRating/worstRating | ✅ Done |
| OG + canonical on all 16 pages | ✅ Done |
| Google site verification | ✅ Done |
| Security headers (7 headers) | ✅ Done |
| File upload validation | ✅ Done |
| llms.txt for AI search readiness | ✅ Done |

---

*Report generated using seo-audit skill methodology. All subagents ran in parallel: seo-technical, seo-content, seo-schema, seo-sxo, seo-visual, seo-geo, seo-local.*
