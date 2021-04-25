import { ADD_PRODUCT_TO_LUNCH } from "./LunchConstants";

export const addProductToLunch = (productName) => ({
  type: ADD_PRODUCT_TO_LUNCH,
  productName,
});
