import * as React from 'react';
import { Layout, Col, Row } from 'antd';
import ExamateLogo from '../structure/logo';
import './pages.css'
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from '../images';
import { MathButton, HomeButton, ChemistryButton, PhysicsButton, CSButton, MusicButton, RandomButton } from '../buttons';

//Landing page -> infos about Examate

const { Header, Footer, Content } = Layout;

function HomePage() {
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
            <Content>
                <div className='background'>
                    <div id='examate_background'></div>
                    <div id='examate_midground'></div>
                    <div id='examate_foreground'></div>
                </div>
                <div id="landing_image">
                    <h1 className="heading" id="heading1">Studying for your next exam? Need support?</h1>
                    <h1 className="heading" id="heading1a">Examate.</h1>
                    <h3 className="heading" id="heading3">To get started, choose a subject</h3>
                    <h3 className="heading" id="heading3a">or</h3>
                    <h3 className="heading" id="heading3b">press the button below for a surprise.</h3>
                    <Row>
                        <Col span={10} id="random">
                            <RandomButton/>
                        </Col>
                    </Row>
                </div>
                <div id="background2">
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <img src={Icon1} className='imgl' alt='icon1'/>
                        </Col>
                        <Col span={12} className="parar">
                            <h1 className='headingb1'>Two study modes. Two more coming soon.</h1>
                            <h3>Choose between a flashcard mode or an exam mode,</h3>
                            <h3>depending on which one suits you better.</h3>
                        </Col>
                        <Col span={12} className="paral">
                            <h1 className='headingb1'>On Mac and PC. Soon on iOS and Android.</h1>
                            <h3>Examate is currently only available on stationary devices.</h3>
                            <h3>Soon the full power of Examate will be accessible on the go.</h3>
                        </Col>
                        <Col span={12}>
                            <img src={Icon2} className='imgr' alt='icon2'/>
                        </Col>
                        <Col span={12}>
                            <img src={Icon3} className='imgl' alt='icon3'/>
                        </Col>
                        <Col span={12} className='parar'>
                            <h1 className='headingb1'>Study sets in Math. More subjects coming soon.</h1>
                            <h3>Examate focuses on Math specifically because statistics have shown,</h3>
                            <h3>that students struggle with Math especially.</h3>
                        </Col>
                        <Col span={12} className="paral">
                            <h1 className='headingb1'>Stuck? Have questions?</h1>
                            <h3>Examate provides detailed explainations for every study set in the near future.</h3>
                        </Col>
                        <Col span={12}>
                            <img src={Icon4} className='imgr' alt='icon4'/>
                        </Col>
                        <Col span={12}>
                            <img src={Icon5} className='imgl' alt='icon5'/>
                        </Col>
                        <Col span={12} className="parar">
                            <h1 className='headingb1'>All of these features, free of charge.</h1>
                            <h3>While Examate is in its experimental and alpha phase,</h3>
                            <h3>it will offer these features free of charge.</h3>
                        </Col>
                        <Col span={12} className="paral">
                            <h1 className='headingb1'>Source code on GitHub.</h1>
                            <h3>Want to create your own study sets? No problem!</h3>
                            <h3>Examate provides its source code on <a href='https://github.com/TheMonsters03/maturaarbeit' target={"_blank"} rel="noreferrer">GitHub</a>.</h3>
                        </Col>
                        <Col span={12}>
                            <a href='https://github.com/TheMonsters03/maturaarbeit' target={"_blank"} rel="noreferrer">
                                <img src={Icon6} className='imgr' alt='icon6'/>
                            </a>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer className="foot">
                © Examate, 2021-2022
            </Footer>
        </Layout>
    );
}

export default HomePage;