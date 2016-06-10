import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import mainState from './mainState';

const rootReducer = combineReducers({mainState, routing: routerReducer});

export default rootReducer;