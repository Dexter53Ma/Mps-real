# ACTION PLAN: Marrakech Property Service SEO Improvements
**Generated:** July 2, 2026  
**Current Score:** 64/100  
**Target Score:** 80+/100

---

## Phase 1: Critical Fixes (Week 1)

### 1.1 Fix Trailing Slash Mismatch
**Priority:** CRITICAL | **Effort:** Low | **Impact:** High

The sitemap generates URLs with trailing slashes (`/properties/`), canonicals hardcode trailing slashes, but Next.js strips them via 308 redirects. Every sitemap URL triggers a redirect.

**Fix:** Add `trailingSlash: true` to `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  trailingSlash: true,
  // ... existing config
};
```

**Then:** Update `sitemap.ts` to ensure consistency.

### 1.2 Fix HSTS Header
**Priority:** CRITICAL | **Effort:** Low | **Impact:** High

The `Strict-Transport-Security` header is configured but not served by Vercel.

**Fix:** Configure HSTS at the Vercel project level (Settings → Headers) or use `vercel.json`.

### 1.3 Expand Thin Content Pages
**Priority:** CRITICAL | **Effort:** High | **Impact:** High

| Page | Current Words | Target Words | Action |
|------|--------------|--------------|--------|
| /properties/ | 206 | 500+ | Add portfolio overview, selection criteria, management approach |
| /locations/ | 106 | 600+ | Add 150+ words per neighborhood with attractions, transport, yields |
| /our-latest-storey/ | 49 | 300+ | Publish 5-10 blog posts (1,500+ words each) |
| /meeting-and-events/ | 443 | 800+ | Expand service descriptions, add process breakdown |

---

## Phase 2: High Priority (Week 2)

### 2.1 Fix Title Tag Duplication
**Priority:** HIGH | **Effort:** Low | **Impact:** High

6 pages show "Page Name | Marrakech Property Service | Marrakech Property Service"

**Fix:** Use format: `Page Name | Marrakech Property Service` (single brand mention)

Pages to fix:
- /properties/
- /contact-us/
- /meeting-and-events/
- /frequently-asked-questions/
- /locations/
- /our-latest-storey/

### 2.2 Add Missing Meta Descriptions
**Priority:** HIGH | **Effort:** Low | **Impact:** High

Only homepage has a meta description. Add to:
- /properties/ — "Browse our curated collection of luxury villas, riads, and apartments across Marrakech. Expected revenue, amenities, and locations."
- /about-mps/ — "Learn about Marrakech Property Service, Marrakech's leading luxury property management company with 50+ managed properties."
- /meeting-and-events/ — "Full-service property management for Marrakech villas, riads, and apartments. Airbnb optimization, cleaning, maintenance, and 24/7 support."
- /frequently-asked-questions/ — "Answers to common questions about MPS property management services in Marrakech. Pricing, services, and membership details."
- /locations/ — "Explore our property locations across Marrakech's most exclusive neighborhoods: Palmeraie, Medina, Hivernage, and Guéliz."
- /our-latest-storey/ — "News, insights, and property management tips from the Marrakech Property Service team."

### 2.3 Fix About Page H1 Duplication
**Priority:** HIGH | **Effort:** Low | **Impact:** Medium

Change "Sustainability at MPS" from `<h1>` to `<h2>`.

### 2.4 Add Author/Team Bios
**Priority:** HIGH | **Effort:** Medium | **Impact:** High

Create a Team page or add bios to the About page:
- Founder/CEO bio with credentials and experience
- Team member roles and expertise
- LinkedIn profile links
- Industry certifications

### 2.5 Create Dedicated Service Pages
**Priority:** HIGH | **Effort:** High | **Impact:** High

Replace single `/meeting-and-events/` with individual service pages:
- /services/property-management
- /services/airbnb-management
- /services/professional-photography
- /services/cleaning-maintenance
- /services/concierge
- /services/dynamic-pricing

Each page: 800+ words, process breakdown, pricing tiers, case studies.

### 2.6 Create Dedicated Location Pages
**Priority:** HIGH | **Effort:** High | **Impact:** High

