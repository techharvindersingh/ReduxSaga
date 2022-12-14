// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import fetchAllUserData from './sagas/index';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fetchAllUserData()]);
}
