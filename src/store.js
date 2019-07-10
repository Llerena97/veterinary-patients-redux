import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

// const initialState = {}

const middleware = [thunk]

const storageState = localStorage.getItem('appointments') ? JSON.parse(localStorage.getItem('appointments')) : []

const store = createStore(rootReducer, storageState, compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
