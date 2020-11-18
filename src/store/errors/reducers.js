import { SET_ERROR, HIDE_ERROR } from "./types";

const initState = {
  loading: false,
  error: null,
  isOpen: false,
  success: false,
  snackbar: {
    isOpen: false,
    message: null,
    severity: null,
  },
};

export const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          isOpen: true,
          message: "Something Went Wrong",
          severity: "error",
        },
      };
    // case CLOSE_SNACKBAR:
    //   return {
    //     ...state,
    //     snackbar: {
    //       ...state.snackbar,
    //       isOpen: false,
    //     },
    //   };

    case HIDE_ERROR:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};
