# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Time-driven (auto-slider), scroll-driven (parallax)

## DOM Structure
```
section.hero.hero-slider
  svg (blob shape 1 - fill #FFF4E6)
  svg (blob shape 2 - fill #F5D6AB)
  div.parallax (overflow hidden, height 918px)
    div.hero-slider__imgs (parallax transform)
      div.hero-slider__imgs__item (3 items, absolute positioned)
        div.hero-slider__imgs__item__img
          img (workspace photo)
  div.hero__content (absolute, z-index 10)
    h2.h1 (Large "This is Storey")
    p ("Workspaces made simple")
  div.hero__bottom (absolute bottom)
    div.hero__location-cards (swiper)
      a.hero__location-card (for each location)
```

## Computed Styles

### Hero Container
- background: #1A171A (rgb(26, 23, 26))
- height: 918px
- width: 100%
- max-width: 1440px
- border-radius: 0px 0px 10px 10px
- overflow: hidden
- position: relative
- z-index: 6

### SVG Blob Shapes
- Position: absolute
- Width: 100%
- Height: 100%
- Shape 1: fill #FFF4E6
- Shape 2: fill #F5D6AB

### Hero Images Container (Parallax)
- position: relative
- width: 1440px
- height: 1009.8px (slightly taller for parallax)
- overflow: hidden
- transform: matrix(1, 0, 0, 1, 0, -1.1374) (parallax offset)

### Hero Image
- position: absolute
- width: 100%
- height: 100%
- object-fit: fill

### Main Heading ("This is Storey")
- font-size: 80px
- font-weight: 500
- font-family: GT-Walsheim-Medium
- line-height: 77.6px
- color: white (#FFF)
- width: 473px
- height: 86px

### Subtitle ("Workspaces made simple")
- font-size: 18px
- font-weight: 400
- color: white
- line-height: 20.88px

### Location Cards (Bottom)
- Display: flex
- Gap: 20px
- Position: absolute bottom
- Z-index: 10

## States & Behaviors

### Auto-rotating slider
- **Trigger:** time-based (auto-play)
- **Mechanism:** 3 image sets cycling
- **Transition:** opacity fade or slide

### Parallax effect
- **Trigger:** scroll position
- **Mechanism:** transform: translate3d(0, -speed*scrollY, 0)
- **Speed:** 1.5x (data-u-speed="1.5")
- **Implementation:** Lenis/Raf-based parallax

### Location card hover
- **Element:** .hero__location-card
- **Trigger:** hover
- **State A:** opacity 0.7
- **State B:** opacity 1
- **Transition:** opacity 0.3s

## Per-State Content

### Slide 1
- Image: `/images/hero/20250507_BroadgateTower_Level10_00056-1.jpg`
- Location: "1 Triton Square"
- Label: "Our latest Storey"

### Slide 2
- Image: `/images/hero/20240506_Storey_201-Bishopsgate_-68-copy-1-scaled-1.jpg`

### Slide 3
- Image: `/images/hero/20240506_Storey_201-Bishopsgate_-53-copy-1-scaled-1.jpg`

## Assets
- Background images: 3 hero images in `/images/hero/`
- SVG blobs: inline SVG

## Text Content (verbatim)
- "This is Storey"
- "Workspaces made simple"
- "Find the workspace that can work for your business needs"
- "1 Triton Square"
- "Our latest Storey"

## Responsive Behavior
- **Desktop (1440px):** Full layout, 80px heading
- **Tablet (768px):** Heading ~48px, reduced padding
- **Mobile (390px):** Heading ~32px, stacked layout, location cards scroll horizontally
- **Breakpoint:** ~768px
