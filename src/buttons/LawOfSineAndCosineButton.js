import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function LawOfSineAndCosineButton() {

  return (
      <Link to='/math/law_of_sine_cosine'>
        <Card hoverable className='card'>Law of Sines and Cosines</Card>
      </Link>
    );
  }

export default LawOfSineAndCosineButton;
