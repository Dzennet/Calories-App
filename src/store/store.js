import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import MainReducer from "./Main/MainReducer";
import FoodDatabaseReducer from "./FoodDatabase/FoodDatabaseReducer";
import FoodDiaryReducer from "./FoodDiary/FoodDiaryReducer";

const reducers = combineReducers({
  main: MainReducer,
  foodDatabase: FoodDatabaseReducer,
  foodDiary: FoodDiaryReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
