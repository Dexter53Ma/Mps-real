# Behaviors - storey.co.uk

## Global Behaviors

### Lenis Smooth Scroll
- **Status:** Active (`.lenis` class on `<html>`)
- **Effect:** Smooth, momentum-based scrolling
- **Implementation:** Lenis library (check for `window.lenis` or `lenis` instance)

### Fixed Header
- **Initial state:** `position: fixed`, transparent background, white text
- **Scroll trigger:** ~300px from top
- **Scrolled state:** Classes `isScrollingDown sticky` added
- **Visual change:** No background change observed (stays transparent)
- **Transition:** Class-based, likely CSS transition on transform/opacity

## Section Behaviors

### Hero Section
- **Type:** Time-driven + scroll-driven
- **Slider:** Auto-rotating image carousel (3 image sets)
- **Parallax:** Images move at different speed than scroll (data-u-speed="1.5")
- **SVG blobs:** Decorative organic shapes, static
- **Location cards:** Horizontal swiper at bottom, click-driven

### Intro Two Section
- **Type:** Static
- **Layout:** Two-column flex, centered
- **Image:** Right side, absolute positioned
- **No scroll animations observed**

### Location Block Section
- **Type:** Click-driven (interactive map)
- **Map markers:** Clickable, show popup cards
- **Location cards:** Click to select location
- **Featured location:** Link to view page

### Pillars Section
- **Type:** Scroll-driven + click-driven
- **Feature cards:** 4 cards with background images, likely animate on scroll
- **Table:** Expandable rows (click to show/hide details)
- **Hover states:** Cards may have hover effects

### Testimonials Section
- **Type:** Swiper carousel
- **Navigation:** Swipe/click to navigate
- **Auto-play:** Likely auto-rotating

### Logo Carousel
- **Type:** Auto-scrolling Swiper
- **Speed:** Continuous slow scroll

## Hover States to Extract
- Header nav links
- CTA buttons ("Get in touch", "Contact Us")
- Location cards
- Feature cards in pillars section
- Footer links
- Social icons

## Responsive Breakpoints
- **Desktop:** 1440px (current)
- **Tablet:** ~768px (to be tested)
- **Mobile:** ~390px (to be tested)
- **Expected changes:** Column stacking, simplified nav, adjusted typography
