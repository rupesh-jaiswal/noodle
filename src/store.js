import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watchAll from './saga/root-saga';
import * as reducers from './state/reducer-list';

const reducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

export default () => {
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(watchAll);
    return store;
};
