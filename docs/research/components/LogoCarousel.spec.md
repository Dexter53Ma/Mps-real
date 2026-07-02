# LogoCarousel Specification

## Overview
- **Target file:** `src/components/LogoCarousel.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (section 8)
- **Interaction model:** Auto-scrolling carousel

## DOM Structure
```
section.logo-carousel
  div.swiper-container
    div.swiper-wrapper
      div.swiper-slide (per logo)
        img (company logo)
```

## Computed Styles

### Section Container
- background: white
- padding: 40px 0
- overflow: hidden

### Logo Images
- height: 40px
- width: auto
- object-fit: contain
- filter: grayscale(100%)
- opacity: 0.6
- transition: all 0.3s

## States & Behaviors

### Auto-scrolling
- **Trigger:** time-based (auto-play)
- **Speed:** continuous slow scroll
- **Direction:** left to right
- **Implementation:** Swiper autoplay

### Logo Hover
- **Trigger:** hover
- **State A:** grayscale(100%), opacity 0.6
- **State B:** grayscale(0%), opacity 1
- **Transition:** all 0.3s

## Per-State Content

### Logos (14 total)
1. Mesh AI
2. Hain Celestial
3. Stace
4. Orange
5. Oliver Bernard
6. VertoFX
7. Zedonk
8. Sasol
9. Transparity
10. Michelmores
11. Harmony
12. Collibra
13. Juvenescence
14. Insight Software

## Assets
- Logo images: 14 in `/images/logos/`

## Text Content (verbatim)
N/A (logos only)

## Responsive Behavior
- **Desktop (1440px):** All logos visible in scroll
- **Tablet (768px):** Logos scale down
- **Mobile (390px):** Smaller logos, faster scroll relative to viewport
- **Breakpoint:** N/A (continuous scroll)
