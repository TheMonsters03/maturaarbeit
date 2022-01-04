import * as React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

function HomeButton() {
    return (
    <Link exact to="/">
      <Button type="primary">Home</Button>
    </Link>
    );
  }

export default HomeButton;