import { AUTH_USER, DISCONNECT_USER } from './types.js';

export const authUser = (user) => {
  return {
    type: AUTH_USER,
    user
  }
};

export const disconnectUser = () => {
  return {
    type: DISCONNECT_USER
  }
};
