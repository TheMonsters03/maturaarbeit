import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function LESAndMatricesButton() {

  return (
      <Link to='/math/les_matrices'>
        <Card hoverable className='card'>Linear System of Equations and Matrices</Card>
      </Link>
    );
  }

export default LESAndMatricesButton;
