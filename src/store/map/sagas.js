import { all, put, takeEvery } from "redux-saga/effects";

import axios from "axios";
import { map } from "./types";

function* getVenues(action) {
  console.log(action);
  try {
    const endPoint = process.env.REACT_APP_FOURSQUARE_BASE_URL;
    const parameters = {
      client_id: process.env.REACT_APP_CLIENT_ID_FOURSQUARE,
      client_secret: process.env.REACT_APP_SECRET_ID_FOURSQUARE,
      ll: `${action.latLang.lat}, ${action.latLang.lng}`,
      query: "food",
      v: "20182507",
      radius: "3000",
    };

    const venues = yield axios.get(endPoint + new URLSearchParams(parameters));
    yield put({ type: map.GET_VENUES_SUCCESS, payload: venues });
  } catch (error) {
    yield put({ type: map.GET_VENUES_FAIL, payload: error });
  }
}

export default function* mapSaga() {
  yield all([takeEvery(map.GET_VENUES, getVenues)]);
}
