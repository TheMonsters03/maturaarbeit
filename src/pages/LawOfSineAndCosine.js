import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import ExamateLogo from '../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton, FlashcardModeButton, ExamModeButton } from '../buttons';
import CardPreview from '../flashcard/CardPreview';
import Preview from '../equations/previewlawofsinesandcosines.json' ;
import LawOfSineAndCosineJSON from '../equations/lawofsinesandcosines.json'
import { useInView } from 'react-intersection-observer';
import { lazy } from 'react';

const QnA = lazy(() => import('../structure/QnA'));
const { Header, Footer, Content } = Layout;

function LawOfSineAndCosine() {
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
                    <h1 id='h1'>Law of Sines and Cosines</h1>
                    <Divider/>
                    <CardPreview data={Preview}/>
                    <Divider className='divider'/>
                    <h3 id="h3">Modes</h3>
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <FlashcardModeButton topic={"law_of_sine_cosine"}/>
                        </Col>
                        <Col span={12}>
                            <ExamModeButton topic={"law_of_sine_cosine"}/>
                        </Col>
                    </Row>
                    <Divider className='divider'/>
                    <h3 id="h3">Flashcard & Exam Mode Questions</h3>
                    <div>
                        <QnA data={LawOfSineAndCosineJSON} index={0}/>
                        <QnA data={LawOfSineAndCosineJSON} index={1}/>  
                        <QnA data={LawOfSineAndCosineJSON} index={2}/>
                        <QnA data={LawOfSineAndCosineJSON} index={3}/>
                    </div>
                    <div ref={ref}>      
                        {inView && <QnA data={LawOfSineAndCosineJSON} index={4}/>}
                        {inView && <QnA data={LawOfSineAndCosineJSON} index={5}/>}
                    </div>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default LawOfSineAndCosine;