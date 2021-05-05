import { SET_ERROR, TOGGLE_IS_LOADING } from "./MainConstants";

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});
