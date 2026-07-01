---
name: Kinetic Logistics Logic
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434654'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#535f71'
  on-secondary: '#ffffff'
  secondary-container: '#d7e3f9'
  on-secondary-container: '#596577'
  tertiary: '#004e33'
  on-tertiary: '#ffffff'
  tertiary-container: '#006846'
  on-tertiary-container: '#5debaf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#d7e3f9'
  secondary-fixed-dim: '#bbc7dc'
  on-secondary-fixed: '#101c2c'
  on-secondary-fixed-variant: '#3c4859'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  sidebar-navy: '#0F172A'
  status-warning: '#F59E0B'
  status-error: '#EF4444'
  background-subtle: '#F8FAFC'
  border-light: '#E2E8F0'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  sidebar-width: 260px
  card-padding: 20px
---

## Brand & Style

This design system is built for a high-performance logistics and order tracking environment. The brand personality is **reliable, efficient, and technologically advanced**, prioritizing clarity of information over decorative elements. The target audience includes dispatchers, warehouse managers, and corporate clients who require rapid data interpretation.

The chosen design style is **Corporate / Modern** with a focus on **Tonal Layering**. It utilizes a clean, "High-Density" layout that maintains breathability through generous white space and a structured hierarchy. The interface feels systematic and industrial yet approachable, moving away from the starkness of traditional logistics software toward a more user-centric, SaaS-inspired aesthetic. Key visual traits include refined iconography, subtle depth, and high-contrast status indicators to ensure critical tracking data is never missed.

## Colors

The palette is anchored by a deep **Sidebar Navy** (`#0F172A`) to provide a strong structural frame and professional grounding. The **Primary Blue** (`#0052CC`) is used strategically for high-intent actions, primary buttons, and active tracking states, ensuring they stand out against the neutral canvas. 

**Functional Color Usage:**
- **Success/Green:** Reserved for "Delivered" statuses, completion of multi-step wizards, and positive metric trends.
- **Warning/Amber:** Used for delays, pending approvals, or items requiring attention.
- **Error/Red:** Strictly for "Cancelled" orders, critical exceptions, or system alerts.
- **Neutrals:** A range of Slate grays is used for typography and secondary UI elements to maintain a calm, scannable environment. Backgrounds utilize a near-white Slate-50 for subtle contrast between containers.

## Typography

This design system uses **Inter** exclusively to leverage its exceptional legibility in data-heavy environments. The typographic scale is optimized for "scannability." 

- **Data Tables:** Use `body-md` for standard rows and `data-mono` for tracking IDs or SKU numbers to ensure character alignment and ease of reading.
- **Metric Cards:** Large numerals in `display-lg` should be used for primary KPIs to provide immediate impact upon dashboard entry.
- **Case Usage:** Labels use `label-md` with uppercase styling and slight tracking to differentiate them from body text without increasing font size, preserving vertical space.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. The sidebar remains fixed at `260px`, while the main content area utilizes a fluid 12-column grid.

- **Grid:** On desktop, use a 24px gutter. On mobile, transition to a single column with 16px margins.
- **Rhythm:** Spacing follows a 4px baseline. Most component spacing should be increments of 8px (8, 16, 24, 32).
- **Dashboard Views:** Metric cards at the top of the dashboard should span 3 columns each (4 cards per row) on desktop, reflowing to 6 columns (2 per row) on tablets.
- **Content Density:** High-density data tables should use 12px vertical padding per row, while informative cards use 20-24px padding to provide a "premium" professional feel.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. This approach minimizes visual noise while clearly separating the background from interactive elements.

- **Level 0 (Background):** `#F8FAFC` — Used for the main application canvas.
- **Level 1 (Cards/Tables):** `#FFFFFF` with a 1px border (`#E2E8F0`) and a very soft, diffused shadow (Offset: 0, 1px; Blur: 3px; Opacity: 0.05).
- **Level 2 (Hover/Active):** A slightly more pronounced shadow (Offset: 0, 4px; Blur: 6px; Opacity: 0.07) to indicate interactivity.
- **Level 3 (Modals/Popovers):** Higher elevation with a medium shadow (Offset: 0, 12px; Blur: 24px; Opacity: 0.1) and a backdrop blur of 4px on the content below to maintain focus.

Avoid heavy black shadows; instead, use shadows tinted with the primary navy color at very low opacity to maintain a "clean" feel.

## Shapes

The design system employs a **Rounded** shape language to soften the industrial nature of logistics data.

- **Standard Elements:** Buttons, input fields, and metric cards use a `0.5rem` (8px) corner radius.
- **Large Containers:** Multi-step wizard containers and integrated map placeholders use `rounded-lg` (1rem/16px) to define major sections.
- **Badges/Chips:** Status badges (e.g., "In Transit") use a fully rounded `pill` shape to distinguish them from interactive buttons.
- **Interactive States:** Focus rings should follow the element's curvature with a 2px offset.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Primary Blue background with white text. Height: 40px for standard, 48px for wizard actions.
- **Secondary Action:** Ghost style with Primary Blue border and text, or subtle light-gray background for less critical actions.
- **Input Fields:** White background, 1px `#E2E8F0` border. On focus, the border transitions to Primary Blue with a subtle 3px blue glow (outer shadow).

### Data Tables & Status Badges
- **Tables:** Use a subtle zebra-striping or 1px bottom borders. Headers are `label-md` with a background tint of `background-subtle`.
- **Badges:** Use "subtle" color backgrounds (e.g., 10% opacity of the status color) with high-contrast text of the same hue for maximum readability without overwhelming the user.

### Metric Cards
- Should include a "trend" indicator (small sparkline or percentage change) in the bottom right corner.
- Icons within cards should be contained in a soft-tinted circular background.

### Multi-step Wizards
- Uses a horizontal stepper at the top. Completed steps show a Tertiary Green checkmark; active steps show a Primary Blue circle with a white number.
- Wizard cards should be centered in the viewport with a maximum width of 800px to ensure focus.

### Map Placeholders
- Integrated maps should have a custom "Silver" or "Light" style to match the UI.
- Use custom markers: Primary Blue for current vehicle location, Navy for destination.