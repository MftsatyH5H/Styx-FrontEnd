import { Layout } from 'antd'
import React from 'react'
import SiderCom from '../_shared/sider/Sider'
import HeaderCom from '../_shared/header/Header'
import { Content } from 'antd/es/layout/layout'
function Home() {
  return (
    <Layout>
          <HeaderCom></HeaderCom>
          <Content></Content> 
          <SiderCom></SiderCom>
    </Layout>
  )
}

export default Home