Replace query-param filtering with unique URLs:
- /locations/palmeraie
- /locations/medina
- /locations/hivernage
- /locations/gueliz

Each page: 600+ words, area guide, rental yields, testimonials, LocalBusiness schema.

### 2.7 Add Visible NAP to Footer
**Priority:** HIGH | **Effort:** Low | **Impact:** Medium

Add physical address to footer HTML (currently only in schema).

### 2.8 Add Orphan Pages to Navigation
**Priority:** HIGH | **Effort:** Low | **Impact:** Medium

Add `/locations/`, `/meeting-space/`, `/event-space/` to header/footer navigation.

---

## Phase 3: Medium Priority (Month 1)

### 3.1 Add FAQPage Schema
**Priority:** MEDIUM | **Effort:** Low | **Impact:** Medium

Add FAQPage JSON-LD to `/frequently-asked-questions/` (content already exists).

### 3.2 Add Google Maps Embed
**Priority:** MEDIUM | **Effort:** Low | **Impact:** Medium

Replace static map image with lazy-loaded Google Maps iframe on locations page.

### 3.3 Fix CSP Policy
**Priority:** MEDIUM | **Effort:** High | **Impact:** Medium

Migrate from `unsafe-inline`/`unsafe-eval` to nonces or hashes for inline scripts.

### 3.4 Add Income Calculator
**Priority:** MEDIUM | **Effort:** Medium | **Impact:** High

Add "Estimate Your Income" calculator above the fold on homepage. Competitors use this as primary conversion tool.

### 3.5 Fix Sitemap lastmod
**Priority:** MEDIUM | **Effort:** Medium | **Impact:** Low

Track actual content modification dates per page instead of build timestamp.

### 3.6 Expand areaServed in Schema
**Priority:** MEDIUM | **Effort:** Low | **Impact:** Medium

Add neighborhood-level Place entities to LocalBusiness schema.

### 3.7 Add Meta Robots Tags
**Priority:** MEDIUM | **Effort:** Low | **Impact:** Low

Add `<meta name="robots" content="index, follow">` to all indexable pages.

### 3.8 Add Review Dates
**Priority:** MEDIUM | **Effort:** Low | **Impact:** Low

Add `datePublished` to Review schemas for freshness signals.

---

## Phase 4: Long-Term Strategy (Months 2-3)

### 4.1 Content Strategy
- Publish 2-4 blog posts per month (1,500+ words each)
- Create case studies with real metrics (occupancy rates, revenue increases)
- Add video content (property tours, team introductions)
- Build comparison guides ("Marrakech vs Essaouira for Property Investment")

### 4.2 Local SEO
- Claim Bing Places listing
- Claim Apple Business Connect
- Build local citations (Yelp, TripAdvisor, directories)
- Add Moroccan rental compliance information

### 4.3 AI Search Optimization
- Create YouTube channel (YouTube mentions correlate 0.737 with AI citations)
- Build Reddit presence in r/Marrakech, r/RealEstate, r/Airbnb
- Rewrite homepage opening with definitional pattern
- Add author/owner schema with credentials

### 4.4 Authority Building
- Create Wikipedia/Wikidata entity
- Build backlinks from real estate and travel publications
- Add industry certifications and awards
- Create original research/data ("2026 Marrakech Rental Market Report")

---

## Expected Impact

| Metric | Current | After Phase 1 | After Phase 2 | After All Phases |
|--------|---------|---------------|---------------|------------------|
| SEO Score | 64/100 | 70/100 | 76/100 | 85+/100 |
| Thin content pages | 4 | 0 | 0 | 0 |
| Missing meta descriptions | 6 | 6 | 0 | 0 |
| Author attribution | 0% | 0% | 100% | 100% |
| Dedicated service pages | 1 | 1 | 6+ | 6+ |
| Dedicated location pages | 0 | 0 | 4+ | 4+ |
| Blog posts | 3 | 3 | 3 | 20+ |

---

*Generated by seo-audit skill — prioritized by SEO Health Score impact.*
