import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import FindProductsReducer from "./FindProducts/FindProductsReducer";
import thunk from "redux-thunk";
import BreakfastReducer from "./Breakfast/BreakfastReducer";
import DinnerReducer from "./Dinner/DinnerReducer";
import LunchReducer from "./Lunch/LunchReducer";
import MealReducer from "./Meal/MealReducer";

const reducers = combineReducers({
  findProductsStore: FindProductsReducer,
  breakfast: BreakfastReducer,
  dinner: DinnerReducer,
  lunch: LunchReducer,
  meal: MealReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
