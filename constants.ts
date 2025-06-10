
import { FoodItem, FoodCategory } from './types';

export const MENU_ITEMS: FoodItem[] = [
  {
    id: '1',
    name: 'Bangladeshi Fuchka',
    description: 'Crispy puris filled with spicy mashed potatoes, chickpeas, and tangy tamarind water. A classic street food delight!',
    price: '$8.99',
    imageUrl: 'https://images.unsplash.com/photo-1567337710221-b99628119af5?auto=format&fit=crop&w=600&q=80', // Reliable Unsplash image for Fuchka/Pani Puri
    category: FoodCategory.STREET_FOOD,
  },
  {
    id: '2',
    name: 'Doi Fuchka',
    description: 'A delightful twist on Fuchka, with crispy puris filled with potatoes, chickpeas, sweet & savory yogurt, and a sprinkle of spices.',
    price: '$9.99',
    imageUrl: 'https://images.unsplash.com/photo-1606239320038-9c41d4957a10?auto=format&fit=crop&w=600&q=80', // Reliable Unsplash image for Dahi Puri (similar to Doi Fuchka)
    category: FoodCategory.STREET_FOOD,
  },
  {
    id: '3',
    name: 'Halal Classic Smash Burger',
    description: 'Juicy halal beef patty smashed to perfection, with cheese, lettuce, tomato, and our signature sauce on a toasted bun.',
    price: '$11.99',
    imageUrl: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=600&q=80', 
    category: FoodCategory.BURGERS,
  },
  {
    id: '4',
    name: 'Double Smash Burger',
    description: 'Twice the flavor! Two juicy halal beef patties, double cheese, lettuce, tomato, and our secret sauce.',
    price: '$14.99',
    imageUrl: 'https://images.unsplash.com/photo-1605789536093-808945447e17?auto=format&fit=crop&w=600&q=80', 
    category: FoodCategory.BURGERS,
  },
  {
    id: '5',
    name: 'Spicy Naga Smash Burger',
    description: 'Our classic smash burger fired up with authentic Naga chili sauce, jalapenos, and pepper jack cheese. For the bold!',
    price: '$13.50',
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80', 
    category: FoodCategory.BURGERS,
  },
  {
    id: '6',
    name: 'Desi Chicken Sandwich',
    description: 'Grilled chicken pieces marinated in aromatic spices, served in toasted bread with fresh lettuce and a creamy mint chutney.',
    price: '$9.50',
    imageUrl: 'https://images.unsplash.com/photo-1625220122072-a7a41900fdc9?auto=format&fit=crop&w=600&q=80', // Reliable Unsplash image for Chicken Sandwich
    category: FoodCategory.SPECIALS,
  },
  {
    id: '7',
    name: 'Authentic Masala Chaa',
    description: 'Traditional Bangladeshi tea brewed with aromatic spices, milk, and a touch of sweetness. The perfect comfort drink.',
    price: '$3.99',
    imageUrl: 'https://images.unsplash.com/photo-1594576858607-f39007f89989?auto=format&fit=crop&w=600&q=80', 
    category: FoodCategory.BEVERAGES,
  },
  {
    id: '8',
    name: 'Creamy Sweet Lassi',
    description: 'A refreshing and traditional yogurt-based drink, sweetened to perfection. A cooling delight.',
    price: '$4.99',
    imageUrl: 'https://images.unsplash.com/photo-1626801029365-0700c8941244?auto=format&fit=crop&w=600&q=80', // Reliable Unsplash image for Lassi
    category: FoodCategory.BEVERAGES,
  }
];
