import { put, takeLatest } from "redux-saga/effects";
import { clearDuck as ClearSession } from "state/session/actions";
import { clearDuck as ClearShop } from "state/shop/actions";
import * as types from "../types";

function* workerClearStore() {
	yield put(ClearSession());
	yield put(ClearShop());
}

export function* watchClearStore() {
	yield takeLatest(types.CLEAR_STORE, workerClearStore);
}

export default [watchClearStore];
