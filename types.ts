
export enum FoodCategory {
  STREET_FOOD = "Bangladeshi Street Food Delights",
  BURGERS = "Halal Smash Burgers",
  BEVERAGES = "Refreshing Chaa & Drinks",
  SPECIALS = "Chef's Specials"
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: FoodCategory;
}
