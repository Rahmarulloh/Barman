import { faker } from "@faker-js/faker";

export const Energetics = [
  {
    id: 1,
    size: "Small",
    image: "./assets/monster.jpg",
    name: "Monster | Energy",
    type: "Energetics",
    brand: "Monster",
    color: ["#d3f355ff", "#2AE8FD"],
    price: faker.commerce.price({ min: 2 }),
    stock: 10,
  },
  {
    id: 2,
    size: "Medium",
    image: "./assets/monster_blue.jpg",
    name: "Monster Blue | Energy | Zero Sugar",
    type: "Energetics",
    brand: "Monster",
    color: ["#d3f355ff", "#2AE8FD"],
    price: faker.commerce.price({ min: 2 }),
    stock: 10,
  },
];

export const drinkCategories = [
  {
    id: 1,
    name: "Cocktails",
    drinks: [],
  },
  {
    id: 2,
    name: "Energetics",
    drinks: Energetics,
  },
  {
    id: 3,
    name: "Soft drinks",
    drinks: [],
  },
  {
    id: 4,
    name: "Healthy drinks",
    drinks: [],
  },
  {
    id: 5,
    name: "Water",
    drinks: [],
  },
  {
    id: 6,
    name: "Fuzzy drinks",
    drinks: [],
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
