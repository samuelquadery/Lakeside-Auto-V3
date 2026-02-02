# Lakeside Auto - Premium Automotive Website

A modern, premium single-page React application for Lakeside Auto, Richmond's elite automobile specialists.

## Design Features

- **Industrial After-Dark Theme**: Deep slate (#1A1A1B) with High-Octane Crimson (#D7263D) accents
- **Glassmorphism Effects**: Semi-transparent backgrounds with backdrop blur
- **Framer Motion Animations**: Smooth, professional transitions throughout
- **Fully Responsive**: Optimized for all device sizes

## Tech Stack

- React 18 (Vite)
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)
- @react-google-maps/api

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Maps API Key (for map functionality)

### Installation

```bash
# Install dependencies
npm install

# Copy environment file and add your Google Maps API key
cp .env.example .env

# Start development server
npm run dev
```

### Google Maps Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API
4. Create credentials (API Key)
5. Add your API key to `.env` file:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

## Project Structure

```
lakeside-auto/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Sticky header with glassmorphism
│   │   ├── Hero.jsx         # Full-screen hero with background
│   │   ├── Services.jsx     # Services grid section
│   │   ├── ReviewMarquee.jsx # Google Reviews carousel
│   │   ├── MapSection.jsx   # Interactive dark-themed map
│   │   ├── Contact.jsx      # Appointment booking form
│   │   └── Footer.jsx       # Site footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Components Overview

### Header
- Sticky navigation with glassmorphism on scroll
- Mobile-responsive hamburger menu
- Quick contact info bar

### Hero
- Full-viewport background image
- Multi-layer gradient overlays
- Animated call-to-action buttons
- Feature badges

### Services
- 6 service cards with hover effects
- Pricing indicators
- Glassmorphism card design

### ReviewMarquee
- Custom horizontal marquee using Framer Motion
- Google Reviews integration ready
- Placeholder data included for development

### MapSection
- Dark-themed Google Map
- Custom marker styling
- Contact information cards
- Get Directions integration

### Contact
- Modern form with icons
- Service selection dropdown
- Form validation
- Success state animation

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```js
colors: {
  slate: {
    950: '#1A1A1B',  // Primary background
    // ...
  },
  crimson: {
    DEFAULT: '#D7263D',  // Accent color
    // ...
  },
}
```

### Fonts
The project uses Inter from Google Fonts. Modify in `index.html` and `tailwind.config.js`.

## Production Build

```bash
npm run build
npm run preview
```

## License

Private - Lakeside Auto © 2024
# Lakeside-Auto-V3
