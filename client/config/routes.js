import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

import App from '../components/App';
import LandingContainer from '../containers/LandingContainer';
import PageOneContainer from '../containers/PageOneContainer';
import PageTwoContainer from '../containers/PageTwoContainer';

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingContainer}></IndexRoute>
                <Route path="/page2" component={PageOneContainer}></Route>
                <Route path="/page3" component={PageTwoContainer}></Route>
            </Route>
        </Router>
    </Provider>
);

export default routes;