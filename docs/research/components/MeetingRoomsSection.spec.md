# MeetingRoomsSection Specification

## Overview
- **Target file:** `src/components/MeetingRoomsSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (section 6)
- **Interaction model:** Static

## DOM Structure
```
div.bg-col--forest-primary.text-col--marble-primary
  section.storey-club
    div.storey-club__inner
      div.storey-club__content
        h2 ("Meeting rooms to impress")
        p (paragraph 1)
        p (paragraph 2)
      div.storey-club__media
        img.storey-club__media__video (workspace image)
```

## Computed Styles

### Section Container
- background: #274038 (rgb(39, 64, 56))
- color: marble/white
- padding: 80px 30px
- display: flex
- justify-content: center

### Inner Container
- max-width: 1356px
- display: flex
- gap: 60px
- align-items: center

### Content Column
- flex: 1
- max-width: 500px

### Heading
- font-size: 60px
- font-weight: 500
- font-family: GT-Walsheim-Medium
- line-height: 60px
- color: white

### Paragraphs
- font-size: 18px
- line-height: 20.88px
- color: white
- margin-top: 20px

### Media Column
- flex: 1
- position: relative

### Image
- width: 100%
- height: auto
- border-radius: 9px
- object-fit: cover

## States & Behaviors

### Static section, no interactions

## Per-State Content

### Text Content
- Heading: "Meeting rooms to impress"
- Paragraph 1: "Important client meetings, off-site all-company brainstorming days, interactive training days, workshops to inspire your team – whatever space you need, you'll have access to the beautifully designed bookable spaces of Liverpool Street and Paddington."
- Paragraph 2: "With on-site welcome points, expert tech teams and food and drink options, our meeting rooms provide everything you need – while creating the perfect environment for moments of real connection and ideas."

## Assets
- Image: `/images/meeting/20250106_PaddingtonCentral_StoreyClub_4KingdomStreet_019-copy-scaled-1.jpg`

## Text Content (verbatim)
See Per-State Content above.

## Responsive Behavior
- **Desktop (1440px):** Two columns, text left, image right
- **Tablet (768px):** Single column, image below text
- **Mobile (390px):** Stacked, full-width image
- **Breakpoint:** ~768px
