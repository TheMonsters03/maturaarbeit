import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function LinearFunctionButton() {

  return (
      <Link to='/math/linear_functions'>
        <Card hoverable className='card'>Linear Functions</Card>
      </Link>
    );
  }

export default LinearFunctionButton;

