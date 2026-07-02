# ContactCTA Specification

## Overview
- **Target file:** `src/components/ContactCTA.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (section 9)
- **Interaction model:** Static

## DOM Structure
```
section.contact-cta
  div.contact-cta__inner
    div.contact-cta__logo
      img (Storey logo white - watermark)
    div.contact-cta__content
      h2 (heading)
      p (description)
      div.contact-cta__buttons
        a (phone)
        a (email)
        a (contact form)
```

## Computed Styles

### Section Container
- background: #274038 (forest primary)
- color: white
- padding: 80px 30px
- position: relative
- overflow: hidden

### Logo Watermark
- position: absolute
- opacity: 0.1
- width: 400px
- right: -50px
- bottom: -50px

### Content
- position: relative
- z-index: 1
- max-width: 600px

### Heading
- font-size: 48px
- font-weight: 500
- color: white

### Contact Links
- display: flex
- gap: 20px
- margin-top: 30px

### Link Button
- background: transparent
- border: 1px solid white
- color: white
- padding: 12px 24px
- border-radius: 4px
- font-size: 16px
- transition: all 0.3s

## States & Behaviors

### Button Hover
- **Trigger:** hover
- **State A:** transparent bg, white border, white text
- **State B:** white bg, white border, dark text
- **Transition:** all 0.3s

## Per-State Content

### Contact Information
- Phone: "0800 0485 750"
- Email: "workspace@britishland.com"
- CTA: "Contact Us"

## Assets
- Logo: `/images/misc/logo-white.png`

## Text Content (verbatim)
- "0800 0485 750"
- "workspace@britishland.com"
- "Contact Us"

## Responsive Behavior
- **Desktop (1440px):** Side by side layout
- **Tablet (768px):** Stacked
- **Mobile (390px):** Full width, centered
- **Breakpoint:** ~768px
