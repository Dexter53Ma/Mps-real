# FAQ Page Specification

## Overview
- **Target file:** `src/app/frequently-asked-questions/page.tsx`
- **Screenshot:** `docs/design-references/storey.co.uk/faq-desktop.png`
- **Interaction model:** Click-driven accordion (expand/collapse)

## Page Structure
The page has 4 main sections:
1. **Hero Section** - Back link, title, description, category links
2. **FAQ Accordion** - 6 sections with expandable questions
3. **CTA Banner** - Green background with links
4. **Footer** - Already exists in `src/components/Footer.tsx`

## Section 1: Hero Section

### DOM Structure
```
div.banner--wrap.banner--wrap--intro.banner--wrap--intro--extend
  svg (absolute positioned wave background)
  section.banner.normal-wrap
    a.link.link--arrow.link--arrow--back "Back to previous section"
    h1 "FAQs"
    p (description)
    div (category links)
      a.link.link--arrow "Storey Club"
      a.link.link--arrow "Workspace"
      a.link.link--arrow "Meeting space"
      a.link.link--arrow "Event space"
```

### Computed Styles

#### Hero Container
- display: flex
- flex-direction: column
- gap: 30px
- padding: 0 30.24px
- margin: 0 180px
- max-width: 1080px
- width: 1080px

#### Back Link
- font-size: 16px
- font-weight: 400
- font-family: GT-Walsheim-ProLight
- line-height: 18.56px
- color: rgb(26, 23, 26)
- display: flex
- cursor: pointer
- transition: 0.35s

#### H1 Title
- font-size: 80px (desktop), 55px (mobile)
- font-weight: 500
- font-family: GT-Walsheim-Medium
- line-height: 77.6px (desktop)
- color: rgb(26, 23, 26)
- width: 1019.53px

#### Description Paragraph
- font-size: 16px
- font-weight: 400
- font-family: GT-Walsheim-ProLight
- line-height: 18.56px
- color: rgb(26, 23, 26)
- max-width: 724px
- margin: 0 0 -10px

#### Category Links Container
- display: flex
- gap: 20px
- flex-wrap: wrap

#### Category Link
- font-size: 16px
- font-weight: 400
- font-family: GT-Walsheim-ProLight
- line-height: 18.56px
- color: rgb(26, 23, 26)
- display: flex
- cursor: pointer
- transition: 0.35s

### Hero Content
- **Back link text:** "Back to previous section"
- **H1:** "FAQs"
- **Description:** "Private, fully personalised offices with only the best in shared spaces. Created by British Land and world-class architects and designers, with sustainability and productivity front of mind."
- **Category links:**
  - "Storey Club" → /storey-club
  - "Workspace" → /workspace/
  - "Meeting space" → /meeting-space/
  - "Event space" → /event-space/

## Section 2: FAQ Accordion

### DOM Structure
```
div.narrow-wrap
  div (section)
    h4 "Most asked questions"
    div.accordion
      div.accordion__item
        button.accordion__item__head "Question text"
        div.accordion__item__body
          p "Answer text"
  div (section)
    h4 "Pricing"
    div.accordion
      div.accordion__item
        button.accordion__item__head
        div.accordion__item__body
  ... (6 sections total)
```

### Computed Styles

#### Narrow Wrap Container
- padding: 0 30.24px
- margin: -10px 180px 0
- max-width: 1080px
- width: 1080px
- display: flex
- flex-direction: column
- gap: 30px

#### Section Title (h4)
- font-size: 30px
- font-weight: 400
- font-family: GT-Walsheim-Medium
- line-height: 30px
- color: rgb(26, 23, 26)

#### Accordion Item
- display: block
- border-bottom: 1px solid rgba(26, 23, 26, 0.3)
- transition: 0.35s
- width: 1019.53px

#### Accordion Button
- font-size: 24px (desktop), 22px (mobile)
- font-weight: 500
- font-family: GT-Walsheim-ProLight
- line-height: 24px
- color: rgb(26, 23, 26)
- padding: 22px 0
- display: flex
- cursor: pointer
- transition: 0.35s
- width: 100%
- text-align: left
- background: transparent
- border: none

#### Accordion Body
- font-size: 16px
- font-weight: 400
- font-family: GT-Walsheim-ProLight
- line-height: 18.56px
- color: rgb(26, 23, 26)
- max-width: 80%
- overflow: hidden
- transition: opacity 0.35s
- height: 0 (collapsed), auto (expanded)

### FAQ Sections Content

