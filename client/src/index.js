import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js'

const store = createStore(
  rootReducer, 
  composeEnhancer(applyMiddleware(thunk, logger))
)

ReactDOM.render(<App store={store} />, document.getElementById('root'));

