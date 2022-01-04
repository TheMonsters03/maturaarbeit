import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import ExamateLogo from '../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton, FlashcardModeButton, ExamModeButton } from '../buttons';
import CardPreview from '../flashcard/CardPreview';
import Preview from '../equations/previewlinearequations.json' ;
import LinearEquationsJSON from '../equations/linearequations.json'
import { useInView } from 'react-intersection-observer';
import { lazy } from 'react';

const QnA = lazy(() => import('../structure/QnA'));
const { Header, Footer, Content } = Layout;

function LinearEquation() {
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
                    <h1 id='h1'>Linear Equations</h1>
                    <Divider/>
                    <CardPreview data={Preview}/>
                    <Divider className='divider'/>
                    <h3 id="h3">Modes</h3>
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <FlashcardModeButton topic={"linear_equations"}/>
                        </Col>
                        <Col span={12}>
                            <ExamModeButton topic={"linear_equations"}/>
                        </Col>
                    </Row>
                    <Divider className='divider'/>
                    <h3 id="h3">Flashcard & Exam Mode Questions</h3>
                    <div>
                        <QnA data={LinearEquationsJSON} index={0}/>
                        <QnA data={LinearEquationsJSON} index={1}/>  
                        <QnA data={LinearEquationsJSON} index={2}/>
                        <QnA data={LinearEquationsJSON} index={3}/>
                        <QnA data={LinearEquationsJSON} index={4}/>
                        <QnA data={LinearEquationsJSON} index={5}/>
                        <QnA data={LinearEquationsJSON} index={6}/>
                        <QnA data={LinearEquationsJSON} index={7}/>
                        <QnA data={LinearEquationsJSON} index={8}/>
                        <QnA data={LinearEquationsJSON} index={9}/>
                        <QnA data={LinearEquationsJSON} index={10}/>
                        <QnA data={LinearEquationsJSON} index={11}/>
                        <QnA data={LinearEquationsJSON} index={12}/>
                        <QnA data={LinearEquationsJSON} index={13}/>
                        <QnA data={LinearEquationsJSON} index={14}/>
                        <QnA data={LinearEquationsJSON} index={15}/>
                    </div>
                    <div ref={ref}>      
                        {inView && <QnA data={LinearEquationsJSON} index={16}/>}
                        {inView && <QnA data={LinearEquationsJSON} index={17}/>}
                        {inView && <QnA data={LinearEquationsJSON} index={18}/>}
                        {inView && <QnA data={LinearEquationsJSON} index={19}/>}
                    </div>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default LinearEquation;