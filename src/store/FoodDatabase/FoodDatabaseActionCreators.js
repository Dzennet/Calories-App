import { FindProductsAPI } from "../../api/api";
import { GET_ALL_PRODUCTS_BY_SEARCH } from "./FoodDatabaseConstants";
import { toggleIsLoading, setError } from "../Main/MainActionCreators";

const getAllProductsBySearch = (allProductsBySearch) => ({
  type: GET_ALL_PRODUCTS_BY_SEARCH,
  allProductsBySearch,
});

export const getProductsByName = (productName) => async (dispatch) => {
  try {
    dispatch(setError(null));
    dispatch(toggleIsLoading(true));
    const response = await FindProductsAPI.getProductsByName(productName);
    if (response.hints.length === 0) {
      dispatch(setError("Ничего не найдено"));
    }
    dispatch(getAllProductsBySearch(response.hints));
    dispatch(toggleIsLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
