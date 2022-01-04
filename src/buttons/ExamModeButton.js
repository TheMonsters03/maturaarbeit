import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function ExamModeButton({ topic }) {
    return (
        <Link to={'/math/' + topic + '/exam_mode'}>
            <Card hoverable className='card' id="mcard">Exam Mode</Card>
        </Link>
    );
}

export default ExamModeButton;