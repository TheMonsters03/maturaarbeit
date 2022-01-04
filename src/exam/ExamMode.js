import * as React from 'react';
import { useState } from 'react';
import { Divider } from 'antd';
import { XButton } from '../buttons';
import './exam.css'
import Stopwatch from '../structure/stopwatch';
import DisplayQuestions from './DisplayQuestions';


function ExamMode({questions, topic, subject, topicstring}) {
    //const config = {loader: {load: ["input/asciimath"]}}
    const [press, setPress] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);

    //Generates random number for index
    /*let array = []
    for (let i = 1; i <= questions.length; i++) {
        array.push(i)
    }
    let result = [];

    for (let j = 1; j <= 10; j++) {
        const random = Math.floor(Math.random() * (questions.length - j));
        result.push(array[random]);
        array[random] = array[questions.length - j];
    }*/

    return (
        <div>
            <div className="xb">
                <XButton subject={subject} topic={topic}/>
            </div>
            <div>
                <h1>Exam on {topicstring}</h1>
                <Stopwatch start={press}/>
            </div>
            <Divider/>
            <div>    
                <DisplayQuestions question={questions} topicstring={topicstring} onclick={() => {setPress(false); setIsModalVisible(true)}} visible={isModalVisible} topic={topic}/>
            </div> 
        </div>
    )
};

export default ExamMode;
