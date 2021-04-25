import { ADD_PRODUCT_TO_MEAL } from "./MealConstants";

export const addProductToMeal = (productName) => ({
  type: ADD_PRODUCT_TO_MEAL,
  productName,
});
