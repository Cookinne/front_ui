import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Layout,
  Menu,
  Dropdown,
  Button,
} from 'antd';
import { shape, object } from 'prop-types';
import {
  DownOutlined,
  UserOutlined,
  HomeOutlined,
  GoldOutlined,
  FundViewOutlined,
} from '@ant-design/icons';

import logo from '@src/assets/favicon.png';
import beian from '@src/assets/beian.png';
import Clock from '@components/Clock';
import style from './style.less';

const {
  Header, Content, Sider, Footer,
} = Layout;

class PageLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { children, history: { location: { pathname = '' } } } = this.props;
    return (
      <Layout className={style.layout}>
        <Header className={style.header}>
          <div>
            <img src={logo} alt="logo" className={style.logo} />
            {' '}
            FRONT_UI
          </div>
          <div className={style.user}>
            <Clock />
            <div style={{ alignItems: 'center', marginLeft: 10 }}>
              <Dropdown
                overlay={(
                  <Menu onClick={this.clickSetting}>
                    <Menu.Item key="/accountSetting">账号设置</Menu.Item>
                  </Menu>
                )}
                trigger={['click']}
              >
                <Button icon={<UserOutlined />} onClick={(e) => e.preventDefault()}>
                  admin@admin.com
                  {' '}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu mode="inline" theme="dark" defaultSelectedKeys={['/index']} selectedKeys={[pathname]} className={style.menu}>
              <Menu.Item key="/index" icon={<HomeOutlined />}>
                <span>Index</span>
                <Link to="/index" />
              </Menu.Item>
              <Menu.Item key="/page1" icon={<FundViewOutlined />}>
                <span>PAGE1</span>
                <Link to="/page1" />
              </Menu.Item>
              <Menu.Item key="/page2" icon={<GoldOutlined />}>
                <span>PAGE2</span>
                <Link to="/page2" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            className={style['site-layout-content']}
            style={{ minHeight: 280 }}
          >
            <div className={style.containerDiv}>{children.props.children}</div>
            <Footer className={style.footer}>
              Front UI Platform &nbsp;&nbsp;
              <img src={beian} alt="工信部备案" />
              &nbsp;&nbsp; ©2021 Created by Cookinne
            </Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

PageLayout.propTypes = {
  children: shape().isRequired,
  history: object.isRequired,
};

export default withRouter(PageLayout);
