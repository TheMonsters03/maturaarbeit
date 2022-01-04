import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function CombinatoricsButton() {

  return (
      <Link to='/math/combinatorics'>
        <Card hoverable className='card'>Combinatorics</Card>
      </Link>
    );
  }

export default CombinatoricsButton;
