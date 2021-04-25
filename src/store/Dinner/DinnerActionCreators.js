import { ADD_PRODUCT_TO_DINNER } from "./DinnerConstants";

export const addProductToDinner = (productName) => ({
  type: ADD_PRODUCT_TO_DINNER,
  productName,
});
