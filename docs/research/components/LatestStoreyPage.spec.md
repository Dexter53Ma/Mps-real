# Our Latest Storey Page Specification

## Overview
- **Target file:** `src/app/our-latest-storey/page.tsx`
- **Screenshot:** `docs/design-references/storey.co.uk/our-latest-storey-desktop.png`
- **Interaction model:** Static with "Load more" button (client-side pagination)

## Page Structure
The page has 3 main sections:
1. **Hero Section** - Full-width with SVG wave background, title, subtitle
2. **Blog Grid** - 3-column grid of article cards with "Load more" button
3. **Footer** - Already exists in `src/components/Footer.tsx`

## Section 1: Hero Section

### DOM Structure
```
div.banner--wrap.banner--wrap--intro.banner--wrap--intro--listing
  svg (absolute positioned wave background)
  section.banner.normal-wrap
    div.spacer.spacer--l (229px height)
    h1 "Our Latest Storey"
    p "A collection of updates from our colleagues and experienced partners"
    section.place-cards.place-cards--featured (featured article card)
```

### Computed Styles

#### Hero Container
- display: block
- padding: 0 0 50px
- margin: -10px 0 0
- border-radius: 0 0 10px 10px
- position: relative
- z-index: -1
- overflow: visible

#### SVG Wave Background
- position: absolute
- right: -15px
- bottom: -229.25px
- width: 1869px
- height: 1236.62px
- transform: matrix(1.0067, 0, 0, 1.0067, 0, -16.4486)
- z-index: -1
- object-fit: cover

#### Inner Banner Section
- display: flex
- flex-direction: column
- gap: 30px
- padding: 0 39.249px
- margin: 0 46.7031px
- max-width: 1760.6px
- z-index: 10

#### H1 Title
- font-size: 103.833px (desktop), 55px (mobile)
- font-weight: 500
- font-family: GT-Walsheim-Medium
- line-height: 100.718px (desktop), 53.35px (mobile)
- color: rgb(26, 23, 26)

#### Subtitle Paragraph
- font-size: 20.7667px
- font-weight: 400
- font-family: GT-Walsheim-ProLight
- line-height: 24.0893px
- color: rgb(26, 23, 26)
- max-width: 939.692px
- margin: 0 0 -10px

### Spacer
- height: 229.25px (desktop)

## Section 2: Featured Article Card

### DOM Structure
```
section.place-cards.place-cards--featured
  a.place-cards__item (link to article)
    div.place-cards__item__img (background image)
    div.place-cards__item__content
      p.place-cards__item__tag "Storey"
      h3 "London's most exciting new flexible workspace"
      p.place-cards__item__date "16 April 2024"
```

### Computed Styles

#### Featured Card Container
- display: flex
- flex-direction: column
- gap: 40px
- max-width: 1869px
- width: 1682.12px

#### Card Item
- display: flex
- flex-direction: column
- border-radius: 6px
- border: 1px solid rgb(241, 244, 241)
- overflow: hidden
- position: relative
- z-index: 2
- transition: 0.35s
- cursor: pointer

#### Card Image
- position: absolute
- z-index: -1
- object-fit: cover

#### Card Content
- padding: 20px
- position: relative
- z-index: 1

#### Card Tag
- font-size: 12px
- text-transform: uppercase
- letter-spacing: 0.1em
- color: rgb(39, 64, 56)

#### Card Title (h3)
- font-size: 24px
- font-weight: 500
- font-family: GT-Walsheim-Medium
- line-height: 1.2
- color: rgb(26, 23, 26)

#### Card Date
- font-size: 14px
- color: rgb(39, 64, 56)

### Featured Card Content
- **Tag:** "Storey"
- **Title:** "London's most exciting new flexible workspace"
- **Date:** "16 April 2024"
- **Image:** `https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/13141449/240605_Storey_201Bishopsgate_%C2%A9JackHobhouse_068-copy-1.jpg`
- **Link:** `https://storey.co.uk/londons-most-exciting-new-flexible-workspace/`

