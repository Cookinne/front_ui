import React from 'react';
import { Redirect } from 'react-router-dom';

import App from '@containers/App';
import Index from '@containers/Index';
import Page1 from '@containers/Page1';
import Page2 from '@containers/Page2';

const routesConfig = [{
  component: App,
  routes: [
    {
      path: '/',
      exact: true,
      component: () => <Redirect to="/index" />,
    },
    {
      path: '/index',
      exact: true,
      strict: false,
      component: Index,
    },
    {
      path: '/page1',
      exact: true,
      strict: false,
      component: Page1,
    },
    {
      path: '/page2',
      exact: true,
      strict: false,
      component: Page2,
    },
  ],
}];

export default routesConfig;
