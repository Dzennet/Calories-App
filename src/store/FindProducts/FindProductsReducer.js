import { GET_PRODUCTS } from "./FindProductsConstants";

let initState = {
  products: [],
};

const FindProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default FindProductsReducer;
