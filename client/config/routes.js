import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

import App from '../components/App';
import LandingContainer from '../containers/LandingContainer';
import OrderContainer from '../containers/OrderContainer';
import SingleOrderContainer from '../containers/SingleOrderContainer';
import ListContainer from '../containers/ListContainer';

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingContainer}></IndexRoute>
                <Route path="/order" component={OrderContainer}></Route>
                <Route path="/list" component={ListContainer}></Route>
            </Route>
        </Router>
    </Provider>
);

export default routes;