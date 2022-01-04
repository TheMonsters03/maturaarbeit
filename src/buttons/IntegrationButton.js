import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function IntegrationButton() {

  return (
      <Link to='/math/integration'>
        <Card hoverable className='card'>Integration</Card>
      </Link>
    );
  }

export default IntegrationButton;
