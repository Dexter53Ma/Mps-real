# PillarsSection Specification

## Overview
- **Target file:** `src/components/PillarsSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (section 4)
- **Interaction model:** Scroll-driven (cards animate in), click-driven (table expandable)

## DOM Structure
```
div.bg-col--copper-primary.text-col--wood-light
  section.pillars
    div.pillars__inner (flex column, gap 70px)
      h2 ("What Storey does best")
      p (description paragraph 1)
      p (description paragraph 2)
      p (description paragraph 3)
      div.pillars__cards (grid, 2 columns)
        a.pillars__card (card 1 - spans 2 columns)
          img.pillars__card__img (background, absolute, z-index -1)
          div.pillars__card__content
            h3 (title)
            p (description)
        a.pillars__card (card 2)
        a.pillars__card (card 3)
        a.pillars__card (card 4)
    div.table-wrapper (comparison table)
      div.table__head
        img (header image)
      table
        thead
          tr
            th ("Why choose Storey?")
            th ("Traditional office")
            th ("Storey")
        tbody
          tr (per feature)
            td (feature name + description)
            td (cross or check)
            td (check)
```

## Computed Styles

### Section Container
- background: #4F0003 (rgb(79, 0, 3))
- color: #FBEFDD (wood-light)
- padding: 0 30px 80px
- display: flex
- flex-direction: column
- gap: 70px
- width: 1356px
- max-width: 1356px

### Heading
- font-size: 60px
- font-weight: 500
- font-family: GT-Walsheim-Medium
- line-height: 60px
- color: #FBEFDD
- width: 465px
- height: 120px

### Description Paragraphs
- font-size: 18px
- line-height: 20.88px
- color: #FBEFDD

### Cards Grid
- Display: grid
- Grid-template-columns: 1fr 1fr
- Gap: 20px

### Card (General)
- padding: 25px
- display: flex
- flex-direction: column
- justify-content: flex-end
- border-radius: 9px
- overflow: hidden
- position: relative
- height: 500px
- color: white
- cursor: pointer

### Card 1 (Featured - full width)
- width: 802px (spans both columns)

### Card 2-4
- width: 471px (single column)

### Card Background Image
- position: absolute
- top: 0
- left: 0
- width: 100%
- height: 100%
- object-fit: cover
- z-index: -1
- transition: transform 0.5s

### Card Content
- position: relative
- z-index: 1

### Card Title (h3)
- font-size: 24px
- font-weight: 500
- margin-bottom: 10px

### Card Description
- font-size: 16px
- line-height: 24px

## States & Behaviors

### Card Hover
- **Trigger:** hover
- **State A:** default
- **State B:** background image scales up (transform: scale(1.05))
- **Transition:** transform 0.5s ease

### Scroll-triggered card animation
- **Trigger:** IntersectionObserver (cards enter viewport)
- **State A:** opacity 0, transform translateY(30px)
- **State B:** opacity 1, transform translateY(0)
- **Transition:** opacity 0.6s, transform 0.6s
- **Stagger:** 0.1s between cards

## Per-State Content

### Card 1 (Featured)
- Title: "Flexible and ready-to-use workspaces"
- Description: "That reflect where you are now – and where you're business is going."
- Image: `/images/pillars/20240506_Storey_201-Bishopsgate_-17-copy-scaled-1.jpg`

### Card 2
- Title: "Expert relationship teams"
- Description: "On hand to make everything work seamlessly. From making your mark by personalising your office space, to the day-to-day assistance."
- Image: `/images/pillars/20240902_PaddingtonCentral_2KS_Interior_Storey_Level1_116-1-scaled-1.jpg`

### Card 3
- Title: "All-inclusive - simple fixed pricing"
- Description: "Cleaning, WiFi, utilities and office desks and chairs are all covered."
- Image: `/images/pillars/20250425_NortonFolgate_NichollsClarke_Storey_Level9_Interior_088-1-scaled-1.jpg`

### Card 4
- Title: "World-leading extras"
- Description: "Access to world-class shared amenities, meeting rooms, events and more across our London portfolio."
- Image: `/images/pillars/20200625_6-Orsman-Road-12-1-scaled-1.jpg`

### Comparison Table
- Header image: `/images/table/20250725_Broadgate_Broadgate-Tower_L28_Cat-A-resized.jpg`
- Features: Flexible leasing, Space to grow, Ready-to-use spaces

## Assets
- Card images: 4 in `/images/pillars/`
- Table header images: 2 in `/images/table/`

## Text Content (verbatim)
- "What Storey does best"
- "Storey by British Land provides flexible spaces with straightforward leases and all-inclusive fixed price packages. From office desks and chairs, to WiFi, cleaning and utilities – everything's set up so you can get started from day one. Our expert relationship team handles the details, while you make the space your own."
- "As a Storey customer you gain access to our acclaimed buildings across London, world-leading facilities, shared spaces, smart tech and inspired events."
- "Leaving you to focus on what your company does best – and what's coming next."
- Card titles and descriptions as listed above

## Responsive Behavior
- **Desktop (1440px):** 2-column grid, first card full width
- **Tablet (768px):** Single column stack
- **Mobile (390px):** Single column, reduced height (300px)
- **Breakpoint:** ~768px
