import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function BasicMultiplicationButton() {

  return (
      <Link to='/math/basic_multiplication'>
        <Card hoverable className='card'>Basic Multiplication</Card>
      </Link>
    );
  }

export default BasicMultiplicationButton;