# 🚗 LUXURY.CAR — Premium Car Rental (React)

A fully responsive premium car rental web app built with React, Vite, Tailwind CSS, and React Router. Features a dark luxury design, dynamic car catalog with brand filtering and search, individual car pages with specs, booking form with validation, and smooth scroll-reveal animations.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white)

🔗 **Live Demo:** [luxury-cars-react](https://danielelytvynenko.github.io/luxury-cars-react/)

## Features

- **Multi-page SPA** — Home page + individual car detail pages via React Router
- **Car detail page** — full specs (engine, power, torque, top speed, acceleration, drivetrain)
- **Brand filter + search** — filter by brand and search by car name simultaneously
- **Booking form** — with client-side validation, error states, and success modal
- **Context API** — global state for selected car and modal via React Context
- **Scroll animations** — Intersection Observer-based reveal effects via custom hook
- **Mobile burger menu** — animated, full-screen navigation
- **Dark luxury design** — bold typography, yellow accent, smooth transitions
- **Fully responsive** — mobile, tablet, and desktop
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation

## Tech Stack

- React 18 (hooks, Context API, functional components)
- React Router v6 (client-side routing, dynamic params)
- Vite (fast dev server and build tool)
- Tailwind CSS (utility-first styling)
- JavaScript ES6+

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/DanieleLytvynenko/luxury-cars-react.git
   ```

2. Install dependencies:

   ```bash
   cd luxury-cars-react
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
luxury-cars-react/
├── src/
│   ├── assets/              # Images (logo, hero, car photos)
│   ├── components/
│   │   ├── Header.jsx       # Navigation with burger menu
│   │   ├── Hero.jsx         # Landing section
│   │   ├── HowItWorks.jsx   # Steps section
│   │   ├── Catalog.jsx      # Car grid with filters
│   │   ├── CarCard.jsx      # Individual car card
│   │   ├── FilterBar.jsx    # Brand filter + search input
│   │   ├── BookingForm.jsx  # Form with validation
│   │   ├── Modal.jsx        # Success modal
│   │   └── Footer.jsx       # Footer with dynamic year
│   ├── context/
│   │   └── BookingContext.jsx  # Global state (Context API)
│   ├── data/
│   │   └── cars.js          # Car catalog data with specs
│   ├── hooks/
│   │   └── useScrollReveal.js  # Intersection Observer hook
│   ├── pages/
│   │   ├── HomePage.jsx     # Main landing page
│   │   └── CarPage.jsx      # Individual car detail page
│   ├── App.jsx              # Router setup
│   ├── index.css            # Tailwind imports + globals
│   └── main.jsx             # Entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## What I Learned

- Building multi-page SPAs with React Router v6 and dynamic route parameters
- Managing global state with React Context API (useContext, createContext)
- Creating custom hooks (useScrollReveal with Intersection Observer)
- Component-based architecture with clean separation of concerns
- Form validation with controlled components and error state management
- Responsive design with Tailwind CSS utility classes
- Performance optimization with useMemo, useCallback, and lazy loading

## Also Check Out

🔗 [luxury-cars](https://github.com/DanieleLytvynenko/luxury-cars) — the same project built with vanilla JavaScript for comparison
