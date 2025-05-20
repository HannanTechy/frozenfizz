# FrozenFizz Website

A dynamic, visually appealing website for the FrozenFizz cold drink brand featuring interactive product showcases and brand information.

## Features

- Responsive design that works on desktop and mobile devices
- Interactive product catalog with detailed information
- Store locator to find FrozenFizz retailers near you
- Testimonials section showcasing customer reviews
- Newsletter subscription for updates and special offers
- Contact form for customer inquiries
- Dark mode support
- Animated UI elements with smooth transitions

## Technology Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Express.js, Node.js
- **Database:** In-memory storage
- **Form Handling:** React Hook Form with Zod validation
- **State Management:** TanStack Query
- **UI Components:** shadcn/ui components

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/frozenfizz-website.git
   cd frozenfizz-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── assets/      # Images, icons, and other static assets
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions and constants
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main app component
│   │   └── main.tsx     # Entry point
├── server/              # Backend Express.js server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # In-memory data storage
├── shared/              # Shared code between client and server
│   └── schema.ts        # Data model schemas
└── public/              # Static assets
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.