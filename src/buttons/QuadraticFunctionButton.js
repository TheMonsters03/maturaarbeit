import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function QuadraticFunctionButton() {

  return (
      <Link to='/math/quadratic_functions'>
        <Card hoverable className='card'>Quadratic Functions</Card>
      </Link>
    );
  }

export default QuadraticFunctionButton;

