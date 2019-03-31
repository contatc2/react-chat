// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


// internal modules
import * as serviceWorker from './serviceWorker';
import App from './components/app';
import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flats_reducer';
import selectFlatReducer from './reducers/select_flat_reducer';

// State and reducers
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectFlatReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));


ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>, document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
