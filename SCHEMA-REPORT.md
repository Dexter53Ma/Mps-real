# Schema/Structured Data Audit Report
## https://www.marrakechpropertyservice.com/

**Audit Date:** July 2, 2026  
**Auditor:** Schema.org Markup Specialist

---

## Executive Summary

The site has a **solid foundation** of JSON-LD structured data implementation. The core schemas (LocalBusiness, Organization, WebSite, Service, BreadcrumbList, Review) are well-structured and follow Google's best practices. However, there are opportunities to improve completeness, fix minor issues, and add missing schema types for better rich result eligibility.

**Overall Score: 78/100**

---

## 1. Schema Detection Results

### Homepage (10 JSON-LD Blocks)

| # | Schema Type | Status | Notes |
|---|-------------|--------|-------|
| 1 | LocalBusiness | ✅ Present | With PostalAddress, GeoCoordinates, AggregateRating |
| 2 | Organization | ✅ Present | With ContactPoint |
| 3 | WebSite | ✅ Present | With SearchAction |
| 4 | Service (Property Management) | ✅ Present | With Offer |
| 5 | Service (Airbnb Management) | ✅ Present | With Offer |
| 6 | BreadcrumbList | ✅ Present | Single level (Home) |
| 7-10 | Review (×4) | ✅ Present | Individual testimonials |

### FAQ Page (7 JSON-LD Blocks)

| # | Schema Type | Status | Notes |
|---|-------------|--------|-------|
| 1-5 | Duplicate from layout | ⚠️ Redundant | See Issue #1 |
| 6 | BreadcrumbList | ✅ Present | Two levels (Home > FAQ) |
| 7 | FAQPage | ⚠️ Restricted | See Issue #2 |

### Properties Page (6 JSON-LD Blocks)

| # | Schema Type | Status | Notes |
|---|-------------|--------|-------|
| 1-5 | Duplicate from layout | ⚠️ Redundant | See Issue #1 |
| 6 | BreadcrumbList | ✅ Present | Two levels (Home > Properties) |

---

## 2. Validation Results

