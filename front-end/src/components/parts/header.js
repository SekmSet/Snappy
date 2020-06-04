import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap';

const Header = () => {
  const logoRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(logoRef.current, 1, { y: 0, x: -1200 }, { y: 0, x: 0 });
    TweenMax.fromTo(linksRef.current, 2, { x: 5000 }, { x: 0 });
  }, []);
  return (
    <nav className="navbar-container">
      <Link className="navbar-logo" to="/" ref={logoRef}>
        S.
      </Link>
      <div className="links-container">
        <ul className="links" ref={linksRef}>
          <li className="nav-link-container">
            <Link className="nav-link" to="/">
              .HOME
            </Link>
          </li>
          <li className="nav-link-container">
            <Link className="nav-link" to="/snap">
              .SNAP
            </Link>
          </li>
          <li className="nav-link-container">
            <Link className="nav-link" to="/snaps">
              .MESSAGERIE
            </Link>
          </li>
          <li className="nav-link-container">
            <Link className="nav-link" to="/logout">
              .LOGOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
