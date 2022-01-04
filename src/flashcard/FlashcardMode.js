import { Card } from 'antd';
import * as React from 'react';
import { useState, useCallback } from 'react';
import './flashcard.css';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import CardCounter from './CardCounter';
import { XButton } from '../buttons';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const mod = (n, m) => ((n % m) + m) % m;

function TestCard({ equations, topic, subject }) {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const [percent, setPercent] = useState(0);
  const config = {loader: {load: ["input/asciimath"]}}

  const forwards = useCallback(() => 
    setIndex(state => mod(state + 1, equations.length))
  , [setIndex, equations]);
  
  const backwards = useCallback(() => 
    setIndex(state => mod(state - 1, equations.length))
  , [setIndex, equations]);

  const increase = useCallback(() => {
    setPercent(state => mod(state + 100/equations.length, (100/equations.length) * equations.length));
  }, [setPercent, equations]);

  const decrease = useCallback(() => {
    setPercent(state => mod(state - 100/equations.length, (100/equations.length) * equations.length));
  }, [setPercent, equations]);

  if (percent > 99.9) {
    setPercent(0);
  }

  return (
    <div>
      <div className='xb'>
        <XButton subject={subject} topic={topic}/>
      </div>
      <div className={`fcard ${flip ? 'flip' : ''}`}  onClick={() => setFlip(!flip)}>
        <MathJaxContext config={config}>
          <Card hoverable className='front'>
            <MathJax dynamic>{equations[index].question}</MathJax>
          </Card>
          <Card hoverable className='back'>
            <MathJax dynamic>{equations[index].answer}</MathJax>
          </Card>
        </MathJaxContext>
      </div>
      <div onClick={() => {decrease(); backwards()}}>
        <Card hoverable className='left'>{<LeftOutlined className='leftarrow'/>}</Card>
      </div>
      <div onClick={() => {increase(); forwards()}}>
        <Card hoverable className='right'>{<RightOutlined className='leftarrow'/>}</Card>
      </div>
      <div>
        <CardCounter percentage={percent}/>
      </div>
    </div>
  );
}

export default TestCard;