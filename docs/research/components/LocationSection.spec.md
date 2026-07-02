# LocationSection Specification

## Overview
- **Target file:** `src/components/LocationSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (section 3)
- **Interaction model:** Click-driven (map markers, location cards)

## DOM Structure
```
div.bg-col--forest-primary.text-col--marble-primary
  div.location-block
    div.location-block__header
      p ("Where we are")
      h2 (heading)
      p (description)
    div.location-block__content
      div.location-block__content__info (4 location cards)
        a (per location)
          p (location name)
          p (area)
          p (count)
      div.location-block__map-wrapper
        div.location-block__map-wrapper__map
          img (map image)
          div.location-block__map-wrapper__map__marker (4 markers)
            button (marker trigger - SVG pin)
            div.location-block__map-wrapper__map__marker__popup
              img (location image)
              p (location name)
        div.location-block__map-wrapper__img-block
          img (featured location image)
    div.location-block__featured
      a (Featured location link)
        h3 (title)
        p (CTA text)
```

## Computed Styles

### Section Container
- background: #274038 (rgb(39, 64, 56))
- color: #F1F4F1 (marble)
- padding: 25px
- display: flex
- justify-content: center
- align-items: center
- overflow: hidden
- width: 1425px
- max-width: 1440px
- height: 1208px

### "Where we are" Label
- font-size: 18px
- color: white

### Location Cards
- Display: flex
- Gap: 20px
- Width: 1049px

### Map Container
- Position: relative
- Width: 100%
- Height: auto

### Map Markers
- Position: absolute on map
- SVG pin: fill #FB4920 (copper accent)
- Size: 20x29px

### Location Popup
- Background: white
- Border-radius: 8px
- Box-shadow: 0 4px 20px rgba(0,0,0,0.15)
- Width: 250px
- Image: full-width, height 150px

## States & Behaviors

### Map Marker Click
- **Trigger:** click on marker
- **State A:** Popup hidden
- **State B:** Popup visible with location details
- **Transition:** opacity 0.3s, transform 0.3s

### Location Card Hover
- **Trigger:** hover
- **State A:** default
- **State B:** background lighten, cursor pointer
- **Transition:** background 0.3s

## Per-State Content

### Locations
1. **Liverpool Street** - The City - 3 locations
2. **Hackney** - East London - 1 location
3. **Paddington** - West London - 2 locations
4. **Great Portland Street** - Central London - 2 locations

### Featured Location
- "Our latest Storey in the Knowledge Quarter"
- "View 1 Triton Square"

## Assets
- Map image: `/images/locations/Map5-2.jpg`
- Location images: 4 popup images in `/images/locations/`
- Featured image: `/images/locations/20230905-Regents-Place_1-Triton-Square5-copy-scaled-1.jpg`
- Map marker SVG: inline (fill #FB4920)

## Text Content (verbatim)
- "Where we are"
- "Beautifully designed with exceptional facilities and expert support teams on site, all of Storey's flexible locations are based in some of the best-connected and exciting spots in the city – surrounded by world-leading companies, bars, restaurants, gyms and green spaces."
- "Liverpool Street", "The City", "3 locations available"
- "Hackney", "East London", "1 location available"
- "Paddington", "West London", "2 locations available"
- "Great Portland Street", "Central London", "2 locations available"
- "Our latest Storey in the Knowledge Quarter"
- "View 1 Triton Square"

## Responsive Behavior
- **Desktop (1440px):** Map + cards side by side
- **Tablet (768px):** Map full width, cards below
- **Mobile (390px):** Stacked, simplified map
- **Breakpoint:** ~768px
