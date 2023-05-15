import React from 'react';
import './header.css'
import logo from "./logo.png"

function Header() {
    return ( 
        <div className='header-container'>
            
            <nav className='navbar'>
                <img className='navbar-logo' src={logo}/> 
                <ul className='navbar-links'>
                <li> <a href='#'>Produtos </a> </li>
                <li> <a href='#'>Sobre </a></li>
                <li><a href='#'> Contatos </a> </li>
                </ul>
            </nav>
        </div>
     );
}

export default Header;