import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './Firebase';
// State:
import { useStateValue } from './StateProvider';
// Images and icons:
import Logo from './myZon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// Styling:
import './Header.css';

function Header() {
  const [{ cart, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="Company Logo"></img>
      </Link>
      <div className="header__search">
        <input type="edit" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns,</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Zon</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
