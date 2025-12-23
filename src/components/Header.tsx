import React from "react";
import headerImage from '../assets/investment-calculator-logo.png';

const Header: React.FC = () => {
    return (
        <header id='header'>
            <img src={headerImage} alt="Investment Calculator Logo" />
            <h1>React Investment Calculator</h1>
        </header>
    )
}
export default Header;