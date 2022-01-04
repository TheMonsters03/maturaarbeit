import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function LinearEquationButton() {

  return (
      <Link to='/math/linear_equations'>
        <Card hoverable className='card'>Linear Equations</Card>
      </Link>
    );
  }

export default LinearEquationButton;
