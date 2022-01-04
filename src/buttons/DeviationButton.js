import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function DeviationButton() {

  return (
      <Link to='/math/deviations'>
        <Card hoverable className='card'>Deviations</Card>
      </Link>
    );
  }

export default DeviationButton;
