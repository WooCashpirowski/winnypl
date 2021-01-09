import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { HeaderStyled } from './HeaderStyled';
import { ImCart } from 'react-icons/im';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav(!showNav);
  const closeNav = () => setShowNav(false);

  return (
    <HeaderStyled>
      <button type="button" className="toggler" onClick={toggleNav}>
        {showNav ? <IoMdClose /> : <HiOutlineMenuAlt3 />}
      </button>
      <nav>
        <NavLink onClick={closeNav} className="logo" to="/">
          <img src={logo} alt="winny.pl" />
        </NavLink>
        <div className={showNav ? 'navbar active' : 'navbar'}>
          <div className="nav-links">
            <NavLink onClick={closeNav} className="nav-link" to="/">
              KATALOG
            </NavLink>
            <NavLink onClick={closeNav} className="nav-link" to="/">
              ZESTAWY
            </NavLink>
            <NavLink onClick={closeNav} className="nav-link" to="/">
              AKCESORIA
            </NavLink>
            <NavLink onClick={closeNav} className="nav-link" to="/">
              O NAS
            </NavLink>
          </div>
          <div className="user-nav">
            <div className="user-nav-links">
              <NavLink onClick={closeNav} className="nav-link" to="/">
                Zaloguj
              </NavLink>
              <NavLink onClick={closeNav} className="nav-link" to="/">
                <ImCart /> <span /> Koszyk
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
