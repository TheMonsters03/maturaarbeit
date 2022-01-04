import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function ExponentialGrowthButton() {

  return (
      <Link to='/math/exponential_growth'>
        <Card hoverable className='card'>Exponential Growth</Card>
      </Link>
    );
  }

export default ExponentialGrowthButton;
