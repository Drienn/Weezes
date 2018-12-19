/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import api from './middleware/api';

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk, api)));
