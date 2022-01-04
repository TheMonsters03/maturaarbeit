import * as React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

function PhysicsButton() {
    return (
    <Link to="/physics">
      <Button type="primary" disabled>Physics</Button>
    </Link>
    );
  }

export default PhysicsButton;