import * as React from 'react';
import Logo from './ExamateSVG.svg';
import './structure.css';
import { Link } from "react-router-dom";

function ExamateLogo() {
    return (
        <Link exact to="/">
        <img src={Logo} style={{ width: 77, height: 77 }} alt="Examate logo" className='SVG'/>
        </Link>
    );
}

export default ExamateLogo;