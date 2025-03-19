import React, { useState } from 'react';
import '../App.css';
import logo from './assets/LOGO.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul className={menuOpen ? "turn" : ""}>
                    <li><a href="https://www.google.co.in/?client=safari&channel=mac_bm">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">FAQ'S</a></li>
                    <button className="get-in-touch-btn">Get in Touch</button>
                </ul>


                {/* Hamburger Menu */}
                <div className={`ham ${menuOpen ? "changed" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;