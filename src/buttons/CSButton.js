import * as React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

function CSButton() {
    return (
    <Link to="/computer_science">
      <Button type="primary" disabled>CS</Button>
    </Link>
    );
  }

export default CSButton;