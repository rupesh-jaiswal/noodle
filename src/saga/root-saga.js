import { all } from 'redux-saga/effects';
import noodleSaga from './noodle-saga';

export default function* watchAll() {
    yield all([noodleSaga]);
}