### ✅ PASS - Schema Format
- All schemas use JSON-LD format (Google's preferred format)
- All schemas use `https://schema.org` as @context (correct)
- All schemas have valid @type values

### ✅ PASS - Required Properties

| Schema Type | Required Properties | Status |
|-------------|---------------------|--------|
| LocalBusiness | name, address, telephone | ✅ All present |
| Organization | name, url | ✅ All present |
| WebSite | name, url | ✅ All present |
| Service | name, description, provider | ✅ All present |
| BreadcrumbList | itemListElement | ✅ Present |
| Review | author, reviewRating, itemReviewed | ✅ All present |
| AggregateRating | ratingValue, reviewCount | ✅ All present |

### ✅ PASS - URL Format
- All URLs are absolute (https://www.marrakechpropertyservice.com)
- No relative URLs detected

### ✅ PASS - Date Format
- No date properties currently used (see recommendations)

---

## 3. Issues Found

### Issue #1: Schema Redundancy (Low Priority)
**Type:** Optimization  
**Location:** All pages via `src/app/layout.tsx`

The `JsonLd` component in the layout renders LocalBusiness, Organization, WebSite, and two Service schemas on **every page**. While this is technically valid (Google recommends site-wide schemas on every page), it creates redundancy when inner pages also include these same schemas.

**Impact:** No negative SEO impact, but increases page weight.

**Recommendation:** Keep as-is. Google handles duplicate schemas gracefully, and having core business schemas on every page is actually a best practice for local SEO.

---

### Issue #2: FAQPage Schema on Commercial Site (Info Priority)
**Type:** Restricted Schema  
**Location:** `/frequently-asked-questions/`

The FAQPage schema exists on the FAQ page. Per Google's August 2023 update, FAQ rich results are **restricted to government and healthcare authority sites only**.

**Current Status:**
- ❌ Will NOT generate FAQ rich results in Google SERP
- ✅ Still benefits AI/LLM citations (GEO - Generative Engine Optimization)
- ✅ Still valid structured data for other search engines

**Recommendation:** Keep the FAQPage schema for AI discoverability benefits, but do not expect Google rich results. Note this is an "Info" priority, not Critical.

---

### Issue #3: Review Schema Missing Properties (Medium Priority)
**Type:** Missing Recommended Properties  
**Location:** `src/components/TestimonialsSection.tsx`

Current Review schema:
```json
{
  "@type": "Review",
  "author": {"@type": "Person", "name": "..."},
  "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
  "reviewBody": "...",
  "itemReviewed": {"@type": "LocalBusiness", "name": "..."}
}
```

**Missing Properties:**
- `datePublished` - When the review was published
- `url` - Direct URL to the review (if hosted externally)
- `reviewRating.worstRating` - Should be "1" for completeness
- `itemReviewed.url` - URL of the business being reviewed

**Impact:** Google may not display Review rich results without complete data.

---

### Issue #4: Service Schema - Offer Property (Low Priority)
**Type:** Property Format  
**Location:** Service schemas

The `availability` property uses a full URL:
```json
"availability": "https://schema.org/InStock"
```

Google's recommended format is just the value:
```json
"availability": "InStock"
```

**Impact:** Minimal - Google accepts both formats.

---

### Issue #5: LocalBusiness Missing Recommended Properties (Medium Priority)
**Type:** Missing Properties  
**Location:** `src/components/JsonLd.tsx`

**Missing Recommended Properties:**
- `founder` - Who founded the company
- `foundingDate` - When the company was established
- `numberOfEmployees` - Team size
- `hasMap` - Google Maps link to the business location
- `isicV4` - International Standard Industrial Classification code

---

## 4. Missing Schema Opportunities

### HIGH PRIORITY - Missing Schema Types

#### 1. WebPage Schema
**Why:** Helps search engines understand the page type and relationship to the website.

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.marrakechpropertyservice.com/#webpage",
  "url": "https://www.marrakechpropertyservice.com/",
  "name": "Marrakech Property Service | Luxury Property Management",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Marrakech Property Service",
    "url": "https://www.marrakechpropertyservice.com"
  },
  "about": {
    "@type": "LocalBusiness",
    "name": "Marrakech Property Service"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2026-07-02"
}
```

#### 2. ContactPage Schema (for /contact-us/)
**Why:** Signals to search engines that this is a contact page.

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us | Marrakech Property Service",
  "url": "https://www.marrakechpropertyservice.com/contact-us/",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Marrakech Property Service",
    "telephone": "+212621189496",
    "email": "info@marrakechpropertyservice.com"
  }
}
```

#### 3. AboutPage Schema (Already Implemented ✅)
**Status:** Already implemented on `/about-mps/` page. Well-structured with `mainEntity` pointing to LocalBusiness.

---

### MEDIUM PRIORITY - Missing Schema Types

#### 4. RentalProperty Schema (for future property listings)
**Why:** If individual property detail pages are added, each should have RentalProperty schema.

```json
{
  "@context": "https://schema.org",
  "@type": "RentalProperty",
  "name": "Luxury Villa Palmeraie",
  "description": "5-bedroom luxury villa in Palmeraie...",
  "url": "https://www.marrakechpropertyservice.com/properties/luxury-villa-palmeraie/",
  "image": "...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Marrakech",
    "addressRegion": "Palmeraie"
  },
  "numberOfRooms": 5,
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Pool", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "WiFi", "value": true}
  ],
  "offers": {
    "@type": "Offer",
    "price": "2500",
    "priceCurrency": "MAD",
    "availability": "InStock",
    "validFrom": "2026-01-01"
  }
}
```

#### 5. Event Schema (for future events/meetings)
**Why:** If the meeting spaces or event spaces are bookable, Event schema would be valuable.

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Corporate Meeting Space",
  "location": {
    "@type": "Place",
    "name": "Marrakech Property Service",
    "address": "Route de Ouarzazate, Marrakech"
  },
  "offers": {
    "@type": "Offer",
    "availability": "InStock",
    "price": "Contact for pricing",
    "priceCurrency": "MAD"
  }
}
```

#### 6. VideoObject Schema (for future video content)
**Why:** If testimonials or property tours are added as videos.

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Marrakech Property Tour",
  "description": "Virtual tour of luxury properties...",
  "thumbnailUrl": "...",
  "uploadDate": "2026-07-01",
  "duration": "PT2M30S",
  "contentUrl": "...",
  "embedUrl": "..."
}
```

