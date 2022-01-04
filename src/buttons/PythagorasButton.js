import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function PythagorasButton() {

  return (
      <Link to='/math/pythagoras'>
        <Card hoverable className='card'>Pythagoras</Card>
      </Link>
    );
  }

export default PythagorasButton;
