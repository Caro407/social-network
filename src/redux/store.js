import { createStore } from 'redux';
import authReducer from './authentification/reducer';

const store = createStore(authReducer);

export default store;
