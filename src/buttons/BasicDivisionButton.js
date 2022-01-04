import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function BasicDivisionButton() {

  return (
      <Link to='/math/basic_division'>
        <Card hoverable className='card'>Basic Division</Card>
      </Link>
    );
  }

export default BasicDivisionButton;