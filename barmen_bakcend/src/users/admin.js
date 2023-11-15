import { faker } from "@faker-js/faker";
import { drinkCategories } from "../constants/constant.js";

export const admin = {
  login: "admin444@gmail.com",
  password: "111444",
};

export function addDrink(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const drink = {
      id: faker.string.uuid(),
      ...req.body,
    };

    drinkCategories.unshift(drink);
    res.send({
      data: drink,
      message: `Succesfully created drink`,
      success: true,
    });
  } else {
    return;
  }
}

export function deleteDrink(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const { drinkID } = req.params;

    const drinksIdx = drinkCategories.findIndex(
      (drink) => drink.id === drinkID
    );

    if (drinksIdx === -1)
      return res.status(404).send({
        data: null,
        message: `note found drink with id  ${drinkID}`,
        success: false,
      });

    const [deletedDrink] = drinkCategories.splice(drinksIdx, 1);
    res.send({ data: deletedDrink, message: null, success: true });
  } else {
    return;
  }
}

export function putDrink(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const { drinkID } = req.params;

    const drinksIdx = drinkCategories.findIndex(
      (drink) => drink.id === drinkID
    );

    if (drinksIdx)
      return res.status(404).send({
        data: null,
        message: `note found drink with id  ${drinkID}`,
        success: false,
      });

    drinkCategories[drinksIdx] = { ...drinkCategories[drinksIdx], ...req.body };
    res.send({
      data: drinkCategories[drinksIdx],
      message: "Successfully updated drink",
      success: true,
    });
  } else {
    return;
  }
}
