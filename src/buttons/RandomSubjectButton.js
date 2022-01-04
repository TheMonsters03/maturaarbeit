import * as React from 'react';
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './buttons.css';

function RandomButton() {
  const randomRoute = {
    math: "math",
    chem: "chemistry",
    cs: "computer_science",
    music: "music",
    physics: "physics"
};

  const keys = Object.keys(randomRoute);
  const prop = keys[Math.floor(Math.random() * keys.length)];
  
  return (
      <Link to={'/' + prop}>
        <Card hoverable className='card' id="rcard">Random Subject</Card>
      </Link>
    );
  }

export default RandomButton;