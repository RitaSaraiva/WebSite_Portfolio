import React from 'react';
import './Header.module.css';
import Logo from '../../src/Assets/Logo.png';

const Header = () => {

  return (
    <div>
        <img  src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;