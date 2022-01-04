import * as React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import Linker from '../structure/Linker';
import Stopwatch from '../structure/stopwatch';
import ExamCounter from './ExamCounter';

function Result({show, topicstring, correctAnswers, topic}) {
    const [loading, setLoading] = useState(false);

    function handleOk() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return (<Linker subject={"math"} topic={topic} loading={loading}/>);
        }, 3000);
    }

    return(
        <Modal visible={show} onOk={() => handleOk()}
        footer={[<Linker subject={"math"} topic={topic} loading={loading}/>]} forceRender>
            <h1>Exam on {topicstring}</h1>
            <p>Time elapsed: {<Stopwatch start={!show}/>}</p>
            <p>Result:</p>
            <p>{<ExamCounter correct={correctAnswers}/>}</p>
        </Modal>
    )
}

export default Result;