import { AUTH_USER } from './types.js';

const initialState = {
  is_connected: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH_USER:
      return {
        ...state,
        is_connected: true
      };
    default:
      console.log("Attention ça pue" + action.type);
      return state;
  }
};

export default authReducer;
