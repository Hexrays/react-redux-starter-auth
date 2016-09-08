import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

// import the root reducer
import rootReducer from '../reducers/index';

const configureStore = () => {
  const middlewares = [reduxThunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
};

const store = configureStore();

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
    module.hot.accept('../reducers/', () =>{
        const nextRootReducer = require('../reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;