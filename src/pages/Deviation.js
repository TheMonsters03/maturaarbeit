import * as React from 'react';
import { Layout, Col, Row, Divider } from 'antd';
import ExamateLogo from '../structure/logo';
import { HomeButton, MathButton, ChemistryButton, PhysicsButton, 
    MusicButton, CSButton, FlashcardModeButton, ExamModeButton } from '../buttons';
import CardPreview from '../flashcard/CardPreview';
import Preview from '../equations/previewdeviations.json' ;
import DeviationsJSON from '../equations/deviations.json'
import { useInView } from 'react-intersection-observer';
import { lazy } from 'react';

const QnA = lazy(() => import('../structure/QnA'));
const { Header, Footer, Content } = Layout;

function Deviation() {
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
                    <h1 id='h1'>Deviations</h1>
                    <Divider/>
                    <CardPreview data={Preview}/>
                    <Divider className='divider'/>
                    <h3 id="h3">Modes</h3>
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <FlashcardModeButton topic={"deviations"}/>
                        </Col>
                        <Col span={12}>
                            <ExamModeButton topic={"deviations"}/>
                        </Col>
                    </Row>
                    <Divider className='divider'/>
                    <h3 id="h3">Flashcard Mode Questions</h3>
                    <div>
                        <QnA data={DeviationsJSON} index={0}/>
                        <QnA data={DeviationsJSON} index={1}/>  
                        <QnA data={DeviationsJSON} index={2}/>
                        <QnA data={DeviationsJSON} index={3}/>
                        <QnA data={DeviationsJSON} index={4}/>
                        <QnA data={DeviationsJSON} index={5}/>
                        <QnA data={DeviationsJSON} index={6}/>
                        <QnA data={DeviationsJSON} index={7}/>
                        <QnA data={DeviationsJSON} index={8}/>
                        <QnA data={DeviationsJSON} index={9}/>
                        <QnA data={DeviationsJSON} index={10}/>
                        <QnA data={DeviationsJSON} index={11}/>
                        <QnA data={DeviationsJSON} index={12}/>
                        <QnA data={DeviationsJSON} index={13}/>
                        <QnA data={DeviationsJSON} index={14}/>
                        <QnA data={DeviationsJSON} index={15}/>
                    </div>
                    <div ref={ref}>      
                        {inView && <QnA data={DeviationsJSON} index={16}/>}
                        {inView && <QnA data={DeviationsJSON} index={17}/>}
                        {inView && <QnA data={DeviationsJSON} index={18}/>}
                        {inView && <QnA data={DeviationsJSON} index={19}/>}
                        {inView && <QnA data={DeviationsJSON} index={20}/>}
                        {inView && <QnA data={DeviationsJSON} index={21}/>}
                        {inView && <QnA data={DeviationsJSON} index={22}/>}
                    </div>
                    <Divider className='divider'/>
                    <h3 id='h3'>Exam Mode Questions</h3>
                    <div>
                        <QnA data={DeviationsJSON} index={0}/>
                        <QnA data={DeviationsJSON} index={1}/>
                        <QnA data={DeviationsJSON} index={2}/>
                        <QnA data={DeviationsJSON} index={3}/>
                        <QnA data={DeviationsJSON} index={4}/>
                        <QnA data={DeviationsJSON} index={5}/>
                        <QnA data={DeviationsJSON} index={6}/>
                        <QnA data={DeviationsJSON} index={7}/>
                        <QnA data={DeviationsJSON} index={8}/>
                        <QnA data={DeviationsJSON} index={9}/>
                        <QnA data={DeviationsJSON} index={10}/>
                        <QnA data={DeviationsJSON} index={11}/>
                        <QnA data={DeviationsJSON} index={12}/>
                        <QnA data={DeviationsJSON} index={13}/>
                        <QnA data={DeviationsJSON} index={14}/>
                        <QnA data={DeviationsJSON} index={15}/>
                        <QnA data={DeviationsJSON} index={16}/>
                    </div>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    )
}

export default Deviation;