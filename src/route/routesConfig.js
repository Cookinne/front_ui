import React from 'react';
import { Redirect } from 'react-router-dom';

import App from '@containers/App';
import Index from '@containers/Index';

const routesConfig = [{
  component: App,
  routes: [
    {
      path: '/',
      exact: true,
      component: () => <Redirect to="/index" />,
    },
    // 首页
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
      component: Index,
    },
    {
      path: '/page2',
      exact: true,
      strict: false,
      component: Index,
    },
  ],
}];

export default routesConfig;
