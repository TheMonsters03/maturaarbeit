import * as React from 'react';
import { Progress } from 'antd';

function ExamCounter({correct}) {
    return (
        <Progress type='circle' width={80} percent={correct*10}/>
    )
}

export default ExamCounter;