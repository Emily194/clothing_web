import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" title="go to homepage">
          Hola
        </a>
      </div>
      <nav className="nav-links">
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
        <Link to="/shoes">Shoes</Link>
        <Link to="/accessories">Accessories</Link>
      </nav>

      <nav className="account">
        <Link to="/signup">Sign Up</Link>
        <Link to="/cart">
          Cart (<span id="cartCount">0</span>)
        </Link>
      </nav>
    </header>
  );
}

export default Header;
