# Netflix UI Clone 🎬

A frontend-only Netflix UI clone built using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**. This project replicates the look and feel of the Netflix India homepage, including the hero section, dynamic movie rows, Top 10 trending list, and a dedicated watch page for playing trailers.

## ✨ Features
- **Fully Responsive:** Optimized for desktop, tablet, and mobile screens.
- **Dynamic Hero Section:** Large backdrop with movie metadata and play buttons.
- **Horizontal Movie Rows:** Smooth sliding with hover-activated left/right navigation arrows.
- **Top 10 "Trending Now":** Displays big outlined numbers (1-10) next to the posters, just like real Netflix.
- **Interactive Cards:** Hovering over a card scales it up and reveals a play overlay.
- **"More Reasons to Join" Section:** Gradient feature cards matching the modern Netflix layout.
- **Detailed Footer:** Includes email signup CTA, multi-column links, and language selector.
- **Dedicated Watch Page (`watch.html`):** Clicking any poster redirects to a page that plays the movie's YouTube trailer.

## 🛠️ Tech Stack
- **HTML5** - Structure
- **Tailwind CSS** (via CDN) - Styling and responsiveness
- **Vanilla JavaScript** - Dynamic content rendering and slider logic

## 📂 Folder Structure

project/
├── index.html          # Home page
├── watch.html          # Trailer/Watch page
├── css/
│   └── style.css       # Custom CSS (overlays, slider arrows, Top 10 styling)
└── js/
    ├── data.js         # Movie library and row configurations
    ├── ui.js           # Reusable UI functions (card & row creation)
    ├── home.js         # Home page logic (hero + rows)
    └── watch.js        # Watch page logic (URL params + trailer loading)
