import {takeEvery, call, put} from 'redux-saga/effects';
import * as types from '../types';

const getMoviesFromApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log(json[0]);
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

//worker function
function* getAllUsersData() {
  console.log('came to saga');

  try {
    const getUserFromAPI = yield getMoviesFromApi();
    const randomIndex = Math.floor(Math.random() * 10);
    const randomUserData = getUserFromAPI[randomIndex];
    //API Data handling
    const payload = {
      id: randomUserData.id,
      name: randomUserData.name,
      email: randomUserData.email,
    };

    yield put({type: types.GET_USERS, payload: payload});
  } catch (error) {
    //Error Handling
    console.log('error in saga', error);
  }
}

//watcher function
function* fetchAllUserData() {
  yield takeEvery(types.GET_USERS_REQUEST, getAllUsersData);
}

export default fetchAllUserData;
