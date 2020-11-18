import { combineReducers } from "redux";
import { mapReducer } from "./map/reducers";

export const rootReducer = combineReducers({ map: mapReducer });
