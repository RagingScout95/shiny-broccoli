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
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
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
                </ul>
                {button && <Link to='/login' className='btn-mobile'> <Button  buttonStyle='btn--outline'>login</Button></Link>}
            </div>
        </nav>
    </>
  );
}

export default Navbar
