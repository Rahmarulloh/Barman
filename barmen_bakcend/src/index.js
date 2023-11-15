// src/index.ts
import express from "express";
import { Energetics, drinkCategories } from "./constants/constant.js";

const app = express();
const port = 4000;

app.get("/api/drinks", (req, res) => {
  res.send(drinkCategories);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
