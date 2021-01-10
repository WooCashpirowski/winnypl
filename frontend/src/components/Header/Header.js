import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { HeaderStyled } from './HeaderStyled';
import { ImCart, ImUser } from 'react-icons/im';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav(!showNav);
  const closeNav = () => setShowNav(false);
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setLastYPos(window.pageYOffset);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastYPos]);

  return (
    <HeaderStyled>
      <button
        type="button"
        className={lastYPos > 100 ? 'toggler small' : 'toggler'}
        onClick={toggleNav}
      >
        {showNav ? <IoMdClose /> : <HiOutlineMenuAlt3 />}
      </button>
      <nav className={lastYPos > 100 ? 'small' : ''}>
        <NavLink onClick={closeNav} className="logo" to="/">
          <img src={logo} alt="winny.pl" />
        </NavLink>
        <div className={showNav ? 'navbar active' : 'navbar'}>
          <div className="nav-links">
            <NavLink onClick={closeNav} className="nav-link" to="/katalog">
              KATALOG
            </NavLink>
            <NavLink onClick={closeNav} className="nav-link" to="/zestawy">
              ZESTAWY
            </NavLink>
            <NavLink onClick={closeNav} className="nav-link" to="/akcesoria">
              AKCESORIA
            </NavLink>
            <NavLink onClick={closeNav} className="nav-link" to="/o-nas">
              O NAS
            </NavLink>
          </div>
          <div className="user-nav">
            <div className="user-nav-links">
              <NavLink onClick={closeNav} className="nav-link" to="/zaloguj">
                <ImUser /> Zaloguj
              </NavLink>
              <NavLink onClick={closeNav} className="nav-link" to="/koszyk">
                <ImCart /> Koszyk
              </NavLink>
            </div>
            <input type="text" placeholder="Znajdź w naszym sklepie" />
          </div>
        </div>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
