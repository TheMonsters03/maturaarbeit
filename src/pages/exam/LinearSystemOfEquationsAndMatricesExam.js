import * as React from 'react';
import { Layout, Col, Row } from 'antd';
import ExamateLogo from '../../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton } from '../../buttons';
import LinearSystemOfEquationsAndMatrices from '../../equations/linearsystemofequationsandmatricesexam.json' ;
import ExamMode from '../../exam/ExamMode';

const { Header, Footer, Content } = Layout;

function LinearSystemOfEquationsAndMatricesExam() {
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
                    <ExamMode questions={LinearSystemOfEquationsAndMatrices} topic={"les_matrices"} subject={"math"} topicstring={"Linear System of Equations and Matrices"}/>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default LinearSystemOfEquationsAndMatricesExam;