## Section 3: Blog Card Grid

### DOM Structure
```
div.listing
  section.place-cards.place-cards--vertical.post-lists (3-column grid)
    a.place-cards__item (6 cards)
  div.spacer.spacer--m (137px height)
  section.banner.banner--center
    a.btn.btn--outline.load_more_posts "Load more"
```

### Computed Styles

#### Grid Container
- display: grid
- grid-template-columns: 540.703px 540.703px 540.703px (desktop), 347.125px (mobile)
- grid-template-rows: 701.266px 680.438px (desktop)
- gap: 30px
- padding: 0 39.249px
- margin: -10px 46.7031px 0
- max-width: 1760.6px
- border-radius: 0 0 10px 10px

#### Blog Card Item
- display: flex
- flex-direction: column
- width: 540.703px (desktop), 347.125px (mobile)
- height: 701.266px (row 1), 680.438px (row 2)
- border-radius: 6px
- border: 1px solid rgb(241, 244, 241)
- overflow: hidden
- position: relative
- z-index: 2
- transition: 0.35s
- cursor: pointer

#### Load More Button
- display: block
- padding: 20px 56px
- border-radius: 6px
- border: 1px solid rgb(26, 23, 26)
- font-size: 20.7667px
- font-weight: 400
- font-family: GT-Walsheim-Medium
- line-height: 24.0893px
- color: rgb(26, 23, 26)
- background: transparent
- transition: 0.35s
- cursor: pointer
- text-align: center

### Blog Card Content (6 cards)

1. **Title:** "London's most exciting new flexible workspace"
   - **Image:** `https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/13141449/240605_Storey_201Bishopsgate_%C2%A9JackHobhouse_068-copy-1.jpg`
   - **Link:** `/londons-most-exciting-new-flexible-workspace/`
   - **Tag:** "Storey"

2. **Title:** "How to boost wellbeing in your workspace"
   - **Image:** `https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/30093856/20210423_Storey_100LS_59-scaled.jpg`
   - **Link:** `/how-to-boost-wellbeing-in-your-workspace/`
   - **Tag:** "Storey"

3. **Title:** "Seven things you need to consider when choosing the right workspace for you"
   - **Image:** `https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/02/14171505/20200625_Orsman-Road-4-6-scaled-1.jpg`
   - **Link:** `/seven-things-you-need-to-consider-when-choosing-the-right-workspace-for-you/`
   - **Tag:** "Latest Storey"

4. **Title:** "Storey Club: Meeting room and event space"
   - **Image:** `https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/02/10125710/210928-Broadgate-100LS-Lifestyle-20-2_0.jpeg`
   - **Link:** `/storey-club-meeting-room-and-event-space/`
   - **Tag:** "Storey"

5. **Title:** "Uniquely adaptable workspace: 1 Finsbury Avenue and 100 Liverpool Street"
   - **Image:** `https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2022/12/10131316/230321-Broadgate-100-Liverpool-Street-Return-To-Office-1.jpeg`
   - **Link:** `/uniquely-adaptable-workspace-1-finsbury-avenue-and-100-liverpool-street/`
   - **Tag:** "Storey"

6. **Title:** "What to check for when viewing office space"
   - **Image:** `https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2022/07/10132445/210928-Broadgate-100LS-Lifestyle-26.png`
   - **Link:** `/what-check-when-viewing-office-space/`
   - **Tag:** "Storey"

## Responsive Behavior
- **Desktop (1440px):** 3-column grid, h1 at 103px, featured card full width
- **Tablet (768px):** 2-column grid, h1 at ~70px
- **Mobile (390px):** 1-column grid, h1 at 55px, cards stack vertically
- **Breakpoint:** Grid switches from 3→2→1 columns at ~1024px and ~640px

## Text Content (verbatim)
- H1: "Our Latest Storey"
- Subtitle: "A collection of updates from our colleagues and experienced partners"
- Results text: "Showing 20 results"
- Load more button: "Load more"
