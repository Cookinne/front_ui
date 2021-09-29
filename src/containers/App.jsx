import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import { renderRoutes } from 'react-router-config';
import { shape } from 'prop-types';

import zhCN from 'antd/es/locale/zh_CN';

import PageLayout from '../layout';

class App extends Component {
  constructor(props) {
    super(props);
    window.reactHistory = props.history;
  }

  render() {
    const { route } = this.props;
    return (
      <ConfigProvider locale={zhCN}>
        <PageLayout>
          <div>{renderRoutes(route.routes)}</div>
        </PageLayout>
      </ConfigProvider>
    );
  }
}

App.propTypes = {
  history: shape().isRequired,
  route: shape().isRequired,
};

export default App;
