import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import ExamateLogo from '../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton, FlashcardModeButton, ExamModeButton } from '../buttons';
import CardPreview from '../flashcard/CardPreview';
import Preview from '../equations/previewintegration.json' ;
import IntegrationJSON from '../equations/integration.json'
import { useInView } from 'react-intersection-observer';
import { lazy } from 'react';

const QnA = lazy(() => import('../structure/QnA'));
const { Header, Footer, Content } = Layout;

function Integration() {
    const {ref, inView} = useInView({
        threshold: 0.0
    });

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
                    <h1 id='h1'>Integration</h1>
                    <Divider/>
                    <CardPreview data={Preview}/>
                    <Divider className='divider'/>
                    <h3 id="h3">Modes</h3>
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <FlashcardModeButton topic={"integration"}/>
                        </Col>
                        <Col span={12}>
                            <ExamModeButton topic={"integration"}/>
                        </Col>
                    </Row>
                    <Divider className='divider'/>
                    <h3 id="h3">Flashcard & Exam Mode Questions</h3>
                    <div>
                        <QnA data={IntegrationJSON} index={0}/>
                        <QnA data={IntegrationJSON} index={1}/>  
                        <QnA data={IntegrationJSON} index={2}/>
                        <QnA data={IntegrationJSON} index={3}/>
                        <QnA data={IntegrationJSON} index={4}/>
                        <QnA data={IntegrationJSON} index={5}/>
                        <QnA data={IntegrationJSON} index={6}/>
                        <QnA data={IntegrationJSON} index={7}/>
                        <QnA data={IntegrationJSON} index={8}/>
                    </div>
                    <div ref={ref}>      
                        {inView && <QnA data={IntegrationJSON} index={9}/>}
                        {inView && <QnA data={IntegrationJSON} index={10}/>}
                    </div>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default Integration;