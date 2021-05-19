import { AUTH_USER, DISCONNECT_USER } from './types.js';

const initialState = {
  is_connected: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH_USER:
      return {
        ...state,
        is_connected: true
      }
    case DISCONNECT_USER:
      return {
        ...state,
        is_connected: false
      };
    default:
      console.log("Attention ça pue" + action.type);
      return state;
  }
};

export default authReducer;
