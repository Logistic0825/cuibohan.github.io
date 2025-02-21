"use client"
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/navigation';

const { Header, Sider, Content } = Layout;
const LayoutPage = ( props ) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleMenuClick = (e) => {
    switch (e.key) {
        case '1':
            router.push('/blogpage')
            break
        case '2':
            router.push('/')
            break
        default:
            break
    }
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          className='h-screen'
          defaultSelectedKeys={['1']}
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '博客网站',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '金牌聊天机',
            },
            // {
            //   key: '3',
            //   icon: <UploadOutlined />,
            //   label: 'nav 3',
            // },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutPage