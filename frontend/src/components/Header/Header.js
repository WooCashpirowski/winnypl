import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/img/logo.svg";
import { HeaderStyled } from "./HeaderStyled";
import { ImCart, ImUser } from "react-icons/im";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../../redux/actions/userActions";
import SearchBox from "../SearchBox/SearchBox";

const Header = ({ history }) => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav(!showNav);
  const closeNav = () => setShowNav(false);
  const [lastYPos, setLastYPos] = useState(0);
  const [inCart, setInCart] = useState(0);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    function handleScroll() {
      setLastYPos(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastYPos]);

  useEffect(() => {
    if (cartItems) {
      const cartTotal = cartItems.reduce((acc, i) => i.qty + acc, 0);
      setInCart(cartTotal);
    }
  }, [cartItems]);

  const handleLogout = () => {
    dispatch(logout());
    closeNav();
    history.push("/");
  };

  console.log(cartItems);

  return (
    <HeaderStyled>
      <button
        type="button"
        className={lastYPos > 100 ? "toggler small" : "toggler"}
        onClick={toggleNav}
      >
        {showNav ? <IoMdClose /> : <HiOutlineMenuAlt3 />}
      </button>
      {userInfo && (
        <div className="profile-info">
          Witaj,{" "}
          {!userInfo.isAdmin ? (
            <NavLink to="/moje-konto">{userInfo.name}</NavLink>
          ) : (
            <>
              <DropdownButton
                menuAlign="right"
                title={`${userInfo.name}`}
                id="dropdown-menu-align-right"
              >
                <NavLink to="/moje-konto">Moje konto</NavLink>
                <NavLink to="/admin/uzytkownicy">Użytkownicy</NavLink>
                <NavLink to="/admin/produkty">Produkty</NavLink>
                <NavLink to="/admin/zamowienia">Zamówienia</NavLink>
              </DropdownButton>
            </>
          )}
        </div>
      )}
      <nav className={lastYPos > 100 ? "small" : ""}>
        <NavLink onClick={closeNav} className="logo" to="/">
          <img src={logo} alt="winny.pl" />
        </NavLink>
        <div className={showNav ? "navbar active" : "navbar"}>
          <div className="nav-links">
            <NavLink onClick={closeNav} className="nav-link" to="/katalog">
              KATALOG
            </NavLink>
            <NavLink onClick={closeNav} className="nav-link" to="/o-nas">
              O NAS
            </NavLink>
          </div>
          <div className="user-nav">
            <div className="user-nav-links">
              <NavLink onClick={closeNav} className="nav-link" to="/koszyk">
                <div className="cart-icon">
                  <ImCart />
                  <span>{inCart}</span>
                </div>
              </NavLink>
              {userInfo ? (
                <>
                  <NavLink
                    onClick={closeNav}
                    className="nav-link"
                    to="/moje-konto"
                  >
                    <ImUser />
                  </NavLink>
                  <div className="nav-link logout" onClick={handleLogout}>
                    <FiLogOut />
                  </div>
                </>
              ) : (
                <NavLink onClick={closeNav} className="nav-link" to="/zaloguj">
                  Zaloguj
                </NavLink>
              )}
            </div>
            <SearchBox />
          </div>
        </div>
      </nav>
    </HeaderStyled>
  );
};

export default withRouter(Header);
