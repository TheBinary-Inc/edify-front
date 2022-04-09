import { createStore } from 'redux';
import authReducer from '../reducers/authReducer';

const store = createStore(authReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;