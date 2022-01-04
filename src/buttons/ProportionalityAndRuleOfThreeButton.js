import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function ProportionalityAndRuleOfThreeButton() {

  return (
      <Link to='/math/proportionality_rule_of_three'>
        <Card hoverable className='card'>Proportionality and Rule of Three</Card>
      </Link>
    );
  }

export default ProportionalityAndRuleOfThreeButton;
