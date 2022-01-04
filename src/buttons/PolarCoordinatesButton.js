import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function PolarCoordinatesButton() {

  return (
      <Link to='/math/polar_coordinates'>
        <Card hoverable className='card'>Polar Coordinates</Card>
      </Link>
    );
  }

export default PolarCoordinatesButton;
