import { ADD_PRODUCT, DELETE_PRODUCT } from "./FoodDiaryConstants";

let initState = {
  myAddedProducts: [],
};

const FoodDiaryReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        myAddedProducts: [
          {
            PRODUCT_TYPE: action.PRODUCT_TYPE,
            productName: action.productName,
            weight: action.weight,
            fat: action.fat,
            carbohydrates: action.carbohydrates,
            proteins: action.proteins,
            calories: action.calories,
            productId: action.productId,
          },
          ...state.myAddedProducts,
        ],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        myAddedProducts: state.myAddedProducts.filter(
          (product) => product.productId !== action.productId
        ),
      };

    default:
      return state;
  }
};

export default FoodDiaryReducer;
