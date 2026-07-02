# MPS UI Polish & Animation Enhancement

## Overview
Full design polish for Marrakech Property Service website: fix fonts, add subtle scroll animations, enhance hover states, redesign header, improve mobile experience. Pure CSS + vanilla JS, zero new dependencies.

## A. Font Fix
- Load GT Walsheim Pro alternatives via `next/font`
- Define `--font-gt-walsheim-prolight` and `--font-gt-walsheim-medium` CSS variables
- All existing component references will work automatically

## B. Header Redesign
- Modern glassmorphism effect (backdrop-blur + semi-transparent bg)
- Animated underline on nav links
- Smoother mobile menu with staggered link reveal
- Better logo sizing and spacing

## C. Scroll Reveal System
- Custom `useScrollReveal` hook (Intersection Observer)
- CSS classes: `.reveal`, `.reveal-left`, `.reveal-right`
- Staggered delays for grouped elements
- 600ms ease-out transitions

## D. Component Enhancements
- Header: glassmorphism, animated underlines
- Hero: smoother parallax, Ken Burns on images
- Pillars: card lift + shadow hover, staggered reveal
- Testimonials: smoother carousel
- Property cards: image zoom + gradient overlay
- Footer: staggered column reveal
- All buttons: subtle scale on hover

## E. Mobile Polish
- 44px min tap targets
- Mobile menu staggered animation
- Touch swipe for carousels
- Improved spacing

## F. Accessibility
- `prefers-reduced-motion` support
- Focus states visible
- `aria-hidden` on decorative elements
