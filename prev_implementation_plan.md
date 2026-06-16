# GRC Navbar Redirection Fix & About Us Page Implementation

This plan details the changes to:
1. Fix navbar dropdown smooth scroll redirection for **Cyber Security** and **Manage Staffing** pages.
2. Implement the **About Us** page with full corporate details, leadership bios, timeline, philosophy, and a region-filtered office locations directory.
3. Integrate the **About Us** link in the GRC header navigation.

---

## User Review Required

> [!IMPORTANT]
> **Centralized Hash Scrolling in Layout.tsx:**
> Instead of duplicated, competing `useEffect` hooks in separate page components, we will implement a centralized, robust hash scroll handler in [Layout.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/components/layout/Layout.tsx). This handles:
> 1. Checking for hashes on page load or pathname changes.
> 2. Polling for the target element to render (critical for dynamic routes).
> 3. Applying a standard header offset to prevent sections from being covered by the sticky navbar.
> 4. Preventing competing smooth-scroll actions that cancel each other out.

---

## Proposed Changes

We will copy the assets, create a new data layer, design the About Us page, register its route, add it to the navbar, and centralize the routing scroll logic.

### 1. Copy Corporate Assets

#### [COPY] [leaders folder](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/public/leaders) to [govenics-grc leaders](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/public/leaders)
- Copy all 6 leadership portrait images:
  - `Vijayakumar MD1.JPG`
  - `Indirani Director.jpeg`
  - `Vishal ED.JPG`
  - `Varshithkumar ED.jpg`
  - `Rajkumar ED.jpeg`
  - `Yuvaraj CEO.jpg`

---

### 2. Centralized Scroll Refactoring

#### [MODIFY] [Layout.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/components/layout/Layout.tsx)
- Refactor the `useEffect` trigger:
  - If a location `hash` exists, disable general scroll-to-top.
  - Implement a polling search for the element ID matching the hash.
  - Scroll smoothly to the target element with a `-100px` offset to clear the fixed header.
  - If no `hash` is present, scroll smoothly to the top.

#### [MODIFY] [CyberSecurityPage.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/pages/CyberSecurityPage.tsx)
- Remove local `useEffect` scroll/hash listener to prevent conflict with [Layout.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/components/layout/Layout.tsx).

#### [MODIFY] [ManageStaffingPage.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/pages/ManageStaffingPage.tsx)
- Remove local `useEffect` scroll/hash listener to prevent conflict with [Layout.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/components/layout/Layout.tsx).

#### [MODIFY] [IndustryDetailPage.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/pages/IndustryDetailPage.tsx)
- Remove local `useEffect` scroll/hash listener to prevent conflict with [Layout.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/components/layout/Layout.tsx).

---

### 3. About Us Data Layer

#### [NEW] [about-page-data.ts](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/data/about-page-data.ts)
- Combine stats, mission/vision/values, timeline milestones, leadership lists, and locations (active and coming soon lists) to support the page structure.

---

### 4. About Us UI Implementation

#### [NEW] [AboutPage.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/pages/AboutPage.tsx)
- Build the page using:
  - **Panel 1: Slider Hero**: Reuse `GrcSliderHero` with corporate-themed slides.
  - **Panel 2: Statistics Grid**: Highlights (25+ Years, 12 Global Offices, 5000+ Security Experts, 1000+ Clients).
  - **Panel 3: Core Philosophy Section**: "Number of Guards per Site" vs "Intelligence per Square Foot" comparison cards.
  - **Panel 4: Mission & Vision Cards**: Render mission, vision, and core values.
  - **Panel 5: Leadership Board**: Board of Directors (S. Vijayakumar, Indiradevi, V. Vishalkumar) and Executive Management (V. Varshithkumar, Rajkumar Sankaran, S. Yuvaraj). Show beautiful cards with expandable bio/description drawers or hover details.
  - **Panel 6: Growth Timeline**: Standard vertical step design.
  - **Panel 7: Office Locations Directory**:
    - Interactive region filtering (All, South, North, East, West, Islands).
    - Text search for office city.
    - Separate grids for "Active Branches" (with addresses, phones, emails) and "Coming Soon Centers".

---

### 5. Routing & Navigation Integration

#### [MODIFY] [App.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/App.tsx)
- Import and register route `<Route path="/about" element={<AboutPage />} />`.

#### [MODIFY] [Header.tsx](file:///e:/ISI%20Updates/23-Feb-2026%20-%20Copy/govenics-grc/src/components/layout/Header.tsx)
- Add "About Us" Link to the header navbar:
  - **Desktop Menu**: Placed between Home and Industry.
  - **Mobile Menu**: Add "About Us" as a primary link.

---

## Verification Plan

### Automated Verification
- Run `npm run build` inside `govenics-grc` to check for compilation issues.

### Manual Verification
- Test all links in the Manage Staffing and Cyber Security dropdowns to verify they smoothly scroll to the exact offering sections.
- Test the About Us navbar links.
- Filter the offices by region (e.g. South, Islands) and verify addresses render properly.
- Open leadership bios to verify readability.
