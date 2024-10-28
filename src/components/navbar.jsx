import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logoName">
            <img src="logo.png" alt="Leonard Duero" style={{ width: 'auto' , height: '45px' }} />
        </div>
        <ul>
            <li>
                <a href="#hero">
                    Home
                </a>
            </li>
            <li>
                <a href="#about">
                    About
                </a>
            </li>
            <li>
                <a href="#projects">
                    Projects
                </a>
            </li>
            <li className="contactbtn">
                <a href="#contact">
                    Contact
                </a>
            </li>
        </ul>     
    </nav>
  );
};

export default Navbar;