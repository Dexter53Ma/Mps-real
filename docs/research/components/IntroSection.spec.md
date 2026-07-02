# IntroSection Specification

## Overview
- **Target file:** `src/components/IntroSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (section 2)
- **Interaction model:** Static

## DOM Structure
```
section.intro-two
  div.intro-two__inner (flex, space-between)
    div.intro-two__content (flex column, gap 30px)
      h2 (heading - likely image-based or hidden)
      p (paragraph 1)
      p (paragraph 2)
      p (paragraph 3)
      a.intro-two__link (Get in touch)
    div.intro-two__media (relative)
      img.intro-two__media__img (workspace photo)
```

## Computed Styles

### Section Container
- background: #FBEFDD (rgb(251, 239, 221))
- color: #4F0003 (rgb(79, 0, 3))
- padding: 30px 0
- margin-top: -10px
- display: flex
- justify-content: center
- align-items: center
- border-radius: 0px 0px 10px 10px
- overflow: hidden
- position: relative
- z-index: 5
- width: 1425px
- max-width: 1440px
- height: 900px
- min-height: 900px

### Inner Container
- padding: 0 30px
- margin: 0 34px
- display: flex
- justify-content: space-between
- gap: 120px
- width: 1356px
- max-width: 1356px

### Content Column
- display: flex
- flex-direction: column
- justify-content: space-between
- gap: 30px
- width: 580px
- max-width: 580px

### Paragraphs
- font-size: 18px
- font-weight: 400
- font-family: GT-Walsheim-ProLight
- line-height: 20.88px
- color: #4F0003
- max-width: 520px

### CTA Link
- font-size: 16px
- color: #4F0003
- display: flex
- align-items: center
- gap: 10px
- cursor: pointer
- transition: 0.35s
- text-decoration: none

### Media Column
- position: relative
- width: 596px
- max-width: 600px
- height: 710px

### Media Image
- width: 100%
- height: 100%
- object-fit: cover
- border-radius: 9px (assumed)

## States & Behaviors

### CTA Link Hover
- **Trigger:** hover
- **State A:** default
- **State B:** opacity changes, arrow moves
- **Transition:** 0.35s

## Per-State Content

### Text Content
- Paragraph 1: "Finding a beautiful and flexible office space that reflects who you are and where you're going isn't always straightforward. Which is where Storey by British Land comes in."
- Paragraph 2: "We're using our world-leading experience to create incredible places that work with you, your team and your needs; making the whole process of finding, moving into and running your office simple and seamless."
- Paragraph 3: "With customisable workspaces across London, choose a Storey space that reflects where you are right now then simply use our fixed cost packages, straightforward leases and expert teams to take care of day-to-day – so you can concentrate on what comes next."
- CTA: "Get in touch"

## Assets
- Image: `/images/intro/20250106_PaddingtonCentral_StoreyClub_4KingdomStreet_008-1-scaled-1.jpg`
- Arrow icon: `ArrowRightIcon` from icons.tsx

## Text Content (verbatim)
See Per-State Content above.

## Responsive Behavior
- **Desktop (1440px):** Two columns, 580px + 596px, gap 120px
- **Tablet (768px):** Single column, image above text
- **Mobile (390px):** Stacked, full-width image, reduced padding
- **Breakpoint:** ~768px
