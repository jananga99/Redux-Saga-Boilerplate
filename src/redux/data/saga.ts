import { PayloadAction } from "@reduxjs/toolkit";
import { Effect, ForkEffect, call, put, takeLatest } from 'redux-saga/effects';
import { IGetDataOutput } from "../../utils/interfaces";
import { dataActions } from "./slice";
import { getData } from "../../utils/services";

function* dataSaga(
    action: PayloadAction<number>,
): Generator<Effect, void> {
    const res = (yield call(getData, action.payload)) as IGetDataOutput;
    if (res.success && res.data) {
        yield put(dataActions.getSuccess(res.data));
    } else {
        yield put(dataActions.getFail(res.errorMessage ||''))
    }

}

export default function* dataSagas(): Generator<ForkEffect, void> {
    yield takeLatest(dataActions.get, dataSaga);
}
