import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar-container">
      <a className="navbar-logo" href="/">
        S.
      </a>
      <div className="links-container">
        <ul className="links">
          <li className="nav-link-container">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-link-container">
            <Link className="nav-link" to="/snap">
              Snap
            </Link>
          </li>
          <li className="nav-link-container">
            <Link className="nav-link" to="/snaps">
              Messagerie
            </Link>
          </li>
          <li className="nav-link-container">
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
