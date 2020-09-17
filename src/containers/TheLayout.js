import React from 'react';
import { Layout } from 'antd';
import { TheSidebar, TheHeader, TheContent, TheFooter } from './index';

export default function TheLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TheSidebar />
      <Layout className="site-layout">
        <TheHeader />
        <TheContent />
        <TheFooter />
      </Layout>
    </Layout>
  );
}
