import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Jacek Maciejak
            <i class="fas fa-tools"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/o-nas' className='nav-links' onClick={closeMobileMenu}>
                                O nas
              </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/uslugi'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Usługi
              </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/nasze-realizacje'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Nasz realizacje
              </Link>
                        </li>
                        <li className='nav-item'>                            <Link
                            to='/kontakt'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Kontakt
              </Link></li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
              </Link>

                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
