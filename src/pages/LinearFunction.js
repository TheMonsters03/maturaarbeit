import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import ExamateLogo from '../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton, FlashcardModeButton, ExamModeButton } from '../buttons';
import CardPreview from '../flashcard/CardPreview';
import Preview from '../equations/previewlinearfunctions.json' ;
import LinearFunctionsJSON from '../equations/linearfunctions.json'
import { useInView } from 'react-intersection-observer';
import { lazy } from 'react';

const QnA = lazy(() => import('../structure/QnA'));
const { Header, Footer, Content } = Layout;

function LinearFunction() {
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
                    <h1 id='h1'>Linear Functions</h1>
                    <Divider/>
                    <CardPreview data={Preview}/>
                    <Divider className='divider'/>
                    <h3 id="h3">Modes</h3>
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <FlashcardModeButton topic={"linear_functions"}/>
                        </Col>
                        <Col span={12}>
                            <ExamModeButton topic={"linear_functions"}/>
                        </Col>
                    </Row>
                    <Divider className='divider'/>
                    <h3 id="h3">Flashcard & Exam Mode Questions</h3>
                    <div>
                        <QnA data={LinearFunctionsJSON} index={0}/>
                        <QnA data={LinearFunctionsJSON} index={1}/>  
                        <QnA data={LinearFunctionsJSON} index={2}/>
                        <QnA data={LinearFunctionsJSON} index={3}/>
                        <QnA data={LinearFunctionsJSON} index={4}/>
                        <QnA data={LinearFunctionsJSON} index={5}/>
                        <QnA data={LinearFunctionsJSON} index={6}/>
                        <QnA data={LinearFunctionsJSON} index={7}/>
                        <QnA data={LinearFunctionsJSON} index={8}/>
                        <QnA data={LinearFunctionsJSON} index={9}/>
                        <QnA data={LinearFunctionsJSON} index={10}/>
                        <QnA data={LinearFunctionsJSON} index={11}/>
                        <QnA data={LinearFunctionsJSON} index={12}/>
                        <QnA data={LinearFunctionsJSON} index={13}/>
                        <QnA data={LinearFunctionsJSON} index={14}/>
                        <QnA data={LinearFunctionsJSON} index={15}/>
                    </div>
                    <div ref={ref}>      
                        {inView && <QnA data={LinearFunctionsJSON} index={16}/>}
                        {inView && <QnA data={LinearFunctionsJSON} index={17}/>}
                        {inView && <QnA data={LinearFunctionsJSON} index={18}/>}
                        {inView && <QnA data={LinearFunctionsJSON} index={19}/>}
                    </div>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default LinearFunction;