#### Section 1: "Most asked questions" (6 items)
1. **Q:** "What does your price include?"
   **A:** "At Storey we have one single, all-inclusive rate which includes: rent; utilities; business rates; services; and facilities. In addition access to Storey Club, our meeting and event space, is available to Storey and British Land customers."

2. **Q:** "What is the min/max number of people in your offices?"
   **A:** "Storey provides office space for a minimum of around 20 people. There is no maximum."

3. **Q:** "Can I upsize/downsize in the future?"
   **A:** "At Storey we want to offer flexibility. If your space requirement changes, we can look at different options to upsize or downsize depending on your needs."

4. **Q:** "What size offices are available?"
   **A:** "Storey offices are bespoke to your business needs. Please speak to one of the team to discuss your requirements in more detail."

5. **Q:** "How long are your leases?"
   **A:** "The minimum lease length at Storey is 12 months. On average our customers tend to take leases that range between 2 – 4 years."

6. **Q:** "What type of offices do you offer?"
   **A:** "Storey offices are completely private and personalised to each customer. Customers can benefit from a mix of private and shared facilities, such as kitchens, lounge space and meeting rooms or we can accommodate businesses looking for entirely private space. In addition Storey Club, our meeting and event space, is available to Storey and British Land customers."

#### Section 2: "Pricing" (3 items)
1. **Q:** "How much does a Storey office cost?"
   **A:** "Storey offices are bespoke to your business needs. Please speak to one of the team to discuss your requirements in more detail."

2. **Q:** "Is there a receptionist at your locations?"
   **A:** "We have manned receptions at most of our locations and where this isn't possible, we have video intercom and entry systems that are accessible from your private office. Your dedicated Community Manager is also available during business hours from Monday to Friday."

3. **Q:** "What does your price include?"
   **A:** "At Storey we have one single, all-inclusive rate which includes: rent; utilities; business rates; services; and facilities. In addition Storey Club, our meeting and event space, is available to Storey and British Land customers."

#### Section 3: "Customisation" (4 items)
1. **Q:** "Can I design my own office layout?"
   **A:** "Yes. The Storey team will work with you, alongside architects and interior designers, to create the right layout to suit the needs of your business."

2. **Q:** "Meeting rooms in your office space"
   **A:** "Each office is set up to include meeting rooms based on the size of your space. The Storey team can help you identify the best way to optimise your space should you require more or less. There are also several meeting rooms available within the shared spaces. Plus, Storey Club offers additional meeting room and event space for all Storey customers."

3. **Q:** "What furniture is included with Storey?"
   **A:** "As standard, we provide all Storey customers with desks, desk chairs and desk power bars. The product team at Storey have curated a menu where you can select furniture to customise the look and feel of your space. You can also bring existing furniture into your space. It's your space, we want to give you the flexibility to make it a place for you to grow your business."

4. **Q:** "Can I customise my office?"
   **A:** "Yes. The team at Storey will work with you to personalise your office to meet the needs of your business and employees. This includes: office layout; AV; interior design; planting; furniture; your brand on your front door; and even your access passes."

#### Section 4: "Credits" (8 items)
1. **Q:** "Where can I use Storey credits?"
   **A:** "You can use them to book meetings in your own Storey location or one of our Storey Club's – including 100 Liverpool Street (British Land's most state-of-the-art building) and 4 Kingdom Street (right next to Paddington station)."

2. **Q:** "Who can buy extra credits?"
   **A:** "That's entirely up to you – you tell us who in your company you want (or don't want) to have that power."

3. **Q:** "Who can get Storey credits?"
   **A:** "Any Storey customer – and only Storey customers."

4. **Q:** "How do Storey credits work?"
   **A:** "Every month, you get a certain number of free Storey credits –usually, this is based on a % of your rent. You can use these free credits to book shared meeting rooms in your own Storey location, or any Storey Club, using our online booking system. You can buy more credits if you need to – for £1 per credit."

5. **Q:** "What is your cancellation policy?"
   **A:** "Shared meeting rooms You get: a 100% refund if you cancel at least 24 hours before; a 50% refund if you cancel at least 4 hours before; Non-refundable if you cancel within 4 hours. Storey Club You can get a full refund if you cancel at least 5 days before. For the full details, see our Terms and Conditions."

6. **Q:** "Can I use my Storey credits to pay for catering at Storey Club?"
   **A:** "No. You can only pay for the room with your credits, not catering or any add-ons."

7. **Q:** "How much does it cost to buy extra credits?"
   **A:** "It's £1 a credit (but if you buy them in bulk, they're cheaper)."

