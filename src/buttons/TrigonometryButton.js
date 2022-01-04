import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function TrigonometryButton() {

  return (
      <Link to='/math/trigonometry'>
        <Card hoverable className='card'>Trigonometry</Card>
      </Link>
    );
  }

export default TrigonometryButton;
