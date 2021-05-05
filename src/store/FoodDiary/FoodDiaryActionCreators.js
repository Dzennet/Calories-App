import { ADD_PRODUCT, DELETE_PRODUCT } from "./FoodDiaryConstants";

let id = 1;

export const addProduct = (
  PRODUCT_TYPE,
  productName,
  weight,
  fat,
  carbohydrates,
  proteins,
  calories
) => ({
  type: ADD_PRODUCT,
  PRODUCT_TYPE,
  productName,
  weight,
  fat,
  carbohydrates,
  proteins,
  calories,
  productId: id++,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  productId,
});
