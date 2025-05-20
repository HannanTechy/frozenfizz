import { Product, StoreLocation, Testimonial, SocialPost } from "@shared/schema";

// Mock products data
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Citrus Splash",
    description: "A refreshing mix of lemon, lime, and a hint of orange with delicate fizz.",
    price: "$2.49",
    imageUrl: "https://images.unsplash.com/photo-1625772299149-c8fef38de160?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
  {
    id: 2,
    name: "Berry Blast",
    description: "A perfect blend of strawberries, blueberries, and raspberries with icy fizz.",
    price: "$2.49",
    imageUrl: "https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
  {
    id: 3,
    name: "Tropical Paradise",
    description: "Exotic blend of pineapple, mango, and passion fruit with a bubbly twist.",
    price: "$2.49",
    imageUrl: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
  {
    id: 4,
    name: "Cool Mint",
    description: "Refreshing mint with a hint of cucumber and light carbonation.",
    price: "$2.49",
    imageUrl: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
];

// Mock store locations data
export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 1,
    name: "City Market Grocery",
    address: "123 Main Street, Anytown, CA 91234",
    hours: "Open today: 8am - 9pm",
    phone: "555-123-4567",
    distance: "0.8 miles",
  },
  {
    id: 2,
    name: "Corner Convenience",
    address: "456 Oak Avenue, Anytown, CA 91234",
    hours: "Open today: 7am - 11pm",
    phone: "555-987-6543",
    distance: "1.2 miles",
  },
];

// Mock testimonials data
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Fitness Enthusiast",
    content: "FrozenFizz Cool Mint is my go-to refreshment after a long workout. Nothing beats that icy sensation and perfect level of fizziness!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Mom of Three",
    content: "Tropical Paradise is like a vacation in a can! I keep my fridge stocked with FrozenFizz for hot summer days. The whole family loves them!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    id: 3,
    name: "Miguel Diaz",
    role: "Professional Bartender",
    content: "As a bartender, I love using FrozenFizz as a mixer. The Citrus Splash makes the perfect base for so many creative cocktails. My customers can't get enough!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
];

// Mock social posts data
export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 1,
    imageUrl: "https://pixabay.com/get/g37ef4085c4321be11d034653793ed84841dd6b5ce7f66f8e6227ca190ef82065f45f9c9d205bd818d6958f9eb0b852554400882b945690bdfb47024b3b863226_1280.jpg",
    altText: "Social media post - FrozenFizz at the beach",
  },
  {
    id: 2,
    imageUrl: "https://pixabay.com/get/g8242133836dd6374500db07facdc7d621960ff273989fdaca6d693679bb005df03997dcb3e92f2325579a95662c102743ddae8e0a70212035f629a0d150beeea_1280.jpg",
    altText: "Social media post - FrozenFizz with meal",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    altText: "Social media post - Friends with FrozenFizz",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    altText: "Social media post - FrozenFizz in ice bucket",
  },
];
