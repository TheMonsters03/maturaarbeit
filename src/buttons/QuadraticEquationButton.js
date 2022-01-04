import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function QuadraticEquationButton() {

  return (
      <Link to='/math/quadratic_equations'>
        <Card hoverable className='card'>Quadratic Equations</Card>
      </Link>
    );
  }

export default QuadraticEquationButton;
