import * as React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

function MathButton() {
    return (
    <Link to="/math">
      <Button type="primary" >Math</Button>
    </Link>
    );
  }

export default MathButton;