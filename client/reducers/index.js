import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import authReducer from './authReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  form,
  routing : routerReducer,
  auth    : authReducer,
  user    : userReducer
});


export default rootReducer;