8. **Q:** "Do my Storey credits expire?"
   **A:** "Every month, you'll get a new set of credits. You have to use those by the end of the same month – they don't rollover. But the extra credits you buy are valid for the whole of your lease."

#### Section 5: "Storey Club" (1 item)
1. **Q:** "What are the cancellation policies for Storey Club and shared meeting rooms?"
   **A:** "Shared meeting rooms These are unique to Storey customers, your benefit for being our customer in a Storey building You get: • 100% refund if you cancel at least 24 hours before • 50% refund if you cancel at least 4 hours before • Non-refundable if you cancel within 4 hours Storey Club bookings Event Space • Event Space bookings require a non-refundable deposit of 25% of the anticipated booking fee at least 14 days before the event in order to secure the booking • The remainder (75% of the anticipated booking fee) can be refunded if you cancel at least 5 days before Meeting rooms • You can get a full refund if you cancel at least 5 days before For the full details, see our Storey Portal homepage for our Terms and Conditions."

#### Section 6: "Services" (6 items)
1. **Q:** "Can I register visitors to my office?"
   **A:** "Yes. You can do this via our visitor management system. Specific access arrangements may apply during out of business hours."

2. **Q:** "What are your opening hours?"
   **A:** "All Storey locations have 24/7 access (with the exception of Storey Club). Any specific out of hours building access arrangements will be communicated to you prior to move in."

3. **Q:** "What broadband services and speeds are available?"
   **A:** "At Storey we have fast, secure, resilient WiFi, complete with private network infrastructure. Office based connectivity: 1-10 Gbps primary line and a backup line."

4. **Q:** "Are meeting rooms available in Storey spaces?"
   **A:** "There are a number of meeting rooms available within the shared spaces which are bookable through our interactive portal. All shared meeting rooms include: Flat Screen TV; HDMI and VGA Connections; Power Provision; and WiFi. You also have the option of installing dedicated meeting rooms within your private office space. Storey Club is also available to Storey customers which offers meeting and event space."

5. **Q:** "What additional services do you provide?"
   **A:** "We can provide additional services such as: telephony; confidential waste disposal; handyman services; additional cleaning; and security services (if you were to host an event in your space). Access to Storey Club including the lounge and cafe is included in the Storey price. There is an additional cost for event space."

6. **Q:** "What services and facilities are included in the price?"
   **A:** "Storey services include: daytime and late night cleaning; daily waste collection; recycling; maintenance; and a dedicated Community Manager. Our facilities include: on-site showers with fresh towels; bike racks and storage; coffee machines and dishwashers as well as filtered water stations; and personalised access passes."

## Section 3: CTA Banner

### DOM Structure
```
div.banner--wrap.banner--wrap--footer.bg-col--forest-primary
  section.banner
    img (background image)
    div
      h4 "This is Storey. Flexible workspaces, for working better"
      div (links)
        a.link.link--arrow "Workspace"
        a.link.link--arrow "Event space"
        a.link.link--arrow "Meeting space"
```

### Computed Styles

#### CTA Container
- background-color: rgb(39, 64, 56)
- padding: 0 0 150px
- border-radius: 0 0 10px 10px

#### CTA Title (h4)
- font-size: 30px
- font-weight: 400
- font-family: GT-Walsheim-Medium
- line-height: 30px
- color: rgb(251, 239, 221)

#### CTA Links
- display: flex
- gap: 20px

#### CTA Link
- font-size: 16px
- font-weight: 400
- font-family: GT-Walsheim-ProLight
- line-height: 18.56px
- color: rgb(251, 239, 221)
- display: flex
- cursor: pointer
- transition: 0.35s

### CTA Content
- **Title:** "This is Storey. Flexible workspaces, for working better"
- **Links:**
  - "Workspace" → /workspace/
  - "Event space" → /event-space/
  - "Meeting space" → /meeting-space/

## Responsive Behavior
- **Desktop (1440px):** Hero at 80px h1, accordion at 24px questions, max-width 1080px centered
- **Tablet (768px):** Hero at ~65px h1, accordion maintains layout
- **Mobile (390px):** Hero at 55px h1, accordion questions at 22px, full-width layout
- **Breakpoint:** Layout adjusts at ~768px

## Text Content (verbatim)
- H1: "FAQs"
- Description: "Private, fully personalised offices with only the best in shared spaces. Created by British Land and world-class architects and designers, with sustainability and productivity front of mind."
- Back link: "Back to previous section"
- Category links: "Storey Club", "Workspace", "Meeting space", "Event space"
- CTA title: "This is Storey. Flexible workspaces, for working better"
- CTA links: "Workspace", "Event space", "Meeting space"
