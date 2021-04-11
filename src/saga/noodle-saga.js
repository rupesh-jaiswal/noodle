import { call, put, takeLatest } from 'redux-saga/effects';
import NoodleActionTypes from '../state/noodle/noodle-action-types';
import { getImages, getNoodles } from '../api/noodle-api';
import { getNoodlesFailure, getNoodlesSuccess } from '../state/noodle/noodle-action-creators';

export function* getNoodlesSaga() {
    try {
        console.log('noodle saga');
        const { data: noodleData } = yield call(getNoodles);
        const { data: noodleImageData} = yield call(getImages);
        console.log(noodleData);
        console.log(noodleImageData);
        yield put(getNoodlesSuccess({ noodleData, noodleImageData}));
    } catch (error) {
        yield put(getNoodlesFailure(error));
    }
}
export function* watchNoodlesSaga() {
    yield takeLatest(
        NoodleActionTypes.NOODLES_FETCH_REQUESTED,
        getNoodlesSaga
    );
}
export default call(watchNoodlesSaga);
