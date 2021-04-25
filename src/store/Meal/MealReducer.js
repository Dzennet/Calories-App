import { ADD_PRODUCT_TO_MEAL } from "./MealConstants";

let initState = {
  mealProducts: [],
};

const MealReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_MEAL:
      return {
        ...state,
        mealProducts: [
          { productName: action.productName },
          ...state.mealProducts,
        ],
      };
    default:
      return state;
  }
};

export default MealReducer;
