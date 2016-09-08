import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

import App from '../components/App';
import Home from '../components/Home';
import PageOneContainer from '../components/PageOneContainer';
import PageTwoContainer from '../components/PageTwoContainer';
import Feature from '../components/Feature';

import RequireAuth from '../components/auth/requireAuth';
import Signin from '../components/auth/signin';
import Signout from '../components/auth/signout';
import Signup from '../components/auth/signup';

import { AUTH_USER } from '../actions/types';

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if(token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER})
}

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/page1" component={PageOneContainer}></Route>
        <Route path="/page2" component={PageTwoContainer}></Route>
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
);

export default routes;