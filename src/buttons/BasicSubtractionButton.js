import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function BasicSubtractionButton() {

  return (
      <Link to='/math/basic_subtraction'>
        <Card hoverable className='card'>Basic Subtraction</Card>
      </Link>
    );
  }

export default BasicSubtractionButton;
