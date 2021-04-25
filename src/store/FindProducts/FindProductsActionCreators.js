import { FindProductsAPI } from "../../api/api";
import { GET_PRODUCTS } from "./FindProductsConstants";

const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products,
});

export const getProductsByName = (productName) => async (dispatch) => {
  const response = await FindProductsAPI.getProductsByName(productName);
  dispatch(getProducts(response.hints));
};
