# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (bottom)
- **Interaction model:** Static

## DOM Structure
```
footer
  div.footer__inner
    div.footer__top
      div.footer__links
        div.footer__links__column
          h4 ("Quicklinks")
          ul
            li: a ("Workspace")
            li: a ("Meeting & Events spaces")
            li: a ("About Storey")
            li: a ("Contact Us")
            li: a ("Login")
        div.footer__links__column
          h4 ("Legal")
          ul
            li: a ("Privacy Notice")
            li: a ("Terms of use")
            li: a ("Terms & Conditions")
      div.footer__contact
        p ("0800 0485 750")
        p ("workspace@britishland.com")
        a ("Contact Us")
    div.footer__bottom
      div.footer__social
        a (Facebook)
        a (Instagram)
        a (LinkedIn)
      div.footer__brand
        img (British Land logo)
        img (MC logo)
```

## Computed Styles

### Footer Container
- background: #1A171A (dark)
- color: #F1F4F1 (marble)
- padding: 100px 100px 63px
- min-height: 918px

### Inner Container
- max-width: 1225px
- margin: 0 auto

### Links Column
- margin-bottom: 40px

### Link Heading (h4)
- font-size: 16px
- font-weight: 500
- color: white
- margin-bottom: 20px

### Link List
- list-style: none
- padding: 0

### Link Items (a)
- font-size: 16px
- color: #F1F4F1
- text-decoration: none
- display: block
- margin-bottom: 12px
- transition: opacity 0.3s

### Social Icons
- display: flex
- gap: 20px
- margin-top: 40px

### Social Icon
- width: 20px
- height: 20px
- filter: brightness(0) invert(1)
- transition: opacity 0.3s

### Brand Logos
- display: flex
- gap: 30px
- margin-top: 60px
- opacity: 0.5

## States & Behaviors

### Link Hover
- **Trigger:** hover
- **State A:** opacity 1
- **State B:** opacity 0.7
- **Transition:** opacity 0.3s

### Social Icon Hover
- **Trigger:** hover
- **State A:** opacity 1
- **State B:** opacity 0.7
- **Transition:** opacity 0.3s

## Per-State Content

### Quicklinks
- Workspace: https://storey.co.uk/workspace/
- Meeting & Events spaces: https://storey.co.uk/meeting-and-events/
- About Storey: https://storey.co.uk/about-storey/
- Contact Us: https://storey.co.uk/contact-us/
- Login: https://my.storey.co.uk/login

### Legal
- Privacy Notice: https://www.britishland.com/privacy-notice
- Terms of use: https://www.britishland.com/terms-of-use/
- Terms & Conditions: https://storey.co.uk/storey-club-meeting-room-event-space-terms-and-conditions/

### Contact
- Phone: 0800 0485 750
- Email: workspace@britishland.com

## Assets
- British Land logo: `/images/misc/British_Land_white.svg`
- MC logo: `/images/misc/MClogo.svg`
- Social icons: `/images/misc/facebook-icon-white.svg`, `/images/misc/instagram-icon.svg`, `/images/misc/LinkedIn.svg`

## Text Content (verbatim)
See Per-State Content above.

## Responsive Behavior
- **Desktop (1440px):** Multi-column layout, 100px padding
- **Tablet (768px):** 2-column layout, reduced padding
- **Mobile (390px):** Single column, 30px padding
- **Breakpoint:** ~768px
