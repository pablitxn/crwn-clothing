// Redux Saga
import { fork, all } from "redux-saga/effects";
// Sagas
import { sagas as authSagas } from "state/auth/sagas";

const allSagas = [
  ...authSagas,
];

function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}

export default rootSaga;