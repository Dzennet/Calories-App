import { ADD_PRODUCT_TO_LUNCH } from "./LunchConstants";

let initState = {
  lunchProducts: [],
};

const LunchReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_LUNCH:
      return {
        ...state,
        lunchProducts: [
          { productName: action.productName },
          ...state.lunchProducts,
        ],
      };
    default:
      return state;
  }
};

export default LunchReducer;
