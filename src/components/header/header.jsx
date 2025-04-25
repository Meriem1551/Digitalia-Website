import React, { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import '../../style/style.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Digitalia" className="h-13 px-4" />
                </div>

                {/* Menu Burger pour petits écrans */}
                <button
                    className="lg:hidden flex items-center space-x-2"
                    onClick={toggleMenu}
                >
                    <span className="block w-6 h-1 bg-dark-purple"></span>
                    <span className="block w-6 h-1 bg-dark-purple"></span>
                    <span className="block w-6 h-1 bg-dark-purple"></span>
                </button>

                {/* Navigation Desktop */}
                <nav className="hidden lg:flex space-x-10 text-md px-10">
                    <a href="#Accueil" className="nav-link">Accueil</a>
                    <a href="#Apropos" className="nav-link">À propos</a>
                    <a href="#Services" className="nav-link">Services</a>
                    <a href="#" className="nav-link">Projets</a>
                    <a href="#" className="nav-link">Avis client</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>

                {/* Navigation Mobile (Menu Burger) */}
                <div
                    className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-10 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
                >
                    <nav className="flex flex-col items-center space-y-8 pt-20">
                        <a href="#" className="nav-link">Accueil</a>
                        <a href="#" className="nav-link">À propos</a>
                        <a href="#" className="nav-link">Services</a>
                        <a href="#" className="nav-link">Projets</a>
                        <a href="#" className="nav-link">Avis client</a>
                        <a href="#" className="nav-link">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
