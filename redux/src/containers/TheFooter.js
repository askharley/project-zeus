import React from 'react'
import { Layout } from 'antd';

const TheFooter = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      Copyright askharley 2020
    </Layout.Footer>
  );
}

export default React.memo(TheFooter);
