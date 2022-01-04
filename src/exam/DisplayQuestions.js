import * as React from 'react';
import { Row, Col, Space, Radio, Form, Button } from 'antd';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { memo, useState, useEffect } from 'react';
import Result from './Result';

function DisplayQuestions({question, onclick, visible, topicstring, topic}) {        
        const config = {loader: {load: ["input/asciimath"]}}
        const [correctAnswers, setCorrectAnswers] = useState(0);
        const [result, setResult] = useState([1,2,3,4,5,6,7,8,9,10])
        const [answerresult, setAnswerResult] = useState([1,2,3,4])
 
        // Generates ten random questions
        function generateQuestions() {
            const array = []
            for (let i = 1; i <= question.length; i++) {
            array.push(i)
            }
            const result2 = [];

            for (let j = 1; j <= 10; j++) {
            const random = Math.floor(Math.random() * (question.length - j));
            result2.push(array[random]);
            array[random] = array[question.length - j];
            }
            return (result2)
        }

        // Random shuffles the answers
        function ShuffleAnswers() {
            const answerarray = []
            for (let k = 1; k <= 4; k++) {
                answerarray.push(k)
            }
            const answerresult2 = [];
    
            for (let l = 1; l <= 4; l++) {
                const arandom = Math.floor(Math.random() * (4 - l));
                answerresult2.push(answerarray[arandom]);
                answerarray[arandom] = answerarray[4 - l];
            }
            return (answerresult2)
        }
        
        useEffect(() => {
            setResult(generateQuestions())
            console.log(result)
            // eslint-disable-next-line
        }, []);

        useEffect(() => {
            setAnswerResult(ShuffleAnswers())
            console.log(answerresult)
            // eslint-disable-next-line
        }, []);

        const onFinish = (values) => {
            if (values.Question1 === question[result[0]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            } if (values.Question2 === question[result[1]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            } if (values.Question3 === question[result[2]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            } if (values.Question4 === question[result[3]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            } if (values.Question5 === question[result[4]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            } if (values.Question6 === question[result[5]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            } if (values.Question7 === question[result[6]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            } if (values.Question8 === question[result[7]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            } if (values.Question9 === question[result[8]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            } if (values.Question10 === question[result[9]-1].correct_answer) {
                setCorrectAnswers(state => state+1);
                console.log(correctAnswers)
            }
            
        };
        
        const onFinishFailed = (errorInfo) => {
            console.log("Failed:", errorInfo);
        };

        return (
            <MathJaxContext config={config}>
                <Form name='Exam Mode' initialValues={{ remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <Form.Item name={"Question1"} label={<MathJax dynamic>{"`text(Question 1: )`" + question[result[0]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup1' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[0]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[0]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[0]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[0]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[0]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[0]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[0]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[0]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name={"Question2"} label={<MathJax dynamic>{"`text(Question 2: )`" + question[result[1]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup2' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[1]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[1]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[1]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[1]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[1]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[1]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[1]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[1]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>        
                        </Col>
                        <Col span={12}>
                            <Form.Item name={"Question3"} label={<MathJax dynamic>{"`text(Question 3: )`" + question[result[2]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup3' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[2]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[2]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[2]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[2]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[2]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[2]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[2]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[2]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name={"Question4"} label={<MathJax dynamic>{"`text(Question 4: )`" + question[result[3]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup4' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[3]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[3]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[3]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[3]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[3]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[3]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[3]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[3]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>    
                        </Col>
                        <Col span={12}>
                            <Form.Item name={"Question5"} label={<MathJax dynamic>{"`text(Question 5: )`" + question[result[4]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup5' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[4]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[4]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[4]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[4]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[4]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[4]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[4]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[4]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name={"Question6"} label={<MathJax dynamic>{"`text(Question 6: )`" + question[result[5]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup6' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[5]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[5]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[5]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[5]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[5]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[5]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[5]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[5]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name={"Question7"} label={<MathJax dynamic>{"`text(Question 7: )`" + question[result[6]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup7' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[6]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[6]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[6]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[6]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[6]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[6]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[6]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[6]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>    
                        </Col>
                        <Col span={12}>
                            <Form.Item name={"Question8"} label={<MathJax dynamic>{"`text(Question 8: )`" + question[result[7]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup8' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[7]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[7]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[7]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[7]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[7]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[7]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[7]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[7]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>    
                        </Col>
                        <Col span={12}>
                            <Form.Item name={"Question9"} label={<MathJax dynamic>{"`text(Question 9: )`" + question[result[8]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup9' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[8]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[8]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[8]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[8]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[8]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[8]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[8]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[8]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>    
                        </Col>
                        <Col span={12}>
                            <Form.Item name={"Question10"} label={<MathJax dynamic>{"`text(Question 10: )`" + question[result[9]-1].question}</MathJax>}>
                                <Radio.Group name='RadioGroup10' defaultValue={1}>
                                    <Space direction='vertical'>
                                        <Radio value={question[result[9]-1].answer[answerresult[2]-1]}>
                                            <MathJax dynamic>{question[result[9]-1].answer[answerresult[2]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[9]-1].answer[answerresult[0]-1]}>
                                            <MathJax dynamic>{question[result[9]-1].answer[answerresult[0]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[9]-1].answer[answerresult[3]-1]}>
                                            <MathJax dynamic>{question[result[9]-1].answer[answerresult[3]-1]}</MathJax>
                                        </Radio>
                                        <Radio value={question[result[9]-1].answer[answerresult[1]-1]}>
                                            <MathJax dynamic>{question[result[9]-1].answer[answerresult[1]-1]}</MathJax>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item className='submit'>
                        <Button type="primary" size="large" onClick={onclick} htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
                <div>
                    <Result show={visible} topicstring={topicstring} correctAnswers={correctAnswers} topic={topic}/>
                </div>
            </MathJaxContext>
    )
}

export default memo(DisplayQuestions);