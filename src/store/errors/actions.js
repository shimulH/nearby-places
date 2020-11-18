import { CLOSE_SNACKBAR, SET_ERROR, HIDE_ERROR } from "./types";
export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});
export const setError = (error) => ({
  type: SET_ERROR,
  error,
});
export const hideError = () => ({
  type: HIDE_ERROR,
});
