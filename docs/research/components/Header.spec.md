# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/desktop-viewport.png`
- **Interaction model:** Click-driven (menu toggle), scroll-driven (sticky behavior)

## DOM Structure
```
header.header.header--white
  div.header__inner (flex, space-between, align-center)
    a.header__logo (link to /)
      img (Storey logo)
    nav.header__nav (desktop nav links)
      div.header__nav__item (Workspaces - dropdown)
      div.header__nav__item (Meeting & Events - dropdown)
      div.header__nav__item (About Storey)
    div.header__actions
      a.header__cta (Find workspace)
      button.header__menu-btn (Menu - mobile)
```

## Computed Styles

### Header Container
- position: fixed
- top: 0
- width: 100%
- z-index: high
- background: transparent initially
- color: white (#FFF)
- transition: all

### Header Inner
- display: flex
- justify-content: space-between
- align-items: center
- padding: 20px 30px
- max-width: 1440px
- margin: 0 auto

### Logo
- height: ~30px
- filter: brightness(0) invert(1) (white version)

### Nav Links (Desktop)
- font-size: 16px
- font-weight: 400
- color: white
- text-decoration: none
- margin-right: 30px
- transition: opacity 0.3s

### CTA Button
- background: transparent
- border: 1px solid white
- color: white
- padding: 10px 24px
- border-radius: 4px
- font-size: 14px
- transition: all 0.3s

## States & Behaviors

### Scroll-triggered sticky mode
- **Trigger:** scroll position > 300px
- **State A (initial):** classes: `header header--white`, background: transparent
- **State B (scrolled):** classes: `header header--white isScrollingDown sticky`
- **Transition:** CSS class toggle
- **Implementation:** JS scroll listener adds/removes classes

### Menu Toggle (Mobile)
- **Trigger:** click on Menu button
- **State A:** Mobile nav hidden (transform: translateX(100%))
- **State B:** Mobile nav visible (transform: translateX(0))
- **Transition:** transform 0.3s ease

### Hover States
- **Nav links:** opacity 0.7 → 1, transition: opacity 0.3s
- **CTA button:** background white, color dark, transition: all 0.3s

## Per-State Content (if applicable)

### Desktop Nav
- Workspaces (dropdown with image)
- Meeting & Events (dropdown with image)
- About Storey

### Mobile Nav
- All desktop links stacked vertically
- Social icons (Facebook, Instagram, LinkedIn)
- Contact info

## Assets
- Logo: `/images/misc/logo-white.png` (white version)
- Social icons: `/images/misc/facebook-icon-white.svg`, `/images/misc/instagram-icon.svg`, `/images/misc/LinkedIn.svg`

## Text Content (verbatim)
- "Workspaces"
- "Meeting & Events"
- "About Storey"
- "Find workspace"
- "Menu" (mobile button)

## Responsive Behavior
- **Desktop (1440px):** Full nav visible, CTA button visible
- **Tablet (768px):** Nav hidden, hamburger menu shown
- **Mobile (390px):** Full-screen overlay menu
- **Breakpoint:** ~768px
