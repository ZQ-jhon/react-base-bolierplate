import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import React, { useState, Fragment } from 'react';
import { StatisticComponent } from '../statistic/statistic';

const { Header, Footer, Sider, Content } = Layout;


export function LayoutComponent() {
    const [collapsed, setCollapsed] = useState(false);
    const [index, setIndex] = useState(0);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={isCollapsed => setCollapsed(isCollapsed)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['overview']} mode="inline">
                    <Menu.Item key="overview" style={{ textAlign: 'left' }} onClick={() => setIndex(0)}>
                        <Icon type="pie-chart" />
                        <span>Overview</span>
                    </Menu.Item>
                    <Menu.Item key="detail" style={{ textAlign: 'left' }} onClick={() => setIndex(1)}>
                        <Icon type="desktop" />
                        <span>Detail</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                    <h2> Account Visual</h2>
                </Header>
                <Content style={{ margin: '0 16px', display: index === 0 ? 'block' : 'none' }} >
                    <StatisticComponent />
                </Content>
                <Content style={{ margin: '0 16px', display: index === 1 ? 'block' : 'none' }}>
                    Detail of spend
                    </Content>
                <Footer style={{ textAlign: 'center' }}>

                    Dev by &nbsp;
                    <a href="http://www.zq-jhon.club">
                        jhon
                    </a>
                    &nbsp;
                    ©2020 Powered by  <a href="https://ant.design/docs/react/introduce-cn"> Ant UED  </a>

                </Footer>
            </Layout>
        </Layout>
    );
}
