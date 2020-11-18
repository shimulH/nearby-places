import { combineReducers } from "redux";
import { mapReducer } from "./map/reducers";
import { errorReducer } from "./errors/reducers";

export const rootReducer = combineReducers({
  map: mapReducer,
  error: errorReducer,
});
