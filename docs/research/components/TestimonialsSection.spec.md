# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (section 7)
- **Interaction model:** Swiper carousel (click/swipe-driven)

## DOM Structure
```
div.bg-col--wood-light.text-col--copper-primary
  section.testimonials
    div.testimonials__inner
      h2 ("What our customers say")
      div.swiper-container
        div.swiper-wrapper
          div.swiper-slide (per testimonial)
            div.quote-block
              div.quote-block__text
                p (testimonial text)
              div.quote-block__author
                p (company name)
        div.swiper-pagination
        div.swiper-button-prev
        div.swiper-button-next
```

## Computed Styles

### Section Container
- background: #FBEFDD (rgb(251, 239, 221))
- color: #4F0003 (copper)
- padding: 80px 30px

### Heading
- font-size: 60px
- font-weight: 500
- font-family: GT-Walsheim-Medium
- line-height: 60px
- color: #4F0003

### Quote Block
- background: white
- border-radius: 9px
- padding: 40px
- box-shadow: 0 2px 10px rgba(0,0,0,0.05)

### Quote Text
- font-size: 18px
- line-height: 24px
- color: #4F0003
- font-style: italic

### Author Name
- font-size: 16px
- font-weight: 500
- color: #4F0003
- margin-top: 20px

### Swiper Navigation
- Color: #4F0003
- Size: 20px

## States & Behaviors

### Swiper Carousel
- **Trigger:** click navigation or swipe
- **Transition:** slide 0.5s ease
- **Auto-play:** likely every 5 seconds
- **Loop:** true

### Quote Hover
- **Trigger:** hover
- **State A:** default
- **State B:** box-shadow intensifies
- **Transition:** box-shadow 0.3s

## Per-State Content

### Testimonials (from extraction)
1. "Storey quickly accommodated us in a space that is bright, airy, and inspiring. With excellent transport connections, we've settled into our new home, which offers first-class amenities, flexible meeting rooms, and fantastic breakout areas."
2. (Additional testimonials from carousel)

## Assets
- Testimonial images: `/images/testimonials/`

## Text Content (verbatim)
- "What our customers say"
- Testimonial texts as listed above

## Responsive Behavior
- **Desktop (1440px):** 2-3 slides visible
- **Tablet (768px):** 1-2 slides visible
- **Mobile (390px):** 1 slide visible, full-width
- **Breakpoint:** ~768px
