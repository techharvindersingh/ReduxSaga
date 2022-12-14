import {combineReducers} from 'redux';
import {reducer as userReducer} from './reducers/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
