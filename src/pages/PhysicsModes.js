import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import './pages.css';
import ExamateLogo from '../structure/logo';
import { 
  HomeButton, MathButton, ChemistryButton, PhysicsButton, MusicButton, CSButton
} from '../buttons';

const { Header, Footer, Content } = Layout;

function PhysicsMode() {
    return (
      <Layout>
        <Header>
          <Row>
            <Col span={2}><ExamateLogo/></Col>
            <Col span={2}><HomeButton/></Col>
            <Col span={2}><MathButton/></Col>
            <Col span={2}><ChemistryButton/></Col>
            <Col span={2}><PhysicsButton/></Col>
            <Col span={2}><MusicButton/></Col>
            <Col span={2}><CSButton/></Col>
          </Row>
        </Header>
        <Content className='background'>
          <div className='section'>
            <h1 id='h1'>Physics</h1>
            <p>Examate provides physics sets, starting with.
              Click on a button to choose the mode you want to learn. This site is currently under construction.</p>
            <Divider/>
            <Row gutter={[24, 24]}>
              <Col span={12}>
              <h1>Under Construction</h1>
              </Col>
              <Col span={12}>
              <h1>Under Construction</h1>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer className="foot">
          © Examate, 2021-2022
        </Footer>
      </Layout>
    );
  }
  
export default PhysicsMode; 