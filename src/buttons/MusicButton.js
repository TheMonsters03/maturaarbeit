import * as React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

function MusicButton() {
    return (
    <Link to="/music">
      <Button type="primary" disabled>Music</Button>
    </Link>
    );
  }

export default MusicButton;