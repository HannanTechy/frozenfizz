import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.title = "FrozenFizz - Refreshingly Cool Beverages";

// Create a meta description tag for SEO
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Discover FrozenFizz, the ultimate refreshing beverage with unique flavors and icy cold sensation. Find stores, explore our products, and join our refreshing journey.';
document.head.appendChild(metaDescription);

// Add Open Graph tags for better social media sharing
const ogTitle = document.createElement('meta');
ogTitle.property = 'og:title';
ogTitle.content = 'FrozenFizz - Refreshingly Cool Beverages';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.property = 'og:description';
ogDescription.content = 'Discover FrozenFizz, the ultimate refreshing beverage with unique flavors and icy cold sensation.';
document.head.appendChild(ogDescription);

const ogType = document.createElement('meta');
ogType.property = 'og:type';
ogType.content = 'website';
document.head.appendChild(ogType);

// Add Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap';
document.head.appendChild(link);

// Add Remix icon for the UI icons
const remixIcon = document.createElement('link');
remixIcon.rel = 'stylesheet';
remixIcon.href = 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css';
document.head.appendChild(remixIcon);

createRoot(document.getElementById("root")!).render(<App />);
