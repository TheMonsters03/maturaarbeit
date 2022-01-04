import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import ExamateLogo from '../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton, FlashcardModeButton, ExamModeButton } from '../buttons';
import CardPreview from '../flashcard/CardPreview';
import Preview from '../equations/previewpolarcoordinates.json' ;
import PolarCoordinatesJSON from '../equations/polarcoordinates.json'
import { useInView } from 'react-intersection-observer';
import { lazy } from 'react';

const QnA = lazy(() => import('../structure/QnA'));
const { Header, Footer, Content } = Layout;

function PolarCoordinates() {
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
                    <h1 id='h1'>Polar Coordinates</h1>
                    <Divider/>
                    <CardPreview data={Preview}/>
                    <Divider className='divider'/>
                    <h3 id="h3">Modes</h3>
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <FlashcardModeButton topic={"polar_coordinates"}/>
                        </Col>
                        <Col span={12}>
                            <ExamModeButton topic={"polar_coordinates"}/>
                        </Col>
                    </Row>
                    <Divider className='divider'/>
                    <h3 id="h3">Flashcard & Exam Mode Questions</h3>
                    <div>
                        <QnA data={PolarCoordinatesJSON} index={0}/>
                        <QnA data={PolarCoordinatesJSON} index={1}/>  
                        <QnA data={PolarCoordinatesJSON} index={2}/>
                        <QnA data={PolarCoordinatesJSON} index={3}/>
                        <QnA data={PolarCoordinatesJSON} index={4}/>
                        <QnA data={PolarCoordinatesJSON} index={5}/>
                        <QnA data={PolarCoordinatesJSON} index={6}/>
                        <QnA data={PolarCoordinatesJSON} index={7}/>
                        <QnA data={PolarCoordinatesJSON} index={8}/>
                        <QnA data={PolarCoordinatesJSON} index={9}/>
                        <QnA data={PolarCoordinatesJSON} index={10}/>
                        <QnA data={PolarCoordinatesJSON} index={11}/>
                        <QnA data={PolarCoordinatesJSON} index={12}/>
                        <QnA data={PolarCoordinatesJSON} index={13}/>
                        <QnA data={PolarCoordinatesJSON} index={14}/>
                        <QnA data={PolarCoordinatesJSON} index={15}/>
                    </div>
                    <div ref={ref}>      
                        {inView && <QnA data={PolarCoordinatesJSON} index={16}/>}
                        {inView && <QnA data={PolarCoordinatesJSON} index={17}/>}
                        {inView && <QnA data={PolarCoordinatesJSON} index={18}/>}
                        {inView && <QnA data={PolarCoordinatesJSON} index={19}/>}
                    </div>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default PolarCoordinates;