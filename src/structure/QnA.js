import * as React from 'react';
import { Col, Card, Row } from 'antd';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import './structure.css';

function QnA({ data, index }) {
    const config = {
        loader: {load: ["input/asciimath"]}
    }
    
    return (
        <MathJaxContext config={config}>
            <Row gutter={[24, 24]}>
                <Col span={12}>
                    <Card className='margin'>
                        <MathJax>{data[index].question}</MathJax>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className='margin'>
                        <MathJax>{data[index].answer}</MathJax>
                    </Card>
                </Col>
            </Row>
        </MathJaxContext>
    )
}

export default QnA;
