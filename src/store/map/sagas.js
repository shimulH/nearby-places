import { all, put, takeEvery } from "redux-saga/effects";

import axios from "axios";
import { map } from "./types";
import { SET_ERROR } from "../errors/types";

function* getVenues(action) {
  try {
    const endPoint = process.env.REACT_APP_FOURSQUARE_BASE_URL;
    const parameters = {
      client_id: process.env.REACT_APP_CLIENT_ID_FOURSQUARE,
      client_secret: process.env.REACT_APP_SECRET_ID_FOURSQUARE,
      ll: `${
        action.latLang.lat.length === 0 ? "23.781699" : action.latLang.lat
      }, ${action.latLang.lng.length === 0 ? "90.400519" : action.latLang.lng}`,
      query: "food",
      v: "20182507",
      radius: "3000",
    };

    const venues = yield axios.get(endPoint + new URLSearchParams(parameters));

    yield put({ type: map.GET_VENUES_SUCCESS, payload: venues });
  } catch (error) {
    yield put({ type: SET_ERROR });
  }
}

export default function* mapSaga() {
  yield all([takeEvery(map.GET_VENUES, getVenues)]);
}
