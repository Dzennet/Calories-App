import { GET_ALL_PRODUCTS_BY_SEARCH } from "./FoodDatabaseConstants";

let initState = {
  allProductsBySearch: [],
};

const FoodDatabaseReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_BY_SEARCH:
      return {
        ...state,
        allProductsBySearch: action.allProductsBySearch,
      };

    default:
      return state;
  }
};

export default FoodDatabaseReducer;
