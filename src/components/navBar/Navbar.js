import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () =>setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if(window.innerWidth<=960){
      setButton(false);
    }else{
      setButton(true);
    }
  }
  useEffect(() => {showButton();}, []);

  window.addEventListener('resize',showButton);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                  BestMeds
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/About_us' className='nav-links' onClick={closeMobileMenu}>
                      About us
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Cart' className='nav-links' onClick={closeMobileMenu}>
                      Cart
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Sign_up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </div>
        </nav>
    </>
  );
}

export default Navbar
