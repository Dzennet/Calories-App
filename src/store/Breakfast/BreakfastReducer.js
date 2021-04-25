import { ADD_PRODUCT_TO_BREAKFAST } from "./BreakfastConstants";

let initState = {
  breakfastProducts: [],
};

const BreakfastReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BREAKFAST:
      return {
        ...state,
        breakfastProducts: [
          { productName: action.productName },
          ...state.breakfastProducts,
        ],
      };
    default:
      return state;
  }
};

export default BreakfastReducer;
