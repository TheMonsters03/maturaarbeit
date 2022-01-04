import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function ScalesAndModelsButton() {

  return (
      <Link to='/math/scales_models'>
        <Card hoverable className='card'>Scales and Models</Card>
      </Link>
    );
  }

export default ScalesAndModelsButton;
