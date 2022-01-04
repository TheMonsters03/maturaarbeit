import * as React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

function ChemistryButton() {
    return (
    <Link to="/chemistry">
      <Button type="primary" disabled>Chem</Button>
    </Link>
    );
  }

export default ChemistryButton;