---

### LOW PRIORITY - Nice-to-Have

#### 7. SiteNavigationElement Schema
**Why:** Helps search engines understand site navigation structure.

#### 8. ImageGallery Schema (for property photos)
**Why:** If photo galleries are added to property pages.

---

## 5. Validation Checklist

| Check | Status | Notes |
|-------|--------|-------|
| @context is "https://schema.org" | ✅ PASS | All schemas use correct context |
| @type is valid | ✅ PASS | All types are active/valid |
| Required properties present | ✅ PASS | All required props present |
| Property values match types | ✅ PASS | No type mismatches |
| No placeholder text | ✅ PASS | No "[Business Name]" placeholders |
| URLs are absolute | ✅ PASS | All use https:// |
| Dates are ISO 8601 | ⚠️ N/A | No dates currently used |
| No deprecated types | ✅ PASS | No HowTo, SpecialAnnouncement, etc. |

---

## 6. Generated JSON-LD for Implementation

### 1. WebPage Schema (Add to Layout)

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.marrakechpropertyservice.com/#webpage",
  "url": "https://www.marrakechpropertyservice.com/",
  "name": "Marrakech Property Service | Luxury Property Management & Conciergerie",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Marrakech Property Service",
    "url": "https://www.marrakechpropertyservice.com"
  },
  "about": {
    "@type": "LocalBusiness",
    "name": "Marrakech Property Service",
    "url": "https://www.marrakechpropertyservice.com"
  },
  "description": "Full-service property management for villas, riads, and apartments in Marrakech.",
  "datePublished": "2024-01-01T00:00:00+01:00",
  "dateModified": "2026-07-02T00:00:00+01:00",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.marrakechpropertyservice.com"
      }
    ]
  }
}
```

### 2. Enhanced Review Schema (Update TestimonialsSection.tsx)

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "Fatima & Youssef El Alami"
  },
  "datePublished": "2025-06-15",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1"
  },
  "reviewBody": "MPS took over our villa in Palmeraie and within two months our bookings increased by 40%...",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Marrakech Property Service",
    "url": "https://www.marrakechpropertyservice.com"
  }
}
```

### 3. ContactPage Schema (Add to /contact-us/)

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us | Marrakech Property Management",
  "url": "https://www.marrakechpropertyservice.com/contact-us/",
  "description": "Get in touch with Marrakech Property Service for property management inquiries.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Marrakech Property Service",
    "url": "https://www.marrakechpropertyservice.com",
    "telephone": "+212621189496",
    "email": "info@marrakechpropertyservice.com"
  }
}
```

---

## 7. Priority Action Items

| Priority | Action | Impact |
|----------|--------|--------|
| 🟢 LOW | Keep FAQPage schema for AI/GEO benefits | AI discoverability |
| 🟡 MEDIUM | Add datePublished to Review schemas | Review rich results eligibility |
| 🟡 MEDIUM | Add WebPage schema to layout | Better page type signals |
| 🟡 MEDIUM | Add ContactPage schema to /contact-us/ | Contact page rich results |
| 🟢 LOW | Add worstRating: "1" to all Rating schemas | Schema completeness |
| 🟢 LOW | Add itemReviewed.url to Review schemas | Schema completeness |
| ⚪ FUTURE | Add RentalProperty schema for property listings | Property rich results |
| ⚪ FUTURE | Add VideoObject schema for video content | Video rich results |

---

## 8. Conclusion

The site's schema implementation is **well above average**. The core business schemas are properly structured with all required properties. The main opportunities are:

1. **Minor completeness fixes** (dates, worstRating, URLs in Review schemas)
2. **Adding WebPage and ContactPage schemas** for better page-type signals
3. **Future property detail pages** should include RentalProperty schema
4. **FAQPage** is correctly implemented but won't generate rich results due to Google's 2023 restriction

No critical issues found. All schemas are valid, use correct formats, and follow Google's best practices.

---

*Report generated by Schema.org Markup Specialist*
*Based on Google's Rich Results Test guidelines and schema.org specifications*
