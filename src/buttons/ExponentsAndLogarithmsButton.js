import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function ExponentsAndLogarithmsButton() {

  return (
      <Link to='/math/exponents_logarithms'>
        <Card hoverable className='card'>Exponents and Logarithms</Card>
      </Link>
    );
  }

export default ExponentsAndLogarithmsButton;
