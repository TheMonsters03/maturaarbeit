import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function BasicAdditionButton() {

  return (
      <Link to='/math/basic_addition'>
        <Card hoverable className='card'>Basic Addition</Card>
      </Link>
    );
  }

export default BasicAdditionButton;