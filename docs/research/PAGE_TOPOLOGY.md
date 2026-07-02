# Page Topology - storey.co.uk

## Page Layout
- **Scroll container:** `<html class="lenis">` with Lenis smooth scroll
- **Header:** Fixed position, transparent bg, white text, z-index high
- **Main content:** Flow layout, vertical sections
- **Footer:** Static, dark bg

## Sections (Top to Bottom)

### 1. Header (Fixed Overlay)
- **Position:** fixed, top: 0, full width
- **Z-index:** High (above all content)
- **Background:** Transparent initially
- **Text color:** White (#FFF)
- **Behavior:** Gets `isScrollingDown sticky` class on scroll
- **Contains:** Logo, nav links, Menu button, social icons
- **Interaction:** Click-driven (menu toggle)

### 2. Hero Section
- **Classes:** `.hero .hero-slider`
- **Background:** Dark (#1A171A)
- **Height:** ~918px (100vh-ish)
- **Layout:** Full-width, overflow hidden, relative
- **Contains:**
  - 2 SVG blob shapes (organic, decorative)
    - Shape 1: fill #FFF4E6
    - Shape 2: fill #F5D6AB
  - Parallax image slider (multiple images, stacked)
  - Text overlay: "This is Storey" (h2.h1), "Workspaces made simple"
  - Location cards slider (bottom)
- **Interaction:** Time-driven (auto-rotating slider), parallax on scroll
- **Border-radius:** 0px 0px 10px 10px

### 3. Intro Two Section
- **Classes:** `.intro-two`
- **Background:** Wood-light (#FBEFDD / rgb(251, 239, 221))
- **Text color:** Copper (#4F0003)
- **Display:** Flex, row, centered
- **Height:** ~900px
- **Layout:** Two columns - text left, image right
- **Contains:**
  - H2 heading (not visible in extraction, may be image-based)
  - 3 paragraphs of text
  - "Get in touch" CTA link
  - Image of workspace (right side)
- **Interaction:** Static

### 4. Location Block Section
- **Classes:** `.location-block`
- **Background:** Forest primary (#274038)
- **Text color:** Marble/white (#FBEFDD)
- **Height:** ~1504px
- **Contains:**
  - "Where we are" heading
  - Description paragraph
  - Interactive map with markers
  - Location cards: Liverpool Street, Hackney, Paddington, Great Portland Street
  - Featured location: "Our latest Storey in the Knowledge Quarter"
- **Interaction:** Click-driven (map markers, location cards)

### 5. Pillars Section
- **Classes:** `.pillars`
- **Background:** Copper primary (#4F0003)
- **Text color:** Wood-light (#FBEFDD)
- **Height:** ~6795px (includes table)
- **Contains:**
  - "What Storey does best" heading
  - Description paragraphs
  - 4 feature cards with background images:
    1. "Flexible and ready-to-use workspaces"
    2. "Expert relationship teams"
    3. "All-inclusive - simple fixed pricing"
    4. "World-leading extras"
  - Comparison table "Why choose Storey?"
- **Interaction:** Scroll-driven (cards animate in), click-driven (table expandable rows)

### 6. Meeting Rooms Section
- **Classes:** `.storey-club` or similar
- **Background:** Forest primary (#274038)
- **Text color:** Marble/white
- **Height:** ~1218px
- **Contains:**
  - "Meeting rooms to impress" heading
  - Description paragraphs
  - Image of meeting room
- **Interaction:** Static

### 7. Testimonials Section
- **Background:** Wood-light (#FBEFDD)
- **Text color:** Copper (#4F0003)
- **Height:** ~1900px
- **Contains:**
  - "What our customers say" heading
  - Swiper carousel of testimonials
  - Quote cards with text and company names
- **Interaction:** Click/swipe-driven (carousel)

### 8. Logo Carousel Section
- **Background:** White
- **Contains:** Swiper of company logos (14 logos)
- **Interaction:** Auto-scrolling carousel

### 9. Contact CTA Section
- **Background:** Forest primary (#274038) with Storey logo watermark
- **Text color:** White
- **Contains:** Contact information, phone, email
- **Interaction:** Static

### 10. Footer
- **Background:** Dark (#1A171A)
- **Text color:** White
- **Contains:** Quicklinks, legal links, social icons, British Land logo
- **Interaction:** Static

## Color Palette
- **Dark:** #1A171A (rgb(26, 23, 26))
- **Forest Primary:** #274038 (rgb(39, 64, 56))
- **Copper Primary:** #4F0003 (rgb(79, 0, 3))
- **Wood Light:** #FBEFDD (rgb(251, 239, 221))
- **Copper Accent:** #FB4920 (rgb(251, 73, 32))
- **Warm Sand:** #F5D6AB (rgb(245, 214, 171))
- **White:** #FFFFFF

## Fonts
- **Body:** GT-Walsheim-ProLight, "Helvetica Neue", helvetica, arial, sans-serif
- **Headings:** GT-Walsheim-Medium, "Helvetica Neue", helvetica, arial, sans-serif
- **Font sizes:** 80px (h1), various body sizes

## Global Behaviors
- Lenis smooth scroll active
- Header fixed with scroll-triggered class changes
- Parallax effects on hero images
- SVG blob shapes in hero
- Swiper carousels (testimonials, logos)
