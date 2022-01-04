import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import './pages.css';
import ExamateLogo from '../structure/logo';
import { 
  HomeButton, MathButton, ChemistryButton, PhysicsButton, MusicButton, CSButton,
  BasicAdditionButton, BasicSubtractionButton, BasicMultiplicationButton, BasicDivisionButton,
  PythagorasButton, TrigonometryButton, LawOfSineAndCosineButton, ProportionalityAndRuleOfThreeButton,
  LinearFunctionButton, QuadraticFunctionButton, LinearEquationButton, QuadraticEquationButton, 
  ExponentsAndLogarithmsButton, ExponentialGrowthButton, LESAndMatricesButton, ScalesAndModelsButton,
  PolarCoordinatesButton, ScalarAndVectorProductButton, CombinatoricsButton, ProbabilityButton,
  DeviationButton, IntegrationButton } from '../buttons';

const { Header, Footer, Content } = Layout;

function MathMode() {
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
            <h1 id='h1'>Math</h1>
            <p>Examate provides math sets for all ages, starting with basic addition and subtraction and ending with derivatives and intregrals.
              Click on a button to choose the mode you want to learn.</p>
            <Divider/>
            <Row gutter={[24, 24]}>
              <Col span={12}>
              <BasicAdditionButton/>
              </Col>
              <Col span={12}>
              <BasicSubtractionButton/>
              </Col>
              <Col span={12}>
              <BasicMultiplicationButton/>
              </Col>
              <Col span={12}>
              <BasicDivisionButton/>
              </Col>
              <Col span={12}>
              <LinearEquationButton/>
              </Col>
              <Col span={12}>
              <QuadraticEquationButton/>
              </Col>
              <Col span={12}>
              <PythagorasButton/>
              </Col>
              <Col span={12}>
              <TrigonometryButton/>
              </Col>
              <Col span={12}>
              <LawOfSineAndCosineButton/>
              </Col>
              <Col span={12}>
              <ProportionalityAndRuleOfThreeButton/>
              </Col>
              <Col span={12}>
              <LinearFunctionButton/>
              </Col>
              <Col span={12}>
              <QuadraticFunctionButton/>
              </Col>
              <Col span={12}>
              <ExponentsAndLogarithmsButton/>
              </Col>
              <Col span={12}>
              <ExponentialGrowthButton/>
              </Col>
              <Col span={12}>
              <LESAndMatricesButton/>
              </Col>
              <Col span={12}>
              <ScalesAndModelsButton/>
              </Col>
              <Col span={12}>
              <PolarCoordinatesButton/>
              </Col>
              <Col span={12}>
              <ScalarAndVectorProductButton/>
              </Col>
              <Col span={12}>
              <CombinatoricsButton/>
              </Col>
              <Col span={12}>
              <ProbabilityButton/>
              </Col>
              <Col span={12}>
              <DeviationButton/>
              </Col>
              <Col span={12}>
              <IntegrationButton/>
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
  
export default MathMode; 