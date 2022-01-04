import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import ExamateLogo from '../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton, FlashcardModeButton, ExamModeButton } from '../buttons';
import CardPreview from '../flashcard/CardPreview';
import Preview from '../equations/previewbasicsubtraction.json' ;
import BasicSubtractionJSON from '../equations/basicsubtraction.json'
import { useInView } from 'react-intersection-observer';
import { lazy } from 'react';

const QnA = lazy(() => import('../structure/QnA'));
const { Header, Footer, Content } = Layout;

function BasicSubtraction() {
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
                    <h1 id='h1'>Basic Subtraction</h1>
                    <Divider/>
                    <CardPreview data={Preview}/>
                    <Divider className='divider'/>
                    <h3 id="h3">Modes</h3>
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <FlashcardModeButton topic={"basic_subtraction"}/>
                        </Col>
                        <Col span={12}>
                            <ExamModeButton topic={"basic_subtraction"}/>
                        </Col>
                    </Row>
                    <Divider className='divider'/>
                    <h3 id="h3">Flashcard & Exam Mode Questions</h3>
                    <div>
                        <QnA data={BasicSubtractionJSON} index={0}/>
                        <QnA data={BasicSubtractionJSON} index={1}/>  
                        <QnA data={BasicSubtractionJSON} index={2}/>
                        <QnA data={BasicSubtractionJSON} index={3}/>
                        <QnA data={BasicSubtractionJSON} index={4}/>
                        <QnA data={BasicSubtractionJSON} index={5}/>
                        <QnA data={BasicSubtractionJSON} index={6}/>
                        <QnA data={BasicSubtractionJSON} index={7}/>
                        <QnA data={BasicSubtractionJSON} index={8}/>
                        <QnA data={BasicSubtractionJSON} index={9}/>
                        <QnA data={BasicSubtractionJSON} index={10}/>
                        <QnA data={BasicSubtractionJSON} index={11}/>
                        <QnA data={BasicSubtractionJSON} index={12}/>
                        <QnA data={BasicSubtractionJSON} index={13}/>
                        <QnA data={BasicSubtractionJSON} index={14}/>
                        <QnA data={BasicSubtractionJSON} index={15}/>
                    </div>
                    <div ref={ref}>      
                        {inView && <QnA data={BasicSubtractionJSON} index={16}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={17}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={18}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={19}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={20}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={21}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={22}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={23}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={24}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={25}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={26}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={27}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={28}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={29}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={30}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={31}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={32}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={33}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={34}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={35}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={36}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={37}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={38}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={39}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={40}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={41}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={42}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={43}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={44}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={45}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={46}/>}
                        {inView && <QnA data={BasicSubtractionJSON} index={47}/>}
                    </div>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default BasicSubtraction;