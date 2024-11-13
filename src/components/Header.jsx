import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ cartCount, loggedInEmail, handleLogout }) {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" title="go to homepage">
          Home
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
        <Link to="/shoes">Shoes</Link>
        <Link to="/accessories">Accessories</Link>
      </nav>
      <nav className="account">
        <Link to="/cart">
          Cart (<span id="cartCount">{cartCount}</span>)
        </Link>
        {loggedInEmail ? (
          <Link onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;