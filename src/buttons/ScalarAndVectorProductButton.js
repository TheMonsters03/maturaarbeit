import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function ScalarAndVectorProductButton() {

  return (
      <Link to='/math/scalar_vector_product'>
        <Card hoverable className='card'>Scalar and Vector Product</Card>
      </Link>
    );
  }

export default ScalarAndVectorProductButton;
