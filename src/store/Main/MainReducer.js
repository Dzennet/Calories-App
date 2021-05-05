import { SET_ERROR, TOGGLE_IS_LOADING } from "./MainConstants";

let initState = {
  isLoading: false,
  error: null,
};

const MainReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default MainReducer;
