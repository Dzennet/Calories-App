import { ADD_PRODUCT_TO_BREAKFAST } from "./BreakfastConstants";

export const addProductToBreakfast = (productName) => ({
  type: ADD_PRODUCT_TO_BREAKFAST,
  productName,
});
