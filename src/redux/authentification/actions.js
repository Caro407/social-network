import { AUTH_USER, DISCONNECT_USER } from './types.js';

export const authUser = () => {
  return {
    type: AUTH_USER
  }
};

export const disconnectUser = () => {
  return {
    type: DISCONNECT_USER
  }
};
