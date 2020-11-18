import { map } from "./types";

const initialState = {
  venues: [],
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case map.GET_VENUES_SUCCESS:
      return {
        ...state,
        venues: action.payload.data.response.groups[0].items,
      };
    default:
      return state;
  }
};
