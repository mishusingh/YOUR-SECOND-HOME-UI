import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './Button';
import './Navbar.css';
//import "bootstrap/dist/css/bootstrap.min.css";




function Navbar() {                                                         
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);
    const closeMobileMenu = () => setclick(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        
        }
        else{
            setButton(true);
        }

    };
    useEffect(() => {
        showButton();
      }, []);
    

    window.addEventListener('resize', showButton);
  return (
    <>

        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Your Second Home   <FontAwesomeIcon icon="home" />

                    </Link> 
                    <div className='menu-icon' onClick={handleClick}>
                        
                        {/* Menu <FontAwesomeIcon icon={click ? 'bars' : 'circleXmark' } /> */}
                        <FontAwesomeIcon icon="bars" />

                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home

                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Servies

                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us

                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up

                            </Link>
                        </li>
                        
                    </ul>
                    {button && <Button buttonstyle='btn--outline'>SIGN UP</Button>}
                 
            </div>

         

        </nav>
      
    </>
  );
}

export default Navbar
