import React from 'react';
import { Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import routesConfig from './routesConfig';

const history = createBrowserHistory();

const route = () => (
  <Router history={history}>
    <Switch>{renderRoutes(routesConfig)}</Switch>
  </Router>
);

export default route;
