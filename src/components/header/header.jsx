import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Digitalia</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;