import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import {rootSaga} from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
