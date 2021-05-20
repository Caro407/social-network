import { AUTH_USER, DISCONNECT_USER } from './types.js';

const initialState = {
  is_connected: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {

    case AUTH_USER:
      return {
        ...state,
        is_connected: true,
        user: action.user
      }
    case DISCONNECT_USER:
      return {
        ...state,
        is_connected: false
      };
    default:
      return state;
  }
};

export default authReducer;
