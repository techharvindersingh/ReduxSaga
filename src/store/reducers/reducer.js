import * as types from './../types';
const initialState = {
  id: '',
  name: '',
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS: {
      const {id, name, email} = action.payload;
      return {...state, id: id, name: name, email: email};
    }
    default:
      return state;
  }
};

export {reducer};
