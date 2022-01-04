import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import ExamateLogo from '../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton, FlashcardModeButton, ExamModeButton } from '../buttons';
import CardPreview from '../flashcard/CardPreview';
import Preview from '../equations/previewbasicaddition.json' ;
import BasicAdditionJSON from '../equations/basicaddition.json';
import { useInView } from 'react-intersection-observer';
import { lazy } from 'react';

const QnA = lazy(() => import('../structure/QnA'));
const { Header, Footer, Content } = Layout;

function BasicAddition() {
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
                    <h1 id='h1'>Basic Addition</h1>
                    <Divider/>
                    <CardPreview data={Preview}/>
                    <Divider className='divider'/>
                    <h3 id="h3">Modes</h3>
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <FlashcardModeButton topic={"basic_addition"}/>
                        </Col>
                        <Col span={12}>
                            <ExamModeButton topic={"basic_addition"}/>
                        </Col>
                    </Row>
                    <Divider className='divider'/>
                    <h3 id="h3">Flashcard & Exam Mode Questions</h3>
                    <div>
                        <QnA data={BasicAdditionJSON} index={0}/>
                        <QnA data={BasicAdditionJSON} index={1}/>  
                        <QnA data={BasicAdditionJSON} index={2}/>
                        <QnA data={BasicAdditionJSON} index={3}/>
                        <QnA data={BasicAdditionJSON} index={4}/>
                        <QnA data={BasicAdditionJSON} index={5}/>
                        <QnA data={BasicAdditionJSON} index={6}/>
                        <QnA data={BasicAdditionJSON} index={7}/>
                        <QnA data={BasicAdditionJSON} index={8}/>
                        <QnA data={BasicAdditionJSON} index={9}/>
                        <QnA data={BasicAdditionJSON} index={10}/>
                        <QnA data={BasicAdditionJSON} index={11}/>
                        <QnA data={BasicAdditionJSON} index={12}/>
                        <QnA data={BasicAdditionJSON} index={13}/>
                        <QnA data={BasicAdditionJSON} index={14}/>
                        <QnA data={BasicAdditionJSON} index={15}/>
                    </div>
                    <div ref={ref}>      
                        {inView && <QnA data={BasicAdditionJSON} index={16}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={17}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={18}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={19}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={20}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={21}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={22}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={23}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={24}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={25}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={26}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={27}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={28}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={29}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={30}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={31}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={32}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={33}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={34}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={35}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={36}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={37}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={38}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={39}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={40}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={41}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={42}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={43}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={44}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={45}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={46}/>}
                        {inView && <QnA data={BasicAdditionJSON} index={47}/>}
                    </div>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default BasicAddition;