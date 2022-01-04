import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import ExamateLogo from '../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton, FlashcardModeButton, ExamModeButton } from '../buttons';
import CardPreview from '../flashcard/CardPreview';
import Preview from '../equations/previewexponentialgrowth.json' ;
import ExponentialGrowthJSON from '../equations/exponentialgrowth.json'
import { useInView } from 'react-intersection-observer';
import { lazy } from 'react';

const QnA = lazy(() => import('../structure/QnA'));
const { Header, Footer, Content } = Layout;

function ExponentialGrowth() {
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
                    <h1 id='h1'>Exponential Growth</h1>
                    <Divider/>
                    <CardPreview data={Preview}/>
                    <Divider className='divider'/>
                    <h3 id="h3">Modes</h3>
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <FlashcardModeButton topic={"exponential_growth"}/>
                        </Col>
                        <Col span={12}>
                            <ExamModeButton topic={"exponential_growth"}/>
                        </Col>
                    </Row>
                    <Divider className='divider'/>
                    <h3 id="h3">Flashcard & Exam Mode Questions</h3>
                    <div>
                        <QnA data={ExponentialGrowthJSON} index={0}/>
                        <QnA data={ExponentialGrowthJSON} index={1}/>  
                        <QnA data={ExponentialGrowthJSON} index={2}/>
                        <QnA data={ExponentialGrowthJSON} index={3}/>
                        <QnA data={ExponentialGrowthJSON} index={4}/>
                        <QnA data={ExponentialGrowthJSON} index={5}/>
                        <QnA data={ExponentialGrowthJSON} index={6}/>
                        <QnA data={ExponentialGrowthJSON} index={7}/>
                        <QnA data={ExponentialGrowthJSON} index={8}/>
                        <QnA data={ExponentialGrowthJSON} index={9}/>
                        <QnA data={ExponentialGrowthJSON} index={10}/>
                        <QnA data={ExponentialGrowthJSON} index={11}/>
                        <QnA data={ExponentialGrowthJSON} index={12}/>
                        <QnA data={ExponentialGrowthJSON} index={13}/>
                        <QnA data={ExponentialGrowthJSON} index={14}/>
                        <QnA data={ExponentialGrowthJSON} index={15}/>
                    </div>
                    <div ref={ref}>      
                        {inView && <QnA data={ExponentialGrowthJSON} index={16}/>}
                        {inView && <QnA data={ExponentialGrowthJSON} index={17}/>}
                        {inView && <QnA data={ExponentialGrowthJSON} index={18}/>}
                        {inView && <QnA data={ExponentialGrowthJSON} index={19}/>}
                    </div>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default ExponentialGrowth;