import { ADD_PRODUCT_TO_DINNER } from "./DinnerConstants";

let initState = {
  dinnerProducts: [],
};

const DinnerReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_DINNER:
      return {
        ...state,
        dinnerProducts: [
          { productName: action.productName },
          ...state.dinnerProducts,
        ],
      };
    default:
      return state;
  }
};

export default DinnerReducer;
