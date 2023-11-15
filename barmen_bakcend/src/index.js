// src/index.ts
import express from "express";
import { Energetics, drinkCategories } from "./constants/constant.js";
import { addDrink, deleteDrink, putDrink } from "./users/admin.js";

const app = express();
const port = 4000;

app.get("/api/drinks", (req, res) => {
  res.send(drinkCategories);
});

app.post("/api/drinks",addDrink);
app.delete("api/drinks/:drinkID",deleteDrink);
app.put("api/drinks/:drinkID",putDrink);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
