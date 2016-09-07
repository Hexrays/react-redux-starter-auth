import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

import App from '../components/App';
import Home from '../components/Home';
import Tasks from '../components/Tasks';
import PageOneContainer from '../containers/PageOneContainer';
import PageTwoContainer from '../containers/PageTwoContainer';

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/page1" component={PageOneContainer}></Route>
                <Route path="/page2" component={PageTwoContainer}></Route>
            </Route>
        </Router>
    </Provider>
);

export default routes;