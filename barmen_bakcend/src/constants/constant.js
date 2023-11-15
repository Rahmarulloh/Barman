import { faker } from "@faker-js/faker";

// Small: 0.25; Medium: 0.5; Large: 0.75

function getRandomNumber(min = 2, max = 10) {
  if (min < 0 || max < 0 || min > max) {
    throw new Error(
      "Invalid input: min and max must be non-negative, and min must be less than or equal to max."
    );
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Energetics = [
  {
    id: 1,
    size: "Small",
    image: "./assets/monster.jpg",
    name: "Monster | Energy",
    type: "Energetics",
    brand: "Monster",
    color: ["black", "blue", "red", "Sky Blue", "Violet"],
    price: faker.commerce.price({ min: 2, max: 9, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 2,
    size: "Medium",
    image: "./assets/monster_blue.jpg",
    name: "Monster Blue | Energy | Zero Sugar",
    type: "Energetics",
    brand: "Monster",
    color: ["black", "blue", "red", "Sky Blue", "Violet"],
    price: faker.commerce.price({ min: 2, max: 10, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 3,
    size: "Large",
    image: "./assets/monster_red.jpg",
    name: "Monster Red | Energy | Ultra Red",
    type: "Energetics",
    brand: "Monster",
    color: ["black", "blue", "red", "Sky Blue", "Violet"],
    price: faker.commerce.price({ min: 2, max: 10, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 4,
    size: "Small",
    image: "./assets/sky_blue.jpg",
    name: "Monster Juice| Energy",
    type: "Energetics",
    brand: "Monster",
    color: ["black", "blue", "red", "Sky Blue", "Violet"],
    price: faker.commerce.price({ min: 2, max: 9, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 5,
    size: "Small",
    image: "./assets/monster_violet.jpg",
    name: "Monster Violet| Energy",
    type: "Energetics",
    brand: "Monster",
    color: ["black", "blue", "red", "Sky Blue", "Violet"],
    price: faker.commerce.price({ min: 2, max: 9, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 6,
    size: "Medium",
    image: "./assets/fuel_blue.jpg",
    name: "Black Rock | Fuel | Blue",
    type: "Energetics",
    brand: "FUEL",
    color: ["#489ea7ff", "#121212ff", "#d1d1d1ff"],
    price: faker.commerce.price({ min: 2, max: 5, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 7,
    size: "Medium",
    image: "./assets/fuel_white.jpg",
    name: "Red Rock | Fuel | White",
    type: "Energetics",
    brand: "FUEL",
    color: ["#489ea7ff", "#121212ff", "#d1d1d1ff"],
    price: faker.commerce.price({ min: 2, max: 5, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 8,
    size: "Large",
    image: "./assets/fuel.jpg",
    name: "Black Rock | Fuel | Black",
    type: "Energetics",
    brand: "FUEL",
    color: ["#489ea7ff", "#121212ff", "#d1d1d1ff"],
    price: faker.commerce.price({ min: 2, max: 5, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
];

export const Cocktails = [
  {
    id: 1,
    name: "Purple Rain",
    image: "./assets/purple_cocktail.jpg",
    ingredients: ["Gin ", "Blue Curaçao", "Lime juice", "Salt"],
    glassType: "Margarita glass",
    garnish: "Rosemary",
    stock: getRandomNumber(),
  },
  {
    id: 2,
    name: "Magic Galaxy",
    image: "./assets/magic_galaxy.jpg",
    ingredients: ["Butterfly Pea", "Flower Tea", "Rosella Tea", "Lemon Soda"],
    glassType: "Martini glass",
    garnish: "Lemon twist",
    stock: getRandomNumber(),
  },
  {
    id: 3,
    name: "Cantarito Tequila",
    image: "./assets/cantarito_tequila.jpg",
    ingredients: ["Coarse Salt", "Ounces Tequila", "Lime Juice", "Lemon Soda"],
    glassType: "Martini glass",
    garnish: "Lemon twist",
    stock: getRandomNumber(),
  },
];

export const SoftDrinks = [
  {
    id: 1,
    size: "Small",
    brand: "Coca-Cola",
    type: "Soft drinks",
    color: ["green", "white"],
    name: "Sprite | Lemon-Lime",
    image: "./assets/sprite.jpg",
    price: faker.commerce.price({ min: 2, max: 3, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 2,
    size: "Medium",
    brand: "Coca-Cola",
    type: "Soft drinks",
    color: ["green", "white"],
    name: "Diet Coke",
    image: "./assets/diet_coke.jpg",
    price: faker.commerce.price({ min: 2, max: 4, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
];

export const HealthyDrinks = [
  {
    id: 1,
    brand: "HealthCo",
    type: "Soft drinks",
    color: ["green", "white", "red"],
    name: "Avocado Smoothie",
    image: "./assets/smoothie.jpg",
    vitamins: ["Vitamin A", "Vitamin C"],
    price: faker.commerce.price({ min: 3, max: 6, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 2,
    type: "Soft drinks",
    name: "Coconut Water",
    brand: "Tropical Oasis",
    color: ["green", "white", "red"],
    image: "./assets/coconut.jpg",
    vitamins: ["Potassium", "Magnesium"],
    price: faker.commerce.price({ min: 4, max: 5, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 3,
    type: "Soft drinks",
    name: "Hibiscus Tea",
    brand: "Herbal Elixirs",
    color: ["green", "white", "red"],
    image: "./assets/hibiscus_tea.jpg",
    vitamins: ["Antioxidants"],
    price: faker.commerce.price({ min: 2, max: 3, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
];

// Large: 1.5L, Medium: 1L, Small: 0.5L
export const Water = [
  {
    id: 1,
    size: "Large",
    brand: "Aqua",
    type: "Water",
    color: ["white", "yellow"],
    name: "bon.aqua | aqua mineral natural | 1.5L",
    image: "./assets/bon_aqua.jpg",
    price: faker.commerce.price({ min: 2, max: 3, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 2,
    size: "Medium",
    brand: "Aqua",
    type: "Water",
    color: ["white", "yellow"],
    name: "bon.aqua | aqua mineral natural | 1L",
    image: "./assets/bon_aqua_1L.jpg",
    price: faker.commerce.price({ min: 2, max: 3, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 3,
    size: "Small",
    brand: "Aqua",
    type: "Water",
    color: ["white", "yellow"],
    name: "bon.aqua | aqua mineral natural | 0.5L",
    image: "./assets/bon_aqua_05L.jpg",
    price: faker.commerce.price({ min: 2, max: 3, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 4,
    size: "Medium",
    brand: "FreshQuench",
    type: "Water",
    color: ["white", "yellow"],
    name: "JUST LEMON WATER | 1L",
    image: "./assets/lemon_water.png",
    price: faker.commerce.price({ min: 2, max: 3, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 5,
    size: "Medium",
    brand: "TropiaHydrate",
    type: "Water",
    color: ["white", "yellow"],
    name: "CoCo | 100% Pure CocoNut WATER | 1L",
    image: "./assets/coconut_water.jpg",
    price: faker.commerce.price({ min: 2, max: 3, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
];

export const FuzzyDrinks = [
  {
    id: 1,
    brand: "Coca Cola",
    type: "Soft drinks",
    color: ["green", "white", "red"],
    name: "Coca Cola",
    image: "./assets/coca_cola.jpg",
    vitamins: ["Vitamin A", "Vitamin C"],
    price: faker.commerce.price({ min: 3, max: 6, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  }
]

export const drinkCategories = [
  {
    id: 1,
    name: "Cocktails",
    drinks: Cocktails,
  },
  {
    id: 2,
    name: "Energetics",
    drinks: Energetics,
  },
  {
    id: 3,
    name: "Soft drinks",
    drinks: SoftDrinks,
  },
  {
    id: 4,
    name: "Healthy drinks",
    drinks: HealthyDrinks,
  },
  {
    id: 5,
    name: "Water",
    drinks: Water,
  },
  {
    id: 6,
    name: "Fuzzy drinks",
    drinks: FuzzyDrinks,
  },
  {
    id: 7,
    name: "Coffee",
    drinks: [],
  },
  {
    id: 8,
    name: "Cold drinks",
    drinks: [],
  },
  {
    id: 9,
    name: "Tea",
    drinks: [],
  },
  {
    id: 10,
    name: "Juice",
    drinks: [],
  },
];
