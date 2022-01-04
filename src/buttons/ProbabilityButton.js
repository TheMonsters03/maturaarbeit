import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function ProbabilityButton() {

  return (
      <Link to='/math/probability'>
        <Card hoverable className='card'>Probability</Card>
      </Link>
    );
  }

export default ProbabilityButton;
